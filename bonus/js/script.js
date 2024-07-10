let team = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "./img/wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela Carrol",
        ruolo: "Chief Editor",
        foto: "./img/angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "./img/walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela lopez",
        ruolo: "Social Media Manager",
        foto: "./img/angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "./img/scott-estrada-developer.jpg"
    },
    {
        nome: "Barbara ramos",
        ruolo: "Graphic Designer",
        foto: "./img/barbara-ramos-graphic-designer.jpg"
    }

]
console.log(team)

for (let i = 0; i < team.length; i++) {
    document.getElementById("team").innerHTML += `<img src="${team[i].foto}" alt="">
                                                  <div>${team[i].nome}, ${team[i].ruolo}</div>`
}