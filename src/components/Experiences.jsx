import React from 'react';

const Experiences = () => {
  return (
    <div className="mb-40 pb-4 flex items-center justify-center" id = "experiences">
      <div className="container mx-auto max-w-full flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-100">Experiences</h1>
        <div className="max-w-3xl mx-auto bg-opacity-80 bg-blue-950 p-6 rounded-lg shadow-lg mt-8">
          {/* Experience 1 */}
          <div className="mb-8">
            <div className="text-blue-200 text-sm sm:text-base font-semibold">
              <span>2023 — PRESENT</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-blue-100">Technical Systems Specialist · Palace Inn</h2>
            <p className="text-blue-200 mt-2">
              Maintain critical on-site infrastructure, including servers, routers, switches, and network equipment,
              troubleshooting and resolving network issues, ensuring uninterrupted connectivity for the hotel&apos;s guests.
            </p>
          </div>

          {/* Experience 2 */}
          <div className="mb-8">
            <div className="text-blue-200 text-sm sm:text-base font-semibold">
              <span>2021 — 2021</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-blue-100">Software Engineer Intern · Sycamore Life Sciences</h2>
            <p className="text-blue-200 mt-2">
            Developed a Python script that automated the analysis of pricing data for over 250 product listings, reducing manual effort by 90%. This automation enabled the company to make data-driven decisions and optimize its pricing strategy, resulting in a 50% increase in sales for target products. Additionally, I utilized NumPy and matplotlib to visualize pricing trends, providing valuable insights for the company's pricing strategy. My work also involved developing the company's website using HTML and CSS within Magento, improving its overall visual appeal. Overall, my internship experience at Sycamore Life Sciences allowed me to apply my technical skills to drive business growth and improve operational efficiency.
            </p>
            <div className="flex flex-wrap mt-4 gap-2">
              <span className="px-2 py-1 bg-blue-900 text-blue-100 rounded-full text-sm">JavaScript</span>
              <span className="px-2 py-1 bg-blue-900 text-blue-100 rounded-full text-sm">HTML & CSS</span>
              <span className="px-2 py-1 bg-blue-900 text-blue-100 rounded-full text-sm">React</span>
              <span className="px-2 py-1 bg-blue-900 text-blue-100 rounded-full text-sm">Python</span>
              <span className="px-2 py-1 bg-blue-900 text-blue-100 rounded-full text-sm">Selenium</span>
              <span className="px-2 py-1 bg-blue-900 text-blue-100 rounded-full text-sm">BeautifulSoup</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;