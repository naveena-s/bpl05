
const matches = {
  day1: [
    { number: 1, teams: 'SC Cricketers Karehalli vs Kolapri Strikers Purlehalli', pool: 'A' },
    { number: 2, teams: 'Friends 11 vs SSMC Royal Banjara Javgal', pool: 'B' },
    { number: 3, teams: 'Kolapri Strikers Purlehalli vs Sevalal Mudnalli', pool: 'A' },
    { number: 4, teams: 'Army Jaganna Boys vs Banjara Sixers', pool: 'B' },
    { number: 5, teams: 'Bendekere vs Kolapri Strikers Purlehalli', pool: 'A' },
    { number: 6, teams: 'Friends 11 vs Sri Ram Cricketers', pool: 'B' },
    { number: 7, teams: 'SC Cricketers Karehalli vs Sevalal Mudnalli', pool: 'A' },
    { number: 8, teams: 'Army Jaganna Boys vs Sri Ram Cricketers', pool: 'B' },
    { number: 9, teams: 'Nagpuri Warriors Aggunda vs SC Cricketers Karehalli', pool: 'A' },
    { number: 10, teams: 'SSMC Royal Banjara Javgal vs Friends 11', pool: 'B' },
    { number: 11, teams: 'Sevalal Mudnalli vs Bendekere', pool: 'A' }
  ],
  day2: [
    { number: 12, teams: 'Banjara Sixers vs SSMC Royal Banjara Javgal', pool: 'B' },
    { number: 13, teams: 'Nagpuri Warriors Aggunda vs Bendekere', pool: 'A' },
    { number: 14, teams: 'Friends 11 vs Army Jaganna Boys', pool: 'B' },
    { number: 15, teams: 'Kolapri Strikers Purlehalli vs Nagpuri Warriors Aggunda', pool: 'A' },
    { number: 16, teams: 'SSMC Royal Banjara Javgal vs Sri Ram Cricketers', pool: 'B' },
    { number: 17, teams: 'Sevalal Mudnalli vs Nagpuri Warriors Aggunda', pool: 'A' },
    { number: 18, teams: 'Banjara Sixers vs Friends 11', pool: 'B' },
    { number: 19, teams: 'Bendekere vs SC Cricketers Karehalli', pool: 'A' },
    { number: 20, teams: 'Sri Ram Cricketers vs Banjara Sixers', pool: 'B' }
  ]
};

function displayMatches() {
  ['day1', 'day2'].forEach(day => {
    const container = document.getElementById(day);
    matches[day].forEach(match => {
      const matchDiv = document.createElement('div');
      matchDiv.className = 'match';
      matchDiv.innerHTML = `
        <strong>Match ${match.number}</strong> - Pool ${match.pool}<br>
        ${match.teams}
      `;
      container.appendChild(matchDiv);
    });
  });
}

document.addEventListener('DOMContentLoaded', displayMatches);
