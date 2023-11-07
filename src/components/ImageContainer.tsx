import { useState } from "react";

const CDN_URL = Bun.env.CDN_URL;

export default function ImageContainer() {
  const [ imgURL, setImageURL ] = useState("save_in_prod.webp");

  function pickImgHandler() {
    const id = getRandom(860);
    setImageURL(`${CDN_URL}/${id}.jpg`);
  }

  return(
    <div className="sl-l-container main-l-container m-5">
      <div className="row main-l-container__body">
        <div className="col-4 pb-4 main-c-blockquote">
        <h3 className="mb-5">Welcome to my random meme picker 😃</h3>
          <blockquote className="mb-4">
            All of the memes in my collection are stolen from the internet
          </blockquote>
          <div>
            <button className="main-c-button" onClick={pickImgHandler}>
              Pick one...
            </button>
          </div>
        </div>
        <div className="col-8 main-c-image__box">
          <img src={imgURL} alt="" />
        </div>
      </div>
    </div>
  );
}

function getRandom(n: number) {
  return Math.ceil(Math.random() * n);
}
