
import seta_play from "./assets/seta_play.png"
import seta_virar from "./assets/seta_virar.png"
import styled from 'styled-components';
import { useState } from "react";
import icone_certo from "./assets/icone_certo.png"
import icone_erro from "./assets/icone_erro.png"
import icone_quase from "./assets/icone_quase.png"


export default function Pergunta({ i, ques}) {
  const [numero, setNumero] = useState(false)
  const [exibePergunta, setExibePergunta] = useState(false)
  const [respondi, setRespondi] = useState(false)
  const [addLinha, setAddLinha] = useState(false)


  function virar() {
    if (!respondi) {
      setNumero(true)
    }
  }

  function resposta() {
    setExibePergunta(true)

  }
  function voltaNormal(icone) {
    setNumero(false)
    setRespondi(true)
    setAddLinha(icone)
  }
  function tipoIcone() {
    switch (addLinha) {
      case "errou":
        return icone_erro
      case "certo":
        return icone_certo
      case "quase":
        return icone_quase
      default:
        return seta_play
    }
  }
  return (
    <>
      {!numero ? (
        <Caixa data-test="flashcard">
          <h1 data-test="flashcard-text" >Pergunta {i + 1}</h1>
          <img src={tipoIcone()} alt="forca" data-test="play-btn" onClick={virar} />
        </Caixa>) : (
        <PerguntaEscondida>
          {!exibePergunta ? (
            <>
              <h1 data-test="flashcard-text" >{ques.question}</h1>
              <img src={seta_virar} alt="Seta para iniciar pergunta" onClick={resposta} data-test="turn-btn"/>
            </>
          ) : (
            <>
              <ExibiResposta>
                <h1 data-test="flashcard-text" >{ques.answer}</h1>
                <AlinharBotao>
                  <CompBot data-test="no-btn" onClick={() => voltaNormal('errou')}>Não lembrei</CompBot>
                  <CompBot data-test="partial-btn" onClick={() => voltaNormal('quase')}>Quase Não lembrei</CompBot>
                  <CompBot data-test="zap-btn" onClick={() => voltaNormal('certo')}>Zap!</CompBot>
                </AlinharBotao>
              </ExibiResposta>
            </>
          )}
        </PerguntaEscondida>)}
    </>
  );
}
const CompBot = styled.button`
        width: 90px;
        font-family: 'Recursive';
        font-style: normal;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #FFFFFF;
        border-radius: 5px;
        padding:5px;
        background-color:green
`


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
  flex-direction: column;  
  justify-content: space-between;
  font-family: Recursive;
  h1{
    font-size: 18px;
    font-weight: 400;
    font-family: Recursive;
  };
  button{
    width: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border: 1px solid blue;
    padding: 5px;
    margin-top: 10px;  
  }
`;
const AlinharBotao = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`