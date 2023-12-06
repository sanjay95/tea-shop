import "./LastBlog.css";
import image1 from "../../../../images/products/steep.png";
import image2 from "../../../../images/products/aromas.png";

const LastBlog = () => {
  return (
    <div className="blog-container ">
      <h1 className="blog-container__heading">Last blog posts</h1>
      <div className="content-wrapper container">
        <div className="content">
          <div className="content-img__wrapper">
            <img className="content-img" src={image1} />
          </div>
          <div className="content-description">
            <h1 className="content-description__heading">
              How to steep Tea like a pro
            </h1>
            <p className="content-description__paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              expedita repudiandae eum rem reprehenderit aliquam quibusdam
              aperiam explicabo minus sed neque itaque dolorem amet autem
              ratione reiciendis magnam libero accusantium.
            </p>
            <button className="content-description__button">read more</button>
          </div>
        </div>
        <div className="content">
          <div>
            <img className="content-img" src={image2} />
          </div>
          <div className="content-description">
            <h1 className="content-description__heading">
              How to steep Tea like a pro
            </h1>
            <p className="content-description__paragraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates nihil nostrum sint, at fugiat ea numquam porro
              reprehenderit itaque, eveniet nobis cumque aliquid perspiciatis
              voluptatibus eius expedita dolor tempore ullam.
            </p>
            <button className="content-description__button">read more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastBlog;
