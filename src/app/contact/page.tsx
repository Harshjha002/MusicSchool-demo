import React from 'react';

function ContactUsPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-semibold mb-6 text-white">Contact Us</h1>
        
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Your Name</label>
            <input 
              type="text" 
              id="name" 
              className="mt-1 block w-full px-4 py-2 border border-gray-600 bg-gray-700 text-gray-200 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="John Doe"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
            <input 
              type="email" 
              id="email" 
              className="mt-1 block w-full px-4 py-2 border border-gray-600 bg-gray-700 text-gray-200 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
            <textarea 
              id="message" 
              rows="4"
              className="mt-1 block w-full px-4 py-2 border border-gray-600 bg-gray-700 text-gray-200 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your message here..."
            ></textarea>
          </div>

          <div>
            <button 
              type="submit" 
              className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUsPage;
