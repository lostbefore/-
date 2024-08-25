const leavesContainer = document.getElementById('leaves-container');
const leafTypes = ['leaves1.png', 'leaves2.png', 'leaves3.png']; // 叶子种类
const leafImages = leafTypes.map(type => `../img/${type}`); // 叶子图片路径

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function createLeaf() {
  const leaf = document.createElement('div');
  leaf.className = 'leaf';
  const leafTypeIndex = Math.floor(randomBetween(0, leafTypes.length));
  leaf.style.backgroundImage = `url('../img/${leafImages[leafTypeIndex]}')`; 
  leaf.style.width = `${randomBetween(30, 80)}px`;
  leaf.style.height = `auto`;
  leaf.style.left = `${randomBetween(0, 100)}vw`;
  leaf.style.animation = `fall ${randomBetween(4, 10)}s linear ${randomBetween(0, 5)}s infinite, sway ${randomBetween(2, 4)}s ease-in-out ${randomBetween(0, 2)}s infinite alternate`;
  leavesContainer.appendChild(leaf);
}

function createLeaves() {
  const numberOfLeaves = randomBetween(5, 30);
  for (let i = 0; i < numberOfLeaves; i++) {
    createLeaf();
  }
}

createLeaves();

// 模拟风
setInterval(() => {
  const leaves = document.querySelectorAll('.leaf');
  leaves.forEach(leaf => {
    leaf.style.animationDelay = `${randomBetween(0, 5)}s, ${randomBetween(0, 2)}s`;
    leaf.style.animationDuration = `${randomBetween(4, 10)}s, ${randomBetween(2, 4)}s`;
  });
}, 5000);
