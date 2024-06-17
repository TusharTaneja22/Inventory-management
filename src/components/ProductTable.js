import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editProduct,
  deleteProduct,
  setProducts,
} from "../actions/actions";
import EditPopup from "./EditPopup";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import './ProductTable.css'

const ProductTable = ({ isAdmin }) => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [editingProduct, setEditingProduct] = useState(null);

  const handleDelete = (index) => {
    dispatch(deleteProduct(index));
  };

  const handleEdit = (index) => {
    const selectedProduct = products[index];
    if (!selectedProduct.disabled) {
      setEditingProduct({ ...selectedProduct, index });
    }
  };

  const handleSaveEdit = (index, updatedProduct) => {
    console.log("updated>>", updatedProduct);
    dispatch(editProduct(index, updatedProduct));
    setEditingProduct(null);
  };

  const handleDisable = (index) => {
    const updatedProducts = [...products];
    const disabledProduct = updatedProducts[index];
    if (!disabledProduct.disabled) {
      disabledProduct.disabled = true;
      setEditingProduct(null); 
    } else {
      disabledProduct.disabled = false;
    }
    dispatch(setProducts(updatedProducts)); 
  };

  return (
    <>
      {editingProduct && (
        <EditPopup
          product={editingProduct}
          onSave={(updatedProduct) =>
            handleSaveEdit(editingProduct.index, updatedProduct)
          }
          onClose={() => setEditingProduct(null)}
        />
      )}
      <table className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Value</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className={ !isAdmin ? "disabled-row" : "enabled-row"}>
              <td className={product.disabled ? "table-value-disabled" : "table-value"}>{product.name}</td>
              <td className={product.disabled ? "table-value-disabled" : "table-value"}>{product.category}</td>
              <td className={product.disabled ? "table-value-disabled" : "table-value"}>{product.price}</td>
              <td className={product.disabled ? "table-value-disabled" : "table-value"}>{product.quantity}</td>
              <td className={product.disabled ? "table-value-disabled" : "table-value"}>{product.value}</td>

              <td>
                {!isAdmin ? (
                  <>
                    <EditIcon
                      className={`icon-btn-${
                        product.disabled ? "disabled" : "enabled-edit"
                      }`}
                      onClick={() => handleEdit(index)}
                      disabled={product.disabled}
                    />
                    <DeleteIcon
                      className="icon-btn-enabled-delete"
                      onClick={() => handleDelete(index)}
                    />

                    {product.disabled ? (
                      <VisibilityOffIcon
                        className="icon-btn-visible"
                        onClick={() => handleDisable(index)}
                      />
                    ) : (
                      <VisibilityIcon
                        className="icon-btn-visible"
                        onClick={() => handleDisable(index)}
                      />
                    )}
                  </>
                ) : (
                  <>
                    <EditIcon className="icon-btn disabled" />
                    <DeleteIcon className="icon-btn disabled" />
                    <VisibilityIcon className="icon-btn disabled" />
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ProductTable;
