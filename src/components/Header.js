import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata'
import Typist from 'react-typist';

class Header extends Component {
    state = {}

    render() {
        return (<div>
            <header>
                <Fade bottom cascade>
                    <img src={data.name} width="450" height="100" alt='brand logo'></img>
                </Fade>
            </header>
            <Fade bottom>
            <p className='header-title'>
                    {data.headerImg ? <img src={data.headerImg} width="600" height="300" alt='doodle' class='center'></img> : null}
                <br></br>
                <Typist cursor={{hideWhenDone:true, show:true, blink:true, element:'|'}}>
                    {data.headerTagline[0]}<br></br>{data.headerTagline[1]}
                </Typist>
                    <button><a href={`mailto:${data.contactEmail}`} rel="noopener noreferrer">contact</a></button>
            </p>
            </Fade>
        </div>);
    }
}
export default Header;