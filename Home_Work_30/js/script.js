document.addEventListener("DOMContentLoaded", function () {
	// Отримати дані користувачів з localStorage або створити масив об'єктів з користувачами
	let users = JSON.parse(localStorage.getItem("users")) || [];

	const appButton = document.getElementById("appButton");
	const userForm = document.getElementById("userForm");
	const saveButton = document.getElementById("saveButton");
	const userTable = document
		.getElementById("userTable")
		.getElementsByTagName("tbody")[0];

	// При натисканні кнопки "App" зробити форму видимою
	appButton.addEventListener("click", function () {
		userForm.style.display = "block";
	});

	// При натисканні кнопки "Save" зберегти дані користувача, оновити список користувачів та зберегти зміни в localStorage
	saveButton.addEventListener("click", function (e) {
		e.preventDefault();

		let nameInput = document.getElementById("name");
		let passwordInput = document.getElementById("password");
		let ageInput = document.getElementById("age");
		let emailInput = document.getElementById("email");
		let phoneInput = document.getElementById("phone");
		let cardInput = document.getElementById("card");

		let user = {
			name: nameInput.value,
			password: passwordInput.value,
			age: ageInput.value,
			email: emailInput.value,
			phone: phoneInput.value,
			card: cardInput.value,
		};

		users.push(user);
		localStorage.setItem("users", JSON.stringify(users));
		renderUserTable();
		userForm.reset();
	});

	// Відображення користувачів у таблиці
	function renderUserTable() {
		userTable.innerHTML = "";

		for (const i = 0; i < users.length; i++) {
			let user = users[i];
			let row = document.createElement("tr");

			let nameCell = document.createElement("td");
			nameCell.textContent = user.name;

			let actionsCell = document.createElement("td");
			let editButton = document.createElement("button");
			editButton.textContent = "Edit";
			editButton.classList.add("btn");
			editButton.addEventListener("click", createEditHandler(i));

			const removeButton = document.createElement("button");
			removeButton.textContent = "Remove";
			removeButton.classList.add("btn");
			removeButton.addEventListener("click", createRemoveHandler(i));

			const viewButton = document.createElement("button");
			viewButton.textContent = "View";
			viewButton.classList.add("btn");
			viewButton.addEventListener("click", createViewHandler(user));

			actionsCell.appendChild(editButton);
			actionsCell.appendChild(removeButton);
			actionsCell.appendChild(viewButton);

			row.appendChild(nameCell);
			row.appendChild(actionsCell);

			userTable.appendChild(row);
		}
	}

	// При натисканні кнопки "Edit" відобразити дані користувача у формі для редагування
	function createEditHandler(index) {
		return function () {
			let user = users[index];

			let nameInput = document.getElementById("name");
			let passwordInput = document.getElementById("password");
			let ageInput = document.getElementById("age");
			let emailInput = document.getElementById("email");
			let phoneInput = document.getElementById("phone");
			let cardInput = document.getElementById("card");

			nameInput.value = user.name;
			passwordInput.value = user.password;
			ageInput.value = user.age;
			emailInput.value = user.email;
			phoneInput.value = user.phone;
			cardInput.value = user.card;
		};
	}

	// При натисканні кнопки "Remove" показати підтвердження видалення та видалити користувача зі списку
	function createRemoveHandler(index) {
		return function () {
			if (confirm("Are you sure you want to remove this user?")) {
				users.splice(index, 1);
				localStorage.setItem("users", JSON.stringify(users));
				renderUserTable();
			}
		};
	}

	// При натисканні кнопки "View" показати дані користувача
	function createViewHandler(user) {
		return function () {
			alert(
				"Name: " +
					user.name +
					"\nPassword: " +
					user.password +
					"\nAge: " +
					user.age +
					"\nEmail: " +
					user.email +
					"\nPhone Number: " +
					user.phone +
					"\nBank Card Number: " +
					user.card
			);
		};
	}

	// Відображення початкових даних
	renderUserTable();
});
