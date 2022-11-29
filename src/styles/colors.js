import { createGlobalStyle } from "styled-components";

export const StyledColors = createGlobalStyle`
    :root {
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-disable: #59323F;

        --color-gray-4: #121214;
        --color-gray-3: #212529;
        --color-gray-2: #343B41;
        --color-gray-1: #868E96;
        --color-gray-0: #F8F9FA;
        
        --color-white: #FFFFFF;
        --color-success: #3FE864;
        --color-negative: #E83F5B;
    }
`;
