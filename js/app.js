console.log('ok!')

// creo l'array di oggetti team

const team = [
    {
        nome: 'Wayne Barnett',	
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg',
    },

    {
        nome: 'Angela Caroll',	
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg',
    },

    {
        nome: 'Walter Gordon',	
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg',
    },

    {
        nome: 'Angela Lopez',	
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg',
    },

    {
        nome: 'Scott Estrada',	
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg',
    },

    {
        nome: 'Barbara Ramos',	
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg',
    },
]
// faccio il console log del team e di ogni suo membro
console.log(team)
// wayne barnett
console.log(team[0])
// angela caroll
console.log(team[1])
// walter gordon
console.log(team[2])
// angela lopez
console.log(team[3])
// scott estrada
console.log(team[4])
// barbara ramos
console.log(team[5])
// ciclo l'array di oggetti stampando in console ogni membro del team e le sue proprietà
for (let key in team) {
    console.log(key)
    const member = team[key]
    console.log(member.nome)
    console.log(member.ruolo)
    console.log(member.foto)
} 