import React, { useState } from 'react';
import  ContainersMenu  from './styles';
import { FaBars } from 'react-icons/fa';
import Sidebar from '../Siderbar';

const ContainerMenu = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSiderbar = () => setSidebar(!sidebar);

    return(
        <ContainersMenu>
            <FaBars onClick={showSiderbar} />
            {sidebar && <Sidebar active={setSidebar} />}
        </ContainersMenu>
    )
}

export default ContainerMenu;