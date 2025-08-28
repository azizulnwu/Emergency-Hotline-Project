// ..............Love number increasing logic..................
const loveSign = document.getElementsByClassName("love-sign");

let num = 0;
for (value of loveSign) {
  value.addEventListener("click", function () {
    let loveNumber = document.getElementById("love-number");
    num++;
    loveNumber.innerText = num;
  });
}

//............Card Call section Functioning.................
let arr = [];
let coinPresentValue=100;
const coinValue=document.getElementById("coin-value")
const cardOneCallButton = document.getElementById("card-one-call-button");
const callHistoryUpdate=document.getElementById("call-history-update");

cardOneCallButton.addEventListener("click", function () {

  if (parseInt(coinValue.innerText) === 0){
  alert(`Coin goes to zero minium 20 coin requried to Calling`)
  return;
}
  alert(`Emergency service.app.say 
Calling National Emergency Service 999`);




let coinCurrentValue=coinPresentValue - 20;
coinPresentValue=coinCurrentValue
coinValue.innerText=coinPresentValue;

// ........call history update............

const callHistory={
  name:"National Emergency Number",
  number:"999",
  date:new Date().toLocaleTimeString()
}

arr.push(callHistory);
const callHistoryUpdate=document.getElementById("call-history-update");

const createDiv=document.createElement("div")


for (value of arr){
  createDiv.innerHTML=`<div class="bg-slate-100 flex justify-between mt-2">
            <div>
              <h1 class="font-medium text-sm">${value.name}</h1>
              <p>${value.number}</p>
            </div>
            <p>${value.date}</p>
          </div>`;

}

callHistoryUpdate.appendChild(createDiv);

});

// ....................card Two functionality.....................
const cardTwoCallButton = document.getElementById("card-two-call-button");

cardTwoCallButton.addEventListener("click", function () {

  if (parseInt(coinValue.innerText) === 0){
  alert(`Coin goes to zero minium 20 coin requried to Calling`)
  return;
}
  alert(`Emergency service.app.say 
Calling Polish Helpline  Number 999`);




let coinCurrentValue=coinPresentValue - 20;
coinPresentValue=coinCurrentValue
coinValue.innerText=coinPresentValue;

// ........call history update............

const callHistory={
  name:"Police Helpline Number",
  number:"999",
  date:new Date().toLocaleTimeString()
}

arr.push(callHistory);
const callHistoryUpdate=document.getElementById("call-history-update");

const createDiv=document.createElement("div")

// callHistoryUpdate.innerHTML=""
for (value of arr){
  createDiv.innerHTML=`<div class="bg-slate-100 flex justify-between mt-2">
            <div>
              <h1 class="font-medium text-sm">${value.name}</h1>
              <p>${value.number}</p>
            </div>
            <p>${value.date}</p>
          </div>`;

}

callHistoryUpdate.appendChild(createDiv);

});


//Card Three functionlity.
const cardThreeCallButton = document.getElementById("card-three-call-button");

cardThreeCallButton.addEventListener("click", function () {

  if (parseInt(coinValue.innerText) === 0){
  alert(`Coin goes to zero minium 20 coin requried to Calling`)
  return;
}
  alert(`Emergency service.app.say 
Calling Fire Service Number 999`);




let coinCurrentValue=coinPresentValue - 20;
coinPresentValue=coinCurrentValue
coinValue.innerText=coinPresentValue;

// ........call history update............

const callHistory={
  name:"Fire Service Number",
  number:"999",
  date:new Date().toLocaleTimeString()
}

arr.push(callHistory);
const callHistoryUpdate=document.getElementById("call-history-update");

const createDiv=document.createElement("div")


for (value of arr){
  createDiv.innerHTML=`<div class="bg-slate-100 flex justify-between mt-2">
            <div>
              <h1 class="font-medium text-sm">${value.name}</h1>
              <p>${value.number}</p>
            </div>
            <p>${value.date}</p>
          </div>`;

}

callHistoryUpdate.appendChild(createDiv);

});





//card fore Functionality.

const cardFourCallButton = document.getElementById("card-four-call-button");

cardFourCallButton.addEventListener("click", function () {

  if (parseInt(coinValue.innerText) === 0){
  alert(`Coin goes to zero minium 20 coin requried to Calling`)
  return;
}
  alert(`Emergency service.app.say 
Calling Ambulance Service 1994-999999`);




let coinCurrentValue=coinPresentValue - 20;
coinPresentValue=coinCurrentValue
coinValue.innerText=coinPresentValue;

// ........call history update............

const callHistory={
  name:"Ambulance Service",
  number:"1994-999999",
  date:new Date().toLocaleTimeString()
}

arr.push(callHistory);
const callHistoryUpdate=document.getElementById("call-history-update");

const createDiv=document.createElement("div")

// callHistoryUpdate.innerHTML=""
for (value of arr){
  createDiv.innerHTML=`<div class="bg-slate-100 flex justify-between mt-2">
            <div>
              <h1 class="font-medium text-sm">${value.name}</h1>
              <p>${value.number}</p>
            </div>
            <p>${value.date}</p>
          </div>`;

}

callHistoryUpdate.appendChild(createDiv);

});

