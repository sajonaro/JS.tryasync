const fetch = require("node-fetch");

//synch version ( via Promises)
//function getUser(id){
//        return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).
//                then(response => response.json());
//}

class DataService {
        constructor(url){
                this.url = url;
        }

        async getUser(id){
                try{
                        let response = await fetch(`${this.url}/users/${id}`);
                        return await response.json();
                }
                catch{
                        console.log("could not fetch user");
                }
        }

        async getPosts(userId){
                try{
                        let response = await fetch(`${this.url}/posts?userId=${id}`);
                        return await response.json();
                }
                catch{
                        console.log("could not fetch posts");
                }
        }
}

(async () => {

      let ds = new DataService("https://jsonplaceholder.typicode.com");
      let user = await ds.getUser(1);
      console.log( user) ;
})();

