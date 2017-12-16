  //creating an object with all streamers
  const streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

  //creating a variable for the API Request
  const url = "https://wind-bow.gomix.me/twitch-api/";


  $(document).ready(function() {
   $("#menu-all").focus();
    streamers.forEach(function(streamer) {
      let currentUrl = `${url}channels/${streamer}?api-version=3&callback=?`;

      //AJAX Request
      $.ajax({
        type: 'GET',
        url: currentUrl,
        async: true,
        dataType: "jsonp",
        success: function(data) {
          // console.log(data);

          if (data.status != 404) {
            $(".streamers").append(`<li class="str-channel" id=${streamer}><img class="img-responsive" id="streamer-logo" src=${data.logo}><a href=${data.url} name=${data.display_name.toLowerCase()} target="_blank">${data.display_name}</a></li><br>`);
          }

          let streamersUrl = `${url}streams/${streamer}?api-version=3&callback=?`;
          $.ajax({
            type: 'GET',
            url: streamersUrl,
            async: true,
            dataType: "jsonp",

            success: function(json) {
              if (json.stream === null) {
                $('#' + streamer).append('<p class="status"><i class="fa fa-stop-circle"></i> Offline</p><hr>').addClass('offline');
              } else {
                $('#' + streamer).append('<p class="status"><i class="fa fa-play"></i> Online<br>Status: ' + json.stream.channel.status + '</p><hr>').addClass('online');
              }
            }
          });
        }
      });
    });
    $("#menu-offline").click(function() {
      $('li').removeClass('selected');
      $('li').filter('.online').addClass('hidden');
      $(this).addClass('selected');
      $('li').filter('.offline').removeClass('hidden');
    });

    $("#menu-all").click(function() {
      $('li').removeClass('hidden selected');
      $(this).addClass('selected');
    });

    $("#menu-online").click(function() {
      $('li').removeClass('selected');
      $('li').filter('.online').removeClass('hidden');
      $(this).addClass('selected');
      $('li').filter('.offline').addClass('hidden');
    });

    $('#search').keyup(function(e) {
      e.preventDefault();
      // Declare variables
      var searchedInput = this.value.toLowerCase();
      input = document.getElementById('search');
      ul = document.getElementsByClassName('streamers');
      li = document.getElementsByClassName('str-channel');

      // Loop through all list items, and hide those who don't match the search query
      for (i = 0; i < li.length; i++) {
           a = li[i].getElementsByTagName("a")[0];
           if (a.innerHTML.toLowerCase().indexOf(searchedInput) > -1) {
               li[i].style.display = "";
           } else {
               li[i].style.display = "none";

           }
       }

    });




  });
