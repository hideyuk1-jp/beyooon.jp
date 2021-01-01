import { baseTheme } from '../styles/theme';

export type ColorMode = 'light' | 'dark';

export type Theme = typeof baseTheme;

export interface ThemeContextType {
  colorMode: ColorMode;
  setColorMode: () => void;
}

export type BlogPosts = ReadonlyArray<BlogPost>;

export type BlogPost = Pick<
  GatsbyTypes.MarkdownRemark,
  'excerpt' | 'timeToRead'
> & {
  readonly fields: GatsbyTypes.Maybe<
    Pick<GatsbyTypes.MarkdownRemarkFields, 'slug'>
  >;
  readonly frontmatter: GatsbyTypes.Maybe<
    Pick<
      GatsbyTypes.MarkdownRemarkFrontmatter,
      | 'date'
      | 'update'
      | 'title'
      | 'description'
      | 'category'
      | 'tags'
    > & {
      readonly image: GatsbyTypes.Maybe<{
        readonly childImageSharp: GatsbyTypes.Maybe<{
          readonly fluid: GatsbyTypes.Maybe<GatsbyTypes.GatsbyImageSharpFluidFragment>;
        }>;
      }>;
    }
  >;
};

export type WorksPosts = ReadonlyArray<WorksPost>;

export type WorksPost = Pick<
  GatsbyTypes.MarkdownRemark,
  'excerpt'
> & {
  readonly fields: GatsbyTypes.Maybe<
    Pick<GatsbyTypes.MarkdownRemarkFields, 'slug'>
  >;
  readonly frontmatter: GatsbyTypes.Maybe<
    Pick<
      GatsbyTypes.MarkdownRemarkFrontmatter,
      | 'startDate'
      | 'endDate'
      | 'description'
      | 'title'
      | 'category'
      | 'skills'
      | 'link'
    > & {
      readonly image: GatsbyTypes.Maybe<{
        readonly childImageSharp: GatsbyTypes.Maybe<{
          readonly fluid: GatsbyTypes.Maybe<GatsbyTypes.GatsbyImageSharpFluidFragment>;
        }>;
      }>;
    }
  >;
};
