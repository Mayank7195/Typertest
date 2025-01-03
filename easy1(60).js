




const timer=document.querySelector('#timer');
const textarea=document.querySelector('#textarea');
const finishButtton=document.querySelector('#finish');
const result=document.querySelector('#result');
const referenceText=document.querySelector('#reference');
const accuracyElement=document.querySelector('#accuracy');
const netspeed=document.querySelector('#netspeed')
let timeLeft=60;
let correctCharacters=0;
function startTimer(){
    
   
    const timerInterval=setInterval(() =>{
        timeLeft--;
        timer.textContent=`Time left:${timeLeft}s`;
        if (timeLeft<=0){
            clearInterval(timerInterval);
            timer.textContent="Time's up! Scroll down for Result";
            textarea.disabled=true;
            calculateWPM();
            calculateAccuracy();
            calculatenetspeed();
            

        }
    },1000);

}

function calculateWPM() {
    const typedText = textarea.value.trim(); 
    const typedCharacters = (typedText.length);
  
  
    const wpm = Math.round(typedCharacters/(5*1)); 
    result.textContent = `${wpm}wpm`; 
    const referenceTextContent=referenceText.textContent.trim();
    correctCharacters=0;
    for(let i=0;i<typedText.length;i++){
        if(referenceTextContent[i]===typedText[i]){
            correctCharacters++;
  }
   }
}
   
  function calculateAccuracy(){
    let accuracy;
    const typedText = textarea.value.trim(); 
    const typedCharacters = (typedText.length);
    if (typedCharacters>0){
     accuracy=(correctCharacters/typedText.length)*100;
    }else{
        accuracy=0;
    }
    accuracyElement.textContent=`${accuracy.toFixed(2)}%`;
        }
        function calculatenetspeed(){
            const typedText = textarea.value.trim(); 
           const typedCharacters = (typedText.length);
           const wpm = Math.round(typedCharacters/(5*1)); 
           const accuracy=(correctCharacters/typedCharacters)*100;
            let speed=(wpm*(accuracy/100));

        netspeed.textContent=`${speed.toFixed(2)}wpm`;
        }
        function colourError(){
const userText=textarea.value;
const reference=referenceText.textContent.trim();
for(let i=0;i< userText.length;i++){
    if(userText[i] !== reference[i]){
        textarea.style.color="red";
        return;
    }
}
textarea.style.color="black";

        };
  
textarea.addEventListener('input',colourError);
textarea.addEventListener('click',startTimer);