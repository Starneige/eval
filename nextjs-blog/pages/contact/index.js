import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Menu from '../../components/menu';
import Footer from '../../components/footer';
import { useEffect, useState } from 'react';
import api, { getUser } from '../../api';
import Contact from '../../components/contact';

export default function ContactPage() {
  const user = getUser();
  let [contact, setContact] = useState([])
  const [domLoaded, setDomLoaded] = useState(false);

  let getContact = () => {
    api.get('/contact')
      .then(function (response) {
        // handle success
        console.log(response.data);
        setContact(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  useEffect(() => {
    getContact();
    setDomLoaded(true);
  }, []);

  return (
    <div>
      <Menu />
      <div className={styles.container}>
        <Head>
          <title>Contact</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {contact.map((item, idx) => (
          <Contact key={idx} id={item.id} nom={item.nom} prenom={item.prenom} telephone={item.telephone} message={item.message}></Contact>
        )
        )}
      </div>
      <Footer />
    </div>
  
  );
}
