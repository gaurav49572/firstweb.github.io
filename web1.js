var request = new XMLHttpRequest()
var url = "http://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=getmimo";

request.open("GET",url,false);

console.log(request.response);