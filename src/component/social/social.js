import React, { Component } from 'react';
import {Sociall,Box,Icon,P,Span,SpanInfo} from './socialStyle.js'
import axios from 'axios';

class Social extends Component {
    state = {
        social : []
    }
    componentDidMount = () => {
        axios.get('data.json').then(res => {this.setState({ social :res.data.social });})
    }
    
    render() {
        const {social} = this.state
        const socialItems = social 
        .map((item) => {
            return (
                    <Box key={item.id} item={item.id}>
                        <Icon className={item.icon}></Icon>
                        <P>
                            <Span>{item.title}</Span>
                            <SpanInfo>{item.body}</SpanInfo>
                        </P>
                    </Box>
            )
        });
        
        return (
            <Sociall>
                {socialItems}
            </Sociall>
        );
    }
}

export default Social;
