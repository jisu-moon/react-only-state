import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    red: string;
    black: {
      textColor: string;
      background: string;
    };
    white: {
      textColor: string;
      background: string;
    };
  }
}
