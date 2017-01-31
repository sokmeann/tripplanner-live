$(document).ready(function(){

  // VARIABLE DECLARATION
  const hotelBtn = $('.options > button')[0];
  const restaurantBtn = $('.options > button')[1];
  const activityBtn = $('.options > button')[2];
  const $selectOption = $('.options > select');
  const $selectTitle = $('#itinerary .itinerary-item');
  const $map = document.getElementById('map-canvas');

  // MAP MARKER FUNCTIONS
  var iconURLs = {
    hotel: '/images/lodging_0star.png',
    restaurant: '/images/restaurant.png',
    activity: '/images/star-3.png'
  };

  function drawMarker (type, coords) {
    var latLng = new google.maps.LatLng(coords[0], coords[1]);
    var iconURL = iconURLs[type];
    var marker = new google.maps.Marker({
      icon: iconURL,
      position: latLng
    });
    marker.setMap($map);
  }

  function getCoords(name){
    for(let i = 0; i < hotels.length; i++){
      if(hotels[i].name === name) return hotels[i].place.location;
    }
  }

  // OPTIONS SELECT & APPEND
  $(hotelBtn).on('click', function(){
    const hotelValue = $selectOption[0].value;
    $($selectTitle[0]).html('<span class="title">' + hotelValue + '</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></br>');
    drawMarker('hotel', getCoords(hotelValue));
    console.log(hotelValue);
  });

  $(restaurantBtn).on('click', function(){
    const restaurantValue = $selectOption[1].value;
    $($selectTitle[1]).append('<span class="title">' + restaurantValue + '</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></br>');
    console.log(restaurantValue);
  });

  $(activityBtn).on('click', function(){
    const activityValue = $selectOption[2].value;
    // $($selectTitle[2]).append(activityValue);
    $($selectTitle[2]).append('<span class="title">' + activityValue + '</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></br>');
    console.log(activityValue);
  });




});
