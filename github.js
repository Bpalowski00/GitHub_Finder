class GitHub {
	constructor() {
		this.client_id = '232dd73de470f04571b2';
		this.client_secret = 'ddaa39d3d9efa7b30fbca91cad31864899be974a';
		this.repos_count = 5;
		this.repos_sort = 'created: asc';
	}

	async getUser(user) {
		const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

		const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort={this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

		const profileData = await profileResponse.json();

		const repoResponses = await repoResponse.json();


		return {
			profile: profileData,
			repos: repoResponses
		}
	}

}