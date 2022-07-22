import { children } from "react"

const Modal = () => {
    return(
        <div className="modal-custom">
            <h1>MODAL TITULO</h1>
            {children}
        </div>
    )
}

export default Modal