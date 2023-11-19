import React, { useEffect, useState } from "react";
import "../sass/abstracts/_mixins.scss";
import "../sass/layout/_header.scss";
import "../sass/base/_font.scss";
import "../sass/pages/_home.scss";
import axios from "axios";

export default function Banner() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from url 1
        const title = await axios.get("https://e-visaforvietnam.com/wp-json/wp/v2/pages?slug='home-title'")
        setTitle(title.data)

        // Fetch data from url 2
        const description = await axios.get("https://e-visaforvietnam.com/wp-json/wp/v2/pages?slug='home-des'");
        setDescription(description.data);
        
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
      <div
        data-bg="https://www.vietnam-visa.com/wp-content/themes/vietnam_visa_v4.1/assets/images/home-banner-new-2.webp"
        className="__wraper-banner banner--bg rocket-lazyload entered lazyloaded"
        style={{
          backgroundImage:
            'url("https://www.vietnam-visa.com/wp-content/themes/vietnam_visa_v4.1/assets/images/home-banner-new-2.webp")',
        }}
        data-ll-status="loaded"
      >
        <div></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="__home-search position-relative">
                <div className="wrap-title-home">
                  {/* <h1 className="home-title" dangerouslySetInnerHTML={{ __html: data.content.rendered }}/> */}
                  {/* <h1 className="home-title" dangerouslySetInnerHTML={{ __html: data.excerpt.rendered }}/> */}
                  {Array.isArray(title) ? (
                    <div>
                      {title.map((item) => (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item.content.rendered,
                          }}
                        />
                      ))}
                    </div>
                  ) : (
                    <p>Contact admin please.</p>
                  )}

                  {Array.isArray(description) ? (
                    <div>
                      {description.map((item) => (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item.content.rendered,
                          }}
                        />
                      ))}
                    </div>
                  ) : (
                    <p>Contact admin please.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
