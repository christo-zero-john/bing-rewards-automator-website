function Navbar() {
  return (
    <div>
      <nav className="no-scrollbar">
        <div className="d-flex flex-row ustify-centent-center align-items-center flex-wrap">
          <iframe
            src="/ads/adsterra/banner-468-60"
            frameborder="0"
            className="banner-468-60 no-scrollbar"
          ></iframe>
          <iframe
            src="/ads/adsterra/banner-468-60"
            frameborder="0"
            className="banner-468-60 no-scrollbar"
          ></iframe>
          <iframe
            src="/ads/adsterra/banner-468-60"
            frameborder="0"
            className="banner-468-60 no-scrollbar"
          ></iframe>
          <iframe
            src="/ads/adsterra/banner-468-60"
            frameborder="0"
            className="banner-468-60 no-scrollbar"
          ></iframe>
        </div>
        <div className="py-3 py-md-5">
          <h1 className="main-title text-violet fw-100 fs-1 text-capitalize text-center">
            Bing Rewards Point Miner
          </h1>{" "}
          <a href="" className=" mx-3 py-1 px-4 btn btn-outline-warning">
            Remove Ads
          </a>
          <a href="/about" className=" mx-3 py-1 px-4 btn btn-outline-light ">
            How to use
          </a>
          <a href="/about" className=" mx-3 py-1 px-4 btn btn-outline-info">
            About
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
