const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

//Question 1
const cat = {
  complain: function () {
    console.log("Meow!");
  },
};

cat.complain();

//Question 2
const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

//Question 3
heading.style.fontSize = "2em";

//Question 4
heading.classList.add("subheading");

//Question 5
const paragraphs = document.querySelectorAll("p");
paragraphs.forEach((paragraph) => (paragraph.style.color = "red"));

//Question 6
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New Paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

//Question 7
let logName = (list) => {
  list.forEach((object) => console.log(object.name));
};

logName(cats);

//Question 8
let createCats = (cats) => {
  let html = "";
  cats.forEach((cat) => {
    let catName = cat.name;
    let catAge = cat.age ? cat.age : "Age unknown";
    html += `
    <div>
      <h5>${catName}</h5>
      <p>${catAge}</p>
    </div>`;
  });
  return html;
};

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = createCats(cats);

/* I used the array method .forEach() rather than the for loop as it is neater. */

/*I used an arrow function for the callback functions inside .forEach(), again to make the code clearer, plus it is not a method of an object or class doesn't matter in this instance that it is not bound. */

/*Used ternary operater to return cat age or a default message if not known. It is an expression that returns a value rather than an if...else statement which doesn't. */
