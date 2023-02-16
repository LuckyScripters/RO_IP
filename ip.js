import fs from "fs"
import XMLHttpRequest "xhr2"

const NewXMLHttpRequest = new XMLHttpRequest();

NewXMLHttpRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        fs.writeFile("ip.json", `{"IP" : "${this.responseText}"}`, function(error) {
            if (error == null) {
                alert(`Your IP is ${this.responseText}`)
                return
            }
            console.log(error)
        })
    }
};

function SendRequest() {
    NewXMLHttpRequest.open("GET", "https://api.ipify.org/", true);
    NewXMLHttpRequest.send();
}
