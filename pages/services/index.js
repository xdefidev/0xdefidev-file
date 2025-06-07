import { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Link from "next/link";
import Footer from "../components/Footer";
import styles from "/styles/Home.module.css";
import services from "../api/services";
import Head from "next/head";

export default function Service() {
  const imageLink = "https://ik.imagekit.io/lzgpc48la/pexels-pixabay-265129_6m3A9XfLh.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663654325584";
  
  // State for search, pagination, and filtered services
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [servicesPerPage] = useState(6); // Adjust as needed
  const [filteredServices, setFilteredServices] = useState(services);

  // Filter services based on search term
  useEffect(() => {
    const filtered = services.filter(service => 
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredServices(filtered);
    setCurrentPage(1); // Reset to first page when search changes
  }, [searchTerm]);

  // Get current services for pagination
  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = filteredServices.slice(indexOfFirstService, indexOfLastService);
  const totalPages = Math.ceil(filteredServices.length / servicesPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  function formatUSD(amount) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0, // Allow no decimal places
      maximumFractionDigits: 2  // But show up to 2 if needed
    }).format(amount);
  }

  return (
    <section>
      <Head>
        <title>{`Services | Expert Blockchain & Fullstack Development Solutions`}</title>
        <meta
          name="description"
          content="Discover our range of services, from blockchain development to fullstack web and mobile solutions. We offer tailored development, consulting, and implementation services to bring your digital ideas to life. Partner with us to elevate your business with innovative technology"
        />
        <meta http-equiv="content-language" content="en" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://xdefidev.com/services"
          key="canonical"
        />
      </Head>

      <div className="!my-24" id="grid-container">
        <div className="text-center text-5xl !mb-8 font-semibold antialiased">
          <h1>Services</h1>
        </div>
        
        {/* Search Bar */}
        <div className="flex justify-center mb-8 mx-4 sm:mx-0">
          <input
            type="text"
            placeholder="Search services..."
            className="px-4 py-2 border border-gray-300 rounded-lg w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        {/* Services Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 my-4 sm:mx-5">
          {currentServices.map((item, index) => (
            <Link
              href={`/services/${item.slug}`}
              className={styles.card}
              alt={item.description}
              key={index}
            >
              <img
                src={item.image || imageLink}
                alt={item.name}
                width="100%"
                loading="lazy"
              />
              <div className="text-black text-xs font-semibold antialiased">
                {formatUSD(item.price)}
              </div>
              <h3 className="text-gray-900 font-semibold antialiased text-balance">
                {item.name} &rarr;
              </h3>
              <p className="ffont-base text-xs antialiased text-balance !font-josefin">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
        
        {/* Pagination Controls */}
        {filteredServices.length > servicesPerPage && (
          <div className="flex justify-center mt-8">
            <nav className="flex items-center gap-2">
              <button
                onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded border disabled:opacity-50"
              >
                Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`px-3 py-1 rounded border ${currentPage === number ? 'bg-[#7828C8] text-white' : ''}`}
                >
                  {number}
                </button>
              ))}
              
              <button
                onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 rounded border disabled:opacity-50"
              >
                Next
              </button>
            </nav>
          </div>
        )}
        
        {/* Display search results count */}
        <div className="text-center mt-4 text-gray-600">
          Showing {currentServices.length} of {filteredServices.length} services
          {searchTerm && ` matching "${searchTerm}"`}
        </div>
      </div>
    </section>
  );
}