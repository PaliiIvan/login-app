import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      text: string;
      link: string;
      white: string;
      main: string;
    };
  }
}
