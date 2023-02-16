const fs = require("fs")
const XMLHttpRequest = require("xhr2")

const NewXMLHttpRequest = new XMLHttpRequest();

NewXMLHttpRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        fs.writeFile("ip.json", `{"IP" : "${this.responseText}"}`, function(error) {
            if (error == null) {
                return
            }
            console.log(error)
        })
    }
};

NewXMLHttpRequest.open("GET", "https://api.ipify.org/", true);
NewXMLHttpRequest.send();