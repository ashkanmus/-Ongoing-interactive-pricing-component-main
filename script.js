//  Outputs
const outViews = document.getElementById("outViews");
const outPrice = document.getElementById("outPrice");
const outMoy = document.getElementById("outMoy");

// input
const inRange = document.getElementById("inRange");
const inMoy = document.getElementById("inMoy");


//Function



// Eventlistener

[ inRange, inMoy ].forEach(function(element) {
    element.addEventListener("input", function() {
        let range = document.getElementById("inRange").value;
        let inMoy = document.getElementById("inMoy");
        moy = "month"

        let views = ""
        let price = ""
        if (range == 1) {views = "10K"; price=8} 
        else if (range == 2){views = "50K"; price=12}
        else if (range == 3){views = "100K"; price=16}
        else if (range == 4){views = "500K"; price=24}
        else if (range == 5){views = "1M"; price=36};

        if (inMoy.checked == true){
            price = price * .25 * 12;
            moy = "annum"
        }

        outViews.innerHTML = views;
        outPrice.innerHTML = price;
        outMoy.innerHTML = moy;
    });
});