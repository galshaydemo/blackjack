import React from 'react'
import './Style/FinishGame.css'


const FinishGame = ({ handleClose, children, isOpen }) => {
  if (isOpen) {
     const showHideClassName = isOpen ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div style={{marginTop:'20px',fontSize:'32px'}}>{children}</div>
        <div className="divbutton">
			<button type="button" onClick={handleClose} >
          Close
        </button>
		</div>
      </section>
    </div>
    );
  } else {
    return <></>;
  }
};

export default FinishGame