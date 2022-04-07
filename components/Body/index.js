import classes from "./Body.module.css"
import Navbar from "../../components/Navbar"
import Header from "../../components/Header"
import FeaturedBody from "../../components/FeaturedBody"
import Footer from "../../components/Footer"

const Body = () => {
    return (
        <div className={classes.body}>
            <Navbar />
            <Header />
            <FeaturedBody />
            <Footer />
        </div>
    )
}
export default Body