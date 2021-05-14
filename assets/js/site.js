document.onscroll = function(e) {
  var nav = document.getElementsByTagName('nav')[0];
  var links =  nav.getElementsByTagName('a');
  var last = null;
  
  for (var i = 0; i < links.length; i++) {
    let link = links[i];
    let id = link.href.split('#').pop();
    let element = document.getElementById(id);
    if (!element) {
      continue;
    }
    var bounds = element.getBoundingClientRect();
    if (bounds.top < window.innerHeight/2) {
      last = link;
    }
    link.style.opacity = 0.6;
  }
  
  if (last) {
    last.style.opacity = 1;
  }
}
