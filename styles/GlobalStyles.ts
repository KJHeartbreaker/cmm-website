import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root {
        /* Colours */
        /* Each brand colour will have four variants. The darkest of which gets the variable name, and the lighter variants will go from lightest (22), to darkest (55). This is not based on any naming convention, it just seems easy to follow, and feels cooler than (1, 2, 3), or (light, lighter, lightest), etc... */

			--blue-22: #61c8e9;
			--blue-33: #16abcc;
			--blue-44: #057198;
			--blue-55: #013b63;

			--grey-22: #e2e2e2;
			--grey-33: #454d5a;
			--grey-44: #323943;
			--grey-55: #333333;

			--orange: #ee6d08;
			--red: #cd4008;
			--white: #ffffff;
			--yellow: #feca2d;

        accent-color: var(--blue-33);
    }

    html, body {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        position: relative;
        -webkit-overflow-scrolling: touch;
    }

    @media (prefers-reduced-motion: no-preference) {
        html {
            scroll-behavior: smooth;
        }
    }

    main {
        .secondary-nav {
        }
    }

    a {
        /* font-family: Montserrat, sans-serif; */
        color: var(--blue-33);
        text-decoration: none;
        cursor: pointer;

        &:hover {
            color: var(--red);
        }
    }

    * {
        &:focus {
            outline: var(--grey-22) auto 1px;
        }
    }

    a.button,
    button {
        display: inline-block;
        cursor: pointer;
        background-color: var(--blue-33);
        color: #fff;
        padding: 10px;
        border: none;
        margin: 10px 0;
        box-sizing: border-box;

        &:hover {
            background-color: var(--blue-22);
        }
    }
`

export default GlobalStyles
