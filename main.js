if (document.title === "Document") {  
  //link
  const link = document.querySelector("a");
  link.href = "https://keybr.com";

  //lista
  const appList = document.getElementById('root');

  const buyList = [
    "books",
    "bread",
    "eraser",
    "earphones",
    "collection-cards",
    "hdmi",
    "vga",
    "motherboard",
    "university-books",
  ];

  const list = document.createElement('ul');

  buyList.forEach(item => {
    const listItems = document.createElement('li');
    listItems.textContent = item;
    list.appendChild(listItems);
  });

  appList.appendChild(list);
} else {
  document.querySelector('#app').innerHTML = `
    <div style="display: flex; flex-direction: column;">
      <h2> HTML CSS & JS </h2>
      <a href="./src/hw01/q01.html"> Go to the first excercise </a>
      <a href="./src/hw02/q02.html"> Go to the second excercise </a>
      <a href="./src/hw03/q03.html"> Go to the third excercise </a>
    </div>
  `

  setupCounter(document.querySelector('#counter'));
}