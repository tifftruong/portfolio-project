import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata'


class Header extends Component {
    state = {}

    render() {
        return (<div>
            <header>
                <Fade bottom cascade><img src={data.name} width="450" height="100" alt='brand logo'></img></Fade>
            </header>
            <Fade bottom>
            <p className='header-title'>
            {data.headerTagline[0]}<br></br>{data.headerTagline[1]}<br></br>
            {data.headerTagline[2]}
               <br></br>
                    <button><a href={`mailto:${data.contactEmail}`} rel="noopener noreferrer">contact</a></button>
                </p>
            </Fade>



        </div>);
    }
}

export default Header;