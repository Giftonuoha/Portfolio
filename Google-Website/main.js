const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(event) {
    if (event.code === "Enter") {
        search();
        
    }
});

function search() {
    const input = searchInput.value;

    window.location.href = ("https://www.google.com/search?q=" + input + "&oq=" + input + "&aqs=chrome.0.35i39i650j46i433i512j46i131i340i433i512j46i199i465i512j0i131i433i512j46i433i512j46i175i199i512j46i512j46i199i465i512j0i271.7932j0j9&sourceid=chrome&ie=UTF-8")
}

