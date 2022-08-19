import React from 'react';
import { MdOutlineContentCopy } from 'react-icons/md'
import { motion } from 'framer-motion';
import styles from './Copy.module.css';
import { modalCopy } from '../../../data/framer_variants'


const ModalCopy = ({data}) => {

    const copyToClipboard = () => {
        navigator.clipboard.writeText(data.result.full_short_link)
        alert('Link succsefully copied!')
    }

    return (
    <motion.div
    className={styles.modal_copy} 
    initial={'hidden'}
    animate={'visible'}
    variants={modalCopy}
    >
        <h1 className={styles.link} >{data.result.full_short_link}</h1>
        <MdOutlineContentCopy className={styles.icon} onClick={copyToClipboard} />
    </motion.div>
    );
}
 
export default ModalCopy;