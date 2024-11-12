/// <reference types="vite/client" />

import { ColorTokens } from '@configs/ui/tokens/types';
import { Instance } from 'tippy.js';

type Color = keyof ColorTokens['colors'] | (string & {});

declare global {
  interface HTMLElement {
    _tippy?: Instance;
  }
}
