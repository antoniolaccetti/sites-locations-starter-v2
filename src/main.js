import './main.css';
import './js/fontawesome/brands.min.js';
import './js/fontawesome/solid.min.js';
import './js/fontawesome/fontawesome.min.js';
import '/node_modules/jquery/dist/jquery.js';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));