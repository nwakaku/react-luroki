import React from 'react'
import server from '../../images/server.png';

const Head = () => {
    return (
        <section className='features-head bg-primary py-3'>
            <div className='container grid'>
                <div>
                    <h1 className='xl'>Features</h1>
                    <p className='lead'>
                        Check out the features of Wisdom that
                        seperate us from the competition
                    </p>
                </div>
                <img src={server} alt="server" />
            </div>
        </section>
    )
}

export default Head
