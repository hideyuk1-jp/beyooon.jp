import { baseTheme } from '../styles/theme';

export type ColorMode = 'light' | 'dark';

export type Theme = typeof baseTheme;

export interface ThemeContextType {
  colorMode: ColorMode;
  setColorMode: () => void;
}

export type Posts = ReadonlyArray<Post>;

export type Post = Pick<
  GatsbyTypes.MarkdownRemark,
  'excerpt' | 'timeToRead'
> & {
  readonly fields: GatsbyTypes.Maybe<
    Pick<GatsbyTypes.Fields, 'slug'>
  >;
  readonly frontmatter: GatsbyTypes.Maybe<
    Pick<
      GatsbyTypes.Frontmatter,
      | 'date'
      | 'update'
      | 'title'
      | 'description'
      | 'category'
      | 'tags'
    > & {
      readonly image: GatsbyTypes.Maybe<{
        readonly childImageSharp: GatsbyTypes.Maybe<{
          readonly fluid: GatsbyTypes.Maybe<
            GatsbyTypes.GatsbyImageSharpFluidFragment
          >;
        }>;
      }>;
    }
  >;
};
