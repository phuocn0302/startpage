const generateList1 = () => {
  for(list of CONFIG.listContainer1) {
    let item = `
    <div class="card list list_${list.id}" id="list__1">
      <a href="${list.links[0].link}" class="listItem ls1">${list.links[0].name}</a>
      <a href="${list.links[1].link}" class="listItem ls2">${list.links[1].name}</a>
      <a href="${list.links[2].link}" class="listItem ls3">${list.links[2].name}</a>
      <a href="${list.links[3].link}" class="listItem ls4">${list.links[3].name}</a>
    </div>
    `;
    lists.insertAdjacentHTML("beforeend", item);
  };
};

const generateList2 = () => {
  for(list of CONFIG.listContainer2) {
    let item = `
    <div class="card list list_${list.id}" id="list__1">
      <a href="${list.links[0].link}" class="listItem ls1">${list.links[0].name}</a>
      <a href="${list.links[1].link}" class="listItem ls2">${list.links[1].name}</a>
      <a href="${list.links[2].link}" class="listItem ls3">${list.links[2].name}</a>
      <a href="${list.links[3].link}" class="listItem ls4">${list.links[3].name}</a>
    </div>
    `;
    lists.insertAdjacentHTML("beforeend", item);
  };
};

generateList1()
generateList2()