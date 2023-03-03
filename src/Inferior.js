import styled from 'styled-components';

export default function Inferior({nperguntas}) {

    return (
        <>
            <Concluidos>
                <h1> 0/{nperguntas} conclidos </h1>
            </Concluidos>
        </>
    );
}

const Concluidos = styled.div`
 position: fixed;
    bottom: 0;
    background: #FFFFFF;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;

    h1{
        font-size: 18px;
    font-weight: 400;
    }
`;