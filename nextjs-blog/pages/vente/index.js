import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Menu from '../../components/menu';
import Footer from '../../components/footer';

export default function Vente() {
  return (
    <div>
      <Menu></Menu>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
          <h1 className={styles.title}>
            images voitures et tableaux 
            
          </h1>
      </div>
      <Footer></Footer>
    </div>
  
  );
}
