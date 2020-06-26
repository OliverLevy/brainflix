import React from "react";
import { Link } from "react-router-dom";
import "./SideVideo.scss";

function SideVideo({ data, mainVid }) {
  let upNext = data.filter((item) => item.id !== mainVid.id);
  return (
    <div className="up-next">
      <h5 className="up-next__header">NEXT VIDEO</h5>
      {upNext.map((item) => {
        return (
          <Link key={item.id} to={`/video/${item.id}`}>
            <div className="up-next__card">
              <div className="up-next__img-container">
                <img
                  src={process.env.PUBLIC_URL + item.image}
                  alt={item.title}
                  className="up-next__img"
                />
              </div>
              <div className="up-next__text">
                <h3 className="up-next__text-title">{item.title}</h3>
                <p>{item.channel}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default SideVideo;
