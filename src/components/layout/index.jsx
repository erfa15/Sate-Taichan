import Head from "next/head";
import { navigationData } from "@/src/utils";
import { Navigation, Footer } from "..";
import styles from "./layout.module.scss";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{`Sate Taichan : ${title}`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/imgs/LogoSate.svg" />
      </Head>
      <Navigation navLink={navigationData} />
      <main className={styles.layout}>{children}</main>
      <Footer />
    </>
  );
}
