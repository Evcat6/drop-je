import React from 'react';
import styles from './HomePage.module.css';
import { useFetch } from '../../hooks/useFetch';
import { ModalCopy, LinkInput } from '../../components';
import { useInput } from '../../context/InputContext';
import Title from './Title';
import Description from './Description';
import { motion } from 'framer-motion';
import { noYet } from '../../data/framer_variants';



const HomePage = () => {

    const query = useInput()

    const [ data, error, fetcher ] = useFetch(query)

    return ( 
        <section className={styles.home} >
            <Title/>
            <Description/>
            <LinkInput  
               fetcher={fetcher} 
            />
            <div className={styles.modal} >
                {data? <ModalCopy  data={data}/> : <motion.h1 
                className={styles.no_link}
                initial={'hidden'}
                animate={'visible'}
                variants={noYet}
                >
                    No link shortened yet)</motion.h1>}
            </div>
        </section>
    );
}
 
export default HomePage;