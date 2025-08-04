"use client"

import styled from "styled-components"

const StyledCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`

const Title = styled.h2`
  color: #333;
  margin-bottom: 10px;
  font-size: 1.5rem;
`

const Description = styled.p`
  color: #666;
  line-height: 1.6;
`

export default function StyledComponentsExample() {
  return (
    <StyledCard>
      <Title>Styled Components</Title>
      <Description>
        This component uses styled-components, which works the same in Next.js as it did in Vite.
      </Description>
    </StyledCard>
  )
}
