import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledPortraitImg = styled.img`
    @media screen and (max-width: 1000px) {
        margin-bottom: 6%;
    }
`;

export default function Home() {
    return (
        <main>
            <h3>Home</h3>
            <div className="horizontal-page-intro">
                <StyledPortraitImg src="/img/portrait.jpg" alt="Sydney Stokes in pink dress sitting among flowers and other green plants."/>
                <p>
                    My name is Sydney Stokes and I grew up in a small town in Iowa. I'm currently
                    studying Computer Science and Spanish here at BU, and I'm now in my final semester.
                    For the majority of my time in high school I was dead set on studying
                    medicine, but after taking my first programming class I had no doubt in my mind
                    that it was what I wanted to pursue :)
                </p>
            </div>
            <p>
                Welcome to my website! Here you will find plenty of up-to-date information regarding
                my <Link to="/education">Educational</Link> and <Link to="/work">Employment</Link> history, as well as 
                some other cool <Link to="/activities">Activities</Link> and <Link to="/projects">Projects</Link> I've 
                worked on throughout my last four years at BU.
            </p>
        </main>
    );
}
