import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#333338] text-white py-12 mt-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">COUNTRIES</h3>
          <ul className="space-y-2">
            <li>Indonesia</li>
            <li>Singapore</li>
            <li>UAE</li>
            <li>Sri Lanka</li>a
            <li>West Indies</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">HELP</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">About Us</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
            <li><a href="#" className="hover:text-gray-400">Current Opening</a></li>
            <li><a href="#" className="hover:text-gray-400">Press Release</a></li>
            <li><a href="#" className="hover:text-gray-400">Press Coverage</a></li>
            <li><a href="#" className="hover:text-gray-400">Sitemap</a></li>
            <li><a href="#" className="hover:text-gray-400">FAQs</a></li>
            <li><a href="#" className="hover:text-gray-400">Terms and Conditions</a></li>
            <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">BOOKMYSHOW EXCLUSIVES</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">Lollapalooza India</a></li>
            <li><a href="#" className="hover:text-gray-400">Superstar</a></li>
            <li><a href="#" className="hover:text-gray-400">BookAChange</a></li>
            <li><a href="#" className="hover:text-gray-400">Corporate Vouchers</a></li>
            <li><a href="#" className="hover:text-gray-400">Gift Cards</a></li>
            <li><a href="#" className="hover:text-gray-400">List My Show</a></li>
            <li><a href="#" className="hover:text-gray-400">Offers</a></li>
            <li><a href="#" className="hover:text-gray-400">Stream</a></li>
            <li><a href="#" className="hover:text-gray-400">Trailers</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8 text-center">
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
              <path d="M12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.438a3.362 3.362 0 100-6.723 3.362 3.362 0 000 6.723z" />
              <circle cx="12.001" cy="11.998" r="3.08" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z" fill-rule="evenodd" clip-rule="evenodd" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
              <path d="M12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.438a3.362 3.362 0 100-6.723 3.362 3.362 0 000 6.723z" />
              <circle cx="12.001" cy="11.998" r="3.08" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.8c2.438 0 2.75 1.829 2.75 2.655 0 .495-.144 1.167-.365 1.644-.221.477-.662.938-.987 1.337-.325.399-.576.778-.576 1.233 0 .495.224.896.5 1.267h.94c1.316 0 2.824 1.288 2.824 2.877 0 1.593-1.293 2.898-2.885 2.898-3.205 0-4.752-4.413-4.752-6.16 0-1.751 1.087-2.851 2.525-2.851z" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
              <path d="M12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.438a3.362 3.362 0 100-6.723 3.362 3.362 0 000 6.723z" />
              <circle cx="12.001" cy="11.998" r="3.08" />
            </svg>
          </a>
        </div>
        <div className="mt-8 text-sm">
          <p>Copyright 2024 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.</p>
          <p>The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and the endorsement of the artist shall not be implied. Unauthorized use is prohibited and punishable by law.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;