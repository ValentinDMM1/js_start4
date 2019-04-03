const link = document.querySelector('a');

link.textContent = 'YouTube';
link.href = 'https://www.youtube.com/';


const sect = document.querySelector('section');


for (let i = 0; i <= 3; i++) {
    const para = document.createElement('p');
    para.textContent = 'Text For example';
    sect.appendChild(para);
    para.classList.add('highlight');
    
}

const text = document.createTextNode(' — the premier source for web development knowledge.');
const linkPara = document.querySelector('p');
linkPara.appendChild(text);

sect.appendChild(linkPara.cloneNode(true));

linkPara.parentNode.removeChild(linkPara); 


///Clock

/*const clock = document.querySelector('.clock');
setInterval( () => clock.innerText = (new Date()).toLocaleTimeString(),
             1000);
*/
             
setInterval( () => $('.clock').html((new Date()).toLocaleTimeString()), 1000);
             
             
/// Culc :

const display = document.querySelector('.display');
const digitsOpers = document.querySelectorAll('.digits button, .operations button');
digitsOpers.forEach( digit => digit.addEventListener('click', digitOperPressed) );

function digitOperPressed(e) {
    e.preventDefault();
    display.value += e.target.innerText;
}

const equal = document.querySelector('.eq');
equal.addEventListener('click', equalPressed);

function equalPressed(e) {
    e.preventDefault();
    display.value = eval(display.value);
}


