import styled from "styled-components"

export const StyledAccordionWrapper = styled.div`
  background: rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  margin: 40px 0;
  border: 1px solid #1a202c;
`

export const StyledHeader = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;

  h3 {
    position: relative;
    font-size: 24px;
    padding: 18px;
    margin: 0;
  }
`

export const StyledIcon = styled.div`
  position: absolute;
  ${({ $isRTL }) => ($isRTL ? "left: 18px;" : "right: 18px;")}
  top: 50%;
  transform: translate(0, -42%);

  svg {
    width: 24px !important;
    height: 24px !important;
  }
`

export const StyledBody = styled.div`
  padding: 0 18px 18px 18px;
`
