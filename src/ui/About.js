import React from "react";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
import about_img from "../img/about-image.jpg";
import manag_photo1 from "../img/team/person1.jpg";
import manag_photo2 from "../img/team/person1.jpg";
import InnerHeaderBanner from "../components/InnerHeaderBanner";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import abtHeader from "../img/about-header.jpg";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner name={"About Us"} img={abtHeader} />

      <main id="main">
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Helping Clients ACHIEVE their Vision</h2>
            </div>
            <div className="row gy-4 align-items-center" data-aos="fade-up">
              <div className="col-lg-6">
                <img
                  src={about_img}
                  className="img-fluid"
                  alt="Helping Clients achieve their Vision"
                  title="Helping Clients achieve their Vision"
                />
              </div>
              <div className="col-lg-6">
                <p>
                  {" "}
                  At BBriti, we specialize in revenue generation by focusing on
                  pipeline setup, ensuring a steady flow of opportunities, and
                  partnership handling, fostering strategic collaborations for
                  business growth. Our approach includes market analysis to
                  identify new trends and revenue opportunities. We prioritize
                  sales process optimization by leveraging the latest tools and
                  techniques and monitoring performance metrics to enhance
                  efficiency and success.
                </p>
                <p>
                  {" "}
                  Our commitment to sales enablement includes setting up sales
                  teams, providing comprehensive training and nurturing, and
                  developing impactful content to empower them. We design and
                  execute effective go-to-market strategies, driving market
                  penetration, enhancing awareness, and targeting specific
                  customer segments. Our expertise extends to customer
                  relationship management (CRM) through CRM system
                  implementation and developing customer retention strategies to
                  foster loyalty.
                </p>
                <p>
                  {" "}
                  With a focus on digital transformation, we ensure seamless
                  technology integration and leverage data analytics to drive
                  informed decisions. Our financial planning and analysis
                  services include budgeting and forecasting and conducting ROI
                  analysis to support growth initiatives. Additionally, we
                  enhance operational efficiency through process improvement and
                  cost optimization, ensuring sustainable and profitable growth.
                </p>
                <p>
                  {" "}
                  At BBriti, we are dedicated to empowering businesses to
                  achieve success in an evolving market.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          id="vision"
          className="vision aos-init"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4 aos-init">
                <div className="card-item">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="card-body">
                        <h4 className="card-title"> Vision</h4>
                        <p>
                          To be a trusted partner in driving sustainable
                          business growth by empowering organizations with
                          innovative strategies, cutting-edge technologies, and
                          efficient processes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 aos-init">
                <div className="card-item">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="card-body">
                        <h4 className="card-title"> Mission</h4>
                        <p>
                          To drive impactful business growth by blending
                          innovation, strategy, and technology. We aim to
                          empower organizations with the tools, insights, and
                          partnerships they need to achieve sustainable success
                          and build meaningful customer relationships.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 aos-init"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="card-item">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="card-body">
                        <h4 className="card-title">Our Values</h4>
                        <p>
                          {" "}
                          Our values are centered on innovation, collaboration,
                          integrity, excellence, and adaptability, with a strong
                          commitment to customer satisfaction and growth.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section
          id="management"
          className="management light-bg aos-init"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="container">
            <div className="section-header">
              <h2>Our Team</h2>
              <p>
                BBriti's leadership team is dedicated to meet and exceed
                customer expectations with innovative and cost-effective
                solutions, industry know-how and unmatched services.
              </p>
            </div>
            <div className="row member d-flex align-items-center ">
              <div className="col-md-2">
                <div className="pic">
                  <img src={manag_photo1} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-md-10">
                <div className="member-info">
                  <h4>Arjuna V Gujjar</h4>
                  <span>Founder & Director</span>
                  <p>
                    Arjuna is a visionary with 8 Years of experience and has
                    worked with consulting majors & service industries in the
                    field of IT technologies. He extensive multi-functional
                    management experience in sales, business and corporate
                    development
                  </p>
                  <div className="social">
                    <Link to="/">
                      <i className="bi bi-twitter"></i>
                    </Link>
                    <Link to="https://www.linkedin.com/in/aishwarya-lk-03807914b/">
                      {" "}
                      <i className="bi bi-linkedin"></i>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row member d-flex align-items-center mt-4">
              <div className="col-md-2">
                <div className="pic">
                  <img src={manag_photo2} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-md-10">
                <div className="member-info">
                  <h4>Adithya V Gujjar </h4>
                  <span>Co-Founder</span>

                  <p>
                    Adithya is a dedicated and experienced legal professional
                    committed to providing strategic guidance and personalized
                    solutions to meet clients' diverse legal needs.
                  </p>
                  <div className="social">
                    <Link to="/">
                      <i className="bi bi-twitter"></i>
                    </Link>
                    <Link to="https://www.linkedin.com/in/aishwarya-lk-03807914b/">
                      {" "}
                      <i className="bi bi-linkedin" target="_blank"></i>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
