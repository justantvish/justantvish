"use strict";

// import { skills } from './data.js';

// console.log(skills)
var logo = document.querySelector('.logo');
var slogan = document.querySelector('.hero-slogan');
var greet = document.querySelector('.hero-text');
var nav = document.querySelector('.nav-list');
if (logo) {
  logo.innerHTML = logo.innerText.split('').map(function (letter, i) {
    return "<span style=\"transition-delay: ".concat(i * 40, "ms\">").concat(letter, "</span>");
  }).join('');
  setTimeout(function () {
    return logo.classList.add('initiated');
  }, 100);
}
if (slogan) {
  var sloganArr = Array.from(slogan.querySelectorAll('span'));
  sloganArr.map(function (el, i) {
    return el.style.transitionDelay = "".concat(i * 700, "ms");
  });
  setTimeout(function () {
    return slogan.classList.add('initiated');
  }, 600);
}
if (greet) {
  setTimeout(function () {
    return greet.classList.add('initiated');
  }, 2500);
}
if (nav) {
  var navArr = Array.from(nav.querySelectorAll('.nav-item'));
  navArr.map(function (el, i) {
    return Object.assign(el.style, {
      transitionDelay: "".concat(i * 100, "ms")
    });
  });
  setTimeout(function () {
    return nav.classList.add('initiated');
  }, 200);
}
var multiple = 100;
var mouseOverContainer = document.getElementsByTagName("body")[0];
var skillsContainer = document.querySelector(".skills-wrapper");
function transformElement(x, y) {
  var box = skillsContainer.getBoundingClientRect();
  var calcX = -(y - box.y - box.height / 2) / multiple;
  var calcY = (x - box.x - box.width / 2) / multiple;
  skillsContainer.style.transform = "rotateX(".concat(calcX, "deg) rotateY(").concat(calcY, "deg) translateY(200px)");
}
mouseOverContainer.addEventListener('mousemove', function (e) {
  window.requestAnimationFrame(function () {
    transformElement(e.clientX, e.clientY);
  });
});
var skills = [{
  name: 'React',
  stack: 'development'
}, {
  name: 'Svelte',
  stack: 'development'
}, {
  name: 'JavaScript',
  stack: 'development'
}, {
  name: 'TypeScript',
  stack: 'development'
}, {
  name: 'HTML',
  stack: 'development'
}, {
  name: 'CSS',
  stack: 'development'
}, {
  name: 'React Native',
  stack: 'development'
}, {
  name: 'Node.js',
  stack: 'development'
}, {
  name: 'Express',
  stack: 'development'
}, {
  name: 'Next.js',
  stack: 'development'
}, {
  name: 'Three.js',
  stack: 'development'
}, {
  name: 'Redux',
  stack: 'libraries_and_tools'
}, {
  name: 'React Router',
  stack: 'libraries_and_tools'
}, {
  name: 'React Table',
  stack: 'libraries_and_tools'
}, {
  name: 'SASS (SCSS)',
  stack: 'libraries_and_tools'
}, {
  name: 'LESS',
  stack: 'libraries_and_tools'
}, {
  name: 'Bootstrap',
  stack: 'libraries_and_tools'
}, {
  name: 'Material UI',
  stack: 'libraries_and_tools'
}, {
  name: 'Mailjet',
  stack: 'libraries_and_tools'
}, {
  name: 'Jquery',
  stack: 'libraries_and_tools'
}, {
  name: 'Pug',
  stack: 'libraries_and_tools'
}, {
  name: 'EJS',
  stack: 'libraries_and_tools'
}, {
  name: 'Leaflet',
  stack: 'libraries_and_tools'
}, {
  name: 'Github',
  stack: 'development_environment'
}, {
  name: 'Yarn',
  stack: 'development_environment'
}, {
  name: 'Npm',
  stack: 'development_environment'
}, {
  name: 'Vite',
  stack: 'development_environment'
}, {
  name: 'Firebase',
  stack: 'development_environment'
}, {
  name: 'Jira',
  stack: 'development_environment'
}, {
  name: 'Gulp',
  stack: 'development_environment'
}, {
  name: 'Agile',
  stack: 'development_environment'
}, {
  name: 'VSCode',
  stack: 'development_environment'
}, {
  name: 'Trello',
  stack: 'development_environment'
}, {
  name: 'Figma',
  stack: 'design_and_graphics'
}, {
  name: 'Zeplin',
  stack: 'design_and_graphics'
}, {
  name: 'Blender',
  stack: 'design_and_graphics'
}, {
  name: 'Photoshop',
  stack: 'design_and_graphics'
}, {
  name: 'Avocode',
  stack: 'design_and_graphics'
}];
var skillsStack = ['development', 'libraries_and_tools', 'development_environment', 'design_and_graphics'];
var initSkills = function initSkills() {
  skillsStack.map(function (el, i) {
    var skillsCard = document.createElement('div');
    skillsCard.classList.add('skills-card');
    if (i === 0) {
      skillsCard.classList.add('current');
    }
    skillsCard.style.transform = "translate3d(0px, -".concat(60 * i, "px, -").concat(10 * i, "px)");
    skillsCard.setAttribute('id', el);
    skillsCard.innerHTML = "\n            <div class=\"skills-title\">".concat(el.split('_').join(' '), "</div>\n            <ul class=\"skills-list\">\n            </ul>\n        ");
    skillsContainer.appendChild(skillsCard);
    skillsCard.addEventListener('click', function (e) {
      var siblings = e.currentTarget.parentNode.childNodes;
      var styles = e.currentTarget.style.transform;
      var sibArr = Array.from(siblings);
      sibArr.shift();
      console.log(sibArr);
      sibArr.map(function (el) {
        if (el.classList.contains('current')) {
          el.classList.remove('current');
          el.style.transform = styles;
          e.currentTarget.classList.add('current');
        }
      });
    });
  });
  skills.map(function (el) {
    var skillsItem = document.createElement('li');
    skillsItem.classList.add('skills-item');
    skillsItem.innerText = "".concat(el.name);
    var skillsList = document.getElementById(el.stack).getElementsByClassName('skills-list');
    skillsList[0].appendChild(skillsItem);
  });
};
initSkills();

// Experience
var expList = document.querySelector('.exp-tabs_list');
var expContents = document.querySelectorAll('.exp-content');
var expItems = document.querySelectorAll('.exp-btn');
var expActive = document.querySelector('.exp-tabs_active');
expItems.forEach(function (item) {
  item.addEventListener('click', function (e) {
    var siblings = e.currentTarget.parentNode.parentNode.childNodes;
    var sibArr = Array.from(siblings);
    var sibArrFiltered = sibArr.filter(function (el) {
      return el.nodeName !== "#text";
    });
    sibArrFiltered.map(function (el) {
      var expBtn = el.querySelector('.exp-btn');
      if (expBtn.classList.contains('active')) {
        expBtn.classList.remove('active');
        expActive.style.top = "".concat(e.currentTarget.offsetTop, "px");
      }
    });
    e.currentTarget.classList.add('active');
    expContents.forEach(function (tab) {
      tab.classList.remove('active');
    });
    document.getElementById(e.currentTarget.dataset.tab).classList.add('active');
  });
});