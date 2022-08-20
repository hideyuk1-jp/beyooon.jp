const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  /*
   * Create Blog Pages
   */

  // Define a template for blog post
  const blogTemplate = path.resolve(`./src/templates/blog-post.tsx`);

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allBlogPosts: allMarkdownRemark(
          filter: {
            fields: { draft: { eq: false }, collection: { eq: "blog" } }
          }
          sort: { fields: [frontmatter___update], order: ASC }
        ) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
        allWorksPosts: allMarkdownRemark(
          filter: {
            fields: { draft: { eq: false }, collection: { eq: "works" } }
          }
          sort: { fields: [frontmatter___startDate], order: ASC }
        ) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `,
  );

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your posts`,
      result.errors,
    );
    return;
  }

  const blogPosts = result.data.allBlogPosts.nodes;

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (blogPosts.length > 0) {
    blogPosts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : blogPosts[index - 1].id;
      const nextPostId =
        index === blogPosts.length - 1 ? null : blogPosts[index + 1].id;

      createPage({
        path: post.fields.slug,
        component: blogTemplate,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      });
    });
  }

  /*
   * Create Works Pages
   */

  // Define a template for work post
  const worksTemplate = path.resolve(`./src/templates/works-post.tsx`);

  const worksPosts = result.data.allWorksPosts.nodes;

  if (worksPosts.length > 0) {
    worksPosts.forEach((post) => {
      createPage({
        path: post.fields.slug,
        component: worksTemplate,
        context: {
          id: post.id,
        },
      });
    });
  }
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    const parent = getNode(node.parent);

    createNodeField({
      name: `collection`,
      node,
      value: parent.sourceInstanceName,
    });

    createNodeField({
      name: `slug`,
      node,
      value: `/${parent.sourceInstanceName}${value}`,
    });
  }
};
