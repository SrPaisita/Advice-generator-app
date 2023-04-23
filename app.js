
var adviceText = document.getElementById("advice");
var AdviceId = document.getElementById("idAdvice");
var button = document.getElementById("button");

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.adviceslip.com/advice');
xhr.onload = function() {
  if (xhr.status === 200) {
    var responseText = xhr.responseText;
    var data = JSON.parse(responseText)
    AdviceId.innerText = `A D V I C E # ${data.slip.id}`
    adviceText.innerHTML = `"${data.slip.advice}"`;
    button.addEventListener('click', () =>{
        location.reload()
    })
  }
  else {
    console.error('Error en la llamada a la API(s)');
  }
};
xhr.send();

