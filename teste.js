function typeWriter(texto, i, fnCallback) {
    if (i < texto.length) {
        document.getElementById("texto-animado").innerHTML += texto.charAt(i);
        i++;
        setTimeout(function() {
            typeWriter(texto, i, fnCallback)
        }, 100);
    } else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 700);
    }
}

window.onload = function() {
};


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('image-animation');
      }
    });
  });
  
  const viewbox = document.querySelectorAll('.ani');
  viewbox.forEach(image => {
    observer.observe(image);
  });

  var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); 
}