const socialIcons = {
  twitter: "./assets/twitter-player.png",
  twitch: "./assets/twitch.png",
  insta: "./assets/instagram.png"
}



const player1 = {
    nick:'s1mple',
    name: 'Oleksandr Kostyliev  ',
    photo: './assets/CARD-SIMPLE.png',
    countryFlag: './assets/ukraine_flag.webp',
    age: 25+' years',
    team: 'Natus Vincere  ',
    teamFlag: './assets/Navi LOGO.svg',
    rankposition: 1,
    hasMajor: true,
    stats: {
        rating: 1.25,
        dpr: 0.62,
        kast: 74.0,
        impact: 1.35,
        adr: 85.7,
        kpr: 0.85
    },
    social: {
      twitter: "https://twitter.com/s1mpleO",
      twitch: "https://www.twitch.tv/s1mple",
      insta: "https://www.instagram.com/s1mpleo/",
    }
    
}

const player2 = {
    nick: 'ZywOo',
    name: 'Mathieu Herbaut  ',
    photo: './assets/CARD-ZYWOO.png',
    countryFlag: './assets/france_flag.webp',
    age: 21+' years',
    team: 'Vitality  ',
    teamFlag: './assets/vit_logo.webp',
    rankposition: 2,
    hasMajor: false,
    stats: {
        rating: 1.28,
        dpr: 0.61,
        kast: 74.7,
        impact: 1.36,
        adr: 84.1,
        kpr: 0.81,
    },
    social: {
      twitter: "https://twitter.com/zywoo",
      twitch: "https://www.twitch.tv/cs_zywoo",
      insta: "https://www.instagram.com/cs_zywoo/",
    }

}
const player3 = {
    nick: 'device',
    name: 'Nicolai Reedtz  ',
    photo: './assets/CARD-DEVICE.png',
    countryFlag: './assets/dinamarca.webp',
    age: 27+' years',
    team: 'Ninjas in Pijamas  ',
    teamFlag: './assets/nip_logo.webp',
    rankposition: 3,
    hasMajor: true,
    stats: {
        rating: 1.15,
        dpr: 0.63,
        kast: 70.9,
        impact: 1.27,
        adr: 80.2,
        kpr: 0.77,
    },
    social: {
      twitter: "https://twitter.com/dev1ce",
      twitch: "https://www.twitch.tv/device",
      insta: "https://www.instagram.com/devveking/",
    }


}
const player4 = {
    nick: 'NiKo',
    name: 'Nikola Kovač  ',
    photo: './assets/CARD-NIKO.png',
    countryFlag: './assets/bosnia.webp',
    age: 25+' years',
    team: 'G2  ',
    teamFlag: './assets/g2_logo.webp',
    rankposition: 4,
    hasMajor: false,
    stats: {
        rating: 1.15,
        dpr: 0.67,
        kast: 70.9,
        impact: 1.30,
        adr: 86.0,
        kpr: 0.79,
    },
    social: {
      twitter: "https://twitter.com/G2NiKo",
      twitch: "https://www.twitch.tv/NiKo",
      insta: "https://www.instagram.com/csgoniko",
    }

}
const player5 = {
    nick: 'coldzera',
    name: 'Marcelo David  ',
    photo: './assets/CARD-COLDZERA.png',
    countryFlag: './assets/brazil.webp',
    age: 27+' years',
    team: '00NATION  ',
    teamFlag: './assets/00nation_logo.webp',
    rankposition: 5,
    hasMajor: true,
    stats: {
        rating: 1.11,
        dpr: 0.63,
        kast: 72.7,
        impact: 1.06,
        adr: 77.8,
        kpr: 0.75,
    },
    social: {
      twitter: "https://www.twitter.com/coldzera",
      twitch: "https://www.twitch.tv/coldzin",
      insta: "https://www.instagram.com/coldzera",
    }

}

let players = []

let majorWinners = []

function temMajor(player){
    if(player.hasMajor === true){
        majorWinners.push(player)
    }
}


players.push(player1, player2, player3, player4, player5)

temMajor(player1)
temMajor(player2)
temMajor(player3)
temMajor(player4)
temMajor(player5)

console.log(players)

console.log(majorWinners)

