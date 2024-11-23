function Navbar() {
  return (
    <div>
      <nav className="no-scrollbar">
        <div className="d-flex flex-row ustify-centent-center align-items-center flex-wrap">
          <iframe
            src="/ads/adsterra/banner-468-60"
            className="banner-468-60 no-scrollbar"
          ></iframe>
        </div>
        <div className="py-3 py-md-5">
          <h1 className="main-title text-violet fw-100 fs-1 text-capitalize text-center">
            Bing Rewards Point Miner
          </h1>{" "}
          <div className="w-fit d-block mx-auto">
            <a
              href=""
              className="m-0 border border-secondary py-1 px-3 text-decoration-none link-warning"
            >
              Remove Ads
            </a>
            <a
              href="/about"
              className="m-0 border border-secondary py-1 px-3 text-decoration-none link-light "
            >
              How to use
            </a>
            <a
              href="/about"
              className="m-0 border border-secondary py-1 px-3 text-decoration-none link-info"
            >
              About
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
