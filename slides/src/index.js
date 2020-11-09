import Reveal from 'reveal.js';

// Reveal plugin.
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

// Reveal CSS files.
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/league.css'

// Custom shared CSS.
import './index.css'

window.onload = () => {
   let deck = new Reveal({
      plugins: [ Markdown ]
   });
   
   deck.initialize();
}
