import styled from 'styled-components'

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 50%;
  max-width: 630px;
  min-width: 320px;
  height: auto;
  backface-visibility: hidden;
  z-index: 3;
  transform: translateX(-50%) translateY(-50%);
  visibility: ${p => (p.show ? 'visible' : 'hidden')};
`

export default ModalContainer