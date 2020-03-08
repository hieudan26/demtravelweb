var ListActive=document.getElementsByClassName('active-click');
var Iconactive=document.getElementById('id-nav');
var menu=document.getElementById('id-nav-menu');
for(let i of ListActive)
	i.addEventListener("click",function(){
		var child=this.childNodes[2];
		console.log(child);
		if(child.style.display=="none")
			child.style.display="block";
		else
			child.style.display="none";
	});
Iconactive.addEventListener("click",function(){

	if(menu.style.display=="none")
	{
		this.childNodes[1].style.transform="rotate(30deg)";
		this.childNodes[3].style.opacity="0";
		this.childNodes[5].style.transform="rotate(-30deg)";
		menu.style.display="block";
	}
	else
	{
		this.childNodes[1].style.transform="rotate(0deg)";
		this.childNodes[3].style.opacity="1";
		this.childNodes[5].style.transform="rotate(0deg)";
		menu.style.display="none";
	}
});
