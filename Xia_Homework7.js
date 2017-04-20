
//1.
var holder = document.getElementById("firstButton");
var holder2 = document.getElementById("secondButton");


holder.addEventListener("click", function(){

	holder.innerHTML = "firstButton I'm Right";
});

holder2.addEventListener("click", function(){

	holder2.innerHTML = "secondButton No, I'm Right";
});


//2.

var hoverArea = document.getElementsByClassName("bigBox");

hoverArea[0].addEventListener("mouseover", function(){
	alert("Hey, I told you not to hover over me");

});

//3. 

document.addEventListener('keypress', function(event){
	var keyNum = event.keyCode;
	var holderForH1 = document.getElementsByTagName("h1");

	holderForH1[0].innerHTML = String.fromCharCode(keyNum); 
	//event.key will automatically event in its char form
console.log(event.key);
console.log(event.keyCode);
	});

//4

var submitButton = document.getElementById("submit");

submitButton.addEventListener('click', function(){
	var passwordCheck = document.getElementById("password");
	var passwordHolder = passwordCheck.value;

	var usernameCheck = document.getElementById("userName");
	var usernameHolder = usernameCheck.value;


	var checker = true;
	var checker2 = true;

	if (passwordHolder !== "12345678"){
		alert("incorrect");
		checker = false;
	}
	// Another method is using a for loop, substring, parseInt, and isNaN
	if(!/\d/.test(usernameHolder)){

		alert("Doesn't contain a number")
		checker2 = false;

	}

	if (checker && checker2){
		var holderForH1 = document.getElementsByTagName("h1");
		holderForH1[0].innerHTML = "Username Has number and password is correct";
	}

});
