class UI {
	constructor() {
		this.profile = document.getElementById('profile');
	}
	/// Display Profile
	showProfile(user) {
		this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
	}
	/// Show alert Message
	showAlert(message, className) {
		// Clear multiple alerts down to just 1
		this.clearAlert();
		// 
		const div = document.createElement('div');
		//Add ClassName
		div.className = `${className}`;
		// Add Text
		div.appendChild(document.createTextNode(message));
		// insert 
		const container = document.querySelector('.searchContainer');
		//
		const search = document.querySelector('.search');
		// Insert alert and before search
		container.insertBefore(div, search);

		// remove alert after 2 sec
		setTimeout(() => {
			this.clearAlert();
		}, 1000);
	}

	showRepos(repos) {
		let output = '';

		repos.forEach(function (repo) {
			output += `
			<div class="card card-body mb-2">
			<div class="row">
			<div class="col-md-6">
			<a href="${repo.html_url}" target="_blank">${repo.name}</a>
			</div>

			<div class="col-md-6">
			
			</div>

			</div>  
			</div>
			`;
		})
	}
	////clearAlert
	clearAlert() {
		const currentAlert = document.querySelector('.alert');

		if (currentAlert) {
			currentAlert.remove();
		}
	}
	/// Clear Profile
	clearProfile() {
		this.profile.innerHTML = '';
	}


}