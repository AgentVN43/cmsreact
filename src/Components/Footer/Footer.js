import React, { useEffect, useState } from "react";
import "../sass/abstracts/_mixins.scss";
import "../sass/layout/_header.scss";
import "../sass/base/_font.scss";
import "../sass/base/_reset.scss";
import "../sass/layout/_footer.scss";
import axios from "axios";
//import "../lib/bootstrap.min.css"

export default function Footer() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [footerMenu, setfooterMenu] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from url 1
        const footer = await axios.get(
          "https://e-visaforvietnam.com/wp-json/spacevisa/v1/footer-menu/"
        );
        setfooterMenu(footer.data.menu);
        console.log(footerMenu);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <footer className="mt-5">
        <div className="__vnvisa-footer mt-64">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="footer__top">
                  <div className="footer-item footer-vietnam-visa">
                    <div className="menu-menu-footer-1-container">
                      <ul
                        id="menu-menu-footer-1"
                        className="footer-dropdown menu"
                      >
                        <li
                          id="menu-item-36119"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-36119"
                        >
                          {footerMenu.map((item, index) => (
                            <React.Fragment key={index}>
                              <a href="#">{item.title1}</a>
                              {item.items && item.items.length > 0 && (
                                <ul className="sub-menu">
                                  {item.items.map((subItem, subIndex) => (
                                    <li
                                      key={subIndex}
                                      className="menu-item menu-item-type-custom menu-item-object-custom"
                                    >
                                      <a href={subItem.url}>{subItem.label}</a>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </React.Fragment>
                          ))}
                        </li>
                      </ul>
                    </div>{" "}
                  </div>
                  <div className="footer-item footer-requirements">
                    <div className="menu-menu-footer-2-container">
                      <ul
                        id="menu-menu-footer-2"
                        className="footer-dropdown menu"
                      >
                        <li
                          id="menu-item-36120"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-36120"
                        >
                          <a href="https://www.vietnam-visa.com/services/">
                            Our Services
                          </a>
                          <ul className="sub-menu">
                            <li
                              id="menu-item-56256"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-56256"
                            >
                              <a href="https://www.vietnam-visa.com/vietnam-e-visa/">
                                Vietnam eVisa
                              </a>
                            </li>
                            <li
                              id="menu-item-28661"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-28661"
                            >
                              <a href="https://www.vietnam-visa.com/super-urgent-visa-service/">
                                Emergency Visa
                              </a>
                            </li>
                            <li
                              id="menu-item-28662"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-28662"
                            >
                              <a href="https://www.vietnam-visa.com/how-to-apply-vietnam-visa-on-arrival/">
                                Visa on Arrival
                              </a>
                            </li>
                            <li
                              id="menu-item-28663"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-28663"
                            >
                              <a href="https://www.vietnam-visa.com/work-visa/">
                                Working Visa
                              </a>
                            </li>
                            <li
                              id="menu-item-28664"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-28664"
                            >
                              <a href="https://www.vietnam-visa.com/investor-visa/">
                                Investor Visa
                              </a>
                            </li>
                            <li
                              id="menu-item-28665"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-28665"
                            >
                              <a href="https://www.vietnam-visa.com/exit-visa/">
                                Exit Visa
                              </a>
                            </li>
                            <li
                              id="menu-item-28666"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-28666"
                            >
                              <a href="https://www.vietnam-visa.com/vietnam-5-year-visa-exemption/">
                                5 Years Visa
                              </a>
                            </li>
                            <li
                              id="menu-item-28667"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-28667"
                            >
                              <a href="https://www.vietnam-visa.com/visa-extension-service/">
                                Visa Extension
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>{" "}
                  </div>
                  <div className="footer-item footer-rsources">
                    <div className="menu-menu-footer-3-container">
                      <ul
                        id="menu-menu-footer-3"
                        className="footer-dropdown menu"
                      >
                        <li
                          id="menu-item-36121"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-36121"
                        >
                          <a href="https://www.vietnam-visa.com/services/">
                            Our Services
                          </a>
                          <ul className="sub-menu">
                            <li
                              id="menu-item-28668"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-28668"
                            >
                              <a href="https://www.vietnam-visa.com/arrival-assistance/">
                                Arrival Assistance
                              </a>
                            </li>
                            <li
                              id="menu-item-28669"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-28669"
                            >
                              <a href="https://www.vietnam-visa.com/departure-assistance/">
                                Departure Assistance
                              </a>
                            </li>
                            <li
                              id="menu-item-28670"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-28670"
                            >
                              <a href="https://www.vietnam-visa.com/criminal-record-service/">
                                Police Check
                              </a>
                            </li>
                            <li
                              id="menu-item-28671"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-28671"
                            >
                              <a href="https://www.vietnam-visa.com/work-permit-service/">
                                Work Permit
                              </a>
                            </li>
                            <li
                              id="menu-item-28672"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-28672"
                            >
                              <a href="https://www.vietnam-visa.com/temporary-residence-card-service/">
                                Temporary Residence Card
                              </a>
                            </li>
                            <li
                              id="menu-item-28673"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-28673"
                            >
                              <a href="https://www.vietnam-visa.com/legalization-service/">
                                Consular Legalization
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>{" "}
                  </div>
                  <div className="footer-item footer-services">
                    <div className="menu-menu-footer-4-container">
                      <ul
                        id="menu-menu-footer-4"
                        className="footer-dropdown menu"
                      >
                        <li
                          id="menu-item-36122"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-36122"
                        >
                          <a href="#">Resources</a>
                          <ul className="sub-menu">
                            <li
                              id="menu-item-28675"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-28675"
                            >
                              <a href="https://www.vietnam-visa.com/vietnam-visa-requirements/">
                                Visa Requirements
                              </a>
                            </li>
                            <li
                              id="menu-item-28676"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-28676"
                            >
                              <a href="https://www.vietnam-visa.com/vietnam-tourist-visa/">
                                Tourist Visa
                              </a>
                            </li>
                            <li
                              id="menu-item-28677"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-28677"
                            >
                              <a href="https://www.vietnam-visa.com/business-visa/">
                                Business Visa
                              </a>
                            </li>
                            <li
                              id="menu-item-28678"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-28678"
                            >
                              <a href="https://www.vietnam-visa.com/vietnam-immigration-blacklist/">
                                Immigration Blacklist
                              </a>
                            </li>
                            <li
                              id="menu-item-37835"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-37835"
                            >
                              <a href="https://www.vietnam-visa.com/vietnam-visa-exemption/">
                                Visa Exemption
                              </a>
                            </li>
                            <li
                              id="menu-item-37837"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-37837"
                            >
                              <a href="https://www.vietnam-visa.com/vietnam-visa-policy/">
                                Visa Policy
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>{" "}
                  </div>
                  <div className="ft-contact">
                    <label className="font-w-semibold" htmlFor="">
                      Contacts
                    </label>
                    <ul>
                      <li>
                        <span className="font-w-semibold">Tel:</span>
                        +84.946.583.583{" "}
                      </li>
                      <li>
                        <span className="font-w-semibold">Email:</span>
                        <span className="p-c-green">
                          <span className="c-green">
                            support@vietnam-visa.com{" "}
                          </span>
                        </span>
                      </li>
                      <li className="flex">
                        <span className="icon">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.00065 7.66665C7.55862 7.66665 7.1347 7.49105 6.82214 7.17849C6.50958 6.86593 6.33398 6.44201 6.33398 5.99998C6.33398 5.55795 6.50958 5.13403 6.82214 4.82147C7.1347 4.50891 7.55862 4.33331 8.00065 4.33331C8.44268 4.33331 8.8666 4.50891 9.17916 4.82147C9.49172 5.13403 9.66732 5.55795 9.66732 5.99998C9.66732 6.21885 9.62421 6.43558 9.54045 6.63779C9.45669 6.83999 9.33393 7.02373 9.17916 7.17849C9.0244 7.33325 8.84067 7.45602 8.63846 7.53978C8.43625 7.62354 8.21952 7.66665 8.00065 7.66665ZM8.00065 1.33331C6.76297 1.33331 5.57599 1.82498 4.70082 2.70015C3.82565 3.57532 3.33398 4.7623 3.33398 5.99998C3.33398 9.49998 8.00065 14.6666 8.00065 14.6666C8.00065 14.6666 12.6673 9.49998 12.6673 5.99998C12.6673 4.7623 12.1757 3.57532 11.3005 2.70015C10.4253 1.82498 9.23833 1.33331 8.00065 1.33331Z"
                              fill="#ABABAB"
                            />
                          </svg>
                        </span>
                        <span className="content">
                          <span className="font-w-semibold block">
                            Hanoi, Vietnam:
                          </span>
                          <span>
                            23rd Floor, TASCO Building, Pham Hung road, Me Tri,
                            Tu Liem
                          </span>
                        </span>
                      </li>
                      <li className="flex">
                        <span className="icon">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.00065 7.66665C7.55862 7.66665 7.1347 7.49105 6.82214 7.17849C6.50958 6.86593 6.33398 6.44201 6.33398 5.99998C6.33398 5.55795 6.50958 5.13403 6.82214 4.82147C7.1347 4.50891 7.55862 4.33331 8.00065 4.33331C8.44268 4.33331 8.8666 4.50891 9.17916 4.82147C9.49172 5.13403 9.66732 5.55795 9.66732 5.99998C9.66732 6.21885 9.62421 6.43558 9.54045 6.63779C9.45669 6.83999 9.33393 7.02373 9.17916 7.17849C9.0244 7.33325 8.84067 7.45602 8.63846 7.53978C8.43625 7.62354 8.21952 7.66665 8.00065 7.66665ZM8.00065 1.33331C6.76297 1.33331 5.57599 1.82498 4.70082 2.70015C3.82565 3.57532 3.33398 4.7623 3.33398 5.99998C3.33398 9.49998 8.00065 14.6666 8.00065 14.6666C8.00065 14.6666 12.6673 9.49998 12.6673 5.99998C12.6673 4.7623 12.1757 3.57532 11.3005 2.70015C10.4253 1.82498 9.23833 1.33331 8.00065 1.33331Z"
                              fill="#ABABAB"
                            />
                          </svg>
                        </span>
                        <span className="content">
                          <span className="font-w-semibold block">
                            Ho Chi Minh City, Vietnam:
                          </span>
                          <span>
                            {" "}
                            2nd Floor, VIPD Building, No. 4 Nguyen Thi Minh
                            Khai, Da Kao Ward, District 1, HCMC
                          </span>
                        </span>
                      </li>
                      <li className="flex">
                        <span className="content">
                          <span>
                            Vietnam-visa.com is a commercial website. Operated
                            by Vietnam Discovery Travel, we are here to assist
                            you to complete your application for Vietnam visa,
                            to make sure all information to be provided are
                            correct. Vietnam-visa.com - your assistant to get a
                            visa to Vietnam.
                          </span>
                        </span>
                      </li>
                      {/*                                <li class="flex">*/}
                      {/*                                    <span class="icon">*/}
                      {/*                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00065 7.66665C7.55862 7.66665 7.1347 7.49105 6.82214 7.17849C6.50958 6.86593 6.33398 6.44201 6.33398 5.99998C6.33398 5.55795 6.50958 5.13403 6.82214 4.82147C7.1347 4.50891 7.55862 4.33331 8.00065 4.33331C8.44268 4.33331 8.8666 4.50891 9.17916 4.82147C9.49172 5.13403 9.66732 5.55795 9.66732 5.99998C9.66732 6.21885 9.62421 6.43558 9.54045 6.63779C9.45669 6.83999 9.33393 7.02373 9.17916 7.17849C9.0244 7.33325 8.84067 7.45602 8.63846 7.53978C8.43625 7.62354 8.21952 7.66665 8.00065 7.66665ZM8.00065 1.33331C6.76297 1.33331 5.57599 1.82498 4.70082 2.70015C3.82565 3.57532 3.33398 4.7623 3.33398 5.99998C3.33398 9.49998 8.00065 14.6666 8.00065 14.6666C8.00065 14.6666 12.6673 9.49998 12.6673 5.99998C12.6673 4.7623 12.1757 3.57532 11.3005 2.70015C10.4253 1.82498 9.23833 1.33331 8.00065 1.33331Z" fill="#ABABAB"/></svg>*/}
                      {/*                                    </span>*/}
                      {/*                                    <span class="content">*/}
                      {/*                                        <span class="block">*/}
                      {/*                                            <span class="font-w-semibold">*/}
                      {/*:</span>*/}
                      {/*                                            <span>*/}
                      {/*</span>*/}
                      {/*                                        </span>*/}
                      {/*                                        <span>*/}
                      {/*</span>*/}
                      {/*                                    </span>*/}
                      {/**/}
                      {/*                                </li>*/}
                      <li>
                        <div className="payments">
                          <img
                            src="https://www.vietnam-visa.com/wp-content/themes/vietnam_visa_v4.1/assets/images/payments.png"
                            data-lazy-src="https://www.vietnam-visa.com/wp-content/themes/vietnam_visa_v4.1/assets/images/payments.png"
                            data-ll-status="loaded"
                            className="entered lazyloaded"
                          />
                          <noscript>
                            &lt;img
                            src="https://www.vietnam-visa.com/wp-content/themes/vietnam_visa_v4.1/assets/images/payments.png"&gt;
                          </noscript>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer__bottom">
                  <div className="copyright">
                    <img
                      src="https://www.vietnam-visa.com/wp-content/themes/vietnam_visa_v4.1/assets/images/svg/logo-vietnamdiscovery.svg"
                      alt="Logo Vietnamdiscovery"
                      width={32}
                      height={32}
                      data-lazy-src="https://www.vietnam-visa.com/wp-content/themes/vietnam_visa_v4.1/assets/images/svg/logo-vietnamdiscovery.svg"
                      data-ll-status="loaded"
                      className="entered lazyloaded"
                    />
                    <noscript>
                      &lt;img
                      src="https://www.vietnam-visa.com/wp-content/themes/vietnam_visa_v4.1/assets/images/svg/logo-vietnamdiscovery.svg"
                      alt="Logo Vietnamdiscovery" width="32" height="32"&gt;
                    </noscript>
                    <span className="txt-14-22">
                      Copyright 2022 Vietnam Discovery Travel JSC{" "}
                    </span>
                  </div>
                  <div className="mxh">
                    <a href="https://www.facebook.com/VietnamVisaService/">
                      <span className="icon-contact-fb" />
                    </a>
                    <a href="https://twitter.com/VietnamVisa">
                      <span className="icon-bottom-tw" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
