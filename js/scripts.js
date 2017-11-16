//back-end logic
function Reviews(movie, rating, comments) {
  this.movie=movie;
  this.rating=rating;
  this.comments=comments;
}




//UI logic
$(document).ready(function() {
  $(".movies").submit(function(event) {
    event.preventDefault();
    $(".movie-table").show();
    debugger;
    var movie = $("#movie-name").val();
    var rating = $("#rating").val();
    var comments = $("#comments").val();

    var newReview = new Reviews(movie, rating, comments);

    $(".table-body").append("<tr> <td>" + newReview.movie + "</td>" + "<td>" + newReview.rating + "</td>" + "<td>" + newReview.comments + "</td> </tr>")

  });



});
