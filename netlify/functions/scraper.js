const scrapeIt = require("scrape-it");

exports.handler = async function(event, context) {
    const { url, contents } = JSON.parse(event.body);

    return scrapeIt(url, {contents})
        .then(({ data, response }) => ({
            statusCode: 200,
            body: JSON.stringify({ data, status: response.statusCode }, null, 2),
        }))
        .catch((error) => ({
            statusCode: 500,
            body: JSON.stringify({ error: error.toString() }, null, 2),
        }));
};