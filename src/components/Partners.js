import React from 'react'
import ImgAmazon from '../images/client/amazon.svg'
import ImgGoogle from '../images/client/google.svg'
import ImgLenovo from '../images/client/lenovo.svg'
import ImgPaypal from '../images/client/paypal.svg'
import ImgShopify from '../images/client/shopify.svg'
import ImgSpotify from '../images/client/spotify.svg'
export default function Partners() {
  return (
    <section className="py-5 border-bottom border-top">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h5>Trusted client by over 10,000+ of the world’s</h5>
          </div>
        </div>

        <div className="row mt-5 justify-content-center">
          <div className="col-lg-2 col-md-2 col-6 text-center">
            <img src={ImgAmazon} className="avatar avatar-ex-sm" alt="" />
          </div>

          <div className="col-lg-2 col-md-2 col-6 text-center">
            <img src={ImgGoogle} className="avatar avatar-ex-sm" alt="" />
          </div>

          <div className="col-lg-2 col-md-2 col-6 text-center mt-4 mt-sm-0">
            <img src={ImgLenovo} className="avatar avatar-ex-sm" alt="" />
          </div>

          <div className="col-lg-2 col-md-2 col-6 text-center mt-4 mt-sm-0">
            <img src={ImgPaypal} className="avatar avatar-ex-sm" alt="" />
          </div>

          <div className="col-lg-2 col-md-2 col-6 text-center mt-4 mt-sm-0">
            <img src={ImgShopify} className="avatar avatar-ex-sm" alt="" />
          </div>

          <div className="col-lg-2 col-md-2 col-6 text-center mt-4 mt-sm-0">
            <img src={ImgSpotify} className="avatar avatar-ex-sm" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
