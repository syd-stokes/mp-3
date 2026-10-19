import styled from "styled-components";

const StyledHeader = styled.header`
    background-color: #EC7FA9;
    color: #F7F1E8;

    @media screen and (max-width: 1000px) {
        text-align: center;
    }
`;

export default function Header() {
    return (
        <StyledHeader>
            <h1>Sydney Stokes</h1>
            <p>My Online Resume</p>
        </StyledHeader>
    );
}
