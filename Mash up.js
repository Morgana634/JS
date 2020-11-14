let cat = 'Hugo';
window.cat                  // undefined
var mouse = 'Henry';
window.mouse                // "Henry" 

function demo() {
  let annoyance = 'Mom';
  {
    let blocked = 'blocked';
    blocked;   // blocked
  }

  cat;         // Hugo
  mouse;       // Henry
  annoyance;   // Mom
  blocked      // ReferenceError 
  dog;         // ReferenceError
  another_dog; // undefined

  let dog = 'laughing dog'
  to;
  var another_dog = 'banjo kazooie';
}