import React, { Fragment, useEffect, useState } from "react";
import "../sass/abstracts/_mixins.scss";
import "../sass/layout/_header.scss";
import "../sass/base/_font.scss";
import "../sass/base/_typography.scss";
import "../sass/base/_reset.scss";
import "../sass/components/_text.scss"
import axios from "axios";

export default function Sectionwhy() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from url 1
        const title = await axios.get(
          "https://e-visaforvietnam.com/wp-json/wp/v2/posts?slug='why-title'"
        );
        setTitle(title.data);

        const detail = await axios.get(
          "https://e-visaforvietnam.com/wp-json/wp/v2/posts?slug='why-details'"
        );
        setDetail(detail.data);
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
      <div className="__vnvisa-why mt-64">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pr-md-5">
              <div className="img-responsive">
                <img
                  src="https://www.vietnam-visa.com/wp-content/uploads/2021/05/Mask-Group-min.webp"
                  alt="#"
                  data-lazy-src="https://www.vietnam-visa.com/wp-content/uploads/2021/05/Mask-Group-min.webp"
                  data-ll-status="loaded"
                  className="entered lazyloaded"
                />
                <noscript>
                  &lt;img
                  src="https://www.vietnam-visa.com/wp-content/uploads/2021/05/Mask-Group-min.webp"
                  alt="#"&gt;
                </noscript>
              </div>
            </div>
            <div className="col-lg-6">
              {title.map((item, index) => (
                <p dangerouslySetInnerHTML={{ __html: item.content.rendered }}></p>
              ))}

              <div className="why-content mt-md-3">
                {/* <p>
                  Vietnam-visa.com was established to take away your biggest
                  hassle of getting a visa for Vietnam as a tourist,
                  businessman, investor, foreign worker, or his/her family
                  member and follow-up papers to ensure your legal long-term
                  stay in Vietnam through simple, fast and cost-effective
                  procedures.
                </p>
                <p>
                  <strong>Since 2007, we have always guaranteed:</strong>
                </p>
                <ul>
                  <li>
                    <strong>Expert Consultation</strong>
                  </li>
                  <li>
                    <strong>Timely Delivery</strong>
                  </li>
                  <li>
                    <strong>Support 24/7 </strong>
                  </li>
                  <li>
                    <strong>Complete confidentiality</strong>
                  </li>
                </ul>{" "}
                <a
                  href="https://www.vietnam-visa.com/about-us/"
                  target="_blank"
                  className="read-more mt-4"
                >
                  <span className="font-w-bold">Read more</span>
                  <span className="icon-arrow-long" />
                </a> */}
                {detail.map((item, index) => (
                <p
                  dangerouslySetInnerHTML={{ __html: item.content.rendered }}
                ></p>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
