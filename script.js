let animalContainer = document.getElementById('animal-info');
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
     let ourRequest = new XMLHttpRequest();
     ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
     ourRequest.onload = function () {
          let ourData = JSON.parse(ourRequest.responseText);
          renderHTML(ourData);
     }

     ourRequest.send();
});

function renderHTML(data) {
     let htmlString = ''

     for (i = 0; i < data.length; i++) {
          htmlString += "<p>" + data[i].name + "is a " + data[i].species + "that "
     }
     animalContainer.insertAdjacentHTML("beforeend", htmlString);
}
