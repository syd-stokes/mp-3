import styled from "styled-components";

const StyledResearchPaper = styled.div`
    border-left: solid #D96A97 3px;
    padding-left: 3%;
    margin-left: 3%;
    font-style: italic;
`;

const StyledCossmoImg = styled.img`
    display: block;
    margin: 5% auto;
    max-width: 90%;
`;

export default function Papers() {
    return (
        <main>
            <h3>Research Papers</h3>
            <div>
                <p>
                    While at BU, I got the opportunity to work in two amazing research labs on
                    campus and an undergraduate research assistant. The first lab I joined was
                    BU's Space Physics & Technology Lab. Here, I helped develop and refine
                    data pipelines to parse and analyze ultraviolet and soft X-ray telemetry
                    from the COSSMo (Carruthers Observatory Student Solar Monitor) instrument on
                    NASA's Carruthers Geocorona Observatory in order to study solar activity in
                    Earth's outer atmosphere. Along with the talented researchers and scientists
                    in lab, I'm currently waiting on the publication of the following paper:
                </p>
                <br/>
                <StyledResearchPaper>
                    "The Carruthers Observatory Student Solar Monitor (COSSMo)." Co-author. Space
                    Science Reviews (Springer Nature), under review, 2026.
                </StyledResearchPaper>
            </div>

            <StyledCossmoImg src="/img/cossmo.jpg" alt="NASA's fully assembled Carruthers Geocorona Observatory with student-developed COSSMo instrument attached."/>

            <div>
                <p>
                    I also later joined BU's Soft Robotics Control Lab where I assisted in the
                    development and maintenance of software for precise motion in soft robotic systems.
                    Our team is also currently in the review process for the following paper:
                </p>
                <br />
                <StyledResearchPaper>
                    Pacheco Garcia, J., Dickson, A. K., Jing, R., Liu, B., Stokes, S., Van Hook, C., Anderson,
                    M. L., & Sabelhaus, A. P. "SRCBench: A Framework for Benchmarking Feedback Controllers
                    in Soft Robotics." Advanced Intelligent Systems (Wiley), under review, 2026.
                </StyledResearchPaper>
            </div>
        </main>
    );
}
