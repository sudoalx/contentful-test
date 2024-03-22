const fs = require('fs');
const { createClient } = require('contentful');
const { data } = require('autoprefixer');

const client = createClient({
    space: "",
    accessToken: ""
})

client.getEntries().then(data => {
    const [siteEntry] = data.items.filter(item => item.sys.contentType.sys.id === 'site');

    const jsonString = JSON.stringify(siteEntry.fields, null, 2);
    const filePath = './src/data/site.json';

    fs.writeFile(filePath, jsonString, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`Data written to ${filePath}`);
    })
})