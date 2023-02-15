const XMLHttpRequest = require("xhr2")

const NewXMLHttpRequest = new XMLHttpRequest();

NewXMLHttpRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        return this.responseText  
    }
};

NewXMLHttpRequest.open("GET", "https://api.ipify.org/", true);
NewXMLHttpRequest.send();