import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Us </title>
        <meta
          name="description"
          content="Quick Ecomm is your trusted online shopping destination for electronics, fashion, and more. Learn about our mission and what drives us."
        />
      </Head>

      <section className="container py-5 mt-5">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold text-primary">About Smile Shop</h1>
          <p className="lead text-muted">
            Your one-stop shop for everything you love — fast, affordable, and reliable.
          </p>
        </div>

        {/* Image + Content */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 mb-4 mb-md-0 text-center">
            <Image
              src="/images/gettyimages-2231450415-612x612.jpg"
              alt="Our e-commerce journey"
              width={600}
              height={400}
              className="rounded shadow-sm img-fluid"
            />
          </div>

          <div className="col-md-6">
            <h2 className="fw-bold mb-3">Who We Are</h2>
            <p>
              Smile shop is an innovative online shopping platform created to bring quality
              products closer to you. From the latest gadgets to everyday essentials,
              we deliver everything right to your doorstep with care and speed.
            </p>
            <p>
              Founded by a team of passionate developers and retail experts, our goal is to
              redefine the way people shop online by making it simpler, smarter, and more
              enjoyable.
            </p>
          </div>
        </div>

        {/* Mission + Values */}
        <div className="row align-items-center mt-5">
          <div className="col-md-6 order-md-2 text-center">
            <Image
              src="/images/123.jpeg"
              alt="Our mission and values"
              width={600}
              height={400}
              className="rounded shadow-sm img-fluid"
            />
          </div>

          <div className="col-md-6 order-md-1">
            <h2 className="fw-bold mb-3">Our Mission</h2>
            <p>
              Our mission is to empower customers with an effortless shopping experience.
              We focus on trust, quality, and satisfaction — ensuring every purchase feels
              rewarding and secure.
            </p>

            <h3 className="fw-bold mt-4 mb-2">Our Core Values</h3>
            <ul>
              <li>💡 Innovation — We constantly improve our platform for a seamless experience.</li>
              <li>🤝 Integrity — We believe in transparent pricing and honest service.</li>
              <li>🚀 Speed — We deliver fast, every time, everywhere.</li>
              <li>😊 Customer Happiness — You are at the heart of everything we do.</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-5">
          <h4 className="fw-bold mb-3">Join Our Journey</h4>
          <p className="text-muted mb-4">
            Be part of the Smile shop family and experience the future of online shopping today.
          </p>
          <Link href="/products" className="btn btn-primary px-4 py-2 rounded-pill">
            Start Shopping 🛍️
          </Link>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
