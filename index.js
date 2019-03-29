const emojiUnicode = require("emoji-unicode"),
  toEmoji = require("emoji-name-map");

// это текст смайлика, который пришел с сервера
let emojiText = 'grinning';

//преобразуем его в строку Unicode
let emojiCode = emojiUnicode(toEmoji.get(`:${emojiText}:`));

let emojiDomNode = document.querySelector('.emoji');

//вставим смайлик в DOM
emojiDomNode.textContent = String.fromCodePoint(`0x${emojiCode}`);
