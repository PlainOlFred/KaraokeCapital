export function fetchSongsApi() {
  
  return fetch("/api/songs", {
	"method": "GET",
  }).then((res) => res.json());
}