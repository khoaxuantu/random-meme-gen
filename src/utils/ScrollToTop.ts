export function ScrollToTop() {
  setTimeout(() => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, 100);
}
