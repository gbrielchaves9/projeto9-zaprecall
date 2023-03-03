import seta_play from "./assets/seta_play.png"



export default function Pergunta(props) {

    return (
        <>
            <div className="perguntas">
                <div className="caixa">
                    <h1>Pergunta 1</h1>
                    <img src={seta_play} alt="forca" data-test="game-image" />
                </div>
            </div>
        </>
    );
}