import React from 'react';
import { motion } from 'framer-motion';
import { Description_text } from '../../data/framer_variants';
import styles from './HomePage.module.css';

const Description = () => {
    return ( 
        <motion.article
            initial={'hidden'}
            transition={'transition'}
            animate={'visible'}
            variants={Description_text}
            className={styles.home_description} 
            >
                Most link shorteners do too much.
                This one just makes yout link shorter
        </motion.article>
    );
}

export default Description;