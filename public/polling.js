// Add logic to this script to poll server every second for updated pixels.

let clientLength = clientUpdates.length;
let latest = 0;

function fetchLatestUpdate() {

    const optionsObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            clientUpdates,
            length: latest
        })
    }

    fetch('/updates', optionsObject)
        .then(response => response.json())
        .then(data => {

            for (i = 0; i < data.updates.length; i++) {
                bitmap.setColor(data.updates[i][0], data.updates[i][1], data.updates[i][2]);
            }

            latest = data.length;
            console.log(latest);

            clientUpdates = [];
        })
    setTimeout(fetchLatestUpdate, 1000);
}

fetchLatestUpdate();