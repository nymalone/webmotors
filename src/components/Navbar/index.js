import React, { memo } from "react";

import { Container, Logo } from "./styles";

function Navbar() {
  return (
    <Container>
      <Logo />
    </Container>
  );
}
export default memo(Navbar);
