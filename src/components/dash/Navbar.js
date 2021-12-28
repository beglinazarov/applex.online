import React from 'react'
import logoImgDark from '../../images/logo-applex-dark.png'
import logoImgLite from '../../images/logo-applex-light.png'
export default function Navbar() {
  return (
    <nav id="sidebar" className="sidebar-wrapper sidebar-dark">
      <div className="sidebar-content" data-simplebar style={{ height: '90%' }}>
        <div className="sidebar-brand">
          <a href="/#">
            <img
              src={logoImgDark}
              style={{ height: '24' }}
              className="logo-light-mode"
              alt=""
            />
            <img
              src={logoImgLite}
              height="24"
              className="logo-dark-mode"
              alt=""
            />
            <span className="sidebar-colored">
              <img src={logoImgLite} alt="" />
            </span>
            <p style={{ fontSize: '10px' }}>v 0.1 βeta</p>
          </a>
        </div>

        <ul className="sidebar-menu">
          <li>
            <a href="index.html">
              <i className="ti ti-home me-2"></i>Dashboard
            </a>
          </li>
          <li className="sidebar-dropdown">
            <a href="\#">
              <i className="ti ti-browser me-2"></i>Layouts
            </a>
            <div className="sidebar-submenu">
              <ul>
                <li>
                  <a href="index-dark.html">Dark Dashboard</a>
                </li>
                <li>
                  <a href="index-rtl.html">RTL Dashboard</a>
                </li>
                <li>
                  <a href="index-rtl-dark.html">Dark RTL Dashboard</a>
                </li>
                <li>
                  <a href="index-sidebar-light.html">Light Sidebar</a>
                </li>
                <li>
                  <a href="index-sidebar-colored.html">Colored Sidebar</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="sidebar-dropdown">
            <a href="\#">
              <i className="ti ti-apps me-2"></i>Apps
            </a>
            <div className="sidebar-submenu">
              <ul>
                <li>
                  <a href="chat.html">Chat</a>
                </li>
                <li>
                  <a href="email.html">Email</a>
                </li>
                <li>
                  <a href="calendar.html">Calendar</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="sidebar-dropdown">
            <a href="\#">
              <i className="ti ti-user me-2"></i>User Profile
            </a>
            <div className="sidebar-submenu">
              <ul>
                <li>
                  <a href="profile.html">Profile</a>
                </li>
                <li>
                  <a href="profile-setting.html">Profile Setting</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="sidebar-dropdown">
            <a href="\#">
              <i className="ti ti-brand-gravatar me-2"></i>Blog
            </a>
            <div className="sidebar-submenu">
              <ul>
                <li>
                  <a href="blog.html">Blogs</a>
                </li>
                <li>
                  <a href="blog-detail.html">Blog Detail</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="sidebar-dropdown">
            <a href="\#">
              <i className="ti ti-shopping-cart me-2"></i>E-Commerce
            </a>
            <div className="sidebar-submenu">
              <ul>
                <li>
                  <a href="shop.html">Shop</a>
                </li>
                <li>
                  <a href="product-detail.html">Shop Detail</a>
                </li>
                <li>
                  <a href="shop-cart.html">Shopcart</a>
                </li>
                <li>
                  <a href="checkout.html">Checkout</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="sidebar-dropdown">
            <a href="\#">
              <i className="ti ti-camera me-2"></i>Gallery
            </a>
            <div className="sidebar-submenu">
              <ul>
                <li>
                  <a href="gallery-one.html">Gallary One</a>
                </li>
                <li>
                  <a href="gallery-two.html">Gallery Two</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="sidebar-dropdown">
            <a href="\#">
              <i className="ti ti-file-info me-2"></i>Pages
            </a>
            <div className="sidebar-submenu">
              <ul>
                <li>
                  <a href="faqs.html">FAQs</a>
                </li>
                <li>
                  <a href="pricing.html">Pricing</a>
                </li>
                <li>
                  <a href="blank-page.html">Blank Page</a>
                </li>
                <li>
                  <a href="components.html">Components</a>
                </li>
                <li>
                  <a href="privacy.html">Privacy Policy</a>
                </li>
                <li>
                  <a href="terms.html">Term & Condition</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="sidebar-dropdown">
            <a href="\#">
              <i className="ti ti-mail-opened me-2"></i>Email Template
            </a>
            <div className="sidebar-submenu">
              <ul>
                <li>
                  <a href="email-confirmation.html">Confirmation</a>
                </li>
                <li>
                  <a href="email-password-reset.html">Reset Password</a>
                </li>
                <li>
                  <a href="email-alert.html">Alert</a>
                </li>
                <li>
                  <a href="email-invoice.html">Invoice</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="sidebar-dropdown">
            <a href="\#">
              <i className="ti ti-file-invoice me-2"></i>Invoice
            </a>
            <div className="sidebar-submenu">
              <ul>
                <li>
                  <a href="invoice-list.html">Invoice List</a>
                </li>
                <li>
                  <a href="invoice.html">Invoice Preview</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="sidebar-dropdown">
            <a href="\#">
              <i className="ti ti-login me-2"></i>Authentication
            </a>
            <div className="sidebar-submenu">
              <ul>
                <li>
                  <a href="login.html">Login</a>
                </li>
                <li>
                  <a href="login-cover.html">Login Two</a>
                </li>
                <li>
                  <a href="signup.html">Signup</a>
                </li>
                <li>
                  <a href="signup-cover.html">Signup Two</a>
                </li>
                <li>
                  <a href="reset-password.html">Reset Password</a>
                </li>
                <li>
                  <a href="reset-password-cover.html">Reset Password Two</a>
                </li>
                <li>
                  <a href="lock-screen.html">Lockscreen</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="sidebar-dropdown">
            <a href="\#">
              <i className="ti ti-license me-2"></i>Miscellaneous
            </a>
            <div className="sidebar-submenu">
              <ul>
                <li>
                  <a href="comingsoon.html">Comingsoon</a>
                </li>
                <li>
                  <a href="maintenance.html">Maintenance</a>
                </li>
                <li>
                  <a href="error.html">Error</a>
                </li>
                <li>
                  <a href="thankyou.html">Thank You</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <ul className="sidebar-footer list-unstyled mb-0">
        <li className="list-inline-item mb-0">
          <a
            href={`https://1.envato.market/4n73n`}
            target="_blank"
            className="btn btn-icon btn-soft-light"
          >
            <i className="ti ti-shopping-cart"></i>
          </a>{' '}
          <small className="text-muted ms-1">Buy Now</small>
        </li>
      </ul>
    </nav>
  )
}
