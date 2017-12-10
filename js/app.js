function openNewTab(evt, tabsName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabsName).style.display = "block";
  evt.currentTarget.className += " active";
}

//creating an object with all streamers
const streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

//creating a variable for the API Request
const url = "https://wind-bow.gomix.me/twitch-api/users/";
$(document).ready(function() {

  streamers.forEach(function(streamer) {
    let currentUrl = `${url}${streamer}?api-version=3&callback=?`;
    //AJAX Request
    $.ajax({
      type: 'GET',
      url: currentUrl,
      async: true,
      dataType: "jsonp",
      success: function(data) {
        console.log(data);
         if(data.status !=404) {
        $(".streamers").append(`<li><img class="img-responsive" id="streamer-logo" src=${data.logo}><a href=${data._links.self} name=${data.display_name.toLowerCase()} target="_blank">${data.display_name}</a></li><br>`);
      }
      }
    });

  });

});
