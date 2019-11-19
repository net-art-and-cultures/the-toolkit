
function terms() {
  var checkBox = document.getElementById("myCheck1");
  var text = document.getElementById("text");
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  }
}

function cookies() {
  var checkBox = document.getElementById("myCheck2");
  var text = document.getElementById("text2");
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  }
}

function newsletter() {
  var checkBox = document.getElementById("myCheck3");
  var text = document.getElementById("text3");
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  }
}

function diaper() {
  var checkBox = document.getElementById("myCheck4")
  var text = document.getElementById("text4")
  if (checkBox.checked == true){
    text.style.display = "block"
  } else {
     text.style.display = "none"
  }
}

function disney() {
  var checkBox = document.getElementById("myCheck5")
  var text = document.getElementById("text5")
  if (checkBox.checked == true){
    text.style.display = "block"
  } else {
     text.style.display = "none"
  }
}

function open() {
  var checkBox = document.getElementById("myCheck6")
  var text = document.getElementById("text6")
  if (checkBox.checked == true){
    text.style.display = "block"
  } else {
     text.style.display = "none"
  }
}

$(document).ready(function(){

  $('label[for=link]').on('click', function(){
    alert('write here code');
window.location.href= 'http://www.rohitazad.com';
  });

  $('label[for=link2]').on('click', function(){
    alert('write here code 2');
window.location.href= 'http://www.rohitazad.com';
  });


});
