/* -------------------- Example 1 DOM Selecting Elements -------------------- */

// const p = document.querySelector('p');
// const imgs = document.querySelectorAll('.item img');
// const item2 = document.querySelector('.item2');
// const item2Image = item2.querySelector('img');
// const heading = document.querySelector('h2');


// console.log(heading.textContent);
// console.log(heading.innerText);
// set the textContent property on that element
// heading.textContent = 'LuckyCat Tattoo'
// NOTE: textContent targets all elements including CSS and JS
// NOTE: innerText targets specially the written/legible text
// console.log(heading.innerText)

// console.log(heading.innerHTML);
// console.log(heading.outerHTML);

// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);

// pizzaList.textContent = `${pizzaList.textContent} 🍕`;
// pizzaList.insertAdjacentText('afterbegin', '🍕');
// // pizzaList.insertAdjacentText('beforeend', '🍕');


/* ------------------- Example 1 DOM Working with Classes ------------------- */
const pic = document.querySelector('.nice')
pic.classList.add('open');
pic.classList.remove('cool');
pic.classList.toggle('round')
console.log(pic.classList)

/* --------------------- Example 2 DOM Add/Remove Classes ------------------- */
// NOTE: we create a function here, like any definition
// NOTE: This is typical for modals, or slides to show a pop up or not on click
function toggleRound() {
    pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound)

/* ------------------ Example 3 DOM Custom Data Attributes ------------------ */
pic.alt = 'Screen Holder Pic'; // Setter
console.log(pic.alt); // Getter
console.log(pic.naturalWidth); // Getter
pic.width = 200;

// pic.setAttribute('wes-is-cool', 'REALLY COOL PIC')
// pic.addEventListener('load', function() {
//     console.log(pic.naturalWidth); // Getter
// });

/* ------------------ Example 4 DOM Custom Data Attributes ------------------ */
// NOTE: Great use for modal or pop up stuff!
const custom = document.querySelector('.custom');
console.log(custom.dataset);

custom.addEventListener('click', function() {
    alert(`Welcome ${custom.dataset.name} ${custom.dataset.last}`);
});