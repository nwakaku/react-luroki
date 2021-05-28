import React from 'react'
import node from '../../images/logos/node.png'
import clojure from '../../images/logos/clojure.png'
import csharp from '../../images/logos/csharp.png'
import go from '../../images/logos/go.png'
import php from '../../images/logos/php.png'
import python from '../../images/logos/python.png'
import ruby from '../../images/logos/ruby.png'
import scala from '../../images/logos/scala.png';

const Lan = () => {
    return (
        <section className='languages'>
            <h2 className='md text-center my-2'>
                Supported languages
            </h2>
            <div className='container flex'>
                <div class='card'>
                    <h4>Node.js</h4>
                    <img src={node} alt=''/>
                </div>
                <div class='card'>
                    <h4>C#</h4>
                    <img src={csharp} alt=''></img>
                </div>
                <div class='card'>
                    <h4>Ruby</h4>
                    <img src={ruby} alt=''></img>
                </div>
                <div class='card'>
                    <h4>PHP</h4>
                    <img src={php} alt=''></img>
                </div>
                <div class='card'>
                    <h4>Scala</h4>
                    <img src={scala} alt=''></img>
                </div>
                <div class='card'>
                    <h4>Clojure</h4>
                    <img src={clojure} alt=''></img>
                </div>
                <div class='card'>
                    <h4>Go</h4>
                    <img src={go} alt=''></img>
                </div>
                <div class='card'>
                    <h4>Python</h4>
                    <img src={python} alt=''></img>
                </div>
            </div>
            
        </section>
    )
}

export default Lan
