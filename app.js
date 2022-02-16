function FetchDividendData(ticker) {
    // let s = fetch("https://api.stockanalysis.com/wp-json/sa/p?s=iep&t=stocks", {
    // "headers": {
    // "accept": "*/*",
    // "accept-language": "en-US,en;q=0.9",
    // "if-modified-since": "Wed, 16 Feb 2022 07:12:04 GMT",
    // "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Google Chrome\";v=\"98\"",
    // "sec-ch-ua-mobile": "?0",
    // "sec-ch-ua-platform": "\"Windows\"",
    // "sec-fetch-dest": "empty",
    // "sec-fetch-mode": "cors",
    // "sec-fetch-site": "same-site"
    // },
    // "referrer": "https://stockanalysis.com/",
    // "referrerPolicy": "strict-origin-when-cross-origin",
    // "body": null,
    // "method": "GET",
    // "mode": "cors",
    // "credentials": "omit"
    // });
    // console.log(s);
    fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
    console.log("This function is functioning");
}