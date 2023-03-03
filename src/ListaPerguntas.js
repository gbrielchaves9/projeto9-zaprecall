import Pergunta from "./Pergunta"
import cards from "./cards";
import styled from 'styled-components';


export default function ListaPerguntas() {

    return (
        <>
            <Perguntas>
            {cards.map((ques, i) =>
                <Pergunta key={ques.question} i={i} ques={ques} nperguntas={cards.length} />)}
            </Perguntas >
        </>
    );
}

const Perguntas = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 40px;
    margin-right: 40px;
    margin-bottom:90px;
`;

/*{cards.map((card,i)=>   
<Pergunta key={card.question} index={i}/>)}*/