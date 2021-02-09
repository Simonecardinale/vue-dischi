var app = new Vue({
	el: "#app",
	data: {
		arrayObj: {
			All:[],
			Rock:[],
			Pop:[],
			Jazz:[],
			Metal:[],
		},
		genreArray:[],
		showArray:[],
	},
	mounted() {
		axios.get('https://flynn.boolean.careers/exercises/api/array/music').then(result => {
			this.arrayObj.All = result.data.response
			for(let k in result.data.response) {
				if(result.data.response[k].genre == "Rock"){
					this.arrayObj.Rock.push(result.data.response[k])
				} else if(result.data.response[k].genre == "Pop"){	
					this.arrayObj.Pop.push(result.data.response[k])
				} else if(result.data.response[k].genre == "Jazz"){	
					this.arrayObj.Jazz.push(result.data.response[k])
				} else if(result.data.response[k].genre == "Metal"){	
					this.arrayObj.Metal.push(result.data.response[k])
				}
				for(k in this.arrayObj) {
					if(this.genreArray.includes(k)== false){

						this.genreArray.push(k)
						console.log(this.genreArray);
					}
				}
			}
			this.showArray = this.arrayObj.All
		});

	},

	methods: {
		changeGenre(index){
			// if(this.genereSelezionato == "All"){
			// 	this.showArray = this.allMusic
			// 	console.log(this.allMusic);
			// } else if(this.genereSelezionato == "Rock") {
			// 	this.showArray = this.rockArray
			// } else if(this.genereSelezionato == "Jazz") {
			// 	this.showArray = this.jazzArray
			// } else if(this.genereSelezionato == "Pop") {
			// 	this.showArray = this.popArray
			// } else if(this.genereSelezionato == "Metal") {
			// 	this.showArray = this.metalArray
			// }

			for(k in this.arrayObj) {
				if(this.genreArray[index] == k) {
					this.showArray = (this.arrayObj[k])
					console.log(this.showArray);
				}
			}
		}
	},
});




