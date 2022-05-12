
<template>
  <header>
      <p id="burger" class="burger"></p>
      <h1><a>Projet Symfony Vue</a></h1>
      <nav>
          <ul>
              <li><router-link :to="{ name: 'homepage' }"><a>Accueil</a></router-link></li>
              <li><router-link :to="{ name: 'information' }"><a>Information</a></router-link></li>
          </ul>
      </nav>
  </header>
  <main>
    <router-view></router-view>
  </main>
  
<footer>
    <nav>
        <ul>
            <li>
                <div>
                    <a href="sms:+33671731835"><img src="https://dev.parking-rue-du-moulin.fr/projetsymfony/public/icons/phone.svg">
                    <p>06.71.73.18.35</p></a>
                </div>
                <div>
                    <a href="mailto:elonico7@hotmail.fr"><img src="https://dev.parking-rue-du-moulin.fr/projetsymfony/public/icons/email.svg">
                    <p>elonico7@hotmail.fr</p></a>
                </div>

            </li>

            <li>
                <div>
                    <h2><a href="#" >Parking-Rue-Du-Moulin.fr</a></h2>
                </div>
            </li>

            <li>
                <div>
                    <a href="https://goo.gl/maps/pYakmZUcuUQaFpR46" target="_blank"><p>Localisation</p>
                    <img src="https://dev.parking-rue-du-moulin.fr/projetsymfony/public/icons/location.svg" ></a>
                </div>
                <div>
                    <a href="reglement-parking.pdf" target="_blank"><p>Règlement intérieur</p>
                    <img src="https://dev.parking-rue-du-moulin.fr/projetsymfony/public/icons/check.svg"></a>
                </div>
            </li>
        </ul>
    </nav>
</footer>
</template>

<style>

body {  
  text-align: center;
}

</style>
