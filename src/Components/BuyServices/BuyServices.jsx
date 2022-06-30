import React from 'react'
import './BuyServices.css'
import overview_img from '../assets/overview_image.jpg'
import { Link } from "react-router-dom";


function BuyServices() {
    return (
        <>
            <div className='buyServices_image' id='buyServicesTop'>
                <h1>Buy Services</h1>
            </div>
            <div className="buyServices_bottomNav">
                <a href='#buyServicesOverview'>
                    <button className="buyServices_bottomNav_tab1">
                        Overview
                    </button>
                </a>

                <a href="#buyServicesWorks">
                    <button className="buyServices_bottomNav_tab1">
                        How it Works ?
                    </button>
                </a>

                <a href="#buyServicesForms">
                    <button className="buyServices_bottomNav_tab1">
                        Get Started
                    </button>
                </a>
            </div>
            <div className="buyServices_overview" id="buyServicesOverview">
                <h1>Overview</h1>
                <div className="buyServices_overview_secHolder">
                    <div className="buyServices_overview_sec">
                        <img src={overview_img} alt="Overview Image" />
                    </div>
                    <div className="buyServices_overview_sec">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, nam.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit error labore vero animi reprehenderit debitis voluptate minus dolorum provident dolore.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolores exercitationem, quasi vero voluptates voluptatum sunt. Dolore nesciunt quasi suscipit dignissimos inventore neque atque amet mollitia minus. Libero, eos debitis?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat reprehenderit atque aut earum ducimus totam doloremque, excepturi, nulla inventore magnam vero! Ex doloribus possimus incidunt?
                        </p>
                    </div>
                </div>

            </div>

            <div className="buyServices_works" id="buyServicesWorks">
                <h1>How It Works ?</h1>
                <div className="buyServices_logo_holder">
                    <div className="buyServices_logo_card">
                        <div className="buyServices_logo_card_image">

                        </div>
                        <p>Post Requirements</p>
                    </div>
                    <div className="buyServices_logo_card">
                        <div className="buyServices_logo_card_image">

                        </div>
                        <p>Get Free Proposal</p>
                    </div>
                    <div className="buyServices_logo_card">
                        <div className="buyServices_logo_card_image">

                        </div>
                        <p>Place order and fulfill requirements</p>
                    </div>
                </div>
            </div>

            <div className="buyServices_form" id="buyServicesForms">
                <h1>Let's get started !</h1>
                <div className="buyServices_formholder">
                    <div className="buyServices_inputholder">
                        <input type="text" placeholder='Your Name' />
                        <input type="text" placeholder='Company Name' />
                    </div>
                    <div className="buyServices_inputholder">
                        <input type="email" placeholder='Email' />
                        <input type="number" placeholder='Mobile No' />
                    </div>
                    <div className="buyServices_inputholder">
                        <input type="text" placeholder='State' />
                        <input type="text" placeholder='Your Requirement' />
                    </div>
                    <button>Submit</button>
                </div>
            </div>
            <div className="link_pages">
            <p><Link to='/'>Buy Products</Link></p>
                <p><Link to='/buyservices'>Buy Services</Link></p>
                <p><Link to='/sellproducts'>Sell Products</Link></p>
                <p><Link to='/sellservices'>Sell Services</Link></p>
            </div>

        </>
    )
}

export default BuyServices