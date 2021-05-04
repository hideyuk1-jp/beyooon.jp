import React from 'react';
import { graphql, Link, PageProps } from 'gatsby';

import styled from '../components/atoms/styled';
import Layout from '../components/templates/layout';
import SEO from '../components/organisms/seo';
import PageHero from '../components/organisms/hero';

const AboutIndex: React.FC<
  PageProps<GatsbyTypes.AboutIndexQuery>
> = ({ data, location }) => {
  const siteTitle =
    data.site?.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={`About`} />
      <PageHero title="beyooonとは" />
      <Wrapper>
        <section className="about-section-item">
          <header className="by-section-head by-container-small">
            <h2>{`デジタルなモノづくりが好きなフリーランス`}</h2>
          </header>
          <div className="by-container-small">
            <p>{`兵庫県姫路市を拠点にWeb制作 / アプリ開発などを中心にお客さまのビジネスをお手伝いしたり、オリジナルアプリを作ったりしています。`}</p>
            <p>{`技術自体も好きですが、技術の先にあるプロダクトの成功に重きを置いて活動しています。`}</p>
          </div>
        </section>
        <section className="about-section-item">
          <header className="by-section-head by-container-small">
            <h2>{`beyooonの意味`}</h2>
          </header>
          <div className="by-container-small">
            <p>{`デジタルなプロダクト作りを通してお客さまも自分自身もバネのように跳躍していく。そんな思いを込めて「beyooon（ビヨーン）」と付けました。`}</p>
            <p>{`「～を越えて」といった意味で英単語のbeyondともかけています。`}</p>
          </div>
        </section>
        <section className="about-section-item">
          <header className="by-section-head by-container-small">
            <h2>{`事業概要`}</h2>
          </header>
          <div className="by-container-small">
            <table>
              <tbody>
                <tr>
                  <th>{`屋号`}</th>
                  <td>{`beyooon（ビヨーン）`}</td>
                </tr>
                <tr>
                  <th>{`事業形態`}</th>
                  <td>{`個人事業主（フリーランス）`}</td>
                </tr>
                <tr>
                  <th>{`事業内容`}</th>
                  <td>{`Web制作 / アプリ開発など`}</td>
                </tr>
                <tr>
                  <th>{`代表`}</th>
                  <td>{`橋本 英之`}</td>
                </tr>
                <tr>
                  <th>{`所在地`}</th>
                  <td>
                    {`兵庫県姫路市（自宅のため市までの記載としています）`}
                  </td>
                </tr>
                <tr>
                  <th>{`連絡先`}</th>
                  <td>
                    <Link
                      to="/contact"
                      aria-label="Contact"
                    >
                      {`お問い合わせ`}
                    </Link>
                    {`よりお願いします`}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="about-section-item">
          <header className="by-section-head by-container-small">
            <h2>{`代表プロフィール`}</h2>
          </header>
          <div className="by-container-small">
            <h3>{`橋本 英之 / Hideyuki Hashimoto`}</h3>
            <p>{`1986年生まれ。男`}</p>
          </div>
          <div className="by-container-small">
            <h3>{`略歴`}</h3>
            <p>
              {`高校生の時に初めて趣味のWebサイトを制作し、Webの世界に触れる。（当時はガラケーでポチポチHTMLを直書きしていました）`}
              {`大阪大学では情報システムを専攻し、コンピュータサイエンスの基礎を学ぶ。`}
              {`その後、会計事務所へ就職。プログラミングの知識を活用して業務効率化を行う。`}
              {`Webシステム開発会社へ転職後はバックエンドエンジニアとして従事。`}
              {`2020年、フリーランスのWeb開発者として独立。`}
            </p>
          </div>
          <div className="by-container-small">
            <h3>{`資格`}</h3>
            <ul>
              <li>{`LPIC level1`}</li>
              <li>{`AWS認定SysOpsアドミニストレーター -
                アソシエイト`}</li>
              <li>{`AWS認定デベロッパー - アソシエイト`}</li>
              <li>{`AWS認定ソリューションアーキテクト - アソシエイト`}</li>
              <li>{`Python3エンジニア認定データ分析試験`}</li>
              <li>{`AWS認定クラウドプラクティショナー`}</li>
              <li>{`Python3エンジニア認定基礎試験`}</li>
              <li>{`日商簿記2級`}</li>
              <li>{`Excel VBA Standard`}</li>
              <li>{`ほめ達検定3級、2級`}</li>
              <li>{`Microsoft Office Specialist 2013 Master`}</li>
              <li>{`応用情報技術者`}</li>
            </ul>
          </div>
          <div className="by-container-small">
            <h3>{`スキル`}</h3>
            <ul>
              <li>{`PHP / Laravel`}</li>
              <li>{`React / Next.js / Gatsby`}</li>
              <li>{`Flutter`}</li>
              <li>{`WordPress`}</li>
            </ul>
          </div>
          <div className="by-container-small">
            <h3>{`趣味`}</h3>
            <ul>
              <li>{`映画`}</li>
              <li>{`カラオケ`}</li>
              <li>
                {`競技プログラミング（`}
                <a href="https://atcoder.jp/users/hideyuk1">
                  {`AtCoder`}
                </a>
                {`）`}
              </li>
              <li>{`絵`}</li>
              <li>{`筋トレ`}</li>
            </ul>
          </div>
        </section>
      </Wrapper>
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

const Wrapper = styled.div`
  .about-section-item {
    padding: 64px 0px 32px;
  }

  h3 {
    padding-bottom: 16px;
  }

  p {
    padding-bottom: 24px;
    line-height: 2em;
  }

  ul,
  ol {
    list-style: none;
    margin: 0 16px 24px 24px;
    padding: 0px;
  }

  li {
    margin-bottom: 8px;

    &::before {
      display: inline-block;
      position: absolute;
      margin-left: -16px;
      color: ${(props) => props.theme.colors.light};
    }

    p {
      margin: 0px;
    }

    & > ul {
      margin-top: 8px;
      margin-bottom: 0px;
    }
  }

  ul li {
    &::before {
      content: '–';
    }
  }

  ol {
    counter-reset: number 0;

    li {
      &::before {
        content: counter(number);
        counter-increment: number 1;
      }
    }
  }

  table {
    width: 100%;
    overflow: auto;
    max-width: 100%;
    margin-bottom: 0;
    border-spacing: 0;
    border-collapse: collapse;

    tr {
      vertical-align: middle;

      th,
      td {
        text-align: left;
        padding: 16px;
        border-top: 1px solid
          ${(props) => props.theme.colors.border};
      }

      &:first-of-type {
        th,
        td {
          border: none;
        }
      }
    }
  }
`;
