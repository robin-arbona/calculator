import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        border: string;
        paddingButton: string;
        colors: {
            primary: string;
            secondary: string;
        };
        size: string;
    }
}