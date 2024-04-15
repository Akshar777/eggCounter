
$("#inc").click(function(){
    let counter = localStorage.getItem('counter');
            
    // If counter is null (first visit), set it to 0
    if (counter === null) {
        counter = 0;
    } else {
        // If not null, parse the value to integer
        counter = parseInt(counter);
    }
    // Increment the counter
    counter++;

    // Update the counter value in the HTML
    document.getElementById('counter').innerText = counter;

    // Update the counter value in local storage
    localStorage.setItem('counter', counter);
console.log(counter);
});

$('#reset').click(function(){
    let counter = 0;
            
            // Update the counter value in the HTML
            document.getElementById('counter').innerText = counter;
            
            // Clear the counter value in local storage
            localStorage.removeItem('counter');
        });    

// When the page loads, check if there's a stored counter value and update the HTML
window.onload = function() {
    let counter = localStorage.getItem('counter');
    if (counter !== null) {
        document.getElementById('counter').innerText = counter;
    }
}

