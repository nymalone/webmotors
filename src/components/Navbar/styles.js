import styled from "styled-components";

import logoWebMotors from "../../assets/logo/webmotors.svg";

export const Container = styled.header`
  max-width: 933px;
  margin: 0 auto;
  margin-top: 10px;
`;

export const Logo = styled.img.attrs({
  src: logoWebMotors,
})`
  margin: 1rem;

  @media only screen and (max-width: 601px) {
    width: 14rem;
  }
`;
