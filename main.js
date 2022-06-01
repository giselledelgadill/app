song="";
leftx=0;
lefty=0;
rightx=0;
righty=0;
djleft=0;
djright=0;
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
fill("blue");
stroke("orange");
if(djright>0.2){


circle(rightx,righty,20);
if(righty>0&&righty<=100){
    document.getElementById("noob").innerHTML="speed= 0.5x";
    song.rate(0.5);
}
else if(righty>100&&righty<=200){
    document.getElementById("noob").innerHTML="speed= 1x";
    song.rate(1);
}
else if(righty>200&&righty<=300){
    document.getElementById("noob").innerHTML="speed= 1.5x";
    song.rate(1.5);
}
else if(righty>300&&righty<=400){
    document.getElementById("noob").innerHTML="speed= 2x";
    song.rate(2);
}
}

if(djleft>0.2){
circle(leftx,lefty,20);
InNumberlefty=Number(lefty);
remove=floor(InNumberlefty*2);
newVolume=remove/1000
document.getElementById("volume").innerHTML="Volmue= "+newVolume;
song.setVolume(newVolume);
}
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
    djright=results[0].pose.keypoints[9].score;
    console.log("djright= "+djright);
    djleft=results[0].pose.keypoints[9].score;
    console.log("djleft= "+djleft);
   leftx=results[0].pose.leftWrist.x;
   lefty=results[0].pose.leftWrist.y;
   console.log("rightWristx= "+rightx+"rightWristy= "+righty); 
   rightx=results[0].pose.rightWrist.x;
   righty=results[0].pose.rightWrist.y;
   console.log("rightWristx= "+rightx+"rightWristy= "+righty);
}
}