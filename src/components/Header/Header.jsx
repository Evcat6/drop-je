import React from 'react';
import styles from './Header.module.css'
import { CusLink } from '../index'
import { Link } from 'react-router-dom';
import { Logo } from '../../data/constants';

const Header = () => {


    return ( 
        <header className={styles.navigation} >
            <Link to='/' style={Logo} >
                <h1 className={styles.logo}>drop.je</h1>
            </Link>
            
            <nav className={styles.links} >
                <CusLink className={styles.link} to='/' >Home</CusLink>
                <CusLink className={styles.link} to='/git-hub'>Git Hub</CusLink>
            </nav>
        </header>
    );
}
 
export default Header;