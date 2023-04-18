var fs = require('fs');

// Change the content of the file as you want
// or either set fileContent to null to create an empty file
for(var i=1900;i<1925;i++) {
    var data = {
        "name": `Beyond #${i}`,
        "attributes":  [
            {
                "trait_type": "Cover",
                "value": "Concrete",
                "rarity": 7.0
            },
            {
                "trait_type": "Handle",
                "value": "Snow",
                "rarity": 8.0
            },
            {
                "trait_type": "Side",
                "value": "Polished Metal Silver",
                "rarity": 20.0
            },
            {
                "trait_type": "Background.1",
                "value": "Common",
                "rarity": 50.0
            }
        ],
        "rarity": 1.525878906250001e-35,
        "image": `https://metacultrstorage.blob.core.windows.net/meta-test2/${i}.png`
      }
    var filepath = i;
    JSON.stringify(data);
    fs.writeFile(`${filepath}`, JSON.stringify(data), (err) => {
        if (err) throw err;
    
        console.log("The file was succesfully saved!");
    });     
}