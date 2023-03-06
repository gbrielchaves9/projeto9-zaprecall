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
        <Caixa>
          <h1>Pergunta {i + 1}</h1>
          <img src={tipoIcone()} alt="forca" data-test="game-image" onClick={virar} />
        </Caixa>) : (
        <PerguntaEscondida>
          {!exibePergunta ? (
            <>
              <h1>{ques.question}</h1>
              <img src={seta_virar} alt="Seta para iniciar pergunta" onClick={resposta} />
            </>
          ) : (
            <>
              <ExibiResposta>
                <h1>{ques.answer}</h1>
                <AlinharBotao>
                  <button onClick={() => voltaNormal('errou')}>Não lembrei</button>
                  <button onClick={() => voltaNormal('quase')}>Quase Não lembrei</button>
                  <button onClick={() => voltaNormal('certo')}>Zap!</button>
                </AlinharBotao>
              </ExibiResposta>
            </>
          )}
        </PerguntaEscondida>)}
    </>
  );
}



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