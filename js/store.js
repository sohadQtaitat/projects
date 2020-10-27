'use strict';
//Global Variables
var availableItems = [];
var projectItem = []; //Array to save all the added items of the cart
var projectDiv = document.getElementById('projectsName');
var projectName = ['Ay Eshi Sooq ' , 'Happiness Maker', 'GO LIVE Sport', 'Jobs Space', 'yumyum','Sagittarius','Yalla Tal3a','Annona',' Yars','Jordan Nature Reserves','Serious AAA','Commentat','Edusavior','Jobify','Trusty Hotels','RCC news','Animatic','quiz me','Tader','Anime','Moto Spare','Covid 19','Jo crafts','DREAM HOUSE','DEV-HOME'];


var projectsNameFinal = ['401 Python Project', '201 Project' , 'Lavender and Blue Clay', 'Pure Natural Beeswax Candles ','Coffee Bean','Berry Vanilla','Fruity project','Sweet Pae ','Sweet Orange'];


var projectLogo = ['5c9c1437-f18a-4c54-a3db-c9bdf801b09d_200x200.png','ss.png','logo12.png','logo-dark.png','yumyum (3).jpg','logo-01-01.png','logo3.png','logo1.jpg','Yars.PNG','logo - Copy.png','icon+aaa.png','commentat.png','edvaisor.PNG','jobify.png','logo.7d206724.png','logo1.png','logo2.png','quiz me.PNG','Tader.PNG','Anime.png','Capture (2).PNG','covid 19.PNG','FINAL (2).png','FINAL LOGO.png','home.png'];
// Function to create the first local storage item if it doesnt exist
if (localStorage.itemInCart === undefined ) {
  var firstItem = JSON.stringify(projectItem);
  localStorage.itemInCart = firstItem;
}
// Function to retrieve cart items from local storage
function retrieveLocalStorage(){
  var retrievedLocal = localStorage.itemInCart;
  projectItem = JSON.parse(retrievedLocal);
}
retrieveLocalStorage();
// Constructor function to create project item list
function ListItems (name, description, url,price){
  this.name = name;
  this.description = description;
  this.url = `./img/${url}`;
  this.itemNumber = i;
  this.price = price;
  availableItems.push(this);
}
// For loop to create all the projects that are inside projectNames and their descriptions and to create the listing in HTML store page using DOM manipulation
for (var i = 0; i<projectName.length;i++){
  new ListItems (projectName[i],projectsNameFinal[i], projectLogo[i]);
  // Now to create the item div itself and give it a unique ID
  var itemDiv = document.createElement('div');
  itemDiv.className = ('itemDiv');
  itemDiv.setAttribute('data-aos','flip-left');
  
  itemDiv.id = i;
  projectDiv.appendChild(itemDiv);
  // Now to create each items information, first is the name
  var itemName = document.createElement('h5');
  itemDiv.appendChild(itemName);
  console.log(availableItems[i].name);
  itemName.textContent = availableItems[i].name;
  // Now creating the image element
  var itemPicture = document.createElement('img');
  itemDiv.appendChild(itemPicture);
  itemPicture.src = availableItems[i].url;
  // Now creating the description of the image
  var itemDescription = document.createElement('p');
  itemDiv.appendChild(itemDescription);
  itemDescription.textContent = availableItems[i].description;
  
  // Now creating a button to add to cart
  var buttonEl = document.createElement('button');
  itemDiv.appendChild(buttonEl);
  buttonEl.className = 'showPageButton';
  buttonEl.textContent = 'Show Project';
}
// Make an array to with all buttons to choose from them
var buttonElClass = document.getElementsByClassName('showPageButton');
// Adding event listeners to the buttons
for (i = 0; i < availableItems.length ; i++){
  var addButton = buttonElClass[i];
  addButton.addEventListener('click', showPage);
}
//Add project Links 
function showPage(event){
  var addItem = event.target;
  var itemID = addItem.parentElement.id;
    projectItem.push(availableItems[itemID]);
    cartLocalStorage();
    cartLength();


}


function cartLength(){
  var length = document.getElementById('cartLength');
  length.textContent = '[' + projectItem.length + ']';
}
cartLength();

