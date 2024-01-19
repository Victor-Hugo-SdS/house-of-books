import perfil from '../../images/perfil.svg';
import sacola from '../../images/sacola.svg';
import styled from 'styled-components';

const icons = [perfil, sacola];

const Iconss = styled.ul`
    display: flex;
    align-items: center;
`
const Icon = styled.li`
        margin-right: 40px;
        width: 25px;
        align-items: center;
`

function IconsHeader() {
    return (
        <Iconss>
            { icons.map( (icon) => (
              <Icon> <img src={icon}></img> </Icon>
            ) ) }
        </Iconss>
    );
}

export default IconsHeader;