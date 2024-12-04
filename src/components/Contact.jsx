import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e2877177-ed16-4463-9638-6dfc732f2932");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        setResult(data.message);
      }
    } catch (error) {
      setResult("An error occurred while submitting the form.");
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <h1 className="text-4xl text-center sm:text-5xl font-bold text-blue-100" id="contact">Contact Me</h1>
      <form onSubmit={onSubmit} className="max-w-2xl mx-auto p-4 bg-opacity-80 bg-blue-950 rounded-lg shadow-lg mt-8 mb-40">
        <div className="mb-4">
          <label className="block text-blue-100 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            className="w-full p-2 rounded text-black"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-blue-100 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            className="w-full p-2 rounded text-black"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-blue-100 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            className="w-full p-2 rounded text-black"
            rows="6"
            required
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-center">
          <button type="submit" className="shadow-lg bg-blue-600 text-blue-100 font-bold py-2 px-4 rounded hover:bg-blue-300">
            Submit
          </button>
        </div>
        {result && <p className="text-blue-100 mt-4">{result}</p>}
      </form>
    </>
  );
};

export default Contact;


