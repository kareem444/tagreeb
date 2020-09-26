import React from 'react'
import Footer from './../footer/footer'
import {ContactDiv,Title,Span,Form,Input,FormInput,Textarea,Sub} from './contactStyle.js'

const Contact = () => {
    return (    
        <React.Fragment>
            <ContactDiv>
            <div className="container">
                <Title><Span>Drop </Span>Me A line</Title>
                <Form >
                    <FormInput>
                        <Input type="text" left half  placeholder="Your Name" />
                        <Input type="email" right half  placeholder="Your Email" />
                    </FormInput>
                    <Input type="text" full placeholder="Your Subject" />
                    <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
                    <Sub type="submit" value="Send Message" />
                </Form>
            </div>
            </ContactDiv>
            
            <Footer />
        </React.Fragment>
    )
}

export default Contact
