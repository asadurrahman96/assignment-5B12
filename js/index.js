
    let heartCount = 100;
    let coinCount = 100;
    let copyCount = 0;
    let callHistory = [];

    function updateNavbar() {
        document.getElementById("heartCount").textContent = heartCount;
        document.getElementById("coinCount").textContent = coinCount;
        document.getElementById("copyCount").textContent = copyCount;
    }
    function heartIconCount() {
        heartCount++;
        updateNavbar();
    }

  
    function callService(serviceName, hotline) {
        if (coinCount < 20) {
            alert("You don't have enough coins to make the call.");
            return;
        }
        coinCount -= 20;
        const callTime = new Date().toLocaleTimeString();
        callHistory.push({ serviceName, hotline, time: callTime });
        updateNavbar();
        updateHistory();
    }

    function copyService(hotline) {
        navigator.clipboard.writeText(hotline).then(() => {
            alert(`Hotline ${hotline} copied to clipboard!`);
            copyCount++;
            updateNavbar();
        });
    }

    function updateHistory() {
    const historyList = document.getElementById("callHistory");
    historyList.innerHTML = "";
    
    for (const item of callHistory) {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.serviceName} - ${item.hotline} at ${item.time}`;
        historyList.appendChild(listItem);
    }
}

    function clearHistory() {
        callHistory = [];
        updateHistory();
    }

updateNavbar();
