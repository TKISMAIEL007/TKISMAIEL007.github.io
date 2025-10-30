// app.js
// Travis Talks Life – Dynamic Blog Rendering (JSON version)

fetch('blogPosts.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const posts = data.posts;
    const container = document.getElementById('blog-container');

    if (!posts || posts.length === 0) {
      container.innerHTML = '<p>No blog posts found.</p>';
      return;
    }

    // Clear any existing content
    container.innerHTML = '';

    // Sort posts by date (newest first)
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Render each post
    posts.forEach(post => {
      const article = document.createElement('article');
      article.classList.add('blog-post');

      // Convert ISO date to display format
      const dateObj = new Date(post.date + 'T00:00:00Z');
      const formattedDate = dateObj.toLocaleDateString('en-ZA', {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      });

      // Inject post content
      article.innerHTML = `
        <h2>${post.title}</h2>
        <p class="post-meta">Published ${formattedDate}</p>
        ${post.html || ''}
      `;

      container.appendChild(article);
    });
  })
  .catch(error => {
    console.error('Error loading blog posts:', error);
    const container = document.getElementById('blog-container');
    container.innerHTML = `
      <p>Sorry, there was an error loading the blog posts.</p>
      <p><em>${error.message}</em></p>
    `;
  });
