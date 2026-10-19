import styled from "styled-components";

const StyledGWCLogo = styled.img`
    max-width: 40%;
    margin-bottom: 3%;

    @media screen and (max-width: 1000px) {
        margin-bottom: 6%;
    }
`;

export default function Activities() {
    return (
        <main>
            <h3>Activities & Leadership</h3>
            <div className="vertical-page-intro">
                <StyledGWCLogo src="/img/gwc_logo.png" alt="Logo for the international nonprofit organization 'Girls Who Code'."/>
                <p>
                    During my time at BU, I was an active member of the Girls Who Code chapter on campus.
                    Girls Who Code is an international nonprofit organization dedicated to closing the gender
                    gap in technology. Through this club at BU, we hosted various introductory workshops in
                    Python, Java, GitHub, and web development (HTML, CSS). I also later joined the e-board
                    and helped teach weekly courses on Python and basic programming principles to young girls
                    in Boston middle and high schools by creating a well-rounded curriculum with relevant practice
                    sets.
                </p>
            </div>
        </main>
    );
}
