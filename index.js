const emojiUnicode = require("emoji-unicode"),
  toEmoji = require("emoji-name-map");

// это текст смайлика, который пришел с сервера
let emojiText = 'neutral-face';

//в нем могут быть тире, а emoji устроены так, что в них тире нужно заменить на нижнее подчеркивание
emojiText = emojiText.replace(/\-/gi, "_");

//преобразуем его в строку Unicode
let emojiCode = emojiUnicode(toEmoji.get(`:${emojiText}:`));

let emojiDomNode = document.querySelector('.emoji');

//вставим смайлик в DOM
emojiDomNode.textContent = String.fromCodePoint(`0x${emojiCode}`);
