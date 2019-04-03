console.log("hello world");
//my api key a63a34e7f0fbe1a88d351460092f8aa3

////$(document).ready(function(){





// create giphy url to get json data
//var travel = "https://api.travelpayouts.com/v2/prices/latest?currency=usd&period_type=year&page=1&limit=30&show_to_affiliates=true&sorting=price&trip_class=0&token=a63a34e7f0fbe1a88d351460092f8aa3";

//GET "https://api.travelpayouts.com/v1/prices/calendar?depart_date=2016-11&origin=MOW&destination=BCN&calendar_type=departure_date&token=a63a34e7f0fbe1a88d351460092f8aa3";

$.get("https://api.travelpayouts.com/v2/prices/latest?currency=usd&period_type=year&page=1&limit=30&show_to_affiliates=true&sorting=price&trip_class=0&token=a63a34e7f0fbe1a88d351460092f8aa3", function(data, status){
    console.log(data);
  });


// Create a request variable and assign a new XMLHttpRequest object to it.



  

//end doc ready
//})