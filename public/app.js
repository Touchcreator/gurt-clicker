// initialize vars
let clicks = 0;
let clicksPerSecond = 0;

let storeCosts = {
    gurt: 50,
    touch: 100,
    clickrate: 250,
    plain: 400,
    vanilla: 590,
    strawberry: 721
}

let buildingCounts = {
    gurt: 0,
    touch: 0,
    plain: 0,
    vanilla: 0,
    strawberry: 0
}

let defaultCosts = storeCosts; // needed for updates
let defaultCounts = buildingCounts;

let clickRate = 1;

const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let startDate = `${year}-${month}-${day}`;

// elements
const gurt = document.querySelector("#gurt");
const clickCount = document.querySelector("#click-count");
const clickPerSecCount = document.querySelector("#click-rate");
const resetButton = document.querySelector("#reset-btn");
const saveButton = document.querySelector("#save-btn");
const importButton = document.querySelector("#import-btn");
const startSpan = document.querySelector("#start-date");

// other constants ig
const currencySymbol = "₲"

// local storage funcs
function getItem(item) {
    return localStorage.getItem(item);
}

function setItem(key, value) {
    localStorage.setItem(key, value);
    
    if (key == "gurts") {
        clickCount.innerText = `${clicks} Gurts`;
    }
    if (key == "gurtspersec") {
        clickPerSecCount.innerText = `${clicksPerSecond} Gurts / Second`;
    }
}

function getDict(dictItem) {
    return JSON.parse(localStorage.getItem(dictItem));
}

function setDict(key, dictValue) {
    localStorage.setItem(key, JSON.stringify(dictValue));
}

// buying stuff
function buy(itemName) {
    if (itemName == "gurt") {
        if (storeCosts.gurt <= clicks) {
            clicks -= storeCosts.gurt;
            buildingCounts.gurt++;
            storeCosts.gurt = Math.round(storeCosts.gurt * 1.03);
            document.querySelector("#gurt-cost").innerText = currencySymbol + storeCosts.gurt + "; " + buildingCounts.gurt + "ct";
            setDict("storeinfo", storeCosts);
            setDict("buildingcount", buildingCounts);
            
        }
        else {
            window.open("https://github.com/Touchcreator/gurt-thon", "_blank");
        }
    }
    if (itemName == "touch") {
        if (storeCosts.touch <= clicks) {
            clicks -= storeCosts.touch;
            buildingCounts.touch++;
            storeCosts.touch = Math.round(storeCosts.touch * 1.03);
            document.querySelector("#touch-cost").innerText = currencySymbol + storeCosts.touch + "; " + buildingCounts.touch + "ct";
            setDict("storeinfo", storeCosts);
            setDict("buildingcount", buildingCounts);
            
        }
        else {
            window.open("https://github.com/Touchcreator/gurt-thon", "_blank");
        }
    }
    
    if (itemName == "clickrate") {
        if (storeCosts.clickrate <= clicks) {
            clicks -= storeCosts.clickrate;
            clickRate++;
            storeCosts.clickrate = Math.round(storeCosts.clickrate * 1.03);
            document.querySelector("#clickrate-cost").innerText = currencySymbol + storeCosts.clickrate + "; " + clickRate + "ct";
            setItem("clickrate", clickRate);
        }
        else {
            window.open("https://github.com/Touchcreator/gurt-thon", "_blank");
        }
    }
    
    if (itemName == "plain") {
        if (storeCosts.plain <= clicks) {
            clicks -= storeCosts.plain;
            buildingCounts.plain++;
            storeCosts.plain = Math.round(storeCosts.plain * 1.03);
            document.querySelector("#plain-cost").innerText = currencySymbol + storeCosts.plain + "; " + buildingCounts.plain + "ct";
            setDict("storeinfo", storeCosts);
            setDict("buildingcount", buildingCounts);
            
        }
        else {
            window.open("https://github.com/Touchcreator/gurt-thon", "_blank");
        }
    }
    
    if (itemName == "vanilla") {
        if (storeCosts.vanilla <= clicks) {
            clicks -= storeCosts.vanilla;
            buildingCounts.vanilla++;
            storeCosts.vanilla = Math.round(storeCosts.vanilla * 1.03);
            document.querySelector("#vanilla-cost").innerText = currencySymbol + storeCosts.vanilla + "; " + buildingCounts.vanilla + "ct";
            setDict("storeinfo", storeCosts);
            setDict("buildingcount", buildingCounts);
            
        }
        else {
            window.open("https://github.com/Touchcreator/gurt-thon", "_blank");
        }
    }
    
    if (itemName == "strawberry") {
        if (storeCosts.strawberry <= clicks) {
            clicks -= storeCosts.strawberry;
            buildingCounts.strawberry++;
            storeCosts.strawberry = Math.round(storeCosts.strawberry * 1.03);
            document.querySelector("#strawberry-cost").innerText = currencySymbol + storeCosts.strawberry + "; " + buildingCounts.strawberry + "ct";
            setDict("storeinfo", storeCosts);
            setDict("buildingcount", buildingCounts);
            
        }
        else {
            window.open("https://github.com/Touchcreator/gurt-thon", "_blank");
        }
    }
    
    setItem("gurts", clicks);
    calculateClicksPerSecond();
    
}

