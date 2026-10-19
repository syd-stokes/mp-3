import styled from "styled-components";

const StyledNasaImg = styled.img`
    @media screen and (max-width: 1000px) {
        margin-bottom: 6%;
    }
`;

const StyledAstroRaidersImg = styled.img`
    max-width: 90%;
    margin-bottom: 3%;
`;

export default function Work() {
    return (
        <main>
            <h3>Work Experience</h3>
            <div className="horizontal-page-intro">
                <StyledNasaImg src="/img/nasa.jpg" alt="Sydney Stokes in front of the Nancy Grace Roman Space Telescope at NASA's Goddard Space Flight Center."/>
                <p>
                    In spring of 2025, I worked as a Flight Software Developer at <a href="https://www.nasa.gov/goddard/">NASA's Goddard Space Flight Center (GSFC)</a>. While 
                    there, I developed GUI-based tool for NASA's core Flight System (cFS), a flight software framework supporting missions such as Artemis II, Orion, and Gateway.
                    More recently, I spent this past summer in Pasadena working at <a href="https://www.jpl.nasa.gov/">NASA's Jet Propulsion Laboratory (JPL)</a> doing 
                    research on artificial intelligence for mineral mapping using thermal infrared remote sensing.
                </p>
            </div>
            <br/>
            <br/>
            <div className="vertical-page-intro">
                <p>
                    I also have experience in mobile app development using Unity and C#. As an intern at <a href="https://www.farsidegames.com/">Far Side Games</a>,
                    I helped to build AstroRaiders, a modern Buster Brothers-inspired mobile game with upgraded design and extended gameplay features. Check it 
                    out now in the app store and on <a href="https://store.steampowered.com/app/4641740/Astro_Raiders/">Steam</a>:
                </p>
                <br/>
                <StyledAstroRaidersImg src="/img/astro_raiders.jpg" alt="Far Side Games' Astro Raiders Steam page."/>
            </div>
        </main>
    );
}
