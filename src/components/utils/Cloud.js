import React from 'react'
import cloud from '../../images/cloud.png'

const Cloud = () => {

    return (
        <section className='cloud bg-primary my-2 py-2'>
            <div className='container grid'>
                <div className='text-center'>
                    <h2 className='lg'>Extreme Cloud Hosting</h2>
                    <p className='lead my-1'>
                        Cloud hosting like you've never seen.
                        Fast, efficient and scalable
                    </p>
                    <a className='btn btn-dark'>
                        Read More
                    </a>
                </div>
                <img src={cloud} alt='' />
            </div>
            
        </section >
    )
}

export default Cloud
