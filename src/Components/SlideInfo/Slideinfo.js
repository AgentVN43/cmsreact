import React, { useEffect, useState } from "react";
import "../sass/abstracts/_mixins.scss";
import "../sass/layout/_header.scss";
import "../sass/base/_font.scss";
import axios from "axios";

export default function Slideinfo() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [year, setYear] = useState("");
  const [clients, setClients] = useState("");
  const [countries, setCountries] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from url 1
        const year = await axios.get("https://e-visaforvietnam.com/wp-json/wp/v2/posts?slug='year'");
        setYear(year.data);

        const clients = await axios.get("https://e-visaforvietnam.com/wp-json/wp/v2/posts?slug='clients'");
        setClients(clients.data);

        const countries = await axios.get("https://e-visaforvietnam.com/wp-json/wp/v2/posts?slug='countries'");
        setCountries(countries.data);

        const success = await axios.get("https://e-visaforvietnam.com/wp-json/wp/v2/posts?slug='success'");
        setSuccess(success.data);



      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  console.log(year);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <div className="__vnvisa-slide-info">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="owl-carousel owl-theme visa-info owl-loaded">
                <div className="owl-stage-outer">
                  <div
                    className="owl-stage"
                    style={{
                      transform: "translate3d(0px, 0px, 0px)",
                      transition: "all 0s ease 0s",
                      width: 1266,
                    }}
                  >
                    <div
                      className="owl-item active"
                      style={{ width: "220.5px", marginRight: 96 }}
                    >
                      {/* <div className="item">
                        <div className="wrap-item text-center">
                          <p className="visa-param mb-0"></p>
                          <span className="txt-14-22"></span>
                        </div>
                      </div> */}
                      <div>
                        {year.map((item, index) => (
                          <div key={index} className="item">
                            <div className="wrap-item text-center">
                              <p dangerouslySetInnerHTML={{ __html: item.content.rendered }}></p>
                              {/* <span className="txt-14-22"></span> */}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: "220.5px", marginRight: 96 }}
                    >
                      {/* <div className="item">
                        <div className="wrap-item text-center">
                          <p className="visa-param mb-0"></p>
                          <span className="txt-14-22"></span>
                        </div>
                      </div> */}
                      <div>
                        {clients.map((item, index) => (
                          <div key={index} className="item">
                            <div className="wrap-item text-center">
                              <p dangerouslySetInnerHTML={{ __html: item.content.rendered }}></p>
                              {/* <span className="txt-14-22"></span> */}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: "220.5px", marginRight: 96 }}
                    >
                      {/* <div className="item">
                        <div className="wrap-item text-center">
                          <p className="visa-param mb-0"></p>
                          <span className="txt-14-22"></span>
                        </div>
                      </div> */}
                      <div>
                        {countries.map((item, index) => (
                          <div key={index} className="item">
                            <div className="wrap-item text-center">
                              <p dangerouslySetInnerHTML={{ __html: item.content.rendered }}></p>
                              {/* <span className="txt-14-22"></span> */}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: "220.5px", marginRight: 96 }}
                    >
                      {/* <div className="item">
                        <div className="wrap-item text-center">
                          <p className="visa-param mb-0"></p>
                          <span className="txt-14-22"></span>
                        </div>
                      </div> */}
                      <div>
                        {success.map((item, index) => (
                          <div key={index} className="item">
                            <div className="wrap-item text-center">
                              <p dangerouslySetInnerHTML={{ __html: item.content.rendered }}></p>
                              {/* <span className="txt-14-22"></span> */}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
