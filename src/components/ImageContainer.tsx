import { useState } from "react";

export default function ImageContainer() {

  return(
    <div className="sl-l-container main-l-container m-5">
      <div className="row main-l-container__body">
        <div className="col-4 pb-4 main-c-blockquote">
        <h3 className="mb-5">Welcome to my random meme picker 😃</h3>
          <blockquote className="mb-4">
            All of the memes in my collection are stolen from the internet
          </blockquote>
          <div>
            <button className="main-c-button">
              Pick one...
            </button>
          </div>
        </div>
        <div className="col-8 main-c-image__box">
          <img src="save_in_prod.png" alt="" />
        </div>
      </div>
    </div>
  );
}
