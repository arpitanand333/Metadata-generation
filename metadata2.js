var fs = require('fs');

// Change the content of the file as you want
// or either set fileContent to null to create an empty file
for(var i=1;i<=1100;i++) {
    var data = {
    "name": `Magic Lamp #${i}`,
    "symbol": "LAMP",
    "description": "SleepBe Magic Lamp NFT",
    "external_url": "https://sleepbe.io",
    "edition": "genisys",
    "background_color": "000000",
    "image": `https://market-place-lamps.s3.ap-south-1.amazonaws.com/NFT/${i}.png`
      }
    var filepath = i;
    JSON.stringify(data);
    fs.writeFile(`metadata/${filepath}.json`, JSON.stringify(data), (err) => {
        if (err) throw err;
    
        console.log("The file was succesfully saved!");
    });     
}