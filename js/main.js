$('select').change(function () {

  var select = $('select').val();

  var url = 'https://api.nytimes.com/svc/topstories/v2/' + select + '.json';
  url += '?' + $.param({
    'api-key': 'b004981c2f014cbaa934004bdf7f33b3'
  });


  $.ajax({
    url: url,
    method: 'GET',

    //show loading gif

    beforeSend: function () {
      $('.loading').append('<img src=\'images/ajax-loader.gif\' />').css({
        'display': 'flex',
        'width': '100%'
      });
    },

    success: function (data) {

      // first one for testing purposes 
      // $('.loading').append('<img src=\'/images/ajax-loader.gif\' />').css({"display": "flex", "width": "100%"});


      $('.stories').empty();

      //show stories

      for (var i = 0; i < 12; ++i) {
        if (data.results[i].multimedia[4]) {
          $('.stories').append('<a href=\'' + data.results[i].url + '\' class=\'newslink\'><div class=\'newsbackground\' style=\'background-image: url(' + data.results[i].multimedia[4].url + ')\'> <p class = \'newstitle\'>' + data.results[i].abstract + '</p></div></a>');


        } else {
          data.results.splice(i, 1);
          i--;
        }
        // console.log(data.results[i].multimedia);

      }

    },

  });

})


var select = $('select').val();

$('select').change(function () {

  if ($('header').width() < 600) {

    $('.logo').animate({

      width: '10rem',
      height: 'auto',
    });
  } else {

    $('.logo').animate({

      width: '5rem',
      marginRight: '3rem',
      marginLeft: '0rem',
      height: 'auto',


    });

  }


});



$('select').change(function () {
  $('header').animate({

    height: 'auto',
    marginLeft: '0rem',
    marginTop: '1rem',

  });
});