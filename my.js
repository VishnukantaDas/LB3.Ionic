let editType = ''
let number = ''
document.addEventListener("DOMContentLoaded", function(event) {
	let rowText
	let list = document.getElementById('list')

	for(let row of groups) {
		let rowText = document.createElement('ion-item')
		rowText.innerHTML = `<ion-label>${row.number}</ion-label>
		<ion-button class="edit" color="primary" size="medium" rowid="${row.number}">
		<ion-icon name="create"></icon-icon>
		</ion-button>
		<ion-button class="delete" color="danger" size="medium" rowid="${row.number}">
		<ion-icon name ="trash"></icon-icon>
		</ion-button>`
		list.appendChild(rowText)
	}

	document.querySelector('#main').style.display = ""
	document.querySelector('#edit').style.display = 'none'

	document.querySelectorAll('.edit')
	.forEach(input => input.addEventListener('click', ({target}) => {
		editType = "edit"
		console.log(target);
		number = target.getAttribute('rowid')
		console.log(groups,number);
		let group = groups.find((g)=>g.number == number)

		document.getElementById('number').value = group.number
		document.getElementById('faculty').value = group.faculty
		document.querySelector('#main').style.display = "none"
		document.querySelector('#edit').style.display = ""
		}))

		document.querySelectorAll('.delete')
		.forEach(input => input.addEventListener('click', ({target}) => {
			number = target.getAttribute('rowid')
			saveGroups(groups.filter((g) => g.number != number))
			location.reload()
	}))

	document.querySelector('#save').addEventListener('click', () => {
		if (editType == "add") {
			groups.push({
				number: document.getElementById('number').value,
				faculty: document.getElementById('faculty').value
			})
		} else {
			let group = groups.find((g) => g.number == number)
			group.number = document.getElementById('number').value
			group.faculty = document.getElementById('faculty').value
		}
		saveGroups(groups)
		location.reload()
	})

	document.querySelector('#add').addEventListener('click', () => {
		document.querySelector('#main').style.display = "none"
		document.querySelector('#edit').style.display = ""
		document.getElementById('number').value = ""
		document.getElementById('faculty').value = ""
		editType = "add"
	})
})