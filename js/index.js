const bodyFooter = document.querySelector("body");
const footer = document.createElement("footer");
bodyFooter.appendChild(footer);
footer.style.textAlign = "right";
footer.style.padding = "25px"; 

const today = new Date();
const thisYear = today.getFullYear();
const footerElement = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `&copy; Mani Chandana Puvvada ${thisYear}`;
footerElement.appendChild(copyright);

const skills = ['HTML','CSS','Javascript','C Language','C++','Java','Python','Test Automation Frameworks','Software Testing ','Git','Tableau basics','Agile frameworks'];
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');
for (let i = 0; i < skills.length; i++) {
    const skillItem = document.createElement("li"); 
    skillItem.innerText = skills[i]; 
    skillsList.appendChild(skillItem); 
}

const messageForm = document.forms["leave_message"];
messageForm.addEventListener("submit", function(event) {
  event.preventDefault(); 
  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;
  console.log(usersName, usersEmail, usersMessage);
  const messageSection = document.getElementById("messages");
  const messageList = messageSection.querySelector("ul");
  const newMessage = document.createElement("li");
  newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a> 
    <span> - ${usersMessage}</span>`;
  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";
  removeButton.addEventListener("click", function () {
    const entry = removeButton.parentNode;
    entry.remove();
  });
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
  messageForm.reset();
});
