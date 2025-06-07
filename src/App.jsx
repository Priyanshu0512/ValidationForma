import React, { useState } from "react";
import { countries, countryCodes } from "./constants/constant";
const App = () => {
  const [currentPage, setCurrentPage] = useState("form");
  const [submittedData, setsubmittedData] = useState(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    countryCode: "",
    phoneNumber: "",
    country: "",
    city: "",
    panNumber: "",
    aadharNumber: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const styles = {
    container: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%)",
      padding: "48px 16px",
      fontFamily: "Arial, sans-serif",
    },
    formContainer: {
      maxWidth: "1024px",
      margin: "0 auto",
      backgroundColor: "white",
      borderRadius: "16px",
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      padding: "32px",
    },
    title: {
      textAlign: "center",
      marginBottom: "32px",
    },
    titleText: {
      fontSize: "32px",
      fontWeight: "bold",
      color: "#1f2937",
      marginBottom: "8px",
    },
    subtitle: {
      color: "#6b7280",
      fontSize: "16px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "24px",
      marginBottom: "24px",
    },
    inputGroup: {
      marginBottom: "24px",
    },
    label: {
      display: "block",
      fontSize: "14px",
      fontWeight: "500",
      color: "#374151",
      marginBottom: "8px",
    },
    input: {
      width: "100%",
      padding: "12px 16px",
      border: "1px solid #d1d5db",
      borderRadius: "8px",
      fontSize: "16px",
      transition: "all 0.2s",
      outline: "none",
      boxSizing: "border-box",
    },
    inputError: {
      borderColor: "#ef4444",
    },
    inputFocus: {
      borderColor: "#4f46e5",
      boxShadow: "0 0 0 3px rgba(79, 70, 229, 0.1)",
    },
    select: {
      width: "100%",
      padding: "12px 16px",
      border: "1px solid #d1d5db",
      borderRadius: "8px",
      fontSize: "16px",
      backgroundColor: "white",
      outline: "none",
      boxSizing: "border-box",
    },
    passwordContainer: {
      position: "relative",
    },
    passwordToggle: {
      position: "absolute",
      right: "12px",
      top: "50%",
      transform: "translateY(-50%)",
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "#6b7280",
      fontSize: "14px",
    },
    phoneContainer: {
      display: "flex",
      gap: "12px",
    },
    countryCodeSelect: {
      width: "140px",
      padding: "12px 8px",
      border: "1px solid #d1d5db",
      borderRadius: "8px",
      fontSize: "14px",
      backgroundColor: "white",
      outline: "none",
    },
    phoneInput: {
      flex: "1",
      padding: "12px 16px",
      border: "1px solid #d1d5db",
      borderRadius: "8px",
      fontSize: "16px",
      outline: "none",
    },
    error: {
      color: "#ef4444",
      fontSize: "14px",
      marginTop: "4px",
    },
    button: {
      width: "100%",
      padding: "16px 24px",
      borderRadius: "8px",
      fontSize: "16px",
      fontWeight: "500",
      border: "none",
      cursor: "pointer",
      transition: "all 0.2s",
      marginTop: "24px",
    },
    buttonEnabled: {
      backgroundColor: "#4f46e5",
      color: "white",
    },
    buttonDisabled: {
      backgroundColor: "#9ca3af",
      color: "white",
      cursor: "not-allowed",
    },
    successContainer: {
      maxWidth: "1024px",
      margin: "0 auto",
      backgroundColor: "white",
      borderRadius: "16px",
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      padding: "32px",
    },
    successIcon: {
      width: "64px",
      height: "64px",
      backgroundColor: "#d1fae5",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 16px",
      fontSize: "32px",
      color: "#059669",
    },
    successTitle: {
      fontSize: "32px",
      fontWeight: "bold",
      color: "#1f2937",
      textAlign: "center",
      marginBottom: "8px",
    },
    successSubtitle: {
      color: "#6b7280",
      textAlign: "center",
      marginBottom: "32px",
    },
    detailsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "24px",
      marginBottom: "32px",
    },
    detailsCard: {
      backgroundColor: "#f9fafb",
      padding: "16px",
      borderRadius: "8px",
    },
    detailsCardTitle: {
      fontWeight: "600",
      color: "#374151",
      marginBottom: "12px",
      fontSize: "16px",
    },
    detailItem: {
      marginBottom: "8px",
      fontSize: "14px",
    },
    detailLabel: {
      fontWeight: "500",
    },
    backButton: {
      backgroundColor: "#4f46e5",
      color: "white",
      padding: "12px 32px",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "500",
      display: "block",
      margin: "0 auto",
    },
  };

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "firstName":
      case "lastName":
        if (!value.trim()) {
          error = `${
            name === "firstname" ? "First" : "Last"
          } name is requied!!`;
        } else if (value.length < 2) {
          error = `${
            name === "firstname" ? "First" : "Last"
          } name should be alteast of 2 characters.!!`;
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          error = `${
            name === "firstname" ? "First" : "Last"
          } name can only contain letters.`;
        }

        break;

      case "userName":
        if (!value.trim()) {
          error = "Username is required!!";
        } else if (value.length < 5) {
          error = "Username should be of atleast 5 characters";
        } else if (!/^[a-zA-z0-9_]+$/.test(value)) {
          error = "Username can only contain letters, numbers and underscores.";
        }
        break;

      case "email":
        if (!value.trim()) {
          error = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Please enter a valid email address";
        }
        break;

      case "password":
        if (!value) {
          error = "Password is required!!";
        } else if (value.length < 8) {
          error = "Password length must be atleast 8 characters.";
        } else if (
          !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(
            value
          )
        ) {
          error =
            "Password must contain uppercase, lowercase, number, and special character";
        }
        break;

      case "phoneNumber":
        if (!value) {
          error = "Phone Number is required";
        } else if (value.length !== 10) {
          error = "Enter a valid phone number of 10 digits";
        } else if (!/^[0-9]+$/.test(value)) {
          error = "Phone number must only contain digits.";
        }
        break;

      case "country":
        if (!value) {
          error = "Country is required!!";
        }
        break;

      case "city":
        if (!value) {
          error = "City is required!!";
        }
        break;

      case "panNumber":
        if (!value.trim()) {
          error = "PAN number is required.";
        } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value.toUpperCase())) {
          error = "PAN number should be of format: ABCDE1234F";
        }
        break;

      case "aadharNumber":
        if (!value.trim()) {
          error = "Aadhar number is required!!";
        } else if (!/^\d{12}$/.test(value.replace(/\s/g, ""))) {
          error = "Aadhar number must be 12 digits";
        }
        break;

      default:
        break;
    }
    return error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name == "country") {
      setFormData((prev) => ({
        ...prev,
        city: "",
      }));
    }

    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(
      formData.forEach((key) => {
        const error = validateField(key, formData[key]);
        if (error) {
          newErrors[key] = error;
        }
      })
    );

    setErrors(newErrors);

    if (Object.keys(newErrors).lenght === 0) {
      setsubmittedData(formData);
      setCurrentPage("success");
    }
  };

  const isFormValid = () => {
    return (
      Object.values(formData).every((value) => value.trim() !== "") &&
      Object.values(errors).every((error) => error === "")
    );
  };

  const getCities = () => {
    const selectedCountry = countries.find((c) => c.name === formData.country);
    return selectedCountry ? selectedCountry.cities : [];
  };

  const resetForm = () => {
    setCurrentPage("form");
    setFormData({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      countryCode: "+1",
      phoneNumber: "",
      country: "",
      city: "",
      panNumber: "",
      aadharNumber: "",
    });
    setErrors({});
    setsubmittedData(null);
  };

  if (currentPage === "success") {
    return (
      <div style={styles.container}>
        <div style={styles.successContainer}>
          <div style={styles.title}>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
