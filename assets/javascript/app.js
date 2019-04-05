console.log("hello world");
//my api key a63a34e7f0fbe1a88d351460092f8aa3


var country = "SYD";
var date = "2019-04-01";
var token = "a63a34e7f0fbe1a88d351460092f8aa3";
var myHome = "";
var thisHome;
var url;



//https://api.travelpayouts.com/v2/prices/month-matrix?currency=usd&origin=NYC&destination=SYD&show_to_affiliates=true&depart_date=2019-04-01&token=a63a34e7f0fbe1a88d351460092f8aa3
//https://www.travelpayouts.com/whereami?locale=ru&callback=useriata&ip=62.105.128.0
//https://cors-anywhere.herokuapp.com/http://api.travelpayouts.com/v1/prices/cheap?origin=NYC&destination=MOW&depart_date=2019-06&currency=usd&token=a63a34e7f0fbe1a88d351460092f8aa3

// create giphy url to get json data
//var travel = "https://api.travelpayouts.com/v2/prices/latest?currency=usd&period_type=year&page=1&limit=30&show_to_affiliates=true&sorting=price&trip_class=0&token=a63a34e7f0fbe1a88d351460092f8aa3";

//GET "https://api.travelpayouts.com/v1/prices/calendar?depart_date=2016-11&origin=MOW&destination=BCN&calendar_type=departure_date&token=a63a34e7f0fbe1a88d351460092f8aa3";
//function useriata({"iata":"PHX","name":"Phoenix","country_name":"United States","coordinates":"-112.0740373:33.4483771"});
//console.log(travel.iata);
//$.get("https://www.travelpayouts.com/whereami?locale=en&callback=useriata", function(data, status){
    //console.log(json);
    //useriata = function(travel){
        //console.log(travel.name);
      //};
    
    //var myString = JSON.stringify(data);
    //var obj = JSON.parse(myString);
    //console.log(useriata());
  //});
  https://api.travelpayouts.com/v2/prices/month-matrix?currency=usd&origin=USA&destination=AUS&show_to_affiliates=true&depart_date=2019-09-01&token=a63a34e7f0fbe1a88d351460092f8aa3
  
  $.getJSON("https://www.travelpayouts.com/whereami?locale=en&callback=?", function(result){
    //response data are now in the result variable
    
    myHome = result.iata;
    console.log(myHome);
    //thisHome = myHome;
 }).done(function(result){
     console.log(myHome + "done")
     url = "https://api.travelpayouts.com/v2/prices/month-matrix?currency=usd&origin=NYC&destination=" + country + "&show_to_affiliates=true&depart_date=" + date + "&token=a63a34e7f0fbe1a88d351460092f8aa3";
     console.log(url);

     $.get("https://cors-anywhere.herokuapp.com/" + url, function(data){
    //response data are now in the result variable
    
    var dollars = data.data[0].value;
    $("#price").text("$"+ dollars);
 
}).done(function(resultb){
    //alert(resultb);
    //JSON.parse(resultb);
   // console.log(resultb[0]);
    //var x = resultb;
    //console.log(x[0]);
    //JSON.parse(JSON.stringify(x));
    //console.log(x[0]);

});

    
});
 


    
    

  
 
 