// function navigate (){
//   alert("work")
//   let speechSynthesisreco =  window.speechRecocognitionn || webkitSpeechRecognition;

//   let myVoiceSpeech = new speechSynthesisreco;
//   // myVoiceSpeech.continuos = false
//   myVoiceSpeech.start();
//   myVoiceSpeech.onresult = function(event){
//     console.log(event);
//   }
//   myVoiceSpeech.onspeechend = ()=>{
//     myVoiceSpeech.stop()
//   }
// }

// function navigate (){
//   let speechUtterRecog = window.speechRecognition || webkitSpeechRecognition
//   let newSpeechUtter = new speechUtterRecog()
//   // newSpeechUtter.continuous = true
//   console.log(newSpeechUtter);
// }
// var studentDet = {school:"Aboke", age: 10}
// console.log(studentDet = {school:"Aboke", age: 10}
// );

// function utterText (){
//   var utterSpeech = new SpeechSynthesisUtterance()
//   utterSpeech.text = textInp.value
// }
// utterText.addEventListener('click', function (){
//   // alert("adewole")
//   let textToUtter = new SpeechSynthesisUtterance()
//   textToUtter.text = textInp.value
//   textToUtter.volume = [8]
//   let voices = speechSynthesis.getVoices()
//   // console.log(voices);
//   textToUtter.voice =  voices[5]
//   speechSynthesis.speak(textToUtter)
//   // console.log(textToUtter);
// })
var navigates = [
  {paegeInfo:"welcome to contact", word:"contact", page: "contact.html"},
  {paegeInfo:"welcome to about", word:"about", page: "about.html"},
  {paegeInfo:"welcome to service", word:"service", page: "services.html"},
  {paegeInfo:"welcome to home", word:"home", page: "home.html"}
]
// utterTexts.addEventListener('click', ()=>{
  const navigate = () =>{
    var speakTotext = window.speechRecognition || webkitSpeechRecognition
    var recognizeSpeech = new speakTotext()
    recognizeSpeech.continuous = true;
    recognizeSpeech.maxAlternatives = 1;
    recognizeSpeech.interimResult = true;
    recognizeSpeech.lang = 'en-US';
    recognizeSpeech.start();
  recognizeSpeech.onresult = function(event){
   let utteranceVal = event.results[0][0].transcript
    // textInp.value += utteranceVal       
    body.style.backgroundColor = textInp.value
    let findIdexWord = navigates.findIndex(n => utteranceVal.includes(n.word))
    // let findIdexWord = navigates.findIndex(n => utteranceVal == n.word)
    window.location.href = navigates[findIdexWord].page
  }
  if('speechSynthesis' in window){
    let msg = new SpeechSynthesisUtterance()
    // msg.text = `${document.getElementById('pageDet').innerText} ${document.getElementById('welcome').innerText}` 
    msg.text = navigates[findIdexWord].paegeInfo
    // location.reload()
    speechSynthesis.speak(msg)
  }else{
    alert('not available')
  }


}
// )
