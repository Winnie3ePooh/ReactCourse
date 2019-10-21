import React from "react";
import styled from "@emotion/styled";

import Aux from "../../hoc/Aux";
import Burger from "../Burger/Burger";

const layout = props => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <MainContainer>{props.children}</MainContainer>
  </Aux>
);

export default layout;

const MainContainer = styled.main`
  margin-top: 16px;
`;
