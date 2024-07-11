const Blog = () => {
  return (
    // blog section
    <section id="recent-blog-posts" className="recent-blog-posts">
      <div className="container-xl container-fluid">
        {/* section header */}
        <header className="section-header">
          <h2>Blog</h2>
          <p>Recent posts form our Blog</p>
        </header>
        {/* all blogs */}
        <div className="row">
          {/* blog */}
          <div className="col-lg-4">
            <div className="post-box">
              <div className="post-img">
                <img src="/img/blog/blog-1.jpg" className="img-fluid" alt="" />
              </div>
              <span className="post-date">Tue, September 15</span>
              <h3 className="post-title">
                Eum ad dolor et. Autem aut fugiat debitis voluptatem
                consequuntur sit
              </h3>
              <a href="/blog/1" className="readmore stretched-a mt-auto">
                <span>Read More</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          {/* blog */}
          <div className="col-lg-4">
            <div className="post-box">
              <div className="post-img">
                <img src="/img/blog/blog-2.jpg" className="img-fluid" alt="" />
              </div>
              <span className="post-date">Fri, August 28</span>
              <h3 className="post-title">
                Et repellendus molestiae qui est sed omnis voluptates magnam
              </h3>
              <a href="/blog/1" className="readmore stretched-a mt-auto">
                <span>Read More</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          {/* blog */}
          <div className="col-lg-4">
            <div className="post-box">
              <div className="post-img">
                <img src="/img/blog/blog-3.jpg" className="img-fluid" alt="" />
              </div>
              <span className="post-date">Mon, July 11</span>
              <h3 className="post-title">
                Quia assumenda est et veritatis aut quae
              </h3>
              <a href="/blog/1" className="readmore stretched-a mt-auto">
                <span>Read More</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
