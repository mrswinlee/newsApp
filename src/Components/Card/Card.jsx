import React from "react";

const Card = ({ data }) => {
  // const readMore = (url) => {
  //   window.open(url);
  // };

  return (
    <div className="cardContainer">
      {data.map((curItem, id) => {
        if (!curItem.urlToImage) {
          return null;
        } else {
          return (
            <div className="card">
              <div key={id}>
                <img src={curItem.urlToImage} />
                <div className="cardContent">
                  <h3>{curItem.title}</h3>
                  <p className="title">{curItem.description}</p>
                  <a className="btn-link" href={curItem.url} target="_blank">
                    Read More
                  </a>
                  {/* <button onClick={() => readMore(curItem.url)}>Read More</button> */}
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Card;
