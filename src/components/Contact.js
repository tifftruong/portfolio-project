import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

class Contact extends Component {
    state = {  }
    render() { 
        return (  <div>
        <h1>
                <Fade bottom cascade>contact.</Fade>
        </h1>
        <Fade bottom>
        <div className='contact-content'>
                <h1>
                let’s create your next<br></br>
                <span className='amazing-color'>experience together</span>.</h1>
                    <a href={`mailto:${data.contactEmail}`} className='email'>{data.contactEmail}</a>
                <ul>
                    {data.social.map((link,index)=>(
                        <li key={index}><a target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
                    ))}   
                </ul>
        </div>
        </Fade>

            <span className='footer'>made with ❤️ by <a href="link">tiffany truong</a></span>
        </div>);
    }
}
 
export default Contact;