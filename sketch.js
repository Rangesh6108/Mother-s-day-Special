var heart,heartImg,heartImg_2;
var emoji,emoji_1;
var back_img;
var open_1;


function preload(){

  heartImg=loadImage("images/Blanck Heart.png");
  heartImg_2=loadImage("images/Heart with greeting.png");
  emoji_1=loadAnimation("images/Emoji_1.png","images/Emoji_2.png","images/Emoji_3.png");
  back_img=loadImage("images/Backg.jpg");

}
function setup() {
  createCanvas(1500, 1000);

  open_1=createButton('OPEN');
  open_1.position(990,840);
  open_1.style('width', '100px');
  open_1.style('height', '50px');
  open_1.style('background', 'lightpink');
  open_1.style('font-size', '20px');

  heart=createSprite(750,500);
  heart.addImage(heartImg);

  open_1.mousePressed(()=>{

    heart.addImage(heartImg_2);
    open_1.hide();
    emoji=createSprite(780,720);
    emoji.addAnimation("Emoji",emoji_1);

  })


}

function draw() {
  background(back_img);
  
  drawSprites();

}
