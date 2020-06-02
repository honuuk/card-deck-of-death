const readline=require("readline");

const rl=readline.createInterface({
  input:process.stdin,
  output:process.stdout
});

const type = ['스쿼트', '스쿼트', '왼쪽 런지', '오른쪽 런지'];
const end = [];
const cards = [
  [10, 10, 10, 11],
  [10, 10, 10, 11],
  [10, 10, 10, 11],
  [10, 10, 10, 11],
]
rl.setPrompt("next? ");
rl.prompt();

rl.on("line", (data) => {
  if (data === '') {
    let next = Math.floor(Math.random() * 5);
    while (next === 4 || end.includes(next)) {
      next = Math.floor(Math.random() * 5);
    }
    const count = cards[next].length + 1;
    const cardIndex = Math.floor(Math.random() * count);
    const card = cards[next][cardIndex];
    console.log(`${type[next]}: ${card}회`);
    cards[next].splice(cardIndex, 1);
    if (cards[next].length === 0) {
      end.push(next);
    }
    const isEmpty = cards[0].length === 0 && cards[1].length === 0 && cards[2].length === 0 && cards[3].length === 0;
    if (isEmpty) {
      rl.close();
    }
  }
});