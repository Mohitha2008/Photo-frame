function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,150,150,200,200);
    fill(105,50,170);
    stroke(25,0,0);
    circle(50,50,80);
    circle(450,50,80);
    circle(50,450,80);
    circle(450,450,80);
    fill(0,20,100);
    stroke(0,20,0);
    rect(90,40,320,20);
    rect(90,437,320,20);
    rect(438,90,20,320);
    rect(38,90,20,320);
}
function take_snapshot(){
    save('mySelfie.png');
}