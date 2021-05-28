import DocsMain from "./utils/DocsMain"
import Footer from "./utils/Footer"
import HeadDocs from "./utils/HeadDocs"
import NavBar from "./utils/NavBar"

const Docs = () => {
    return (
        <div>
            <NavBar />
            <HeadDocs />
            <DocsMain />
            <Footer />
        </div>
    )
}

export default Docs
