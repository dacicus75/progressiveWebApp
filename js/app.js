const container = document.querySelector(".container")
const blogs = [
  { name: "Blog1", image: "images/example-blog01.jpg" },
  { name: "Blog2", image: "images/example-blog02.jpg" },
  { name: "Blog3", image: "images/example-blog03.jpg" },
  { name: "Blog4", image: "images/example-blog04.jpg" },
  { name: "Blog5", image: "images/example-blog05.jpg" },
  { name: "Blog6", image: "images/example-blog06.jpg" },
  { name: "Blog7", image: "images/example-blog07.jpg" },
  { name: "Blog8", image: "images/example-blog01.jpg" },
  { name: "Blog9", image: "images/example-blog02.jpg" },
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