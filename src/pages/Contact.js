import React, { useState } from "react";
import "../styles/Contact.css";
<<<<<<< HEAD
import emailjs from "emailjs-com";

// Definindo as variáveis de ambiente
const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const apiKey = process.env.REACT_APP_EMAILJS_API_KEY;

// Verificando se as variáveis de ambiente estão carregadas corretamente
console.log("Service ID:", serviceId);
console.log("Template ID:", templateId);
console.log("API Key:", apiKey);
=======
>>>>>>> 9fcf6116a067b5f30c93456d310bf88d6babd319

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
<<<<<<< HEAD
  const [successMessage, setSuccessMessage] = useState("");
=======
>>>>>>> 9fcf6116a067b5f30c93456d310bf88d6babd319

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
<<<<<<< HEAD
    setErrors({ ...errors, [name]: "" });
    setSuccessMessage("");
=======
    setErrors({ ...errors, [name]: "" }); // Remove o erro ao alterar o campo
>>>>>>> 9fcf6116a067b5f30c93456d310bf88d6babd319
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
<<<<<<< HEAD

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Enviando o formulário via EmailJS
      emailjs
        .send(
          serviceId, // Usando a variável serviceId
          templateId, // Usando a variável templateId
          {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            message: formData.message,
          },
          apiKey // Usando a variável apiKey
        )
        .then(
          (result) => {
            setSuccessMessage("Mensagem enviada com sucesso!");
            console.log("Email enviado:", result.text);
            setFormData({ name: "", email: "", phone: "", message: "" });
          },
          (error) => {
            console.error("Erro ao enviar o email:", error.text);
            setErrors({
              erroemail: "Erro ao enviar o email. Tente novamente mais tarde.",
            });
          }
        );
=======
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert("Formulário enviado com sucesso!");
      console.log("Dados enviados:", formData);
      setFormData({ name: "", email: "", phone: "", message: "" });
>>>>>>> 9fcf6116a067b5f30c93456d310bf88d6babd319
    }
  };

  const handleClear = () => {
    setFormData({ name: "", email: "", phone: "", message: "" });
    setErrors({});
<<<<<<< HEAD
    setSuccessMessage("");
=======
>>>>>>> 9fcf6116a067b5f30c93456d310bf88d6babd319
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
<<<<<<< HEAD
      {errors.erroemail && <p className="error">{errors.erroemail}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
=======
>>>>>>> 9fcf6116a067b5f30c93456d310bf88d6babd319
    </div>
  );
};

export default Contact;
