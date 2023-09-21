import React from 'react';
import Card from './card'; 

function App() {
  return (
    <div>
      <nav>
        <h1 className="slideInLeft">Hi nice to meet you!</h1>
        <button className="burger-menu" id="burger-menu">
          <ion-icon className="bars" name="menu-outline"></ion-icon>
        </button>
      </nav>
      <div className="container">
        <Card
          title="Contact"
          content={['Jandrocodes@icloud.com', <a href="https://www.linkedin.com/in/jesus-alejandro-49b9a18a/" className="link">LinkedIn!</a>]}
        />
        <Card
          title="Projects"
          content={[<p>Check out my <a href="https://github.com/Jan-Dro" className="link">Github!</a></p>]}
        />
        <Card
          title="About Me!"
          content={['27 years old', 'Army veteran', 'Passionate about tech!']}
        />
      </div>
      <div className="wrapper">
        <div className="typing-demo">I'm Jesus Alejandro :)</div>
      </div>
    </div>
  );
}

export default App;