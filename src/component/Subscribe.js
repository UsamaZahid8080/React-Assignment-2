import React from 'react'
import "./Subscribe.css"
import { Button } from 'react-bootstrap'

function Subscribe() {
    return (
        <>
            <div className='container mb-5 mt-5'>
                <div className='row justify-content-center'>
                    <div className='col-6 text-center br p-5'>
                      <h1>Sign up for the newsletter</h1>
                      <p>If you want relevant updates occasionally, sign up for the private newsletter. Your email is never shared. </p>
                      <div className='d-flex justify-content-center'>
                      <input type='' name='' placeholder='Enter Your Email...' className='subscribe'/>
                      <Button className='button1 btn btn-dark rounded-0'>SignUP</Button>
                      </div>
                     
                    </div>

                </div>
            </div>

        </>
    )
}

export default Subscribe