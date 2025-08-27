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
let availableCoin = parseInt(callByCoin.querySelector('span').innerText, 10);

const btnCall = document.getElementsByClassName('btn-call');
const callHistoryContainer = document.getElementById('call-history-container');
const btnClear = document.getElementById('btn-clear');

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

                const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

                const historyDiv = document.createElement('div');
                historyDiv.classList.add('call-history', 'rounded-xl', 'bg-[#fafafa]', 'mt-2', 'flex', 'justify-between', 'items-center', 'p-4');

                historyDiv.innerHTML = `
                    <div>
                        <h2 class="text-lg md:text-xl font-semibold">${serviceName}</h2>
                        <h2 class="text-gray-500 text-lg">${serviceNumber}</h2>
                    </div>
                    <h2 class="text-sm md:text-xl font-semibold">${currentTime}</h2>
                `;

                callHistoryContainer.appendChild(historyDiv);
            } 
            else{
                alert("You don't have enough coin to call.");
            }
        }

        
    });
    
};

btnClear.addEventListener('click', function () {
    callHistoryContainer.innerHTML = "";
});


// Count and Copy
const btnCopyNavbar = document.getElementById('btn-copy-navbar');
let copyCount = 0;

const btnCopy = document.getElementsByClassName('btn-copy');

for (let k = 0; k < btnCopy.length; k++) {
    btnCopy[k].addEventListener('click', function () {
        const cardItem = btnCopy[k].closest('.card-item');
        const serviceNumber = cardItem.querySelector('.service-number').innerText.trim();

        navigator.clipboard.writeText(serviceNumber).then(() => {
            alert("The Number is copied");
            copyCount++;
            btnCopyNavbar.querySelector("span").textContent = copyCount;
        }).catch(err => {
            console.error("Failed to copy number: ", err);
        });
    });
}
