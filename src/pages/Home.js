import React from "react";
import Headertop from "../components/Headertop";
import Footerbottom from "../components/Footerbottom";

export default function Home(){
    return(
        <>
        <Headertop />
        <main id="main">
        {/* Hero Section - Home Page */}
        <section id="hero" className="hero">
          <img src={require('../assets/img/hero-bg.jpg')} alt="" data-aos="fade-in" />
          <div className="container">
            <div className="row">
              <div className="col-lg-10">
                <h2 data-aos="fade-up" data-aos-delay={100}>Welcome to Our Website</h2>
                <p data-aos="fade-up" data-aos-delay={200}>We are team of talented designers making websites with Bootstrap</p>
              </div>
              <div className="col-lg-5">
                <form action="#" className="sign-up-form d-flex" data-aos="fade-up" data-aos-delay={300}>
                  <input type="text" className="form-control" placeholder="Enter email address" />
                  <input type="submit" className="btn btn-primary" defaultValue="Sign up" />
                </form>
              </div>
            </div>
          </div>
        </section>{/* End Hero Section */}
        {/* Clients Section - Home Page */}
        <section id="clients" className="clients">
          <div className="container-fluid" data-aos="fade-up">
            <div className="row gy-4">
              <div className="col-xl-2 col-md-3 col-6 client-logo">
                <img src={require('../assets/img/clients/client-1.png')} className="img-fluid" alt="" />
              </div>{/* End Client Item */}
              <div className="col-xl-2 col-md-3 col-6 client-logo">
                <img src={require('../assets/img/clients/client-2.png')} className="img-fluid" alt="" />
              </div>{/* End Client Item */}
              <div className="col-xl-2 col-md-3 col-6 client-logo">
                <img src={require('../assets/img/clients/client-3.png')} className="img-fluid" alt="" />
              </div>{/* End Client Item */}
              <div className="col-xl-2 col-md-3 col-6 client-logo">
                <img src={require('../assets/img/clients/client-4.png')} className="img-fluid" alt="" />
              </div>{/* End Client Item */}
              <div className="col-xl-2 col-md-3 col-6 client-logo">
                <img src={require('../assets/img/clients/client-5.png')} className="img-fluid" alt="" />
              </div>{/* End Client Item */}
              <div className="col-xl-2 col-md-3 col-6 client-logo">
                <img src={require('../assets/img/clients/client-6.png')} className="img-fluid" alt="" />
              </div>{/* End Client Item */}
            </div>
          </div>
        </section>{/* End Clients Section */}
        {/* About Section - Home Page */}
        <section id="about" className="about">
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row align-items-xl-center gy-5">
              <div className="col-xl-5 content">
                <h3>About Us</h3>
                <h2>Ducimus rerum libero reprehenderit cumque</h2>
                <p>Ipsa sint sit. Quis ducimus tempore dolores impedit et dolor cumque alias maxime. Enim reiciendis minus et rerum hic non. Dicta quas cum quia maiores iure. Quidem nulla qui assumenda incidunt voluptatem tempora deleniti soluta.</p>
                <a href="#" className="read-more"><span>Read More</span><i className="bi bi-arrow-right" /></a>
              </div>
              <div className="col-xl-7">
                <div className="row gy-4 icon-boxes">
                  <div className="col-md-6" data-aos="fade-up" data-aos-delay={200}>
                    <div className="icon-box">
                      <i className="bi bi-buildings" />
                      <h3>Eius provident</h3>
                      <p>Magni repellendus vel ullam hic officia accusantium ipsa dolor omnis dolor voluptatem</p>
                    </div>
                  </div> {/* End Icon Box */}
                  <div className="col-md-6" data-aos="fade-up" data-aos-delay={300}>
                    <div className="icon-box">
                      <i className="bi bi-clipboard-pulse" />
                      <h3>Rerum aperiam</h3>
                      <p>Autem saepe animi et aut aspernatur culpa facere. Rerum saepe rerum voluptates quia</p>
                    </div>
                  </div> {/* End Icon Box */}
                  <div className="col-md-6" data-aos="fade-up" data-aos-delay={400}>
                    <div className="icon-box">
                      <i className="bi bi-command" />
                      <h3>Veniam omnis</h3>
                      <p>Omnis perferendis molestias culpa sed. Recusandae quas possimus. Quod consequatur corrupti</p>
                    </div>
                  </div> {/* End Icon Box */}
                  <div className="col-md-6" data-aos="fade-up" data-aos-delay={500}>
                    <div className="icon-box">
                      <i className="bi bi-graph-up-arrow" />
                      <h3>Delares sapiente</h3>
                      <p>Sint et dolor voluptas minus possimus nostrum. Reiciendis commodi eligendi omnis quideme lorenda</p>
                    </div>
                  </div> {/* End Icon Box */}
                </div>
              </div>
            </div>
          </div>
        </section>{/* End About Section */}
        {/* Stats Section - Home Page */}
        <section id="stats" className="stats">
          <img src={require('../assets/img/stats-bg.jpg')} alt="" data-aos="fade-in" />
          <div className="container position-relative" data-aos="fade-up" data-aos-delay={100}>
            <div className="row gy-4">
              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span data-purecounter-start={0} data-purecounter-end={232} data-purecounter-duration={1} className="purecounter" />
                  <p>Clients</p>
                </div>
              </div>{/* End Stats Item */}
              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span data-purecounter-start={0} data-purecounter-end={521} data-purecounter-duration={1} className="purecounter" />
                  <p>Projects</p>
                </div>
              </div>{/* End Stats Item */}
              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span data-purecounter-start={0} data-purecounter-end={1453} data-purecounter-duration={1} className="purecounter" />
                  <p>Hours Of Support</p>
                </div>
              </div>{/* End Stats Item */}
              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span data-purecounter-start={0} data-purecounter-end={32} data-purecounter-duration={1} className="purecounter" />
                  <p>Workers</p>
                </div>
              </div>{/* End Stats Item */}
            </div>
          </div>
        </section>{/* End Stats Section */}
        {/* Services Section - Home Page */}
        <section id="services" className="services">
          {/*  Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Services</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>{/* End Section Title */}
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-6 " data-aos="fade-up" data-aos-delay={100}>
                <div className="service-item d-flex">
                  <div className="icon flex-shrink-0"><i className="bi bi-briefcase" /></div>
                  <div>
                    <h4 className="title"><a href="services-details.html" className="stretched-link">Lorem Ipsum</a></h4>
                    <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                  </div>
                </div>
              </div>
              {/* End Service Item */}
              <div className="col-lg-6 " data-aos="fade-up" data-aos-delay={200}>
                <div className="service-item d-flex">
                  <div className="icon flex-shrink-0"><i className="bi bi-card-checklist" /></div>
                  <div>
                    <h4 className="title"><a href="services-details.html" className="stretched-link">Dolor Sitema</a></h4>
                    <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                  </div>
                </div>
              </div>{/* End Service Item */}
              <div className="col-lg-6 " data-aos="fade-up" data-aos-delay={300}>
                <div className="service-item d-flex">
                  <div className="icon flex-shrink-0"><i className="bi bi-bar-chart" /></div>
                  <div>
                    <h4 className="title"><a href="services-details.html" className="stretched-link">Sed ut perspiciatis</a></h4>
                    <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                  </div>
                </div>
              </div>{/* End Service Item */}
              <div className="col-lg-6 " data-aos="fade-up" data-aos-delay={400}>
                <div className="service-item d-flex">
                  <div className="icon flex-shrink-0"><i className="bi bi-binoculars" /></div>
                  <div>
                    <h4 className="title"><a href="services-details.html" className="stretched-link">Magni Dolores</a></h4>
                    <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                  </div>
                </div>
              </div>{/* End Service Item */}
              <div className="col-lg-6 " data-aos="fade-up" data-aos-delay={500}>
                <div className="service-item d-flex">
                  <div className="icon flex-shrink-0"><i className="bi bi-brightness-high" /></div>
                  <div>
                    <h4 className="title"><a href="services-details.html" className="stretched-link">Nemo Enim</a></h4>
                    <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                  </div>
                </div>
              </div>{/* End Service Item */}
              <div className="col-lg-6 " data-aos="fade-up" data-aos-delay={600}>
                <div className="service-item d-flex">
                  <div className="icon flex-shrink-0"><i className="bi bi-calendar4-week" /></div>
                  <div>
                    <h4 className="title"><a href="services-details.html" className="stretched-link">Eiusmod Tempor</a></h4>
                    <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                  </div>
                </div>
              </div>{/* End Service Item */}
            </div>
          </div>
        </section>{/* End Services Section */}
        {/* Features Section - Home Page */}
        <section id="features" className="features">
          {/*  Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Features</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>{/* End Section Title */}
          <div className="container">
            <div className="row gy-4 align-items-center features-item">
              <div className="col-lg-5 order-2 order-lg-1" data-aos="fade-up" data-aos-delay={200}>
                <h3>Corporis temporibus maiores provident</h3>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
                <a href="#" className="btn btn-get-started">Get Started</a>
              </div>
              <div className="col-lg-7 order-1 order-lg-2 d-flex align-items-center" data-aos="zoom-out" data-aos-delay={100}>
                <div className="image-stack">
                  <img src={require('../assets/img/features-light-1.jpg')} alt="" className="stack-front" />
                  <img src={require('../assets/img/features-light-2.jpg')} alt="" className="stack-back" />
                </div>
              </div>
            </div>{/* Features Item */}
            <div className="row gy-4 align-items-stretch justify-content-between features-item ">
              <div className="col-lg-6 d-flex align-items-center features-img-bg" data-aos="zoom-out">
                <img src={require('../assets/img/features-light-3.jpg')} className="img-fluid" alt="" />
              </div>
              <div className="col-lg-5 d-flex justify-content-center flex-column" data-aos="fade-up">
                <h3>Sunt consequatur ad ut est nulla</h3>
                <p>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.</p>
                <ul>
                  <li><i className="bi bi-check" /> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                  <li><i className="bi bi-check" /><span> Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                  <li><i className="bi bi-check" /> <span>Facilis ut et voluptatem aperiam. Autem soluta ad fugiat</span>.</li>
                </ul>
                <a href="#" className="btn btn-get-started align-self-start">Get Started</a>
              </div>
            </div>{/* Features Item */}
          </div>
        </section>{/* End Features Section */}
        {/* Portfolio Section - Home Page */}
        <section id="portfolio" className="portfolio">
          {/*  Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Portfolio</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>{/* End Section Title */}
          <div className="container">
            <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
              <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay={100}>
                <li data-filter="*" className="filter-active">All</li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-product">Card</li>
                <li data-filter=".filter-branding">Web</li>
              </ul>{/* End Portfolio Filters */}
              <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay={200}>
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                  <img src={require('../assets/img/masonry-portfolio/masonry-portfolio-1.jpg')} className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>App 1</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a href="assets/img/masonry-portfolio/masonry-portfolio-1.jpg" title="App 1" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg" /></a>
                  </div>
                </div>{/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                  <img src="assets/img/masonry-portfolio/masonry-portfolio-2.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Product 1</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a href="assets/img/masonry-portfolio/masonry-portfolio-2.jpg" title="Product 1" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg" /></a>
                  </div>
                </div>{/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                  <img src="assets/img/masonry-portfolio/masonry-portfolio-3.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Branding 1</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a href="assets/img/masonry-portfolio/masonry-portfolio-3.jpg" title="Branding 1" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg" /></a>
                  </div>
                </div>{/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                  <img src="assets/img/masonry-portfolio/masonry-portfolio-4.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>App 2</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a href="assets/img/masonry-portfolio/masonry-portfolio-4.jpg" title="App 2" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg" /></a>
                  </div>
                </div>{/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                  <img src="assets/img/masonry-portfolio/masonry-portfolio-5.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Product 2</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a href="assets/img/masonry-portfolio/masonry-portfolio-5.jpg" title="Product 2" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg" /></a>
                  </div>
                </div>{/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                  <img src="assets/img/masonry-portfolio/masonry-portfolio-6.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Branding 2</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a href="assets/img/masonry-portfolio/masonry-portfolio-6.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg" /></a>
                  </div>
                </div>{/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                  <img src="assets/img/masonry-portfolio/masonry-portfolio-7.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>App 3</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a href="assets/img/masonry-portfolio/masonry-portfolio-7.jpg" title="App 3" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg" /></a>
                  </div>
                </div>{/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                  <img src="assets/img/masonry-portfolio/masonry-portfolio-8.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Product 3</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a href="assets/img/masonry-portfolio/masonry-portfolio-8.jpg" title="Product 3" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg" /></a>
                  </div>
                </div>{/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                  <img src="assets/img/masonry-portfolio/masonry-portfolio-9.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Branding 3</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a href="assets/img/masonry-portfolio/masonry-portfolio-9.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg" /></a>
                  </div>
                </div>{/* End Portfolio Item */}
              </div>{/* End Portfolio Container */}
            </div>
          </div>
        </section>{/* End Portfolio Section */}
        {/* Pricing Section - Home Page */}
        <section id="pricing" className="pricing">
          {/*  Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Pricing</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>{/* End Section Title */}
          <div className="container" data-aos="zoom-in" data-aos-delay={100}>
            <div className="row g-4">
              <div className="col-lg-4">
                <div className="pricing-item">
                  <h3>Free Plan</h3>
                  <div className="icon">
                    <i className="bi bi-box" />
                  </div>
                  <h4><sup>$</sup>0<span> / month</span></h4>
                  <ul>
                    <li><i className="bi bi-check" /> <span>Quam adipiscing vitae proin</span></li>
                    <li><i className="bi bi-check" /> <span>Nec feugiat nisl pretium</span></li>
                    <li><i className="bi bi-check" /> <span>Nulla at volutpat diam uteera</span></li>
                    <li className="na"><i className="bi bi-x" /> <span>Pharetra massa massa ultricies</span></li>
                    <li className="na"><i className="bi bi-x" /> <span>Massa ultricies mi quis hendrerit</span></li>
                  </ul>
                  <div className="text-center"><a href="#" className="buy-btn">Buy Now</a></div>
                </div>
              </div>{/* End Pricing Item */}
              <div className="col-lg-4">
                <div className="pricing-item featured">
                  <h3>Business Plan</h3>
                  <div className="icon">
                    <i className="bi bi-rocket" />
                  </div>
                  <h4><sup>$</sup>29<span> / month</span></h4>
                  <ul>
                    <li><i className="bi bi-check" /> <span>Quam adipiscing vitae proin</span></li>
                    <li><i className="bi bi-check" /> <span>Nec feugiat nisl pretium</span></li>
                    <li><i className="bi bi-check" /> <span>Nulla at volutpat diam uteera</span></li>
                    <li><i className="bi bi-check" /> <span>Pharetra massa massa ultricies</span></li>
                    <li><i className="bi bi-check" /> <span>Massa ultricies mi quis hendrerit</span></li>
                  </ul>
                  <div className="text-center"><a href="#" className="buy-btn">Buy Now</a></div>
                </div>
              </div>{/* End Pricing Item */}
              <div className="col-lg-4">
                <div className="pricing-item">
                  <h3>Developer Plan</h3>
                  <div className="icon">
                    <i className="bi bi-send" />
                  </div>
                  <h4><sup>$</sup>49<span> / month</span></h4>
                  <ul>
                    <li><i className="bi bi-check" /> <span>Quam adipiscing vitae proin</span></li>
                    <li><i className="bi bi-check" /> <span>Nec feugiat nisl pretium</span></li>
                    <li><i className="bi bi-check" /> <span>Nulla at volutpat diam uteera</span></li>
                    <li><i className="bi bi-check" /> <span>Pharetra massa massa ultricies</span></li>
                    <li><i className="bi bi-check" /> <span>Massa ultricies mi quis hendrerit</span></li>
                  </ul>
                  <div className="text-center"><a href="#" className="buy-btn">Buy Now</a></div>
                </div>
              </div>{/* End Pricing Item */}
            </div>
          </div>
        </section>{/* End Pricing Section */}
        {/* Faq Section - Home Page */}
        <section id="faq" className="faq">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay={100}>
                <div className="content px-xl-5">
                  <h3><span>Frequently Asked </span><strong>Questions</strong></h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                  </p>
                </div>
              </div>
              <div className="col-lg-8" data-aos="fade-up" data-aos-delay={200}>
                <div className="faq-container">
                  <div className="faq-item faq-active">
                    <h3><span className="num">1.</span> <span>Non consectetur a erat nam at lectus urna duis?</span></h3>
                    <div className="faq-content">
                      <p>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right" />
                  </div>{/* End Faq item*/}
                  <div className="faq-item">
                    <h3><span className="num">2.</span> <span>Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?</span></h3>
                    <div className="faq-content">
                      <p>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right" />
                  </div>{/* End Faq item*/}
                  <div className="faq-item">
                    <h3><span className="num">3.</span> <span>Dolor sit amet consectetur adipiscing elit pellentesque?</span></h3>
                    <div className="faq-content">
                      <p>Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis</p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right" />
                  </div>{/* End Faq item*/}
                  <div className="faq-item">
                    <h3><span className="num">4.</span> <span>Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?</span></h3>
                    <div className="faq-content">
                      <p>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right" />
                  </div>{/* End Faq item*/}
                  <div className="faq-item">
                    <h3><span className="num">5.</span> <span>Tempus quam pellentesque nec nam aliquam sem et tortor consequat?</span></h3>
                    <div className="faq-content">
                      <p>Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in</p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right" />
                  </div>{/* End Faq item*/}
                </div>
              </div>
            </div>
          </div>
        </section>{/* End Faq Section */}
        {/* Team Section - Home Page */}
        <section id="team" className="team">
          {/*  Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Team</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>{/* End Section Title */}
          <div className="container">
            <div className="row gy-5">
              <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay={100}>
                <div className="member-img">
                  <img src="assets/img/team/team-1.jpg" className="img-fluid" alt="" />
                  <div className="social">
                    <a href="#"><i className="bi bi-twitter" /></a>
                    <a href="#"><i className="bi bi-facebook" /></a>
                    <a href="#"><i className="bi bi-instagram" /></a>
                    <a href="#"><i className="bi bi-linkedin" /></a>
                  </div>
                </div>
                <div className="member-info text-center">
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                  <p>Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow</p>
                </div>
              </div>{/* End Team Member */}
              <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay={200}>
                <div className="member-img">
                  <img src="assets/img/team/team-2.jpg" className="img-fluid" alt="" />
                  <div className="social">
                    <a href="#"><i className="bi bi-twitter" /></a>
                    <a href="#"><i className="bi bi-facebook" /></a>
                    <a href="#"><i className="bi bi-instagram" /></a>
                    <a href="#"><i className="bi bi-linkedin" /></a>
                  </div>
                </div>
                <div className="member-info text-center">
                  <h4>Sarah Jhonson</h4>
                  <span>Product Manager</span>
                  <p>Labore ipsam sit consequatur exercitationem rerum laboriosam laudantium aut quod dolores exercitationem ut</p>
                </div>
              </div>{/* End Team Member */}
              <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay={300}>
                <div className="member-img">
                  <img src="assets/img/team/team-3.jpg" className="img-fluid" alt="" />
                  <div className="social">
                    <a href="#"><i className="bi bi-twitter" /></a>
                    <a href="#"><i className="bi bi-facebook" /></a>
                    <a href="#"><i className="bi bi-instagram" /></a>
                    <a href="#"><i className="bi bi-linkedin" /></a>
                  </div>
                </div>
                <div className="member-info text-center">
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                  <p>Illum minima ea autem doloremque ipsum quidem quas aspernatur modi ut praesentium vel tque sed facilis at qui</p>
                </div>
              </div>{/* End Team Member */}
              <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay={400}>
                <div className="member-img">
                  <img src="assets/img/team/team-4.jpg" className="img-fluid" alt="" />
                  <div className="social">
                    <a href="#"><i className="bi bi-twitter" /></a>
                    <a href="#"><i className="bi bi-facebook" /></a>
                    <a href="#"><i className="bi bi-instagram" /></a>
                    <a href="#"><i className="bi bi-linkedin" /></a>
                  </div>
                </div>
                <div className="member-info text-center">
                  <h4>Amanda Jepson</h4>
                  <span>Accountant</span>
                  <p>Magni voluptatem accusamus assumenda cum nisi aut qui dolorem voluptate sed et veniam quasi quam consectetur</p>
                </div>
              </div>{/* End Team Member */}
              <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay={500}>
                <div className="member-img">
                  <img src="assets/img/team/team-5.jpg" className="img-fluid" alt="" />
                  <div className="social">
                    <a href="#"><i className="bi bi-twitter" /></a>
                    <a href="#"><i className="bi bi-facebook" /></a>
                    <a href="#"><i className="bi bi-instagram" /></a>
                    <a href="#"><i className="bi bi-linkedin" /></a>
                  </div>
                </div>
                <div className="member-info text-center">
                  <h4>Brian Doe</h4>
                  <span>Marketing</span>
                  <p>Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit</p>
                </div>
              </div>{/* End Team Member */}
              <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay={600}>
                <div className="member-img">
                  <img src="assets/img/team/team-6.jpg" className="img-fluid" alt="" />
                  <div className="social">
                    <a href="#"><i className="bi bi-twitter" /></a>
                    <a href="#"><i className="bi bi-facebook" /></a>
                    <a href="#"><i className="bi bi-instagram" /></a>
                    <a href="#"><i className="bi bi-linkedin" /></a>
                  </div>
                </div>
                <div className="member-info text-center">
                  <h4>Josepha Palas</h4>
                  <span>Operation</span>
                  <p>Sint sint eveniet explicabo amet consequatur nesciunt error enim rerum earum et omnis fugit eligendi cupiditate vel</p>
                </div>
              </div>{/* End Team Member */}
            </div>
          </div>
        </section>{/* End Team Section */}
        {/* Call-to-action Section - Home Page */}
        <section id="call-to-action" className="call-to-action">
          <img src="assets/img/cta-bg.jpg" alt="" />
          <div className="container">
            <div className="row justify-content-center" data-aos="zoom-in" data-aos-delay={100}>
              <div className="col-xl-10">
                <div className="text-center">
                  <h3>Call To Action</h3>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <a className="cta-btn" href="#">Call To Action</a>
                </div>
              </div>
            </div>
          </div>
        </section>{/* End Call-to-action Section */}
        {/* Testimonials Section - Home Page */}
        <section id="testimonials" className="testimonials">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 info" data-aos="fade-up" data-aos-delay={100}>
                <h3>Testimonials</h3>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
              </div>
              <div className="col-lg-7" data-aos="fade-up" data-aos-delay={200}>
                <div className="swiper">
                  <template className="swiper-config" />
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <div className="d-flex">
                          <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img flex-shrink-0" alt="" />
                          <div>
                            <h3>Saul Goodman</h3>
                            <h4>Ceo &amp; Founder</h4>
                            <div className="stars">
                              <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                            </div>
                          </div>
                        </div>
                        <p>
                          <i className="bi bi-quote quote-icon-left" />
                          <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                          <i className="bi bi-quote quote-icon-right" />
                        </p>
                      </div>
                    </div>{/* End testimonial item */}
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <div className="d-flex">
                          <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img flex-shrink-0" alt="" />
                          <div>
                            <h3>Sara Wilsson</h3>
                            <h4>Designer</h4>
                            <div className="stars">
                              <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                            </div>
                          </div>
                        </div>
                        <p>
                          <i className="bi bi-quote quote-icon-left" />
                          <span>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.</span>
                          <i className="bi bi-quote quote-icon-right" />
                        </p>
                      </div>
                    </div>{/* End testimonial item */}
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <div className="d-flex">
                          <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img flex-shrink-0" alt="" />
                          <div>
                            <h3>Jena Karlis</h3>
                            <h4>Store Owner</h4>
                            <div className="stars">
                              <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                            </div>
                          </div>
                        </div>
                        <p>
                          <i className="bi bi-quote quote-icon-left" />
                          <span>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</span>
                          <i className="bi bi-quote quote-icon-right" />
                        </p>
                      </div>
                    </div>{/* End testimonial item */}
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <div className="d-flex">
                          <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img flex-shrink-0" alt="" />
                          <div>
                            <h3>Matt Brandon</h3>
                            <h4>Freelancer</h4>
                            <div className="stars">
                              <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                            </div>
                          </div>
                        </div>
                        <p>
                          <i className="bi bi-quote quote-icon-left" />
                          <span>Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.</span>
                          <i className="bi bi-quote quote-icon-right" />
                        </p>
                      </div>
                    </div>{/* End testimonial item */}
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <div className="d-flex">
                          <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img flex-shrink-0" alt="" />
                          <div>
                            <h3>John Larson</h3>
                            <h4>Entrepreneur</h4>
                            <div className="stars">
                              <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                            </div>
                          </div>
                        </div>
                        <p>
                          <i className="bi bi-quote quote-icon-left" />
                          <span>Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.</span>
                          <i className="bi bi-quote quote-icon-right" />
                        </p>
                      </div>
                    </div>{/* End testimonial item */}
                  </div>
                  <div className="swiper-pagination" />
                </div>
              </div>
            </div>
          </div>
        </section>{/* End Testimonials Section */}
        {/* Recent-posts Section - Home Page */}
        <section id="recent-posts" className="recent-posts">
          {/*  Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Recent Posts</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>{/* End Section Title */}
          <div className="container">
            <div className="row gy-4">
              <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay={100}>
                <article>
                  <div className="post-img">
                    <img src="assets/img/blog/blog-1.jpg" alt="" className="img-fluid" />
                  </div>
                  <p className="post-category">Politics</p>
                  <h2 className="title">
                    <a href="blog-details.html">Dolorum optio tempore voluptas dignissimos</a>
                  </h2>
                  <div className="d-flex align-items-center">
                    <img src="assets/img/blog/blog-author.jpg" alt="" className="img-fluid post-author-img flex-shrink-0" />
                    <div className="post-meta">
                      <p className="post-author">Maria Doe</p>
                      <p className="post-date">
                        <time dateTime="2022-01-01">Jan 1, 2022</time>
                      </p>
                    </div>
                  </div>
                </article>
              </div>{/* End post list item */}
              <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
                <article>
                  <div className="post-img">
                    <img src="assets/img/blog/blog-2.jpg" alt="" className="img-fluid" />
                  </div>
                  <p className="post-category">Sports</p>
                  <h2 className="title">
                    <a href="blog-details.html">Nisi magni odit consequatur autem nulla dolorem</a>
                  </h2>
                  <div className="d-flex align-items-center">
                    <img src="assets/img/blog/blog-author-2.jpg" alt="" className="img-fluid post-author-img flex-shrink-0" />
                    <div className="post-meta">
                      <p className="post-author">Allisa Mayer</p>
                      <p className="post-date">
                        <time dateTime="2022-01-01">Jun 5, 2022</time>
                      </p>
                    </div>
                  </div>
                </article>
              </div>{/* End post list item */}
              <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay={300}>
                <article>
                  <div className="post-img">
                    <img src="assets/img/blog/blog-3.jpg" alt="" className="img-fluid" />
                  </div>
                  <p className="post-category">Entertainment</p>
                  <h2 className="title">
                    <a href="blog-details.html">Possimus soluta ut id suscipit ea ut in quo quia et soluta</a>
                  </h2>
                  <div className="d-flex align-items-center">
                    <img src="assets/img/blog/blog-author-3.jpg" alt="" className="img-fluid post-author-img flex-shrink-0" />
                    <div className="post-meta">
                      <p className="post-author">Mark Dower</p>
                      <p className="post-date">
                        <time dateTime="2022-01-01">Jun 22, 2022</time>
                      </p>
                    </div>
                  </div>
                </article>
              </div>{/* End post list item */}
            </div>{/* End recent posts list */}
          </div>
        </section>{/* End Recent-posts Section */}
        {/* Contact Section - Home Page */}
        <section id="contact" className="contact">
          {/*  Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>{/* End Section Title */}
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row gy-4">
              <div className="col-lg-6">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <div className="info-item" data-aos="fade" data-aos-delay={200}>
                      <i className="bi bi-geo-alt" />
                      <h3>Address</h3>
                      <p>A108 Adam Street</p>
                      <p>New York, NY 535022</p>
                    </div>
                  </div>{/* End Info Item */}
                  <div className="col-md-6">
                    <div className="info-item" data-aos="fade" data-aos-delay={300}>
                      <i className="bi bi-telephone" />
                      <h3>Call Us</h3>
                      <p>+1 5589 55488 55</p>
                      <p>+1 6678 254445 41</p>
                    </div>
                  </div>{/* End Info Item */}
                  <div className="col-md-6">
                    <div className="info-item" data-aos="fade" data-aos-delay={400}>
                      <i className="bi bi-envelope" />
                      <h3>Email Us</h3>
                      <p>info@example.com</p>
                      <p>contact@example.com</p>
                    </div>
                  </div>{/* End Info Item */}
                  <div className="col-md-6">
                    <div className="info-item" data-aos="fade" data-aos-delay={500}>
                      <i className="bi bi-clock" />
                      <h3>Open Hours</h3>
                      <p>Monday - Friday</p>
                      <p>9:00AM - 05:00PM</p>
                    </div>
                  </div>{/* End Info Item */}
                </div>
              </div>
              <div className="col-lg-6">
                <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay={200}>
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                    </div>
                    <div className="col-md-6 ">
                      <input type="email" className="form-control" name="email" placeholder="Your Email" required />
                    </div>
                    <div className="col-md-12">
                      <input type="text" className="form-control" name="subject" placeholder="Subject" required />
                    </div>
                    <div className="col-md-12">
                      <textarea className="form-control" name="message" rows={6} placeholder="Message" required defaultValue={""} />
                    </div>
                    <div className="col-md-12 text-center">
                      <div className="loading">Loading</div>
                      <div className="error-message" />
                      <div className="sent-message">Your message has been sent. Thank you!</div>
                      <button type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footerbottom />
    </>
    )
}