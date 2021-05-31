function search(query) {
  let url = `https://api.tvmaze.com/search/shows?q=${query}`;
  fetch(url)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      const result = data.map((elem) => {
        let main = document.getElementById('main')
        main.innerHTML = `
          <h1 class="color">${'Name: ' + elem.show.name}</h1>
          <h1 class="color">${'Type: ' + elem.show.type}</h1>
          <h3 class="color">${'Language: ' + elem.show.language}</h3>
          <h3 class="color">${'Genres: ' + elem.show.genres}</h3>
          <h3 class="color">${'Premiered: ' + elem.show.premiered}</h3>
          <div class="flex">
          <h3 class="color">${'Summary: ' + elem.show.summary}</h3>
          <img src="${elem.show.image.medium}"/>
          </div>
        `
      });
      res(result);
    })
    .catch((err) => {
      const error = document.createElement("p");
      searchTv.innerHTML = error;
    });
}
function res(result) {
  let text = document.getElementById("text");
  text.innerHTML = "";
  const elem = document.createElement("li");
  elem.innerHTML = result;
  text.append(elem);
  const gender = document.getElementById('gender')
  console.log(result)
}
const searchTv = document.getElementById("searchTV");
if (searchTv.value.length === 0) {
  // alert("Заполните пожалуйста");
}
window.onload = () => {
  searchTv.addEventListener("keyup", function func() {
    search(searchTv.value);
  });
};
