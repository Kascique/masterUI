ready(function() {
  nesting();
});

function nesting() {
  var large_screen = 992,
    medium_screen = 768,
    small_screen = 500;

  function checkNesting() {
    var w =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    var num_to_nest;
    var nest_menu = $get("#nesting");
    var nest_menu_btn = $get('[open-menu="nesting"]');
    var nest_btn = $all(".appbar .nest");

    if (w < large_screen) {
      num_to_nest = 1;
      if (w <= medium_screen && w >= small_screen) {
        num_to_nest = 2;
      } else if (w <= small_screen) {
        num_to_nest = nest_btn.length;
      }
    }
    for (var c = 0; c < nest_btn.length; c++)
      nest_btn[c].style.display = "block";
    nest_menu.innerHTML = "";
    nest_menu_btn.style.display = "none";
    for (var c = 0; c < num_to_nest; c++) {
      var icon_btn_title = nest_btn[c].getAttribute("title");
      var icon_title;
      if(icon_btn_title != null) {
        icon_title = " "+icon_btn_title
      }else{
        icon_title = "";
      }
      nest_menu_btn.style.display = "block";
      nest_btn[c].style.display = "none";
      nest_menu.innerHTML +=
        '<li><a href="#">' + nest_btn[c].innerHTML + icon_title + "</a></li>";
    }
  }
  checkNesting();
  addEvent(window, "resize", function(){
    checkNesting();
  });
}

function ready(callback) {
  // in case the document is already rendered
  if (document.readyState != "loading") callback();
  else if (document.addEventListener)
    // modern browsers
    document.addEventListener("DOMContentLoaded", callback);
  else
    // IE <= 8
    document.attachEvent("onreadystatechange", function() {
      if (document.readyState == "complete") callback();
    });
}

function call($class, $event, $func) {
  var elems = document.querySelectorAll($class);
  for (i = 0; i < elems.length; ++i) {
    elems[i].addEventListener($event, $func);
  }
}

function $get(e) {
  return document.querySelector(e);
}

function $all(e) {
  return document.querySelectorAll(e);
}

function hasClass(el, className) {
  if (el.classList) return el.classList.contains(className);
  else
    return !!el.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"));
}

function $addClass(el, className) {
  if (el.classList) el.classList.add(className);
  else if (!hasClass(el, className)) el.className += " " + className;
}

function $removeClass(el, className) {
  if (el.classList) el.classList.remove(className);
  else if (hasClass(el, className)) {
    var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
    el.className = el.className.replace(reg, " ");
  }
}

function addEvent(object, type, callback) {
    if (object == null || typeof(object) == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on"+type] = callback;
    }
}