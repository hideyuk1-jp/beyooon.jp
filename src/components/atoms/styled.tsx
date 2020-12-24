// emotionのstyledに型情報を持たせた
import styled, { CreateStyled } from '@emotion/styled';
import { Theme } from '../../types';

export default styled as CreateStyled<Theme>;
