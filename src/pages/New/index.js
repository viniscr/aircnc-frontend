import React, { useState } from 'react';

export default function New(){

    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');

    function handleSubmit(){

    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="company">EMPRESA *</label>
            <input 
                id="company"
                placeholder="Sua empresa incrível"
                value={company}
                onChange={event => setCompany(event.target.value)}
            />
            <label htmlFor="company">TECNOLOGIAS * <span>(Separadas por vírgula)</span></label>
            <input 
                id="techs"
                placeholder="Quais tecnologias usam?"
                value={techs}
                onChange={event => setTechs(event.target.value)}
            />
            <label htmlFor="company">VALOR DA DIÁRIA * <span>(Em branco para gratuito)</span></label>
            <input 
                id="price"
                placeholder="Valor cobrado por dia"
                value={price}
                onChange={event => setPrice(event.target.value)}
            />
        </form>
        
    )
}