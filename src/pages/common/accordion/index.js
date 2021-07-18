import React, { useState } from "react"
import PropTypes from "prop-types"
import { ArrowDownwardFillIcon, ArrowUpwardOutlineIcon } from "@iconbox/eva"
import {
  StyledAccordionWrapper,
  StyledHeader,
  StyledIcon,
  StyledBody,
} from "./styles"

const Accordion = ({ children, title, open, isRTL }) => {
  const [isOpen, setIsOpen] = useState(open)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <StyledAccordionWrapper>
      <StyledHeader onClick={handleToggle}>
        <h3>{title}</h3>
        <StyledIcon $isRTL={isRTL}>
          {isOpen ? <ArrowUpwardOutlineIcon /> : <ArrowDownwardFillIcon />}
        </StyledIcon>
      </StyledHeader>

      {isOpen && <StyledBody>{children}</StyledBody>}
    </StyledAccordionWrapper>
  )
}

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  open: PropTypes.bool,
  isRTL: PropTypes.bool,
}

Accordion.defaultProps = {
  open: false,
  isRTL: false,
}

export default Accordion
