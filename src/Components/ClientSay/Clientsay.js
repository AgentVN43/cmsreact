import React from 'react'
import "../sass/abstracts/_mixins.scss"
import "../sass/layout/_header.scss"
import "../sass/base/_font.scss"
import "../sass/base/_typography.scss"
import "../sass/base/_reset.scss" 
import "../sass/layout/_shortcode.scss"

export default function Clientsay() {
  return (
    <>
        <div className="__vnvisa-client-say ">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="wrap-title-client-say text-center mb-32">
          <h2 className="hd-1 mb-2 client-say-title resp-title">
            What our clients say
          </h2>
          <p className="mb-0 client-say-des">
            With experience assisting 300,000+ clients so far, Vietnam-visa.com
            is proudly a reliable service provider for anyone in need of an
            entry visa to Vietnam, visa extension, work permit, temporary
            residence and police check. Browse below to see what our clients
            have said about us.
          </p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <div className="list-client-say">
          <p>List client say</p>
        </div>
        <div className="btn-client-say text-center mt-32">
          <a
            href="https://www.vietnam-visa.com/testimonials/"
            className="btn btn-outline-green pd-11-32 font-w-semibold "
          >
            View all
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}
