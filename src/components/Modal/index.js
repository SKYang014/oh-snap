import React from 'react';

function Modal({ onClose, currentPhoto }) {
    const { name, category, description, index } = currentPhoto;

    return (
        //In the preceding statements, we've created a basic modal with a 
        //backdrop and container. The modal also contains a title, a description, 
        //the selected image, and a button to close the modal. 
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img src={require(`../../assets/large/${category}/${index}.jpg`)} alt="current category" />
                <p>
                    {description}
                </p>
                <button onClick={onClose} type="button">
                    Close this modal
                </button>
            </div>
        </div>
    );
}

export default Modal;