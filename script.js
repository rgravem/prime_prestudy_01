function itWorks () {
	var x = console.log("Hey this works!");
	return x;
}
itWorks(1);

$(document).ready(function(){
$(".content").hide();
$("button").click(function(){
	$(".content").toggle("fast");
	});
});
