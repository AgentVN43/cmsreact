import React from 'react'
import "../sass/abstracts/_mixins.scss"
import "../sass/layout/_header.scss"
import "../sass/base/_font.scss"
import "../sass/pages/_home.scss"
import "../sass/layout/_breadcrumb.scss"

export default function Breadcrumb1() {
  return (
    <>
        <div className="wrap-breadcrumb">
  <div className="container">
    {" "}
    <div className="row">
      {" "}
      <div className="col-lg-12">
        {" "}
        <ul>
          <li>
            <a href="https://www.vietnam-visa.com/">Home</a>
          </li>
          <li className="brc-arrow">
            <span className="icon-menu-arrow-right" />
          </li>
          <li>
            <a href="https://www.vietnam-visa.com/vietnam-visa-guide/">
              Visa Guide
            </a>
          </li>
          <li className="brc-arrow">
            <span className="icon-menu-arrow-right" />
          </li>
          <li>E-Visa</li>
        </ul>{" "}
      </div>{" "}
    </div>{" "}
  </div>{" "}
</div>

    </>
  )
}
