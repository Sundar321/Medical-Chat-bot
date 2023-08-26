// let chatbotMsgList = ["Hey there. I am your's Medical Chat-bot. Can you share your name with me ?","Can you share your health issue symptom?", "Okay According to your Symptom tell me do you have backpain ? ","Okay Do you have weakness in limbs ?", "Okay Do you have neck pain ?", "Okay Do you feel dizziness ?", "Okay do you feel loss of balance ?","It might not be that bad but you should take precautions.You may have  Cervical spondylosis","Cervical spondylosis is a general term for age-related wear and tear affecting the spinal disks in your neck. As the disks dehydrate and shrink, signs of osteoarthritis develop, including bony projections along the edges of bones (bone spurs).","Take following measures :1 ) use heating pad or cold pack 2 ) exercise 3 ) take otc pain reliver 4 ) consult doctor","Thank You for your nice conversation have a nice day Be Happy😊❤️ "];
// const chatContainer = document.querySelector('#chatContainer');
// const userInput = document.querySelector('#userInput');
// const sendMsgBtn = document.querySelector('#sendMsgBtn');

// // function to display user input message and chatbot reply
// function displayMessage() {
//   // get user input message
//   const userMsg = userInput.value.trim();

//   // create and display user message container
//   const userMsgContainer = document.createElement('div');
//   userMsgContainer.classList.add('msg-to-chatbot-container');
//   const userMsgText = document.createElement('p');
//   userMsgText.classList.add('msg-to-chatbot');
//   userMsgText.textContent = userMsg;
//   userMsgContainer.appendChild(userMsgText);
//   chatContainer.appendChild(userMsgContainer);

//   // clear the user input
//   userInput.value = '';

//   // generate and display chatbot reply
//   const chatbotMsg = chatbotMsgList.shift();
//   chatbotMsgList.push(chatbotMsg);
//   const chatbotMsgContainer = document.createElement('div');
//   chatbotMsgContainer.classList.add('msg-from-chatbot-container');
//   const chatbotMsgText = document.createElement('p');
//   chatbotMsgText.classList.add('msg-from-chatbot');
//   chatbotMsgText.textContent = chatbotMsg;
//   chatbotMsgContainer.appendChild(chatbotMsgText);
//   chatContainer.appendChild(chatbotMsgContainer);
// }

// // add event listener to sendMsgBtn button
// userInput.addEventListener('keydown', function(event) {
//   if (event.keyCode === 13) {
//     // if Enter key was pressed, call displayMessage function
//     displayMessage();
//   }
// });
// sendMsgBtn.addEventListener('click', displayMessage);










const chatbotMsgList = ["Hey there. I am your's Medical Chat-bot. Can you share your name with me?", "Can you share your health issue symptom?", "Okay, according to your symptom, do you have back pain?", "Okay, do you have weakness in your limbs?", "Okay, do you have neck pain?", "Okay, do you feel dizzy?", "Okay, do you feel loss of balance?", "It might not be that bad, but you should take precautions. You may have Cervical spondylosis.", "Cervical spondylosis is a general term for age-related wear and tear affecting the spinal disks in your neck. As the disks dehydrate and shrink, signs of osteoarthritis develop, including bony projections along the edges of bones (bone spurs).", "Take the following measures: 1) Use a heating pad or cold pack. 2) Exercise. 3) Take an over-the-counter pain reliever. 4) Consult a doctor.", "Thank you for your nice conversation. Have a nice day. Be happy! 😊❤️"];
const chatContainer = document.querySelector('#chatContainer');
const userInput = document.querySelector('#userInput');
const sendMsgBtn = document.querySelector('#sendMsgBtn');

// function to display user input message and chatbot reply
function displayMessage() {
  // get user input message
  const userMsg = userInput.value.trim();

  // create and display user message container
  const userMsgContainer = document.createElement('div');
  userMsgContainer.classList.add('msg-to-chatbot-container');
  const userMsgText = document.createElement('p');
  userMsgText.classList.add('msg-to-chatbot');
  userMsgText.textContent = userMsg;
  userMsgContainer.appendChild(userMsgText);
  chatContainer.appendChild(userMsgContainer);

  // clear the user input
  userInput.value = '';

  // generate and display chatbot reply
  const chatbotMsg = chatbotMsgList.shift();
  chatbotMsgList.push(chatbotMsg);
  const chatbotMsgContainer = document.createElement('div');
  chatbotMsgContainer.classList.add('msg-from-chatbot-container');
  const chatbotMsgText = document.createElement('p');
  chatbotMsgText.classList.add('msg-from-chatbot');
  chatbotMsgText.textContent = chatbotMsg;
  chatbotMsgContainer.appendChild(chatbotMsgText);
  chatContainer.appendChild(chatbotMsgContainer);

  // scroll to the bottom of the chat container
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

// add event listener to sendMsgBtn button
sendMsgBtn.addEventListener('click', displayMessage);

// add event listener for the enter key
userInput.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    sendMsgBtn.click();
  }
});
