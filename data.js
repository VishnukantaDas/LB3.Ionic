function saveGroups (groups) {
	localStorage.setItem("groups_data",JSON.stringify(groups));
}

var groups = localStorage.getItem("groups_data");
if(localStorage.getItem("groups_data")=== null){
	groups = [
	{
		number: 'BMTH',
		faculty: 'Metal'
	},
	{
		number:'Wildways',
		faculty:'Metal'
	}
	];
	saveGroups(groups)
}else{
	groups=JSON.parse(groups);
}

