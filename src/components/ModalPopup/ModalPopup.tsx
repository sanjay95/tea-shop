import "./ModalPopup.css";
export default function ModalPopup({ open, children, onClose }) {
  if (!open) {
    return;
  }
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <div style={{alignItems:"center"}}>
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
        </div>
      </div>
    </div>
  );
}
