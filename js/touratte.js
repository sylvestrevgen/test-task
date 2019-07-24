const authorsList = [
  {
    _id: 1,
    name: "Todd"
  },
  {
    _id: 2,
    name: "Rob"
  },
  {
    _id: 3,
    name: "Sevil"
  }
];
// Create random text function
const createRandomText = () => {
  const symbols =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const symbolsArr = symbols.split("");
  let resultText = [];
  for (let i = 0; i < 50; i += 1) {
    resultText.push(
      symbolsArr[Math.round(Math.random() * (symbolsArr.length - 1))]
    );
  }
  return resultText.join("");
};

// Create CustomEvent with name shout and detail with the random author (from authorsList) and randomly generated text
const event = new CustomEvent("authorAdded", {
  detail: {
    author: '',
    text: ''
  }
});

// Function which call the event
const callCustomEvent = (target, e) => {
  e.detail.author = authorsList[Math.round(Math.random() * (authorsList.length - 1))].name;
  e.detail.text = createRandomText();
  target.dispatchEvent(e);

}; 

// The script will dispatch the event on a random interval (1-5 seconds)
const interval = setInterval(() => {
  callCustomEvent(document, event);
}, Math.ceil(Math.random() * 5000));