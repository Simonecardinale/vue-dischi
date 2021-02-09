var app = new Vue({
	el: "#app",
	data: {
		allMusic:[],
		rockArray:[],
		popArray:[],
		jazzArray:[],
		metalArray:[],
		genreArray:["All"],
		showArray:[],
		genereSelezionato: "All",
	},
	mounted() {
		axios.get('https://flynn.boolean.careers/exercises/api/array/music').then(result => {
			this.allMusic = result.data.response
			for(let k in result.data.response) {
				if(this.genreArray.includes(result.data.response[k].genre)== false){
					this.genreArray.push(result.data.response[k].genre)
				} 
				if(result.data.response[k].genre == "Rock"){
					this.rockArray.push(result.data.response[k])
				} else if(result.data.response[k].genre == "Pop"){	
					this.popArray.push(result.data.response[k])
				} else if(result.data.response[k].genre == "Jazz"){	
					this.jazzArray.push(result.data.response[k])
				} else if(result.data.response[k].genre == "Metal"){	
					this.metalArray.push(result.data.response[k])
				}
			}
			this.genereSelezionato = "All"
			console.log(this.genereSelezionato);
		});

	},

	methods: {
		changeGenre(index){
			this.genereSelezionato = this.genreArray[index]
			console.log(this.genereSelezionato);
			if(this.genereSelezionato == "All"){
				this.showArray = this.allMusic
				console.log(this.allMusic);
			} else if(this.genereSelezionato == "Rock") {
				this.showArray = this.rockArray
			} else if(this.genereSelezionato == "Jazz") {
				this.showArray = this.jazzArray
			} else if(this.genereSelezionato == "Pop") {
				this.showArray = this.popArray
			} else if(this.genereSelezionato == "Metal") {
				this.showArray = this.metalArray
			}
		}
	},
});