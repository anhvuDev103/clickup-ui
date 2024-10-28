/// <reference types="vite/client" />

import { ColorTokens } from '@configs/ui/tokens/types';

type Color = keyof ColorTokens['colors'] | (string & {});
