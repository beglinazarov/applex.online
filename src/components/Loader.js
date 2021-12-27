import React from 'react'

export default function Loader(props) {
  return (
    props.isLoading && (
      <div id="preloader">
        <div id="status">
          <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
          </div>
        </div>
      </div>
    )
  )
}
