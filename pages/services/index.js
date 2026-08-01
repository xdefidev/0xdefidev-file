
import { useState, useEffect } from 'react';
import Link from "next/link";
import styles from "/styles/Home.module.css";
import services, { serviceName } from "../api/services";
import SeoHead from "../components/Seo";

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Service() {
  const imageLink = "https://ik.imagekit.io/lzgpc48la/pexels-pixabay-265129_6m3A9XfLh.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663654325584";

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [servicesPerPage] = useState(6);
  const [filteredServices, setFilteredServices] = useState(services);

  useEffect(() => {
    const filtered = services.filter(service =>
      (serviceName(service).toLowerCase().includes(searchTerm.toLowerCase())) ||
      (service.description || "").toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredServices(filtered);
    setCurrentPage(1);
  }, [searchTerm]);

  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = filteredServices.slice(indexOfFirstService, indexOfLastService);
  const totalPages = Math.ceil(filteredServices.length / servicesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  function formatUSD(amount) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    }).format(amount);
  }

  return (
    <section>
      <SeoHead
        title="Services | Blockchain, Smart Contract & Web3 Development Solutions | XDefiDev"
        description="Explore XDefiDev's blockchain development services: smart contract development, DeFi protocols, dApps, NFT marketplaces, crypto exchanges, blockchain infrastructure, and Web3 consulting. Tailored solutions for startups and enterprises."
        path="/services"
      />

      <div className="!my-24" id="grid-container">
        <div className="text-center text-5xl !mb-8 font-semibold antialiased">
          <h1>Blockchain & Web3 Development Services</h1>
        </div>
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          From token and smart contract development to full dApps, custom blockchains, and crypto exchanges, our engineers deliver production-ready Web3 solutions at transparent, fixed pricing.
        </p>

        <div className="flex justify-center mb-8 mx-4 sm:mx-0">
          <input
            type="text"
            placeholder="Search services..."
            aria-label="Search blockchain and Web3 development services"
            className="px-4 py-2 border border-gray-300 rounded-lg w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 my-4 sm:mx-5">
          {currentServices.map((item, index) => (
            <Link
              href={`/services/${item.slug}`}
              className={styles.card}
              key={index}
            >
              <img
                src={item.image || imageLink}
                alt={serviceName(item)}
                width="100%"
                loading="lazy"
              />
              <div className="text-black text-xs font-semibold antialiased">
                {formatUSD(item.price)}
              </div>
              <h3 className="text-gray-900 font-semibold antialiased text-balance">
                {serviceName(item)} &rarr;
              </h3>
              <p className="ffont-base text-xs antialiased text-balance !font-josefin">
                {item.description}
              </p>
            </Link>
          ))}
        </div>

        {filteredServices.length > servicesPerPage && (
          <div className="flex justify-center mt-8">
            <nav className="flex items-center gap-2" aria-label="Services pagination">
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

        <div className="text-center mt-4 text-gray-600">
          Showing {currentServices.length} of {filteredServices.length} services
          {searchTerm && ` matching "${searchTerm}"`}
        </div>
      </div>
    </section>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
}
