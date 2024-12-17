import { useState } from "react";
import thumbnail from "../assets/default_image.jpg";
import ImageComponent from "./ImageComponent";
import { data } from "../data/products";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    data.categories[0].name
  );
  const [contactNumber, setContactNumber] = useState("");
  const [enquiryProduct, setEnquiryProduct] = useState("");
  const [isEnquiring, setIsEnquiring] = useState(false); // To track if the user is making an enquiry

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const handleContactChange = (event) => {
    setContactNumber(event.target.value);
  };

  const handleInquiryClick = (productName) => {
    setEnquiryProduct(productName);
    setIsEnquiring(true); // Show the inquiry form when a product is selected
  };

  const handleSubmitEnquiry = () => {
    if (contactNumber) {
      alert(
        `"${enquiryProduct}" चौकशी साठी धन्यवाद!. आम्ही तुम्हाला लवकरच संपर्क करू.`
      );
      // Reset the form
      setContactNumber("");
      setEnquiryProduct("");
      setIsEnquiring(false);
    } else {
      alert("कृपया योग्य मोबाईल क्रमांक टाका.");
    }
  };

  const currentCategory = data.categories.find(
    (category) => category.name === selectedCategory
  );

  return (
    <div className="products-container">
      <div className="product-categories">
        {data.categories.map((category) => (
          <button
            key={category.name}
            onClick={() => handleCategoryClick(category.name)}
            className="category-btn"
            style={{
              backgroundColor:
                selectedCategory === category.name ? "#4CAF50" : "#f1f1f1",
              color: selectedCategory === category.name ? "white" : "black",
            }}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div style={{ flexGrow: 1, padding: "10px" }}>
        <h1 style={{ marginBottom: "1rem" }}>{selectedCategory}</h1>
        <div className="product-grid">
          {currentCategory.products.map((product) => (
            <div key={product.productName} className="product-card">
              <ImageComponent
                src={product.image}
                fallbackSrc={thumbnail}
                alt={product.productName}
                width={300}
                height={300}
                loading="lazy"
              />
              <h2>{product.productName}</h2>
              {/* <p> */}
              <ul className="description-list">
                {product.description.split(". ").map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {/* </p> */}
              <p>₹ {product.price}</p>
              <button
                className="inquiry-btn"
                onClick={() => handleInquiryClick(product.productName)}
              >
                चौकशी करा
              </button>
            </div>
          ))}
        </div>

        {/* Display Contact Form if Inquiring */}
        {isEnquiring && (
          <div className="inquiry-form">
            <h3>चौकशी करा: {enquiryProduct}</h3>
            <div className="form-element">
              <label htmlFor="contact-number">तुमचा मोबाईल क्र: </label>

              <input
                type="tel"
                id="contact-number"
                value={contactNumber}
                maxLength={10}
                onChange={handleContactChange}
                placeholder="उदा. ९९९९२२४४२२"
                style={{ padding: "5px", width: "100%" }}
              />
            </div>
            <button onClick={handleSubmitEnquiry} className="inquiry-btn">
              पाठवा
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
