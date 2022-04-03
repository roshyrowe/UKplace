## Browser script instructions (easy)
First, install the [TamperMonkey](https://www.tampermonkey.net/) browser extension:
- [Chrome Webstore](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en)
 - [FireFox](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/) (ViolentMonkey)

Then just click **[here](https://raw.githubusercontent.com/roshyrowe/UKplace/main/userscript.user.js)**, click "Install", refresh the page and you're good to go!

This script will automate your tile placements according to a template, which we can edit remotely to rapidly push changes.

The code is open source! Inspect it for yourself!







## ALTERNATIVE: Headless script instructions (advanced)

This is intended for cluster users running multiple accounts. If you don't have any technical experience, just use the browser script instead.

### How to get an access token:
1. Go to [r/place](https://www.reddit.com/r/place/)
2. Open the browser console (F12 -> Click on console)
3. Paste this code and press enter:
```
async function getAccessToken() {
    const usingOldReddit = window.location.href.includes('new.reddit.com');
    const url = usingOldReddit ? 'https://new.reddit.com/r/place/' : 'https://www.reddit.com/r/place/';
    const response = await fetch(url);
    const responseText = await response.text();

    return responseText.split('\"accessToken\":\"')[1].split('"')[0];
}

await getAccessToken()
```
4. The text between quotes (`"`) is your access token

### Installation instructions

1. Install [NodeJS](https://nodejs.org/).
2. Download the bot via [this link](https://github.com/roshyrowe/UKplace/archive/refs/heads/main.zip).
3. Extract the bot anywhere on your desktop
4. Open a command prompt/terminal in this folder — Windows: Shift+right mousebutton in the folder -> Click on "open Powershell here"
5. Install the dependencies: `npm i`
6. Execute the bot `node bot.js ACCESS_TOKEN_HERE`
7. BONUS: You can repeat these steps for any amount of accounts you want. Keep in mind to use different accounts.


### Docker

1. docker built . -t ukplace
2. docker run --name ukplace_1 -d-e ACCESS_TOKEN=$YOUR_ACCESS_TOKEN ukplace
3. docker logs ukplace_1 -f 


Thanks to PlaceNL for the bot we've based this on too!
