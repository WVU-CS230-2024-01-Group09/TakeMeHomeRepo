// ListingHandler.js
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Retrieve form data
        const name = document.getElementById("name").value;
        const tripDate = document.getElementById("tripDate").value;
        const destination = document.getElementById("destination").value;
        const meetingTime = document.getElementById("meetingTime").value;
        const tripDestination = document.getElementById("tripDestination").value;

        
        const offer = {
            name: name,
            tripDate: tripDate,
            destination: destination,
            meetingTime: meetingTime,
            tripDestination: tripDestination
        };

        //  handle offer submission ( send to backend, store in database)
        handleOfferSubmission(offer);

        // Optionally, clear form fields after submission
        form.reset();
    });

    document.addEventListener("DOMContentLoaded", function () {
        const today = new Date();
        const year = today.getFullYear();
        let month = today.getMonth() + 1; // JavaScript months are zero-based
        let day = today.getDate();

        // Add leading zero if month/day is less than 10
        if (month < 10) {
            month = '0' + month;
        }
        if (day < 10) {
            day = '0' + day;
        }

        const currentDate = year + '-' + month + '-' + day;
        document.getElementById('tripDate').setAttribute('min', currentDate);
    });

    function handleOfferSubmission(offer) {
        console.log("Offer Submitted:", offer);
    }
});

