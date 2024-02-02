const T = require("tesseract.js")

T.recognize('./MEDS4.jpeg', 'eng',)
.then(out =>console.log(out.data.text))

