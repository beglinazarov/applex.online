import React from 'react'
import bgImage from '../images/coworking/bg01.jpg'
import bgImage1 from '../images/coworking/bg03.jpg'

const myStyle = {
  backgroundImage: `url(${bgImage}) center center`,
}

export default function CarouselComponent() {
  return (
    <div>
      <section className="home-slider position-relative">
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
              <div
                className="bg-home d-flex align-items-center"
                style={{
                  backgroundImage: `url(${bgImage})`,
                }}
              >
                <div className="bg-overlay"></div>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-12 text-center">
                      <div className="title-heading mt-4">
                        <h6 className="text-light para-dark animated fadeInDownBig animation-delay-1">
                          Have you heard that you can use apps for only
                          <span className="text-success">
                            {' '}
                            a cup of coffee 😜
                          </span>
                        </h6>
                        <h1 className="heading mb-3 text-white title-dark animated fadeInUpBig animation-delay-2">
                          Let's appify your business
                        </h1>
                        <p className="para-desc text-light para-dark mx-auto animated fadeInUpBig animation-delay-4">
                          We are helping you find out solutions best fit for
                          your business via servicing apps.
                        </p>
                        <div className="mt-4 pt-2 animated fadeInUpBig animation-delay-7">
                          <a href="\#" className="btn btn-primary mt-2">
                            <i className="uil uil-envelope"></i>
                            Explore
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="3000">
              <div
                className="bg-home d-flex align-items-center"
                style={{ backgroundImage: 'url(../images/coworking/bg02.jpg)' }}
              >
                <div className="bg-overlay"></div>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-12 text-center">
                      <div className="title-heading mt-4">
                        <h6 className="text-light para-dark animated fadeInDownBig animation-delay-1">
                          The Best Coworking in The City
                        </h6>
                        <h1 className="heading mb-3 text-white title-dark animated fadeInUpBig animation-delay-2">
                          Office Space in Vietnam
                        </h1>
                        <p className="para-desc mx-auto text-light para-dark animated fadeInUpBig animation-delay-4">
                          Launch your campaign and benefit from our expertise on
                          designing and managing conversion centered bootstrap
                          v5 html page.
                        </p>

                        <div className="text-center subcribe-form mt-4 pt-2 animated fadeInUpBig animation-delay-7">
                          <form>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              className="rounded"
                              placeholder="E-mail"
                            />
                            <button type="submit" className="btn btn-primary">
                              Book Space
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="3000">
              <div
                className="bg-home d-flex align-items-center"
                style={myStyle}
              >
                <div className="bg-overlay"></div>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-12 text-center">
                      <div className="title-heading mt-4">
                        <h6 className="text-light para-dark animated fadeInDownBig animation-delay-1">
                          Our Space for You
                        </h6>
                        <h1 className="heading mb-3 text-white title-dark animated fadeInUpBig animation-delay-2">
                          Own Your Office For A Day
                        </h1>
                        <p className="para-desc mx-auto text-light para-dark animated fadeInUpBig animation-delay-4">
                          Launch your campaign and benefit from our expertise on
                          designing and managing conversion centered bootstrap
                          v5 html page.
                        </p>
                        <div className="mt-4 pt-2 animated fadeInUpBig animation-delay-7">
                          <a
                            href="#!"
                            data-type="youtube"
                            data-id="yba7hPeTSjk"
                            className="btn btn-icon btn-pills btn-primary m-1 lightbox"
                          >
                            <i data-feather="video" className="icons"></i>
                          </a>
                          <span className="fw-bold text-uppercase small text-light title-dark align-middle ms-1">
                            Watch Now
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleInterval"
            role="button"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleInterval"
            role="button"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </section>
    </div>
  )
}
