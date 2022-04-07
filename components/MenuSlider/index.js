import classes from "./MenuSlider.module.css"
import { BiHomeAlt, BiSearchAlt2, BiWindows } from "react-icons/bi"

const MenuSlider = () => {
    return (
        <div className={classes.menuSlider}>
            <div className={classes.title}>
                <img className={classes.logo_img} src="/images/dequency-logo.svg" />
            </div>
            <div className={classes.nav}>
                <div className={classes.nav_item}>
                    <BiHomeAlt className={classes.nav_icon} />
                    <div className={classes.nav_text}>Home</div>
                </div>
                <div className={classes.nav_item}>
                    <BiSearchAlt2 className={classes.nav_icon} />
                    <div className={classes.nav_text}>Discover</div>
                </div>
            </div>
            <div className={classes.divider}></div>
            <div className={classes.nav_footer}>
                <BiWindows className={classes.nav_icon} />
                <div className={classes.nav_text}>FAQs</div>
            </div>
        </div>
    )
}
export default MenuSlider