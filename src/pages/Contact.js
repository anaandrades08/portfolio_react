import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Remove o erro ao alterar o campo
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "O nome é obrigatório.";
    if (!formData.email) {
      newErrors.email = "O e-mail é obrigatório.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Digite um e-mail válido.";
    }
    if (!formData.phone) {
      newErrors.phone = "O telefone é obrigatório.";
    } else if (!/^\d{10,11}$/.test(formData.phone)) {
      newErrors.phone = "Digite um telefone válido (apenas números).";
    }
    if (!formData.message) newErrors.message = "A mensagem é obrigatória.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert("Formulário enviado com sucesso!");
      console.log("Dados enviados:", formData);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }
  };

  const handleClear = () => {
    setFormData({ name: "", email: "", phone: "", message: "" });
    setErrors({});
  };

  return (
    <div className="contact-container">
      <h2>Contato</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>
        <label>
          E-mail:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>
        <label>
          Telefone:
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </label>
        <label>
          Mensagem:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </label>
        <div className="button-group">
          <button type="submit">Enviar</button>
          <button type="button" onClick={handleClear}>
            Limpar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
