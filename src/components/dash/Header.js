import React from 'react'
import logoImgDark from '../../images/logo-applex-dark.png'
import logoImgLite from '../../images/logo-applex-light.png'

export default function Header() {
  return (
    <main className="page-content bg-light">
      <div className="top-header">
        <div className="header-bar d-flex justify-content-between border-bottom">
          <div className="d-flex align-items-center">
            <a href="#" className="logo-icon me-3">
              <img
                src={logoImgLite}
                style={{ height: '30' }}
                className="small"
                alt=""
              />
              <span className="big">
                <img
                  src={logoImgDark}
                  style={{ height: '24' }}
                  className="logo-light-mode"
                  alt=""
                />
                <img
                  src={logoImgLite}
                  style={{ height: '24' }}
                  className="logo-dark-mode"
                  alt=""
                />
              </span>
            </a>
            <a
              id="close-sidebar"
              className="btn btn-icon btn-soft-light"
              href="\#"
            >
              <i className="ti ti-menu-2"></i>
            </a>
            <div className="search-bar p-0 d-none d-md-block ms-2">
              <div id="search" className="menu-search mb-0">
                <form
                  role="search"
                  method="get"
                  id="searchform"
                  className="searchform"
                >
                  <div>
                    <input
                      type="text"
                      className="form-control border rounded"
                      name="s"
                      id="s"
                      placeholder="Search Keywords..."
                    />
                    <input type="submit" id="searchsubmit" value="Search" />
                  </div>
                </form>
              </div>
            </div>
          </div>

          <ul className="list-unstyled mb-0">
            <li className="list-inline-item mb-0">
              <a
                href="\#"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                <div className="btn btn-icon btn-soft-light">
                  <i className="ti ti-settings"></i>
                </div>
              </a>
            </li>

            <li className="list-inline-item mb-0 ms-1">
              <div className="dropdown dropdown-primary">
                <button
                  type="button"
                  className="btn btn-icon btn-soft-light dropdown-toggle p-0"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="ti ti-bell"></i>
                </button>
                <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                  <span className="visually-hidden">New alerts</span>
                </span>

                <div
                  className="dropdown-menu dd-menu bg-white shadow rounded border-0 mt-3 p-0"
                  data-simplebar
                  style={{ height: '320px', width: '290px' }}
                >
                  <div className="d-flex align-items-center justify-content-between p-3 border-bottom">
                    <h6 className="mb-0 text-dark">Notifications</h6>
                    <span className="badge bg-soft-danger rounded-pill">3</span>
                  </div>
                  <div className="p-3">
                    <a
                      href="#!"
                      className="dropdown-item features feature-primary key-feature p-0"
                    >
                      <div className="d-flex align-items-center">
                        <div className="icon text-center rounded-circle me-2">
                          <i className="ti ti-shopping-cart"></i>
                        </div>
                        <div className="flex-1">
                          <h6 className="mb-0 text-dark title">
                            Order Complete
                          </h6>
                          <small className="text-muted">15 min ago</small>
                        </div>
                      </div>
                    </a>

                    <a
                      href="#!"
                      className="dropdown-item features feature-primary key-feature p-0 mt-3"
                    >
                      <div className="d-flex align-items-center">
                        <img
                          src="assets/images/client/04.jpg"
                          className="avatar avatar-md-sm rounded-circle border shadow me-2"
                          alt=""
                        />
                        <div className="flex-1">
                          <h6 className="mb-0 text-dark title">
                            <span className="fw-bold">Message</span> from Luis
                          </h6>
                          <small className="text-muted">1 hour ago</small>
                        </div>
                      </div>
                    </a>

                    <a
                      href="#!"
                      className="dropdown-item features feature-primary key-feature p-0 mt-3"
                    >
                      <div className="d-flex align-items-center">
                        <div className="icon text-center rounded-circle me-2">
                          <i className="ti ti-currency-dollar"></i>
                        </div>
                        <div className="flex-1">
                          <h6 className="mb-0 text-dark title">
                            <span className="fw-bold">One Refund Request</span>
                          </h6>
                          <small className="text-muted">2 hour ago</small>
                        </div>
                      </div>
                    </a>

                    <a
                      href="#!"
                      className="dropdown-item features feature-primary key-feature p-0 mt-3"
                    >
                      <div className="d-flex align-items-center">
                        <div className="icon text-center rounded-circle me-2">
                          <i className="ti ti-truck-delivery"></i>
                        </div>
                        <div className="flex-1">
                          <h6 className="mb-0 text-dark title">
                            Deliverd your Order
                          </h6>
                          <small className="text-muted">Yesterday</small>
                        </div>
                      </div>
                    </a>

                    <a
                      href="#!"
                      className="dropdown-item features feature-primary key-feature p-0 mt-3"
                    >
                      <div className="d-flex align-items-center">
                        <img
                          src="assets/images/client/15.jpg"
                          className="avatar avatar-md-sm rounded-circle border shadow me-2"
                          alt=""
                        />
                        <div className="flex-1">
                          <h6 className="mb-0 text-dark title">
                            <span className="fw-bold">Cally</span> started
                            following you
                          </h6>
                          <small className="text-muted">2 days ago</small>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </li>

            <li className="list-inline-item mb-0 ms-1">
              <div className="dropdown dropdown-primary">
                <button
                  type="button"
                  className="btn btn-soft-light dropdown-toggle p-0"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src="assets/images/client/05.jpg"
                    className="avatar avatar-ex-small rounded"
                    alt=""
                  />
                </button>
                <div
                  className="dropdown-menu dd-menu dropdown-menu-end bg-white shadow border-0 mt-3 py-3"
                  style={{ minWidth: '200px' }}
                >
                  <a
                    className="dropdown-item d-flex align-items-center text-dark pb-3"
                    href="profile.html"
                  >
                    <img
                      src="assets/images/client/05.jpg"
                      className="avatar avatar-md-sm rounded-circle border shadow"
                      alt=""
                    />
                    <div className="flex-1 ms-2">
                      <span className="d-block">Cristina Julia</span>
                      <small className="text-muted">UI / UX Designer</small>
                    </div>
                  </a>
                  <a className="dropdown-item text-dark" href="index.html">
                    <span className="mb-0 d-inline-block me-1">
                      <i className="ti ti-home"></i>
                    </span>{' '}
                    Dashboard
                  </a>
                  <a className="dropdown-item text-dark" href="profile.html">
                    <span className="mb-0 d-inline-block me-1">
                      <i className="ti ti-settings"></i>
                    </span>{' '}
                    Profile
                  </a>
                  <a className="dropdown-item text-dark" href="email.html">
                    <span className="mb-0 d-inline-block me-1">
                      <i className="ti ti-mail"></i>
                    </span>{' '}
                    Email
                  </a>
                  <div className="dropdown-divider border-top"></div>
                  <a
                    className="dropdown-item text-dark"
                    href="lock-screen.html"
                  >
                    <span className="mb-0 d-inline-block me-1">
                      <i className="ti ti-lock"></i>
                    </span>{' '}
                    Lockscreen
                  </a>
                  <a className="dropdown-item text-dark" href="login.html">
                    <span className="mb-0 d-inline-block me-1">
                      <i className="ti ti-logout"></i>
                    </span>{' '}
                    Logout
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-fluid">
        <div className="layout-specing">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <h6 className="text-muted mb-1">Welcome back, Cristina!</h6>
              <h5 className="mb-0">Dashboard</h5>
            </div>

            <div className="mb-0 position-relative">
              <select
                className="form-select form-control"
                id="dailychart"
                defaultValue="current"
              >
                <option value="current">This Month</option>
                <option value="aug">August</option>
                <option value="jul">July</option>
                <option value="jun">June</option>
              </select>
            </div>
          </div>

          <div className="row row-cols-xl-5 row-cols-md-2 row-cols-1">
            <div className="col mt-4">
              <a
                href="#!"
                className="features feature-primary d-flex justify-content-between align-items-center bg-white rounded shadow p-3"
              >
                <div className="d-flex align-items-center">
                  <div className="icon text-center rounded-pill">
                    <i className="uil uil-user-circle fs-4 mb-0"></i>
                  </div>
                  <div className="flex-1 ms-3">
                    <h6 className="mb-0 text-muted">Visitor</h6>
                    <p className="fs-5 text-dark fw-bold mb-0">
                      <span className="counter-value" data-target="4589">
                        2100
                      </span>
                    </p>
                  </div>
                </div>

                <span className="text-danger">
                  <i className="uil uil-chart-down"></i> 0.5%
                </span>
              </a>
            </div>

            <div className="col mt-4">
              <a
                href="#!"
                className="features feature-primary d-flex justify-content-between align-items-center bg-white rounded shadow p-3"
              >
                <div className="d-flex align-items-center">
                  <div className="icon text-center rounded-pill">
                    <i className="uil uil-usd-circle fs-4 mb-0"></i>
                  </div>
                  <div className="flex-1 ms-3">
                    <h6 className="mb-0 text-muted">Revenue</h6>
                    <p className="fs-5 text-dark fw-bold mb-0">
                      $
                      <span className="counter-value" data-target="48575">
                        35214
                      </span>
                    </p>
                  </div>
                </div>

                <span className="text-success">
                  <i className="uil uil-arrow-growth"></i> 3.84%
                </span>
              </a>
            </div>

            <div className="col mt-4">
              <a
                href="#!"
                className="features feature-primary d-flex justify-content-between align-items-center bg-white rounded shadow p-3"
              >
                <div className="d-flex align-items-center">
                  <div className="icon text-center rounded-pill">
                    <i className="uil uil-shopping-bag fs-4 mb-0"></i>
                  </div>
                  <div className="flex-1 ms-3">
                    <h6 className="mb-0 text-muted">Orders</h6>
                    <p className="fs-5 text-dark fw-bold mb-0">
                      <span className="counter-value" data-target="4800">
                        3402
                      </span>
                    </p>
                  </div>
                </div>

                <span className="text-success">
                  <i className="uil uil-arrow-growth"></i> 1.46%
                </span>
              </a>
            </div>

            <div className="col mt-4">
              <a
                href="#!"
                className="features feature-primary d-flex justify-content-between align-items-center bg-white rounded shadow p-3"
              >
                <div className="d-flex align-items-center">
                  <div className="icon text-center rounded-pill">
                    <i className="uil uil-store fs-4 mb-0"></i>
                  </div>
                  <div className="flex-1 ms-3">
                    <h6 className="mb-0 text-muted">Items</h6>
                    <p className="fs-5 text-dark fw-bold mb-0">
                      <span className="counter-value" data-target="145">
                        23
                      </span>
                    </p>
                  </div>
                </div>

                <span className="text-muted">
                  <i className="uil uil-analysis"></i> 0.0%
                </span>
              </a>
            </div>

            <div className="col mt-4">
              <a
                href="#!"
                className="features feature-primary d-flex justify-content-between align-items-center bg-white rounded shadow p-3"
              >
                <div className="d-flex align-items-center">
                  <div className="icon text-center rounded-pill">
                    <i className="uil uil-users-alt fs-4 mb-0"></i>
                  </div>
                  <div className="flex-1 ms-3">
                    <h6 className="mb-0 text-muted">Users</h6>
                    <p className="fs-5 text-dark fw-bold mb-0">
                      <span className="counter-value" data-target="9">
                        1.5
                      </span>
                      M
                    </p>
                  </div>
                </div>

                <span className="text-danger">
                  <i className="uil uil-chart-down"></i> 0.5%
                </span>
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-8 col-lg-7 mt-4">
              <div className="card shadow border-0 p-4 pb-0 rounded">
                <div className="d-flex justify-content-between">
                  <h6 className="mb-0 fw-bold">Sales Analytics</h6>

                  <div className="mb-0 position-relative">
                    <select
                      className="form-select form-control"
                      id="yearchart"
                      defaultValue="current"
                    >
                      <option value="current">2021</option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                    </select>
                  </div>
                </div>
                <div id="dashboard" className="apex-chart"></div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-5 mt-4 rounded">
              <div className="card shadow border-0">
                <div className="p-4 border-bottom">
                  <div className="d-flex justify-content-between">
                    <h6 className="mb-0 fw-bold">Upcoming Activity</h6>

                    <a href="#!" className="text-primary">
                      See More{' '}
                      <i className="uil uil-arrow-right align-middle"></i>
                    </a>
                  </div>
                </div>

                <div className="p-4" data-simplebar style={{ height: '365px' }}>
                  <a
                    href="\#"
                    className="features feature-primary key-feature d-flex align-items-center justify-content-between"
                  >
                    <div className="d-flex align-items-center">
                      <div className="icon text-center rounded-circle me-3">
                        <i className="ti ti-users"></i>
                      </div>
                      <div className="flex-1">
                        <h6 className="mb-0 text-dark">
                          Meeting with Developers
                        </h6>
                        <small className="text-muted">Today 6:00pm</small>
                      </div>
                    </div>

                    <i className="ti ti-arrow-up text-warning"></i>
                  </a>

                  <a
                    href="\#"
                    className="features feature-success key-feature d-flex align-items-center justify-content-between mt-4"
                  >
                    <div className="d-flex align-items-center">
                      <div className="icon text-center rounded-circle me-3">
                        <i className="ti ti-gift"></i>
                      </div>
                      <div className="flex-1">
                        <h6 className="mb-0 text-dark">Cally's Birthday</h6>
                        <small className="text-muted">Tomorrow 10:00am</small>
                      </div>
                    </div>

                    <i className="ti ti-arrow-down text-success"></i>
                  </a>

                  <a
                    href="\#"
                    className="features feature-primary key-feature d-flex align-items-center justify-content-between mt-4"
                  >
                    <div className="d-flex align-items-center">
                      <div className="icon text-center rounded-circle me-3">
                        <i className="ti ti-users"></i>
                      </div>
                      <div className="flex-1">
                        <h6 className="mb-0 text-dark">Meeting with C.E.O</h6>
                        <small className="text-muted">Today 6:00pm</small>
                      </div>
                    </div>

                    <i className="ti ti-arrow-down text-success"></i>
                  </a>

                  <a
                    href="\#"
                    className="features feature-danger key-feature d-flex align-items-center justify-content-between mt-4"
                  >
                    <div className="d-flex align-items-center">
                      <div className="icon text-center rounded-circle me-3">
                        <i className="ti ti-video-plus"></i>
                      </div>
                      <div className="flex-1">
                        <h6 className="mb-0 text-dark">Movie Night</h6>
                        <small className="text-muted">Today 6:00pm</small>
                      </div>
                    </div>

                    <i className="ti ti-arrow-down text-success"></i>
                  </a>

                  <a
                    href="\#"
                    className="features feature-primary key-feature d-flex align-items-center justify-content-between mt-4"
                  >
                    <div className="d-flex align-items-center">
                      <div className="icon text-center rounded-circle me-3">
                        <i className="ti ti-users"></i>
                      </div>
                      <div className="flex-1">
                        <h6 className="mb-0 text-dark">Meeting with HR</h6>
                        <small className="text-muted">Today 6:00pm</small>
                      </div>
                    </div>

                    <i className="ti ti-arrow-down text-success"></i>
                  </a>

                  <a
                    href="\#"
                    className="features feature-success key-feature d-flex align-items-center justify-content-between mt-4"
                  >
                    <div className="d-flex align-items-center">
                      <div className="icon text-center rounded-circle me-3">
                        <i className="ti ti-gift"></i>
                      </div>
                      <div className="flex-1">
                        <h6 className="mb-0 text-dark">Carlo's Birthday</h6>
                        <small className="text-muted">Today 6:00pm</small>
                      </div>
                    </div>

                    <i className="ti ti-arrow-down text-success"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-4">
              <div className="row">
                <div className="col-xl-12 mt-4">
                  <div className="card rounded shadow border-0 p-4">
                    <div className="d-flex justify-content-between mb-4">
                      <h6 className="mb-0">Monthly Sales Report</h6>

                      <div className="text-end">
                        <h5 className="mb-0">2384</h5>
                        <h6 className="text-muted mb-0">September</h6>
                      </div>
                    </div>
                    <div id="sale-chart"></div>
                  </div>
                </div>

                <div className="col-xl-12 mt-4">
                  <div className="card rounded shadow border-0 p-4">
                    <div className="d-flex justify-content-between mb-4">
                      <h6 className="mb-0">Weekly Top Products</h6>

                      <div className="text-end">
                        <h6 className="text-muted mb-0">Last Week</h6>
                      </div>
                    </div>
                    <div id="top-product-chart"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-8 mt-4">
              <div className="d-flex justify-content-between p-4 bg-white shadow rounded-top">
                <h6 className="fw-bold mb-0">Invoice List</h6>

                <ul className="list-unstyled mb-0">
                  <li className="dropdown dropdown-primary list-inline-item">
                    <button
                      type="button"
                      className="btn btn-icon btn-pills btn-soft-primary dropdown-toggle p-0"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="ti ti-dots-vertical"></i>
                    </button>
                    <div className="dropdown-menu dd-menu dropdown-menu-end bg-white shadow border-0 mt-3 py-3">
                      <a className="dropdown-item text-dark" href="#">
                        {' '}
                        Paid
                      </a>
                      <a className="dropdown-item text-dark" href="#">
                        {' '}
                        Unpaid
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                className="table-responsive shadow rounded-bottom"
                data-simplebar
                style={{ height: '550px' }}
              >
                <table className="table table-center bg-white mb-0">
                  <thead>
                    <tr>
                      <th className="border-bottom p-3">No.</th>
                      <th
                        className="border-bottom p-3"
                        style={{ minWidth: '220px' }}
                      >
                        Client Name
                      </th>
                      <th className="text-center border-bottom p-3">Amount</th>
                      <th
                        className="text-center border-bottom p-3"
                        style={{ minWidth: '150px' }}
                      >
                        Generate(Dt.)
                      </th>
                      <th className="text-center border-bottom p-3">Status</th>
                      <th
                        className="text-end border-bottom p-3"
                        style={{ minWidth: '100px' }}
                      >
                        Preview
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="p-3">#d01</th>
                      <td className="p-3">
                        <a href="#" className="text-primary">
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/client/01.jpg"
                              className="avatar avatar-ex-small rounded-circle shadow"
                              alt=""
                            />
                            <span className="ms-2">Howard Tanner</span>
                          </div>
                        </a>
                      </td>
                      <td className="text-center p-3">$253</td>
                      <td className="text-center p-3">23th Sept 2021</td>
                      <td className="text-center p-3">
                        <div className="badge bg-soft-danger rounded px-3 py-1">
                          Unpaid
                        </div>
                      </td>
                      <td className="text-end p-3">
                        <a
                          href="invoice.html"
                          className="btn btn-sm btn-primary"
                        >
                          Preview
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th className="p-3">#d02</th>
                      <td className="p-3">
                        <a href="#" className="text-primary">
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/client/02.jpg"
                              className="avatar avatar-ex-small rounded-circle shadow"
                              alt=""
                            />
                            <span className="ms-2">Wendy Filson</span>
                          </div>
                        </a>
                      </td>
                      <td className="text-center p-3">$482</td>
                      <td className="text-center p-3">11th Sept 2021</td>
                      <td className="text-center p-3">
                        <div className="badge bg-soft-success rounded px-3 py-1">
                          Paid
                        </div>
                      </td>
                      <td className="text-end p-3">
                        <a
                          href="invoice.html"
                          className="btn btn-sm btn-primary"
                        >
                          Preview
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th className="p-3">#d03</th>
                      <td className="p-3">
                        <a href="#" className="text-primary">
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/client/03.jpg"
                              className="avatar avatar-ex-small rounded-circle shadow"
                              alt=""
                            />
                            <span className="ms-2">Faye Bridger</span>
                          </div>
                        </a>
                      </td>
                      <td className="text-center p-3">$546</td>
                      <td className="text-center p-3">2nd Sept 2021</td>
                      <td className="text-center p-3">
                        <div className="badge bg-soft-danger rounded px-3 py-1">
                          Unpaid
                        </div>
                      </td>
                      <td className="text-end p-3">
                        <a
                          href="invoice.html"
                          className="btn btn-sm btn-primary"
                        >
                          Preview
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th className="p-3">#d04</th>
                      <td className="p-3">
                        <a href="#" className="text-primary">
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/client/04.jpg"
                              className="avatar avatar-ex-small rounded-circle shadow"
                              alt=""
                            />
                            <span className="ms-2">Ronald Curtis</span>
                          </div>
                        </a>
                      </td>
                      <td className="text-center p-3">$154</td>
                      <td className="text-center p-3">1st Sept 2021</td>
                      <td className="text-center p-3">
                        <div className="badge bg-soft-danger rounded px-3 py-1">
                          Unpaid
                        </div>
                      </td>
                      <td className="text-end p-3">
                        <a
                          href="invoice.html"
                          className="btn btn-sm btn-primary"
                        >
                          Preview
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th className="p-3">#d05</th>
                      <td className="p-3">
                        <a href="#" className="text-primary">
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/client/05.jpg"
                              className="avatar avatar-ex-small rounded-circle shadow"
                              alt=""
                            />
                            <span className="ms-2">Melissa Hibner</span>
                          </div>
                        </a>
                      </td>
                      <td className="text-center p-3">$458</td>
                      <td className="text-center p-3">1st Sept 2021</td>
                      <td className="text-center p-3">
                        <div className="badge bg-soft-success rounded px-3 py-1">
                          Paid
                        </div>
                      </td>
                      <td className="text-end p-3">
                        <a
                          href="invoice.html"
                          className="btn btn-sm btn-primary"
                        >
                          Preview
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th className="p-3">#d06</th>
                      <td className="p-3">
                        <a href="#" className="text-primary">
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/client/06.jpg"
                              className="avatar avatar-ex-small rounded-circle shadow"
                              alt=""
                            />
                            <span className="ms-2">Randall Case</span>
                          </div>
                        </a>
                      </td>
                      <td className="text-center p-3">$548</td>
                      <td className="text-center p-3">28th Aug 2021</td>
                      <td className="text-center p-3">
                        <div className="badge bg-soft-success rounded px-3 py-1">
                          Paid
                        </div>
                      </td>
                      <td className="text-end p-3">
                        <a
                          href="invoice.html"
                          className="btn btn-sm btn-primary"
                        >
                          Preview
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th className="p-3">#d07</th>
                      <td className="p-3">
                        <a href="#" className="text-primary">
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/client/07.jpg"
                              className="avatar avatar-ex-small rounded-circle shadow"
                              alt=""
                            />
                            <span className="ms-2">Jerry Morena</span>
                          </div>
                        </a>
                      </td>
                      <td className="text-center p-3">$658</td>
                      <td className="text-center p-3">25th Aug 2021</td>
                      <td className="text-center p-3">
                        <div className="badge bg-soft-danger rounded px-3 py-1">
                          Unpaid
                        </div>
                      </td>
                      <td className="text-end p-3">
                        <a
                          href="invoice.html"
                          className="btn btn-sm btn-primary"
                        >
                          Preview
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <th className="p-3">#d08</th>
                      <td className="p-3">
                        <a href="#" className="text-primary">
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/client/08.jpg"
                              className="avatar avatar-ex-small rounded-circle shadow"
                              alt=""
                            />
                            <span className="ms-2">Lester McNally</span>
                          </div>
                        </a>
                      </td>
                      <td className="text-center p-3">$457</td>
                      <td className="text-center p-3">20th Aug 2021</td>
                      <td className="text-center p-3">
                        <div className="badge bg-soft-danger rounded px-3 py-1">
                          Unpaid
                        </div>
                      </td>
                      <td className="text-end p-3">
                        <a
                          href="invoice.html"
                          className="btn btn-sm btn-primary"
                        >
                          Preview
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th className="p-3">#d09</th>
                      <td className="p-3">
                        <a href="#" className="text-primary">
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/client/09.jpg"
                              className="avatar avatar-ex-small rounded-circle shadow"
                              alt=""
                            />
                            <span className="ms-2">Christopher Burrell</span>
                          </div>
                        </a>
                      </td>
                      <td className="text-center p-3">$586</td>
                      <td className="text-center p-3">15th Aug 2021</td>
                      <td className="text-center p-3">
                        <div className="badge bg-soft-success rounded px-3 py-1">
                          Paid
                        </div>
                      </td>
                      <td className="text-end p-3">
                        <a
                          href="invoice.html"
                          className="btn btn-sm btn-primary"
                        >
                          Preview
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <th className="p-3">#d10</th>
                      <td className="p-3">
                        <a href="#" className="text-primary">
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/client/10.jpg"
                              className="avatar avatar-ex-small rounded-circle shadow"
                              alt=""
                            />
                            <span className="ms-2">Mary Skeens</span>
                          </div>
                        </a>
                      </td>
                      <td className="text-center p-3">$325</td>
                      <td className="text-center p-3">10th Aug 2021</td>
                      <td className="text-center p-3">
                        <div className="badge bg-soft-danger rounded px-3 py-1">
                          Unpaid
                        </div>
                      </td>
                      <td className="text-end p-3">
                        <a
                          href="invoice.html"
                          className="btn btn-sm btn-primary"
                        >
                          Preview
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-white shadow py-3">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col">
              <div className="text-sm-start text-center">
                <p className="mb-0 text-muted">
                  © 2022 Applex. Design with{' '}
                  <i className="mdi mdi-heart text-danger"></i> by{' '}
                  <a
                    href="https://shreethemes.in/"
                    target="_blank"
                    className="text-reset"
                  >
                    B.N
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
