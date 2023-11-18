import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Menu from '../components/menu';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div>
      <Menu> </Menu>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className={styles.title}>
           image voitures
            
          </h1>
      </div>
      <Footer></Footer>
    </div>
    

  );
}
