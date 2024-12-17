import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [isDisabled, setIsDisabled] = useState(true);
  if (!formData) {
    setIsDisabled(true);
  }
  const handleChange = (e) => {
    setIsDisabled(false);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    clearForm(e);
  };
  const clearForm = (event) => {
    event.preventDefault();
    setFormData({
      name: "",
      email: "",
      mobile: "",
      message: "",
    });
  };
  return (
    <div className="contact">
      <h1>संपर्क करा</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">नाव</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={handleChange}
            value={formData.name}
            placeholder="Ex. John Doe"
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">ई-मेल</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            required
            onChange={handleChange}
            placeholder="example@email.com"
          />
        </div>
        <div className="form-control">
          <label htmlFor="mobile">मोबाईल क्र.</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            pattern="[0-9]{10}"
            title="Ten digit mobile number"
            placeholder="Ex. 9121234439"
            value={formData.mobile}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="message">संदेश</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            required
            onChange={handleChange}
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <div className="btn-control">
          <button
            className="btn btn-submit"
            type="submit"
            style={{
              backgroundColor: isDisabled ? "gray" : "",
            }}
            disabled={isDisabled}
          >
            पाठवा
          </button>
          <button
            className="btn btn-reset"
            style={{ backgroundColor: isDisabled ? "gray" : "" }}
            disabled={isDisabled}
            onClick={clearForm}
          >
            रिसेट करा
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
