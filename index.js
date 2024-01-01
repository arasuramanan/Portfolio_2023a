const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    console.log(top)
    if(top >=100) {
        header.classList.add("navbarDark");
    }
    else {
        header.classList.remove("navbarDark");
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Target the elements by their IDs
    var titleElement = document.getElementById('hero-title');
    var descElement = document.getElementById('hero-desc');

    // Function to type the text with pauses
    function typeWithPauses(element, words, index) {
        if (index < words.length) {
            element.textContent += words[index] + ' ';
            index++;
            setTimeout(function () {
                typeWithPauses(element, words, index);
            }, 500); // Adjust the pause time (in milliseconds)
        }
    }

    // Call the typing function for each element
    typeWithPauses(titleElement, ['Hi,', 'it\'s', 'me', 'Arasu', 'Ramanan'], 0);

    // Pause before typing the second sentence
    setTimeout(function () {
        // Clear the content of the second element before typing
        descElement.textContent = '';
        // Call the typing function for the second element
        typeWithPauses(descElement, ['I', 'am', 'a', 'professional', 'Full', 'Stack', 'Developer'], 0);
    }, 2000); // Adjust the pause time before typing the second sentence (in milliseconds)
});
