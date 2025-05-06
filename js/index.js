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