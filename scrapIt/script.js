document.getElementById('scrapeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var url = document.getElementById('urlInput').value;
    var contents = document.getElementById('contentsInput').value;
    fetch('/.netlify/functions/scraper', {
        method: 'POST',
        body: JSON.stringify({ url, contents }),
    })
        .then((response) => response.json())
        .then((data) => {
            document.getElementById('results').innerText = JSON.stringify(data, null, 2);
        });
});