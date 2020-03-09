var ListActive=document.getElementsByClassName('active-click');
var Iconactive=document.getElementById('id-nav');
var menu=document.getElementById('id-nav-menu');
var titleHead=["JOURNEY","GREAT EXPERIENCE","ENJOY","WHAT NEXT COUNTRY?"];
var Name=["Exploring The World","For Traveling Anywhere","Your Dream Vacation","Discover Night Francisco"];
var Content=["Once aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur consectetur adipiscing elit.",
"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum mollit anim id est.",
"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium sunt in culpa qui laborum.",
"Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."];
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
