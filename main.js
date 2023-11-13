function preload(){
    
}

function setup(){
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
}

function draw(){
    image(video, 0, 0, canvas.width, canvas.height);
}

function svFlt(){
    save("image.png");
}

