document.addEventListener("DOMContentLoaded", function () {
  const blogContainer = document.getElementById("blog-container");

  fetch("blogPosts.json")
    .then((response) => response.json())
    .then((posts) => {
      posts.forEach((post) => {
        const postDiv = document.createElement("div");
        postDiv.classList.add("blog-post");

        postDiv.innerHTML = `
          <h2>${post.title}</h2>
          <p class="post-date">${new Date(post.date).toLocaleDateString()}</p>
          <p>${post.content.replace(/\n/g, "<br>")}</p>
          <hr>
        `;

        blogContainer.appendChild(postDiv);
      });
    })
    .catch((error) => {
      console.error("Error loading blog posts:", error);
      blogContainer.innerHTML = "<p>Failed to load blog posts.</p>";
    });
});
