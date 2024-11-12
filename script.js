fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    console.log(posts);

    const accordion = document.querySelector(".accordion");

    accordion.innerHTML = "<h1>FAQ</h1>";

    posts.forEach((post, index) => {
      const titleDiv = document.createElement("div");
      titleDiv.className = "title";
      titleDiv.textContent = `Section ${index + 1}: ${post.title}`;

      const descriptionDiv = document.createElement("div");
      descriptionDiv.className = "description";
      descriptionDiv.innerHTML = `<p>${post.body}</p>`;

      titleDiv.addEventListener("click", toggle);

      accordion.appendChild(titleDiv);
      accordion.appendChild(descriptionDiv);
    });
  })

  .catch((error) => {
    console.error("Error:", error);
  });

// _______med for loop_______
// (let i = 0; i < posts.length; i++) {
//   const post = posts[i];

//   // Create title div
//   const titleDiv = document.createElement('div');
//   titleDiv.className = 'title';
//   titleDiv.id = `section${i + 1}`;
//   titleDiv.textContent = post.title;

//   // Create description div
//   const descriptionDiv = document.createElement('div');
//   descriptionDiv.className = 'description';
//   descriptionDiv.innerHTML = `<p>${post.body}</p>`;

//   // Add both divs to accordion
//   accordion.appendChild(titleDiv);
//   accordion.appendChild(descriptionDiv);
// }

// A function that adds and remove the class "active" on the section you click on.
function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");
}

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
// const section1Element = document.getElementById("section1");
// const section2Element = document.getElementById("section2");
// const section3Element = document.getElementById("section3");

// section1Element.addEventListener("click", toggle);
// section2Element.addEventListener("click", toggle);
// section3Element.addEventListener("click", toggle);
