import React from 'react'
import ImgCoworking from '../images/coworking/about.jpg'

export default function AboutStart() {
  return (
    <section className="section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-6 col-12">
            <img src={ImgCoworking} className="img-fluid rounded" alt="" />
          </div>
          <div className="col-lg-7 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div className="section-title ms-lg-4">
              <h4 className="title mb-4">About Our Community</h4>
              <p className="text-muted">
                Start working with
                <span className="text-primary fw-bold">Landrick Space</span>
                that can provide everything you need to generate awareness,
                drive traffic, connect. Dummy text is text that is used in the
                publishing industry or by web designers to occupy the space
                which will later be filled with 'real' content. This is required
                when, for example, the final text is not yet available. Dummy
                texts have been in use by typesetters since the 16th century.
              </p>
              <a href="\#" className="btn btn-primary mt-3">
                Join now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
