$( document ).ready(function() {

// 1_navbar script start
    $('#hamburger-icon').on('click', function() {
	$('#topnav').toggleClass('responsive');
    });
// 1_navbar script end


// 5_tabs script start
// add a click event listener on all divs with the class button
$('.tabs-button').on('click', function(){
  // deselect all button
  $('.tabs-button').removeClass('selected');
  //select only to the clicked button
  $(this).addClass('selected');
  //hide all text tabs
  $('.tab').addClass('hide');
  //create id of the tab corresponding to the clicked button
  const tabText ='#' + $(this).attr('id').slice(0, -7) + '-text';
  //remove class from the clicked tab
  $(tabText).removeClass('hide');
});
//5_tabs script end

//4_carousel script begin

function createSlick(){  

    $(".slider").not('.slick-initialized').slick({
      autoplay: true,
      dots: true,
      responsive: [{ 
        breakpoint: 500,
        settings: {
          dots: true,
          arrows: true,
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 2
        } 
      }]
    }); 

  }

  createSlick();

//Now it will not throw error, even if called multiple times.
$(window).on( 'resize', createSlick );

//4_carousel script end

});
