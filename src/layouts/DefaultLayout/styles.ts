import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100bh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme['gray-800']};
`
