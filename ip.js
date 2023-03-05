import fs from "fs"
import fetch from "node-fetch"

fetch("https://api.ipify.org/", {
    method : "GET"
})
.then((Response) => {
    fs.writeFile("ip.json", `{"IP" : "${Response}"}`, function(error) {
        if (error == null) {
            alert(`Your IP is ${Response}`)
            return
        }
        console.log(error)
    })
})
