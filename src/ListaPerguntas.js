import Pergunta from './Pergunta';
import styled from 'styled-components';

export default function ListaPerguntas(props) {
  return (
    <>
      <Perguntas>
        {props.cards.map((ques, i) => (
          <Pergunta key={ques.question} i={i} ques={ques} nperguntas={props.cards.length}  jogadas={props.jogadas}    />
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
    margin-bottom:90px;
`;

/*{cards.map((card,i)=>   
<Pergunta key={card.question} index={i}/>)}*/
