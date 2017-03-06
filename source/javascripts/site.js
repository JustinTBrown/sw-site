// This is where it all goes :)
// http://stackoverflow.com/questions/11434735/change-element-style-on-page-scroll#11434786
// var win = window,
//     docEl = document.documentElement,
//     $topBar = document.getElementById('top-bar-container');

// win.onscroll = function(){
//    var sTop = (this.pageYOffset || docEl.scrollTop)  - (docEl.clientTop || 0);
//    $topBar.style.backgroundColor =  sTop > 100 ? "white":"transparent" ;
// };

// var targetOffset = $("#anchor-point").offset().top;

// var $w = $(window).scroll(function(){
//     if ( $w.scrollTop() > targetOffset ) {   
//         $('#voice2').css({"border-bottom":"2px solid #f4f5f8"});
//         $('#voice3').css({"border-bottom":"2px solid #2e375b"});
//     } else {
//       // ...
//     }
// });


$(window).scroll(function() {
  var viewableOffset = $("html").offset().top - $(window).scrollTop();
  var topBar = $('#top-bar-container');
  console.log(viewableOffset);
  if (viewableOffset < -70) {
    var styles = {
        backgroundColor: '#fbf9f1',
        height: '80',
        borderBottom: 'none'
    };
  } else {
    var styles = {
        backgroundColor: '#F7F2E1',
        height: '120',
        borderBottom: 'solid 1px rgba(0,0,0,0.2)'
    };
  };
  topBar.css( styles );
});