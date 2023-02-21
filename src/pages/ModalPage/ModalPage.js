import React from 'react'

  ////////////////////
  //////////////////// MODAL
  ////////////////////
  
  // VARIABLE TO OPEN/CLOSE MODAL WITH PICTURE
  const [modalIsOpen, changeIsOpen] = useState(false);

  // VARIABLE TO OPEN/CLOSE MODAL WITH PICTURE
  const [modalImgSrc, changeModalImgSrc] = useState(null);

  
  const showInModal = (src) => {
    console.log('diiing')
    changeModalImgSrc(src)
    changeIsOpen(true);
  }

const ModalPage = () => {
  return (
    <div>ModalPage</div>
  )
}

export default ModalPage