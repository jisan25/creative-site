// glbobal css
const NewsLetter = () => {
  return (
    <>
      {/* newsletter */}
      <div className="footer-newsletter">
        <div className="container-xl container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-6 hero-newsletter">
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
