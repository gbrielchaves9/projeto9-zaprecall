import Pergunta from "./Pergunta"
import styled from 'styled-components';


export default function ListaPerguntas(props) {

    return (
        <>
            <Perguntas>
                <Pergunta />
                <Pergunta />
                <Pergunta />
            </Perguntas>
        </>
    );
}

const Perguntas = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 40px;
    margin-right: 40px;
`;