import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submittedName, setSubmittedName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedName(formData.name);
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <main className="min-h-[70vh] bg-[#fffdf8] px-5 py-[50px] text-[#292524] max-[600px]:px-[15px] max-[600px]:py-[35px]">
      {/* Page Heading */}
      <section className="mx-auto mb-[35px] max-w-[600px] text-center">
        <p className="text-[12px] font-bold tracking-[2px] text-[#e4773e]">
          WE'D LOVE TO HEAR FROM YOU
        </p>

        <h1 className="my-3 text-[42px] font-bold max-[600px]:text-[34px]">
          Get in Touch
        </h1>

        <p className="leading-[1.7] text-[#78716c]">
          Have a question, suggestion, or feedback? Send us a message!
        </p>
      </section>

      {/* Form Card */}
      <section className="mx-auto max-w-[540px] rounded-[20px] border border-[#f0e8de] bg-white p-8 shadow-[0_8px_24px_rgba(70,45,25,0.06)] max-[600px]:px-[18px] max-[600px]:py-[23px]">
        {submitted ? (
          <div className="px-[10px] py-[25px] text-center">
            <span className="text-[38px]">❤️</span>

            <h2 className="my-[15px] text-2xl font-bold">
              Thank you, {submittedName || "friend"}!
            </h2>

            <p className="leading-[1.7] text-[#78716c]">
              Your message has been submitted successfully.
            </p>

            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-[15px] cursor-pointer rounded-[9px] border-none bg-[#e4773e] px-[18px] py-3 text-white transition-colors duration-200 hover:bg-[#c95d29]"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-[22px] flex flex-col gap-[9px]">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-[#44403c]"
              >
                Your Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="box-border w-full rounded-[10px] border border-[#e7ded4] bg-[#fffdf8] px-[14px] py-[13px] text-sm text-[#292524] outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-[#a8a29e] focus:border-[#e4773e] focus:shadow-[0_0_0_3px_rgba(228,119,62,0.12)]"
              />
            </div>

            {/* Email Field */}
            <div className="mb-[22px] flex flex-col gap-[9px]">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-[#44403c]"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="box-border w-full rounded-[10px] border border-[#e7ded4] bg-[#fffdf8] px-[14px] py-[13px] text-sm text-[#292524] outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-[#a8a29e] focus:border-[#e4773e] focus:shadow-[0_0_0_3px_rgba(228,119,62,0.12)]"
              />
            </div>

            {/* Message Field */}
            <div className="mb-[22px] flex flex-col gap-[9px]">
              <label
                htmlFor="message"
                className="text-sm font-semibold text-[#44403c]"
              >
                Your Message
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="box-border min-h-[130px] w-full resize-y rounded-[10px] border border-[#e7ded4] bg-[#fffdf8] px-[14px] py-[13px] text-sm text-[#292524] outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-[#a8a29e] focus:border-[#e4773e] focus:shadow-[0_0_0_3px_rgba(228,119,62,0.12)]"
              />
            </div>

            {/* Submit Button */}
            <button
              className="w-full cursor-pointer rounded-[10px] border-none bg-[#e4773e] px-5 py-[14px] text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#c95d29]"
              type="submit"
            >
              Send Message <span className="ml-2">→</span>
            </button>
          </form>
        )}
      </section>

      {/* Bottom Note */}
      <p className="mt-[30px] text-center text-[13px] text-[#78716c]">
        Made with ❤️ for the FoodieHub community.
      </p>
    </main>
  );
};

export default Contact;
