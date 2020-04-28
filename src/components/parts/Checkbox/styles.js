import styled from 'styled-components';

export const ContainerCheckbox = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: ${props => props.theme.primary};
  stroke-width: 3px;
`;

export const InvisibleCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 1.8rem;
  height: 1.8rem;
  margin: 0 0.9rem 0 0;
  background: #fff;
  border-radius: 2px;
  border: 1px solid ${props => props.theme.lightGray};
  transition: all 150ms;

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`;
