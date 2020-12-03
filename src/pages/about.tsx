import React from 'react';
import { graphql, PageProps } from 'gatsby';

import styled from '../components/styled';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Hero = styled.header`
  text-align: center;

  h2 {
    position: relative;
    display: block;
    font-size: 3.2rem;
    font-weight: 700;
    padding-bottom: 26px;
    line-height: 1.15;

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-40px);
      width: 80px;
      height: 4px;
      border-radius: 2px;
      background: ${(props) => props.theme.colors.gradient};
    }
  }

  p {
    padding-top: 24px;
    color: ${(props) => props.theme.colors.light};
  }
`;

const AboutIndex: React.FC<PageProps<
  GatsbyTypes.AboutIndexQuery
>> = ({ data, location }) => {
  const siteTitle =
    data.site?.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={`About`} />
      <Hero className="by-hero by-spacer">
        <div className="by-container">
          <h2>{`beyooonとは`}</h2>
          <p>
            {`Web制作やアプリ開発を中心に活動するフリーランスのWeb Developerです。`}
          </p>
        </div>
      </Hero>
      <section className="by-spacer">
        {`ここに内容書く`}
      </section>
    </Layout>
  );
};

export default AboutIndex;

export const pageQuery = graphql`
  query AboutIndex {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
