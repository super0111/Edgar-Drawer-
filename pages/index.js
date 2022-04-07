import classes from './index.module.css';
import Head from 'next/head';
import MenuSlider from "../components/MenuSlider"
import Body from "../components/Body"

export default function Home() {
  return (
    <div className={classes.home}>
        <Head>
          <title>App</title>
          <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={classes.main}>
        <MenuSlider />
        <Body />
      </main>
    </div>
  )
}
