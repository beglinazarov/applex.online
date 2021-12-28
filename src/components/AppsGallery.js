import React from 'react'
import bgImg from '../images/insurance/bg.png'
import imgHealth from '../images/insurance/health.svg'
import imgTermLife from '../images/insurance/term-life.svg'
import imgFamilyIns from '../images/insurance/family-health.svg'
import imgInvest from '../images/insurance/investment.svg'
import imgCarIns from '../images/insurance/car.svg'
import imgBike from '../images/insurance/bike.svg'

export default function AppsGallery() {
  return (
    <>
      <section
        className="bg-half-170 bg-primary d-table w-100"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-lg-12">
              <div className="title-heading text-center">
                <h1 className="heading title-dark text-white mb-3">
                  App Gallery
                </h1>
                <p className="para-desc mx-auto text-white-50">
                  All apps one-click to use that helps you bound your business.
                </p>

                <div className="row mt-4 pt-2">
                  <div className="col-lg-2 col-md-4 col-6 mt-4 pt-2">
                    <div className="card explore-feature border-0 rounded text-center bg-white">
                      <div className="card-body">
                        <div className="icon rounded-circle shadow-lg d-inline-block">
                          <img
                            src={imgHealth}
                            className="avatar avatar-md-sm"
                            alt=""
                          />
                        </div>
                        <div className="content mt-3">
                          <h6 className="mb-0">
                            <a
                              href="javascript:void(0)"
                              className="title text-dark"
                            >
                              Health Insurance
                            </a>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-6 mt-4 pt-2">
                    <div className="card explore-feature border-0 rounded text-center bg-white">
                      <div className="card-body">
                        <div className="icon rounded-circle shadow-lg d-inline-block">
                          <img
                            src={imgTermLife}
                            className="avatar avatar-md-sm"
                            alt=""
                          />
                        </div>
                        <div className="content mt-3">
                          <h6 className="mb-0">
                            <a
                              href="javascript:void(0)"
                              className="title text-dark"
                            >
                              Term Life Insurance
                            </a>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-6 mt-4 pt-2">
                    <div className="card explore-feature border-0 rounded text-center bg-white">
                      <div className="card-body">
                        <div className="icon rounded-circle shadow-lg d-inline-block">
                          <img
                            src={imgFamilyIns}
                            className="avatar avatar-md-sm"
                            alt=""
                          />
                        </div>
                        <div className="content mt-3">
                          <h6 className="mb-0">
                            <a
                              href="javascript:void(0)"
                              className="title text-dark"
                            >
                              Family Health Insurance
                            </a>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-6 mt-4 pt-2">
                    <div className="card explore-feature border-0 rounded text-center bg-white">
                      <div className="card-body">
                        <div className="icon rounded-circle shadow-lg d-inline-block">
                          <img
                            src={imgInvest}
                            className="avatar avatar-md-sm"
                            alt=""
                          />
                        </div>
                        <div className="content mt-3">
                          <h6 className="mb-0">
                            <a
                              href="javascript:void(0)"
                              className="title text-dark"
                            >
                              Investment Plans
                            </a>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-6 mt-4 pt-2">
                    <div className="card explore-feature border-0 rounded text-center bg-white">
                      <div className="card-body">
                        <div className="icon rounded-circle shadow-lg d-inline-block">
                          <img
                            src={imgCarIns}
                            className="avatar avatar-md-sm"
                            alt=""
                          />
                        </div>
                        <div className="content mt-3">
                          <h6 className="mb-0">
                            <a
                              href="javascript:void(0)"
                              className="title text-dark"
                            >
                              4 Wheeler Insurance
                            </a>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-6 mt-4 pt-2">
                    <div className="card explore-feature border-0 rounded text-center bg-white">
                      <div className="card-body">
                        <div className="icon rounded-circle shadow-lg d-inline-block">
                          <img
                            src={imgBike}
                            className="avatar avatar-md-sm"
                            alt=""
                          />
                        </div>
                        <div className="content mt-3">
                          <h6 className="mb-0">
                            <a
                              href="javascript:void(0)"
                              className="title text-dark"
                            >
                              2 Wheeler Insurance
                            </a>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title mb-4">Get a choice of your app</h4>
                <p className="text-muted para-desc mb-0 mx-auto">
                  Start working with{' '}
                  <span className="text-primary fw-bold">Applex</span> that can
                  provide everything you need to generate awareness, drive
                  traffic, connect.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-4 col-12 mt-4 pt-2">
              <div className="card explore-feature border-0 rounded text-center bg-white">
                <div className="card-body py-5">
                  <div className="icon rounded-circle shadow-lg d-inline-block">
                    <i data-feather="pen-tool" className="fea"></i>
                  </div>
                  <div className="content mt-3">
                    <h5>
                      <a href="javascript:void(0)" className="title text-dark">
                        LEGAPP
                      </a>
                    </h5>
                    <a href="javascript:void(0)" className="text-muted small">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-12 mt-4 pt-2">
              <div className="card explore-feature border-0 rounded text-center bg-white">
                <div className="card-body py-5">
                  <div className="icon rounded-circle shadow-lg d-inline-block">
                    <i data-feather="feather" className="fea"></i>
                  </div>
                  <div className="content mt-3">
                    <h5>
                      <a href="javascript:void(0)" className="title text-dark">
                        XION
                      </a>
                    </h5>
                    <a href="javascript:void(0)" className="text-muted small">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-12 mt-4 pt-2">
              <div className="card explore-feature border-0 rounded text-center bg-white">
                <div className="card-body py-5">
                  <div className="icon rounded-circle shadow-lg d-inline-block">
                    <i data-feather="music" className="fea"></i>
                  </div>
                  <div className="content mt-3">
                    <h5>
                      <a href="javascript:void(0)" className="title text-dark">
                        Musica
                      </a>
                    </h5>
                    <a href="javascript:void(0)" className="text-muted small">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-12 mt-4 pt-2">
              <div className="card explore-feature border-0 rounded text-center bg-white">
                <div className="card-body py-5">
                  <div className="icon rounded-circle shadow-lg d-inline-block">
                    <i data-feather="camera" className="fea"></i>
                  </div>
                  <div className="content mt-3">
                    <h5>
                      <a href="javascript:void(0)" className="title text-dark">
                        Photomat
                      </a>
                    </h5>
                    <a href="javascript:void(0)" className="text-muted small">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-12 mt-4 pt-2">
              <div className="card explore-feature border-0 rounded text-center bg-white">
                <div className="card-body py-5">
                  <div className="icon rounded-circle shadow-lg d-inline-block">
                    <i data-feather="shield" className="fea"></i>
                  </div>
                  <div className="content mt-3">
                    <h5>
                      <a href="javascript:void(0)" className="title text-dark">
                        Markalog
                      </a>
                    </h5>
                    <a href="javascript:void(0)" className="text-muted small">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-12 mt-4 pt-2">
              <div className="card explore-feature border-0 rounded text-center bg-white">
                <div className="card-body py-5">
                  <div className="icon rounded-circle shadow-lg d-inline-block">
                    <i data-feather="monitor" className="fea"></i>
                  </div>
                  <div className="content mt-3">
                    <h5>
                      <a href="javascript:void(0)" className="title text-dark">
                        Spheron
                      </a>
                    </h5>
                    <a href="javascript:void(0)" className="text-muted small">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-12 mt-4 pt-2">
              <div className="card explore-feature border-0 rounded text-center bg-white">
                <div className="card-body py-5">
                  <div className="icon rounded-circle shadow-lg d-inline-block">
                    <i data-feather="bar-chart-2" className="fea"></i>
                  </div>
                  <div className="content mt-3">
                    <h5>
                      <a href="javascript:void(0)" className="title text-dark">
                        Bigo
                      </a>
                    </h5>
                    <a href="javascript:void(0)" className="text-muted small">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-12 mt-4 pt-2">
              <div className="card explore-feature border-0 rounded text-center bg-white">
                <div className="card-body py-5">
                  <div className="icon rounded-circle shadow-lg d-inline-block">
                    <i data-feather="activity" className="fea"></i>
                  </div>
                  <div className="content mt-3">
                    <h5>
                      <a href="javascript:void(0)" className="title text-dark">
                        FeetKass
                      </a>
                    </h5>
                    <a href="javascript:void(0)" className="text-muted small">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="text-center mt-4 pt-2">
                <a href="javascript:void(0)" className="btn btn-primary">
                  See More Courses{' '}
                  <i className="uil uil-arrow-right align-middle"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
