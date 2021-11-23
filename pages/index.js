import Head from 'next/head'
import { Fragment } from "react";
import { Header, Sidebar } from "../components";

const Home = () => (
  <Fragment>
    <Head>
      <title>Webflow Clone</title>
      <meta name="description" content="1:1 Clone of a Webflow site."/>
    </Head>

    <main>
      <Header/>
      <Sidebar/>
    </main>
  </Fragment>
);


export default Home