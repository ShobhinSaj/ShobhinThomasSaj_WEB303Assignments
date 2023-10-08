/*
    Assignment #4
    Shobhin Thomas Saj
*/

$(document).ready(function () {
    
    if(navigator.geolocation){
        
        navigator.geolocation.getCurrentPosition((position) =>
        {   
            var strdLat = localStorage.getItem('userLat');
            var strdLong = localStorage.getItem('userLong');
            if(strdLat && strdLong){
                //calculate distance travelled by user post last visit
                var dist= calcDistanceBetweenPoints(position.coords.latitude,position.coords.longitude,strdLat,strdLong);
                $('#locationhere').html(`<p>Your current location is <b>${position.coords.latitude}</b> deg Latitude and <b>${position.coords.longitude}</b> deg Longitude
                with Accuracy ${position.coords.accuracy}</br>
                Your location on last visit was <b>${strdLat}</b> deg Latitude and <b>${strdLong}</b> deg Longitude</br></br><h3 id="Wlcme">Welcome Back!</h3>`);
                console.log($('#Wlcme').html());
                
                //display distance travelled since last visit
                if(dist>0){
                    dist/=1000;
                    $(`<p>You have travelled ${dist} km(s) since your last visit!</p>`).appendTo('#locationhere');
                }
                
                clearLocstrge();            //clear location from local storage
                //set current location values to local stoorage                
                localStorage.setItem("userLat", JSON.stringify(position.coords.latitude));
                localStorage.setItem("userLong", JSON.stringify(position.coords.longitude));
                
            }
            else{
                
                $('#locationhere').html(`<p>Your current location is <b>${position.coords.latitude}</b> deg Latitude and <b>${position.coords.longitude}</b> deg Longitude
                </br></br><h3 class="Wlcme">Welcome to E Corp!</h3>`);
                localStorage.setItem("userLat", JSON.stringify(position.coords.latitude));
                localStorage.setItem("userLong", JSON.stringify(position.coords.longitude));
                
            }
        },
        (err) => {    //display error message if geolocation not available
            alert(err.message);
        });

    }
    else{
        displayErrorMessage("Geolocation is not supported by your browser.");
    }


    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
    function clearLocstrge(){   //function clear location from local storage
        localStorage.removeItem("userLat");
        localStorage.removeItem("userLong");
    }


});