//3.1
const printPlayer = (player) => {
    console.log(player["nick"].toUpperCase());
    console.log("name:", player["name"]);
    console.log("countryFlag:", player["countryFlag"]);
    console.log("age:", player["age"]);
    console.log("team:", player["team"]);
    console.log("rankposition:", player["rankposition"]);
    console.log('hasMajor:', player['hasMajor']);
    console.log('stats:', player['stats'])
    console.log('----------------')
    };

    printPlayer(player1)
    printPlayer(player2)
    printPlayer(player3)
    printPlayer(player4)
    printPlayer(player5)

    //Calculando Media de Rating

    const calculaMedia = (arr) => {
      let soma = 0
      for (let i of arr){
        soma += i.stats.rating/5
      }
      console.log('MEDIA DE RATING: ' +soma)
    }
    calculaMedia(players)

  //3.2

  function printWithLoops(arr) {
    for (let obj of arr) {
      for (let key in obj) {
        console.log(key + ":", obj[key]);
      }
      console.log("------");
    }
  }
  const printItems = () => {
    printWithLoops(players);
  };
  

  //3.3

  function valuesToStr(obj) {
    let text = "";
    for (let key in obj) {
      text = text + `${key}: ${obj[key]}\n`;
    }
    return text;
  }
  
  const printObjsToStr = () => {
    for (let object of players) {
      console.log(valuesToStr(object));
    }
  };
  
  //3.4

  function objHasString(array, string) {
    for (let obj of array) {
      if (obj["nick"].toLowerCase() === string.toLowerCase()) {
        return obj;
      }
    }
    alert("Nenhum item foi encontrado!");
  }

  


