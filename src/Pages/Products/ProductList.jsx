import React, { useState } from "react";
import "./Style/productList.css";

function ProductList({
  products,
  role,
  addToCart,
  handleDeleteProduct,
  setEditingProduct,
  editingProduct,
  handleEditProduct,
}) {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  return (
    <div className="product-list-container">
      {products && products.length > 0 ? (
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.ImageURL}
                alt={product.Name}
                className="product-image"
                onClick={() => setFullscreenImage(product.ImageURL)}
                style={{ cursor: "pointer" }}
              />
              <h3 className="product-name">{product.Name}</h3>

              {role === "admin" ? (
                <div className="admin-controls">
                  <button
                    className="btn btn-success"
                    onClick={() => setEditingProduct(product)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    Delete
                  </button>
                </div>
              ) : (
                <button
                  className="btn1 btn-add"
                  onClick={() => addToCart(product)}
                >
                  Add to Inquiry
                </button>
              )}
            </div>
          ))}
        </div>
      ) : (
        <h2 className="text-center">No products available</h2>
      )}

      {/* Full Screen Image Popup */}
      {fullscreenImage && (
        <div
          className="fullscreen-overlay"
          onClick={() => setFullscreenImage(null)}
        >
          <img src={fullscreenImage} className="fullscreen-image" />
        </div>
      )}

      {/* Edit Product Modal (same as before) */}
      {editingProduct && (
        <div className="edit-product-modal">
          <h3>Edit Product</h3>

          <input
            type="text"
            value={editingProduct.Name}
            onChange={(e) =>
              setEditingProduct({ ...editingProduct, Name: e.target.value })
            }
            className="w-full p-2 mb-3 border border-gray-300 rounded-md"
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setEditingProduct({
                    ...editingProduct,
                    ImageFile: file,
                    ImageURL: reader.result,
                  });
                };
                reader.readAsDataURL(file);
              }
            }}
            className="w-full p-2 mb-3 border border-gray-300 rounded-md bg-white"
          />

          <button className="btn btn-success me-2" onClick={handleEditProduct}>
            Save
          </button>
          <button className="btn btn-dark" onClick={() => setEditingProduct(null)}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductList;
