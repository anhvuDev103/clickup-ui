import { getColor, getFontFamily } from '@uikit/utils';
import styled from 'styled-components';
import { layout, space, typography, variant } from 'styled-system';

import { TextProps, variants } from './types';

const styleVariants = {
  [variants.REGULAR12]: {
    fontSize: 12,
    fontWeight: 400,
    color: 'contentDefault',
  },
  [variants.MEDIUM12]: {
    fontSize: 12,
    fontWeight: 500,
    color: 'contentDefault',
  },
  [variants.SEMI12]: {
    fontSize: 12,
    fontWeight: 600,
    color: 'contentDefault',
  },
  [variants.BOLD12]: {
    fontSize: 12,
    fontWeight: 700,
    color: 'contentDefault',
  },
  [variants.REGULAR14]: {
    fontSize: 14,
    fontWeight: 400,
    color: 'contentDefault',
    lineHeight: '16px',
  },
  [variants.MEDIUM14]: {
    fontSize: 14,
    fontWeight: 500,
    color: 'contentDefault',
    lineHeight: '16px',
  },
  [variants.SEMI14]: {
    fontSize: 14,
    fontWeight: 600,
    color: 'contentDefault',
    lineHeight: '16px',
  },
  [variants.BOLD14]: {
    fontSize: 14,
    fontWeight: 700,
    color: 'contentDefault',
    lineHeight: '16px',
  },
  [variants.REGULAR16]: {
    fontSize: 16,
    fontWeight: 400,
    color: 'contentDefault',
  },
  [variants.MEDIUM16]: {
    fontSize: 16,
    fontWeight: 500,
    color: 'contentDefault',
  },
  [variants.SEMI16]: {
    fontSize: 16,
    fontWeight: 600,
    color: 'contentDefault',
  },
  [variants.BOLD16]: {
    fontSize: 16,
    fontWeight: 700,
    color: 'contentDefault',
  },
};

const Text = styled.div<TextProps>`
  ${variant({
    variants: styleVariants,
  })};

  font-family: ${getFontFamily};
  color: ${getColor};
  line-height: 140%;

  user-select: none;

  ${space};
  ${typography};
  ${layout};
`;

Text.defaultProps = {
  variant: variants.REGULAR12,
  color: 'contentDefault',
};

export default Text;
