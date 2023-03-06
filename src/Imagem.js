import logo from "./assets/logo.png";
import styled from 'styled-components';


export default function Imagem() {

    return (
        <>
            <Container>
            
                    <Foto src={logo} />
                
                    <Titulo>
                    <h1>ZapRecall</h1>
                    </Titulo>
                
            </Container>
        </>
    );
}
const Container = styled.div`
 display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 42px;
`;

const Titulo = styled.div`
    font-family: Righteous;
       font-size: 36px;
       font-weight: 400;
       color: white;
      
`;
const Foto = styled.img`
	  height: 60px;
    width: 52px;
`;