//Card Five funtionality.
const cardFiveCallButton = document.getElementById("card-five-call-button");

cardFiveCallButton.addEventListener("click", function () {

  if (parseInt(coinValue.innerText) === 0){
  alert(`Coin goes to zero minium 20 coin requried to Calling`)
  return;
}
  alert(`Emergency service.app.say 
Calling Woman & Child Helpline 109`);




let coinCurrentValue=coinPresentValue - 20;
coinPresentValue=coinCurrentValue
coinValue.innerText=coinPresentValue;

// ........call history update............

const callHistory={
  name:"Woman & Child Helpline",
  number:"109",
  date:new Date().toLocaleTimeString()
}

arr.push(callHistory);
const callHistoryUpdate=document.getElementById("call-history-update");

const createDiv=document.createElement("div")

for (value of arr){
  createDiv.innerHTML=`<div class="bg-slate-100 flex justify-between mt-2">
            <div>
              <h1 class="font-medium text-sm">${value.name}</h1>
              <p>${value.number}</p>
            </div>
            <p>${value.date}</p>
          </div>`;

}

callHistoryUpdate.appendChild(createDiv);

});





//Card six functionality.

const cardSixCallButton = document.getElementById("card-six-call-button");

cardSixCallButton.addEventListener("click", function () {

  if (parseInt(coinValue.innerText) === 0){
  alert(`Coin goes to zero minium 20 coin requried to Calling`)
  return;
}
  alert(`Emergency service.app.say 
Calling Anti-Corruption Helpline 106`);




let coinCurrentValue=coinPresentValue - 20;
coinPresentValue=coinCurrentValue
coinValue.innerText=coinPresentValue;

// ........call history update............

const callHistory={
  name:"Anti-Corruption Helpline",
  number:"106",
  date:new Date().toLocaleTimeString()
}

arr.push(callHistory);
const callHistoryUpdate=document.getElementById("call-history-update");

const createDiv=document.createElement("div")


for (value of arr){
  createDiv.innerHTML=`<div class="bg-slate-100 flex justify-between mt-2">
            <div>
              <h1 class="font-medium text-sm">${value.name}</h1>
              <p>${value.number}</p>
            </div>
            <p>${value.date}</p>
          </div>`;

}

callHistoryUpdate.appendChild(createDiv);

});


// Card Seven functionlity.
const cardSevenCallButton = document.getElementById("card-seven-call-button");

cardSevenCallButton.addEventListener("click", function () {

  if (parseInt(coinValue.innerText) === 0){
  alert(`Coin goes to zero minium 20 coin requried to Calling`)
  return;
}
  alert(`Emergency service.app.say 
Calling Electricity Helpline 16216`);




let coinCurrentValue=coinPresentValue - 20;
coinPresentValue=coinCurrentValue
coinValue.innerText=coinPresentValue;

// ........call history update............

const callHistory={
  name:"Electricity Helpline",
  number:"16216",
  date:new Date().toLocaleTimeString()
}

arr.push(callHistory);
const callHistoryUpdate=document.getElementById("call-history-update");

const createDiv=document.createElement("div")


for (value of arr){
  createDiv.innerHTML=`<div class="bg-slate-100 flex justify-between mt-2">
            <div>
              <h1 class="font-medium text-sm">${value.name}</h1>
              <p>${value.number}</p>
            </div>
            <p>${value.date}</p>
          </div>`;

}

callHistoryUpdate.appendChild(createDiv);

});

// card Eight functionlity.

const cardNineCallButton = document.getElementById("card-Nine-call-button");

cardNineCallButton.addEventListener("click", function () {

  if (parseInt(coinValue.innerText) === 0){
  alert(`Coin goes to zero minium 20 coin requried to Calling`)
  return;
}
  alert(`Emergency service.app.say 
Calling Bangladesh Railway Helpline 999`);




let coinCurrentValue=coinPresentValue - 20;
coinPresentValue=coinCurrentValue
coinValue.innerText=coinPresentValue;

// ........call history update............

const callHistory={
  name:"Brac Helpline",
  number:"16445",
  date:new Date().toLocaleTimeString()
}

arr.push(callHistory);
const callHistoryUpdate=document.getElementById("call-history-update");

const createDiv=document.createElement("div")


for (value of arr){
  createDiv.innerHTML=`<div class="bg-slate-100 flex justify-between mt-2">
            <div>
              <h1 class="font-medium text-sm">${value.name}</h1>
              <p>${value.number}</p>
            </div>
            <p>${value.date}</p>
          </div>`;

}

callHistoryUpdate.appendChild(createDiv);

});

//Card Nine functionality
const cardEightCallButton = document.getElementById("card-Eight-call-button");

