let api = {
  key: `d487b13a4a2bcb494ab0b506bff10656384c6df6`,
  base: `https://emoji-api.com/emojis?access_key=`,
};

let emojiCollection = document.querySelectorAll(
  `.emoji__generator .div__emoji`
);

fetch(`https://emoji-api.com/emojis?access_key=${api.key}`)
  .then((emoji) => emoji.json())

  .then((object) => {
    emojiCollection.forEach((value, index) => {
      let randomizer = Math.floor(Math.random() * object.length);
      value.innerHTML = `${object[randomizer].character}`;
    });
  });
