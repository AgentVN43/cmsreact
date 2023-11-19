import React, { useEffect, useState } from "react";
import Breadcrumb1 from "../Components/Breadcrumb/Breadcrumb";
//import "../Components/lib/bootstrap.min.css"
import "../Components/sass/abstracts/_mixins.scss";
import "../Components/sass/layout/_header.scss";
import "../Components/sass/base/_font.scss";
import "../Components/sass/pages/_home.scss";
import "../Components/sass/themes/_theme.scss";
// import "../Components/sass/layout/_breadcrumb.scss"
import "../Components/sass/base/_reset.scss";
import "../Components/sass/layout/_shortcode.scss";
import "../Components/sass/layout/_sidebar.scss";
import Clock from "../Components/Clock/Clock";
import axios from "axios";

export default function AboutUs() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from url 1
        const title = await axios.get(
          "https://e-visaforvietnam.com/wp-json/wp/v2/posts?slug='about-us'"
        );
        setTitle(title.data);

        //   const detail = await axios.get(
        //     "https://e-visaforvietnam.com/wp-json/wp/v2/posts?slug='why-details'"
        //   );
        //   setDetail(detail.data);
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
      <Breadcrumb1 />
      <div className="__embassy">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="heading__top-page pb-0">
                {title.map((item, index) => (
                  <h1
                    className="hd-1 mb-3 resp-h1--mb"
                    dangerouslySetInnerHTML={{ __html: item.title.rendered }}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              {/* <div className="d-md-flex justify-content-between align-items-center mt-1 mb-3">
                {title.map((item, index) => (
                  <div
                    className="last-update mb-3"
                    dangerouslySetInnerHTML={{ __html: item.date }}
                  />
                ))}

                <div className="share d-flex mb-3">
                  <div className="f_book mr-3">
                    <a
                      href="https://www.facebook.com/sharer.php?u=https://www.vietnam-visa.com/vietnam-e-visa/"
                      target="_blank"
                    >
                      <img
                        src="https://www.vietnam-visa.com/wp-content/themes/vietnam_visa_v4.1/assets/images/icon/fb.jpg"
                        width={16}
                        height={16}
                        alt="Share on Facebook"
                        data-lazy-src="https://www.vietnam-visa.com/wp-content/themes/vietnam_visa_v4.1/assets/images/icon/fb.jpg"
                        data-ll-status="loaded"
                        className="entered lazyloaded"
                      />
                      <noscript>
                        &lt;img
                        src="https://www.vietnam-visa.com/wp-content/themes/vietnam_visa_v4.1/assets/images/icon/fb.jpg"
                        width="16" height="16" alt="Share on Facebook" /&gt;
                      </noscript>
                    </a>
                  </div>
                  <div className="t_w">
                    <a
                      title="Click to share this post on Twitter"
                      href="https://twitter.com/intent/tweet?text=Comprehensive Vietnam e Visa guide – Official Website – Application&url=https://www.vietnam-visa.com/vietnam-e-visa/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        title="twitter sharing button"
                        width={20}
                        height={16}
                        src="https://www.vietnam-visa.com/wp-content/themes/vietnam_visa_v4.1/assets/images/icon/twitter.jpg"
                        alt="twitter sharing button"
                        data-lazy-src="https://www.vietnam-visa.com/wp-content/themes/vietnam_visa_v4.1/assets/images/icon/twitter.jpg"
                        data-ll-status="loaded"
                        className="entered lazyloaded"
                      />
                      <noscript>
                        &lt;img title="twitter sharing button" width="20"
                        height="16"
                        src="https://www.vietnam-visa.com/wp-content/themes/vietnam_visa_v4.1/assets/images/icon/twitter.jpg"
                        alt="twitter sharing button" /&gt;
                      </noscript>
                    </a>
                  </div>
                </div>
              </div> */}
              {title.map((item, index) => (
                <div className="content-block pt-4 mt-3  __post-content"
                dangerouslySetInnerHTML={{ __html: item.content.rendered }}
                ></div>
                ))}
              
              
            </div>
            <div className="col-lg-4">
              <div className="__vnvisa-sidebar">
                <div className="__sb-why-apply">
                  <h2 className="hd-2 mb-0">Why apply with us?</h2>
                  <div className="list-why-apply mt-2">
                    <ul className="sidebar-why-apply">
                      <li className="page_item page-item-29512">
                        Expert consultation.
                      </li>
                      <li className="page_item page-item-29512">
                        Free Initial Assessment.
                      </li>
                      <li className="page_item page-item-29512">
                        24/7 support.
                      </li>
                      <li className="page_item page-item-29512">
                        Transparency in procedure and fees.
                      </li>
                      <li className="page_item page-item-29512">
                        Timely delivery guaranteed.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="__sb-contact-us">
                  <h2 className="hd-2 mb-0">Contact us!</h2>
                  <div className="list-contact-us mt-2">
                    <ul className="sidebar-why-apply">
                      <li className="page_item page-item-29512">
                        +84. 946.583.583
                      </li>
                      <li className="page_item page-item-29512">
                        support@vietnam-visa.com
                      </li>
                    </ul>
                  </div>
                  <p className="sb-time mb-0 mt-2" style={{ marginBottom: 12 }}>
                    <span className="icon-sideba-time" />
                    <span id="sb-datetime">
                      {" "}
                      <Clock />
                    </span>
                  </p>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
