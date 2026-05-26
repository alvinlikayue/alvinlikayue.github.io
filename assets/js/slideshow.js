document.querySelectorAll('[data-slideshow]').forEach((slideshow) => {
  const slides = Array.from(slideshow.querySelectorAll('.slideshow-slide'));

  if (slides.length <= 1) {
    return;
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const interval = Number(slideshow.dataset.interval || 5000);
  let index = 0;
  let timer = null;

  const controls = document.createElement('div');
  controls.className = 'slideshow-controls';

  const captionPanel = document.createElement('div');
  captionPanel.className = 'slideshow-caption-panel';

  const prevButton = document.createElement('button');
  prevButton.type = 'button';
  prevButton.className = 'slideshow-nav slideshow-prev';
  prevButton.setAttribute('aria-label', 'Previous figure');
  prevButton.innerHTML = '&#8249;';

  const nextButton = document.createElement('button');
  nextButton.type = 'button';
  nextButton.className = 'slideshow-nav slideshow-next';
  nextButton.setAttribute('aria-label', 'Next figure');
  nextButton.innerHTML = '&#8250;';

  const dots = document.createElement('div');
  dots.className = 'slideshow-dots';

  const dotButtons = slides.map((slide, slideIndex) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'slideshow-dot';
    button.setAttribute('aria-label', `Show figure ${slideIndex + 1} of ${slides.length}`);
    button.setAttribute('aria-pressed', slideIndex === 0 ? 'true' : 'false');
    dots.appendChild(button);
    return button;
  });

  controls.appendChild(prevButton);
  controls.appendChild(dots);
  controls.appendChild(nextButton);
  slideshow.appendChild(captionPanel);
  slideshow.appendChild(controls);

  const clearTimer = () => {
    if (timer !== null) {
      window.clearInterval(timer);
      timer = null;
    }
  };

  const startTimer = () => {
    if (reduceMotion || timer !== null) {
      return;
    }

    timer = window.setInterval(() => {
      setActive((index + 1) % slides.length);
    }, interval);
  };

  const setActive = (nextIndex) => {
    slides[index].classList.remove('is-active');
    slides[index].setAttribute('aria-hidden', 'true');
    dotButtons[index].setAttribute('aria-pressed', 'false');

    index = (nextIndex + slides.length) % slides.length;

    slides[index].classList.add('is-active');
    slides[index].setAttribute('aria-hidden', 'false');
    dotButtons[index].setAttribute('aria-pressed', 'true');

    const caption = slides[index].querySelector('.slideshow-caption');
    captionPanel.textContent = caption ? caption.textContent : '';
  };

  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle('is-active', slideIndex === 0);
    slide.setAttribute('aria-hidden', slideIndex === 0 ? 'false' : 'true');
  });
  captionPanel.textContent = slides[0].querySelector('.slideshow-caption')?.textContent || '';

  prevButton.addEventListener('click', () => {
    clearTimer();
    setActive(index - 1);
    startTimer();
  });

  nextButton.addEventListener('click', () => {
    clearTimer();
    setActive(index + 1);
    startTimer();
  });

  dotButtons.forEach((button, slideIndex) => {
    button.addEventListener('click', () => {
      clearTimer();
      setActive(slideIndex);
      startTimer();
    });
  });

  const pause = () => {
    clearTimer();
  };

  const resume = () => {
    startTimer();
  };

  slideshow.addEventListener('mouseenter', pause);
  slideshow.addEventListener('focusin', pause);
  slideshow.addEventListener('mouseleave', resume);
  slideshow.addEventListener('focusout', resume);
  slideshow.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      clearTimer();
      setActive(index - 1);
      startTimer();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      clearTimer();
      setActive(index + 1);
      startTimer();
    }
  });

  startTimer();
});
