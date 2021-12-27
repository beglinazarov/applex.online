import React from 'react'

export default function ThemeSwitcher() {
  return (
    <div
      id="style-switcher"
      className="bg-light border p-3 pt-2 pb-2"
      onclick="toggleSwitcher()"
    >
      <div>
        <h6 className="title text-center">Select Your Color</h6>
        <ul className="pattern">
          <li className="list-inline-item">
            <a className="color1" href="\#" onclick="setColor('default')"></a>
          </li>
          <li className="list-inline-item">
            <a className="color2" href="\#" onclick="setColor('green')"></a>
          </li>
          <li className="list-inline-item">
            <a className="color3" href="\#" onclick="setColor('purple')"></a>
          </li>
          <li className="list-inline-item">
            <a className="color4" href="\#" onclick="setColor('red')"></a>
          </li>
          <li className="list-inline-item">
            <a className="color5" href="\#" onclick="setColor('skyblue')"></a>
          </li>
          <li className="list-inline-item">
            <a className="color6" href="\#" onclick="setColor('skobleoff')"></a>
          </li>
          <li className="list-inline-item">
            <a className="color7" href="\#" onclick="setColor('cyan')"></a>
          </li>
          <li className="list-inline-item">
            <a className="color8" href="\#" onclick="setColor('slateblue')"></a>
          </li>
          <li className="list-inline-item">
            <a className="color9" href="\#" onclick="setColor('yellow')"></a>
          </li>
        </ul>

        <h6 className="title text-center pt-3 mb-0 border-top">Theme Option</h6>
        <ul className="text-center list-unstyled">
          <li className="d-grid">
            <a
              href="\#"
              className="btn btn-sm btn-block btn-primary rtl-version t-rtl-light mt-2"
              onclick="setTheme('style-rtl')"
            >
              RTL
            </a>
          </li>
          <li className="d-grid">
            <a
              href="\#"
              className="btn btn-sm btn-block btn-primary ltr-version t-ltr-light mt-2"
              onclick="setTheme('style')"
            >
              LTR
            </a>
          </li>
          <li className="d-grid">
            <a
              href="\#"
              className="btn btn-sm btn-block btn-primary dark-rtl-version t-rtl-dark mt-2"
              onclick="setTheme('style-dark-rtl')"
            >
              RTL
            </a>
          </li>
          <li className="d-grid">
            <a
              href="\#"
              className="btn btn-sm btn-block btn-primary dark-ltr-version t-ltr-dark mt-2"
              onclick="setTheme('style-dark')"
            >
              LTR
            </a>
          </li>
          <li className="d-grid">
            <a
              href="\#"
              className="btn btn-sm btn-block btn-dark dark-version t-dark mt-2"
              onclick="setTheme('style-dark')"
            >
              Dark
            </a>
          </li>
          <li className="d-grid">
            <a
              href="\#"
              className="btn btn-sm btn-block btn-dark light-version t-light mt-2"
              onclick="setTheme('style')"
            >
              Light
            </a>
          </li>
        </ul>

        <h6 className="title text-center pt-3 mb-0 border-top">Admin</h6>
        <ul className="text-center list-unstyled mb-0">
          <li>
            <a
              href="\#"
              target="_blank"
              className="btn btn-sm btn-block btn-success mt-2"
            >
              Admin Dashboard
            </a>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <a href="\#" className="settings bg-white title-bg-dark shadow d-block">
          <i className="mdi mdi-cog ms-1 mdi-24px position-absolute mdi-spin text-primary"></i>
        </a>
      </div>
    </div>
  )
}
