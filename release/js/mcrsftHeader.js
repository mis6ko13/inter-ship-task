!function(){"use strict";function a(a){function d(){if("item"===b.dataset.id&&c&&c.dataset.id&&a.textContent!==l.textContent&&(j&&j.classList.remove("highlight"),f=g.querySelectorAll(".slide-down"),f.length>0&&(Array.prototype.forEach.call(f,function(a){a.classList.remove("slide-down")}),"subItem"===c.dataset.id))){var d=b.querySelector(".sub-menu");d.classList.add("slide-down")}}var f,h=g.querySelector(".active"),i=g.querySelector(".active-form"),j=g.querySelector(".highlight"),k=b.dataset.id;if(c)var l=c.querySelector("a");if(c&&h&&(d(),k||h.classList.remove("active")),b===e&&h&&(h.classList.toggle("active"),b.classList.toggle("highlight")),k&&d(),i&&c){if(document.activeElement.parentNode===i)return!1;c.classList.remove("highlight"),i.classList.remove("active-form")}}var b,c,d,e=document.querySelector(".toggle-menu"),f=(document.querySelector(".search"),document.querySelector(".header-menubar")),g=(document.querySelector(".buttons-list"),document.querySelector(".header-inner"));window.addEventListener("load",function(){var a=document.createElement("ul");a.classList.add("menu-list"),Ajax({method:"GET",path:"models/headerModel.json",success:function(b){d=b,createSubMenu(d,a,f)}})}),g.addEventListener("click",function(d){function e(a){if(a.target.parentNode.dataset.id)return!1;var b=g.querySelectorAll(".slide-down"),c=g.querySelector(".highlight");b.length>0&&Array.prototype.forEach.call(b,function(a){a.classList.remove("slide-down")}),c&&c.classList.remove("highlight"),document.body.removeEventListener("click",e)}var h=d.target;b=d.target.parentNode,document.body.addEventListener("click",e),c!==b&&a(h);var i=(document.querySelector(".menu-list"),d.target.parentNode),j=i.querySelector(".sub-menu");if(d.target.parentNode.dataset.id&&("item"===d.target.parentNode.dataset.id&&d.target.parentNode.classList.toggle("highlight"),j&&j.classList.toggle("slide-down")),"search"===d.target.dataset.text){var k=document.searchForm;setTimeout(function(){k.classList.toggle("active-form"),d.target.parentNode.classList.toggle("highlight")},300)}"reorder"===d.target.dataset.text&&(f.classList.toggle("active"),b.classList.toggle("highlight")),c=b})}();