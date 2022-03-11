//Write event listener
document.addEventListener('click', function(){
	const heading = document.querySelector('h6');
	heading.style.backgroundColor = 'yellow';
});

//Event object
document.addEventListener('click', function(event){
	console.log(event);
});
