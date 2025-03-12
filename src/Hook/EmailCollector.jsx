// import { useState } from "react";

// const useSubmitEmail = () => {
//   const [formData, setFormData] = useState({ email: "" });
//   const [loading, setLoading] = useState(false);
//   const [responseMessage, setResponseMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setResponseMessage("");

//     try {
//       const response = await fetch(
//         "https://script.google.com/macros/s/AKfycbygDKDLAfIq8wKevlFZkYg6hvGqEsxBkBVzCly7Py-toRztm0_nPbC4KvjXqrgHkRAI/exec",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           mode: "no-cors", // Fix CORS error
//           body: JSON.stringify(formData),
//         }
//       );

//       if (response.ok) {
//         setResponseMessage("Email address submitted successfully!");
//         setFormData({ email: "" }); // Clear form
//       } else {
//         setResponseMessage("Email address submitted successfully!");
//         setFormData({ email: "" });
//       }
//     } catch (error) {
//       setResponseMessage("Email address submitted successfully!");
//       setFormData({ email: "" });
//     }

//     setLoading(false);
//   };

//   return { formData, loading, responseMessage, handleChange, handleSubmit };
// };

// export default useSubmitEmail;

import { useState } from "react";

const useSubmitEmail = () => {
  const [formData, setFormData] = useState({ email: "", name: "" });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log(formData);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxKg8YWRd_0_ewDioQnTCBenlu_fFICQ-eyqp5ocl-IHflX8n64y6To1-1ST-nnJeME/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "no-cors", // Fix CORS error
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setResponseMessage("Submission successful! Join our priorities now!");
        setFormData({ email: "", name: "" }); // Clear form
      } else {
        setResponseMessage("Submission successful! Join our priorities now!");
        setFormData({ email: "", name: "" });
      }
    } catch (error) {
      setResponseMessage("Submission successful! Join our priorities now!");
      setFormData({ email: "", name: "" });
    }

    setLoading(false);
  };

  return { formData, loading, responseMessage, handleChange, handleSubmit };
};

export default useSubmitEmail;