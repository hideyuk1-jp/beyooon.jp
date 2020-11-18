// emotionのstyledに型情報を持たせた
import styled, { CreateStyled } from '@emotion/styled';
import { baseTheme } from '../styles/theme';

export type Theme = typeof baseTheme;

export default styled as CreateStyled<Theme>;
