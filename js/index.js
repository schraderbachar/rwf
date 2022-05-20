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
  jText.innerHTML = "JJ es un desarrollador web y gestor de redes sociales quien ama crear sitios web y crecer tus redes sociales. Especialmente ama cuando crece tu negocio y tener el reconocimiento que merece y cumplir sus metas. También habla español y alemán"

  var tText = document.getElementById("freetime")
  tText.innerHTML = "Para pasar el tiempo cuando no está trabajando, a JJ le encanta pasar tiempo fuera y viajar. Sus lugares favoritos son Chile y Costa Rica. La próxima gran aventura será ir a Europa en el verano de 2022"

  var workText = document.getElementById("work")
  workText.innerHTML = "Ve sus proyectos"

  var offerText = document.getElementById("offer")
  offerText.innerHTML = "Que ofrecemos"

  var wdText = document.getElementById("wd")
  wdText.innerHTML = "Desarollamiento Web"

  var wdLText = document.getElementById("wdL")
  wdLText.innerHTML = "¿Tienes un menú? ¿O nuevos productos que quieres que sepan tus clientes? Algunas ofertas? Podemos mostrar todo eso y más en tu sitio web"

  var smmText = document.getElementById("smm")
  smmText.innerHTML = "Marketing de Redes Sociales"

  var smmLText = document.getElementById("smmL")
  smmLText.innerHTML = "Entendemos que quieres gestionar tus redes sociales pero no hay tiempo, tienes un negocio que te ocupa. Eso es donde llegamos. Hacemos los posts, hablamos con sus clientes y seguidores, como si fueras tú mientras tú gestionas tu negocio."

  var dmText = document.getElementById("dm")
  dmText.innerHTML = "Marketing Digital"

  var dmLText = document.getElementById("dmL")
  dmLText.innerHTML = "Los advertidos online puede ser muy acuciante y que signifca todos los acrónimos? ¿SEO? ¿PPC? ¿CPC? No te preocupes, te tenemos. Con nuestras estrategias certificados por Google, tu sitio aparecerá hasta arriba de cada búsqueda."

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
  jText.innerHTML = "JJ is an experienced web developer and social media manager who loves to create websites and see your social media pages grow. He loves seeing small businesses getting the recognition they deserve and acheive their goals. He also speaks fluent spanish and intermediate german."

  var tText = document.getElementById("freetime")
  tText.innerHTML = "In his free time JJ, loves spending time outdoors and traveling. Some of his favorite places are Chile and Costa Rica. His next big adventure is going to Europe in summer of 2022"


  var workText = document.getElementById("work")
  workText.innerHTML = "See his work"

  var offerText = document.getElementById("offer")
  offerText.innerHTML = "What We Offer"

  var wdText = document.getElementById("wd")
  wdText.innerHTML = "Web Development"

  var wdLText = document.getElementById("wdL")
  wdLText.innerHTML = "Have a menu? What about new products that you want your customers to know about? Upcoming Deals? We can show all of that and more on your website."

  var smmText = document.getElementById("smm")
  smmText.innerHTML = "Social Media Marketing"

  var smmLText = document.getElementById("smmL")
  smmLText.innerHTML = "We get it. You have every intention of running an amazing social medial, you just don't have the time. That's where we come in. We do the posting, engaging, and connecting like you would while you run your successful business."

  var dmText = document.getElementById("dm")
  dmText.innerHTML = "Digital Marketing"

  var dmLText = document.getElementById("dmL")
  dmLText.innerHTML = "Online ads can be very overwhelming. SEO, PPC, CPC, what does it all mean?!?!?! Don't worry we've got you covered. With our Google Certified strategies, your website will appear at the top of every search."

  var calText = document.getElementById("cal")
  calText.innerHTML = "Schedule a consultation"
}

