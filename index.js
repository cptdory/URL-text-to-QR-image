
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer.prompt([
    {
    type: 'input',
    name: 'URL',
    message: "site?: ",
    }
])
  .then((answers) => {
    const gURL = answers.URL;
    var qr_svg = qr.image(gURL);
    qr_svg.pipe(fs.createWriteStream('qr-image.png'));

    const gText = answers.URL;
    fs.writeFile("site.txt", gText, (err) =>{
        if (err) throw err;
        console.log("The file has been saved");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log ("Couldn't be rendered in the current environment");
    } else {
      console.log ("Something else went wrong");
    }
  });
