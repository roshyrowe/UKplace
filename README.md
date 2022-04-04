## Browser script instructions (easy)
First, install the [TamperMonkey](https://www.tampermonkey.net/) browser extension:
- [Chrome Webstore](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en)
 - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/) (ViolentMonkey)

Then just click **[here](https://raw.githubusercontent.com/roshyrowe/UKplace/main/userscript.user.js)**, click "Install", refresh r/place and you're good to go!

**The script will allow for CORS access press 'Allow all' when it pops up!!**

This script will automate your tile placements according to a template, which we can edit remotely to rapidly push changes.

The code is open source! Inspect it for yourself!







## ALTERNATIVE: Headless script instructions (advanced)

This is intended for cluster users running multiple accounts. If you don't have any technical experience, just use the browser script instead.

### How to get your reddit_session cookie
**NOTE: People have reported that this is annoying to do on chrome because text gets unselected. Therefore, we recommend that you use Firefox.**

1. Go to [r/place](https://reddit.com/r/place) (make sure you are logged in on the account you want to get the cookie for)
2. Open dev tools and go to the network tab
3. Refresh the page
4. Scroll all the way up and click on the first request to reddit.com/r/place (See image)
![Screenshot_20220403_165251](https://user-images.githubusercontent.com/9784257/161433856-27ef7e7c-7f00-4b37-b274-4199ea919aa9.png)
5. Go to the tab called `Cookies`
6. Copy the value of the `reddit_session` cookie

### Installation instructions

1. Install [NodeJS](https://nodejs.org/).
2. Download the bot via [this link](https://github.com/roshyrowe/UKplace/archive/refs/heads/main.zip).
3. Extract the bot anywhere on your desktop
4. Open a command prompt/terminal in this folder — Windows: Shift+right mousebutton in the folder -> Click on "open Powershell here"
5. Install the dependencies: `npm i`
6. Execute the bot `node bot.js SESSION_COOKIE_HERE`
7. BONUS: You can repeat these steps for any amount of accounts you'd want. Keep in mind to use different accounts.

Thanks to PlaceNL for the bot we've based this on too!
