// Count Heart
const hearts = document.getElementsByClassName('heart');
const countHeart = document.getElementById('count-heart')

let totalCountHeart = 0;

for (let i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener('click', function () {
        totalCountHeart++;
        countHeart.innerText = totalCountHeart;
    });
}

// Call with Coin
const callByCoin = document.getElementById('call-by-coin');
let availableCoin = parseInt(callByCoin.innerText, 10);

const btnCall = document.getElementsByClassName('btn-call');

for(let j = 0; j < btnCall.length; j++){
    btnCall[j].addEventListener('click', function(){
        const  cardItem = btnCall[j].closest('.card-item');
        const serviceName = cardItem.querySelector('.service-name').innerText;
        const serviceNumber = cardItem.querySelector('.service-number').innerText;

        const alertMessage = confirm(`Are you sure that you want to call '${serviceName}' which number is '${serviceNumber}'?`);

        if(alertMessage){
            if(availableCoin >= 20){
                availableCoin -= 20;
                callByCoin.querySelector('span').innerText = availableCoin;
            } 
            else{
                alert("You don't have enough coin to call.");
            }
        }
    });
};

