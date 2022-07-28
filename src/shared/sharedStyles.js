import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  visibility: ${(props) => props.visibility || null};
  flex-direction: ${(props) => props.direction || 'row'};
  flex-wrap: ${(props) => props.wrap || null};
  justify-content: ${(props) => props.justify || null};
  align-items: ${(props) => props.align || null};
  margin: ${(props) => props.margin || 0};
  padding: ${(props) => props.padding || 0};
  width: ${(props) => props.width || null};
  height: ${(props) => props.height || null};
  border: ${(props) => props.border || null};
  border-radius: ${(props) => props.radius || null};
  flex-basis: ${(props) => props.basis || null};
  border-bottom: ${(props) => props.b_bottom || null};
  border-top: ${(props) => props.b_top || null};
  background-color: ${(props) => props.backgroundColor || null};
  overflow-y: ${(props) => props.overflow || null};
  overflow-x: hidden;
  &:hover {
    cursor: ${(props) => props.cursor || null};
    background: ${(props) => props.hoverColor || null};
  }
`;

export const Button = styled.button`
  background-color: ${(props) => props.background || null};
  width: ${(props) => props.width || null};
  height: ${(props) => props.height || null};
  padding: ${(props) => props.padding || null};
  color: ${(props) => props.color || null};
  border: ${(props) => props.border || 'none'};
  border-radius: ${(props) => props.radius || null};
  margin: ${(props) => props.margin || null};
  font-weight: ${(props) => props.weight || null};
  font-size: ${(props) => props.size || null};
  &:hover {
    cursor: pointer;
    background: ${(props) => props.hoverColor || null};
  }
`;

export const Input = styled.input`
  width: ${(props) => props.width || null};
  border-radius: ${(props) => props.radius || null};
  placeholder: ${(props) => props.placeholder || null};
  margin: ${(props) => props.margin || null};
  padding: ${(props) => props.padding || null};
  border: ${(props) => props.border || 'none'};
  outline: 'none';
  &:active {
    border: ${(props) => props.border || 'none'};
    outline: 'none';
  }
  &:focus {
    border: ${(props) => props.border || 'none'};
    outline: 'none';
  }
`;
