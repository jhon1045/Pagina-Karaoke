import React, { useState, useEffect } from 'react';
import '../Style/Typewriter.css';

const musicFacts = [
  "Ludwig van Beethoven",
  "Wolfgang Amadeus Mozart",
  "The Beatles",
  "Elvis Presley",
  "Michael Jackson",
  "Queen",
  "Bob Marley",
  "Madonna",
  "Prince",
  "David Bowie",
  "Freddie Mercury",
  "Frank Sinatra",
  "Jimi Hendrix",
  "Beyoncé",
  "Taylor Swift",
  "Adele",
  "Eminem",
  "Kanye West",
  "Nirvana",
  "The Rolling Stones",
  "Whitney Houston",
  "John Lennon",
  "Stevie Wonder",
  "Johnny Cash",
  "Aretha Franklin",
  "Ed Sheeran",
  "Justin Bieber",
  "Ariana Grande",
  "Billie Eilish",
  "Rihanna",
];

// const musFacts = [
//   ' La musicoterapia es una forma de terapia que utiliza la música para mejorar el bienestar físico, emocional y mental. Los musicoterapeutas utilizan la música para ayudar a las personas a comunicarse, aprender, moverse, expresarse y organizarse. La musicoterapia puede ser utilizada con personas de todas las edades y con una amplia variedad de necesidades. ',
  
//  ' La musicoterapia se basa en la idea de que la música tiene el poder de afectar nuestro cerebro, cuerpo y emociones. La música puede estimular la liberación de hormonas que mejoran el estado de ánimo, reducir el estrés y el dolor, y mejorar el sueño. La música también puede ayudar a las personas a expresar sus emociones, comunicarse con los demás y desarrollar la confianza'
// ];

const Typewriter = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState('');

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex(index => (index + 1) % musicFacts.length);
      setCurrentWord('');
    }, 2500);

    return () => clearInterval(wordInterval);
  }, []);

  useEffect(() => {
    const word = musicFacts[currentWordIndex];
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      setCurrentWord(prevWord => {
        const newWord = prevWord + word[charIndex];
        charIndex++;
        if (charIndex === word.length) clearInterval(typingInterval);
        return newWord;
      });
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentWordIndex]);

  return (
    <div className="typewriter-container">
      <div className="typewriter">
          {currentWord}
          <span className="cursor" />
      </div>
    </div>
  );
};

export default Typewriter;




































