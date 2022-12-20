import React from 'react'
import banner from './images/banner.png'

import './banner.css';

function Banner() {
    return (
        <div className='banner-head'>
            <div className="banner">
                <img src={banner} alt="banner-img" />

                <div className="buttons">
                    <button className="btn1">Learn More</button>
                    <a href='#' className='link'>Explore Pages</a>
                </div>
            </div>

        </div>
    );
}

export default Banner