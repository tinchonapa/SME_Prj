// Functionality to check if elements are visible

var scroll = window.requestAnimationFrame || function(callback){ window.setTimeout(callback, 1000/60)};

// grabing elements of interest and storing in array
var elementsToShow = document.querySelectorAll('.show-on-scroll');

// iterate through elem of interest and check if they are visible with isElementInViewport
function loop(){
  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });
  
  window.setTimeout(mapTransition, 1000/60)
  scroll(loop);

}

loop();

// Helper function from http://stackoverflow.com/a/7557433/274826
// Checks if the element is shown in the screen
function isElementInViewport(el){
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) 
    || 
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}


// respond to others visibility
function mapTransition() {
 if(document.querySelectorAll('.mn-header')[0].classList[2] == 'is-visible') {
  document.querySelector('.map').classList.add('not-visible');
  console.log('True')
  } else {
    document.querySelector('.map').classList.remove('not-visible'); 
    console.log('False');
  }
  // scroll(mapTransition)
}

// function test(callback){
//   window.setTimeout(callback, 1000/60)
// };