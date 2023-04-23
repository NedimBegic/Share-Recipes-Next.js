import "@/styles/globals.css";
import Head from "next/head";
import Layout from "../Components/Layout/Layout";
// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
config.autoAddCss = false;
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Beau+Rivage&family=Grape+Nuts&family=Montserrat:ital,wght@1,100&family=Roboto+Serif:opsz,wght@8..144,100&family=Roboto:wght@100;300&family=Rubik+Microbe&family=Rubik+Moonrocks&family=Rubik+Wet+Paint&display=swap"
          rel="stylesheet"
        />
        <title>Share Recipes</title>
        <meta
          name="description"
          content="Share your coocking recipes and learn from others."
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
