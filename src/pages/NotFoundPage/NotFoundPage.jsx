import React from 'react';
import styles from './NotFound.module.css'
import { Link } from 'react-router-dom'
import { linkStyle } from '../../data/constants'

const NotFoundPage = () => {

    return ( 
        <section>
            <h1 className={styles.error_title} >Error 404</h1>
            <article className={styles.description} >
                Please return to &nbsp;<Link style={linkStyle} to='/' >Home Page</Link>
            </article>
        </section>
    );
}
 
export default NotFoundPage;