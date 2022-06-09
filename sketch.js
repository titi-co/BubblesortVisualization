let sequence = [];
let barWidth = 10;

let states = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  sequence = new Array(floor(width / barWidth));
  for (let i = 0; i < sequence.length; i++) {
    sequence[i] = random(height);
    states[i] = 0;
  }

  bubbleSort(sequence, sequence.length);
}

async function bubbleSort(arr, n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      states[j] = 1;
      if (arr[j] > arr[j + 1]) {
        await swap(arr, j, j + 1);
      }
      states[j] = 0;
    }
  }
}

async function swap(arr, a, b) {
  await sleep(10);
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function draw() {
  background(0);
  noStroke();

  for (let i = 0; i < sequence.length; i++) {
    if (states[i] == 1) fill("#00FF00");
    else fill(255);
    rect(i * barWidth, height - sequence[i], barWidth, sequence[i]);
  }
}
