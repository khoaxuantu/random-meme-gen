import { useEffect } from "react";

export default function Navbar() {
  const CLASS_PREFIX = 'sl-c-navbar';

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  function handleClick(e: MouseEvent) {
    const target = e.target as HTMLElement;
    const btn = document.querySelector(`.${CLASS_PREFIX}__expand-btn`) as HTMLElement;
    if (target.className !== `${CLASS_PREFIX}__expand-btn hide` &&
      target.className !== CLASS_PREFIX &&
      btn.classList.contains('hide')) handleExpand();
  }

  function handleExpand() {
    const btn = document.querySelector(`.${CLASS_PREFIX}__expand-btn`) as HTMLElement;
    const navbarItemList = document.getElementsByClassName(`${CLASS_PREFIX}__item`) as HTMLCollectionOf<HTMLElement>;

    for (const item of navbarItemList) {
      item.classList.toggle('display');
    }
    btn.classList.toggle('hide');
  }

  return (
    <nav className="sl-c-navbar">
      <ul className="p-2">
        <li className="sl-c-navbar__brand ps-2 pt-2 pb-2 pe-4">
          <a href="/">
            <h2>TUS'S MEMES</h2>
          </a>
        </li>
        <li className="">
          <button className="sl-c-navbar__expand-btn" onClick={handleExpand}></button>
        </li>
        <li className="p-2 sl-c-navbar__item">
          <a href="/">Gallery</a>
        </li>
        <li className="p-2 sl-c-navbar__item">
          <a href="https://xuankhoatu.com/about" target="_blank">Tuslipid</a>
        </li>
      </ul>
    </nav>
  );
}
