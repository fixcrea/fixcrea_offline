/*!
  * FixCrea Offline
  * Simple calculator using javascript
  * Based on the linear regression model
  */
    $(document).ready(function(){
        $("#submit").on("click", function(){
            var input = parseInt($('#number').val() * 88.4);
            var output = (0.9508 * input - 16.104) / 88.4;
            let label = document.getElementById('output-bar');
            if (output <= 0.001) {
                label.innerText = "Below detection limit.";
            } else {                
                label.innerText = "The approximate enzymatic result is " + output.toFixed(2) + " umol/L.";
            }
        })
    })
