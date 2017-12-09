function openNewTab(evt, tabsName) {
    var i, tabcontent, tablinks;
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
var streamers= ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

//creating a variable for the API Request
var url="https://wind-bow.gomix.me/twitch-api";


//AJAX Request
$.ajax({
  type: 'GET',
  url: url,
  async: true,
  dataType: "jsonp",
  success: function(data) {
    console.log(data);
}
});
