 let req = new XMLHttpRequest(); 

 req.onreadystatechange = () => {
     if (req.readyState == XMLHttpRequest.DONE) {
        //  console.log(req.responseText);
         const obj = JSON.parse(req.responseText);
         document.querySelector("#membros").innerHTML = obj.record.total.toLocaleString();                
     }
 };
 
 req.open("GET", "https://api.jsonbin.io/v3/b/62741eae38be296761fce618/latest", true);        
 req.setRequestHeader("X-Master-Key", "$2b$10$NC3A.aubJ2Rx9lZMiu5MLehz6wS3aB1jEZEbfQbiODyy6zk.j7dJ2");
 req.send();