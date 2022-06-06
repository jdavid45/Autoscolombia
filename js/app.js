
fetch("https://docs.google.com/spreadsheets/d/1dEGQHJuLkLWo78lKs3Xine6x2LWGgpWPSZebzyhA2TY/edit?usp=sharing",{
	method: "POST",
	mode: "CORS",
	headers:{
		"Content-Type": "aplication/json"
	},
	body: JSON.stringify({
		"usuario": "ejemplo"
		"clave": "ejemplo"
	})
})