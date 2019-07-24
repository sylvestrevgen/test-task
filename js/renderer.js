// UI DOM Elements
const body = document.querySelector('body');
const list = document.createElement('ul');
const shoutContainer = document.createElement('div');
list.classList.add('list')
shoutContainer.classList.add('shoutContainer');

body.prepend(list);
body.prepend(shoutContainer);

// Object with authors and counts of shouts
let helpAuthorsObj = {};

// Create the list of authors with the count of shouts
authorsList.map(author => {
  let listItem = document.createElement('li');
  listItem.dataset.author = author.name;
  listItem.textContent = `Author name: ${author.name} count of shouts: 0`;
  list.appendChild(listItem);
  helpAuthorsObj[author.name] = 0;
});

// Listen to dispatched Event shout.
const listener = document.addEventListener("authorAdded", e => {
  // Add to the page caught shout with author name and text
  let authorName = e.detail.author;
  let shoutText = e.detail.text;
  const shout = document.createElement('p');
  shout.textContent = `Author name: ${authorName}, text: ${shoutText}`;

  // Style shouts for highlighting
  shout.style.width = "48%";
  shout.style.margin = "1px 5px 1px 5px";
  shout.style.color = "#df622b";
  shout.style.padding = "5px 5px 5px 5px";
  shout.style.backgroundColor = "#ecd5cd";
  shout.style.border = "2px solid white";
  shout.style.borderRadius = "8px";

  shoutContainer.appendChild(shout);

  // Element highlighted for 1 second
  setTimeout(() => {
    shout.style.color = "black";
    shout.style.backgroundColor = "white";
  }, 1000)

  // Add to the list authors count of shouts
  if(helpAuthorsObj.hasOwnProperty(authorName)) {
    helpAuthorsObj[authorName] = helpAuthorsObj[authorName] + 1;
    let oldListItem = document.querySelector(`li[data-author="${authorName}"]`);
    oldListItem.textContent = `Author name: ${authorName} count of shouts: ${helpAuthorsObj[authorName]}`;
  }
});

// Add ability to stop event dispatching
const stopBtn = document.createElement('button');
stopBtn.dataset.action = 'stop';
stopBtn.textContent = 'Stop dispatching';
list.after(stopBtn);

stopBtn.addEventListener('click', () => {
  clearInterval(interval);
})