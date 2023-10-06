console.log("Let's get this party started!");
const $gif = $("#gif-area");
const $getInput = $("#search");
/* Add a gif */
function addGif(gif_result) {
  let num_res = gif_result.data.length;
  if (num_res) {
    let randomId = Math.floor(Math.random() * num_res);
    let $newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
    let $newGif = $("<img>", {
      src: gif_result.data[randomId].images.original.url,
      class: "w-100"
    });
    $newCol.append($newGif);
    $gif.append($newCol);
  }
}
/*submit form */
$("form").on("submit", async function (evt) {
  evt.preventDefault();

  let searchedWord = $getInput.val();
  $getInput.val("");

  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchedWord,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
    }
  });
  addGif(response.data);
});




/* remove gif */

$("#remove").on("click", function () {
  $gif.empty();
});
