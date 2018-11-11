// Enable chromereload by uncommenting this line:
import 'chromereload/devonly'


console.log(moment())

document.getElementsByTagName('h1').forEach(x=>x.textContent=moment())