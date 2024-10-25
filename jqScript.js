let pageCounter = 1;
const $animalContainer = $('#animal-info');
const $btn = $('#btn');

$btn.on('click', () => {
     $.ajax({
          type: 'GET',
          url: ` https://learnwebcode.github.io/json-example/animals-${pageCounter}.json`,
          success: function (data) {
               renderHTML(data);
               pageCounter++;
               if (pageCounter > 3) {
                    $btn.addClass('hide-me');
               }
          },
          error: function () {
               console.log('You messed up idiot');
          }
     });
});

function renderHTML(data) {
     let htmlString = ''

     data.forEach(animal => {
          htmlString += `<p> ${animal.name} is a ${animal.species} that likes to eat `;

          animal.foods.likes.forEach((food, index) => {
               htmlString += index === 0 ? food : ` and ${food}`
          });

          htmlString += ' and dislikes ';

          animal.foods.dislikes.forEach((food, index) => {
               htmlString += index === 0 ? food : ` and ${food}`
          });
          htmlString += '.</p>'
     });
     $animalContainer.append(htmlString);
}