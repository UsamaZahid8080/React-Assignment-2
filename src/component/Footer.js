import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <>
            <div className='container-fluid bg-dark'>
                <div className='row text-white justify-content-center p-5'>
                    <div className='col-6 footer text-center'>
                        <h1>Nordic Rose</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. </p>
                        <div className='d-flex justify-content-evenly mt-5'>
                            <p>Twitrer</p>
                            <p>Linkedin</p>
                            <p>Rss</p>
                        </div>
                        <p className='mt-5'>© 2012–2020 Nordic Rose Co.<br />All rights reserved.</p>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Footer