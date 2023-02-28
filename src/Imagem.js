
import logo from "./assets/logo.png";

export default function Imagem(props) {

    return (
        <>
            <div className="superior">
                <div className="raio">
                    <img src={logo} />
                </div>
                <div className="titulo">
                    <h1>ZapRecall</h1>
                </div>
            </div>
            <div className="concluidos">
                <h1>Concluidos</h1>
            </div>
        </>
    );
}