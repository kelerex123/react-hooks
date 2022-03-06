import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './hooks.css';


export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1);
    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {author, quote} = !!data && data[0];




    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                loading ?
                    (
                        <div className='alert alert-info text-center'>
                            Loading...
                        </div>
                    )
                :
                    (
                        <figure className='text-end'>
                            <blockquote className='blockquote'>
                                <p>{quote}</p>
                                <figcaption  className='blockquote-footer'>{author}</figcaption >
                            </blockquote>
                        </figure>
                    )
            }

            <button className='btn btn-primary' onClick={increment}>
                Siguiente quote
            </button>

        </div>
    )
}
