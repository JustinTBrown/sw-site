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
  // var topBarHr = $('#top-bar-hr');
  console.log(viewableOffset);
  if (viewableOffset < -70) {
    var styles = {
        // backgroundColor: '#fbf9f1',
        backgroundColor: '#fffefd',
        height: '80',
        borderBottom: 'none'
        // borderBottom: 'solid 1px rgba(0,0,0,0.1)'
    };
    // var hrStyles = {
    //   borderTop: 'none',
    //   borderBottom: 'none'
    // };
  } else {
    var styles = {
        backgroundColor: '#F7F2E1',
        height: '120',
        // borderBottom: 'none'
        borderBottom: 'solid 1px rgba(0,0,0,0.2)'
    };
    // var hrStyles = {
    //   borderTop: '1px solid rgba(0, 0, 0, 0.2)',
    //   borderBottom: '1px solid rgba(255, 255, 255, 0.3)'
    // };
  };
  topBar.css( styles );
  // topBarHr.css( hrStyles );
});

var nav = responsiveNav(".nav-collapse", { // Selector
  animate: true, // Boolean: Use CSS3 transitions, true or false
  transition: 284, // Integer: Speed of the transition, in milliseconds
  label: "Menu", // String: Label for the navigation toggle
  insert: "before", // String: Insert the toggle before or after the navigation
  customToggle: "", // Selector: Specify the ID of a custom toggle
  closeOnNavClick: false, // Boolean: Close the navigation when one of the links are clicked
  openPos: "static", // String: Position of the opened nav, relative or static
  navClass: "nav-collapse", // String: Default CSS class. If changed, you need to edit the CSS too!
  navActiveClass: "js-nav-active", // String: Class that is added to  element when nav is active
  jsClass: "js", // String: 'JS enabled' class which is added to  element
  init: function(){}, // Function: Init callback
  open: function(){}, // Function: Open callback
  close: function(){} // Function: Close callback
});