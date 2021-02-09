var app = new Vue({
	el: "#app",
	data: {
		allMusic:[],
	},
	mounted() {
		axios.get('https://flynn.boolean.careers/exercises/api/array/music').then(result => {
			this.allMusic = result.data.response
			console.log(this.allMusic);
		});
	}
});