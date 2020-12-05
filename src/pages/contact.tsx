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

    &::after {
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

const FormWrapper = styled.div`
  form {
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-gap: 16px;

    label {
      padding: 8px 0px 0px 0px;
      margin-bottom: -8px;

      &.option {
        color: ${(props) => props.theme.colors.light};
      }
    }

    label,
    input,
    textarea,
    button,
    .select-wrapper {
      grid-column: 1 / 3;
    }

    @media screen and (min-width: ${(props) =>
        props.theme.responsive.medium}) {
      label {
        grid-column: 1 / 2;
        padding: 8px 0px;
      }

      input,
      textarea,
      button,
      .select-wrapper {
        grid-column: 2 / 3;
      }
    }

    input,
    textarea,
    button,
    select {
      appearance: none;
      border: 1px solid
        ${(props) => props.theme.colors.border};
      border-radius: 8px;
      padding: 8px 16px;
      color: ${(props) => props.theme.colors.base};
      background: ${(props) =>
        props.theme.colors.backgroundAccent};
      transition: ${(props) =>
        props.theme.colorModeTransition};

      &:focus {
        outline: none;
        border: 1px solid
          ${(props) => props.theme.colors.base};
      }
    }

    select {
      width: 100%;
    }

    .select-wrapper {
      position: relative;

      &::after {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        right: 16px;
        width: 6px;
        height: 6px;
        border-bottom: solid 2px
          ${(props) => props.theme.colors.light};
        border-right: solid 2px
          ${(props) => props.theme.colors.light};
        transform: translateY(-50%) rotate(45deg);
      }
    }
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
        </div>
      </Hero>
      <section className="by-spacer">
        <header className="by-section-head by-container-small">
          <p>
            <a
              href={`https://twitter.com/${
                data.site?.siteMetadata?.social?.twitter ||
                ``
              }`}
            >
              Twitter
            </a>
            {`からダイレクトメッセージを送っていただくか、下のフォームからお問い合わせください。`}
          </p>
        </header>
        <FormWrapper className="by-container-small">
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
            <label>{`メールアドレス`}</label>
            <input type="email" name="email" id="email" />
            <label>{`お名前`}</label>
            <input type="text" name="name" id="name" />
            <label className="option">{`会社名（オプション）`}</label>
            <input
              type="text"
              name="company-name"
              id="company-name"
            />
            <label>{`お問い合わせの種類`}</label>
            <div className="select-wrapper">
              <select name="category" id="category">
                <option
                  disabled
                  selected
                >{`選択してください`}</option>
                <option value="web">{`Web制作を依頼したい`}</option>
                <option value="app">{`アプリ開発を依頼したい`}</option>
                <option value="blg">{`ブログについて`}</option>
                <option value="others">{`その他`}</option>
              </select>
            </div>
            <label>{`お問い合わせの内容`}</label>
            <textarea
              name="message"
              id="message"
              rows={10}
            />
            <button
              className="by-btn by-btn-primary"
              type="submit"
            >{`送信`}</button>
          </form>
        </FormWrapper>
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
        social {
          twitter
        }
      }
    }
  }
`;
