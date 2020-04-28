import styled from 'styled-components';

import Place from '../../assets/icons/location-icon.svg';

export const Container = styled.main`
  max-width: 933px;
  height: 312px;
  background: #fff;
  border-radius: 0.4rem;
  box-shadow: rgba(0, 0, 0, 0.1);
  padding: 2rem 5rem;
  margin: 0 auto;

  label {
    color: #7f7f90;
  }

  @media only screen and (max-width: 601px) {
    padding: 2rem 1rem;
    height: auto;
  }
`;

export const Form = styled.form``;

export const Icon = styled.img.attrs({
  src: Place,
})`
  position: absolute;
  top: 50%;
  left: 0.4rem;
  transform: translateY(-50%);
`;

export const SelectGroup = styled.div`
  position: relative;
`;

export const ContainerSelect = styled.div`
  [class$='-menu'] {
    top: 3.4rem;
    border: 1px solid ${props => props.theme.borderList};
    border-top: none;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
  [class$='-menu'] > div::-webkit-scrollbar {
    width: 1.05rem;
  }
  [class$='-menu'] > div::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background: ${props => props.theme.lightGray};
  }
  [class$='-indicatorContainer'] {
    padding: 0 0.3rem 0 0;

    svg {
      color: #333;
    }
  }

  [class$='-placeholder'] {
    color: #7f7f90;
  }

  > div {
    display: flex;
    > div {
      margin: 1rem;
    }
    &:nth-child(1) {
      > div:nth-child(1) {
        display: flex;
        width: 50%;
        margin-left: 0;

        > div:nth-child(1) {
          flex: 0.7;
          [class$='control'] {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            padding-left: 6rem;
          }

          label {
            left: 3rem;
          }

          @media only screen and (max-width: 601px) {
            flex: 0.6;
          }
        }

        > div:nth-child(2) {
          flex: 0.3;
          [class$='control'] {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            border-left-width: 0;
            padding-left: 3rem;
          }

          @media only screen and (max-width: 601px) {
            flex: 0.4;
          }
        }

        @media only screen and (max-width: 601px) {
          width: 100%;
        }
      }

      > div:nth-child(2) {
        flex: 0.5;
        [class$='control'] {
          padding-left: 4rem;
        }
      }

      > div:nth-child(3) {
        flex: 0.5;
        margin-right: 0;

        [class$='control'] {
          padding-left: 4.5rem;
        }
      }
    }
    &:nth-child(2) {
      > div:nth-child(1) {
        flex: 0.25;
        margin-left: 0;
      }

      > div:nth-child(2) {
        flex: 0.25;
      }

      > div:nth-child(3) {
        flex: 0.5;
        margin-right: 0;

        [class$='control'] {
          padding-left: 4.5rem;
        }
      }
    }

    @media only screen and (max-width: 601px) {
      flex-direction: column;

      > div {
        margin: 1rem 0 !important;
      }
    }
  }
`;

export const ContainerCheckbox = styled.div`
  margin: 1rem 0;

  label {
    margin-right: 3em;
    cursor: pointer;
  }
`;

export const Offers = styled.button.attrs({
  type: 'button',
})`
  border: none;
  background: ${props => props.theme.primary};
  color: #fff;
  font-size: 1.6rem;
  padding: 1.5rem 7rem;
  border-radius: 0.3rem;
  font-weight: bold;
  text-transform: uppercase;
  box-shadow: 0 0.8rem 1.2rem -0.8rem ${props => props.theme.primary};
  transition: background 0.15s ease-in-out;

  &:hover {
    background: ${props => props.theme.primaryDark};
  }

  @media only screen and (max-width: 601px) {
    font-size: 1.3rem;
    padding: 1.5rem 3rem;
  }
`;

export const Clear = styled.button.attrs({
  type: 'button',
})`
  border: none;
  background: none;
  font-size: 1.6rem;
  color: ${props => props.theme.lightGray};
  margin-right: 4rem;

  @media only screen and (max-width: 601px) {
    font-size: 1.4rem;
    margin-right: 2rem;
  }
`;

export const AdvancedSearch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    color: ${props => props.theme.primary};
    font-size: 1.6rem;
    font-weight: bold;
    text-transform: capitalize;

    @media only screen and (max-width: 601px) {
      font-size: 1.3rem;
    }
  }

  svg {
    color: ${props => props.theme.primary};
    margin-left: -0.4rem;

    @media only screen and (max-width: 601px) {
      margin-left: -0.7rem;
    }
  }

  > div {
    display: flex;
    align-items: center;
    margin-top: 1rem;

    @media only screen and (max-width: 601px) {
      &:nth-child(2) {
        width: 100%;
        justify-content: space-between;
      }
    }
  }

  @media only screen and (max-width: 601px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
