var x = 0;
var y = 0;

function preload(){
    moustache = loadImage("mousetace.png");
}

function setup(){
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, function(){
        // model loaded
        console.log("Model has been loaded!"+ " ml5 version: "+ ml5.version);
        poseNet.on("pose", function(results){
            // got poses
            if(results.length > 0){
                console.log(results);

                x = results[0].pose.nose.x;
                y = results[0].pose.nose.y;
                console.log("X: "+ x+ "Y : "+ y);
            }else{
                console.log("No face detection");
            }
        });
    });
}

function draw(){
        image(video, 0, 0, canvas.width, canvas.height);
        image(moustache, x+60, y+100, 100, 50);     
}

function svFlt(){
    save("image.png");
}

