/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

eval("window.addEventListener('DOMContentLoaded', () => {\r\n\r\n    //Tabs\r\n\r\n    const tabs = document.querySelectorAll('.tabheader__item');\r\n    const tabsContent = document.querySelectorAll('.tabcontent');\r\n    const tabsParent = document.querySelector('.tabheader__items');\r\n\r\n    function hideTabContent() {\r\n        tabsContent.forEach(item => {\r\n            item.classList.add('hide');\r\n            item.classList.remove('show', 'fade');\r\n        });\r\n\r\n        tabs.forEach(item => {\r\n            item.classList.remove('tabheader__item_active');\r\n        });\r\n    }\r\n\r\n    function showTabContent(i = 0) {\r\n        tabsContent[i].classList.add('show', 'fade');\r\n        tabsContent[i].classList.remove('hide');\r\n        tabs[i].classList.add('tabheader__item_active');\r\n    }\r\n\r\n    hideTabContent();\r\n    showTabContent();\r\n\r\n    tabsParent.addEventListener('click', (event) => {\r\n        const target = event.target;\r\n\r\n        if (target && target.classList.contains('tabheader__item')) {\r\n            tabs.forEach((item, i) => {\r\n                if (target == item) {\r\n                    hideTabContent();\r\n                    showTabContent(i); \r\n                }\r\n            })\r\n        }\r\n    });\r\n\r\n    //Timer\r\n\r\n    const deadLine = '2022-05-11';\r\n\r\n    function getTimeRemaining(endtime) {\r\n        const t = Date.parse(endtime) - Date.parse(new Date()); \r\n        const days = Math.floor(t / (1000 * 60 * 60 * 24));\r\n        const hours = Math.floor((t / (1000 * 60 *60) % 24));\r\n        const minutes = Math.floor((t / 1000 / 60) % 60);\r\n        const seconds = Math.floor((t / 1000) % 60);\r\n\r\n        return {\r\n            'total': t,\r\n            'days': days,\r\n            'hours': hours,\r\n            'minutes': minutes,\r\n            'seconds': seconds,\r\n        }\r\n    };\r\n\r\n    function getZero(num) {\r\n        if (num >= 0 && num < 10) {\r\n            return `0${num}`;\r\n        } else {\r\n            return num;\r\n        }\r\n    }\r\n\r\n    function setClock(selector, endtime) {\r\n        const timer = document.querySelector(selector);\r\n        const days = timer.querySelector('#days');\r\n        const hours = timer.querySelector('#hours');\r\n        const minutes = timer.querySelector('#minutes');\r\n        const seconds = timer.querySelector('#seconds');\r\n        timeInterval = setInterval(updateClock, 1000);\r\n\r\n        updateClock();\r\n\r\n        function updateClock() {\r\n            const t = getTimeRemaining(endtime);\r\n\r\n            days.innerHTML = getZero(t.days);\r\n            hours.innerHTML = getZero(t.hours);\r\n            minutes.innerHTML = getZero(t.minutes);\r\n            seconds.innerHTML = getZero(t.seconds);\r\n\r\n            if (t.total <= 0) {\r\n                clearInterval(timeInterval)\r\n            }\r\n        }\r\n    }\r\n\r\n    setClock('.timer', deadLine);\r\n\r\n});\n\n//# sourceURL=webpack://gulp_2022/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;