//playerCard => photo/profile/stats {
  // photo =>
  // profile => playername => span => socialIcons
  // profile => flag/name
  // profile => age/years
  // profile => team/navi-logo
  // profile => rank

  // stats => table => TR => th (RATING, DPR, KAST)
  //          table => TR => td (stats de cima)
  //          table => TR => th (IMPACT, ADR, KPR)
  //          table => TR => td (stats de cima)

  const addPlayer5 = () => {

    let playerCard5 = document.createElement("div");
    playerCard5.classList.add("player-card");
    playerCard5.setAttribute('id', 'player5')
    
    
    let playerPhoto = document.createElement("img");
    playerPhoto.classList.add("player-photo");
    playerPhoto.setAttribute('src', player5.photo)
    playerPhoto.setAttribute('alt', 'niko')
    
    let profile = document.createElement("div");
    profile.classList.add("profile");
    
    let stats = document.createElement("div");
    stats.classList.add("stats-1");
    
    playerCard5.appendChild(playerPhoto)
    playerCard5.appendChild(profile)
    playerCard5.appendChild(stats)
    
    let playerName = document.createElement("h2")
    playerName.classList.add("playername")
    playerName.textContent = player5.nick
    
    let socialMedia = document.createElement("span")
    
    let twitter = document.createElement("a")
    twitter.setAttribute('href', player5.social.twitter)
    twitter.setAttribute('target', '_blank')
    let twitch = document.createElement("a")
    twitch.setAttribute('href', player5.social.twitch)
    twitch.setAttribute('target', '_blank')
    let insta = document.createElement("a")
    insta.setAttribute('href', player5.social.insta)
    insta.setAttribute('target', '_blank')
    
    let twitterIcon = document.createElement('img')
    twitterIcon.classList.add('socialIcon')
    twitterIcon.setAttribute('src', socialIcons.twitter)
    twitterIcon.setAttribute('alt', 'twitter')
    
    let twitchIcon = document.createElement('img')
    twitchIcon.classList.add('socialIcon')
    twitchIcon.setAttribute('src', socialIcons.twitch)
    twitchIcon.setAttribute('alt', 'twitch')
    
    let instaIcon = document.createElement('img')
    instaIcon.classList.add('socialIcon')
    instaIcon.setAttribute('src', socialIcons.insta)
    instaIcon.setAttribute('alt', 'insta')
    
    
    twitter.appendChild(twitterIcon)
    twitch.appendChild(twitchIcon)
    insta.appendChild(instaIcon)
    
    socialMedia.appendChild(twitter)
    socialMedia.appendChild(twitch)
    socialMedia.appendChild(insta)
    
    playerName.appendChild(socialMedia)
    
    profile.appendChild(playerName)
    
    let flag = document.createElement("p")
    let flagPhoto = document.createElement("img")
    flagPhoto.classList.add("flag")
    flagPhoto.setAttribute('src', player5.countryFlag)
    flagPhoto.setAttribute('alt', 'brazil-flag')
    flag.textContent = player5.name
    
    flag.appendChild(flagPhoto)
    
    profile.appendChild(flag)
    
    let age = document.createElement("p")
    age.classList.add('age')
    age.textContent = "Age"
    let years = document.createElement("span")
    years.classList.add('years')
    years.textContent = player5.age
    
    age.appendChild(years)
    
    profile.appendChild(age)
    
    let team = document.createElement("p")
    team.classList.add('team')
    team.textContent = 'Current Team'
    let teamName = document.createElement('span')
    teamName.textContent = player5.team
    let teamLogo = document.createElement('img')
    teamLogo.classList.add('navi-logo')
    teamLogo.setAttribute('src', player5.teamFlag)
    teamLogo.setAttribute('alt', 'team-logo')
    
    
    teamName.appendChild(teamLogo)
    team.appendChild(teamName)
    profile.appendChild(team)
    
    let rank = document.createElement('h1')
    rank.classList.add('rank')
    rank.textContent = "#"+player5.rankposition
    
    profile.appendChild(rank)
    
    let statsTable = document.createElement('table')
    
    let tr1 = document.createElement('tr')
    let tr2 = document.createElement('tr')
    let tr3 = document.createElement('tr')
    let tr4 = document.createElement('tr')
    
    let rating = document.createElement('th')
    rating.textContent = "RATING 1.0"
    let dpr = document.createElement('th')
    dpr.textContent = "DPR"
    let kast = document.createElement('th')
    kast.textContent = "KAST"
    
    tr1.appendChild(rating)
    tr1.appendChild(dpr)
    tr1.appendChild(kast)
    
    let ratingStat = document.createElement('td')
    ratingStat.textContent = player5.stats.rating
    let dprStat = document.createElement('td')
    dprStat.textContent = player5.stats.dpr
    let kastStat = document.createElement('td')
    kastStat.textContent = player5.stats.kast
    
    tr2.appendChild(ratingStat)
    tr2.appendChild(dprStat)
    tr2.appendChild(kastStat)
    
    let impact = document.createElement('th')
    impact.textContent = "IMPACT"
    let adr = document.createElement('th')
    adr.textContent = "ADR"
    let kpr = document.createElement('th')
    kpr.textContent = "KPR"
    
    tr3.appendChild(impact)
    tr3.appendChild(adr)
    tr3.appendChild(kpr)
    
    let impactStat = document.createElement('td')
    impactStat.textContent = player5.stats.impact
    let adrStat = document.createElement('td')
    adrStat.textContent = player5.stats.adr
    let kprStat = document.createElement('td')
    kprStat.textContent = player5.stats.kpr
    
    tr4.appendChild(impactStat)
    tr4.appendChild(adrStat)
    tr4.appendChild(kprStat)
    
    statsTable.appendChild(tr1)
    statsTable.appendChild(tr2)
    statsTable.appendChild(tr3)
    statsTable.appendChild(tr4)
    
    stats.append(statsTable)
    
    const mainPage = document.getElementById("main")
    
    mainPage.insertAdjacentElement("afterbegin", playerCard5)
    
    }
    
    addPlayer5()

  const addPlayer4 = () => {

    let playerCard4 = document.createElement("div");
    playerCard4.classList.add("player-card");
    playerCard4.setAttribute('id', 'player4')
    
    
    let playerPhoto = document.createElement("img");
    playerPhoto.classList.add("player-photo");
    playerPhoto.setAttribute('src', player4.photo)
    playerPhoto.setAttribute('alt', 'niko')
    
    let profile = document.createElement("div");
    profile.classList.add("profile");
    
    let stats = document.createElement("div");
    stats.classList.add("stats-1");
    
    playerCard4.appendChild(playerPhoto)
    playerCard4.appendChild(profile)
    playerCard4.appendChild(stats)
    
    let playerName = document.createElement("h2")
    playerName.classList.add("playername")
    playerName.textContent = player4.nick
    
    let socialMedia = document.createElement("span")
    
    let twitter = document.createElement("a")
    twitter.setAttribute('href', player4.social.twitter)
    twitter.setAttribute('target', '_blank')
    let twitch = document.createElement("a")
    twitch.setAttribute('href', player4.social.twitch)
    twitch.setAttribute('target', '_blank')
    let insta = document.createElement("a")
    insta.setAttribute('href', player4.social.insta)
    insta.setAttribute('target', '_blank')
    
    let twitterIcon = document.createElement('img')
    twitterIcon.classList.add('socialIcon')
    twitterIcon.setAttribute('src', socialIcons.twitter)
    twitterIcon.setAttribute('alt', 'twitter')
    
    let twitchIcon = document.createElement('img')
    twitchIcon.classList.add('socialIcon')
    twitchIcon.setAttribute('src', socialIcons.twitch)
    twitchIcon.setAttribute('alt', 'twitch')
    
    let instaIcon = document.createElement('img')
    instaIcon.classList.add('socialIcon')
    instaIcon.setAttribute('src', socialIcons.insta)
    instaIcon.setAttribute('alt', 'insta')
    
    
    twitter.appendChild(twitterIcon)
    twitch.appendChild(twitchIcon)
    insta.appendChild(instaIcon)
    
    socialMedia.appendChild(twitter)
    socialMedia.appendChild(twitch)
    socialMedia.appendChild(insta)
    
    playerName.appendChild(socialMedia)
    
    profile.appendChild(playerName)
    
    let flag = document.createElement("p")
    let flagPhoto = document.createElement("img")
    flagPhoto.classList.add("flag")
    flagPhoto.setAttribute('src', player4.countryFlag)
    flagPhoto.setAttribute('alt', 'bosnia-flag')
    flag.textContent = player4.name
    
    flag.appendChild(flagPhoto)
    
    profile.appendChild(flag)
    
    let age = document.createElement("p")
    age.classList.add('age')
    age.textContent = "Age"
    let years = document.createElement("span")
    years.classList.add('years')
    years.textContent = player4.age
    
    age.appendChild(years)
    
    profile.appendChild(age)
    
    let team = document.createElement("p")
    team.classList.add('team')
    team.textContent = 'Current Team'
    let teamName = document.createElement('span')
    teamName.textContent = player4.team
    let teamLogo = document.createElement('img')
    teamLogo.classList.add('navi-logo')
    teamLogo.setAttribute('src', player4.teamFlag)
    teamLogo.setAttribute('alt', 'team-logo')
    
    
    teamName.appendChild(teamLogo)
    team.appendChild(teamName)
    profile.appendChild(team)
    
    let rank = document.createElement('h1')
    rank.classList.add('rank')
    rank.textContent = "#"+player4.rankposition
    
    profile.appendChild(rank)
    
    let statsTable = document.createElement('table')
    
    let tr1 = document.createElement('tr')
    let tr2 = document.createElement('tr')
    let tr3 = document.createElement('tr')
    let tr4 = document.createElement('tr')
    
    let rating = document.createElement('th')
    rating.textContent = "RATING 1.0"
    let dpr = document.createElement('th')
    dpr.textContent = "DPR"
    let kast = document.createElement('th')
    kast.textContent = "KAST"
    
    tr1.appendChild(rating)
    tr1.appendChild(dpr)
    tr1.appendChild(kast)
    
    let ratingStat = document.createElement('td')
    ratingStat.textContent = player4.stats.rating
    let dprStat = document.createElement('td')
    dprStat.textContent = player4.stats.dpr
    let kastStat = document.createElement('td')
    kastStat.textContent = player4.stats.kast
    
    tr2.appendChild(ratingStat)
    tr2.appendChild(dprStat)
    tr2.appendChild(kastStat)
    
    let impact = document.createElement('th')
    impact.textContent = "IMPACT"
    let adr = document.createElement('th')
    adr.textContent = "ADR"
    let kpr = document.createElement('th')
    kpr.textContent = "KPR"
    
    tr3.appendChild(impact)
    tr3.appendChild(adr)
    tr3.appendChild(kpr)
    
    let impactStat = document.createElement('td')
    impactStat.textContent = player4.stats.impact
    let adrStat = document.createElement('td')
    adrStat.textContent = player4.stats.adr
    let kprStat = document.createElement('td')
    kprStat.textContent = player4.stats.kpr
    
    tr4.appendChild(impactStat)
    tr4.appendChild(adrStat)
    tr4.appendChild(kprStat)
    
    statsTable.appendChild(tr1)
    statsTable.appendChild(tr2)
    statsTable.appendChild(tr3)
    statsTable.appendChild(tr4)
    
    stats.append(statsTable)
    
    const mainPage = document.getElementById("main")
    
    mainPage.insertAdjacentElement("afterbegin", playerCard4)
    
    }
    
    addPlayer4()

  const addPlayer3 = () => {

    let playerCard3 = document.createElement("div");
    playerCard3.classList.add("player-card");
    playerCard3.setAttribute('id', 'player3')
    
    
    let playerPhoto = document.createElement("img");
    playerPhoto.classList.add("player-photo");
    playerPhoto.setAttribute('src', player3.photo)
    playerPhoto.setAttribute('alt', 'device')
    
    let profile = document.createElement("div");
    profile.classList.add("profile");
    
    let stats = document.createElement("div");
    stats.classList.add("stats-1");
    
    playerCard3.appendChild(playerPhoto)
    playerCard3.appendChild(profile)
    playerCard3.appendChild(stats)
    
    let playerName = document.createElement("h2")
    playerName.classList.add("playername")
    playerName.textContent = player3.nick
    
    let socialMedia = document.createElement("span")
    
    let twitter = document.createElement("a")
    twitter.setAttribute('href', player3.social.twitter)
    twitter.setAttribute('target', '_blank')
    let twitch = document.createElement("a")
    twitch.setAttribute('href', player3.social.twitch)
    twitch.setAttribute('target', '_blank')
    let insta = document.createElement("a")
    insta.setAttribute('href', player3.social.insta)
    insta.setAttribute('target', '_blank')
    
    let twitterIcon = document.createElement('img')
    twitterIcon.classList.add('socialIcon')
    twitterIcon.setAttribute('src', socialIcons.twitter)
    twitterIcon.setAttribute('alt', 'twitter')
    
    let twitchIcon = document.createElement('img')
    twitchIcon.classList.add('socialIcon')
    twitchIcon.setAttribute('src', socialIcons.twitch)
    twitchIcon.setAttribute('alt', 'twitch')
    
    let instaIcon = document.createElement('img')
    instaIcon.classList.add('socialIcon')
    instaIcon.setAttribute('src', socialIcons.insta)
    instaIcon.setAttribute('alt', 'insta')
    
    
    twitter.appendChild(twitterIcon)
    twitch.appendChild(twitchIcon)
    insta.appendChild(instaIcon)
    
    socialMedia.appendChild(twitter)
    socialMedia.appendChild(twitch)
    socialMedia.appendChild(insta)
    
    playerName.appendChild(socialMedia)
    
    profile.appendChild(playerName)
    
    let flag = document.createElement("p")
    let flagPhoto = document.createElement("img")
    flagPhoto.classList.add("flag")
    flagPhoto.setAttribute('src', player3.countryFlag)
    flagPhoto.setAttribute('alt', 'dinamark-flag')
    flag.textContent = player3.name
    
    flag.appendChild(flagPhoto)
    
    profile.appendChild(flag)
    
    let age = document.createElement("p")
    age.classList.add('age')
    age.textContent = "Age"
    let years = document.createElement("span")
    years.classList.add('years')
    years.textContent = player3.age
    
    age.appendChild(years)
    
    profile.appendChild(age)
    
    let team = document.createElement("p")
    team.classList.add('team')
    team.textContent = 'Current Team'
    let teamName = document.createElement('span')
    teamName.textContent = player3.team
    let teamLogo = document.createElement('img')
    teamLogo.classList.add('navi-logo')
    teamLogo.setAttribute('src', player3.teamFlag)
    teamLogo.setAttribute('alt', 'team-logo')
    
    
    teamName.appendChild(teamLogo)
    team.appendChild(teamName)
    profile.appendChild(team)
    
    let rank = document.createElement('h1')
    rank.classList.add('rank')
    rank.textContent = "#"+player3.rankposition
    
    profile.appendChild(rank)
    
    let statsTable = document.createElement('table')
    
    let tr1 = document.createElement('tr')
    let tr2 = document.createElement('tr')
    let tr3 = document.createElement('tr')
    let tr4 = document.createElement('tr')
    
    let rating = document.createElement('th')
    rating.textContent = "RATING 1.0"
    let dpr = document.createElement('th')
    dpr.textContent = "DPR"
    let kast = document.createElement('th')
    kast.textContent = "KAST"
    
    tr1.appendChild(rating)
    tr1.appendChild(dpr)
    tr1.appendChild(kast)
    
    let ratingStat = document.createElement('td')
    ratingStat.textContent = player3.stats.rating
    let dprStat = document.createElement('td')
    dprStat.textContent = player3.stats.dpr
    let kastStat = document.createElement('td')
    kastStat.textContent = player3.stats.kast
    
    tr2.appendChild(ratingStat)
    tr2.appendChild(dprStat)
    tr2.appendChild(kastStat)
    
    let impact = document.createElement('th')
    impact.textContent = "IMPACT"
    let adr = document.createElement('th')
    adr.textContent = "ADR"
    let kpr = document.createElement('th')
    kpr.textContent = "KPR"
    
    tr3.appendChild(impact)
    tr3.appendChild(adr)
    tr3.appendChild(kpr)
    
    let impactStat = document.createElement('td')
    impactStat.textContent = player3.stats.impact
    let adrStat = document.createElement('td')
    adrStat.textContent = player3.stats.adr
    let kprStat = document.createElement('td')
    kprStat.textContent = player3.stats.kpr
    
    tr4.appendChild(impactStat)
    tr4.appendChild(adrStat)
    tr4.appendChild(kprStat)
    
    statsTable.appendChild(tr1)
    statsTable.appendChild(tr2)
    statsTable.appendChild(tr3)
    statsTable.appendChild(tr4)
    
    stats.append(statsTable)
    
    const mainPage = document.getElementById("main")
    
    mainPage.insertAdjacentElement("afterbegin", playerCard3)
    
    }
    
    addPlayer3()

  const addPlayer2 = () => {

    let playerCard2 = document.createElement("div");
    playerCard2.classList.add("player-card");
    playerCard2.setAttribute('id', 'player2')
    
    
    let playerPhoto = document.createElement("img");
    playerPhoto.classList.add("player-photo");
    playerPhoto.setAttribute('src', player2.photo)
    playerPhoto.setAttribute('alt', 'zywoo')
    
    let profile = document.createElement("div");
    profile.classList.add("profile");
    
    let stats = document.createElement("div");
    stats.classList.add("stats-1");
    
    playerCard2.appendChild(playerPhoto)
    playerCard2.appendChild(profile)
    playerCard2.appendChild(stats)
    
    let playerName = document.createElement("h2")
    playerName.classList.add("playername")
    playerName.textContent = player2.nick
    
    let socialMedia = document.createElement("span")
    
    let twitter = document.createElement("a")
    twitter.setAttribute('href', player2.social.twitter)
    twitter.setAttribute('target', '_blank')
    let twitch = document.createElement("a")
    twitch.setAttribute('href', player2.social.twitch)
    twitch.setAttribute('target', '_blank')
    let insta = document.createElement("a")
    insta.setAttribute('href', player2.social.insta)
    insta.setAttribute('target', '_blank')
    
    let twitterIcon = document.createElement('img')
    twitterIcon.classList.add('socialIcon')
    twitterIcon.setAttribute('src', socialIcons.twitter)
    twitterIcon.setAttribute('alt', 'twitter')
    
    let twitchIcon = document.createElement('img')
    twitchIcon.classList.add('socialIcon')
    twitchIcon.setAttribute('src', socialIcons.twitch)
    twitchIcon.setAttribute('alt', 'twitch')
    
    let instaIcon = document.createElement('img')
    instaIcon.classList.add('socialIcon')
    instaIcon.setAttribute('src', socialIcons.insta)
    instaIcon.setAttribute('alt', 'insta')
    
    
    twitter.appendChild(twitterIcon)
    twitch.appendChild(twitchIcon)
    insta.appendChild(instaIcon)
    
    socialMedia.appendChild(twitter)
    socialMedia.appendChild(twitch)
    socialMedia.appendChild(insta)
    
    playerName.appendChild(socialMedia)
    
    profile.appendChild(playerName)
    
    let flag = document.createElement("p")
    let flagPhoto = document.createElement("img")
    flagPhoto.classList.add("flag")
    flagPhoto.setAttribute('src', player2.countryFlag)
    flagPhoto.setAttribute('alt', 'france-flag')
    flag.textContent = player2.name
    
    flag.appendChild(flagPhoto)
    
    profile.appendChild(flag)
    
    let age = document.createElement("p")
    age.classList.add('age')
    age.textContent = "Age"
    let years = document.createElement("span")
    years.classList.add('years')
    years.textContent = player2.age
    
    age.appendChild(years)
    
    profile.appendChild(age)
    
    let team = document.createElement("p")
    team.classList.add('team')
    team.textContent = 'Current Team'
    let teamName = document.createElement('span')
    teamName.textContent = player2.team
    let teamLogo = document.createElement('img')
    teamLogo.classList.add('navi-logo')
    teamLogo.setAttribute('src', player2.teamFlag)
    teamLogo.setAttribute('alt', 'team-logo')
    
    
    teamName.appendChild(teamLogo)
    team.appendChild(teamName)
    profile.appendChild(team)
    
    let rank = document.createElement('h1')
    rank.classList.add('rank')
    rank.textContent = "#"+player2.rankposition
    
    profile.appendChild(rank)
    
    let statsTable = document.createElement('table')
    
    let tr1 = document.createElement('tr')
    let tr2 = document.createElement('tr')
    let tr3 = document.createElement('tr')
    let tr4 = document.createElement('tr')
    
    let rating = document.createElement('th')
    rating.textContent = "RATING 1.0"
    let dpr = document.createElement('th')
    dpr.textContent = "DPR"
    let kast = document.createElement('th')
    kast.textContent = "KAST"
    
    tr1.appendChild(rating)
    tr1.appendChild(dpr)
    tr1.appendChild(kast)
    
    let ratingStat = document.createElement('td')
    ratingStat.textContent = player2.stats.rating
    let dprStat = document.createElement('td')
    dprStat.textContent = player2.stats.dpr
    let kastStat = document.createElement('td')
    kastStat.textContent = player2.stats.kast
    
    tr2.appendChild(ratingStat)
    tr2.appendChild(dprStat)
    tr2.appendChild(kastStat)
    
    let impact = document.createElement('th')
    impact.textContent = "IMPACT"
    let adr = document.createElement('th')
    adr.textContent = "ADR"
    let kpr = document.createElement('th')
    kpr.textContent = "KPR"
    
    tr3.appendChild(impact)
    tr3.appendChild(adr)
    tr3.appendChild(kpr)
    
    let impactStat = document.createElement('td')
    impactStat.textContent = player2.stats.impact
    let adrStat = document.createElement('td')
    adrStat.textContent = player2.stats.adr
    let kprStat = document.createElement('td')
    kprStat.textContent = player2.stats.kpr
    
    tr4.appendChild(impactStat)
    tr4.appendChild(adrStat)
    tr4.appendChild(kprStat)
    
    statsTable.appendChild(tr1)
    statsTable.appendChild(tr2)
    statsTable.appendChild(tr3)
    statsTable.appendChild(tr4)
    
    stats.append(statsTable)
    
    const mainPage = document.getElementById("main")
    
    mainPage.insertAdjacentElement('afterbegin', playerCard2)
    
    }
    
    addPlayer2()

  const addPlayer1 = () => {

    let playerCard1 = document.createElement("div");
    playerCard1.classList.add("player-card");
    playerCard1.setAttribute('id', 'player1')
    
    
    let playerPhoto = document.createElement("img");
    playerPhoto.classList.add("player-photo");
    playerPhoto.setAttribute('src', player1.photo)
    playerPhoto.setAttribute('alt', 's1mple')
    
    let profile = document.createElement("div");
    profile.classList.add("profile");
    
    let stats = document.createElement("div");
    stats.classList.add("stats-1");
    
    playerCard1.appendChild(playerPhoto)
    playerCard1.appendChild(profile)
    playerCard1.appendChild(stats)
    
    let playerName = document.createElement("h2")
    playerName.classList.add("playername")
    playerName.textContent = player1.nick
    
    let socialMedia = document.createElement("span")
    
    let twitter = document.createElement("a")
    twitter.setAttribute('href', player1.social.twitter)
    twitter.setAttribute('target', '_blank')
    let twitch = document.createElement("a")
    twitch.setAttribute('href', player1.social.twitch)
    twitch.setAttribute('target', '_blank')
    let insta = document.createElement("a")
    insta.setAttribute('href', player1.social.insta)
    insta.setAttribute('target', '_blank')
    
    let twitterIcon = document.createElement('img')
    twitterIcon.classList.add('socialIcon')
    twitterIcon.setAttribute('src', socialIcons.twitter)
    twitterIcon.setAttribute('alt', 'twitter')
    
    let twitchIcon = document.createElement('img')
    twitchIcon.classList.add('socialIcon')
    twitchIcon.setAttribute('src', socialIcons.twitch)
    twitchIcon.setAttribute('alt', 'twitch')
    
    let instaIcon = document.createElement('img')
    instaIcon.classList.add('socialIcon')
    instaIcon.setAttribute('src', socialIcons.insta)
    instaIcon.setAttribute('alt', 'insta')
    
    
    twitter.appendChild(twitterIcon)
    twitch.appendChild(twitchIcon)
    insta.appendChild(instaIcon)
    
    socialMedia.appendChild(twitter)
    socialMedia.appendChild(twitch)
    socialMedia.appendChild(insta)
    
    playerName.appendChild(socialMedia)
    
    profile.appendChild(playerName)
    
    let flag = document.createElement("p")
    let flagPhoto = document.createElement("img")
    flagPhoto.classList.add("flag")
    flagPhoto.setAttribute('src', player1.countryFlag)
    flagPhoto.setAttribute('alt', 'ukraine-flag')
    flag.textContent = player1.name
    
    flag.appendChild(flagPhoto)
    
    profile.appendChild(flag)
    
    let age = document.createElement("p")
    age.classList.add('age')
    age.textContent = "Age"
    let years = document.createElement("span")
    years.classList.add('years')
    years.textContent = player1.age
    
    age.appendChild(years)
    
    profile.appendChild(age)
    
    let team = document.createElement("p")
    team.classList.add('team')
    team.textContent = 'Current Team'
    let teamName = document.createElement('span')
    teamName.textContent = player1.team
    let teamLogo = document.createElement('img')
    teamLogo.classList.add('navi-logo')
    teamLogo.setAttribute('src', player1.teamFlag)
    teamLogo.setAttribute('alt', 'team-logo')
    
    
    teamName.appendChild(teamLogo)
    team.appendChild(teamName)
    profile.appendChild(team)
    
    let rank = document.createElement('h1')
    rank.classList.add('rank')
    rank.textContent = "#"+player1.rankposition
    
    profile.appendChild(rank)
    
    let statsTable = document.createElement('table')
    
    let tr1 = document.createElement('tr')
    let tr2 = document.createElement('tr')
    let tr3 = document.createElement('tr')
    let tr4 = document.createElement('tr')
    
    let rating = document.createElement('th')
    rating.textContent = "RATING 1.0"
    let dpr = document.createElement('th')
    dpr.textContent = "DPR"
    let kast = document.createElement('th')
    kast.textContent = "KAST"
    
    tr1.appendChild(rating)
    tr1.appendChild(dpr)
    tr1.appendChild(kast)
    
    let ratingStat = document.createElement('td')
    ratingStat.textContent = player1.stats.rating
    let dprStat = document.createElement('td')
    dprStat.textContent = player1.stats.dpr
    let kastStat = document.createElement('td')
    kastStat.textContent = player1.stats.kast
    
    tr2.appendChild(ratingStat)
    tr2.appendChild(dprStat)
    tr2.appendChild(kastStat)
    
    let impact = document.createElement('th')
    impact.textContent = "IMPACT"
    let adr = document.createElement('th')
    adr.textContent = "ADR"
    let kpr = document.createElement('th')
    kpr.textContent = "KPR"
    
    tr3.appendChild(impact)
    tr3.appendChild(adr)
    tr3.appendChild(kpr)
    
    let impactStat = document.createElement('td')
    impactStat.textContent = player1.stats.impact
    let adrStat = document.createElement('td')
    adrStat.textContent = player1.stats.adr
    let kprStat = document.createElement('td')
    kprStat.textContent = player1.stats.kpr
    
    tr4.appendChild(impactStat)
    tr4.appendChild(adrStat)
    tr4.appendChild(kprStat)
    
    statsTable.appendChild(tr1)
    statsTable.appendChild(tr2)
    statsTable.appendChild(tr3)
    statsTable.appendChild(tr4)
    
    stats.append(statsTable)
    
    const mainPage = document.getElementById("main")
    
    mainPage.insertAdjacentElement('afterbegin', playerCard1)
    
    }
    
    addPlayer1()







  

      const mainPage = document.getElementById("main")

      const simple = document.getElementById('player1')
      const zywoo = document.getElementById('player2')
      const device = document.getElementById('player3')
      const niko = document.getElementById('player4')
      const coldzera = document.getElementById('player5')

      let input = document.getElementById('busca')
    

function findPlayer() {
  simple.style.display='none'
  zywoo.style.display='none'
  device.style.display='none'
  niko.style.display='none'
  coldzera.style.display='none'
  if (player1.nick.toLowerCase() === input.value.toLowerCase()) {
    simple.style.display='flex'
  } else if (player2.nick.toLowerCase() === input.value.toLowerCase()) {
    zywoo.style.display='flex'
  } else if (player3.nick.toLowerCase() === input.value.toLowerCase()) {
    device.style.display='flex'
  } else if (player4.nick.toLowerCase() === input.value.toLowerCase()) {
    niko.style.display='flex'
  } else if (player5.nick.toLowerCase() === input.value.toLowerCase()) {
    coldzera.style.display='none'
    coldzera.style.display='flex'
  }else{
    alert('Player Not Found!')
    simple.style.display='flex'
    zywoo.style.display='flex'
    device.style.display='flex'
    niko.style.display='flex'
    coldzera.style.display='flex'
  }
  console.log(input.value)
}

console.log(input.value)