cardEightCallButton.addEventListener("click", function () {

  if (parseInt(coinValue.innerText) === 0){
  alert(`Coin goes to zero minium 20 coin requried to Calling`)
  return;
}
  alert(`Emergency service.app.say 
Calling Fire Service Number 999`);




let coinCurrentValue=coinPresentValue - 20;
coinPresentValue=coinCurrentValue
coinValue.innerText=coinPresentValue;

// ........call history update............

const callHistory={
  name:"Fire Service Number",
  number:"999",
  date:new Date().toLocaleTimeString()
}

arr.push(callHistory);
const callHistoryUpdate=document.getElementById("call-history-update");

const createDiv=document.createElement("div")


for (value of arr){
  createDiv.innerHTML=`<div class="bg-slate-100 flex justify-between mt-2">
            <div>
              <h1 class="font-medium text-sm">${value.name}</h1>
              <p>${value.number}</p>
            </div>
            <p>${value.date}</p>
          </div>`;

}

callHistoryUpdate.appendChild(createDiv);

});

// Clear Button functionality
const clearButton=document.getElementById("clear-button")


clearButton.addEventListener("click",function(){
callHistoryUpdate.innerHTML="";
})


// .............................
const copyNumber=document.getElementById("copy-number")
const EmergencyNumber=document.getElementById('card-one-number')
let copyValue=0;


// card One Copy Button functionlity
const cardOneCopyButton=document.getElementById("card-one-copy-button")
/
cardOneCopyButton.addEventListener("click",function(){
  alert(`National Emergency Number copy completed`)
  
  copyValue++
  copyNumber.innerText=copyValue
 
navigator.clipboard.writeText(EmergencyNumber.textContent);
  
})
// card Two Copy Button functionlity
const cardTwoCopyButton=document.getElementById("card-Two-copy-button")

cardTwoCopyButton.addEventListener("click",function(){
  alert(`Police Helpline Number copy completed`)
  
  copyValue++
  copyNumber.innerText=copyValue
 
navigator.clipboard.writeText(cardOneNumber.textContent);
  
})
// card Three Copy Button functionlity
const cardThreeCopyButton=document.getElementById("card-three-copy-button")

cardThreeCopyButton.addEventListener("click",function(){
  alert(`Fire Service Number copy completed`)
  
  copyValue++
  copyNumber.innerText=copyValue
 
navigator.clipboard.writeText(cardOneNumber.textContent);
  
})
// card Four Copy Button functionlity
const cardFourCopyButton=document.getElementById("card-four-copy-button")
const cardFourNumber=document.getElementById("card-four-number")
cardFourCopyButton.addEventListener("click",function(){
  alert(`Ambulance Service Number copy completed`)
  
  copyValue++
  copyNumber.innerText=copyValue
 
navigator.clipboard.writeText(cardFourNumber.textContent);
  
})
// card Five Copy Button functionlity
const cardFiveCopyButton=document.getElementById("card-five-copy-button")
const cardFiveNumber=document.getElementById("card-five-number")
cardFiveCopyButton.addEventListener("click",function(){
  alert(`Woman & Child Helpline Number copy completed`)
  
  copyValue++
  copyNumber.innerText=copyValue
 
navigator.clipboard.writeText(cardFiveNumber.textContent);
  
})
// card Six Copy Button functionlity
const cardSixCopyButton=document.getElementById("card-Six-copy-button")
const cardSixNumber=document.getElementById("card-six-number")
cardSixCopyButton.addEventListener("click",function(){
  alert(`Anti-Corruption Helpline
 Number copy completed`)
  
  copyValue++
  copyNumber.innerText=copyValue
 
navigator.clipboard.writeText(cardSixNumber.textContent);
  
})
// card Seven Copy Button functionlity
const cardSevenCopyButton=document.getElementById("card-seven-copy-button")
const cardSevenNumber=document.getElementById("card-seven-number")
cardSevenCopyButton.addEventListener("click",function(){
  alert(`Electricity Helpline Number copy completed`)
  
  copyValue++
  copyNumber.innerText=copyValue
 
navigator.clipboard.writeText(cardSevenNumber.textContent);
  
})
// card Eight Copy Button functionlity
const cardEightCopyButton=document.getElementById("card-eight-copy-button")
const cardEightNumber=document.getElementById("card-eight-number")
cardEightCopyButton.addEventListener("click",function(){
  alert(`Brac Helpline Number copy completed`)
  
  copyValue++
  copyNumber.innerText=copyValue
 
navigator.clipboard.writeText(cardEightNumber.textContent);
  
})
// card Nine Copy Button functionlity
const cardNineCopyButton=document.getElementById("card-nine-copy-button")

cardNineCopyButton.addEventListener("click",function(){
  alert(`Bangladesh Railway Helpline Number copy completed`)
  
  copyValue++
  copyNumber.innerText=copyValue
 
navigator.clipboard.writeText(EmergencyNumber.textContent);
  
})

