import seta_play from "./assets/seta_play.png"
import seta_virar from "./assets/seta_virar.png"
import styled from 'styled-components';
import { useState } from "react";


export default function Pergunta({ i, ques }) {
  const [numero, setNumero] = useState(false)
  const [exibePergunta, setExibePergunta] = useState(false)
  const [respondi, setRespondi] = useState(false)

  function virar(){
    if(!respondi){
      setNumero(true)
    }
  }

  function resposta (){
    setExibePergunta(true)

  }
  function voltaNormal (){
    setNumero(false)
    setRespondi(true)
  }

  return (
    <>
      {!numero ? (
        <Caixa>
          <h1>Pergunta {i + 1}</h1>
          <img src={seta_play} alt="forca" data-test="game-image" onClick={virar} />
        </Caixa>) : (
        <PerguntaEscondida>
          {!exibePergunta ? (
            <>
             <h1>{ques.question}</h1>
             <img src={seta_virar} onClick={resposta} />
             </>
          ):(
            <>
             <ExibiResposta>
        <h1>{ques.answer}</h1>
        <button onClick={voltaNormal}>
          Não lembrei
        </button>
        <button onClick={voltaNormal}>
          Quase Não lembrei
        </button>
        <button onClick={voltaNormal}>
          Zap!
        </button>
      </ExibiResposta>
             </>
          )}
        </PerguntaEscondida>)}
    </>
  );
}
/* <Caixa>
 <h1>Pergunta {i + 1}</h1>
 <img src={seta_play} alt="forca" data-test="game-image" onClick={ChamaPergunta} />
</Caixa>*/

/*<PerguntaEscondida>
<h1>{ques.question}</h1>
<img src={seta_virar}  onClick={ChamaPergunta} />

</PerguntaEscondida>*/


const Caixa = styled.div`
  margin-top: 30px ;
      width: 100%;
    height: auto;
border-radius: 5px;
background-color: #FFFFFF; ;
padding: 25px;
display: flex; 
justify-content: space-between;
h1{
    font-size: 18px;
    font-weight: 400;
    font-family: Recursive;
}
`;

const PerguntaEscondida = styled.div`
  margin-top: 30px ;
      width: 100%;
    height: auto;
border-radius: 5px;
padding: 25px;
background: #FFFFD4;
display: flex; 
justify-content: space-between;
h1{
    font-size: 18px;
    font-weight: 400;
    font-family: Recursive;
}
`;


const ExibiResposta = styled.div`
  margin-top: 30px ;
      width: 100%;
    height: auto;
border-radius: 5px;
padding: 25px;
background: #FFFFD4;
display: flex; 
justify-content:space-between;
font-family: Recursive;
h1{
    font-size: 18px;
    font-weight: 400;
    font-family: Recursive;
};
button{
  width:90px;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:5px;
  border :1px solid blue;
  padding:5px;
}

`;



