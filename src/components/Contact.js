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
                <h2>
                <span className='amazing-color'>let's connect! <span role="img" aria-label="heart">❤️</span></span></h2>
                    <a href={`mailto:${data.contactEmail}`} className='email'>{data.contactEmail}</a>
                    <br></br>
                    {data.social.map((link,index)=>(
                        <li key={index}><a target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
                    ))} 
        </div>
        </Fade>
        <br></br><br></br><br></br>
        </div>);
    }
}
 
export default Contact;