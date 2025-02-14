import React, { useState } from "react";
import "../styles/Contact.css";
import emailjs from "emailjs-com"; //importa pacote de emailJS
import InputMask from "react-input-mask"; // Importa o InputMask

// Definindo as variáveis de ambiente
const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const apiKey = process.env.REACT_APP_EMAILJS_API_KEY;

// Verificando se as variáveis de ambiente estão carregadas corretamente
//console.log("Service ID:", serviceId);
//console.log("Template ID:", templateId);
//console.log("API Key:", apiKey);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
    setSuccessMessage("");
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "O nome é obrigatório.";
    } else if (formData.name.length < 3) {
      newErrors.name = "O nome deve ter pelo menos 3 caracteres.";
    }

    if (!formData.email) {
      newErrors.email = "O e-mail é obrigatório.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Digite um e-mail válido.";
    }

    if (!formData.phone) {
      newErrors.phone = "O telefone é obrigatório.";
    } else if (!/^\(\d{2}\)\s\d{5}-\d{4}$/.test(formData.phone)) {
      newErrors.phone = "Digite um telefone válido.";
    }

    if (!formData.message) {
      newErrors.message = "A mensagem é obrigatória.";
    } else if (formData.message.length < 20) {
      newErrors.message = "A mensagem deve ter pelo menos 20 caracteres.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      emailjs
        .send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            message: formData.message,
          },
          apiKey
        )
        .then(
          (result) => {
            setSuccessMessage("Mensagem enviada com sucesso!");
            setFormData({ name: "", email: "", phone: "", message: "" });
          },
          (error) => {
            setErrors({
              erroemail: "Erro ao enviar o email. Tente novamente mais tarde.",
            });
          }
        );
    }
  };

  const handleClear = () => {
    setFormData({ name: "", email: "", phone: "", message: "" });
    setErrors({});
    setSuccessMessage("");
  };

  return (
    <section
      className="contact-container"
      role="form"
      aria-labelledby="contact-form"
    >
      <div className="contact-form-container">
        <h2>Contato</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">
            Nome:<span className="dadosobrigatorios">*</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <span id="name-error" role="alert" className="error">
              {errors.name}
            </span>
          )}

          <label htmlFor="email">
            E-mail:<span className="dadosobrigatorios">*</span>
          </label>
          <input
            type="text"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <span id="email-error" role="alert" className="error">
              {errors.email}
            </span>
          )}

          <label htmlFor="phone">
            Telefone:<span className="dadosobrigatorios">*</span>
          </label>
          <InputMask
            mask="(99) 99999-9999"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          >
            {(inputProps) => <input {...inputProps} type="text" id="phone" />}
          </InputMask>
          {errors.phone && (
            <span id="phone-error" role="alert" className="error">
              {errors.phone}
            </span>
          )}

          <label htmlFor="message">
            Mensagem:<span className="dadosobrigatorios">*</span>
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <span id="message-error" role="alert" className="error">
              {errors.message}
            </span>
          )}

          <div className="button-group">
            <button type="submit">Enviar</button>
            <button type="button" onClick={handleClear}>
              Limpar
            </button>
          </div>
        </form>

        {errors.erroemail && (
          <p role="alert" className="error">
            {errors.erroemail}
          </p>
        )}
        {successMessage && <p className="success">{successMessage}</p>}
      </div>
    </section>
  );
};

export default Contact;
