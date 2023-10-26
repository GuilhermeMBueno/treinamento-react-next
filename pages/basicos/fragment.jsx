import React from 'react'

export default function fragment() {
    return (
        <React.Fragment>
            <h1>Titulo</h1>
            <h2>Subtitulo</h2>
        </React.Fragment>

    )
}

/*
Desta forma aplicado acima importando o 
 "import React from 'react'"
 Podemos utilizar no código o "<React.Fragment" para que não seja criado DIV no HTML, e sim o elemento direto.
*/

// Da forma abaixo é incorreto e o código será apresentado erro no Navegador, não podemos retornar elementos Adjacentes o mesmo tempo.
// import React from 'react'

// export default function fragment() {
//     return (
//             <h1>Titulo</h1>
//             <h2>Subtitulo</h2>

//     )
// }