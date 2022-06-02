import React, {useState} from "react";
import * as C from "./styles";
import { Container } from "./styles";
import Sidebar from '../Siderbar';
import { FaBars } from 'react-icons/fa';
import  ContainerMenu  from "../Menu";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSiderbar = () => setSidebar(!sidebar);
  return (
    <C.Container>
      <C.Header>
        <ContainerMenu>
          <FaBars onClick={showSiderbar} />
          {sidebar && <Sidebar active={setSidebar} />}
          
        </ContainerMenu>
       
      </C.Header>
    </C.Container>



  )
}

export default Header;
