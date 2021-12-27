import React from 'react'

export default function BackToTop() {
  return (
    <a
      href="#"
      onClick="topFunction()"
      id="back-to-top"
      className="back-to-top fs-5"
    >
      <i data-feather="arrow-up" className="fea icon-sm icons align-middle"></i>
    </a>
  )
}
