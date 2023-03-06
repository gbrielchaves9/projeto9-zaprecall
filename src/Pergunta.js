//import seta_play from "./assets/seta_play.png"
import seta_virar from "./assets/seta_virar.png"
import styled from 'styled-components';
import { useState } from "react";


export default function Pergunta({ i, ques }) {
    function ChamaPergunta() {
      alert("Oi!");
    }
    const [numero , setNumero] = useState(false)
    const [exibePergunta , setExibePergunta] = useState(false)
    
  
    return (
      <>
      

        <PerguntaEscondida>
          {ques.question}
          <img src={seta_virar}  onClick={ChamaPergunta} />

        </PerguntaEscondida>
        
      </>
    );
  }
 /* <Caixa>
  <h1>Pergunta {i + 1}</h1>
  <img src={seta_play} alt="forca" data-test="game-image" onClick={ChamaPergunta} />
</Caixa>*/

  
/*const Caixa = styled.div`
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
`;*/

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