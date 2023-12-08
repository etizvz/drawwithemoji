let selectedEmojiIndex = 0;
let selectedEmoji = '🍭';
let emojiOptions = ['🍭', '😝', '🍬', '👾', '🚀', '🕹️', '🌿', '🍕', '🌸','🍒','❄️', '❤️', '🌞','🌡️','😎','💧','🤣'];
let emojiButtons = [];
let isDrawing = false;
let menuBarY = 50;

function setup() {
  createCanvas(1700, 900);
  background(255);
  textSize(30);
  textAlign(CENTER, CENTER);

  for (let i = 0; i < emojiOptions.length; i++) {
    let x = i * 100 + 50;
    let y = 50;
    let eb = new EmojiButton(emojiOptions[i], x, y, i);
    emojiButtons.push(eb);
  }
}

function draw() {
  fill(255);
  noStroke();
  rect(0, 0, width, menuBarY * 2);

  fill(0);

  if (isDrawing && mouseY > menuBarY * 2) {
    text(emojiOptions[selectedEmojiIndex], mouseX, mouseY);
  }

  for (let i = 0; i < emojiButtons.length; i++) {
    emojiButtons[i].show();
  }

  // RESET KEY = R
  if (keyIsPressed && key === 'r') {
    resetDrawingArea();
  }
}

function resetDrawingArea() {
  fill(255);
  noStroke();
  rect(0, menuBarY * 2, width, height - menuBarY * 2);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW && selectedEmojiIndex > 0) {
    selectedEmojiIndex--;
  } else if (keyCode === RIGHT_ARROW && selectedEmojiIndex < emojiOptions.length - 1) {
    selectedEmojiIndex++;
  }

  selectedEmoji = emojiOptions[selectedEmojiIndex];
}

function mousePressed() {
  if (mouseY > menuBarY * 2) {
    isDrawing = true;
  }
}

function mouseReleased() {
  isDrawing = false;
}

function mouseDragged() {
  if (isDrawing && mouseY > menuBarY * 2) {
    text(emojiOptions[selectedEmojiIndex], mouseX, mouseY);
  }
}

function keyReleased() {
  if (key === 's') {
    saveCanvas(random(10000) + 'emojithings.png');
  }
}
