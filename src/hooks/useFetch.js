import { useState } from 'react';
import axios from 'axios';

// Hook for shortening links 


const API_URL = 'https://api.shrtco.de/v2/shorten?url'

export const useFetch = (url) => {
    const [ value, setValue ] = useState('')
    const [ error, setError ] = useState('') 

    const fetcher = () => {
        if(url) {
           try{
        const fetchApi = (link) => {
            axios.get(link).then(res => setValue(res.data))
        }
            fetchApi(`${API_URL}=${url}`)
        }   catch (error) {
            setError(error)
        }  
        }
        
    }

    return [ value, error, fetcher ]
}