status1 ="";
function setup()
{
    cavas = createCanvas(200,200);
    cavas.center;
}
function draw()
{
    image(video ,200,200);
    if (status1 != "")
        {
            objectDetector.detect()
        }
}