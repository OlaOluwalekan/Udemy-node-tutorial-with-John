const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const btn = document.querySelector(".btn-api");
const text = document.querySelector("#text");

// console.log(text);

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});

// const getParam = () => {
//   let param = text.value;
// };

btn.addEventListener("click", function () {
  let param = text.value;
  let url = `http://localhost:5000/api/users/${param}`;
  console.log(url);
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      // data.forEach((user) => {
      //   console.log(user);
      // });
    });
});

text.onkeyup = () => {
  let param = text.value;
  let url = `http://localhost:5000/api/query?search=${param}`;
  // console.log(url);
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      // data.forEach((user) => {
      //   console.log(user);
      // });
    });
};
