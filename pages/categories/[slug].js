import React from "react";
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import { Accordion, AccordionItem } from "@heroui/react";

import services, { serviceName } from "../api/services";
import { categories } from "../api/categories";
import SeoHead, { SITE_URL } from "../components/Seo";

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticPaths({ locales }) {
  const paths = [];
  for (const locale of locales) {
    for (const category of categories) {
      paths.push({ params: { slug: category.slug }, locale });
    }
  }
  return { paths, fallback: false };
}

export async function getStaticProps({ params, locale }) {
  const category = categories.find((c) => c.slug === params.slug);
  if (!category) {
    return { notFound: true };
  }
  return {
    props: {
      category,
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
}

const CategoryPage = ({ category }) => {
  const imageLink =
    "https://ik.imagekit.io/lzgpc48la/pexels-pixabay-265129_6m3A9XfLh.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663654325584";

  const categoryServices = services.filter(
    (item) => item.category == category.serviceCategory
  );

  function formatUSD(amount) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    }).format(amount);
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: category.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: category.label,
        item: `${SITE_URL}/categories/${category.slug}`,
      },
    ],
  };

  return (
    <div className="my-12">
      <SeoHead
        title={category.metaTitle}
        description={category.metaDescription}
        path={`/categories/${category.slug}`}
        image={category.ogImage}
        hreflang={["en"]}
        schema={[faqSchema, breadcrumbSchema]}
      />

      {/* Hero */}
      <section className="sm:mx-16 mx-4 grid sm:grid-cols-2 items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="h-full flex flex-col justify-center"
        >
          <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-700 text-sm font-semibold mb-4 w-fit">
            {category.label}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {category.h1}
          </h1>
          {category.intro.map((paragraph, i) => (
            <p key={i} className="text-lg text-gray-600 leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="#services"
              className="inline-flex items-center px-8 py-3.5 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Explore Services
            </a>
            <a
              href="#faq"
              className="inline-flex items-center px-8 py-3.5 border-2 border-blue-400/40 text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300"
            >
              FAQ
            </a>
          </div>
        </motion.div>

        <div className="h-full flex justify-center items-center">
          <Image
            src={category.heroImage1}
            width={600}
            height={600}
            priority={true}
            loading="eager"
            quality={85}
            alt={`${category.label} services overview illustration`}
          />
        </div>
      </section>

      <div className="flex justify-center items-center w-full my-8">
        <Image
          src={category.heroImage2}
          width={600}
          height={600}
          priority={true}
          loading="eager"
          quality={85}
          className="flex rounded-lg"
          alt={`${category.label} services illustration`}
        />
      </div>

      {/* Services Grid */}
      <section id="services" className="sm:mx-16 mx-4 my-24 scroll-mt-24">
        <h2 className="text-4xl text-center font-semibold">Services</h2>
        {categoryServices.length > 0 ? (
          <div className="grid sm:grid-cols-3 gap-4 my-6">
            {categoryServices.map((item, index) => (
              <Link
                href={`/services/${item.slug}`}
                className="rounded-lg shadow-md p-4 relative"
                key={index}
              >
                <img
                  src={item.image || imageLink}
                  alt={serviceName(item)}
                  width="100%"
                  loading="lazy"
                  className="rounded h-[200px]"
                />
                <div className="text-black bg-white rounded-md p-1 text-xs font-semibold antialiased absolute top-7 left-8">
                  {formatUSD(item.price)}
                </div>
                <h3 className="text-gray-900 font-semibold antialiased text-balance mt-3">
                  {serviceName(item)} &rarr;
                </h3>
                <p className="text-xs text-gray-600 antialiased text-balance mt-1">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 mt-8">
            We take custom projects in this area.{" "}
            <a
              href="mailto:xdefidev@gmail.com"
              className="text-blue-600 font-semibold underline"
            >
              Contact us
            </a>{" "}
            to discuss your requirements.
          </p>
        )}

        <div className="text-center mt-8">
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            View All Services
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="sm:mx-16 mx-4 my-24 grid sm:grid-cols-2 gap-8 scroll-mt-24">
        <h2 className="text-4xl sm:text-6xl font-semibold">Frequently Asked Questions</h2>
        <div className="my-6">
          <Accordion variant="splitted">
            {category.faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                aria-label={`FAQ ${index + 1}`}
                title={faq.q}
              >
                {faq.a}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Let's discuss your project and get you a custom quote within 24 hours.
          </p>
          <a
            href="mailto:xdefidev@gmail.com"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Get Your Custom Quote
          </a>
        </div>
      </section>

      {/* Other Categories */}
      <section className="sm:mx-16 mx-4 my-24">
        <h2 className="text-3xl font-semibold text-center mb-8">Explore Other Services</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {categories
            .filter((c) => c.slug !== category.slug)
            .map((c) => (
              <Link
                key={c.slug}
                href={`/categories/${c.slug}`}
                className="px-5 py-2.5 rounded-full border border-gray-200 bg-white text-gray-700 font-medium hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
              >
                {c.label}
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;
