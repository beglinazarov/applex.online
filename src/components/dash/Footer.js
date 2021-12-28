import React from 'react'

export default function Footer() {
  return (
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
  )
}
