import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Root from "./components/Root.tsx";

// Rules from MP-1's styles.css that are shared across components.
const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
    }

    h3 {
        color: #EC7FA9;
        padding-top: 1%;
        padding-bottom: 4%;
        text-align: center;
        text-decoration: underline;
    }

    h2 {
        color: #EC7FA9;
        padding-top: 2%;
        padding-bottom: 4%;
        text-align: left;
        font-size: calc(2px + 1.9vw);
    }

    img {
        max-width: 50%;
    }

    main {
        width: 70%;
        font-size: calc(2px + 1.5vw);
        text-align: left;
        padding: 2%;
        color: #593714;
    }

    main a {
        color: #593714;
        font-style: italic;
        font-weight: bold;
    }

    main a:hover {
        color: #D96A97;
    }

    .horizontal-page-intro {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8%;
        text-align: left;
        margin-bottom: 5%;
    }

    .vertical-page-intro {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: left;
    }

    .silkscreen-regular {
        font-family: "Silkscreen", sans-serif;
        font-weight: 400;
        font-style: normal;
    }

    .cormorant-regular {
        font-family: "Cormorant", serif;
        font-weight: 500;
        font-style: normal;
    }

    @media screen and (max-width: 1000px) {
        main {
            width: 100%;
        }

        .horizontal-page-intro {
            flex-direction: column;
            gap: 3%;
        }
    }
`;

const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default function App() {
    return (
        <>
            <GlobalStyle/>
            <RouterProvider router={router}/>
        </>
    );
}