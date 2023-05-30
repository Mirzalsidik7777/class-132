function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("dog", 45, 75);
    nofill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);

    fill("#FF0000");
    text("cat", 45, 75);
    nofill();
    stroke("#FF0000");
    rect(300, 90, 270, 320);
}

function setup(){
     canvas = createCanvas(640, 420);
     canvas.center();
}