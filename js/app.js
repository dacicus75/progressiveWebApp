const container = document.querySelector(".container")
const blogs = [
  { name: "Summer", image: "images/example-blog01.jpg" },
  { name: "Study", image: "images/example-blog02.jpg" },
  { name: "Winter", image: "images/example-blog03.jpg" },
  { name: "Nights", image: "images/example-blog04.jpg" },
  { name: "Concert", image: "images/example-blog05.jpg" },
  { name: "Festival", image: "images/example-blog06.jpg" },
  { name: "Fall", image: "images/example-blog07.jpg" },
  { name: "Swimming", image: "images/example-blog01.jpg" },
  { name: "Books", image: "images/example-blog02.jpg" },
]

const showBlogs = () => {
    let output = ""
    blogs.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Blog</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showBlogs)

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err));
    });
  }