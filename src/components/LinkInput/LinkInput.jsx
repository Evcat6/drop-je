import React from 'react';
import styles from './Input.module.css';
import { useInput, useUpdateInput } from '../../context/InputContext';

const LinkInput = ({fetcher}) => {

    // const { value: data, error, fetcher } = useFetch(query)

    const query = useInput()

    const inputUpdater = useUpdateInput()





    return (
        <div className={styles.input_group} >
            <input type='text' value={query} className={styles.input} onChange={inputUpdater} placeholder='Paste your link here...' /> 
            <button className={styles.btn} onClick={() => {fetcher();}} >Drop!</button>
        </div>
    )
}

export default LinkInput;