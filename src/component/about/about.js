import React from 'react'
import {Des,Aboutt,AboutInfo,Title,TitleSpan,Dir,A} from './aboutStyle.js'

const About = () => {
    return (
    <Aboutt>
        <div className="container">
            <AboutInfo>
                <Title><TitleSpan>This is</TitleSpan> Me</Title>
                <Dir orange>Creative Director</Dir>
                <Des>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <A href="#">explicabo</A> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </Des>
                <Des>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </Des>
            </AboutInfo>
        </div>
    </Aboutt>
    )
}

export default About
