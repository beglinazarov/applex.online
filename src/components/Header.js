import React from 'react'
import logoImgDark from '../images/logo-applex-dark.png'
import logoImgLite from '../images/logo-applex-light.png'
import Services from '../components/Services'
import AdminDash from './Dashboard'
import { Link } from 'react-router-dom'

export default function HeaderCompontent() {
  const toggleMenu = () => {}
  return (
    <>
      <header
        id="topnav"
        className="defaultscroll sticky"
        // style={{ backgroundColor: '#6495ed' }}
      >
        <div className="container">
          <a className="logo" href="index.html">
            <span className="logo-light-mode">
              <img
                src={logoImgDark}
                className="l-dark"
                style={{ height: '24' }}
                alt=""
              />
              <img
                src={logoImgLite}
                className="l-light"
                style={{ height: '24' }}
                alt=""
              />
            </span>
            <img
              src={logoImgLite}
              height="24"
              className="logo-dark-mode"
              alt=""
            />
          </a>

          <div className="menu-extras">
            <div className="menu-item">
              <a className="navbar-toggle" id="isToggle" onClick={toggleMenu}>
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </a>
            </div>
          </div>

          <ul className="buy-button list-inline mb-0">
            <li className="list-inline-item mb-0">
              <a
                href="\#"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                <div className="login-btn-primary">
                  <span className="btn btn-icon btn-pills btn-soft-primary">
                    <i data-feather="settings" className="fea icon-sm"></i>
                  </span>
                </div>
                <div className="login-btn-light">
                  <span className="btn btn-icon btn-pills btn-light">
                    <i data-feather="settings" className="fea icon-sm"></i>
                  </span>
                </div>
              </a>
            </li>

            <li className="list-inline-item ps-1 mb-0">
              <a
                href="themeforest.net/item/landrick-responsive-saas-and-software-template/2443857719f0.html"
                target="_blank"
              >
                <div className="login-btn-primary">
                  <span className="btn btn-icon btn-pills btn-primary">
                    <i data-feather="shopping-cart" className="fea icon-sm"></i>
                  </span>
                </div>
                <div className="login-btn-light">
                  <span className="btn btn-icon btn-pills btn-light">
                    <i data-feather="shopping-cart" className="fea icon-sm"></i>
                  </span>
                </div>
              </a>
            </li>
          </ul>

          <div id="navigation">
            <ul className="navigation-menu nav-light">
              <li>
                <a href="index.html" className="sub-menu-item">
                  Lease Apps
                </a>
              </li>
              {/* <Services /> */}

              <li className="has-submenu parent-parent-menu-item">
                <a href="\#">Pages</a>
                <span className="menu-arrow"></span>
                <ul className="submenu">
                  <li className="has-submenu parent-menu-item">
                    <a href="\#">Company</a>
                    <span className="submenu-arrow"></span>
                    <ul className="submenu">
                      <li>
                        <a href="page-aboutus.html" className="sub-menu-item">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          href="page-aboutus-two.html"
                          className="sub-menu-item"
                        >
                          About Us Two
                        </a>
                      </li>
                      <li>
                        <a href="page-services.html" className="sub-menu-item">
                          Services
                        </a>
                      </li>
                      <li>
                        <a href="page-history.html" className="sub-menu-item">
                          History
                        </a>
                      </li>
                      <li>
                        <a href="page-team.html" className="sub-menu-item">
                          Team
                        </a>
                      </li>
                      <li>
                        <a href="page-pricing.html" className="sub-menu-item">
                          Pricing
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu parent-menu-item">
                    <a href="\#">Account</a>
                    <span className="submenu-arrow"></span>
                    <ul className="submenu">
                      <li>
                        <a
                          href="account-profile.html"
                          className="sub-menu-item"
                        >
                          Profile
                        </a>
                      </li>
                      <li>
                        <a
                          href="account-members.html"
                          className="sub-menu-item"
                        >
                          Members
                        </a>
                      </li>
                      <li>
                        <a href="account-works.html" className="sub-menu-item">
                          Works
                        </a>
                      </li>
                      <li>
                        <a
                          href="account-messages.html"
                          className="sub-menu-item"
                        >
                          Messages
                        </a>
                      </li>
                      <li>
                        <a href="account-chat.html" className="sub-menu-item">
                          Chat
                        </a>
                      </li>
                      <li>
                        <a
                          href="account-payments.html"
                          className="sub-menu-item"
                        >
                          Payments
                        </a>
                      </li>
                      <li>
                        <a
                          href="account-setting.html"
                          className="sub-menu-item"
                        >
                          Setting
                        </a>
                      </li>
                      <li>
                        <a href="page-invoice.html" className="sub-menu-item">
                          Invoice
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu parent-menu-item">
                    <a href="\#">Email Template</a>
                    <span className="submenu-arrow"></span>
                    <ul className="submenu">
                      <li>
                        <a
                          href="email-confirmation.html"
                          className="sub-menu-item"
                        >
                          Confirmation
                        </a>
                      </li>
                      <li>
                        <a
                          href="email-password-reset.html"
                          className="sub-menu-item"
                        >
                          Reset Password
                        </a>
                      </li>
                      <li>
                        <a href="email-alert.html" className="sub-menu-item">
                          Alert
                        </a>
                      </li>
                      <li>
                        <a href="email-invoice.html" className="sub-menu-item">
                          Invoice
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu parent-menu-item">
                    <a href="\#">Blog</a>
                    <span className="submenu-arrow"></span>
                    <ul className="submenu">
                      <li>
                        <a href="blog-grid.html" className="sub-menu-item">
                          Blog Grid
                        </a>
                      </li>
                      <li>
                        <a
                          href="blog-grid-sidebar.html"
                          className="sub-menu-item"
                        >
                          Blog with Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="blog-list.html" className="sub-menu-item">
                          Blog Listing
                        </a>
                      </li>
                      <li>
                        <a
                          href="blog-list-sidebar.html"
                          className="sub-menu-item"
                        >
                          Blog List & Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="blog-detail.html" className="sub-menu-item">
                          Blog Detail
                        </a>
                      </li>
                      <li>
                        <a
                          href="blog-detail-two.html"
                          className="sub-menu-item"
                        >
                          Blog Detail 2
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu parent-menu-item">
                    <a href="\#">Case Study</a>
                    <span className="submenu-arrow"></span>
                    <ul className="submenu">
                      <li>
                        <a href="page-cases.html" className="sub-menu-item">
                          All Cases
                        </a>
                      </li>
                      <li>
                        <a
                          href="page-case-detail.html"
                          className="sub-menu-item"
                        >
                          Case Detail
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="course-detail.html" className="sub-menu-item">
                      Course Detail
                      <span className="mdi mdi-star text-warning"></span>
                    </a>
                  </li>
                  <li className="has-submenu parent-menu-item">
                    <a href="\#">Auth Pages</a>
                    <span className="submenu-arrow"></span>
                    <ul className="submenu">
                      <li className="has-submenu parent-menu-item">
                        <a href="\#">Login</a>
                        <span className="submenu-arrow"></span>
                        <ul className="submenu">
                          <li>
                            <a href="auth-login.html" className="sub-menu-item">
                              Login
                            </a>
                          </li>
                          <li>
                            <a
                              href="auth-cover-login.html"
                              className="sub-menu-item"
                            >
                              Login Cover
                            </a>
                          </li>
                          <li>
                            <a
                              href="auth-login-three.html"
                              className="sub-menu-item"
                            >
                              Login Simple
                            </a>
                          </li>
                          <li>
                            <a
                              href="auth-bs-login.html"
                              className="sub-menu-item"
                            >
                              BS5 Login
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="has-submenu parent-menu-item">
                        <a href="\#">Signup</a>
                        <span className="submenu-arrow"></span>
                        <ul className="submenu">
                          <li>
                            <a
                              href="auth-signup.html"
                              className="sub-menu-item"
                            >
                              Signup
                            </a>
                          </li>
                          <li>
                            <a
                              href="auth-cover-signup.html"
                              className="sub-menu-item"
                            >
                              Signup Cover
                            </a>
                          </li>
                          <li>
                            <a
                              href="auth-signup-three.html"
                              className="sub-menu-item"
                            >
                              Signup Simple
                            </a>
                          </li>
                          <li>
                            <a
                              href="auth-bs-signup.html"
                              className="sub-menu-item"
                            >
                              BS5 Singup
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="has-submenu parent-menu-item">
                        <a href="\#">Reset password</a>
                        <span className="submenu-arrow"></span>
                        <ul className="submenu">
                          <li>
                            <a
                              href="auth-re-password.html"
                              className="sub-menu-item"
                            >
                              Reset Password
                            </a>
                          </li>
                          <li>
                            <a
                              href="auth-cover-re-password.html"
                              className="sub-menu-item"
                            >
                              Reset Password Cover
                            </a>
                          </li>
                          <li>
                            <a
                              href="auth-re-password-three.html"
                              className="sub-menu-item"
                            >
                              Reset Password Simple
                            </a>
                          </li>
                          <li>
                            <a
                              href="auth-bs-reset.html"
                              className="sub-menu-item"
                            >
                              BS5 Reset Password
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu parent-menu-item">
                    <a href="\#">Utility</a>
                    <span className="submenu-arrow"></span>
                    <ul className="submenu">
                      <li>
                        <a href="page-terms.html" className="sub-menu-item">
                          Terms of Services
                        </a>
                      </li>
                      <li>
                        <a href="page-privacy.html" className="sub-menu-item">
                          Privacy Policy
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu parent-menu-item">
                    <a href="\#">Special</a>
                    <span className="submenu-arrow"></span>
                    <ul className="submenu">
                      <li>
                        <a
                          href="page-comingsoon.html"
                          className="sub-menu-item"
                        >
                          Coming Soon
                        </a>
                      </li>
                      <li>
                        <a
                          href="page-comingsoon2.html"
                          className="sub-menu-item"
                        >
                          Coming Soon Two
                        </a>
                      </li>
                      <li>
                        <a
                          href="page-maintenance.html"
                          className="sub-menu-item"
                        >
                          Maintenance
                        </a>
                      </li>
                      <li>
                        <a href="page-error.html" className="sub-menu-item">
                          Error
                        </a>
                      </li>
                      <li>
                        <a href="page-thankyou.html" className="sub-menu-item">
                          Thank you
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu parent-menu-item">
                    <a href="\#">Contact</a>
                    <span className="submenu-arrow"></span>
                    <ul className="submenu">
                      <li>
                        <a
                          href="page-contact-detail.html"
                          className="sub-menu-item"
                        >
                          Contact Detail
                        </a>
                      </li>
                      <li>
                        <a
                          href="page-contact-one.html"
                          className="sub-menu-item"
                        >
                          Contact One
                        </a>
                      </li>
                      <li>
                        <a
                          href="page-contact-two.html"
                          className="sub-menu-item"
                        >
                          Contact Two
                        </a>
                      </li>
                      <li>
                        <a
                          href="page-contact-three.html"
                          className="sub-menu-item"
                        >
                          Contact Three
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu parent-menu-item">
                    <a href="\#">Multi Level Menu</a>
                    <span className="submenu-arrow"></span>
                    <ul className="submenu">
                      <li>
                        <a href="\#" className="sub-menu-item">
                          Level 1.0
                        </a>
                      </li>
                      <li className="has-submenu parent-menu-item">
                        <a href="\#">Level 2.0</a>
                        <span className="submenu-arrow"></span>
                        <ul className="submenu">
                          <li>
                            <a href="\#" className="sub-menu-item">
                              Level 2.1
                            </a>
                          </li>
                          <li>
                            <a href="\#" className="sub-menu-item">
                              Level 2.2
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="footer.html" className="sub-menu-item">
                      Footer Layouts
                    </a>
                  </li>
                </ul>
              </li>

              <li className="has-submenu parent-menu-item">
                <a href="\#">Docs</a>
                <span className="menu-arrow"></span>
                <ul className="submenu">
                  <li>
                    <a href="documentation.html" className="sub-menu-item">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="changelog.html" className="sub-menu-item">
                      Changelog
                    </a>
                  </li>
                  <li>
                    <a href="components.html" className="sub-menu-item">
                      Components
                    </a>
                  </li>
                  <li>
                    <a href="widget.html" className="sub-menu-item">
                      Widget
                    </a>
                  </li>
                </ul>
              </li>
              <li className="has-submenu parent-parent-menu-item">
                <a href="\#">Demos</a>
                <span className="menu-arrow"></span>
                <ul className="submenu megamenu">
                  <li>
                    <ul>
                      <li>
                        <a
                          href="index-corporate.html"
                          className="sub-menu-item"
                        >
                          <div className="text-lg-center">
                            <span className="d-none d-lg-block">
                              <img
                                src="images/demos/corporate.png"
                                className="img-fluid rounded shadow-md"
                                alt=""
                              />
                            </span>
                            <span className="mt-lg-2 d-block">Corporate</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="index-crypto.html" className="sub-menu-item">
                          <div className="text-lg-center">
                            <span className="d-none d-lg-block">
                              <img
                                src="images/demos/crypto.png"
                                className="img-fluid rounded shadow-md"
                                alt=""
                              />
                            </span>
                            <span className="mt-lg-2 d-block">
                              Cryptocurrency
                            </span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <ul>
                      <li>
                        <a href="index-shop.html" className="sub-menu-item">
                          <div className="text-lg-center">
                            <span className="d-none d-lg-block">
                              <img
                                src="images/demos/shop.png"
                                className="img-fluid rounded shadow-md"
                                alt=""
                              />
                            </span>
                            <span className="mt-lg-2 d-block">Shop</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="index-portfolio.html"
                          className="sub-menu-item"
                        >
                          <div className="text-lg-center">
                            <span className="d-none d-lg-block">
                              <img
                                src="images/demos/portfolio.png"
                                className="img-fluid rounded shadow-md"
                                alt=""
                              />
                            </span>
                            <span className="mt-lg-2 d-block">Portfolio</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <ul>
                      <li>
                        <a
                          href="helpcenter-overview.html"
                          className="sub-menu-item"
                        >
                          <div className="text-lg-center">
                            <span className="d-none d-lg-block">
                              <img
                                src="images/demos/help-center.png"
                                className="img-fluid rounded shadow-md"
                                alt=""
                              />
                            </span>
                            <span className="mt-lg-2 d-block">Help Center</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="index-hosting.html" className="sub-menu-item">
                          <div className="text-lg-center">
                            <span className="d-none d-lg-block">
                              <img
                                src="images/demos/hosting.png"
                                className="img-fluid rounded shadow-md"
                                alt=""
                              />
                            </span>
                            <span className="mt-lg-2 d-block">
                              Hosting & Domain
                            </span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <ul>
                      <li>
                        <a href="index-job.html" className="sub-menu-item">
                          <div className="text-lg-center">
                            <span className="d-none d-lg-block">
                              <img
                                src="images/demos/job.png"
                                className="img-fluid rounded shadow-md"
                                alt=""
                              />
                            </span>
                            <span className="mt-lg-2 d-block">
                              Job & Career
                            </span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="forums.html" className="sub-menu-item">
                          <div className="text-lg-center">
                            <span className="d-none d-lg-block">
                              <img
                                src="images/demos/forums.png"
                                className="img-fluid rounded shadow-md"
                                alt=""
                              />
                            </span>
                            <span className="mt-lg-2 d-block">Forums</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <ul>
                      <li>
                        <a href="index-blog.html" className="sub-menu-item">
                          <div className="text-lg-center">
                            <span className="d-none d-lg-block">
                              <img
                                src="images/demos/blog.png"
                                className="img-fluid rounded shadow-md"
                                alt=""
                              />
                            </span>
                            <span className="mt-lg-2 d-block">Blog</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="\#" className="sub-menu-item">
                          <div className="text-lg-center">
                            <span className="d-none d-lg-block">
                              <img
                                src="images/demos/comingsoon.png"
                                className="img-fluid rounded shadow-md"
                                alt=""
                              />
                            </span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="dash">
                  {/* <a
                  href={'./Dashboard'}
                  target="_blank"
                  className="sub-menu-item"
                >
                  Admin
                </a> */}
                  Admin
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}
