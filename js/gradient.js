/**
 * Matericious v0.7.0 (https://matericious.com/)
 * Copyright 2018 Matericious Authors
 * Licensed under MIT (https://github.com/Matericious/Matericious/blob/master/LICENSE)
 */

"use strict";

function ready(callback) {
  if (document.readyState != "loading") callback();else if (document.addEventListener) 
    document.addEventListener("DOMContentLoaded", callback);else 
    document.attachEvent("onreadystatechange", function () {
      if (document.readyState == "complete") callback();
    });
}

function call($class, $event, $func) {
  var elems = document.querySelectorAll($class);

  for (var i = 0; i < elems.length; ++i) {
    addEvent(elems[i], $event, $func);
  }
}

function $handle(callback) {
  try {
    callback();
  } catch (err) {}
}

function $getChild(parent, child, n) {
  return document.querySelectorAll(parent + ' ' + child)[n];
}

function $get(e) {
  return document.querySelector(e);
}

function $all(e) {
  return document.querySelectorAll(e);
}

function hexToRgb(hex) {
  var bigint = parseInt(hex, 16);
  var r = bigint >> 16 & 255;
  var g = bigint >> 8 & 255;
  var b = bigint & 255;
  return r + "," + g + "," + b;
}

function hasClass(el, className) {
  $handle(function () {
    if (el.classList) return el.classList.contains(className);else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
  });
}

function $addClass(el, className) {
  if (el.classList) el.classList.add(className);else if (!hasClass(el, className)) el.className += " " + className;
}

function $removeClass(el, className) {
  if (el.classList) el.classList.remove(className);else if (hasClass(el, className)) {
    var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
    el.className = el.className.replace(reg, " ");
  }
}

function addEvent(object, type, callback) {
  if (object == null || typeof object == 'undefined') return;

  if (object.addEventListener) {
    object.addEventListener(type, callback, false);
  } else if (object.attachEvent) {
    object.attachEvent("on" + type, callback);
  } else {
    object["on" + type] = callback;
  }
}

function is_string(data) {
  if (typeof data === "string" || data instanceof String) {
    return true;
  } else {
    return false;
  }
}

function gradient() {
  var main_colors = {
    light: "#ffffff",
    dark: "#424242",
    basic: "#cbcbcb",
    blue: "#0091ea",
    earth: "#34c559",
    night: "#424242",
    ocean: "#2e72ee",
    red: "#e93030",
    snow: "#ffffff",
    yellow: "#e7d507",
    purple: "#6924f0",
    pink: "#ff87cb",
    cyan: "#00bcd4",
    grey: "#99A3A4"
  };
  document.querySelectorAll("[data-grad]").forEach(function () {
    var divs = document.querySelectorAll("[data-grad]");

    for (var c = 0; c < divs.length; c++) {
      var gradient = "linear-gradient(90deg, ";
      var data_colors = divs[c].getAttribute("data-grad");

      for (var color in main_colors) {
        data_colors = data_colors.replace(color, main_colors[color]);
      }

      var colors = data_colors.replace(/#/g, "");
      var colorArr = colors.split(" ");

      for (var i = 0; i < colorArr.length; i++) {
        gradient += "rgba(" + hexToRgb(colorArr[i]) + ", 1) " + 100 / colorArr.length * i + "%, ";
      }

      gradient = gradient.slice(0, gradient.length - 2);
      gradient += ")";
      divs[c].style.background = gradient;
    }
  });
}