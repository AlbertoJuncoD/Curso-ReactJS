import React, { useState, useEffect } from 'react';

const Bitcoin = () => {

    useEffect(() => {
        console.log('El componente se ha renderizado')
    });

    const [bitcoin, setBitcoin] = useState(0);

    return (

        <div>
            <h3>Cantidad de Bitcoins Actuales {bitcoin}</h3>
            <button onClick={() => setBitcoin(bitcoin + 1)}>
                Aumentar
            </button>
            <button onClick={() => setBitcoin(bitcoin - 1)}>
                Disminuir
            </button>
        </div>
    )
}




export default Bitcoin;