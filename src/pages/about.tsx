import React, { useMemo } from 'react';
import { graphql, PageProps } from 'gatsby';

import styled from '@emotion/styled';
import Layout from '../components/templates/layout';
import SEO from '../components/organisms/seo';
import PageHero from '../components/organisms/hero';
import Timeline from '../components/organisms/timeline';
import { Twemoji } from 'react-emoji-render';
import moment from 'moment-timezone';

const timelineData = [
  {
    during: '2021.03 - Now',
    title: 'learningBOX株式会社',
    content: (
      <>
        <p>
          自社eラーニングサービスの開発。
          <br />
          フロントエンドをメインに担当しながら、チームのタスク状況により一部バックエンドも担当。
          <br />
          フロントエンドチームのリード、開発チーム全体のマネージメントを経験。
        </p>
        <h4>やったこと</h4>
        <ul>
          <li>
            開発チーム全体のマネージャー (2024年1月〜現在)
            <ul>
              <li>フロントエンドチームのリードは継続（詳細は次項目を参照）</li>
              <li>開発フローの効率化</li>
              <li>リリースサイクルの短期化</li>
              <li>モブプロ・ペアプロの推進</li>
            </ul>
          </li>
          <li>
            フロントエンドチームのリード (2022年7月〜)
            <ul>
              <li>フロントエンド開発（一部バックエンド）</li>
              <li>PRレビュー・相談</li>
              <li>技術選定</li>
              <li>
                レガシーフロントエンドのモダン化
                <ul>
                  <li>
                    主要サービスである学習画面のReactへの全面リプレイスなど
                  </li>
                </ul>
              </li>
              <li>
                デザインシステムの構築
                <ul>
                  <li>Storybookを用いた社内UIライブラリの作成</li>
                </ul>
              </li>
              <li>自動テストの推進</li>
              <li>開発環境の改善（CIの改善、ビルド高速化）</li>
            </ul>
          </li>
          <li>
            フロンエンドチームメンバー (2021年3月〜)
            <ul>
              <li>フロントエンド開発（一部バックエンド）</li>
            </ul>
          </li>
        </ul>
        <h4>使用技術</h4>
        <ul>
          <li>React / TypeScript / JavaScript</li>
          <li>Jest / React Testing Library</li>
          <li>webpack</li>
          <li>Storybook / Chromatic</li>
          <li>PHP / MySQL</li>
          <li>AWS</li>
          <li>CircleCI / GitHub Actions</li>
          <li>など</li>
        </ul>
      </>
    ),
  },
  {
    during: '2020.06 - 2021.04',
    title: '個人事業主',
    content: (
      <>
        <p>主にフロントエンドの受託開発。</p>
        <ul>
          <li>
            教育系ポータルサイトの新規開発
            <ul>
              <li>Vue / Nuxt.js</li>
            </ul>
          </li>
          <li>
            スポーツ系コーポレートサイトの改修開発
            <ul>
              <li>Vue / Nuxt.js </li>
            </ul>
          </li>
          <li>
            Chrome拡張機能開発
            <ul>
              <li>JavaScript</li>
            </ul>
          </li>
          <li>など</li>
        </ul>
      </>
    ),
  },
  {
    during: '2019.09 - 2019.12',
    title: '株式会社CI',
    content: (
      <>
        <p>受託開発。</p>
        <ul>
          <li>
            M&Aプラットフォームのバックエンド開発（一部フロントエンド）
            <ul>
              <li>PHP / Laravel</li>
            </ul>
          </li>
          <li>
            アルバイト系アプリのテスター・不具合原因箇所の特定
            <ul>
              <li>React Native</li>
            </ul>
          </li>
          <li>など</li>
        </ul>
      </>
    ),
  },
  {
    during: '2016.01 - 2019.09',
    title: '橋本税理士事務所',
    content: (
      <>
        <ul>
          <li>財務・税理業務</li>
          <li>
            Excel VBA を使った業務の自動化
            <ul>
              <li>
                クライアントの取引内容の文字列から勘定科目や課税種類を推測して自動仕訳するシステム
              </li>
              <li>
                クライアントの独自データから会計ソフトにインポート可能なフォーマットに変換するシステム
              </li>
              <li>などを作成</li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
];

/** 現在エンジニアキャリア何年目か計算 */
const calcCareerYears = () =>
  Math.ceil(
    (Number(moment().tz('Asia/Tokyo').format('YYYYMM')) - 201909) / 100 +
      0.00001,
  );

const AboutIndex: React.FC<PageProps<GatsbyTypes.AboutIndexQuery>> = ({
  data,
  location,
}) => {
  const siteTitle = data.site?.siteMetadata?.title || `Title`;

  const careerYears = useMemo(() => calcCareerYears(), []);

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <PageHero title="About" />
      <Wrapper>
        <section className="about-section-item by-container-small">
          <header className="by-section-head">
            <h2>概要</h2>
          </header>
          <div>
            <p>
              {`32歳の時に一念発起して異業種からWebエンジニアにキャリアチェンジし現在${careerYears}年目。`}
              <br />
              <br />
              テックリード経験のあるフロントエンドが最も得意。バックエンドも担当してきており貢献が可能。
              <br />
              今後もフロントエンドを主軸に隣接領域についても柔軟に対応が可能なエンジニアとして、素早く価値が提供出来るようにスキルを磨いていきたい。
              <br />
              <br />
              5〜20名程度の開発チームのタスク・ピープルマネジメントの経験あり。
            </p>
          </div>
        </section>

        <section className="about-section-item by-container-small">
          <header className="by-section-head">
            <h2>職務経歴</h2>
          </header>
          <div>
            <Timeline data={timelineData} />
          </div>
        </section>

        <section className="about-section-item by-container-small">
          <header className="by-section-head">
            <h2>資格</h2>
          </header>
          <div>
            <ul>
              <li>情報セキュリティマネジメント試験</li>
              <li>LPIC level1</li>
              <li>AWS認定SysOpsアドミニストレーター - アソシエイト</li>
              <li>AWS認定デベロッパー - アソシエイト</li>
              <li>AWS認定ソリューションアーキテクト - アソシエイト</li>
              <li>Python3エンジニア認定データ分析試験</li>
              <li>AWS認定クラウドプラクティショナー</li>
              <li>Python3エンジニア認定基礎試験</li>
              <li>日商簿記2級</li>
              <li>Excel VBA Standard</li>
              <li>ほめ達検定3級、2級</li>
              <li>Microsoft Office Specialist 2013 Master</li>
              <li>応用情報技術者</li>
            </ul>
          </div>
        </section>

        <section className="about-section-item">
          <header className="by-section-head by-container-small">
            <h2>プロフィール</h2>
          </header>
          <div className="by-container-small">
            <table>
              <tbody>
                <tr>
                  <th>名前</th>
                  <td>Hideyuki Hashimoto</td>
                </tr>
                <tr>
                  <th>性別</th>
                  <td>男</td>
                </tr>
                <tr>
                  <th>出身</th>
                  <td>兵庫県</td>
                </tr>
                <tr>
                  <th>座右の銘</th>
                  <td>
                    楽するための努力は惜しまない{' '}
                    <Twemoji onlyEmojiClassName="emoji" svg text="💪" />
                  </td>
                </tr>
                <tr>
                  <th>趣味</th>
                  <td>
                    開発、映画、筋トレ、カラオケ、競技プログラミング（
                    <a href="https://atcoder.jp/users/hideyuk1">{`AtCoder`}</a>
                    ）
                  </td>
                </tr>
              </tbody>
            </table>
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

    &:last-of-type {
      padding-bottom: 64px;
    }

    & > :last-of-type {
      margin-bottom: 0;
      padding-bottom: 0;
    }
  }

  h3 {
    padding-bottom: 16px;
  }

  h4 {
    padding-bottom: 8px;
  }

  p:not(.during) {
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
        border-top: 1px solid ${(props) => props.theme.colors.border};
      }

      &:first-of-type {
        th,
        td {
          border: none;
        }
      }
    }
  }

  .emoji {
    display: inline-block;
  }
`;
