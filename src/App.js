import './App.css';
import React from 'react';
import Navbar from "./components/headers/navbar";
import Introduction from "./components/introduction";
import Wrapper from "./components/wrapper";
import TechStack from "./components/stack";

function App() {
    return (
        <>
            <Navbar/>
            <Wrapper>
                <Introduction/>
                <TechStack/>
            </Wrapper>
        </>
    );
}

export default App;
