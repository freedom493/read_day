const stories = [
  {
    id: 1,
    title: "The Praised Fool",
    description: "A silent 100-level law student navigates the heavy price of constant praise, heavy expectations, and everyday campus struggles.",
    imageUrl: {
      src: "./assets/images/cover_image.png",
      alt: "The Praised Fool Cover Image"
    },
    author: "Freedom Adetoye",
    link: "./read/the_praised_fool.html",
    seriesLength: 30,
    releasing: true,
    released: 2
  }
];

document.addEventListener('DOMContentLoaded', () => {
  // 1. Render Stories dynamically
  const storyContainer = document.getElementById('stories-container');
  
  if (storyContainer) {
    stories.forEach((story) => {
      const article = document.createElement('article');

      article.innerHTML = `
        <div class="card-image-wrapper">
          <img class="cover-img" src="${story.imageUrl.src}" alt="${story.imageUrl.alt}">
          <div class="author-badge">By ${story.author}</div>
          <div class="progress-badge">
            <span class="dot ${story.releasing ? 'live' : ''}"></span>
            ${story.released}/${story.seriesLength} Days
          </div>
        </div>
        <div class="story-desc">
          <h3>${story.title}</h3>
          <p class="story-snippet">${story.description}</p>
          <div class="cta-btn">
            <a href="${story.link}">Start Reading</a>
          </div>
        </div>
      `;

      storyContainer.appendChild(article);
    });
  }

  // 2. Mobile Menu Toggle Logic
  const menuBtn = document.getElementById('menu');
  const nav = document.querySelector('header nav');

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
      menuBtn.classList.toggle('open');
    });
  }
});