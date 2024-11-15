import { getColor, getFontFamily } from '@uikit/utils';
import styled from 'styled-components';
import { layout, space, typography, variant } from 'styled-system';

import { TextProps, variants } from './types';

const styleVariants = {
  [variants.REGULAR12]: {
    fontSize: 12,
    fontWeight: 400,
  },
  [variants.MEDIUM12]: {
    fontSize: 12,
    fontWeight: 500,
  },
  [variants.SEMI12]: {
    fontSize: 12,
    fontWeight: 600,
  },
  [variants.BOLD12]: {
    fontSize: 12,
    fontWeight: 700,
  },
  [variants.REGULAR14]: {
    fontSize: 14,
    fontWeight: 400,

    lineHeight: '16px',
  },
  [variants.MEDIUM14]: {
    fontSize: 14,
    fontWeight: 500,

    lineHeight: '16px',
  },
  [variants.SEMI14]: {
    fontSize: 14,
    fontWeight: 600,

    lineHeight: '16px',
  },
  [variants.BOLD14]: {
    fontSize: 14,
    fontWeight: 700,

    lineHeight: '16px',
  },
  [variants.REGULAR16]: {
    fontSize: 16,
    fontWeight: 400,
  },
  [variants.MEDIUM16]: {
    fontSize: 16,
    fontWeight: 500,
  },
  [variants.SEMI16]: {
    fontSize: 16,
    fontWeight: 600,
  },
  [variants.BOLD16]: {
    fontSize: 16,
    fontWeight: 700,
  },
  [variants.REGULAR24]: {
    fontSize: 24,
    fontWeight: 400,
  },
  [variants.MEDIUM24]: {
    fontSize: 24,
    fontWeight: 500,
  },
  [variants.SEMI24]: {
    fontSize: 24,
    fontWeight: 600,
  },
  [variants.BOLD24]: {
    fontSize: 24,
    fontWeight: 700,
  },
};

const Text = styled.div<TextProps>`
  line-height: 1.5;
  max-height: 100%;

  ${variant({
    variants: styleVariants,
  })};

  font-family: ${getFontFamily};
  color: ${getColor};

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
