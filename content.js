window.addEventListener("spfdone", loadDoc);
window.addEventListener("yt-navigate-start", loadDoc);
window.addEventListener("load", loadDoc);

function loadDoc() {

    var url_string = window.location.toString();
    var url = new URL(url_string);
    var paramV = url.searchParams.get("v");

    if (paramV) {
        $.getJSON('https://www.googleapis.com/youtube/v3/videos?part=snippet&id=' + paramV + '&key=AIzaSyBqN9buHeJg-sf_TYoXafOY9V6NW8sQ9zM', function (data) {
            var categoryId = data.items[0].snippet.categoryId;
            chrome.storage.sync.get(categoryId, function (items) {
                var newVar = items[categoryId];
                if (newVar) {
                    // Redirect the tab
                    window.location = "https://www.youtube.com/";
                }
            });

        });
    }
}
