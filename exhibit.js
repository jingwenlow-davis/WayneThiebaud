
function expand(pic) { 

    switch(pic){
    case "WT":
        document.getElementById('largeimg').src = 'exhibitAssets/Wind%20Toys,%201962.%20oil%20on%20canvas.jpg';
        document.getElementById('lc').innerHTML = "Wind Toys";
        document.getElementById('ls').innerHTML = "(1962. oil on canvas)";
        break;
    case "PB":
        document.getElementById('largeimg').src = 'exhibitAssets/Pancake%20Breakfast,%202008.%20oil%20on%20canvas.jpg'; 
        document.getElementById('lc').innerHTML = "Pancake Breakfast";
        document.getElementById('ls').innerHTML = "(2008. oil on canvas)";

        break;
    case "AC":
        document.getElementById('largeimg').src = 'exhibitAssets/Around%20the%20Cake,%201962,%20oil%20on%20canvas.jpg';
        document.getElementById('lc').innerHTML = "Around the Cake";
        document.getElementById('ls').innerHTML = "(1962. oil on canvas)";
        break;
    case "TM":
        document.getElementById('largeimg').src = 'exhibitAssets/Three%20Machines,%201963.%20oil%20on%20canvas.jpg';
        document.getElementById('lc').innerHTML = "Three Machines";
        document.getElementById('ls').innerHTML = "(1963. oil on canvas)";
        break;
    case "BC":
        document.getElementById('largeimg').src = 'exhibitAssets/Boston%20Creems,%201962.%20oil%20on%20canvas.jpg';
        document.getElementById('lc').innerHTML = "Boston Cremes";
        document.getElementById('ls').innerHTML = "(1962. oil on canvas)";
        break;
    case "BN":
        document.getElementById('largeimg').src = 'exhibitAssets/Bananas,%201963.%20Oil%20on%20canvas.jpg';
        document.getElementById('lc').innerHTML = "Banans";
        document.getElementById('ls').innerHTML = "(1963. oil on canvas)";
        break;
    default:
        document.getElementById('largeimg').src = 'exhibitAssets/Wind%20Toys,%201962.%20oil%20on%20canvas.jpg';
    }

}

