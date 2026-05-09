import React from 'react'
import UseProducts from '../customHook/UseProducts'

const Receipes = () => {
    const { data, error, loading } = UseProducts('https://dummyjson.com/recipes')

    if (loading) return <h1>Loading</h1>
    if (error) return <h1>Erro 404 Data not Found</h1>
    console.log(data)

    return (
        <>
            <div>Receipes</div>
            {data?.recipes.map((r, i) => (
                <>
                    <li key={i}>{r.name}</li>
                    <img src={r.image} alt={r.name} width="100" height="100" />
                </>
            ))}
        </>
    )
}

export default Receipes