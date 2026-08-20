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
    released: 3
  },
  {
    id: 1,
    title: "Forget Me",
    description: "Romance Saga - Coming Soon stay tuned",
    imageUrl: {
      src: "./assets/images/coming_soon.png",
      alt: "Coming Soon Story Cover Image"
    },
    author: "Freedom Adetoye",
    link: "./read/forget_me/index.html",
    seriesLength: 20,
    releasing: true,
    released: 0
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const storyContainer = document.getElementById('stories-container');
  
  if (storyContainer) {
    storyContainer.innerHTML = "";

    stories.forEach((story) => {
      const article = document.createElement('article');
      article.className = 'story-card';

      article.innerHTML = `
        <div class="card-image-wrapper">
          <img class="cover-img" src="${story.imageUrl.src}" alt="${story.imageUrl.alt}">
        </div>

        <div class="card-content">
          <div>
            <h3 class="story-title">${story.title}</h3>
            <p class="story-desc">${story.description}</p>
          </div>

          <div class="story-meta">
            <span class="author-name">by ${story.author}</span>
            <span class="release-count">${story.released}/${story.seriesLength} releases</span>
          </div>

          <div class="card-actions">
            <a href="${story.link}" class="btn-read">Start Reading</a>
            <button type="button" class="btn-save" aria-label="Save story">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </button>
          </div>
        </div>
      `;

      storyContainer.appendChild(article);
    });
  }

  // Mobile navigation toggle
  const menuBtn = document.getElementById('menu');
  const nav = document.querySelector('header nav');

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
    });
  }
});
