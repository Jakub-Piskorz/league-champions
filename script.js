(async () => {
  const response = await fetch(
    "http://ddragon.leagueoflegends.com/cdn/10.10.3216176/data/en_US/champion.json"
  );
  const champs = await response.json();
  let div = document.createElement("div");
  div.innerHTML = JSON.stringify(champs);
  document.body.appendChild(div);
  console.log(document.body.firstChild.text);
})();

// const createChamp => {
//     document.createElement("div", )
// }
