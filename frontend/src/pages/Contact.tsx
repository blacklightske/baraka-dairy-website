import React from "react";
import { TextInput, Textarea, Button, Card } from "flowbite-react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

const Contact = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 sm:px-12 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
          <p className="text-gray-600 mt-4">
            We're here to help! Reach out to us for inquiries, support, or
            feedback.
          </p>
        </div>

        {/* Contact Details and Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Details */}
          <div className="space-y-6">
            <Card>
              <div className="flex items-center space-x-4">
                <HiLocationMarker className=" w-6 h-6" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Our Location
                  </h3>
                  <p className="text-gray-600">
                    123 Commerce St, Nairobi, Kenya
                  </p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex items-center space-x-4">
                <HiPhone className=" w-6 h-6" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Call Us
                  </h3>
                  <p className="text-gray-600">+254 712 345 678</p>
                  <p className="text-gray-600">Mon - Fri: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex items-center space-x-4">
                <HiMail className=" w-6 h-6" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Email Us
                  </h3>
                  <p className="text-gray-600">support@ecommerce.com</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <form className="bg-white shadow-lg rounded-lg p-6 space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <TextInput
                id="name"
                placeholder="John Doe"
                required
                className="w-full"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <TextInput
                id="email"
                type="email"
                placeholder="example@email.com"
                required
                className="w-full"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Write your message here..."
                rows={5}
                required
                className="w-full"
              />
            </div>

            <Button type="submit" className="w-full ">
              Send Message
            </Button>
          </form>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Find Us
          </h2>
          <div className="w-full h-64 rounded-lg overflow-hidden">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.848280062429!2d36.82194671534061!3d-1.2920662990638306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10b632be53ff%3A0x4b017fba817db234!2sNairobi%20Central!5e0!3m2!1sen!2ske!4v1695650281840!5m2!1sen!2ske"
              className="w-full h-full"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
