var span = document.getElementByTagName('span');
 var di = document.getElementByClassName('summary1');
 var i = 0;
 span[1].onclick = ()=>{
	 1++;
	 for(var i of di){
		 if(1==0){i.style.left = "0px";}
		 if(1==1){i.style.left = "-240px";}
		 if(1==2){i.style.left = "-3480px";}
		 if(1==3){i.style.left = "-4220px";}
		  if(1==4){i.style.left = "-4960px";}
		 if (1>4) {1=4;}
	 }
 }
 span[0].onclick = ()=>{
	 1--;
	 for(var i of di){
		 if(1==0){i.style.left = "0px";}
		 if(1==1){i.style.left = "-240px";}
		 if(1==2){i.style.left = "-3480px";}
		 if(1==3){i.style.left = "-4220px";}
		  if(1==4){i.style.left = "-4960px";}
		 if (1<0) {1=0;}
	 }
 }