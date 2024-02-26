let searchForm = document.querySelector('.search');

document.querySelector('#search-btn') .onclick = () =>{
    searchForm.classList.toggle('active');
}

let LoginForm = document.querySelector('.login');

document.querySelector('#login-btn') .onclick = () =>{
  LoginForm.classList.toggle('active');
}



// init Isotope
var $grid = $('.collection-list').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  resetFilterBtns();
  $(this).addClass('active-filter-btn');
  $grid.isotope({ filter: filterValue });
});

var filterBtns = $('.filter-button-group').find('button');
function resetFilterBtns(){
  filterBtns.each(function(){
    $(this).removeClass('active-filter-btn');
  });
}