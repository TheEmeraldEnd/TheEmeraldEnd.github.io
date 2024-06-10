function message() {
    //let consoleElement = document.getElementById('Console');
    //consoleElement.innerText = 'Test Successful';

    let name = document.getElementById('name').value;
    let message = document.getElementById('message').value;

    SendContentToDiscord(`${name}: ${message}`)

    
}

//Sends contents to the webhook
function SendContentToDiscord(contents) {
    const webhook =
    'https://discord.com/api/webhooks/1249497936153280653/8VsBFqRxWQ97si__bR6O4ynlmwQSgecfYWiKSAvY_sFHQqODhXI0K-6ZoUmUeg8G7gr8';

    const request = new XMLHttpRequest();
    request.open('POST', webhook);
    request.setRequestHeader('Content-type', 'application/json');
    const params = {
        content: contents
    };

    request.send(JSON.stringify(params));
}