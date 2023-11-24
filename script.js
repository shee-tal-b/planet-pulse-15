function cardspace() {
       var carddigit = document.getElementById('cardno').value;
       if (carddigit.length == 4 || carddigit.length == 9 || carddigit.length == 14) {
           document.getElementById('cardno').value = carddigit + ' ';
           document.getElementById('cardno').max = 1;
       }
   }
   
   function addSlashes() {
       var expire_date = document.getElementById('validtill').value;
       if (expire_date.length == 2) {
           document.getElementById('validtill').value = expire_date + '/';
           document.getElementById('validtill').max = 1;
       }
   }
   
   function validateForm(event) {
       // Prevent the default form submission behavior
       event.preventDefault();
   
       var cardNumber = document.getElementById("cardno").value;
       var validTill = document.getElementById("validtill").value;
       var cvv = document.getElementById("cvv").value;
   
       // Check if the Card Number is empty
       if (cardNumber === "") {
           alert("Please enter the Card Number.");
           return false;
       }
   
       // Check if the Valid Till field is empty
       if (validTill === "") {
           alert("Please enter the Valid Till date.");
           return false;
       }
   
       // Check if the CVV field is empty
       if (cvv === "") {
           alert("Please enter the CVV.");
           return false;
       }
   
       // Perform specific validations for each field if needed
   
       // Example: Validating card number length
       if (cardNumber.length !== 19) {
           alert("Please enter a valid Card Number.");
           return false;
       }
   
       // Example: Validating the format of the Valid Till date
       var validTillRegex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/; // MM/YYYY or MM/YY format
       if (!validTillRegex.test(validTill)) {
           alert("Please enter a valid Valid Till date in MM/YYYY or MM/YY format.");
           return false;
       }
   
       // Example: Validating CVV length
       if (cvv.length !== 3) {
           alert("Please enter a valid CVV.");
           return false;
       }
       
       // Validate if the expiration date is not expired
       var currentDate = new Date();
       var currentYear = currentDate.getFullYear();
       var currentMonth = currentDate.getMonth() + 1; // Months are zero-based

       var validTillParts = validTill.split("/");
       var expirationMonth = parseInt(validTillParts[0], 10);
       var expirationYear = parseInt(validTillParts[1], 10);

       if (expirationYear < currentYear || (expirationYear === currentYear && expirationMonth < currentMonth)) {
              alert("The card has expired. Please enter a valid expiration date.");
              return false;
       }

       // If all validations pass, show a success message
       // and prevent redirection
       if (window.confirm("Payment successful! Click OK to continue.")) {
           // Stay on the same page after OK click
           return false;
       } else {
           // Optionally, allow form submission if cancel is clicked
           return true;
       }
   }
   