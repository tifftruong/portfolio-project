import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Project extends Component {
    state = {  }
    render() { 
        return ( 
        <Fade bottom>
        <div className='project'>
        <img src={this.props.url}  alt={this.props.title}>
            <img src={this.props.imageSrc} alt={this.props.title}></img>
            </img>
            <h1>{this.props.title}</h1>
            <span>{this.props.service}</span>
        </div> 
            </Fade>);
    }
}
 
export default Project;