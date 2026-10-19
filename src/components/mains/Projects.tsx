import styled from "styled-components";
import Calc from "../calculator/Calc.tsx";

const StyledProjectImg = styled.img`
    max-width: 60%;
    margin-bottom: 3%;
`;

export default function Projects() {
    return (
        <main>
            <h3>Technical Projects</h3>
            <div className="vertical-page-intro">
                <StyledProjectImg src="/img/hack_harvard.jpg" alt="Sydney Stokes posing after winning HackHarvard 2024."/>
                <p>
                    One project that I'm extremely proud of came from my participation in HackHarvard 2024 as a Junior in college.
                    While at HackHarvard, I worked as a solo team and ultimately won first place in the 'Patient Safety Challenge'
                    track with a sign language translator that analyzes user hand gestures and displays them as text on-screen.
                    I did this by creating and training a machine learning model to recognize American Sign Language (ASL) letters
                    using the Sign Language MNIST dataset in Python and PyTorch. You can check out my project, SimplySign, here:{" "}
                    <a href="https://lnkd.in/gZ3VrgDV">https://lnkd.in/gZ3VrgDV</a>.
                </p>
                <br/>
                <StyledProjectImg src="/img/simply_sign.jpg" alt="Sydney Stokes demonstrating successful detection of the letter 'C' in ASL by SimplySign."/>
            </div>

            <br/>
            <br/>
            <h3>JS Calculator!</h3>
            <Calc/>
        </main>
    );
}
