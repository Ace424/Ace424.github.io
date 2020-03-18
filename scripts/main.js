let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let myImage = document.querySelector('img');
myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/firefox.png'){
		myImage.setAttribute('src','images/love.png');
	}else{
		myImage.setAttribute('src','images/firefox.png');
	}
}

let myButton = document.querySelector('button');
function setUserName(){
	let myName = prompt('请输入你的名字');
	if(!myName||myName===null){
		setUserName();
	}else{
		localStorage.setItem('name',myName);
		myHeading.innerHTML = 'Mozilla 酷毙了,' + myName; 
	}
}
myButton.onclick = function(){
	setUserName();
}