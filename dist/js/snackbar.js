function Snackbar(t,e){var n="slideUpBottom",a="slideDownBottom";t.pos||(t.pos={vertical:"bottom",horizontal:"center"}),t.theme||(t.theme="dark"),t.actionButton||(t.actionButton=""),"top"==t.pos.vertical&&(a="slideDownTop",n="slideUpTop");var o=$getT("snackbar",0);o.innerHTML="",o.className="";var c=t.type+" "+t.pos.vertical+" "+t.pos.horizontal+" "+t.theme;o.className+=c;var s,i,l='<div class="snackbar"><text class="text">'+t.text+'</text><button class="ripple SnackClose"><i class="material-icons">close</i></button><button class="ripple SnackAction">'+t.actionButton+"</button></div>";function r(){$getCL("snackbar",0).className+=" "+a}o.innerHTML=l,$getCL("SnackClose",0).addEventListener("click",function(){r()}),$getCL("SnackAction",0).addEventListener("click",function(){r(),e()}),$getCL("snackbar",0).className+=" "+n,null!=(s=t.time)&&(i=setInterval(function(){clearInterval(i),r()},s))}function $getID(t){return document.getElementById(t)}function $getCL(t,e){return document.getElementsByClassName(t)[e]}function $getT(t,e){return document.getElementsByTagName(t)[e]}