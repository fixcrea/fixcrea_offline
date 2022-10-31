/*!
  * FixCrea Offline
  * Simple calculator using javascript
  * Based on the linear regression model
  */
    $(document).ready(function(){
        $("#submit").on("click", function(){
            var input = parseInt($('#number').val());
            var output = 0.9508 * input - 16.104;
            let label = document.getElementById('output-bar');
            if (output <= 5) {
                label.innerText = "Below detection limit.";
            } else {                
                label.innerText = "The approximate enzymatic result is " + output.toFixed(2) + " umol/L.";
            }
        })
    })
