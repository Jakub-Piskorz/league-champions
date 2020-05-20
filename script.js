class leagueAPI {
  constructor() {
    this.json = null;
    this.html = null;
    this.list = null;
    this.htmlRoot = null;
    this.render = null;
  }
  _error(err) {
    throw new Error(err);
    return;
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
      })
      .catch(this._error);
  }
  buildHtml(htmlRoot = this.htmlRoot) {
    if (!htmlRoot || !this.json) {
      console.error("Not enough data. Try using .download()");
      return;
    }
  }
}

const champs = new leagueAPI();
