$(window).scroll(function() {
       var height = $(window).scrollTop();
       if (height > 100) {
            $("div#shopify-section-header-01-gummy").addClass("activecopy");
       } else {
          $('div#shopify-section-header-01-gummy').removeClass('activecopy');
       }


   });