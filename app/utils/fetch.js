function status(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    }
    return response.text().then(function (text) {
        throw new Error(text);
    });
}
exports.status = status;
function text(response) {
    return response.text();
}
exports.text = text;
function json(response) {
    return response.json();
}
exports.json = json;
