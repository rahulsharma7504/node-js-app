const htmlPdf = require('html-pdf');
const fs=require('fs');

const options = { format: 'Letter' };
const path =require('path');
const file=fs.readFileSync(path.join(__dirname, 'html.html'));

const data=file.toString();
htmlPdf.create(data, options).toFile('Name.pdf', (err, res) => {
  if (err) {
    console.error(err);
    return;
    console.log(err.toString());
  }
  console.log(res);
});