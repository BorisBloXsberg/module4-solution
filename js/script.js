var names = ["John", "Luca", "Mario", "Alex"];

for (var i = 0; i < names.length; i++) 
{
	var temp = names[i];
	if (temp[0]== "J" || temp[0]== "j") 
	{
		console.log("Goodbye " + names[i]);
	}
	else
	{
		console.log("Hi " + names[i]);
	}
	
}