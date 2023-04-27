const adviceId = document.querySelector('#adviceId');
const adviceText = document.querySelector('#adviceText');
const btn = document.querySelector('#btn');


function getAdvice() {
    // const xhttp = new XMLHttpRequest();
    // xhttp.onload = function() {
    //     const adviceData = xhttp.responseText;
    //     console.log(adviceData);

    //     const jsonAdviceData = JSON.parse(adviceData);
    //     console.log(jsonAdviceData);
    //     const adviceIdd = jsonAdviceData.slip.id;
    //     const advice = jsonAdviceData.slip.advice;
    //     adviceId.textContent = adviceIdd;
    //     adviceText.innerHTML = `<p>${advice}</p>`;
       
    // };
    // xhttp.open("GET", "https://api.adviceslip.com/advice", true);
    // xhttp.send();





    fetch('https://api.adviceslip.com/advice').then(response => {
        return response.json();
    }).then(adviceData => {
        console.log(adviceData);
        const adviceIdd = adviceData.slip.id;
        const advice = adviceData.slip.advice;
        adviceId.textContent = adviceIdd;
        adviceText.innerHTML = `<p>${advice}</p>`;
    }).catch(error => {
        console.log(error);
    })
}

btn.addEventListener('click', () => {
    getAdvice();
});

window.onload = () => {
    getAdvice();
}