var listToPlace = '<h1>New List</h1><ol><li>gjjkkhh</li><li>gjjkkhh</li><li>gjjkkhh</li><li>gjjkkhh</li></ol>';

function toggleText() {
    var slowLorisElement = document.getElementById("slowLoris");
    var toggleLink = document.getElementById("toggleLink");
    
    if (toggleLink.innerHTML.includes("more")) {
        var expandedParagraph = "Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals.";
        slowLorisElement.innerHTML += expandedParagraph + listToPlace;
        toggleLink.innerHTML = "<em>Click for less.</em>";
    } else {
        slowLorisElement.innerHTML = "Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus.";
        toggleLink.innerHTML = "<em>Click for more.</em>";
    }}
