"use strict";

// import { skills } from './data.js';

// console.log(skills)

const logo = document.querySelector('.logo');
const slogan = document.querySelector('.hero-slogan');
const greet = document.querySelector('.hero-text');
const nav = document.querySelector('.nav-list');

if(logo) {
  logo.innerHTML = logo.innerText.split('').map(function (letter, i) {
    return `<span style="transition-delay: ${i * 40}ms">${letter}</span>`;
  }).join('');

  setTimeout(() => logo.classList.add('initiated'), 100);
}

if(slogan) {
  const sloganArr = Array.from(slogan.querySelectorAll('span'));
    sloganArr.map((el, i) => {
      return el.style.transitionDelay = `${i * 700}ms`;
    });
  setTimeout(() => slogan.classList.add('initiated'), 600);
}

if(greet) {
  setTimeout(() => greet.classList.add('initiated'), 2500);
}

if(nav) {
  const navArr = Array.from(nav.querySelectorAll('.nav-item'));
    navArr.map((el, i) => {
      return Object.assign(el.style, {transitionDelay: `${i * 100}ms`});
    });
  setTimeout(() => nav.classList.add('initiated'), 200);
}

const multiple = 100;
const mouseOverContainer = document.getElementsByTagName("body")[0];
const skillsContainer = document.querySelector(".skills-wrapper");

function transformElement(x, y) {
  let box = skillsContainer.getBoundingClientRect();
  let calcX = -(y - box.y - (box.height / 2)) / multiple;
  let calcY = (x - box.x - (box.width / 2)) / multiple;
  
  skillsContainer.style.transform  = `rotateX(${calcX}deg) rotateY(${calcY}deg) translateY(200px)`;
}

mouseOverContainer.addEventListener('mousemove', (e) => {
  window.requestAnimationFrame(function(){
    transformElement(e.clientX, e.clientY);
  });
});

const skills = [
    {
        name: 'React',
        stack: 'development',
    },
    {
        name: 'Svelte',
        stack: 'development',
    },
    {
        name: 'JavaScript',
        stack: 'development',
    },
    {
        name: 'TypeScript',
        stack: 'development',
    },
    {
        name: 'HTML',
        stack: 'development',
    },
    {
        name: 'CSS',
        stack: 'development',
    },
    {
        name: 'React Native',
        stack: 'development',
    },
    {
        name: 'Node.js',
        stack: 'development',
    },
    {
        name: 'Express',
        stack: 'development',
    },
    {
        name: 'Next.js',
        stack: 'development',
    },
    {
        name: 'Three.js',
        stack: 'development',
    },
    {
        name: 'Redux',
        stack: 'libraries_and_tools',
    },
    {
        name: 'React Router',
        stack: 'libraries_and_tools',
    },
    {
        name: 'React Table',
        stack: 'libraries_and_tools',
    },
    {
        name: 'SASS (SCSS)',
        stack: 'libraries_and_tools',
    },
    {
        name: 'LESS',
        stack: 'libraries_and_tools',
    },
    {
        name: 'Bootstrap',
        stack: 'libraries_and_tools',
    },
    {
        name: 'Material UI',
        stack: 'libraries_and_tools',
    },
    {
        name: 'Mailjet',
        stack: 'libraries_and_tools',
    },
    {
        name: 'Jquery',
        stack: 'libraries_and_tools',
    },
    {
        name: 'Pug',
        stack: 'libraries_and_tools',
    },
    {
        name: 'EJS',
        stack: 'libraries_and_tools',
    },
    {
        name: 'Github',
        stack: 'development_environment',
    },
    {
        name: 'Yarn',
        stack: 'development_environment',
    },
    {
        name: 'Npm',
        stack: 'development_environment',
    },
    {
        name: 'Firebase',
        stack: 'development_environment',
    },
    {
        name: 'Jira',
        stack: 'development_environment',
    },
    {
        name: 'Gulp',
        stack: 'development_environment',
    },
    {
        name: 'Agile',
        stack: 'development_environment',
    },
    { 
        name: 'VSCode',
        stack: 'development_environment',
    },
    {
        name: 'Trello',
        stack: 'development_environment',
    },
    {
        name: 'Figma',
        stack: 'design_and_graphics',
    },
    {
        name: 'Zeplin',
        stack: 'design_and_graphics',
    },
    {
        name: 'Blender',
        stack: 'design_and_graphics',
    },
    {
        name: 'Photoshop',
        stack: 'design_and_graphics',
    },
    {
        name: 'Avocode',
        stack: 'design_and_graphics',
    },
];

const skillsStack = ['development', 'libraries_and_tools', 'development_environment', 'design_and_graphics'];

const initSkills = () => {
    skillsStack.map((el, i) => {
        const skillsCard = document.createElement('div');
        skillsCard.classList.add('skills-card');
        if (i === 0) {
            skillsCard.classList.add('current');
        }
        skillsCard.style.transform = `translate3d(0px, -${60 * i}px, -${10 * i}px)`;
        skillsCard.setAttribute('id', el);
        skillsCard.innerHTML = `
            <div class="skills-title">${el.split('_').join(' ')}</div>
            <ul class="skills-list">
            </ul>
        `;
        skillsContainer.appendChild(skillsCard);
        skillsCard.addEventListener('click', (e) => {
            const siblings = e.currentTarget.parentNode.childNodes;
            const styles = e.currentTarget.style.transform;
            const sibArr = Array.from(siblings);
            sibArr.shift();
            console.log(sibArr)
            sibArr.map(el => {
                if (el.classList.contains('current')) {
                    el.classList.remove('current');
                    el.style.transform = styles;
                    e.currentTarget.classList.add('current');
                }
            })
            
        });
    });
    skills.map((el) => {
        const skillsItem = document.createElement('li');
        skillsItem.classList.add('skills-item');
        skillsItem.innerText = `${el.name}`;
        const skillsList = document.getElementById(el.stack).getElementsByClassName('skills-list');
        skillsList[0].appendChild(skillsItem);
    });
};
initSkills();


// Experience
const expList = document.querySelector('.exp-tabs_list');
const expContents = document.querySelectorAll('.exp-content'); 
const expItems = document.querySelectorAll('.exp-btn');
const expActive = document.querySelector('.exp-tabs_active');

expItems.forEach(item => {
    item.addEventListener('click', (e) => {
        const siblings = e.currentTarget.parentNode.parentNode.childNodes;
        const sibArr = Array.from(siblings);
        const sibArrFiltered = sibArr.filter(el => el.nodeName !== "#text")
        sibArrFiltered.map(el => {
            const expBtn = el.querySelector('.exp-btn');
            if (expBtn.classList.contains('active')) {
                expBtn.classList.remove('active');
                expActive.style.top = `${e.currentTarget.offsetTop}px`;
            }
        });
        e.currentTarget.classList.add('active');
        expContents.forEach(tab => {
            tab.classList.remove('active');
        });
        document.getElementById(e.currentTarget.dataset.tab).classList.add('active');
    })
});