import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "/styles/Service.module.css";
import services from "../api/services";
import SeoHead, { SITE_URL } from "../components/Seo";

import Image from "next/image";
import Link from "next/link";

import SocialModal from "../components/SocialModal";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export async function getStaticPaths({ locales }) {
  const paths = [];
  for (const locale of locales) {
    for (const item of services) {
      paths.push({
        params: { service: item.slug },
        locale,
      });
    }
  }
  return { paths, fallback: false };
}

export async function getStaticProps({ params, locale }) {
  const selected = [];

  const select = await services.map(
    (item) => params.service == item.slug && selected.push(item)
  );

  const post = await selected[0];

  return {
    props: {
      post,
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
}

export default function Service({ post, onOpen }) {
  const { t } = useTranslation();
  // const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const imageLink =
    "https://ik.imagekit.io/lzgpc48la/pexels-pixabay-265129_6m3A9XfLh.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663654325584";

  // console.log(post, "hh");

  function formatUSD(amount) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0, // Allow no decimal places
      maximumFractionDigits: 2  // But show up to 2 if needed
    }).format(amount);
  }

  const featureList = t(`service.${post.slug}.p.list`, { returnObjects: true }) || [];

  const serviceName = t(`service.${post.slug}.name`);
  const serviceDescription = t(`service.${post.slug}.description`);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/${post.slug}#service`,
    name: serviceName,
    description: serviceDescription,
    provider: { "@id": `${SITE_URL}/#organization` },
    serviceType: serviceName,
    areaServed: "Worldwide",
    offers: {
      "@type": "Offer",
      price: post.price,
      priceCurrency: "USD",
      description: "Starting price for this Web3 development service",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <SeoHead
        title={`${serviceName} | XDefiDev Web3 Development Service`}
        description={serviceDescription}
        path={`/services/${post.slug}`}
        image={post.image || imageLink}
        type="website"
        schema={[productSchema]}
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-600/5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {t(`service.${post.slug}.name`)}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t(`service.${post.slug}.description`)}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Media Content */}
            <div className="md:col-span-2 lg:col-span-2">
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                {post.youtube ? (
                  <div className="relative pb-[56.25%] h-0">
                    <iframe
                      src={`https://www.youtube.com/embed/${post.youtube}`}
                      title="Service Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      className="absolute top-0 left-0 w-full h-full rounded-2xl"
                    ></iframe>
                  </div>
                ) : (
                  <img
                    src={post.image || imageLink}
                    loading="lazy"
                    className="w-full h-80 object-cover"
                    alt={t(`service.${post.slug}.name`)}
                  />
                )}
              </div>
            </div>

            {/* Pricing Card */}
            <div className="md:col-span-1 lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 md:sticky md:top-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Pricing</h2>
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {formatUSD(post.price)}
                  </div>
                  <p className="text-sm text-gray-500">Starting from</p>
                </div>

                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  {t('service.custom_request')}
                </p>

                <Button
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  onPress={onOpen}
                >
                  {t('service.get_exact_quote')}
                </Button>

                {/* Features Preview */}
                <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-3 text-base md:text-lg">What's Included:</h3>
                  <ul className="grid grid-rows-3 space-y-2 md:space-y-1">
                    {Array.isArray(featureList) && featureList.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-gray-600">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Description */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t('service.description')}
              </h2>
              <div className="prose prose-lg text-gray-600 leading-relaxed">
                <p>{t(`service.${post.slug}.description`)}</p>
                <br />
                <p>{t(`service.${post.slug}.p.description`)}</p>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                {t('service.key_features')}
              </h3>
              <div className="space-y-4">
                {Array.isArray(featureList) && featureList.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {idx + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Let's discuss your project requirements and provide you with a custom quote.
          </p>
          <Button
            className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            onPress={onOpen}
          >
            Get Your Custom Quote
          </Button>
        </div>
      </section>
    </div>
  );
}
