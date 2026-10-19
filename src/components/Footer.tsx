import styled from "styled-components";

const StyledFooter = styled.footer`
    background-color: #EC7FA9;
    color: #F7F1E8;
`;

export default function Footer() {
    return (
        <StyledFooter>
            <p>
                All Rights Reserved by Sydney Stokes <a href="">Credits</a> &copy;
            </p>
        </StyledFooter>
    );
}
