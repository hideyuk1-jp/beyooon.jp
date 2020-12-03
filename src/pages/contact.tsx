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

const ContactIndex: React.FC<PageProps<
  GatsbyTypes.ContactIndexQuery
>> = ({ data, location }) => {
  const siteTitle =
    data.site?.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={`Contact`} />
      <Hero className="by-hero by-spacer">
        <div className="by-container">
          <h2>{`お問い合わせ`}</h2>
          <p>
            {`仕事のご依頼、ブログに関することなどお気軽にお問い合わせください。`}
          </p>
        </div>
      </Hero>
      <section className="by-spacer by-container">
        <form
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
        >
          <input type="hidden" name="bot-field" />
          <input
            type="hidden"
            name="form-name"
            value="contact"
          />
          <label>
            名前
            <input type="text" name="name" id="name" />
          </label>
          <label>
            メールアドレス
            <input type="email" name="email" id="email" />
          </label>
          <label>
            お問い合わせ種類
            <input
              type="text"
              name="subject"
              id="subject"
            />
          </label>
          <label>
            内容
            <textarea
              name="message"
              id="message"
              rows={5}
            />
          </label>
          <button type="submit">Send</button>
          <input type="reset" value="Clear" />
        </form>
      </section>
    </Layout>
  );
};

export default ContactIndex;

export const pageQuery = graphql`
  query ContactIndex {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
