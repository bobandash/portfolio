const animation = (() => {
  const allAnimatedElementsHidden = Array.from(document.querySelectorAll('.animation-hide'));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle('animation-hide', !entry.isIntersecting);
    })
  }, {
    threshold: 0,
  })

  allAnimatedElementsHidden.forEach(hiddenAnimatedElement => {
    observer.observe(hiddenAnimatedElement);
  })
  
})();

export default animation;