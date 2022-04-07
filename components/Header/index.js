import classes from "./Header.module.css"

const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.title}>The soundtrack to the <span className={classes.title_yellow}>metaverse</span>.</div>
            <div className={classes.text}>Dequency is building the first-ever decentralized music licensing marketplace for NFT art, metaverse productions and more!</div>
            <div className={classes.btn_field}>
                <button className={`${classes.btn} ${classes.btn_yellow}`}>Browse Music</button>
                <button className={classes.btn}>Create Account</button>
            </div>
        </div>
    )
}
export default Header