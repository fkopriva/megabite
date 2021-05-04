import React from "react";
import "../valorant/valorantScreen.css";

export default function valorantScreen() {
  return (
    <div>
      <div class="parallaxval"></div>

      <div className="row">
        <img className="big" src="./images/valor.png" alt="Valorant logo" />
      </div>
      <div className="row">
        <div className="col-1">
          <div>
            <h2>O HŘE</h2>
            <p>
              Valorant je taktická online střílečka od studia Riot Games, tvůrců
              letitého trháku League of Legends. Výzkum a vývoj hry započal v
              roce 2014. Přestože hra byla spuštěna teprve v dubnu 2020, už nyní
              má našlápnuto na to, stát se jednou z nejoblíbenějších
              kompetitivních her.
            </p>
            <object
              width="540,5"
              height="304,5"
              data="https://www.youtube.com/embed/OgNEnFJNiGE"
            ></object>
          </div>
          <div>
            <h2>PRŮBĚH HRY</h2>
            <p>
              Hráči hrají za tzv. agenty, postavy, které pochází z různých zemí
              a kultur po celém světě. V hlavním herním módu jsou týmy tvořeny
              po pěti hráčích, přičemž jeden z týmů brání a druhý útočí. Agenti
              mají speciální schopnosti a prostřednictvím peněžního systému si
              mohou nakupovat další schopnosti a zbraně. Ve hře se nachází
              například sekundární zbraně (pistole nebo nože), samopaly,
              brokovnice, kulomety, útočné pušky a odstřelovací pušky. Zbraně
              mají zpětný ráz a hráč je tak musí umět ovládat, aby mohl přesně
              střílet. Útočící tým disponuje bombou, nazývanou Spike, kterou
              musí nastražit na předem dané místo. Pokud útočící tým úspěšně
              uchrání bombu a bomba detonuje, dostanou bod. Pokud bránící tým
              úspěšně zneškodní bombu, jejíž časovač je nastaven na 100 sekund,
              získá bod. Pokud hráči útočícího týmu eliminují všechny hráče z
              bránícího týmu, získávají bod. Po dvanácti kolech se týmy
              prohazují, útočící na bránící a naopak. Tým, který jako první
              vyhraje 13 kol, vyhrává zápas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
