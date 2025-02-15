let Vampires = [];
let Fairies = [];
let Selkie = [];
let Taniwha = [];

let v, v1, v2, v3, v4;
let f, f1, f2, f3, f4;
let s, s1, s2, s3, s4, s5;
let t, t1, t2, t3, t4, t5; 

function preload() {
v = loadImage("vampires/1.jpg");
v1 = loadImage("vampires/2.jpg");
v2 = loadImage("vampires/3.jpg");
v3 = loadImage("vampires/4.jpg");
v4 = loadImage("vampires/17.jpg");

f = loadImage("fairies/f.jpg");
f1 = loadImage("fairies/f1.jpg");
f2 = loadImage("fairies/f2.jpg");
f3 = loadImage("fairies/f3.jpg");
f4 = loadImage("fairies/f4.jpg");

s = loadImage("selkie/1.jpg");
s1 = loadImage("selkie/2.jpg");
s2 = loadImage("selkie/3.jpg");
s3 = loadImage("selkie/4.webp");
s4 = loadImage("selkie/5.jpg");
s5 = loadImage("selkie/6.webp");

t = loadImage("taniwha/1.webp");
t1 = loadImage("taniwha/2.jpg");
t2 = loadImage("taniwha/3.jpg");
t3 = loadImage("staniwha/4.jpg");
t4 = loadImage("taniwha/5.jpg");
t5 = loadImage("taniwha/6.jpg");


}


function setup() {
 
  Vampires.push(v);
  Vampires.push(v1);
  Vampires.push(v2);
  Vampires.push(v3);
  Vampires.push(v4);

  Fairies.push(f);
  Fairies.push(f1);
  Fairies.push(f2);
  Fairies.push(f3);
  Fairies.push(f4);

  Selkie.push(s);
  Selkie.push(s1);
  Selkie.push(s2);
  Selkie.push(s3);
  Selkie.push(s4);
  Selkie.push(s5);

  Taniwha.push(t);
  Taniwha.push(t1);
  Taniwha.push(t2);
  Taniwha.push(t3);
  Taniwha.push(t4);
  Taniwha.push(t5);

  createCanvas(windowWidth, windowHeight);
  background (0)

  let button = createButton ('Vampires');
  button.position (windowWidth/4, windowHeight/ 4);
  button.mousePressed (() => { 
    let r = random(Vampires); 
    image(r, 100, 100);
  });

  let button2 = createButton ('Fairies');
  button2.position (button.x, button.y + 50);
  button2.mousePressed (() => { 
    let r = random(Fairies); 
    image(r, 200, 200);
  }); 

  let button3 = createButton ('Selkie');
  button3.position (button2.x, button2.y + 50);
  button3.mousePressed (() => { 
    let r = random(Selkie); 
    image(r, 300, 300);
  }); 

  let button4 = createButton ('Taniwha');
  button4.position (button3.x, button3.y + 50);
  button4.mousePressed (() => { 
    let r = random(Taniwha); 
    image(r, 400, 400);
  }); 
}

function draw() {
 
}