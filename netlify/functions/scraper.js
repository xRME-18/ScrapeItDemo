const scrapeIt = require("scrape-it");

exports.handler = async function(event, context) {
    // Parsing the event body to get url and contents
    const { url, contents } = JSON.parse(event.body);

    try {
        // contents is already a JavaScript object, no need to parse it again
        console.log(contents);

        return scrapeIt(url, contents)
            .then(({ data, response }) => ({
                statusCode: 200,
                body: JSON.stringify({ data, status: response.statusCode }, null, 2),
            }))
            .catch((error) => ({
                statusCode: 500,
                body: JSON.stringify({ error: error.toString() }, null, 2),
            }));
    } catch (e) {
        console.error("Error:", e);
        // Handle the error if there's an issue with the scrapeIt function or others
        return {
            statusCode: 500,
            body: JSON.stringify({ error: e.toString() }, null, 2)
        };
    }
};
