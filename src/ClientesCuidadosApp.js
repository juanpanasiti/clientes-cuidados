import { useQuery } from 'graphql-hooks'
import React from 'react'
import { GET_ALL_CATEGORIES } from './graphql/category.queries'


export const ClientesCuidadosApp = () => {
    const {loading, error, data} = useQuery(GET_ALL_CATEGORIES)

    if (data) {
        console.log(data.allCategories)
        
    }
    return (
        <div>
            <h1>Clientes Cuidados</h1>
            {
                loading && <p>Loading...</p>
            }
            {
                error && JSON.stringify(error,null,3)
            }
            {
                data && data.allCategories.map( category =>(
                    <p key={category.id} style={{color: category.color.hex}}>{category.name}</p>
                ))
            }
        </div>
    )
}
