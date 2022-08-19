import React from 'react';
import { motion } from 'framer-motion';
import { LogoAnimation } from '../../data/framer_variants';
import styles from './HomePage.module.css';

const Title = () => {
    return ( 
        <motion.h1 
            className={styles.home_logo} 
            initial={'hidden'}
            animate={'visible'}
            variants={LogoAnimation}
            >drop.je</motion.h1>
    );
}
 
export default Title;