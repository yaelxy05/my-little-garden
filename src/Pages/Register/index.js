import React, { useState } from "react";
import { Link } from "react-router-dom";
// Import components
import InputField from "../../Components/InputRegister";
// Import package
import axios from "axios";
// Import SCSS
import "./register.scss";

function Register() {
  // Initial state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    firstname: "",
    lastname: "",
  });
  const [image, setImage] = useState(undefined);
  console.log(image);
  let errorsObj = {
    email: "",
    password: "",
    passwordConfirm: "",
    firstname: "",
    lastname: "",
  };
  const [errors, setErrors] = useState(errorsObj);
  const [success, setSuccess] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const API_URLS = process.env.REACT_APP_API_URL;

  // function for add new user on the server backend
  const handleSubmit = (evt) => {
    evt.preventDefault();

    const formDataUpload = new FormData();
    formDataUpload.append("image", image);

    setFormData(formData);

    axios
      .post(
        `${API_URLS}/register`,
        {
          email: formData.email,
          password: formData.password,
          firstname: formData.firstname,
          lastname: formData.lastname,
          avatar: formDataUpload,
        },
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        if (error.response.data.error.email) {
          setEmailError(true);
        }
      });
    console.log(emailError);
    let error = false;

    const errorObj = { ...errorsObj };

    if (formData.email === "") {
      errorObj.email = "L'email est requis.";
      error = true;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errorObj.email = "l'email n'est pas valide.";
    } else if (formData.email.length < 4) {
      errorObj.email = "Le champ email est trop court.";
      error = true;
    } else if (emailError) {
      errorObj.email = "Il y a déjà un compte avec cette email";
      error = true;
    } else if (
      formData.email.length > 4 &&
      /\S+@\S+\.\S+/.test(formData.email) &&
      formData.email !== ""
    ) {
      setSuccess(true);
    }
    if (formData.password === "") {
      errorObj.password = "Le mot de passe est requis.";
      error = true;
    } else if (formData.password.length < 6) {
      errorObj.password = "Le mot de passe doit contenir minimum 6 caractères.";
      error = true;
    } else if (formData.password !== formData.passwordConfirm) {
      errorObj.password = "Les champs mot de passe doivent être identique.";
      error = true;
    } else if (
      formData.password === formData.passwordConfirm &&
      formData.password !== "" &&
      formData.password.length > 6
    ) {
      setSuccess(true);
    }
    if (formData.lastname === "") {
      errorObj.lastname = "Le nom est requis.";
      error = true;
    } else if (formData.lastname.length < 2) {
      errorObj.lastname = "Le nom doit contenir minimum 6 caractères.";
      error = true;
    } else if (
      !/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(
        formData.lastname
      )
    ) {
      errorObj.lastname = "Le nom ne doit pas contenir de chiffres.";
      error = true;
    } else {
      setSuccess(true);
    }
    if (formData.firstname === "") {
      errorObj.firstname = "Le nom est requis.";
      error = true;
    } else if (formData.firstname.length < 2) {
      errorObj.firstname = "Le nom doit contenir minimum 6 caractères.";
      error = true;
    } else if (
      !/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(
        formData.firstname
      )
    ) {
      errorObj.firstname = "Le nom ne doit pas contenir de chiffres.";
      error = true;
    } else {
      setSuccess(true);
    }
    setErrors(errorObj);
  };

  return (
    <div className="register">
      <form enctype="multipart/form-data" onSubmit={handleSubmit}>
        <h1>Inscription</h1>

        <InputField
          name="email"
          placeholder=" "
          label="Email"
          success={success}
          value={formData.email}
          type="email"
          manageChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          errors={errors.email}
        />
        {errors.email && <div className="signup__error">{errors.email}</div>}

        <InputField
          name="password"
          placeholder=" "
          label="Mot de passe"
          success={success}
          value={formData.password}
          type="password"
          manageChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          errors={errors.password}
        />
        {errors.password && (
          <div className="signup__error">{errors.password}</div>
        )}
        <InputField
          name="password-confirm"
          placeholder=" "
          label="Confirmez le mot de passe"
          success={success}
          value={formData.passwordConfirm}
          type="password"
          manageChange={(e) =>
            setFormData({ ...formData, passwordConfirm: e.target.value })
          }
          errors={errors.password}
        />
        {errors.password && (
          <div className="signup__error">{errors.password}</div>
        )}
        <InputField
          name="firstname"
          placeholder=" "
          label="Prénom"
          success={success}
          value={formData.firstname}
          type="text"
          manageChange={(e) =>
            setFormData({ ...formData, firstname: e.target.value })
          }
          errors={errors.firstname}
        />
        {errors.firstname && (
          <div className="signup__error">{errors.firstname}</div>
        )}
        <InputField
          name="lastname"
          placeholder=" "
          label="Nom"
          success={success}
          value={formData.lastname}
          type="text"
          manageChange={(e) =>
            setFormData({ ...formData, lastname: e.target.value })
          }
          errors={errors.lastname}
        />
        {errors.lastname && (
          <div className="signup__error">{errors.lastname}</div>
        )}
        <InputField
          name="avatar"
          placeholder=" "
          label="Avatar"
          type="file"
          size="20000"
          id="input_avatar"
          accept=".jpg,.png,.svg"
          manageChange={(e) => setImage({ ...image, image: e.target.files[0] })}
        />

        <button className="register_button">Envoyer</button>
        <p>
          Vous avez déja un compte?{" "}
          <span>
            <Link to="/connexion">Connectez vous</Link>
          </span>{" "}
        </p>
      </form>
    </div>
  );
}

export default Register;
