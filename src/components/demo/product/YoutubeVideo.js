const YoutubeVideo = () => {
  return (
    <div className="col-lg-7">
      <div className="portfolio-details-YoutubeVideo swiper">
        <div className="swiper-wrapper align-items-center">
          <iframe
            width="100%"
            height="710"
            src="https://www.youtube.com/embed/UalTfOIDQ7M?si=aNOy-BSktSq8OtNC"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default YoutubeVideo;
