export function fetchSongsApi() {
  return fetch("https://genius.p.rapidapi.com/songs/442856", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "genius.p.rapidapi.com",
		"x-rapidapi-key": "SIGN-UP-FOR-KEY"
	}
  }).then((res) => console.log(res));
}
