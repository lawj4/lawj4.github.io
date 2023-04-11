import React from 'react';
import Home from './Home';
import Overlay from './Overlay';
import Project from './Project';
import About from './About';

export default function App() {
    return (
        <div>
            <About />
            <Overlay/>
            
            <div className="flex-col">
                
                <Home />
                <Project text="project1"/>
                <Project text="project2"/>
                <Project text="project3"/>

            </div>
        </div>
        
    )
}
