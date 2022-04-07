import classes from "./Navbar.module.css"
import { BiHomeAlt, BiSearchAlt2, BiWindows } from "react-icons/bi"

const Navbar = () => {
    return (
        <div className={classes.navbar}>
            <div className={classes.input_field}>
                <BiSearchAlt2 className={classes.search_icon} />
                <input className={classes.search_input} type="text" placeholder="Search for songs, artists, or mood" />
            </div>
            <div className={classes.nav_item}>
                <div className={classes.login}>Login</div>
                <div className={classes.or}>Or</div>
                <button className={classes.account}>Create Account</button>
            </div>
        </div>
    )
}
export default Navbar