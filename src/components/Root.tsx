import styled from "styled-components";
import Header from "./Header.tsx";
import Nav from "./Nav.tsx";
import Footer from "./Footer.tsx";
import { Routes, Route } from "react-router-dom";
import Home from "./mains/Home.tsx";
import Education from "./mains/Education.tsx";
import Work from "./mains/Work.tsx";
import Projects from "./mains/Projects.tsx";
import Papers from "./mains/Papers.tsx";
import Activities from "./mains/Activities.tsx";

const StyledPageWrapper = styled.div`
    background-color: #EFE6DA;
    width: 80%;
    margin: 0 auto;
`;

const StyledContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    min-height: 100vh;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;

export default function Root() {
    return (
        <StyledPageWrapper>
            <Header/>
            <StyledContainer>
                <Nav/>
                 <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/education" element={<Education/>}/>
                    <Route path="/work" element={<Work/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/papers" element={<Papers/>}/>
                    <Route path="/activities" element={<Activities/>}/>
                </Routes>
            </StyledContainer>
            <Footer/>
        </StyledPageWrapper>
    );
}
