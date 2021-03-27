import React from 'react';
import ReactDOM from 'react-dom';
import { GraphQLClient, ClientContext } from 'graphql-hooks';
import { ClientesCuidadosApp } from './ClientesCuidadosApp';
import env from 'react-dotenv';

const client = new GraphQLClient({
    url: 'https://graphql.datocms.com/',
    headers: {
        'Authorization': `Bearer ${env.DATOCMS_API_KEY}`
    }
});

ReactDOM.render(
    <ClientContext.Provider value={client}>
        <ClientesCuidadosApp />
    </ClientContext.Provider>,
    document.getElementById('root')
);
