function preload(){

}
function setup(){
    canvas=createCanvas(550,350)
canvas.position(560,200)
video=createCapture(VIDEO)
video.size(550,350)
poseNet=ml5.poseNet(video, modelLoaded)
poseNet.on("pose", gotPoses)
}
function modelLoaded(){
    console.log("Model Loaded")
}
function draw(){
background("#808080")
}
function gotPoses(results){
    
if (results.length>0) {
    console.log(results)
}else{
    console.log("error")
}
}