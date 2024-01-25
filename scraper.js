const scrapeIt = require("scrape-it")

// Promise interface
scrapeIt("https://ionicabizau.net", {
    "title": ".header h1",
    "desc": ".header h2",
    "avatar": {
        "selector": ".header img",
        "attr": "src"
    }
}
).then(({ data, status }) => {
    console.log(`Status Code: ${status}`)
    console.log(data)
});
// const scrapeIt = require("scrape-it");

// Define the URL or HTML content
// let urlOrHtml = 'https://en.wikipedia.org/wiki/Indus_Valley_Civilisation';

// scrapeIt(urlOrHtml, {
//     // Define the structure of the scraped data
    // contents: {
    //     listItem: ".vector-toc-contents .vector-toc-list-item",
    //     data: {
    //         title: {
    //             selector: ".vector-toc-text",
    //             how: "text"
    //         },
    //         link: {
    //             selector: ".vector-toc-link",
    //             attr: "href"
    //         }
    //     }
    // }
// }, (err, { data }) => {
//     console.log(err || data);
// }).then(({ data, status }) => {
//     console.log(`Status Code: ${status}`)
//     console.log(data)
// })





// // Async-Await
// (async () => {
//     const { data } = await scrapeIt('https://en.wikipedia.org/wiki/Indus_Valley_Civilisation', {
//         // Define the structure of the scraped data
//         contents: {
//             listItem: ".vector-toc-contents .vector-toc-list-item",
//             data: {
//                 title: {
//                     selector: ".vector-toc-text",
//                     how: "text"
//                 },
//                 link: {
//                     selector: ".vector-toc-link",
//                     attr: "href"
//                 }
//             }
//         }
//     }, (err, { data }) => {
//         console.log(err || data);
//     });
    
    // { articles:
    //    [ { createdAt: Mon Mar 14 2016 00:00:00 GMT+0200 (EET),
    //        title: 'Pi Day, Raspberry Pi and Command Line',
    //        tags: [Object],
    //        content: '<p>Everyone knows (or should know)...a" alt=""></p>\n',
    //        classes: [Object] },
    //      { createdAt: Thu Feb 18 2016 00:00:00 GMT+0200 (EET),
    //        title: 'How I ported Memory Blocks to modern web',
    //        tags: [Object],
    //        content: '<p>Playing computer games is a lot of fun. ...',
    //        classes: [Object] },
    //      { createdAt: Mon Nov 02 2015 00:00:00 GMT+0200 (EET),
    //        title: 'How to convert JSON to Markdown using json2md',
    //        tags: [Object],
    //        content: '<p>I love and ...',
    //        classes: [Object] } ],
    //   pages:
    //    [ { title: 'Blog', url: '/' },
    //      { title: 'About', url: '/about' },
    //      { title: 'FAQ', url: '/faq' },
    //      { title: 'Training', url: '/training' },
    //      { title: 'Contact', url: '/contact' } ],
    //   title: 'Ionică Bizău',
    //   desc: 'Web Developer,  Linux geek and  Musician',
    //   avatar: '/images/logo.png' }
// })()