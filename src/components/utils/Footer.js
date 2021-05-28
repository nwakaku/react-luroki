
const Footer = () => {
    return (
        <footer className='footer bg-dark py-5'>
            <div className='container grid grid-3'>
                <div>
                    <h1>Loruki</h1>
                    <p>Copyright &copy; 2021</p>
                </div>
                <nav>
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>features</a></li>
                        <li><a>docs</a></li>
                    </ul>
                </nav>
                <div className='social'>
                    <a><i className='fab fa-github fa-2x'></i></a>
                    <a><i className='fab fa-facebook fa-2x'></i></a>
                    <a><i className='fab fa-instagram fa-2x'></i></a>
                    <a><i className='fab fa-twitter fa-2x'></i></a>
                </div>
            </div>
        </footer >
    )
}

export default Footer
