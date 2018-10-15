function formSubmit() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             alert(this.responseText);
         }
    };
    xhttp.open("POST", "http://localhost:3000/", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send({
        id: '127',
        name: 'Pink',
        email: 'pink@gmail.com',
        veganSince: '1992',
        type: 'pure',
        date: new Date()
    },);
}