import Reveal from 'reveal.js';

// Reveal plugin.
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.js'

// Reveal CSS files.
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/league.css'

// Theme used for syntax highlighted code
import 'reveal.js/plugin/highlight/monokai.css'

// Custom shared CSS.
import './index.css'

window.onload = () => {
   let deck = new Reveal({
      plugins: [ Markdown, RevealHighlight ]
   });
   
   deck.initialize();
}
