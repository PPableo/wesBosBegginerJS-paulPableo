/* --------------------- Example 1 Creating HTML via JS --------------------- */
// NOTE: you define a variable then search using document; then createElement
const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/500';
myImage.alt = 'Nice photo';

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

document.body.appendChild(myDiv);
myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

document.body.appendChild(myDiv);

// oh shoot! we need to add something to the top like a heading!
const heading = document.createElement('h2');
heading.textContent = "WES BOX X PAUL X JS"

myDiv.insertAdjacentElement("beforebegin", heading);
// NOTE: You can use it if you need to insert a card in a modal

/* ------- Exercise Example 1 Create an unordered list through JS DOM ------ */
// WE create a variable then use document.createElement to create a ul
const list = document.createElement('ul');
// WE create another variable then use document.createElement to create a li
const li = document.createElement('li');
// we're adding textContent to the li we just created naming it three
li.textContent = 'three';
// we use list variable then use .appendChild(li) to inject li into the ul(list)
list.appendChild(li)

document.body.insertAdjacentElement('afterbegin', list);

// NOTE: This a hard and complicated method to make the point not to do this
const li5 = document.createElement('li');
li5.textContent = 'Five';
list.append(li5);

const li1 = li5.cloneNode(true);
li1.textContent = 'one';
list.insertAdjacentElement('afterbegin', li1);

const li4 = document.createElement('li');
li4.textContent = 'four';
li5.insertAdjacentElement('beforebegin', li4);s

const li2 = document.createElement('li');
li2.textContent = 'two';
li1.insertAdjacentElement('afterend', li2);
