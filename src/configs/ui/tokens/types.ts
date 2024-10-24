export interface ColorTokens {
  colors: {
    //background
    backgroundMain: string;
    backgroundSubtle: string;
    backgroundMainHoverStrong: string;
    backgroundStatusGroupHeader: string;
    backgroundGlobalActionsBar: string;
    backgroundOnDarkHover: string;
    backgroundPrimary: string;
    backgroundPrimaryHover: string;
    backgroundPrimaryActive: string;
    backgroundPrimaryDisabled: string;
    backgroundButtonHover: string;
    backgroundOnDarkPressed: string;

    //border
    borderDefault: string;
    borderLowContrast: string;

    //content
    contentDefault: string;
    contentSecondary: string;
    contentTertiary: string;
    contentPlaceholder: string;
    contentStatusGroupHeaderLabel: string;
    contentOnDarkSecondary: string;
    contentOnDark: string;
    contentDisabled: string;
    contentOnDarkDisabled: string;
    contentButton: string;
  };
}

export interface BaseTokens {
  fonts: {
    primary: string;
    secondary: string;
  };
  radii: {
    [key: string]: number;
    full: number;
  };
}

export interface Tokens extends BaseTokens, ColorTokens {}
