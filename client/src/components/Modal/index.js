import React from 'react'

import ModalContent from './ModalContent'
import ModalContainer from './ModalContainer'
import Overlay from './Overlay'

const noOp = () => {}

const Modal = ({ show, onClose = noOp, children }) => (
  <div>
    <ModalContainer show={show}>
      <ModalContent show={show}>{children}</ModalContent>
    </ModalContainer>

    <Overlay show={show} onClick={onClose} />
  </div>
)

export default Modal