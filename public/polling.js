// Add logic to this script to poll server every second for updated pixels.

let clientUpdates = [];


// console.log(clientUpdates);

function fetchLatestUpdate() {
    // clientUpdates.push([row, col, paint_color]);

    const optionsObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({clientUpdates})
    }
    
    fetch('/updates', optionsObject)
    .then(response => response.json())
    .then(data => {
        // setColor()
        console.log(data.updates.length);
        //data represents an object { updates: [0, 1, green]
                                //    updates: [0, 4, red] 
                                //  }

        
        
        
    })
    setTimeout(fetchLatestUpdate, 3000);
}

fetchLatestUpdate();
