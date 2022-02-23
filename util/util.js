function fakeAjax(url, cb) {
    var fake_responses = {
        "file1": "The first text",
        "file2": "The middle text",
        "file3": "The last text"
    };
    var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

    console.log("Requesting: " + url);

    setTimeout(function() {
        var resp = fake_responses[url] || "No resource found for: " + url;
        cb(resp);
    }, randomDelay);
}

function output(text) {
    console.log(text);
}

module.exports = {
    fakeAjax: fakeAjax,
    output: output