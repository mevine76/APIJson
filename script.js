const data = {
        
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }
  
  console.log(data)

title.innerHTML = `
    <h1>${data.squadName}</h1>
    <h2>Hometown : ${data.homeTown} // Formed : ${data.formed}</h2>
`
superheros.innerHTML = `
<h3>${data.members[0].name}</h3>
<p>
    Secret identity : ${data.members[0].secretIdentity}<br>
    Age : ${data.members[0].age} <br>
    Superpowers : </p>

<ul>
    <li>${data.members[0].powers[0]} </li>
    <li>${data.members[0].powers[1]} </li>
    <li>${data.members[0].powers[2]} </li>
</ul>
`

title.innerHTML = `
  




`