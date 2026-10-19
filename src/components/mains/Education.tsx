import styled from "styled-components";

const StyledGradImg = styled.img`
    @media screen and (max-width: 1000px) {
        margin-bottom: 6%;
    }
`;

export default function Education() {
    return (
        <main>
            <h3>Education</h3>
            <div className="horizontal-page-intro">
                <StyledGradImg src="/img/grad.jpg" alt="Sydney Stokes in red cap and gown graduation regalia sitting in front of Boston University sign."/>
                <p>
                    After taking a semester off school during my Junior Spring to pursue an internship
                    with NASA, I'm now in my final semester at BU. Last May I walked the stage with
                    all of my friends, and now I'm finishing up the few remaining courses I need to
                    complete my Computer Science major before officially graduating in December. I've
                    also completed a minor in Spanish while at Boston University in addition to all the
                    amazing labs and clubs I've gotten to participate in while on campus over the past four years.
                </p>
            </div>

            <div>
                <h2>
                    Current Degree Progress:
                </h2>
                <p>
                    B.S. in Computer Science | <a href="https://www.bu.edu/">Boston University</a>, Boston MA.
                </p>
                <p>
                    Minor in Spanish
                </p>
                <p>
                    Jan. 2027
                </p>
            </div>
            <br/>
            <div>
                <p>
                    High School Diploma | <a href="https://www.cfschools.org/schools/cedar-falls-high-school">Cedar Falls High School</a>, Cedar Falls IA.
                </p>
                <p>
                    May 2022
                </p>
            </div>
        </main>
    );
}
