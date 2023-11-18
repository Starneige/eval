import styles from './Footer.module.css';

export default function Footer () {
    return (
     <footer className={styles.classeFooter} role="contentinfo">
        <div className={styles.footerMiddle}>
        <div className="container">
            <div className="row">
            <div className="col-md-3 col-sm-6">
                <div className={styles.footerPad}>
                <h4>Horaires d'ouverture</h4>
                <ul className="list-unstyled">
                    <li>Lundi :    8:45 - 12:00  14:00 - 18:00 </li>
                    <li>Mardi :    8:45 - 12:00  14:00 - 18:00 </li>
                    <li>Mercedi :  8:45 - 12:00  14:00 - 18:00 </li>
                    <li>Jeudi :    8:45 - 12:00  14:00 - 18:00 </li>
                    <li>Vendredi : 8:45 - 12:00  14:00 - 18:00 </li>
                    <li>Samedi :   8:45 - 12:00  14:00 - 18:00 </li>
                    <li>Dimanche : Fermé </li>
                </ul>
                </div>
            </div>
            </div>
            <div className="row">
                <div className="col-md-12 copy">
                    <p className="text-center">&copy; Copyright 2023 - Company Name.  All rights reserved.</p>
                </div>
            </div>


        </div>
        </div>
    </footer>
    ); 
}
  
