import React, { Fragment } from 'react'
import styles from './Modal.module.css'
import ReactDom from 'react-dom'

const portalEle = document.getElementById('overlays')

const Backdrop = () => {
  return <div className={styles.backdrop}></div>
}

const ModalOverlays = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  )
}

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop />, portalEle)}
      {ReactDom.createPortal(
        <ModalOverlays>{props.children}</ModalOverlays>,
        portalEle
      )}
    </Fragment>
  )
}

export default Modal
