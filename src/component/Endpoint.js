import React from 'react'
import "./Endpoint.css"
import images1 from "./images/Rectangle4.png"
import images2 from "./images/Rectangle10.png"
import images3 from "./images/Rectangle11.png"
import images4 from "./images/Rectangle37.png"
import images5 from "./images/Rectangle38.png"
import images6 from "./images/Rectangle39.png"

function Endpoint() {
    return (
        <>
            
            <div className='container mt-5'>
                <div className='row justify-content-center'>
                    <div className='col-md-4'>
                    <h1>What to read Next</h1>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row justify-content-evenly'>
                    <div className='col-md-3 mt-sm-5 mt-md-0 ms-sm-5 ms-md-0'>
                     <img src={images1} alt='' />
                     <p className=' text-center'>Connecting artificial intelligence with digital product design</p>
                    </div>
                    <div className='col-md-3 mt-sm-5 mt-md-0 ms-sm-5 ms-md-0'>
                     <img src={images2} alt='' />
                     <p className=' text-center'>Connecting artificial intelligence with digital product design</p>
                    </div>
                    <div className='col-md-3 mt-sm-5 mt-md-0 ms-sm-5 ms-md-0'>
                     <img src={images3} alt='' />
                     <p className=' text-center'>Connecting artificial intelligence with digital product design</p>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row justify-content-evenly'>
                    <div className='col-md-3 mt-sm-5 mt-md-0 ms-sm-5 ms-md-0'>
                     <img src={images4} alt='' />
                     <p className=' text-center'>Connecting artificial intelligence with digital product design</p>
                    </div>
                    <div className='col-md-3 mt-sm-5 mt-md-0 ms-sm-5 ms-md-0'>
                     <img src={images5} alt='' />
                     <p className=' text-center'>Connecting artificial intelligence with digital product design</p>
                    </div>
                    <div className='col-md-3 mt-sm-5 mt-md-0 ms-sm-5 ms-md-0'>
                     <img src={images6} alt='' />
                     <p className=' text-center'>Connecting artificial intelligence with digital product design</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Endpoint