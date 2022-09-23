import React, {Component} from 'react';
import '../Styles/Home.css';
import '../Styles/AboutMe.css';
import'../Styles/Skills.css';
import {HiArrowCircleDown, HiOutlineArrowSmRight} from 'react-icons/hi';
import AboutMe from './AboutMe';
import Skills from './Skills';


class Home extends Component {
    render() {

        const symbol1 = '<div>';
        const symbol2 = '<div/>';

        const handleScrollToDiv = (e) => {
            e.preventDefault();
            let toScroll = document.getElementById('aboutMeContainer');
            
            toScroll.scrollIntoView();
            console.log(document.getElementById('aboutMeContainer').offset());
        }

        return(
            <div id='homeAll'>
                <div id='homePic'></div>
                <div id='typeWriterContainer'>
                    <h1 id='homeIntro1'>
                        {symbol1}I'm Parker,{symbol2} <br/>
                    </h1>
                    <h1 id='homeIntro2'>
                        {symbol1}Full Stack Developer and Music Enthusiast.{symbol2}
                    </h1>
                    <div onClick={handleScrollToDiv}><HiArrowCircleDown id='homeDownArrow'/></div>
                    <div id='homeDescriptionContainer'>
                        <h2>Certified and Passionate Full Stack Developer</h2>
                        <div>Driven and creative developer with a love for life.<br/>I want to make a difference in the world, one line at a time.</div>
                        <button id='homeAboutMe' onClick={handleScrollToDiv}>About me<HiOutlineArrowSmRight id='homeAboutMeArrow'/></button>
                    </div>
                    {/* <div id='homePortfolioContainer'>
                        <h2>My Recent Work</h2>
                        <div></div>
                    </div> */}
                    <div id='aboutMeContainer'>
                        <AboutMe/>
                    </div>
                </div>
                <div id='skillsContainer'>
                    <Skills/>
                </div>
            </div>
        )
    }
}

export default Home;