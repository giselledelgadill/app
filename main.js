song="";
leftx=0;
lefty=0;
rightx=0;
righty=0;
 function preload(){
     song=loadSound("music.mp3");
 }
function setup(){
    canvas=createCanvas(600,500);
    canvas.position(600,250);
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,600,500);
}
function play(){
    song.play();
    song.setVolume(0.7);
    song.rate(1);
    
}
function modelLoaded(){
    console.log('poseNet');
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
   leftx=results[0].pose.leftWrist.x;
   lefty=results[0].pose.leftWrist.y;
   console.log("rightWristx= "+rightx+"rightWristy= "+righty); 
   rightx=results[0].pose.rightWrist.x;
   righty=results[0].pose.rightWrist.y;
   console.log("rightWristx= "+rightx+"rightWristy= "+righty);
}
}