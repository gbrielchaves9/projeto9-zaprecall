import Pergunta from "./Pergunta"
import styled from 'styled-components';


export default function ListaPerguntas(card) {

    return (
        <>
            <Perguntas>
                {card.map((prod) => (
                <Pergunta
                    produto={prod}
                    />
                    ))}
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