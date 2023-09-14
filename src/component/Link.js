import React from 'react'
import "./Link.css"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Link() {
    return (
        <>
            <div className='container'>
                <div className='row justify-content-center mb-5'>
                    <div className='col-lg-3 col-md-6 font1'>
                            < FaFacebookF />Share on Facebook
                    </div>
                    <div className='col-lg-3 col-md-6 font2'>
                    < FaTwitter/>Share on Twitter
                    </div>

                </div>
            </div>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-6'>
                   <h6>Tags <a>product Design</a> Culture</h6>
                   </div>
                </div>
            </div>
        </>
    )
}

export default Link