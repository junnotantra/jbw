/*!
 * Start Bootstrap - Stylish Portfolio (http://startbootstrap.com/)
 * Copyright 2013-2017 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */

(function($) {
  "use strict"; // Start of use strict

  // Closes the sidebar menu
  $("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });

  // Opens the sidebar menu
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $("#sidebar-wrapper").removeClass("active");
  });

  //#to-top button appears after scrolling
  var fixed = false;
  $(document).scroll(function() {
    if ($(this).scrollTop() > 250) {
      if (!fixed) {
        fixed = true;
        $('#to-top').show("slow", function() {
          $('#to-top').css({
            position: 'fixed',
            display: 'block'
          });
        });
      }
    } else {
      if (fixed) {
        fixed = false;
        $('#to-top').hide("slow", function() {
          $('#to-top').css({
            display: 'none'
          });
        });
      }
    }
  });

})(jQuery); // End of use strict

// Disable Google Maps scrolling
// See http://stackoverflow.com/a/25904582/1607849
// Disable scroll zooming and bind back the click event
var onMapMouseleaveHandler = function(event) {
  var that = $(this);
  that.on('click', onMapClickHandler);
  that.off('mouseleave', onMapMouseleaveHandler);
  that.find('iframe').css("pointer-events", "none");
}
var onMapClickHandler = function(event) {
  var that = $(this);
  // Disable the click handler until the user leaves the map area
  that.off('click', onMapClickHandler);
  // Enable scrolling zoom
  that.find('iframe').css("pointer-events", "auto");
  // Handle the mouse leave event
  that.on('mouseleave', onMapMouseleaveHandler);
}
// Enable map zooming with mouse scroll when the user clicks the map
$('.map').on('click', onMapClickHandler);

(function (EasterEgg, $) {
  var pos = 0;
  var patternDisplay= ['↑', '↑', '↓', '↓', '←', '→', '←', '→', 'B', 'A'];
  var active= false;
  new EasterEgg({
    pattern: [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
    patternTouch: ['↑', '↑', '↓', '↓', '←', '→', '←', '→', 'tap', 'tap'],

    /* onSuccess can either be an url or a function. */
    // onSuccess: 'http://google.com',
    onSuccess: function() {
	  pos = 0;
      $('#easter-key').html('');
	  $('#open-invitation').trigger('click');
    },

    onCorrectInput: function(entered, current, pattern) {
	  active = true;
      $('#easter-key').append('<span class="key">' + patternDisplay[pos] + '</span>');
	  pos = pos + 1;
    },

    onComboBreak: function(entered, current, pattern) {
	  if(active){
		  pos = 0;
		  $('#easter-key').html('');
		  active = false;
	  }
    }
  });

})(window.easterEgg, window.jQuery);

(function (EasterEgg, $) {
  var pos = 0;
  var patternDisplay= ['X','T','R','E','M','A','X'];
  var active= false;
  new EasterEgg({
    pattern: [88, 84, 82, 69, 77, 65, 88],

    /* onSuccess can either be an url or a function. */
    // onSuccess: 'http://google.com',
    onSuccess: function() {
	  pos = 0;
      $('#easter-key').html('');
	  alert('Xtreme to the max');
    },

    onCorrectInput: function(entered, current, pattern) {
	  active = true;
      $('#easter-key').append('<span class="key">' + patternDisplay[pos] + '</span>');
	  pos = pos + 1;
    },

    onComboBreak: function(entered, current, pattern) {
	  if(active){
		  pos = 0;
		  $('#easter-key').html('');
		  active = false;
	  }
    }
  });

})(window.easterEgg, window.jQuery);


simplyCountdown('.simply-countdown', {
            year: 2017, // required
            month: 12, // required
            day: 3, // required
            hours: 7, // Default is 0 [0-23] integer
            minutes: 0, // Default is 0 [0-59] integer
            seconds: 0, // Default is 0 [0-59] integer
            words: { //words displayed into the countdown
                days: 'day',
                hours: 'hour',
                minutes: 'minute',
                seconds: 'second',
                pluralLetter: 's'
            },
            plural: true, //use plurals
            inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
            inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
            // in case of inline set to false
            enableUtc: false,
            onEnd: function () {
                // your code
                return;
            },
            refresh: 1000, //default refresh every 1s
            sectionClass: 'simply-section', //section css class
            amountClass: 'simply-amount', // amount css class
            wordClass: 'simply-word' // word css class
    });