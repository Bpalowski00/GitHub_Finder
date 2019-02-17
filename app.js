// Init GitHub Clas
const github = new GitHub;
// Init UI Clas
const ui = new UI;

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
				//	console.log(data);
				if (data.profile.message === 'Not Found') {
					//Show Alert
					ui.showAlert('User not found', 'alert alert-danger')
				} else {
					// Show profile
					ui.showProfile(data.profile);
					ui.showRepos(data.repos)
				}
			})
	} else {
		/// Clear Profile
		ui.clearProfile();
	}


});