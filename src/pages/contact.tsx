import React, { useState } from 'react';
import { graphql, PageProps } from 'gatsby';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikProps,
  FormikHelpers,
} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

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
    .form-field,
    button {
      grid-column: 1 / 3;
    }

    .error-msg {
      color: red;
      padding: 8px 16px 0px;
    }

    @media screen and (min-width: ${(props) =>
        props.theme.responsive.medium}) {
      label {
        grid-column: 1 / 2;
        padding: 8px 0px;
      }

      .form-field,
      button {
        grid-column: 2 / 3;
      }
    }

    input,
    textarea,
    button,
    select {
      display: block;
      width: 100%;
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

    .by-btn {
      svg.send-icon,
      svg.load-icon,
      svg.success-icon,
      svg.fail-icon {
        width: 16px;
        height: 16px;
      }

      svg.send-icon,
      svg.load-icon {
        fill: ${(props) => props.theme.colors.background};
      }

      svg.load-icon {
        animation: 2s linear infinite rotation;
      }

      @keyframes rotation {
        0% {
          transform: rotate(0);
        }
        100% {
          transform: rotate(-360deg);
        }
      }

      svg.success-icon {
        fill: green;
      }

      svg.fail-icon {
        fill: red;
      }

      &:hover {
        svg.send-icon,
        svg.load-icon {
          fill: ${(props) => props.theme.colors.base};
        }
      }
    }
  }
`;

const IconWrapper = styled.div`
  line-height: 0;
  margin-right: 4px;
`;

const CONTACT_CATEGORIES = [
  'Web制作を依頼したい',
  'アプリ開発を依頼したい',
  'ブログについて',
  'その他',
];

type FormValues = {
  'bot-field': string;
  'form-name': string;
  email: string;
  name: string;
  company: string;
  category: string;
  message: string;
};

type FormStateValues = '' | 'loading' | 'success' | 'fail';

const ContactIndex: React.FC<PageProps<
  GatsbyTypes.ContactIndexQuery
>> = ({ data, location }) => {
  const siteTitle =
    data.site?.siteMetadata?.title || `Title`;
  const [formState, setFormState] = useState<
    FormStateValues
  >('');

  const initialValues = {
    'bot-field': '',
    'form-name': 'contact',
    email: '',
    name: '',
    company: '',
    category: '',
    message: '',
  };

  const validationScheme = Yup.object().shape({
    email: Yup.string()
      .email('おや？メールアドレスの形式に誤りがありますよ')
      .required('おっと！メールアドレスは必須です'),
    name: Yup.string().required('おっと！お名前は必須です'),
    company: Yup.string(),
    category: Yup.string()
      .oneOf(
        CONTACT_CATEGORIES,
        'おっと！お問い合わせの種類は必ず選択してください',
      )
      .required(
        'おっと！お問い合わせの種類は必ず選択してください',
      ),
    message: Yup.string().required(
      'おっと！お問い合わせの内容は必須です',
    ),
  });

  const handleSubmit: (
    values: FormValues,
    actions: FormikHelpers<FormValues>,
  ) => void = (values, actions) => {
    actions.setSubmitting(true);
    setFormState('loading');

    setTimeout(() => {
      axios({
        method: 'POST',
        headers: {
          'Content-Type':
            'application/x-www-form-urlencoded',
        },
        data: values,
        url: '/',
      })
        .then((res) => {
          setFormState(
            res.status === 200 ? 'success' : 'fail',
          );
          if (formState === 'success') actions.resetForm();
          actions.setSubmitting(false);
          setTimeout(() => setFormState(''), 5000);
        })
        .catch((err) => {
          setFormState('fail');
          actions.setSubmitting(false);
          setTimeout(() => setFormState(''), 5000);
        });
    }, 3000);
  };

  const renderForm: React.FC<FormikProps<FormValues>> = ({
    isSubmitting,
  }) => (
    <Form
      noValidate
      name="contact"
      method="POST"
      data-netlify="true"
    >
      <Field type="hidden" name="bot-field" />
      <Field
        type="hidden"
        name="form-name"
        value="contact"
      />
      <label>{`メールアドレス`}</label>
      <div className="form-field">
        <Field type="email" name="email" id="email" />
        <div className="error-msg">
          <ErrorMessage name="email" />
        </div>
      </div>
      <label>{`お名前`}</label>
      <div className="form-field">
        <Field type="text" name="name" id="name" />
        <div className="error-msg">
          <ErrorMessage name="name" />
        </div>
      </div>
      <label className="option">{`会社名（オプション）`}</label>
      <div className="form-field">
        <Field type="text" name="company" id="company" />
        <div className="error-msg">
          <ErrorMessage name="company" />
        </div>
      </div>
      <label>{`お問い合わせの種類`}</label>
      <div className="form-field">
        <div className="select-wrapper">
          <Field as="select" name="category" id="category">
            <option>{`選択してください`}</option>
            {CONTACT_CATEGORIES.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </Field>
        </div>
        <div className="error-msg">
          <ErrorMessage name="category" />
        </div>
      </div>
      <label>{`お問い合わせの内容`}</label>
      <div className="form-field">
        <Field
          as="textarea"
          name="message"
          id="message"
          rows={10}
        />
        <div className="error-msg">
          <ErrorMessage name="message" />
        </div>
      </div>
      <button
        className="by-btn by-btn-primary"
        type="submit"
        disabled={isSubmitting}
      >
        {formState === 'loading' ? (
          <>
            <IconWrapper>
              <svg
                className="load-icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" />
              </svg>
            </IconWrapper>
            {`送信しています`}
          </>
        ) : formState === 'success' ? (
          <>
            <IconWrapper>
              <svg
                className="success-icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            </IconWrapper>
            {`送信に成功しました`}
          </>
        ) : formState === 'fail' ? (
          <>
            <IconWrapper>
              <svg
                className="fail-icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
              </svg>
            </IconWrapper>
            {`送信に失敗しました`}
          </>
        ) : (
          <>
            <IconWrapper>
              <svg
                className="send-icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </IconWrapper>
            {`送信`}
          </>
        )}
      </button>
    </Form>
  );

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
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationScheme}
          >
            {renderForm}
          </Formik>
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
