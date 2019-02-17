const github = new GitHub;

// Search User
const searchInput = document.getElementById('searchUser');

// Input Search 
searchInput.addEventListener('keyup', (e) => {
	/// Get input text
	const userText = e.target.value;

	if (userText !== "") {
		// MAke http call
		github.getUser(userText)
			.then(data => {
				if (data.profile.message === 'Not Found') {
					// Alert

				} else {
					// Show profile

				}
			})
	} else {
		/// Clear Profile
	}


});