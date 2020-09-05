document.addEventListener('DOMContentLoaded', function(tab) {
    var checkPageButton = document.getElementById('clickIt');

    checkPageButton.addEventListener('click', function() {
        chrome.tabs.getSelected(null, function(tab) {
            alert("alert");
        })
    })
});