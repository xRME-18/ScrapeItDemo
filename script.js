document.getElementById('scrapeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var url = document.getElementById('urlInput').value;
    var contentsString = document.getElementById('contentsInput').value;

    try {
        var contents = JSON.parse(contentsString); // Parsing the string as JSON
        fetch('/.netlify/functions/scraper', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Make sure to set the content type
            },
            body: JSON.stringify({ url, contents }), // Sending the parsed JSON object
        })
        .then((response) => response.json())
        .then((data) => {
            document.getElementById('results').innerText = JSON.stringify(data, null, 2);
        });
    } catch (err) {
        console.error('Parsing error:', err);
        // Handle parsing error (maybe display an error message to the user)
        document.getElementById('results').innerText = 'Invalid JSON format in contents.';
    }
});
