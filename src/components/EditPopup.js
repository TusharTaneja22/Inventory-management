import React, { useState } from "react";
import { Close } from "@mui/icons-material";
import "./EditPopup.css";

const EditPopup = ({ product, onSave, onClose }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedValue = name === "quantity" ? parseInt(value, 10) : value;
    setUpdatedProduct({
      ...updatedProduct,
      [name]: updatedValue,
    });
  };

  const handleSave = () => {
    onSave(updatedProduct);
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <div className="popup-header">
          <Close style={{ color: "yellow" }} onClick={onClose} />
        </div>

        <h1>Edit Product</h1>
        <h3 className="popup-label">{product.name}</h3>

        <div style={{ display: "flex" }}>
          <div>
            <p className="popup-label">Category</p>
            <input
              type="text"
              name="category"
              value={updatedProduct.category}
              onChange={handleChange}
              placeholder="Category"
              style={{ color: "gray" }}
            />
          </div>

          <div>
            <p className="popup-label">Price</p>
            <input
              type="text"
              name="price"
              value={updatedProduct.price}
              onChange={handleChange}
              placeholder="Price"
              style={{ color: "gray" }}
            />
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            <p className="popup-label">quantity</p>
            <input
              type="number"
              name="quantity"
              value={updatedProduct.quantity}
              onChange={handleChange}
              placeholder="Quantity"
              style={{ color: "gray" }}
            />
          </div>

          <div>
            <p className="popup-label">value</p>
            <input
              type="text"
              name="value"
              value={updatedProduct.value}
              onChange={handleChange}
              placeholder="Value"
              style={{ color: "gray" }}
            />
          </div>
        </div>
        <div className="popup-cta">
          <div className="btn close-btn" onClick={onClose}>
            Cancel
          </div>
          <div className="btn save-btn" onClick={handleSave}>
            Save
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPopup;
