const DocsMain = () => {
    return (
        <section className='docs-main'>
            <div className='container grid'>
                <div className='card bg-light p-3'>
                    <h3 className='my-2'>Essentials</h3>
                    <nav>
                        <ul>
                        <li><a className='text-primary'>Introduction</a></li>
                        <li><a>About Wisdom</a></li>
                        <li><a>Installation</a></li>
                        </ul>
                    </nav>

                    <h3 className='my-2'>Deployment</h3>
                    <nav>
                        <ul>
                            <li><a>Setting up a container</a></li>
                            <li><a>Using the CLI</a></li>
                            <li><a>Managing resources</a></li>
                            <li><a>Upgrade & downgrade</a></li>
                        </ul>
                    </nav>
                </div>
                <div className='card'>
                    <h2>Introduction</h2>
                    <p>
                        vtgfdty ywgyg uygyegy eygyg eg eyg eyugye yg
                        dhgy ygyudg wgwte ygy iyc ey uhudy ihguidh g
                        hgvyg ysagyg gys gy yegye yghruygh  hdyu uhu
                        jbh ffh sjudh vfggy uijhuy s hfgyg ydgygh i 
                        skb.
                    </p>
                    <div className='alert alert-success'>
                        <i className='fas fa-info'></i>
                        jhgd hgy shghr jhgyrg rhguyr jhgyrghjgr
                        jhfuh rhgr hbfhhfh?
                    </div>

                    <h3>Wisdom is a good boy</h3>
                    <p>
                        vtgfdty ywgyg uygyegy eygyg eg eyg eyugye yg
                        dhgy ygyudg wgwte ygy iyc ey uhudy ihguidh g
                        hgvyg ysagyg gys gy yegye yghruygh  hdyu uhu
                        jbh ffh sjudh vfggy uijhuy s hfgyg ydgygh i 
                        skb.
                    </p>
                    <a className='btn btn-primary'>Install CLI</a>

                    <h3>Requirements</h3>
                    <ul>
                        <li>Windows 10, Mac OSX, Linux</li>
                        <li>Node.js v12 or higher</li>
                    </ul>

                    <h3>Install</h3>
                    <p>Mac (Homebrew)</p>
                    <pre><code>$ brew install loruki-cli</code></pre>
                    <p>NPM</p>
                    <pre><code>$ npm install loruki-cli</code></pre>
                    <p>Yarn</p>
                    <pre><code>$ yarn install loruki-cli</code></pre>
                </div>
            </div>
        </section>
    )
}

export default DocsMain
