import seta_play from "./assets/seta_play.png"
import styled from 'styled-components';


export default function Pergunta(produto) {
    const {question}= produto

    return (
        <>
            <Caixa>
                <h1>{question}</h1>
                <img src={seta_play} alt="forca" data-test="game-image" />
            </Caixa>
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
}
`;
