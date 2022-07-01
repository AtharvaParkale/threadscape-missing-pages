import React, { useState } from 'react'
import './HowItWorks.css'
import products_image from '../assets/brands_main_3.avif'
import products_image2 from '../assets/brands_main_4.avif'

function HowItWorks() {
    const [howItWorks, setHowItWorks] = useState(true);
    return (
        <div className='howItWorks_container'>
            <div className="howItWorks_image">
                <h1>How It Works ?</h1>
            </div>
            <div className="howItWorks_navbar">
                <button onClick={() => {
                    setHowItWorks(true);
                }}>Products</button>
                <button onClick={() => {
                   setHowItWorks(false);
                }}>Services</button>
            </div>
            {
                howItWorks ? <div className="howItWorks_products">
                    <div className="howItWorks_products_header">
                        <h1>How It Works ? (Products)</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cupiditate voluptate harum labore iste saepe, autem ipsa ratione minima sapiente.</p>
                    </div>
                    <div className="howItWorks_products_steps">
                        <div className="howItWorks_products_step howItWorks_products_step1">
                            <div className="howItWorks_products_step_image">
                                <img src={products_image} alt="Image Products" />
                            </div>
                            <div className="howItWorks_products_step_content right_step_content">
                                <h3>Step 1</h3>
                                <button>Simple Enquiry Process</button>
                                <p>➡️Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                <p>➡️Lorem ipsum dolor sit, amet consectetur.</p>
                            </div>
                        </div>
                        <div className="howItWorks_products_step howItWorks_products_step2">
                            <div className="howItWorks_products_step_content left_step_content">
                                <h3>Step 2</h3>
                                <button>Simple Enquiry Process</button>
                                <p>➡️Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                <p>➡️Lorem ipsum dolor sit, amet consectetur.</p>
                            </div>
                            <div className="howItWorks_products_step_image">
                                <img src={products_image} alt="Image Products" />
                            </div>
                        </div>
                        <div className="howItWorks_products_step howItWorks_products_step3">
                            <div className="howItWorks_products_step_image">
                                <img src={products_image} alt="Image Products" />
                            </div>
                            <div className="howItWorks_products_step_content right_step_content">
                                <h3>Step 3</h3>
                                <button>Simple Enquiry Process</button>
                                <p>➡️Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                <p>➡️Lorem ipsum dolor sit, amet consectetur.</p>
                            </div>
                        </div>
                        <div className="howItWorks_products_step howItWorks_products_step4">
                            <div className="howItWorks_products_step_content left_step_content">
                                <h3>Step 4</h3>
                                <button>Simple Enquiry Process</button>
                                <p>➡️Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                <p>➡️Lorem ipsum dolor sit, amet consectetur.</p>
                            </div>
                            <div className="howItWorks_products_step_image">
                                <img src={products_image} alt="Image Products" />
                            </div>
                        </div>
                    </div>
                </div> :
                    <div className="howItWorks_products">
                        <div className="howItWorks_products_header">
                            <h1>How It Works ? (Services)</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cupiditate voluptate harum labore iste saepe, autem ipsa ratione minima sapiente.</p>
                        </div>
                        <div className="howItWorks_products_steps">
                            <div className="howItWorks_products_step howItWorks_products_step1">
                                <div className="howItWorks_products_step_image">
                                    <img src={products_image2} alt="Image Products" />
                                </div>
                                <div className="howItWorks_products_step_content right_step_content">
                                    <h3>Step 1</h3>
                                    <button>Simple Enquiry Process</button>
                                    <p>➡️Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                    <p>➡️Lorem ipsum dolor sit, amet consectetur.</p>
                                </div>
                            </div>
                            <div className="howItWorks_products_step howItWorks_products_step2">
                                <div className="howItWorks_products_step_content left_step_content">
                                    <h3>Step 2</h3>
                                    <button>Simple Enquiry Process</button>
                                    <p>➡️Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                    <p>➡️Lorem ipsum dolor sit, amet consectetur.</p>
                                </div>
                                <div className="howItWorks_products_step_image">
                                    <img src={products_image2} alt="Image Products" />
                                </div>
                            </div>
                            <div className="howItWorks_products_step howItWorks_products_step3">
                                <div className="howItWorks_products_step_image">
                                    <img src={products_image2} alt="Image Products" />
                                </div>
                                <div className="howItWorks_products_step_content right_step_content">
                                    <h3>Step 3</h3>
                                    <button>Simple Enquiry Process</button>
                                    <p>➡️Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                    <p>➡️Lorem ipsum dolor sit, amet consectetur.</p>
                                </div>
                            </div>
                            <div className="howItWorks_products_step howItWorks_products_step4">
                                <div className="howItWorks_products_step_content left_step_content">
                                    <h3>Step 4</h3>
                                    <button>Simple Enquiry Process</button>
                                    <p>➡️Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                    <p>➡️Lorem ipsum dolor sit, amet consectetur.</p>
                                </div>
                                <div className="howItWorks_products_step_image">
                                    <img src={products_image2} alt="Image Products" />
                                </div>
                            </div>
                        </div>
                    </div>
            }


        </div>
    )
}

export default HowItWorks