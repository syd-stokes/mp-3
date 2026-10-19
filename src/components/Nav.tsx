import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledListItem = styled.li`
    border: solid #EC7FA9 2px;
    background-color: #e7d4bb;
    text-align: center;
    margin: 8% 13%;
    padding: 5% 0.25%;

    a {
        color: #593714;
        text-decoration: none;
        font-size: calc(2px + 1.8vw);
    }

    a:hover {
        color: #D96A97;
    }

    @media screen and (max-width: 1000px) {
        margin: 1%;
        padding: 12px 6px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const StyledNav = styled.nav`
    width: 30%;
    background-color: #F7F1E8;

    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`;

const StyledList = styled.ul`
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1000px) {
        flex-direction: row;
        justify-content: center;
    }
`;

export default function Nav() {
    return (
        <StyledNav>
            <StyledList>
                <StyledListItem>
                    <Link className="cormorant-regular" to="/">Home</Link>
                </StyledListItem>
                <StyledListItem>
                    <Link className="cormorant-regular" to="/education">Education</Link>
                </StyledListItem>
                <StyledListItem>
                    <Link className="cormorant-regular" to="/work">Work Experience</Link>
                </StyledListItem>
                <StyledListItem>
                    <Link className="cormorant-regular" to="/projects">Technical Projects</Link>
                </StyledListItem>
                <StyledListItem>
                    <Link className="cormorant-regular" to="/papers">Research Papers</Link>
                </StyledListItem>
                <StyledListItem>
                    <Link className="cormorant-regular" to="/activities">Activities & Leadership</Link>
                </StyledListItem>
            </StyledList>
        </StyledNav>
    );
}