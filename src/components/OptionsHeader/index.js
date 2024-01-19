import styled from 'styled-components';
const textOptions = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS']

const Options = styled.ul`
    display: flex;
`
const Option = styled.li`
    min-width: 120px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
`

function OptionsHeader() {
    return (
        <Options>
            { textOptions.map( (texto) => (
                <Option><p> {texto} </p></Option>
          ) ) }
        </Options>
    );
}

export default OptionsHeader;