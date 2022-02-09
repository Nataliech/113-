function preload() {

}

function setup() {

    canvas = createCanvas(500, 400);
    canvas.position(70, 200);
    video = createCapture(VIDEO)
    video.hide();

    tint_color = "";
}

function draw(){

    image(video, 0, 0, 620, 480);
    tint(tint_color);

    circle(40,40,80);
    circle(460,40,80);
    circle(40,360,80);
    circle(460,360,80);

    stroke(50, 168, 82);
    fill(100, 128, 82);

    rect(63, 27, 375, 25);
    rect(63, 347, 375, 25);
    rect(27, 63, 25, 275);
    rect(448, 63, 25, 275);

    stroke(50, 168, 82);
    fill(100, 0, 0);

}

function take_snapshot() {

    save('student_name.png');
}
