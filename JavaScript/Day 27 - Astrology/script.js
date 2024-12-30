const zodiacSigns = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces"
];

const compliments = [
  "You're a great person!",
  "You're doing an amazing job!",
  "You're a wonderful human being!",
  "You're a true inspiration!",
  "You're a fantastic friend!",
  "You're a beautiful soul!",
  "You're a blessing to the world!",
  "You're a ray of sunshine!",
  "You're a gem of a person!",
  "You're a star!",
  "You're a champion!",
  "You're a hero!",
  "You're a legend!",
  "You're a role model!",
  "You're a rockstar!",
  "You're a superstar!",
  "You're a winner!",
  "You're a warrior!",
  "You're a miracle!",
  "You're a masterpiece!"
];

const planetaryPositions = {
  "Sun": ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"],
  "Moon": ["Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini"],
  "Mercury": ["Gemini", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Cancer", "Leo"],
  "Venus": ["Taurus", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces", "Aries", "Gemini", "Cancer", "Leo"],
  "Mars": ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"],
  "Jupiter": ["Sagittarius", "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio"],
  "Saturn": ["Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"],
  "Uranus": ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn"],
  "Neptune": ["Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius"],
  "Pluto": ["Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra"]
};

const planetaryInfluences = {
  "Sun": "Self, Ego, Personality",
  "Moon": "Emotions, Intuition, Nurturing",
  "Mercury": "Communication, Intellect, Adaptability",
  "Venus": "Love, Beauty, Values",
  "Mars": "Energy, Drive, Aggression",
  "Jupiter": "Expansion, Growth, Optimism",
  "Saturn": "Limitation, Discipline, Responsibility",
  "Uranus": "Innovation, Revolution, Humanitarianism",
  "Neptune": "Spirituality, Intuition, Illusion",
  "Pluto": "Transformation, Power, Intensity"
};

const houses = [
  "First House: Self and Personality",
  "Second House: Material Security and Values",
  "Third House: Communication and Siblings",
  "Fourth House: Home and Family",
  "Fifth House: Creativity and Self-Expression",
  "Sixth House: Work and Health",
  "Seventh House: Partnerships and Relationships",
  "Eighth House: Intimacy and Transformation",
  "Ninth House: Exploration and Expansion",
  "Tenth House: Career and Public Image",
  "Eleventh House: Friendships and Community",
  "Twelfth House: Spirituality and Self-Undoing"
];

const aspects = [
  "Conjunction: Union or Blending",
  "Opposition: Awareness and Balance",
  "Square: Challenge and Tension",
  "Trine: Harmony and Flow",
  "Quincunx: Adjustment and Reorientation"
];

document.getElementById('findButton').addEventListener('click', function(e) {
  e.preventDefault(); // Prevent the default form submission behavior
  const name = document.getElementById('name').value;
  const dob = document.getElementById('dob').value;
  const place = document.getElementById('place').value;
  const time = document.getElementById('time').value;

  const result = document.getElementById('result');

  // Generate astrology report based on user input
  const report = generateAstrologyReport(name, dob, place, time);

  // Display report in result div
  result.innerHTML = report;
});

function generateAstrologyReport(name, dob, place, time) {
  // Calculate planetary positions and influences
  const planetaryPositionsReport = calculatePlanetaryPositions(dob);
  const planetaryInfluencesReport = calculatePlanetaryInfluences(planetaryPositionsReport);

  // Generate report text
  const reportText = `
    <h2>Astrology Report for ${name}</h2>
    <p>Date of Birth: ${dob}</p>
    <p>Place of Birth: ${place}</p>
    <p>Time of Birth: ${time}</p>
    <h3>Planetary Positions:</h3>
    <ul>
      ${planetaryPositionsReport.map(position => `<li>${position}</li>`).join('')}
    </ul>
    <h3>Planetary Influences:</h3>
    <ul>
      ${planetaryInfluencesReport.map(influence => `<li>${influence}</li>`).join('')}
    </ul>
  `;

  return reportText;
}

function calculatePlanetaryPositions(dob) {
  // Calculate planetary positions based on date of birth
  const positions = [];
  Object.keys(planetaryPositions).forEach(planet => {
    const position = planetaryPositions[planet][new Date(dob).getMonth()];
    positions.push(`${planet}: ${position}`);
  });
  return positions;
}

function calculatePlanetaryInfluences(positions) {
  // Calculate planetary influences based on planetary positions
  const influences = [];
  positions.forEach(position => {
    const planet = position.split(':')[0];
    const influence = planetaryInfluences[planet];
    influences.push(`${planet}: ${influence}`);
  });
  return influences;
}

