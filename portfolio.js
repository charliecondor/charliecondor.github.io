const sections = document.querySelectorAll('section');

/*
sections.forEach(section => {
  section.addEventListener('click', () => {
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    });
  });
});
*/
window.addEventListener('touchstart', (event) => {
    const startY = event.touches[0].clientY;

    window.addEventListener('touchmove', (event) => {
        const currentY = event.touches[0].clientY;
        const deltaY = startY - currentY;

        if (deltaY > 1) {
            window.scrollTo({
                top: window.scrollY + window.innerHeight,
                behavior: 'smooth'
              });
        } else if (deltaY < -1) {
            window.scrollTo({
                top: window.scrollY - window.innerHeight,
                behavior: 'smooth'
              });
        }
    })
})

window.addEventListener('wheel', (event) => {
  if (event.deltaY > 0) {
    // Scroll down
    window.scrollTo({
      top: window.scrollY + window.innerHeight,
      behavior: 'smooth'
    });
  } else {
    // Scroll up
    window.scrollTo({
      top: window.scrollY - window.innerHeight,
      behavior: 'smooth'
    });
  }
});