function calculateClicksPerSecond() {
    clicksPerSecond = buildingCounts.gurt;
    clicksPerSecond += parseInt(buildingCounts.touch) * 2;
    clicksPerSecond += parseInt(buildingCounts.plain) * 4;
    clicksPerSecond += parseInt(buildingCounts.vanilla) * 5;
    clicksPerSecond += parseInt(buildingCounts.strawberry) * 6;
    setItem("gurtspersec", clicksPerSecond);
    clickPerSecCount.innerText = clicksPerSecond + " Gurts / Second";
}

// set game data
if (getItem("gurts")) {
    clicks = parseInt(getItem("gurts"));
} else {
    setItem("gurts", clicks);
}
clickCount.innerText = `${clicks} Gurts`;

if (getItem("gurtspersec")) {
    clicksPerSecond = getItem("gurtspersec");
} else {
    setItem("gurtspersec", clicksPerSecond);
}
clickPerSecCount.innerText = `${clicksPerSecond} Gurts / Second`;

if (getItem("storeinfo")) {
    storeCosts = getDict("storeinfo");
} else {
    setDict("storeinfo", storeCosts);
}

if (getItem("buildingcount")) {
    buildingCounts = getDict("buildingcount");
} else {
    setDict("buildingcount", buildingCounts);
}

if (getItem("clickrate")) {
    clickRate = getItem("clickrate");
} else {
    setItem("clickrate", clickRate)
}
document.querySelector("#clickrate-cost").innerText = currencySymbol + storeCosts.clickrate + "; " + clickRate + "ct";

if (getItem("startdate")) {
    startDate = getItem("startdate");
} else {
    setItem("startdate", startDate);
}
startSpan.innerText = startDate;


// add any missing prices
for (const key in defaultCosts) {
    if (!(key in storeCosts)) {
        storeCosts[key] = defaultCosts[key];
    }
}

for (const key in defaultCounts) {
    if (!(key in buildingCounts)) {
        buildingCounts[key] = defaultCounts[key];
    }
}


document.querySelector("#gurt-cost").innerText = currencySymbol + storeCosts.gurt + "; " + buildingCounts.gurt + "ct";
document.querySelector("#touch-cost").innerText = currencySymbol + storeCosts.touch + "; " + buildingCounts.touch + "ct";
document.querySelector("#plain-cost").innerText = currencySymbol + storeCosts.plain + "; " + buildingCounts.plain + "ct";
document.querySelector("#vanilla-cost").innerText = currencySymbol + storeCosts.vanilla + "; " + buildingCounts.vanilla + "ct";
document.querySelector("#strawberry-cost").innerText = currencySymbol + storeCosts.strawberry + "; " + buildingCounts.strawberry + "ct";

// click detect
gurt.addEventListener("click", () => {
    clicks = parseInt(clicks) + parseInt(clickRate);
    clickCount.innerText = `${clicks} Gurts`;
});

// save every few secs
firstInterval = setInterval(() => {
    setItem("gurts", clicks);

    setItem("gurtspersec", clicksPerSecond);
    
    setItem("startdate", startDate);
    startSpan.innerText = startDate;
    
    setDict("storeinfo", storeCosts);
    setDict("buildingcount", buildingCounts);
    document.querySelector("#gurt-cost").innerText = currencySymbol + storeCosts.gurt + "; " + buildingCounts.gurt + "ct";
    document.querySelector("#touch-cost").innerText = currencySymbol + storeCosts.touch + "; " + buildingCounts.touch + "ct";
    document.querySelector("#plain-cost").innerText = currencySymbol + storeCosts.plain + "; " + buildingCounts.plain + "ct";
    document.querySelector("#vanilla-cost").innerText = currencySymbol + storeCosts.vanilla + "; " + buildingCounts.vanilla + "ct";
    document.querySelector("#strawberry-cost").innerText = currencySymbol + storeCosts.strawberry + "; " + buildingCounts.strawberry + "ct";
    document.querySelector("#clickrate-cost").innerText = currencySymbol + storeCosts.clickrate + "; " + clickRate + "ct";
    document.title = "Gurt Clicker | " + clicks + " Gurts";
    
    setItem("clickrate", clickRate);
    
}, 2*1000);

secondInterval = setInterval(() => {
    calculateClicksPerSecond();
    document.querySelector("#clickrate-cost").innerText = currencySymbol + storeCosts.clickrate + "; " + clickRate + "ct";
    clicks = clicks + parseInt(clicksPerSecond);
    setItem("gurts", clicks);
}, 1000);

// reseting

resetButton.addEventListener("click", () => {
    let shouldReset = confirm("Are you sure you want to reset your data?");
    
    if (shouldReset) {
        localStorage.clear();
        clearInterval(firstInterval);
        clearInterval(secondInterval);
        window.location.reload(true);
    }
});

saveButton.addEventListener("click", () => {
    let zippedGame = btoa(window.pako.gzip(JSON.stringify(JSON.stringify(localStorage)), { to: "string" }));
    
    navigator.clipboard.writeText(zippedGame);
    
    alert("your save data is (its already been copied)\n"+zippedGame)
});

importButton.addEventListener("click", () => {
    let base64zipped = prompt("What is your save code?");
    
    if (base64zipped) {
        localStorage.clear();
        clearInterval(firstInterval);
        clearInterval(secondInterval);
        
        let b64encodedAGAIN = btoa(String.fromCharCode.apply(null, window.pako.ungzip(atob(base64zipped))));

        let unzipped = JSON.parse(JSON.parse(atob(b64encodedAGAIN)));

        Object.keys(unzipped).forEach(function (k) {
            localStorage.setItem(k, unzipped[k]);
        });
        
        window.location.reload(true)
    }
    
});