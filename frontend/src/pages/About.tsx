import { Card } from "flowbite-react";

const About = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 sm:px-12 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
          <p className="text-gray-600 mt-4">
            Your trusted partner in providing the best e-commerce experience.
          </p>
        </div>

        {/* Mission and Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <Card className="shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
            <p className="text-gray-600 mt-4">
              To empower customers by providing a seamless shopping experience
              with high-quality products and unparalleled customer service.
            </p>
          </Card>
          <Card className="shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
            <p className="text-gray-600 mt-4">
              To become a global leader in the e-commerce industry, connecting
              people with products they love.
            </p>
          </Card>
        </div>

        {/* History Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Our Story
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            Founded in 2020, we started as a small team passionate about
            revolutionizing online shopping. Today, we’ve grown into a leading
            e-commerce platform, trusted by thousands of customers worldwide.
            From humble beginnings to a thriving company, we’ve always
            prioritized quality, innovation, and customer satisfaction.
          </p>
        </div>

        {/* Values Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Card className="shadow-lg">
              <h3 className="text-xl font-bold text-gray-800">
                Customer Focus
              </h3>
              <p className="text-gray-600 mt-2">
                We put our customers at the heart of everything we do.
              </p>
            </Card>
            <Card className="shadow-lg">
              <h3 className="text-xl font-bold text-gray-800">Innovation</h3>
              <p className="text-gray-600 mt-2">
                We strive to stay ahead by embracing change and innovation.
              </p>
            </Card>
            <Card className="shadow-lg">
              <h3 className="text-xl font-bold text-gray-800">Integrity</h3>
              <p className="text-gray-600 mt-2">
                Honesty and transparency are the foundation of our business.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
