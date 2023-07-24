import { useState } from "react";

const Modal = ({ showModal, onClose, onCreate }) => {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCreate = () => {
    // Call the create function and pass the name
    onCreate(name);
    // Reset the name field
    setName("");
    // Close the modal
    onClose();
  };

  if (!showModal) {
    return null;
  }

  return (
    <div className="modal-container">
      <div className="modal-content">
        <h2>Create New Item</h2>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
        <div className="modal-buttons">
          <button onClick={handleCreate}>Create</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
