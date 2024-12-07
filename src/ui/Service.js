import React from "react";
import revenue_genaration from "../img/revenue_genaration.svg";
import sales_optimization from "../img/sales_optimization.svg";
import sale_enablement from "../img/sale_enablement.svg";
import marketing_strategy from "../img/marketing_strategy.svg";
import digital_marketing from "../img/digital_marketing.svg";
import financial_planning from "../img/financial_planning.svg";
import operational_efficiency from "../img/operational_efficiency.svg";

import InnerHeaderBanner from "../components/InnerHeaderBanner";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";
import serviceHeader from "../img/services-header.jpg";

const Service = () => {
  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner name={"Services"} img={serviceHeader} />

      <main id="main">
        <section id="services-list" className="services-list">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>
                We focus
                <span style={{ color: "#155bd5" }}>
                  {" "}
                  Business Growth as a Service{" "}
                </span>
                on provides tailored solutions to accelerate your business
                success, from strategic planning to execution
              </h2>
            </div>

            <div
              className="row gy-5 pt-5 align-items-center"
              id="Revenue-Generation"
            >
              <div
                className="col-lg-5 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  src={revenue_genaration}
                  className="img-fluid"
                  alt=""
                  title="Revenue Generation"
                  style={{ maxWidth: "70%" }}
                />
              </div>

              <div
                className="col-lg-7 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon flex-shrink-0">
                  <i className="bi bi-cash" style={{ color: "#15a04a" }}></i>
                </div>
                <div>
                  <h4 className="title"> Revenue Generation </h4>
                  <p className="description">
                    <span className="fw-bold"> Pipeline Setup</span>{" "}
                    Establishing and managing a robust sales pipeline to ensure
                    a steady flow of opportunities.
                  </p>
                  <p className="description">
                    <span className="fw-bold"> Partnership Handling </span>
                    Identifying, establishing, and maintaining strategic
                    partnerships to drive business growth.
                  </p>
                  <p className="description">
                    <span className="fw-bold"> Market Analysis</span> Conducting
                    thorough market research to identify new revenue
                    opportunities and trends.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="services-list light-bg"
          id="Sales-Process-Optimization"
        >
          <div className="container" data-aos="fade-up">
            <div className="row gy-5 align-items-center ">
              <div
                className="col-lg-7 col-md-6 service-item "
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon flex-shrink-0">
                  <i
                    className="bi  bi-graph-up-arrow"
                    style={{ color: "#f57813" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title">Sales Process Optimization </h4>
                  <p className="description">
                    <span className="fw-bold"> Tools and Techniques </span>{" "}
                    Implementing the latest sales tools and techniques to
                    streamline the sales process and improve efficiency
                  </p>
                  <p className="description">
                    <span className="fw-bold"> Performance Metrics</span>{" "}
                    Establishing and monitoring key performance indicators
                    (KPIs) to measure and optimize sales performance.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-5 col-md-6 service-item order-first order-sm-last"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  src={sales_optimization}
                  className="img-fluid"
                  alt=""
                  style={{ maxWidth: "70%" }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="services-list ">
          <div className="container" id="Sales-Enablement">
            <div className="row gy-5  align-items-center">
              <div
                className="col-lg-5 col-md-6 service-item "
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  src={sale_enablement}
                  className="img-fluid"
                  alt="sale_enablement"
                />
              </div>

              <div
                className="col-lg-7 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon flex-shrink-0">
                  <i className="bi bi-receipt" style={{ color: "#f5cf13" }}></i>
                </div>
                <div>
                  <h4 className="title"> Sales Enablement </h4>
                  <p className="description">
                    <span className="fw-bold">Setting up Sales Team</span>{" "}
                    Recruiting and structuring a high-performing sales team
                    tailored to the needs of the organization.
                  </p>
                  <p className="description">
                    <span className="fw-bold">
                      Training & Nurturing Sales Team
                    </span>{" "}
                    Providing comprehensive training and ongoing support to
                    ensure the sales team is equipped to achieve their targets.
                  </p>
                  <p className="description">
                    <span className="fw-bold">Content Development</span>{" "}
                    Creating and providing sales materials and resources to
                    support the sales team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-list light-bg" id="Market-Strategy">
          <div className="container">
            <div className="row gy-5 align-items-center">
              <div
                className="col-lg-7 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-lightbulb "
                    style={{ color: "#1335f5" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title"> Market-Strategy </h4>
                  <p className="description">
                    <span className="fw-bold">Strategies</span> Developing and
                    executing effective go-to-market strategies to launch
                    products or services successfully.
                  </p>

                  <p className="description">
                    <span className="fw-bold">Penetration</span> Implementing
                    tactics to penetrate new markets and expand market reach.
                  </p>

                  <p className="description">
                    <span className="fw-bold">Awareness</span> Enhancing brand
                    awareness through targeted marketing and promotional
                    activities.
                  </p>

                  <p className="description">
                    <span className="fw-bold">Customer Segmentation</span>{" "}
                    Identifying and targeting specific customer segments for
                    more effective market penetration.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-5 col-md-6 service-item order-first order-sm-last"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img src={marketing_strategy} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="services-list ">
          <div className="container" id="Customer_Relationship_Management">
            <div className="row gy-5  align-items-center">
              <div
                className="col-lg-5 col-md-6 service-item "
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img src={sale_enablement} className="img-fluid" alt="" />
              </div>

              <div
                className="col-lg-7 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-people-fill"
                    style={{ color: "#15a04a" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title"> Customer Relationship Management </h4>
                  <p className="description">
                    <span className="fw-bold">CRM System Implementation</span>{" "}
                    Setting up and managing CRM systems to track customer
                    interactions and improve customer relationships.
                  </p>
                  <p className="description">
                    <span className="fw-bold">
                      Customer Retention Strategies
                    </span>{" "}
                    Developing strategies to retain existing customers and
                    increase customer loyalty.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-list light-bg" id="Digital_Transformation">
          <div className="container">
            <div className="row gy-5 align-items-center">
              <div
                className="col-lg-7 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-bar-chart"
                    style={{ color: "#f57813" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title">Digital Transformation</h4>
                  <p className="description">
                    <span className="fw-bold">Technology Integration</span>{" "}
                    Integrating digital tools and technologies to support
                    business growth.
                  </p>

                  <p className="description">
                    <span className="fw-bold">Data Analytics</span> Utilizing
                    data analytics to gain insights and drive informed
                    decision-making.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-5 col-md-6 service-item order-first order-sm-last"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  src={digital_marketing}
                  className="img-fluid"
                  alt=""
                  style={{ maxWidth: "70%" }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="services-list ">
          <div className="container" id="Financial_Planning_and_Analysis">
            <div className="row gy-5  align-items-center">
              <div
                className="col-lg-5 col-md-6 service-item "
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  src={financial_planning}
                  className="img-fluid"
                  alt=""
                  style={{ maxWidth: "70%" }}
                />
              </div>

              <div
                className="col-lg-7 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-piggy-bank"
                    style={{ color: "#f5cf13" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title">Financial Planning and Analysis </h4>
                  <p className="description">
                    <span className="fw-bold">Budgeting and Forecasting</span>{" "}
                    Assisting with financial planning, budgeting, and
                    forecasting to support business growth.
                  </p>
                  <p className="description">
                    <span className="fw-bold">ROI Analysis</span> Evaluating the
                    return on investment for various growth initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-list light-bg" id="Operational_Efficiency">
          <div className="container">
            <div className="row gy-5 align-items-center">
              <div
                className="col-lg-7 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-arrow-repeat"
                    style={{ color: "#1335f5" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title">Operational Efficiency</h4>
                  <p className="description">
                    <span className="fw-bold">Process Improvement</span>{" "}
                    Identifying and implementing process improvements to enhance
                    operational efficiency.
                  </p>

                  <p className="description">
                    <span className="fw-bold">Cost Optimization</span>{" "}
                    Developing strategies to reduce costs and improve
                    profitability.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-5 col-md-6 service-item order-first order-sm-last"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  src={operational_efficiency}
                  className="img-fluid"
                  alt=""
                  style={{ maxWidth: "70%" }}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Service;
