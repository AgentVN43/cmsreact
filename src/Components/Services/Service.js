import React from "react";
import "../sass/abstracts/_mixins.scss";
import "../sass/layout/_header.scss";
import "../sass/base/_font.scss";
import "../sass/base/_typography.scss";
import "../sass/base/_reset.scss";

export default function Service() {
  return (
    <>
      <div className="__vnvisa-our-service mt-64">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="wrap-title-service text-center mb-32">
                <h2 className="hd-1 mb-2 service-title resp-title">
                  Other Services
                </h2>
                <div className="col-md-8 offset-md-2 mb-0 service-des">
                  <p>
                    In addition to Vietnam visa on arrival, we are also the
                    leading expert in Vietnam visa extension, airport services,
                    work permit, temporary residence card and police check.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="owl-service position-relative">
            <div className="owl-carousel owl-theme owl-visa-service owl-loaded owl-drag">
              <div className="owl-stage-outer">
                <div
                  className="owl-stage"
                  style={{
                    transform: "translate3d(-1200px, 0px, 0px)",
                    transition: "all 0s ease 0s",
                    width: 4200,
                  }}
                >
                  <div
                    className="owl-item cloned"
                    style={{ width: 270, marginRight: 30 }}
                  >
                    <div className="item">
                      <div className="visa-service-item">
                        <a href="https://www.vietnam-visa.com/temporary-residence-card-service/">
                          <img
                            src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20270%20180'%3E%3C/svg%3E"
                            alt="Vietnam Temporary Residence Card Service"
                            title="Vietnam Temporary Residence Card Service"
                            width={270}
                            height={180}
                            data-lazy-src="https://www.vietnam-visa.com/wp-content/uploads/thumbnail/vietnam-temporary-residence-card-service-vietnam-visa-qcfwvh8ecn9tlqfubznjnthc3wsuop9949bpehsy2w.jpg"
                          />
                          <noscript>
                            &lt;img
                            src="https://www.vietnam-visa.com/wp-content/uploads/thumbnail/vietnam-temporary-residence-card-service-vietnam-visa-qcfwvh8ecn9tlqfubznjnthc3wsuop9949bpehsy2w.jpg"
                            alt="Vietnam Temporary Residence Card Service"
                            title="Vietnam Temporary Residence Card Service"
                            width="270" height="180"&gt;
                          </noscript>
                        </a>
                        <h4 className="hd-4 service-title">
                          <a
                            className=""
                            href="https://www.vietnam-visa.com/temporary-residence-card-service/"
                          >
                            Vietnam Temporary Residence Card
                          </a>
                        </h4>
                        <p className="txt-14-22 c-dark-gray mb-0 __service-des">
                          Vietnam temporary residence card application can be
                          lengthy and tiresome. However, we have a team of
                          professionals and an effective system so that your
                          application process can be fast and effortless.
                        </p>
                      </div>
                    </div>
                  </div>
                   {/*<div
                    className="owl-item cloned"
                    style={{ width: 270, marginRight: 30 }}
                  >
                    <div className="item">
                      <div className="visa-service-item">
                        <a href="https://www.vietnam-visa.com/criminal-record-service/">
                          <img
                            src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20270%20180'%3E%3C/svg%3E"
                            alt="Vietnam Police Check Service – Fastest and easiest way to get Police check in Vietnam"
                            title="Vietnam Police Check Service – Fastest and easiest way to get Police check in Vietnam"
                            width={270}
                            height={180}
                            data-lazy-src="https://www.vietnam-visa.com/wp-content/uploads/thumbnail/vietnam-police-check-service-vietnam-criminal-record-vietnam-visa-qcfwvh8ecn9tlqfubznjnthc3wsuop9949bpehsy2w.jpg"
                          />
                          <noscript>
                            &lt;img
                            src="https://www.vietnam-visa.com/wp-content/uploads/thumbnail/vietnam-police-check-service-vietnam-criminal-record-vietnam-visa-qcfwvh8ecn9tlqfubznjnthc3wsuop9949bpehsy2w.jpg"
                            alt="Vietnam Police Check Service – Fastest and
                            easiest way to get Police check in Vietnam"
                            title="Vietnam Police Check Service – Fastest and
                            easiest way to get Police check in Vietnam"
                            width="270" height="180"&gt;
                          </noscript>
                        </a>
                        <h4 className="hd-4 service-title">
                          <a
                            className=""
                            href="https://www.vietnam-visa.com/criminal-record-service/"
                          >
                            Vietnam Police Check
                          </a>
                        </h4>
                        <p className="txt-14-22 c-dark-gray mb-0 __service-des">
                          We can help you get your Vietnam police check no
                          matter you are in Vietnam or not. We also can work to
                          get it translated, legalized and then delivered to
                          your address, in Vietnam or foreign country.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: 270, marginRight: 30 }}
                  >
                    <div className="item">
                      <div className="visa-service-item">
                        <a href="https://www.vietnam-visa.com/arrival-assistance/">
                          <img
                            src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20270%20180'%3E%3C/svg%3E"
                            alt="Vietnam Arrival Assistance"
                            title="Vietnam Arrival Assistance"
                            width={270}
                            height={180}
                            data-lazy-src="https://www.vietnam-visa.com/wp-content/uploads/thumbnail/adult-airport-bags-837129-qcfwvcj7eh3dzomo3fmetco14zg0m7qlfm2a03zwy0.jpg"
                          />
                          <noscript>
                            &lt;img
                            src="https://www.vietnam-visa.com/wp-content/uploads/thumbnail/adult-airport-bags-837129-qcfwvcj7eh3dzomo3fmetco14zg0m7qlfm2a03zwy0.jpg"
                            alt="Vietnam Arrival Assistance" title="Vietnam
                            Arrival Assistance" width="270" height="180"&gt;
                          </noscript>
                        </a>
                        <h4 className="hd-4 service-title">
                          <a
                            className=""
                            href="https://www.vietnam-visa.com/arrival-assistance/"
                          >
                            Vietnam Arrival Assistance
                          </a>
                        </h4>
                        <p className="txt-14-22 c-dark-gray mb-0 __service-des">
                          Our Airport Arrival Assistance service is offered to
                          passengers arriving at almost international airports
                          of Vietnam. Passengers are guaranteed to have a smooth
                          start in Vietnam with speed and ease.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: 270, marginRight: 30 }}
                  >
                    <div className="item">
                      <div className="visa-service-item">
                        <a href="https://www.vietnam-visa.com/departure-assistance/">
                          <img
                            src="https://www.vietnam-visa.com/wp-content/uploads/thumbnail/Airport-Service-compressor-qcfwvcj7eh3dzomo3fmetco14zg0m7qlfm2a03zwy0.jpg"
                            alt="Vietnam Departure Assistance"
                            title="Vietnam Departure Assistance"
                            width={270}
                            height={180}
                            data-lazy-src="https://www.vietnam-visa.com/wp-content/uploads/thumbnail/Airport-Service-compressor-qcfwvcj7eh3dzomo3fmetco14zg0m7qlfm2a03zwy0.jpg"
                            data-ll-status="loaded"
                            className="entered lazyloaded"
                          />
                          <noscript>
                            &lt;img
                            src="https://www.vietnam-visa.com/wp-content/uploads/thumbnail/Airport-Service-compressor-qcfwvcj7eh3dzomo3fmetco14zg0m7qlfm2a03zwy0.jpg"
                            alt="Vietnam Departure Assistance" title="Vietnam
                            Departure Assistance" width="270" height="180"&gt;
                          </noscript>
                        </a>
                        <h4 className="hd-4 service-title">
                          <a
                            className=""
                            href="https://www.vietnam-visa.com/departure-assistance/"
                          >
                            Vietnam Departure Assistance
                          </a>
                        </h4>
                        <p className="txt-14-22 c-dark-gray mb-0 __service-des">
                          We ensure you a timely, comfortable and convenient
                          departure from Vietnam. Our departure service extends
                          to VIPs, business executives, diplomats, families,
                          elderly, and travelers with special needs.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item active"
                    style={{ width: 270, marginRight: 30 }}
                  >
                    <div className="item">
                      <div className="visa-service-item">
                        <a href="https://www.vietnam-visa.com/visa-extension-service/">
                          <img
                            src="https://www.vietnam-visa.com/wp-content/uploads/thumbnail/vietnam-visa-extension-service-fast-reliable-qcfwvh8ecn9tlqfubznjnthc3wsuop9949bpehsy2w.jpg"
                            alt="Vietnam Visa Extension Service"
                            title="Vietnam Visa Extension Service"
                            width={270}
                            height={180}
                            data-lazy-src="https://www.vietnam-visa.com/wp-content/uploads/thumbnail/vietnam-visa-extension-service-fast-reliable-qcfwvh8ecn9tlqfubznjnthc3wsuop9949bpehsy2w.jpg"
                            data-ll-status="loaded"
                            className="entered lazyloaded"
                          />
                          <noscript>
                            &lt;img
                            src="https://www.vietnam-visa.com/wp-content/uploads/thumbnail/vietnam-visa-extension-service-fast-reliable-qcfwvh8ecn9tlqfubznjnthc3wsuop9949bpehsy2w.jpg"
                            alt="Vietnam Visa Extension Service" title="Vietnam
                            Visa Extension Service" width="270" height="180"&gt;
                          </noscript>
                        </a>
                        <h4 className="hd-4 service-title">
                          <a
                            className=""
                            href="https://www.vietnam-visa.com/visa-extension-service/"
                          >
                            Vietnam Visa Extension
                          </a>
                        </h4>
                        <p className="txt-14-22 c-dark-gray mb-0 __service-des">
                          Are you having difficulty in extending your visa in
                          Vietnam? We specialize in providing the best visa
                          extension service in Vietnam? We can process your visa
                          extension urgently in 4 working days.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item active"
                    style={{ width: 270, marginRight: 30 }}
                  >
                    <div className="item">
                      <div className="visa-service-item">
                        <a href="https://www.vietnam-visa.com/work-permit-service/">
                          <img
                            src="https://www.vietnam-visa.com/wp-content/uploads/thumbnail/vietnam-work-permit-services-vietnam-visa-qcfwvh8ecn9tlqfubznjnthc3wsuop9949bpehsy2w.jpg"
                            alt="Vietnam work permit service for foreigners"
                            title="Vietnam work permit service for foreigners"
                            width={270}
                            height={180}
                            data-lazy-src="https://www.vietnam-visa.com/wp-content/uploads/thumbnail/vietnam-work-permit-services-vietnam-visa-qcfwvh8ecn9tlqfubznjnthc3wsuop9949bpehsy2w.jpg"
                            data-ll-status="loaded"
                            className="entered lazyloaded"
                          />
                          <noscript>
                            &lt;img
                            src="https://www.vietnam-visa.com/wp-content/uploads/thumbnail/vietnam-work-permit-services-vietnam-visa-qcfwvh8ecn9tlqfubznjnthc3wsuop9949bpehsy2w.jpg"
                            alt="Vietnam work permit service for foreigners"
                            title="Vietnam work permit service for foreigners"
                            width="270" height="180"&gt;
                          </noscript>
                        </a>
                        <h4 className="hd-4 service-title">
                          <a
                            className=""
                            href="https://www.vietnam-visa.com/work-permit-service/"
                          >
                            Vietnam Work Permit
                          </a>
                        </h4>
                        <p className="txt-14-22 c-dark-gray mb-0 __service-des">
                          Do you need to get Vietnam work permit for your
                          foreign workers? Is your foreign worker’s work permit
                          damaged, lost, nearly expired or do you need to adjust
                          any information therein? Feel free to contact us!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item active"
                    style={{ width: 270, marginRight: 30 }}
                  >
                    <div className="item">
                      <div className="visa-service-item">
                        <a href="https://www.vietnam-visa.com/temporary-residence-card-service/">
                          <img
                            src="https://www.vietnam-visa.com/wp-content/uploads/thumbnail/vietnam-temporary-residence-card-service-vietnam-visa-qcfwvh8ecn9tlqfubznjnthc3wsuop9949bpehsy2w.jpg"
                            alt="Vietnam Temporary Residence Card Service"
                            title="Vietnam Temporary Residence Card Service"
                            width={270}
                            height={180}
                            data-lazy-src="https://www.vietnam-visa.com/wp-content/uploads/thumbnail/vietnam-temporary-residence-card-service-vietnam-visa-qcfwvh8ecn9tlqfubznjnthc3wsuop9949bpehsy2w.jpg"
                            data-ll-status="loaded"
                            className="entered lazyloaded"
                          />
                          <noscript>
                            &lt;img
                            src="https://www.vietnam-visa.com/wp-content/uploads/thumbnail/vietnam-temporary-residence-card-service-vietnam-visa-qcfwvh8ecn9tlqfubznjnthc3wsuop9949bpehsy2w.jpg"
                            alt="Vietnam Temporary Residence Card Service"
                            title="Vietnam Temporary Residence Card Service"
                            width="270" height="180"&gt;
                          </noscript>
                        </a>
                        <h4 className="hd-4 service-title">
                          <a
                            className=""
                            href="https://www.vietnam-visa.com/temporary-residence-card-service/"
                          >
                            Vietnam Temporary Residence Card
                          </a>
                        </h4>
                        <p className="txt-14-22 c-dark-gray mb-0 __service-des">
                          Vietnam temporary residence card application can be
                          lengthy and tiresome. However, we have a team of
                          professionals and an effective system so that your
                          application process can be fast and effortless.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item active"
                    style={{ width: 270, marginRight: 30 }}
                  >
                    <div className="item">
                      <div className="visa-service-item">
                        <a href="https://www.vietnam-visa.com/criminal-record-service/">
                          <img
                            src="https://www.vietnam-visa.com/wp-content/uploads/thumbnail/vietnam-police-check-service-vietnam-criminal-record-vietnam-visa-qcfwvh8ecn9tlqfubznjnthc3wsuop9949bpehsy2w.jpg"
                            alt="Vietnam Police Check Service – Fastest and easiest way to get Police check in Vietnam"
                            title="Vietnam Police Check Service – Fastest and easiest way to get Police check in Vietnam"
                            width={270}
                            height={180}
                            data-lazy-src="https://www.vietnam-visa.com/wp-content/uploads/thumbnail/vietnam-police-check-service-vietnam-criminal-record-vietnam-visa-qcfwvh8ecn9tlqfubznjnthc3wsuop9949bpehsy2w.jpg"
                            data-ll-status="loaded"
                            className="entered lazyloaded"
                          />
                          <noscript>
                            &lt;img
                            src="https://www.vietnam-visa.com/wp-content/uploads/thumbnail/vietnam-police-check-service-vietnam-criminal-record-vietnam-visa-qcfwvh8ecn9tlqfubznjnthc3wsuop9949bpehsy2w.jpg"
                            alt="Vietnam Police Check Service – Fastest and
                            easiest way to get Police check in Vietnam"
                            title="Vietnam Police Check Service – Fastest and
                            easiest way to get Police check in Vietnam"
                            width="270" height="180"&gt;
                          </noscript>
                        </a>
                        <h4 className="hd-4 service-title">
                          <a
                            className=""
                            href="https://www.vietnam-visa.com/criminal-record-service/"
                          >
                            Vietnam Police Check
                          </a>
                        </h4>
                        <p className="txt-14-22 c-dark-gray mb-0 __service-des">
                          We can help you get your Vietnam police check no
                          matter you are in Vietnam or not. We also can work to
                          get it translated, legalized and then delivered to
                          your address, in Vietnam or foreign country.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item"
                    style={{ width: 270, marginRight: 30 }}
                  >
                    <div className="item">
                      <div className="visa-service-item">
                        <a href="https://www.vietnam-visa.com/arrival-assistance/">
                          <img
                            src="https://www.vietnam-visa.com/wp-content/uploads/thumbnail/adult-airport-bags-837129-qcfwvcj7eh3dzomo3fmetco14zg0m7qlfm2a03zwy0.jpg"
                            alt="Vietnam Arrival Assistance"
                            title="Vietnam Arrival Assistance"
                            width={270}
                            height={180}
                            data-lazy-src="https://www.vietnam-visa.com/wp-content/uploads/thumbnail/adult-airport-bags-837129-qcfwvcj7eh3dzomo3fmetco14zg0m7qlfm2a03zwy0.jpg"
                            data-ll-status="loaded"
                            className="entered lazyloaded"
                          />
                          <noscript>
                            &lt;img
                            src="https://www.vietnam-visa.com/wp-content/uploads/thumbnail/adult-airport-bags-837129-qcfwvcj7eh3dzomo3fmetco14zg0m7qlfm2a03zwy0.jpg"
                            alt="Vietnam Arrival Assistance" title="Vietnam
                            Arrival Assistance" width="270" height="180"&gt;
                          </noscript>
                        </a>
                        <h4 className="hd-4 service-title">
                          <a
                            className=""
                            href="https://www.vietnam-visa.com/arrival-assistance/"
                          >
                            Vietnam Arrival Assistance
                          </a>
                        </h4>
                        <p className="txt-14-22 c-dark-gray mb-0 __service-des">
                          Our Airport Arrival Assistance service is offered to
                          passengers arriving at almost international airports
                          of Vietnam. Passengers are guaranteed to have a smooth
                          start in Vietnam with speed and ease.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item"
                    style={{ width: 270, marginRight: 30 }}
                  >
                    <div className="item">
                      <div className="visa-service-item">
                        <a href="https://www.vietnam-visa.com/departure-assistance/">
                          <img
                            src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20270%20180'%3E%3C/svg%3E"
                            alt="Vietnam Departure Assistance"
                            title="Vietnam Departure Assistance"
                            width={270}
                            height={180}
                            data-lazy-src="https://www.vietnam-visa.com/wp-content/uploads/thumbnail/Airport-Service-compressor-qcfwvcj7eh3dzomo3fmetco14zg0m7qlfm2a03zwy0.jpg"
                          />
                          <noscript>
                            &lt;img
                            src="https://www.vietnam-visa.com/wp-content/uploads/thumbnail/Airport-Service-compressor-qcfwvcj7eh3dzomo3fmetco14zg0m7qlfm2a03zwy0.jpg"
                            alt="Vietnam Departure Assistance" title="Vietnam
                            Departure Assistance" width="270" height="180"&gt;
                          </noscript>
                        </a>
                        <h4 className="hd-4 service-title">
                          <a
                            className=""
                            href="https://www.vietnam-visa.com/departure-assistance/"
                          >
                            Vietnam Departure Assistance
                          </a>
                        </h4>
                        <p className="txt-14-22 c-dark-gray mb-0 __service-des">
                          We ensure you a timely, comfortable and convenient
                          departure from Vietnam. Our departure service extends
                          to VIPs, business executives, diplomats, families,
                          elderly, and travelers with special needs.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: 270, marginRight: 30 }}
                  >
                    <div className="item">
                      <div className="visa-service-item">
                        <a href="https://www.vietnam-visa.com/visa-extension-service/">
                          <img
                            src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20270%20180'%3E%3C/svg%3E"
                            alt="Vietnam Visa Extension Service"
                            title="Vietnam Visa Extension Service"
                            width={270}
                            height={180}
                            data-lazy-src="https://www.vietnam-visa.com/wp-content/uploads/thumbnail/vietnam-visa-extension-service-fast-reliable-qcfwvh8ecn9tlqfubznjnthc3wsuop9949bpehsy2w.jpg"
                          />
                          <noscript>
                            &lt;img
                            src="https://www.vietnam-visa.com/wp-content/uploads/thumbnail/vietnam-visa-extension-service-fast-reliable-qcfwvh8ecn9tlqfubznjnthc3wsuop9949bpehsy2w.jpg"
                            alt="Vietnam Visa Extension Service" title="Vietnam
                            Visa Extension Service" width="270" height="180"&gt;
                          </noscript>
                        </a>
                        <h4 className="hd-4 service-title">
                          <a
                            className=""
                            href="https://www.vietnam-visa.com/visa-extension-service/"
                          >
                            Vietnam Visa Extension
                          </a>
                        </h4>
                        <p className="txt-14-22 c-dark-gray mb-0 __service-des">
                          Are you having difficulty in extending your visa in
                          Vietnam? We specialize in providing the best visa
                          extension service in Vietnam? We can process your visa
                          extension urgently in 4 working days.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: 270, marginRight: 30 }}
                  >
                    <div className="item">
                      <div className="visa-service-item">
                        <a href="https://www.vietnam-visa.com/work-permit-service/">
                          <img
                            src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20270%20180'%3E%3C/svg%3E"
                            alt="Vietnam work permit service for foreigners"
                            title="Vietnam work permit service for foreigners"
                            width={270}
                            height={180}
                            data-lazy-src="https://www.vietnam-visa.com/wp-content/uploads/thumbnail/vietnam-work-permit-services-vietnam-visa-qcfwvh8ecn9tlqfubznjnthc3wsuop9949bpehsy2w.jpg"
                          />
                          <noscript>
                            &lt;img
                            src="https://www.vietnam-visa.com/wp-content/uploads/thumbnail/vietnam-work-permit-services-vietnam-visa-qcfwvh8ecn9tlqfubznjnthc3wsuop9949bpehsy2w.jpg"
                            alt="Vietnam work permit service for foreigners"
                            title="Vietnam work permit service for foreigners"
                            width="270" height="180"&gt;
                          </noscript>
                        </a>
                        <h4 className="hd-4 service-title">
                          <a
                            className=""
                            href="https://www.vietnam-visa.com/work-permit-service/"
                          >
                            Vietnam Work Permit
                          </a>
                        </h4>
                        <p className="txt-14-22 c-dark-gray mb-0 __service-des">
                          Do you need to get Vietnam work permit for your
                          foreign workers? Is your foreign worker’s work permit
                          damaged, lost, nearly expired or do you need to adjust
                          any information therein? Feel free to contact us!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: 270, marginRight: 30 }}
                  >
                    <div className="item">
                      <div className="visa-service-item">
                        <a href="https://www.vietnam-visa.com/temporary-residence-card-service/">
                          <img
                            src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20270%20180'%3E%3C/svg%3E"
                            alt="Vietnam Temporary Residence Card Service"
                            title="Vietnam Temporary Residence Card Service"
                            width={270}
                            height={180}
                            data-lazy-src="https://www.vietnam-visa.com/wp-content/uploads/thumbnail/vietnam-temporary-residence-card-service-vietnam-visa-qcfwvh8ecn9tlqfubznjnthc3wsuop9949bpehsy2w.jpg"
                          />
                          <noscript>
                            &lt;img
                            src="https://www.vietnam-visa.com/wp-content/uploads/thumbnail/vietnam-temporary-residence-card-service-vietnam-visa-qcfwvh8ecn9tlqfubznjnthc3wsuop9949bpehsy2w.jpg"
                            alt="Vietnam Temporary Residence Card Service"
                            title="Vietnam Temporary Residence Card Service"
                            width="270" height="180"&gt;
                          </noscript>
                        </a>
                        <h4 className="hd-4 service-title">
                          <a
                            className=""
                            href="https://www.vietnam-visa.com/temporary-residence-card-service/"
                          >
                            Vietnam Temporary Residence Card
                          </a>
                        </h4>
                        <p className="txt-14-22 c-dark-gray mb-0 __service-des">
                          Vietnam temporary residence card application can be
                          lengthy and tiresome. However, we have a team of
                          professionals and an effective system so that your
                          application process can be fast and effortless.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: 270, marginRight: 30 }}
                  >
                    <div className="item">
                      <div className="visa-service-item">
                        <a href="https://www.vietnam-visa.com/criminal-record-service/">
                          <img
                            src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20270%20180'%3E%3C/svg%3E"
                            alt="Vietnam Police Check Service – Fastest and easiest way to get Police check in Vietnam"
                            title="Vietnam Police Check Service – Fastest and easiest way to get Police check in Vietnam"
                            width={270}
                            height={180}
                            data-lazy-src="https://www.vietnam-visa.com/wp-content/uploads/thumbnail/vietnam-police-check-service-vietnam-criminal-record-vietnam-visa-qcfwvh8ecn9tlqfubznjnthc3wsuop9949bpehsy2w.jpg"
                          />
                          <noscript>
                            &lt;img
                            src="https://www.vietnam-visa.com/wp-content/uploads/thumbnail/vietnam-police-check-service-vietnam-criminal-record-vietnam-visa-qcfwvh8ecn9tlqfubznjnthc3wsuop9949bpehsy2w.jpg"
                            alt="Vietnam Police Check Service – Fastest and
                            easiest way to get Police check in Vietnam"
                            title="Vietnam Police Check Service – Fastest and
                            easiest way to get Police check in Vietnam"
                            width="270" height="180"&gt;
                          </noscript>
                        </a>
                        <h4 className="hd-4 service-title">
                          <a
                            className=""
                            href="https://www.vietnam-visa.com/criminal-record-service/"
                          >
                            Vietnam Police Check
                          </a>
                        </h4>
                        <p className="txt-14-22 c-dark-gray mb-0 __service-des">
                          We can help you get your Vietnam police check no
                          matter you are in Vietnam or not. We also can work to
                          get it translated, legalized and then delivered to
                          your address, in Vietnam or foreign country.
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="owl-nav">
                <button type="button" role="presentation" className="owl-prev">
                  <span aria-label="Previous">‹</span>
                </button>
                <button type="button" role="presentation" className="owl-next">
                  <span aria-label="Next">›</span>
                </button>
              </div>
              <div className="owl-dots disabled" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
