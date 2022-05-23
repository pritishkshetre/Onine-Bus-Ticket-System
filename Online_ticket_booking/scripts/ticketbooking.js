function printPrice() {
							  var bus = document.getElementById("busname").value;
							  var name = document.getElementById("textbox").value;
							  var Cquantity = document.getElementById("Cquantity").value * 1;
							  var Aquantity = document.getElementById("Aquantity").value * 1;
							  var total = 0;
							  var sentence = "";
							  var price = document.getElementById('Ctickets').value * Cquantity;
							  sentence+="<font color='black' size='4'><b>"+"<br>bus_name: "+movie+"</b></font>";
							  sentence += "<br><font color='black' size='4'>"+"Name: "+name + "<br>Child Tickets : "+Cquantity+ " for $ "+ price+"</font>";
							  total += price;

							  price = document.getElementById('Atickets').value * Aquantity;
							  sentence += "<font color='black' size='4'>"+"<br>Adult tickets: "+Aquantity+" for $ "+price+"</font>";
							  total += price;
							  sentence += "<br>";
							  sentence += "<font color='black' size='4'>"+'Total cost: $'+total+"</font>";
							  document.getElementById("inserts").innerHTML=sentence;
}

function displayMname(){

	   var namOffilm=document.form1.movie.options[document.form1.movie.selectedIndex].value;
	   
	     if(bus=="Ahmednagar-Pune"){
	   document.getElementById("poster").src="4.jpg";
	   }
	   if (bus=="Ahmednagar-Aurangabad"){
			document.getElementById("poster").src="5.jpg";
	   }
	   if(bus=="Ahmednagar-Mumbai"){
	   document.getElementById("poster").src="2.jpg";
	   }
	    
}