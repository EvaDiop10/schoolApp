/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _routing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routing.js */ \"./src/routing.js\");\n\nvar SUPABASE_URL = 'https://uapervjhiibhkhzcpbfq.supabase.co/rest/v1/Apprenant?';\nvar SUPABASE_KEY = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDI3NDAwMywiZXhwIjoxOTU1ODUwMDAzfQ.ifXAy-0sSyQq91FOkkHOv9ruD1NZ8p_mUZWxVXB7NkQ\";\nvar allItems = [{\n  \"nom\": \"\",\n  \"prenom\": \"\",\n  \"bio\": \"\",\n  \"niveau\": \"\",\n  \"photo\": null\n}];\n\nvar ajouterApp = function ajouterApp(item) {\n  // on selectionne le containeur \n  var container = document.querySelector(\"ul\"); // on ajoute le html\n\n  container.insertAdjacentHTML(\"beforeend\", \"\\n            <div class=\\\"card mb-3 shadow \\\" style=\\\"max-width: 540px;\\\" >\\n                <div class=\\\"row g-0 \\\">\\n                    <div class=\\\"col-md-4 p-4\\\">\\n                        <img src=\\\"img/header.JPG\\\" class=\\\"img-fluid \\\" alt=\\\"...\\\">\\n                    </div>\\n                    <div class=\\\"col-md-6\\\">\\n                        <div class=\\\"card-body\\\">\\n                            <h5 class=\\\"card-title\\\">\".concat(item.nom, \" \").concat(item.prenom, \"</h5>\\n                            <p class=\\\"card-text\\\">\").concat(item.bio, \"</p>\\n                            <p class=\\\"fw-bold float-end\\\">\").concat(item.niveau, \"</p>\\n                        </div>\\n                        </div>  \\n                        <div class=\\\"col-md-2\\\">\\n                            <i class=\\\"bi bi-pencil btn\\\" style=\\\"color: green;\\\"></i>\\n                            <i class=\\\"bi bi-x-lg btn\\\" style=\\\"color: #ce0033;\\\"></i>\\n                        </div>\\n                    </div>\\n                </div>\\n            </div>\\n        \\n    \")); // localStorage.setItem(key, value);\n}; // On souhaite réagir à chaque fois que le formulaire est soumis\n\n\ndocument.querySelector('.formulaire').addEventListener(\"submit\", function (event) {\n  // On souhaite aussi empêcher le rechargement de la page\n  event.preventDefault(); // On récupère les inputs\n\n  console.log('avant iput recup');\n  var inputNom = document.getElementById('nom').value;\n  var inputPrenom = document.getElementById('prenom').value;\n  var select = document.getElementById('selected').selectedOptions[0].value;\n  var bio = document.getElementById('biographie').value; //   On créé un nouveau profil d'apprenant\n\n  var item = {\n    nom: inputNom,\n    prenom: inputPrenom,\n    niveau: select,\n    bio: bio // photo: avatar\n\n  };\n  fetch(SUPABASE_URL, {\n    method: \"POST\",\n    body: JSON.stringify(item),\n    headers: {\n      \"Content-Type\": \"application/json\",\n      apiKey: SUPABASE_KEY,\n      Prefer: \"return=representation\"\n    }\n  }).then(function (response) {\n    return response.json();\n  }).then(function (items) {\n    ajouterApp(items[0]);\n  });\n  window.addEventListener(\"DOMContentLoaded\", function (event) {\n    //RECUPERATION DES DONNEES VIA API\n    fetch(SUPABASE_URL, {\n      method: \"GET\",\n      headers: {\n        apikey: SUPABASE_KEY\n      }\n    }).then(function (response) {\n      return response.json();\n    }).then(function (items) {\n      allItems.forEach(function (item) {\n        ajouterApp(item);\n      });\n    });\n  }); // On vide l'input et replace le curseur dedans\n\n  document.querySelector(\".formulaire\").reset();\n});\n\n//# sourceURL=webpack://schoolapp/./src/app.js?");

/***/ }),

/***/ "./src/routing.js":
/*!************************!*\
  !*** ./src/routing.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"applyRouting\": () => (/* binding */ applyRouting)\n/* harmony export */ });\n/**\n * Appelle la fonction correspondante à une URL donnée\n * @param {string} url \n */\nvar applyRouting = function applyRouting(url) {\n  var params; // Si l'URL ressemble à /12/details\n\n  if (params = url.match(/^\\/(\\d+)\\/details$/)) {\n    // On cherche à afficher le détail d'un apprenant\n    var id = +params[1];\n    console.log(\"J'affiche la tâche n°\" + id);\n    return;\n  } // Dans tous les autres cas, on présente la liste des apprenants\n\n\n  console.log(\"J'affiche la liste des tâches\");\n};\n\n//# sourceURL=webpack://schoolapp/./src/routing.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;