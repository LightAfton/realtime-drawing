function setup()
{
   canvas=createCanvas(500, 500);
   canvas.center();
   video=createCapture(VIDEO)
   video.size(550,500);
   posenet=ml5.poseNet(video,modelLoaded);
   posenet.on('pose', gotPoses)
}
function draw()
{
   background ('#969A9');
}
function modelLoaded()
{
   console.log("posenet is initizialed");
}
function gotPoses(results)
{
if(results.length>0)
{
   console.log(results);
}
}