import React from 'react'
import ImgCoworking from '../images/coworking/bg04.jpg'
const myStyle = {
  backgroundImage: `url(${ImgCoworking})`,
}
export default function StartForm() {
  return (
    <section className="section" style={myStyle}>
      <div className="bg-overlay"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 col-md-7">
            <div className="section-title me-lg-4">
              <h4 className="title title-dark text-light mb-4">
                We are Built for Business – Explore Us Today !
              </h4>
              <p className="text-light para-dark para-desc mb-0">
                Start working with
                <span className="text-success fw-bold">Landrick</span>
                that can provide everything you need to generate awareness,
                drive traffic, connect.
              </p>
              <div className="mt-4 pt-2">
                <a href="\#" className="btn btn-primary m-1">
                  Install Now
                </a>
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

          <div className="col-lg-4 col-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div className="card rounded shadow border-0">
              <div className="card-body">
                <h5 className="text-center">Become A Member</h5>

                <form>
                  <div className="row mt-4">
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Your Name :<span className="text-danger">*</span>
                        </label>
                        <div className="form-icon position-relative">
                          <i
                            data-feather="user"
                            className="fea icon-sm icons"
                          ></i>
                          <input
                            name="name"
                            id="name3"
                            type="text"
                            className="form-control ps-5"
                            placeholder="Name"
                            required=""
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Your Email :<span className="text-danger">*</span>
                        </label>
                        <div className="form-icon position-relative">
                          <i
                            data-feather="mail"
                            className="fea icon-sm icons"
                          ></i>
                          <input
                            type="email"
                            id="email3"
                            className="form-control ps-5"
                            placeholder="Email"
                            name="email"
                            required=""
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Your Phone no.:
                          <span className="text-danger">*</span>
                        </label>
                        <div className="form-icon position-relative">
                          <i
                            data-feather="phone"
                            className="fea icon-sm icons"
                          ></i>
                          <input
                            name="number"
                            id="number"
                            type="number"
                            className="form-control ps-5"
                            placeholder="Phone no. :"
                            required=""
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-12 mb-0">
                      <div className="d-grid">
                        <button className="btn btn-primary">Started now</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
