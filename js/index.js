$(document).ready(function () {
  //scrollspy
  $('.scrollspy').scrollSpy();
});

function convertToSpanish() {

  var banner = document.getElementById("bannerText")
  banner.innerHTML = "RWF Media: Te guiamos al éxito"

  var tourText = document.getElementById("tour")
  tourText.innerHTML = "Toma un tour"

  document.getElementById("english").style.display = "initial"
  document.getElementById("span").style.display = "none"

  var startText = document.getElementById("start")
  startText.innerHTML = "Empecemos"

  var qstext = document.getElementById("qs")
  qstext.innerHTML = "Quiénes somos"

  var jText = document.getElementById("JJ")
  jText.innerHTML = "A JJ le encanta reunir con dueños de empresas pequeñas para crecer su presencia online y cumplir sus metas. Como dueño de una empresa pequeña el mismo, sabe lo que es dirigir y adminsitrarlo. También le encanta usar su español para connectar mejor con la comunidad LatinX en el area Des Moines."

  var tText = document.getElementById("freetime")
  tText.innerHTML = "Para pasar el tiempo cuando no está trabajando, a JJ le encanta pasar tiempo fuera y viajar. Sus lugares favoritos son Chile y Costa Rica. La próxima gran aventura será ir a Europa en el verano de 2022"

  var workText = document.getElementById("work")
  workText.innerHTML = "Ve sus proyectos"

  var offerText = document.getElementById("offer")
  offerText.innerHTML = "Que ofrecemos"

  var wdText = document.getElementById("wd")
  wdText.innerHTML = "Desarollamiento y Diseño Web para empresas pequeñas"

  var wdLText = document.getElementById("wdL")
  wdLText.innerHTML = "¿Quieres crear un sitio web para tu empresa? ¿Quieres establacer una tienda ecommerce? Muestra ofertas o productus nuevos a tus clientes? Sabemos los tacticos para mantaner tu sitio y atraer a nuevos clientes."

  var smmText = document.getElementById("smm")
  smmText.innerHTML = "Marketing de Redes Sociales para empresas pequeñas"

  var smmLText = document.getElementById("smmL")
  smmLText.innerHTML = "Entendemos que quieres gestionar tus redes sociales pero no hay tiempo, tienes un negocio que te ocupa. Para eso estamos. Creamos el contenido, hacemos los posts, hablamos con sus clientes y seguidores, como si fueramos tú mientras tú gestionas tu empresa."

  var dmText = document.getElementById("dm")
  dmText.innerHTML = "Marketing Digital"

  var dmLText = document.getElementById("dmL")
  dmLText.innerHTML = "Los advertidos online puede ser muy acuciante y que signifca todos los acrónimos? ¿SEO? ¿PPC? ¿CPC? No te preocupes, te tenemos. Con nuestras estrategias certificados por Google, tu sitio aparecerá hasta arriba en cada búsqueda."

  var calText = document.getElementById("cal")
  calText.innerHTML = "Programar una consulta"
}

function convertToEnglish() {
  var banner = document.getElementById("bannerText")
  banner.innerHTML = "RWF Media: Guiding you to Digital Success"

  var tourText = document.getElementById("tour")
  tourText.innerHTML = "Take a Tour"

  document.getElementById("english").style.display = "none"
  document.getElementById("span").style.display = "initial"

  var startText = document.getElementById("start")
  startText.innerHTML = "Lets Start"

  var qstext = document.getElementById("qs")
  qstext.innerHTML = "Who we are"

  var jText = document.getElementById("JJ")
  jText.innerHTML = "JJ loves meeting with small business  owners to help them grow their online presence and achieve their goals. As a small business owner himself, he knows what it takes to run a small business and keep it afloat. He loves using his fluency in spanish to connect with the LatinX community in the Des Moines Area."

  var tText = document.getElementById("freetime")
  tText.innerHTML = "In his free time JJ, loves spending time outdoors and traveling. Some of his favorite places are Chile and Costa Rica. His next big adventure is going to Europe in summer of 2022"


  var workText = document.getElementById("work")
  workText.innerHTML = "See his work"

  var offerText = document.getElementById("offer")
  offerText.innerHTML = "What We Offer"

  var wdText = document.getElementById("wd")
  wdText.innerHTML = "Web Design & Development"

  var wdLText = document.getElementById("wdL")
  wdLText.innerHTML = "Want to create a website for your brand or store? Want to set up an ecommerce store? Showcase upcoming deals or new products? We know the best tactics to keep your website up to date to reel clients in."

  var smmText = document.getElementById("smm")
  smmText.innerHTML = "Social Media Marketing for Small Business"

  var smmLText = document.getElementById("smmL")
  smmLText.innerHTML = "We get it. You want to run an amazing social medial, you just don't have the time. That's where we come in. We do the content creating, posting, engaging, and connecting like you would while you run your successful business."

  var dmText = document.getElementById("dm")
  dmText.innerHTML = "Digital Marketing for Small Business"

  var dmLText = document.getElementById("dmL")
  dmLText.innerHTML = "Online ads can be very overwhelming especially when navigating it by yourself. SEO, PPC, CPC, what does it all mean?!?!?! Don't worry we've got you covered. With our Google Certified strategies, your website will appear at the top of every search."

  var calText = document.getElementById("cal")
  calText.innerHTML = "Schedule a consultation"
}

