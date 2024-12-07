import React from "react";
import { Link } from "react-router-dom";

const ServiceList = () => {
  return (
    <>
      <section id="services-list" className="services-list">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>What we do? </h2>
            <h6>(paragraph starting from "Lorem ipsum" needs right conten)</h6>
            <p>
              We focus on Business Growth as a Service provides tailored
              solutions to accelerate your business success, from strategic
              planning to execution
            </p>
          </div>
          <div className="row gy-5">
            <div
              className="col-lg-6 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="single-service">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-cash" style={{ color: "#f57813" }}></i>
                </div>
                <div>
                  <h4 className="title">
                    <Link to="/services" className="stretched-link">
                      Revenue Generation
                    </Link>
                  </h4>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque nisl eros, pulvinar facilisis justo mollis, auctor
                    consequat urna. Morbi a bibendum metus. Donec scelerisque
                    sollicitudin enim eu venenatis.
                  </p>
                  <Link to="/services" className="btn-get-started">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="single-service">
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-graph-up-arrow"
                    style={{ color: "#15a04a" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title">
                    <Link to="/services" className="stretched-link">
                      Sales Process Optimization
                    </Link>
                  </h4>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque nisl eros, pulvinar facilisis justo mollis, auctor
                    consequat urna. Morbi a bibendum metus. Donec scelerisque
                    sollicitudin enim eu venenatis.
                  </p>
                  <Link to="/services" className="btn-get-started">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="single-service">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-receipt" style={{ color: "#f5cf13" }}></i>
                </div>
                <div>
                  <h4 className="title">
                    <Link to="/services" className="stretched-link">
                      Sales Enablement{" "}
                    </Link>
                  </h4>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque nisl eros, pulvinar facilisis justo mollis, auctor
                    consequat urna. Morbi a bibendum metus. Donec scelerisque
                    sollicitudin enim eu venenatis.
                  </p>
                  <Link to="/services" className="btn-get-started">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="single-service">
                <div className="icon flex-shrink-0">
                  <i
                    className="bi  bi-lightbulb "
                    style={{ color: "#1335f5" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title">
                    <Link to="/services" className="stretched-link">
                      Market Strategy{" "}
                    </Link>
                  </h4>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque nisl eros, pulvinar facilisis justo mollis, auctor
                    consequat urna. Morbi a bibendum metus. Donec scelerisque
                    sollicitudin enim eu venenatis.
                  </p>
                  <Link to="/services" className="btn-get-started">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="single-service">
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-people-fill"
                    style={{ color: "#f57813" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title">
                    <Link to="/services" className="stretched-link">
                      Customer Relationship Management
                    </Link>
                  </h4>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque nisl eros, pulvinar facilisis justo mollis, auctor
                    consequat urna. Morbi a bibendum metus. Donec scelerisque
                    sollicitudin enim eu venenatis.
                  </p>
                  <Link to="/services" className="btn-get-started">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="single-service">
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-bar-chart"
                    style={{ color: "#15a04a" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title">
                    <Link to="/services" className="stretched-link">
                      Digital Transformation
                    </Link>
                  </h4>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque nisl eros, pulvinar facilisis justo mollis, auctor
                    consequat urna. Morbi a bibendum metus. Donec scelerisque
                    sollicitudin enim eu venenatis.
                  </p>
                  <Link to="/services" className="btn-get-started">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="single-service">
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-piggy-bank"
                    style={{ color: "#f5cf13" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title">
                    <Link to="/services" className="stretched-link">
                      Financial Planning and Analysis{" "}
                    </Link>
                  </h4>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque nisl eros, pulvinar facilisis justo mollis, auctor
                    consequat urna. Morbi a bibendum metus. Donec scelerisque
                    sollicitudin enim eu venenatis.
                  </p>
                  <Link to="/services" className="btn-get-started">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="single-service">
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-arrow-repeat "
                    style={{ color: "#1335f5" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title">
                    <Link to="/services" className="stretched-link">
                      Operational Efficiency{" "}
                    </Link>
                  </h4>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque nisl eros, pulvinar facilisis justo mollis, auctor
                    consequat urna. Morbi a bibendum metus. Donec scelerisque
                    sollicitudin enim eu venenatis.
                  </p>
                  <Link to="/services" className="btn-get-started">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceList;
