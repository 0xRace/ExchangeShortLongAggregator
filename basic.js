const fetch = require("node-fetch");
var poll = 0;
var count = 1;
var avg = 0;
for (i = 1; i < 100; i++) {
    setTimeout(() => {
        (async () => {
            const response = await fetch("https://www.bybt.com/api/api/futures/longShortRate?timeType=3&symbol=BTC", {
                "headers": {
                    "accept": "application/json, text/plain, */*",
                    "accept-language": "en-US,en;q=0.9",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "cookie": "i18n_redirected=en"
                },
                "referrer": "https://www.bybt.com/LongShortRatio",
                "referrerPolicy": "strict-origin-when-cross-origin",
                "body": null,
                "method": "GET",
                "mode": "cors"
            })
            const json = await response.json();
            const jsonObj = JSON.stringify(json);
            //console.log(jsonObj);
            const n = json.data[0];
            const longRate = n.longRate;
            const shortRate = n.shortRate;
            console.log("Poll " + count);
            count++;
            avg = (avg * (count - 2) + longRate) / (count-1);
            console.log("Long Rate: "+longRate); 
            console.log("Short Rate: " + shortRate);
            console.log("Average Rate: " + avg);
        })();
    }, poll += 2000);
    
}