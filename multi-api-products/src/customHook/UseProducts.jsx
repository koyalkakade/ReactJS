import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UseProducts = (initialURL) => {
    const [data, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    console.log(initialURL)

    // useEffect(() => {
    //     console.log("useEffect")
    //     fetchProducts()
    // }, [])

      useEffect(() => {
        console.log("useEffect")
         fetchProducts()
    }, [initialURL])

    async function fetchProducts() {
        console.log('------------------------------')
        // fetch('',{
        // body:{},
        // method:'GET'
        // })
        // .then(res=>res.json())
        // .then(data=>setProducts(data))
        try {
            const res = await axios.get(initialURL)
            console.log('res', res.data)
            if (res.data) {
                setProducts(res.data)
            } else {
                setError(true)
            }

        } catch (error) {
            console.log('err', error)
            setError(true)
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }

    

    return {data, loading, error}
}

export default UseProducts