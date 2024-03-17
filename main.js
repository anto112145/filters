nosex = 0;
nosey = 0;
function setup(){
    canvas = createCanvas(500,350);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    model = ml5.poseNet(video,modelloaded);
    model.on("pose",showresult);
}
function modelloaded(){
    console.log("poseNet is linked")
}
function draw(){
    image(video,0,0,500,350);
    image(mustache,nosex-100,nosey-85,90,25);
    
    
}
function takePic(){
    save("filter.png")
}
function showresult(result){
    console.log(result);
    nosex = result[0].pose.nose.x;
    nosey = result[0].pose.nose.y;
}
function preload(){
    crown = loadImage("crown.png");
    mustache = loadImage("mustache.png");
    cigarate = loadImage("smoke.png");
    glasses = loadImage("glass.png");
    chain = loadImage("chain.png");
}
/*if(uc == "Crown"){
        image(crown,nosex-160,nosey-350,200,200);
    }
    if(uc == "Thug life"){
        image(chain,nosex-100,nosey+25,90,50);
    }
    if(uc == "Crown"){
        image(crown,nosex-160,nosey-350,200,200);
    }
    if(uc == "Thug life"){
        image(chain,nosex-100,nosey+25,90,50);
    }
    if(uc == "Mustache"){
        image(mustache,nosex-100,nosey-85,90,25);
    }
*/