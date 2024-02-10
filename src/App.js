import './App.css';
import React from 'react';
import Navbar from "./components/navbar";
import Introduction from "./components/introduction";
import Wrapper from "./components/wrapper";
import TechStack from "./components/stack";
import Projects from "./components/projects";
import About from "./components/about";
import Contact from "./components/contact";

function App() {
    return (
        <div className="bg-gray-0">
            <Navbar/>
            <Wrapper>
                <Introduction/>
                <About/>
                <TechStack/>
                <Projects/>
                <Contact/>
            </Wrapper>
        </div>
    );
}

export default App;
