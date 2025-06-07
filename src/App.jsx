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
            name === "firstName" ? "First" : "Last"
          } name is requied!!`;
        } else if (value.length < 2) {
          error = `${
            name === "firstName" ? "First" : "Last"
          } name should be alteast of 2 characters.!!`;
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          error = `${
            name === "firstName" ? "First" : "Last"
          } name can only contain letters.`;
        }

        break;

      case "userName":
        if (!value.trim()) {
          error = "userName is required!!";
        } else if (value.length < 5) {
          error = "userName should be of atleast 5 characters";
        } else if (!/^[a-zA-z0-9_]+$/.test(value)) {
          error = "userName can only contain letters, numbers and underscores.";
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
      [name]: error || "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setsubmittedData(formData);
      setCurrentPage("success");
    }
  };

  const isFormValid = () => {
    return (
      Object.values(formData).every((value) => value.trim() !== "") &&
      Object.keys(errors).every((key) => errors[key] === "")
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
      userName: "",
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
            <div style={styles.successIcon}>✓</div>
            <h1 style={styles.successTitle}>
              Registration Completed Successfully
            </h1>
            <p style={styles.successSubtitle}>Your Account has been created.</p>
          </div>

          <div style={styles.detailsGrid}>
            <div style={styles.detailsCard}>
              <h3 style={styles.detailsCardTitle}>👤 Personal Information</h3>
              <div style={styles.detailItem}>
                <span style={styles.detailLabel}>
                  First Name:<span> {submittedData?.firstName}</span>
                </span>
              </div>
              <div style={styles.detailItem}>
                <span style={styles.detailLabel}>Last Name:</span>{" "}
                {submittedData?.lastName}
              </div>
              <div style={styles.detailItem}>
                <span style={styles.detailLabel}>userName:</span>{" "}
                {submittedData?.userName}
              </div>
            </div>

            <div style={styles.detailsCard}>
              <h3 style={styles.detailsCardTitle}>📧 Contact Information</h3>
              <div style={styles.detailItem}>
                <span style={styles.detailLabel}>Email:</span>{" "}
                {submittedData?.email}
              </div>
              <div style={styles.detailItem}>
                <span style={styles.detailLabel}>Phone:</span>{" "}
                {submittedData?.countryCode} {submittedData?.phoneNumber}
              </div>
            </div>

            <div style={styles.detailsCard}>
              <h3 style={styles.detailsCardTitle}>📍 Location</h3>
              <div style={styles.detailItem}>
                <span style={styles.detailLabel}>Country:</span>{" "}
                {submittedData?.country}
              </div>
              <div style={styles.detailItem}>
                <span style={styles.detailLabel}>City:</span>{" "}
                {submittedData?.city}
              </div>
            </div>

            <div style={styles.detailsCard}>
              <h3 style={styles.detailsCardTitle}>📄 Identity Documents</h3>
              <div style={styles.detailItem}>
                <span style={styles.detailLabel}>PAN Number:</span>{" "}
                {submittedData?.panNumber.toUpperCase()}
              </div>
              <div style={styles.detailItem}>
                <span style={styles.detailLabel}>Aadhar Number:</span>{" "}
                {submittedData?.aadharNumber}
              </div>
            </div>
          </div>

          <button
            onClick={resetForm}
            style={styles.backButton}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#4338ca")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#4f46e5")}
          >
            Register Another Account
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <div style={styles.title}>
          <h1 style={styles.titleText}> Create an Account</h1>
          <p style={styles.subtitle}> Please fill in all the information.</p>
        </div>

        <div>
          <div style={styles.grid}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>First Name *</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                style={{
                  ...styles.input,
                  ...(errors.firstName ? styles.inputError : {}),
                }}
                placeholder=" Enter your first name"
                onFocus={(e) => (e.target.style.borderColor = "#4f46e5")}
                onBlur={(e) =>
                  (e.target.style.borderColor = errors.firstName
                    ? "#ef4444"
                    : "#d1d5db")
                }
              />
              {errors.firstName && (
                <p style={styles.error}>{errors.firstName}</p>
              )}
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}> Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                style={{
                  ...styles.input,
                  ...(errors.lastName ? styles.inputError : {}),
                }}
                placeholder="Enter your Last Name"
                onFocus={(e) => (e.target.style.borderColor = "#4f46e5")}
                onBlur={(e) =>
                  (e.target.style.borderColor = errors.lastName
                    ? "#ef4444"
                    : "#d1d5db")
                }
              />
              {errors.lastName && <p style={styles.error}>{errors.lastName}</p>}
            </div>
          </div>

          <div style={styles.grid}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>userName *</label>
              <input
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleInputChange}
                style={{
                  ...styles.input,
                  ...(errors.userName ? styles.inputError : {}),
                }}
                placeholder="Choose a userName"
                onFocus={(e) => (e.target.style.borderColor = "#4f46e5")}
                onBlur={(e) =>
                  (e.target.style.borderColor = errors.userName
                    ? "#ef4444"
                    : "#d1d5db")
                }
              />
              {errors.userName && <p style={styles.error}>{errors.userName}</p>}
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                style={{
                  ...styles.input,
                  ...(errors.email ? styles.inputError : {}),
                }}
                placeholder="Enter your email"
                onFocus={(e) => (e.target.style.borderColor = "#4f46e5")}
                onBlur={(e) =>
                  (e.target.style.borderColor = errors.email
                    ? "#ef4444"
                    : "#d1d5db")
                }
              />
              {errors.email && <p style={styles.error}>{errors.email}</p>}
            </div>
          </div>
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Password *</label>
          <div style={styles.passwordContainer}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              style={{
                ...styles.input,
                paddingRight: "60px",
                ...(errors.password ? styles.inputError : {}),
              }}
              placeholder="Create a strong password"
              onFocus={(e) => (e.target.style.borderColor = "#4f46e5")}
              onBlur={(e) =>
                (e.target.style.borderColor = errors.password
                  ? "#ef4444"
                  : "#d1d5db")
              }
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={styles.passwordToggle}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
          {errors.password && <p style={styles.error}>{errors.password}</p>}
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Phone Number *</label>
          <div style={styles.phoneContainer}>
            <select
              name="countryCode"
              value={formData.countryCode}
              style={styles.countryCodeSelect}
              onChange={handleInputChange}
            >
              {countryCodes.map((code) => (
                <option key={code.code} value={code.code}>
                  {code.code}({code.country})
                </option>
              ))}
            </select>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Enter your Phone number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              style={{
                ...styles.phoneInput,
                ...(errors.phoneNumber ? styles.inputError : {}),
              }}
              onFocus={(e) => (e.target.style.borderColor = "#4f46e5")}
              onBlur={(e) =>
                (e.target.style.borderColor = errors.phoneNumber
                  ? "#ef4444"
                  : "#d1d5db")
              }
            />
          </div>
          {errors.phoneNumber && (
            <p style={styles.error}>{errors.phoneNumber}</p>
          )}
        </div>

        <div style={styles.grid}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Country *</label>
            <select
              name="country"
              value={formData.country}
              style={{
                ...styles.select,
                ...(errors.country ? styles.inputError : {}),
              }}
              onChange={handleInputChange}
            >
              <option value="">Select a Country</option>
              {countries.map((country) => (
                <option key={country.name} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
            {errors.country && <p style={styles.error}>{errors.country}</p>}
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>City *</label>
            <select
              name="city"
              value={formData.city}
              style={{
                ...styles.select,
                ...(errors.city ? styles.inputError : {}),
                ...(!formData.country ? { opacity: 0.5 } : {}),
              }}
              disabled={!formData.country}
              onChange={handleInputChange}
            >
              <option value="">Select a City</option>
              {getCities().map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            {errors.city && <p style={styles.error}>{errors.city}</p>}
          </div>
        </div>

        <div style={styles.grid}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>PAN Number *</label>
            <input
              type="text"
              name="panNumber"
              value={formData.panNumber}
              placeholder="Format ABCDE1234F"
              onChange={handleInputChange}
              style={{
                ...styles.input,
                ...(errors.panNumber ? styles.inputError : {}),
              }}
              maxLength="10"
              onFocus={(e) => (e.target.style.borderColor = "#4f46e5")}
              onBlur={(e) =>
                (e.target.style.borderColor = errors.panNumber
                  ? "#ef4444"
                  : "#d1d5db")
              }
            />
            {errors.panNumber && (
              <p style={styles.error}> {errors.panNumber}</p>
            )}
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Aadhaar Number *</label>
            <input
              type="text"
              name="aadharNumber"
              value={formData.aadharNumber}
              placeholder="Format 123456789101"
              onChange={handleInputChange}
              style={{
                ...styles.input,
                ...(errors.aadharNumber ? styles.inputError : {}),
              }}
              maxLength="12"
              onFocus={(e) => (e.target.style.borderColor = "#4f46e5")}
              onBlur={(e) =>
                (e.target.style.borderColor = errors.aadharNumber
                  ? "#ef4444"
                  : "#d1d5db")
              }
            />
            {errors.aadharNumber && (
              <p style={styles.error}> {errors.aadharNumber}</p>
            )}
          </div>
        </div>

        <button
          onClick={handleSubmit}
          disabled={!isFormValid}
          style={{
            ...styles.button,
            ...(isFormValid() ? styles.buttonEnabled : styles.buttonDisabled),
          }}
          onMouseEnter={(e) => {
            if (isFormValid()) {
              e.target.style.backgroundColor = "#4338ca";
            }
          }}
          onMouseLeave={(e) => {
            if (isFormValid()) {
              e.target.style.backgroundColor = "#4f46e5";
            }
          }}
        >
          {isFormValid()
            ? "Create  Account"
            : "Please fill all mandatory fields."}
        </button>
      </div>
    </div>
  );
};

export default App;
