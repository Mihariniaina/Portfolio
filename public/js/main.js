var serverhost= "http://localhost:3000/";
// var serverhost= "https://api.rilah-mario.com/";

(function ($) {
  "use strict";
  updateClickStat("pageReload");

  //get page visit number
  $.ajax({
    url: serverhost+"getLineCount",
    method: "GET",
    dataType: "json",
    success: function(data) {
      // The success callback function
      const pageVisitNumber = data.lineCount;
      $('#result').text(pageVisitNumber);
    },
    error: function(xhr, status, error) {
      console.error("Error:", error);
    }
  });

  // Get the user's IP address using a public API
  $.getJSON("https://api.ipify.org?format=json", function(data) {
    var ipAddress = data.ip;
    var userAgent = navigator.userAgent;
    updateVisitInfo(ipAddress, userAgent);
  });

  // loader
  var loader = function () {
      setTimeout(function () {
          if ($('#loader').length > 0) {
              $('#loader').removeClass('show');
          }
      }, 1);
  };
  loader();
  
  
  // Initiate the wowjs
  new WOW().init();
  
  
  // Back to top button
  $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
          $('.back-to-top').fadeIn('slow');
      } else {
          $('.back-to-top').fadeOut('slow');
      }
  });
  $('.back-to-top').click(function () {
      $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
      return false;
  });
  
  
  // Sticky Navbar
  $(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
          $('.navbar').addClass('nav-sticky');
      } else {
          $('.navbar').removeClass('nav-sticky');
      }
  });
  
  
  // Smooth scrolling on the navbar links
  $(".navbar-nav a").on('click', function (event) {
      if (this.hash !== "") {
          event.preventDefault();
          
          $('html, body').animate({
              scrollTop: $(this.hash).offset().top - 45
          }, 1500, 'easeInOutExpo');
          
          if ($(this).parents('.navbar-nav').length) {
              $('.navbar-nav .active').removeClass('active');
              $(this).closest('a').addClass('active');
          }
      }
  });
  
  
  // Typed Initiate
  if ($('.hero .hero-text h2').length === 1) {
      var typed_strings = $('.hero .hero-text .typed-text').text();
      var typed = new Typed('.hero .hero-text h2', {
          strings: typed_strings.split(', '),
          typeSpeed: 100,
          backSpeed: 20,
          smartBackspace: false,
          loop: true
      });
  }
  
  
  // Skills
  $('.skills').waypoint(function () {
      $('.progress .progress-bar').each(function () {
          $(this).css("width", $(this).attr("aria-valuenow") + '%');
      });
  }, {offset: '80%'});


  // Testimonials carousel
  $(".testimonials-carousel").owlCarousel({
      center: true,
      autoplay: true,
      dots: true,
      loop: true,
      responsive: {
          0:{
              items:1
          }
      }
  });
  
  // Portfolio filter
  var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
  });

  $('#portfolio-filter li').on('click', function () {
      $("#portfolio-filter li").removeClass('filter-active');
      $(this).addClass('filter-active');
      portfolioIsotope.isotope({filter: $(this).data('filter')});
  });
  
})(jQuery);

function sendMail(){
    var senderName = document.getElementById('senderName').value;
    var senderEmail = document.getElementById('senderEmail').value;
    var objectEmail = document.getElementById('object').value;
    var messageEmail = document.getElementById('message').value;
    if(senderName && senderEmail && objectEmail && messageEmail){
      (function ($) {
        const body = {
          senderName: senderName,
          senderEmail: senderEmail,
          objectEmail: objectEmail,
          messageEmail: messageEmail
    
        };
        //show loader
        $('#loader').addClass('show');
        updateClickStat('sendMail');
        $.ajax({
            url: serverhost+"sendMail",
            type: "POST",
            data: body,
            dataType: "json",
            crossDomain: true,  // Indicate that this is a cross-domain request
            xhrFields: {
              withCredentials: false  // Include cookies in the request if necessary
            },
            success: function(data, status, jqXHR) {
              console.log("data: ", data);
              console.log("status: ", status);
              console.log("jqXHR.status: ", jqXHR.status);
              
              if (jqXHR.status === 200) {
                $('#notification').addClass('show');
                setTimeout(function () {
                  $('#notification').removeClass('show');
                }, 3000);
              } else {
                $('#error').addClass('show');
                setTimeout(function () {
                  $('#error').removeClass('show');
                }, 3000);
              }
          
              document.getElementById('senderName').value = "";
              document.getElementById('senderEmail').value = "";
              document.getElementById('object').value = "";
              document.getElementById('message').value = "";
              
              $('#loader').removeClass('show');
            },
            error: function(jqXHR, textStatus, errorThrown) {
              $('#loader').removeClass('show');
              $('#error').addClass('show');
              setTimeout(function () {
                $('#error').removeClass('show');
              }, 3000);
              console.error("Request error:", textStatus, errorThrown);
            }
        });  
      })(jQuery);
    }
    return false;
}

function closeNotification(status){
    (function ($) {
        if(status == 200){
            $('#notification').addClass('show');
            setTimeout(function () {
              $('#notification').removeClass('show');
            }, 3000);
          } else{
            $('#error').addClass('show');false
            setTimeout(function () {
              $('#error').removeClass('show');
            }, 3000);
          }
    })(jQuery);
}

function updateVisitInfo(ip, userAgent) {
  const body = {
    data: ip + "||" + userAgent
  };
  $.ajax({
      type: "POST",
      url: serverhost+"updateFile",
      data: body,
      dataType: "json",
      success: function(data, response) {
        console.log("success");
      },
      error: function(error) {
        console.error(error);
      }
  });
}


//CLICK COUNTER
function updateClickStat(element){
  console.log("update statistic:", element);

  const body = {
    data: element,
  };

  //update reload number
  $.ajax({
    type: "POST",
    url: serverhost+"updateClickStat",
    data: body,
    dataType: "json",
    success: function(data, response) {
      console.log("success");
    },
    error: function(error) {
      console.error(error);
    }
  });
}
