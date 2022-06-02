import React from 'react';
import { Container, Content } from './styles';
import {
    FaTimes,
    FaHome,
    FaEnvelope,
    FaRegSun,
    FaUserAlt,
    FaIdCardAlt,
    FaRegCalendarAlt,
    FaChartBar
} from 'react-icons/fa';

import SidebarItem from'../SiderbarItem/index';


const Sidebar = ({ active }) => {
    
    const closeSidebar = () => {
        active(false);
    }

return (
    <Container sidebar={active}>
        <FaTimes onClick={closeSidebar} />
        <Content>
        <SidebarItem Icon={FaHome} Text="Home" />
        <SidebarItem Icon={ FaChartBar} Text="Estatisticas" />
        <SidebarItem Icon={ FaUserAlt } Text="Usuário" />
        <SidebarItem Icon={FaEnvelope} Text="E-mail" />
        <SidebarItem Icon={ FaRegCalendarAlt} Text="Calendario" />
        <SidebarItem Icon={FaIdCardAlt} Text="Reports" />
        <SidebarItem Icon={FaRegSun} Text="Configuração" />
           
        </Content>
    </Container>
    )
}

export default Sidebar;