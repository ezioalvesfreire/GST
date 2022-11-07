import React from "react";


async function getContent() {
    try {
        const response = await fetch('http://localhost:5000/testando')
        //console.log(response)
        const data = await response.json()
        //console.log(data)
        show(data)
    } catch (error) {
        console.error(error)
    }
}

getContent()


function show(users) {
    let output = ''
    for (let user of users) {
        output += `<li>${user.description}</li>`

    }
    console.log(output);
    document.getElementById('TesteConnectAPI').innerHTML = output
}



function TesteComponent() {
    return (
        <div id="TesteConnectAPI" className="TesteConnectAPI">
            <div>TESTE</div>
        </div>
    );
}

export default TesteComponent;