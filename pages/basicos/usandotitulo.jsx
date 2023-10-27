import Titulo from '../../components/Titulo'

export default function usandotitulo(){
    return (
        <div>
            <Titulo 
                principal="Página de Cadastro"
                secundario="Incluir, alterar e excluir coisas"
            />

            <Titulo 
                principal="Página de login"
                secundario="Incluir e-mail e sua senha."
            />
        </div>
    )
}