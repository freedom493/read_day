const stories = [
  {
    id: 1,
    title: "The Praised Fool",
    imageUrl: {
      src: "./assets/images/cover_image.png",
      alt: "The Praised Fool Cover Image"
    },
    author: "Freedom Adetoye",
    link: "./read/the_praised_fool.html"
  }
]

document.addEventListener('DOMContentLoaded', () => {
  const storyContainer = document.getElementById('stories-container')

  stories.forEach((story) => {
    const article = document.createElement('article')

    article.innerHTML = `
    <img class="cover-img" src="${story.imageUrl.src}" alt="${story.imageUrl.alt}">
    <div class="author">By ${story.author}</div>
    <div class="story-desc">
      <h3>${story.title}</h3>
      <div class="cta-btn">
        <a href="${story.link}">Start Reading</a>
      </div>
    </div>
    `

    storyContainer.appendChild(article)
  });
})