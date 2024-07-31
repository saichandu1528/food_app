

import React, { useState } from 'react';
import burger from "../images/burger.jfif"
import mandi from "../images/mandi.jfif"
import rice from "../images/rice.jfif"

function Carouselimg() {
    

    return (
        <div>
            <div className='carousel-Caption' style={{zIndex:"10"}}>
                <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                </form>
                </div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={burger} className="d-block w-100" alt="slide1" />
                    </div>
                    <div className="carousel-item">
                        <img src={rice} className="d-block w-100" alt="slide2" />
                    </div>
                    <div className="carousel-item">
                        <img src={mandi} className="d-block w-100" alt="slide3" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carouselimg;

