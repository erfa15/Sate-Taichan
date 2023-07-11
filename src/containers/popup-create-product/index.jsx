import styles from "./popup-create-product.module.scss";
import { formattedText } from "@/src/utils";
import { useState, useRef } from "react";
import { MdOutlineClose } from "react-icons/md";
import { useMutation } from "@tanstack/react-query";
import { createProduct } from "@/src/services/api";
import Image from "next/image";

export default function PopupCreateProduct(props) {
  const { toggle, category, setMessage, refetch } = props;
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    desc: "",
    kategoriId: "",
  });
  const [imagePreview, setImagePreview] = useState("");
  const [image, setImage] = useState("");
  const { mutate, isLoading } = useMutation((formData) =>
    createProduct(formData)
  );

  // const imageRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleInputImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (!file) {
      setImagePreview(null);
    }
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.price || !formData.desc || !image) {
      return;
    }

    const newFormData = new FormData();
    newFormData.append("image", image);
    newFormData.append("title", formData.title);
    newFormData.append("price", formData.price);
    newFormData.append("desc", formData.desc);
    newFormData.append("kategoriId", formData.kategoriId);

    mutate(newFormData, {
      onSuccess: async () => {
        refetch();
        setMessage("Product Successfully Created");
      },
      onError: (error) => {
        console.error("Error uploading image:", error);
      },
      onSettled: () => {
        toggle(false);
      },
    });
  };

  if (isLoading) {
    return (
      <div className={styles.popup_create}>
        <div className={styles.popup_content}>
          <h4 className={styles.popup_form__header}>
            Please wait, product is creating...
          </h4>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.popup_create}>
      <div className={styles.popup_content}>
        {imagePreview && (
          <Image
            src={imagePreview}
            alt="test"
            width={200}
            height={200}
            className={styles.popup_image}
          />
        )}
        <div>
          <div className={styles.popup_content__header}>
            <h1>New Product</h1>
            <MdOutlineClose
              className={styles.popup_content__icon}
              onClick={() => toggle((prevState) => !prevState)}
            />
          </div>
          <form className={styles.popup_form} onSubmit={handleSubmit}>
            <div className={styles.popup_form__content}>
              <label className={styles.popup_form__header}>Name</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.popup_form__content}>
              <label className={styles.popup_form__header}>Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.popup_form__content}>
              <label className={styles.popup_form__header}>Description</label>
              <textarea
                name="desc"
                value={formData.desc}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.popup_form__content}>
              <label className={styles.popup_form__header}>Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleInputImage(e)}
              />
            </div>
            <div className={styles.popup_form__content}>
              <label className={styles.popup_form__header}>Kategori</label>
              <select
                value={formData.kategoriId}
                name="kategoriId"
                onChange={handleInputChange}
              >
                <option value="">Select an option</option>
                {category ? (
                  category.map((item) => (
                    <option key={item.id} value={item.id}>
                      {formattedText(item.title)}
                    </option>
                  ))
                ) : (
                  <option>Loading categories...</option>
                )}
              </select>
            </div>
            <button type="submit">Upload</button>
          </form>
        </div>
      </div>
    </div>
  );
}
