import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase";
import { defaultCategories } from "./Data/categories";  // 🔥 Imported
import "./Style/addProductForm.css";

function ProductForm({ newProduct, setNewProduct, handleAddProduct }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoryRef = collection(db, "categories");
        const querySnapshot = await getDocs(categoryRef);

        const fetchedCategories = querySnapshot.docs.map(
          (doc) => doc.data().name
        );

        // 🔥 Merge Default + Firestore Categories
        setCategories([
          ...new Set([...defaultCategories, ...fetchedCategories]),
        ]);

      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // 🔹 ImgBB Image Upload Function
  const handleImageUpload = async (file) => {
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=30100bb2810281d7aa0ba58f8b3831f1`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setNewProduct({
          ...newProduct,
          ImageURL: data.data.url,
        });
      } else {
        console.error("ImgBB Upload Failed:", data);
      }

    } catch (error) {
      console.error("Error uploading to ImgBB:", error);
    }

    setLoading(false);
  };

  return (
    <div className="add-product-form p-4 mb-2 shadow-sm rounded">

      <input
        type="text"
        className="form-control mb-2"
        placeholder="Product Name"
        value={newProduct.Name}
        onChange={(e) => setNewProduct({ ...newProduct, Name: e.target.value })}
      />

      <select
        className="form-control mb-2"
        value={newProduct.Category || ""}
        onChange={(e) =>
          setNewProduct({ ...newProduct, Category: e.target.value })
        }
      >
        <option value="">Select Category</option>

        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}

      </select>

      <input
        type="file"
        className="form-control mb-2"
        accept="image/*"
        onChange={(e) => handleImageUpload(e.target.files[0])}
      />

      {loading && <p className="text-info">Uploading Image...</p>}

      {newProduct.ImageURL && (
        <img
          src={newProduct.ImageURL}
          className="img-thumbnail mb-2"
          style={{ maxWidth: "150px" }}
          alt="Product"
        />
      )}

      <button className="btn btn-success w-100" onClick={handleAddProduct}>
        Add Product
      </button>

    </div>
  );
}

export default ProductForm;
