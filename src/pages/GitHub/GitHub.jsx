import React from 'react';
import styles from './GitHub.module.css';
import { motion } from 'framer-motion';
import { title_github, link } from '../../data/framer_variants';


const GitHub = () => {
    return ( 
        <section className={styles.git_hub} >
            <motion.h1
            initial={'hidden'}
            animate={'visible'}
            variants={title_github}
            className={styles.title} 
            >Link to my page </motion.h1>
            <motion.a 
            className={styles.link}
            initial={'hidden'} 
            animate={'visible'}
            variants={link}
            href='https://github.com/Evcat6'
            >https://github.com/Evcat6</motion.a>
        </section>
     );
}
 
export default GitHub;