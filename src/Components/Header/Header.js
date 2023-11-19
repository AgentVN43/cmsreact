import React from 'react'
import "../sass/abstracts/_mixins.scss"
import "../sass/layout/_header.scss"
import "../sass/base/_font.scss"
import Clock from '../Clock/Clock'


export default function Header() {
  return (
    <> 
    <header>
  <div className="__header">
    <div className="__header-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="__left">
              <p
                className="head--fs head-clo mb-0 mr-3"
                style={{ marginBottom: 12 }}
              >
                <a href="tel:+84946583583">
                  <span className="icon-topbar-phone border-cik header-bar-phone-desktop" />
                  <span className="header-bar-phone-desktop">
                    +84.946.583.583
                  </span>
                </a>
              </p>
              <p className="head--fs head-clo mb-0">
                <span className="icon-topbar-calender border-cik" />
                <span id="datetime"> <Clock/></span>
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="__right">
              <ul className="menu-login">
                <li>
                  <a
                    href="https://www.vietnam-visa.com/check-status/"
                    className="header-bar-check-status"
                    title="Check status"
                    rel="nofollow"
                  >
                    Check status
                  </a>
                </li>
                <li>
                  <a
                    className="header-bar-login"
                    href="https://booking.vietnam-visa.com//login.html"
                    title="Login"
                    rel="nofollow"
                  >
                    Login
                  </a>
                </li>
              </ul>
              <div className="__english">
                <div className="wrap-english">
                  <img
                    src="http://www.vietnam-visa.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/en.png"
                    alt="English"
                    width={18}
                    height={12}
                    data-lazy-src="http://www.vietnam-visa.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/en.png"
                    data-ll-status="loaded"
                    className="entered lazyloaded"
                  />
                  <noscript>
                    &lt;img
                    src="http://www.vietnam-visa.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/en.png"
                    alt="English" width="18" height="12"&gt;
                  </noscript>
                  <span className="txt-14-22 ml-2 mr-1">English</span>
                  <span className="icon-topbar-arrow en-arrow" />
                </div>
                <ul className="sl-en">
                  <li>
                    <a href="https://www.vietnam-visa.com/zh-hant/">
                      <img
                        src="http://www.vietnam-visa.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/zh.png"
                        alt="Chinese (Traditional)"
                        width={18}
                        height={12}
                        data-lazy-src="http://www.vietnam-visa.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/zh.png"
                        data-ll-status="loaded"
                        className="entered lazyloaded"
                      />
                      <noscript>
                        &lt;img
                        src="http://www.vietnam-visa.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/zh.png"
                        alt="Chinese (Traditional)" width="18" height="12"/&gt;
                      </noscript>
                      <span>Chinese (Traditional)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.vietnam-visa.com/zh-hans/">
                      <img
                        src="http://www.vietnam-visa.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/zh.png"
                        alt="Chinese (Simplified)"
                        width={18}
                        height={12}
                        data-lazy-src="http://www.vietnam-visa.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/zh.png"
                        data-ll-status="loaded"
                        className="entered lazyloaded"
                      />
                      <noscript>
                        &lt;img
                        src="http://www.vietnam-visa.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/zh.png"
                        alt="Chinese (Simplified)" width="18" height="12"/&gt;
                      </noscript>
                      <span>Chinese (Simplified)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.vietnam-visa.com/vi/">
                      <img
                        src="http://www.vietnam-visa.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/vi.png"
                        alt="Vietnamese"
                        width={18}
                        height={12}
                        data-lazy-src="http://www.vietnam-visa.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/vi.png"
                        data-ll-status="loaded"
                        className="entered lazyloaded"
                      />
                      <noscript>
                        &lt;img
                        src="http://www.vietnam-visa.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/vi.png"
                        alt="Vietnamese" width="18" height="12"/&gt;
                      </noscript>
                      <span>Vietnamese</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.vietnam-visa.com/es/">
                      <img
                        src="http://www.vietnam-visa.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/es.png"
                        alt="Spanish"
                        width={18}
                        height={12}
                        data-lazy-src="http://www.vietnam-visa.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/es.png"
                        data-ll-status="loaded"
                        className="entered lazyloaded"
                      />
                      <noscript>
                        &lt;img
                        src="http://www.vietnam-visa.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/es.png"
                        alt="Spanish" width="18" height="12"/&gt;
                      </noscript>
                      <span>Spanish</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.vietnam-visa.com/">
                      <img
                        src="http://www.vietnam-visa.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/en.png"
                        alt="English"
                        width={18}
                        height={12}
                        data-lazy-src="http://www.vietnam-visa.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/en.png"
                        data-ll-status="loaded"
                        className="entered lazyloaded"
                      />
                      <noscript>
                        &lt;img
                        src="http://www.vietnam-visa.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/en.png"
                        alt="English" width="18" height="12"/&gt;
                      </noscript>
                      <span>English</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="__main-header">
      <a
        href="javascript:void(0);"
        className="dl-trigger hamburger_nav bar-menu-mobile d-none"
      >
        <div className="menu-trigger">
          <span />
          <span />
          <span />
        </div>
        <span className="d-none">Open menu</span>
      </a>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="__wrap-header">
              <div className="__logo-vnvisa">
                <a
                  href="https://www.vietnam-visa.com/"
                  title="logo vietnam-visa.com"
                >
                  <img
                    src="https://www.vietnam-visa.com/wp-content/themes/vietnam_visa_v4.1/assets/images/vietnam-visa-logo.png"
                    alt="logo vietnam-visa.com"
                    width={170}
                    height={32}
                    data-lazy-src="https://www.vietnam-visa.com/wp-content/themes/vietnam_visa_v4.1/assets/images/vietnam-visa-logo.png"
                    data-ll-status="loaded"
                    className="entered lazyloaded"
                  />
                  <noscript>
                    &lt;img
                    src="https://www.vietnam-visa.com/wp-content/themes/vietnam_visa_v4.1/assets/images/vietnam-visa-logo.png"
                    alt="logo vietnam-visa.com" width="170" height="32"&gt;
                  </noscript>
                </a>
              </div>
              <div className="__main-menu-vnvisa">
                <span className="icon-arrow-long arrow-hide-menu d-none" />
                <ul id="menu-main-menu" className="menu-vnvisa">
                  <li
                    id="menu-item-28638"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-28638"
                  >
                    <a href="#">
                      Visa Service
                      <span className="icon-option-arrow-down menu-arrow" />
                    </a>
                    <ul className="sub-menu">
                      <li
                        id="menu-item-37391"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-37391"
                      >
                        <a href="https://www.vietnam-visa.com/vietnam-e-visa/">
                          Vietnam e-visa
                        </a>
                      </li>
                      <li
                        id="menu-item-56255"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56255"
                      >
                        <a href="https://www.vietnam-visa.com/super-urgent-visa-service/">
                          Emergency Visa
                        </a>
                      </li>
                      <li
                        id="menu-item-28639"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-28639"
                      >
                        <a href="https://www.vietnam-visa.com/how-to-apply-vietnam-visa-on-arrival/">
                          Visa on Arrival
                        </a>
                      </li>
                      <li
                        id="menu-item-37382"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-37382"
                      >
                        <a href="https://www.vietnam-visa.com/work-visa/">
                          Working Visa
                        </a>
                      </li>
                      <li
                        id="menu-item-37383"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-37383"
                      >
                        <a href="https://www.vietnam-visa.com/investor-visa/">
                          Investor Visa
                        </a>
                      </li>
                      <li
                        id="menu-item-37384"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-37384"
                      >
                        <a href="https://www.vietnam-visa.com/vietnam-5-year-visa-exemption/">
                          5 Years Visa
                        </a>
                      </li>
                      <li
                        id="menu-item-37385"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-37385"
                      >
                        <a href="https://www.vietnam-visa.com/exit-visa/">
                          Exit Visa
                        </a>
                      </li>
                      <li
                        id="menu-item-29298"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-29298"
                      >
                        <a href="https://www.vietnam-visa.com/vietnam-visa-extension/">
                          Visa Extension
                        </a>
                      </li>
                      <li
                        id="menu-item-34716"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-34716"
                      >
                        <a href="https://www.vietnam-visa.com/extend-stay-in-vietnam-for-apec-business-travel-card-holders/">
                          ABTC stay extension
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-37388"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-37388"
                  >
                    <a href="#">
                      Labor &amp; Residence Services
                      <span className="icon-option-arrow-down menu-arrow" />
                    </a>
                    <ul className="sub-menu">
                      <li
                        id="menu-item-34681"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-34681"
                      >
                        <a href="https://www.vietnam-visa.com/work-permit-service/">
                          Work permit
                        </a>
                      </li>
                      <li
                        id="menu-item-34744"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-34744"
                      >
                        <a href="https://www.vietnam-visa.com/temporary-residence-card-service/">
                          Temporary Residence Card
                        </a>
                      </li>
                      <li
                        id="menu-item-37389"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-37389"
                      >
                        <a href="https://www.vietnam-visa.com/legalization-service/">
                          Consular Legalization
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-51053"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-51053"
                  >
                    <a href="#">
                      Other Services
                      <span className="icon-option-arrow-down menu-arrow" />
                    </a>
                    <ul className="sub-menu">
                      <li
                        id="menu-item-50935"
                        className="menu-item menu-item-type-post_type menu-item-object-post menu-item-50935"
                      >
                        <a href="https://www.vietnam-visa.com/vietnam-esim/">
                          Vietnam esim
                        </a>
                      </li>
                      <li
                        id="menu-item-42093"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-42093"
                      >
                        <a href="https://www.vietnam-visa.com/arrival-assistance/">
                          Arrival Assistance
                        </a>
                      </li>
                      <li
                        id="menu-item-51054"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-51054"
                      >
                        <a href="https://www.vietnam-visa.com/departure-assistance/">
                          Departure Assistance
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-28644"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-28644"
                  >
                    <a href="#">
                      Useful Guide
                      <span className="icon-option-arrow-down menu-arrow" />
                    </a>
                    <ul className="sub-menu">
                      <li
                        id="menu-item-28643"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-28643"
                      >
                        <a href="https://www.vietnam-visa.com/vietnam-visa-requirements/">
                          Visa Requirements
                        </a>
                      </li>
                      <li
                        id="menu-item-29295"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-29295"
                      >
                        <a href="https://www.vietnam-visa.com/how-vietnam-visa-on-arrival-works/">
                          Visa on Arrival
                        </a>
                      </li>
                      <li
                        id="menu-item-37390"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-37390"
                      >
                        <a href="https://www.vietnam-visa.com/vietnam-visa-fees/">
                          Visa Fees
                        </a>
                      </li>
                      <li
                        id="menu-item-29296"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-29296"
                      >
                        <a href="https://www.vietnam-visa.com/vietnam-visa-guide/">
                          Visa Information
                        </a>
                      </li>
                      <li
                        id="menu-item-29696"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-29696"
                      >
                        <a href="https://www.vietnam-visa.com/vietnam-visa-exemption/">
                          Visa exemption
                        </a>
                      </li>
                      <li
                        id="menu-item-29697"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-29697"
                      >
                        <a href="https://www.vietnam-visa.com/faqs/">
                          Visa FAQs
                        </a>
                      </li>
                      <li
                        id="menu-item-29299"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-29299"
                      >
                        <a href="https://www.vietnam-visa.com/embassy/">
                          Vietnam Embassy
                        </a>
                      </li>
                      <li
                        id="menu-item-28645"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-28645"
                      >
                        <a href="https://www.vietnam-visa.com/blog/">Blog</a>
                      </li>
                    </ul>
                  </li>
                </ul>{" "}
                <hr />
                <div className="menu--mb d-none">
                  <div className="wrap-login mb-20" />
                  <div className="wrap-contact mb-20">
                    <ul>
                      <li className="mb-20">
                        <a href="tel:+84946583583">
                          <span className="header-bar-phone-desktop">
                            Hotline:
                          </span>
                          <span className="c-green header-bar-phone-desktop">
                            {" "}
                            +84.946.583.583
                          </span>
                        </a>
                      </li>
                      <li>
                        <span id="datetime-mb">
                          Thu Nov 16 2023, 10:36:02 (GMT+7)
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="check-status" />
                </div>
                <div className="__header-apply">
                  <a
                    className="btn pd-8-16 btn-apply apply-vietnam-visa"
                    href="https://apply.vietnam-visa.com/"
                    title="Apply now"
                    target="_blank"
                  >
                    Apply now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

  </>
  )
}
