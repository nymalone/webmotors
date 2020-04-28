import styled from "styled-components";

export const SelectVehicle = styled.div`
  max-width: 933px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;

  @media only screen and (max-width: 601px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 3rem;
  }
`;

export const SelectType = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    color: ${(props) => props.theme.lightGray};
  }
  > div:nth-child(${(props) => props.active + 1}) {
    border-bottom: 3px solid ${(props) => props.theme.primary};

    svg {
      color: ${(props) => props.theme.primary};
    }

    h1 {
      color: ${(props) => props.theme.primary};
      small {
        color: ${(props) => props.theme.lightGray};
      }
    }
  }
  @media only screen and (max-width: 601px) {
    width: 100%;
  }
`;

export const Vehicles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem 1rem 0;
  border-bottom: 3px solid transparent;
  cursor: pointer;
  transition: border-bottom 0.2s ease-in-out;

  svg {
    margin: 0 1rem 0 2rem;
  }

  @media only screen and (max-width: 601px) {
    width: 50%;
    justify-content: center;
  }
`;

export const TitleVehicles = styled.h1`
  font-size: 2.8rem;
  font-weight: 100;
  text-transform: uppercase;
  color: ${(props) => props.theme.lightGray};

  small {
    display: block;
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 601px) {
    font-size: 2rem;
  }
`;

export const SellCar = styled.button`
  border: none;
  background: none;
  padding: 1rem 3rem;
  border: 0.2rem solid ${(props) => props.theme.golden};
  border-radius: 0.3rem;
  color: ${(props) => props.theme.golden};
  font-weight: bold;
  transition: background 0.15s ease-in-out;

  &:hover {
    background: ${(props) => props.theme.golden};
    color: #fff;
  }

  a {
    text-decoration: none;
  }
  a:visited {
    color: ${(props) => props.theme.golden};
  }
  a:hover {
    color: #fff;
  }

  @media only screen and (max-width: 601px) {
    order: -1;
    align-self: flex-end;
    border-radius: 40px;
    padding: 0.6rem 1.6rem;
    font-size: 1.1rem;
    background: ${(props) => props.theme.golden};
    color: #fff;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`;
