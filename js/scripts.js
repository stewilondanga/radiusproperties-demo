var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();

function addStyle(){
let inputVal = document.getElementById("borderVal").value + "px";
  if(inputVal == "px") {
    inputVal = "0px";
  }
console.log(inputVal);
document.getElementById("divtoStyle").style.borderRadius = inputVal;
}
