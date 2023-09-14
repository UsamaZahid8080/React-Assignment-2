import React from 'react'
import "./Middle.css"
import images1 from "./images/image2.png"
import images2 from "./images/mask.png"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Middle() {
    return (
        <>
            <img src={images1} className='img-fluid img' alt='' />
            <div className='hr'></div>
            <div className='container'>
                <div className='row justify-content-end mb-5 mt-5'>
                    <div className='col-lg-4 col-md-8 col-sm-10 d-flex'>
                      <img src={images2} alt='' className='img2'/>
                      <div className='row'>
                        <div className='col row2'>
                        <h4>MIKA MATIKAINEN</h4>
                        <p>April,15, 2020 </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-5 col-md-8 col-sm-10'>
                        <div>
                        <FaFacebookF className='font1'/>
                        <FaTwitter className='font'/>
                        </div>
                    </div>
                      
                </div>
            </div>

        </>
    )
}

export default Middle