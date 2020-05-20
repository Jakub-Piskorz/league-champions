class leagueAPI {
  constructor() {
    this.json = null;
    this.html = null;
    this.list = null;
    this.htmlRoot = null;
    this.render = null;
  }
  download() {
    console.log("Initiating download...");
    fetch(
      "http://ddragon.leagueoflegends.com/cdn/10.10.3216176/data/pl_PL/champion.json"
    )
      .then((response) => {
        return response.json();
      })
      .catch(this._error)
      .then((data) => {
        this.json = data;
        this.list = Object.keys(data.data);
        console.log("Download completed.");
        this.buildHtml();
      })
      .catch(this._error);
  }
  buildHtml(root = this.htmlRoot) {
    if (!root || !this.json) {
      console.error("Not enough data. Try using .download()");
      return;
    }
    for (let champ of this.list) {
      this._createCard({
        name: champ,
        img: `${champ}.png`,
      });
    }
  }
  _error(err) {
    throw new Error(err);
    return;
  }
  _createCard({ root = this.htmlRoot, name = null, img = null, type = null }) {
    let card = document.createElement("div");
    let cardImg = document.createElement("img");
    let cardName = document.createElement("h4");
    card.setAttribute("class", "card");
    cardName.setAttribute("class", "card-name");
    if (name) {
      cardName.innerHTML = name;
    }
    cardImg.setAttribute("class", "card-img");
    if (img)
      cardImg.setAttribute(
        "src",
        `http://ddragon.leagueoflegends.com/cdn/10.10.3216176/img/champion/${img}`
      );

    card.appendChild(cardImg);
    card.appendChild(cardName);
    root.appendChild(card);
    console.log("Champion card created!");
  }
}

const champs = new leagueAPI();
champs.download();
champs.htmlRoot = document.querySelector(".card-container");
