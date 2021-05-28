import React from 'react'
import docs from '../../images/docs.png';

const HeadDocs = () => {
    return (
        <section className='docs-head bg-primary py-3'>
            <div className='container grid'>
                <div>
                    <h1 className='xl'>Docs</h1>
                    <p className='lead'>
                        Learn how to work with the wisdom platform
                    </p>
                </div>
                <img src={docs} alt='' />
            </div>
        </section>
    )
}

export default HeadDocs