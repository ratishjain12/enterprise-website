import React from 'react'
import logo from './images/logo.png';
import '@mui/material';
import './header.css';

import { Container } from '@mui/system'

function Header() {
    return (
        <div>

            <Container>
                <div className='head'>
                    <div>
                        <img className="logo" src={logo} alt='logo' />
                    </div>
                    <div className='links'>
                        <a href='#'>Overview</a>
                        <a href='#'>Pages</a>
                        <a href='#'>Template</a>
                    </div>
                    <div>
                        <button class="btn">Contact us</button>
                    </div>
                </div>

            </Container>

        </div>
    )
}

export default Header