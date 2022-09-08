const sp1t0info = {"Buenos días.": "Good morning.", "Buenas tardes": "Good afternoon.", "Buenas noches.": "Good evening.", "¡Hola!": "Hello!", "¿Qué pasa?": "What's happening?", "¿Qué tal?": "What's up?", "nada": "nothing", "Mucho gusto.": "Nice to meet you.", "Igualmente.": "Likewise. (same to you)", "Encantado, -a.": "Delighted. (enchanted)", "¿y tú?": "And you? (informal)", "¿y usted?": "And you? (formal)", "¡yo también!": "me, too!", "¿Cómo estás tú?": "How are you? (informal)", "¿Cómo está usted?": "How are you? (formal)", "Estoy": "I am", "muy bien": "very well", "regular": "regular", "mal": "bad", "más o menos": "okay", "¿Cómo te llamas?": "What's your name? (informal)", "¿Cómo se llama usted?": "What's your name? (formal)", "Me llamo _______.": "My name is _____.", "¿Cuántos años tienes tú?": "How old are you? (informal)", "¿Cuántos años tiene usted?": "How old are you? (formal)", "Tengo _____ años.": "I am _____ years old.", "¿De dónde eres tú?": "Where are you from (informal)?", "¿De dónde es usted?": "Where are you from (formal)?", "Soy de _____.": "I am from ______.", "Que tengas un buen día.": "Have a good day. (informal)", "Que tenga un buen día.": "Have a good day. (formal)", "Hasta": "Until", "pronto": "soon", "luego": "later", "mañana": "tommorow", "¡Nos vemos!": "See ya!", "¡Adiós!": "Goodbye!", "Chau.": "Bye.", "once": "eleven", "doce": "twelve", "trece": "thirteen", "catorce": "fourteen", "quince": "fifteen", "dieciséis": "sixteen", "diecisiete": "seventeen", "dieciocho": "eighteen", "diecinueve": "nineteen", "Señor (Sr.)": "Mister (Mr.)", "Señora (Sra.)": "Misses (Mrs.)", "Señorita (Srta.)": "Miss", "gracias": "thank you", "de nada": "you're welcome", "por favor": "please", "el lunes": "on Monday", "el martes": "on Tuesday", "el miércoles": "on Wednesday", "el jueves": "on Thursday", "el viernes": "on Friday", "el sábado": "on Saturday", "el domingo": "on Sunday", "el fin de semana": "on the weekend", "los lunes": "on Mondays", "los martes": "on Tuesdays", "los miércoles": "on Wednesdays", "los jueves": "on Thursdays", "los viernes": "on Fridays", "los sábados": "on Saturdays", "los domingos": "on Sundays", "los fines de semana": "on the weekends", "en el invierno": "in the winter", "en la primavera": "in the spring", "en el verano": "in the summer", "en el otoño": "in the fall", "la estación lluviosa": "the rainy season", "la estación seca": "the dry season", "enero": "January", "febrero": "February", "marzo": "March", "abril": "April", "mayo": "May", "junio": "June", "julio": "July", "agosto": "August", "septiembre": "September", "octubre": "October", "noviembre": "November", "diciembre": "December", "hace calor.": "It is hot.", "hace frío.": "It is cold.", "hace fresco.": "It is cool.", "hace viento.": "It is windy.", "hace ____ grados.": "It is ____ degrees.", "hace sol.": "It is sunny.", "hace buen / mal tiempo.": "It is good / bad weather.", "Está bajo cero.": "It is below zero.", "Llueve.": "Está lloviendo.", "It rains.": "It is raining.", "Nieva.": "Está nevando.", "It snows.": "It is snowing.", "Está nublado.": "It is cloudy.", "a la una": "at 1:00", "a las _______": "at (time >1)", "__ y media": "__ :30", "__ y cuarto": "__ :15", "__ de la mañana": "a.m.", "__ de la tarde": "p.m. (afternoon)", "__ de la noche": "p.m. (night)", "siempre": "always", "a veces": "sometimes", "nunca": "never", "cero": "zero", "uno": "one", "dos": "two", "tres": "three", "cuatro": "four", "cinco": "five", "seis": "six", "siete": "seven", "ocho": "eight", "nueve": "nine", "diez": "ten", "veinte": "twenty", "veintiuno": "twenty-one", "veintidós": "twenty-two", "treinta": "thirty", "treinta y uno": "thirty one", "treinta y dos": "thirty two", "cuarenta": "forty", "cincuenta": "fifty", "sesenta": "sixty", "setenta": "seventy", "ochenta": "eighty", "noventa": "ninety", "cien": "one hundred", "ciento uno": "one hundred and one", "doscientos": "two hundred", "doscientos veintiuno": "two hundred twenty one", "quinientos": "five hundred", "setecientos": "seven hundred", "novecientos": "nine hundred", "mil": "one thousand"};
const sp1t1info = {"bailar": "to dance", "caminar": "to walk", "cantar": "to sing", "correr": "to run", "dibujar": "to draw", "escribir cuentos": "to write stories", "escuchar música": "to listen to music", "esquiar": "to ski", "hablar por teléfono (celular)": "to talk on the (cell) phone", "hacer ejercicio": "to exercise (to do exercise)", "textear": "to text", "ir a la escuela": "to go to school", "jugar videojuegos": "to play videogames", "leer revistas": "to read magazines", "levantar pesas": "to lift weights", "montar": "to ride", "en bicicleta": "on a bike", "en monopatín": "on a skateboard", "nadar": "to swim", "pasar tiempo con amigos": "to spend time with friends", "patinar": "to skate", "practicar deportes": "to practice (play) sports", "tocar la guitarra": "to play the guitar", "trabajar": "to work", "usar la computadora": "to use the computer", "mirar la televisión (tele); ver la televisión": "to watch television (TV)", "mirar; ver": "to watch/look; to see", "vivir": "to live", "(a mí) me gusta __________.": "I like _______.", "(a mí) me gusta mucho _________.": "I like ___________ a lot.", "(a mí) no me gusta __________.": "I don't  like _______.", "(a mí) no me gusta nada ___________.": "I don't like ___________ at all.", "(a mí) no me gusta ni ________ ni _______.": "I don't like ________ nor _______.", "(yo) puedo __________": "I can _________", "(yo) necesito __________": "I need _________", "(yo) quiero __________": "I want _________", "(yo) tengo que __________": "I have to _________", "(yo) prefiero __________": "I prefer _________", "¿Qué te gusta hacer?": "What do you like to do?", "¿Qué te gusta más?": "What do you like better?", "¿Te gusta ___________?": "Do you like _________?", "A mí también.": "Me too.", "A mí tampoco.": "Me neither.", "los dos / las dos": "the two (both)", "siempre": "always", "a veces": "sometimes", "nunca": "never", "cazar": "to hunt", "coleccionar monedas": "to collect coins", "enviar un mensaje": "to send a message", "jugar al ajedrez": "to play chess", "navegar en la Red": "to surf the Internet", "participar en un red social": "to social network", "patinar sobre hielo": "to ice skate", "pescar": "to fish", "pintar": "to paint", "practicar artes marciales": "to practice martial arts", "sacar fotos": "to take pictures", "tocar (un instrumento)": "to play (an instrument)", "el bajo": "the bass", "la batería": "the drums", "el clarinete": "the clarinet", "la flauta": "the flute", "el oboe": "the oboe", "el saxofón": "the saxophone", "el trombón": "the trombone", "la trompeta": "the trumpet", "la tuba": "the tuba", "el violín": "the violin", "el piano": "the piano", "la novela": "the novel", "la revista de historietas": "the comic book", "el blog": "the blog", "durante": "during", "más que": "more than", "menos que": "less than", "tanto como (use with verbs)": "as much as", "tan (adjective) como": "as (adjective) as", "nunca": "never", "o": "or", "sí": "yes", "y": "and", "pero": "but", "asumir": "to assume", "asociar": "to associate", "creer": "to think", "las generalizaciones": "the generalizations", "la costumbre": "the custom", "la tradición": "the tradition", "la identidad": "the identity", "¿Qué le gusta hacer?": "What does he/she like to do?", "A _______ le gusta": "_______ likes", "(yo) sé ____": "I know how to ____", "(yo) creo que ____": "I think that ______", "Estoy de acuerdo.": "I agree.", "No estoy de acuerdo.": "I don't agree (I disagree)."};
const sp1t2info = {"la bandera": "the flag", "la computadora": "the computer", "la mochila": "the backpack", "la papelera, la basura": "the wastepaper basket, the trash", "el sacapuntas": "the pencil sharpener", "la pantalla": "the screen (monitor)", "la mesa": "the table", "la silla": "the chair", "el bolígrafo, la pluma": "the pen", "la carpeta": "the folder", "el cuaderno": "the notebook", "la hoja de papel": "the piece of paper", "el lápiz, los lápices": "the pencil, pencils", "el libro": "the book", "el escritorio": "the desk", "enseñar": "to teach", "estudiar": "to study", "aprender": "to learn", "comprender": "to understand", "necesitar": "to need", "preguntar": "to ask (a question)", "ayudar": "to help", "aburrido, -a, -os, as": "boring", "difícil, -es": "difficult", "divertido, -a, -os, as": "fun", "fácil, -es": "easy", "favorito, -a, -os, as": "favorite", "interesante, -s": "interesting", "práctico, -a, -os, as": "practical", "electivo, -a, -os, -as": "elective", "al lado de*": "to the side of (next to)", "a la derecha de*": "to the right of", "a la izquierda de*": "to the left of", "cerca de*": "close to", "lejos de*": "far from", "debajo de*": "underneath", "delante de, enfrente de*": "in front of", "detrás de*": "behind", "encima de*": "on top of", "dentro de*": "inside of", "entre": "between", "allí": "there", "aquí": "here", "en": "in; on; at", "hay": "there is / there are", "mi, s": "my", "tu, s": "your", "su, s": "his / her", "para": "for, in order to", "antes de / después de": "before / after", "temprano": "early", "a tiempo": "on time", "tarde": "late", "el almuerzo": "the lunch", "la clase de": "the class of", "español": "Spanish", "ciencias naturales": "science", "ciencias sociales": "social studies", "educación física": "physical education/gym", "inglés": "English", "matemáticas": "math", "la tarea": "the homework", "los apuntes": "the notes", "el/la/los/las compañero,-a,-os,-as": "the classmate(s)", "en la [ordinal #] hora": "during [ordinal #] hour", "**primero, -a, -os, as": "first", "segundo, -a, -os, as": "second", "**tercero, -a, -os, as": "third", "cuarto, -a, -os, as": "fourth", "quinto, -a, -os, -as": "fifth", "sexto, -a, -os, -as": "sixth", "séptimo, -a, -os, as": "seventh", "el coro": "the choir", "la banda": "the band", "la salud": "the health", "el teatro": "the drama", "el arte": "the art", "la ingeniería": "the engineering  (GTT/ IED)", "la hora de estudio": "the study hall", "las artes culinarias": "the culinary arts", "la lección": "the lesson", "el pasillo": "the hallway", "la pared": "the wall", "el cartel": "the poster", "el borrador": "the eraser", "el marcador": "the marker", "el pegamento": "the glue", "el pizarrón": "the whiteboard", "el teclado": "the keyboard", "la caja": "the box", "el sujetapapeles (clip)": "the paperclip", "la cinta": "the tape", "la grapadora": "the stapler", "la regla": "the ruler", "la tableta": "the tablet", "las grapas": "the staples", "las tijeras": "the scissors", "el reloj": "the clock", "las zapatillas de deporte": "the sneakers", "complicado, -a, os, -as": "complicated", "confuso, -a, os, -as": "confusing", "desafiante, -s": "challenging", "emocionante, -s": "exciting", "fantástico, -a, os, -as": "fantastic", "importante, -s": "important", "tener": "to have", "tener calor": "to have heat (to be hot)", "tener frío": "to have cold (to be cold)", "tener sueño": "to have sleep (to be sleepy)"};
const sp1t3ainfo = {"la comida": "the food", "la bebida": "the drink", "las uvas": "the grapes", "las fresas": "the strawberries", "la manzana": "the apple", "el plátano": "the banana", "los tomates": "the tomatoes", "la lechuga": "the lettuce", "las papas": "the potatoes", "la cebolla": "the onion", "los guisantes": "the peas", "el maíz": "the corn", "las zanahorias": "the carrots", "los chiles": "the peppers", "los frijoles": "the beans", "la carne": "the meat", "el bistec": "the steak", "el pescado": "the fish", "el pollo": "the chicken", "los huevos": "the eggs", "la hamburguesa": "the hamburger", "el jamón": "the ham", "la salchicha": "the sausage", "el tocino": "the bacon", "el yogur": "the yogurt", "el queso": "the cheese", "la leche": "the milk", "el helado": "the ice cream", "la mantequilla": "the butter", "el arroz": "the rice", "el pan": "the bread", "los espaguetis": "the spaghetti", "los postres": "the desserts", "la sal": "the salt", "la pimienta": "the pepper (spice)", "el azúcar": "the sugar", "los cereales; los granos": "the grains", "las grasas": "the fats", "el agua (feminine)": "the water", "el café": "the coffee", "el jugo (de naranja)": "the juice (orange juice)", "la limonada": "the lemonade", "el refresco": "the pop", "el té": "the tea", "la galleta": "the cookie", "la ensalada de frutas": "the fruit salad", "la sopa de verduras": "the vegetable soup", "el desayuno": "the breakfast", "en el desayuno": "for breakfast", "el almuerzo": "the lunch", "en el almuerzo": "for lunch", "la cena": "the dinner", "en la cena": "for dinner", "me gusta(n)": "I like", "me encanta(n)": "I love", "beber": "to drink", "cocinar": "to cook", "comer": "to eat", "consumir": "to consume", "compartir": "to share", "preparar": "to prepare", "deber": "should; to ought", "creer": "to think/believe", "para la salud": "for one's health", "mantener la salud": "to maintain health", "sin": "without", "con": "with", "más o menos": "more or less", "nunca": "never", "algo": "something", "un poco": "a little", "¡Qué asco!": "Yuck!", "¿Cuál, -es?": "Which? / What?", "¿Verdad?": "Really? / Right?", "por supuesto": "of course", "tener sed": "to have thirst (to be thirsty)", "tener hambre": "to have hunger (to be hungry)", "amargo, -a, -os, -as": "bitter", "dulce, -s": "sweet", "salado, -a, -os, -as": "salty", "agrio, -a, -os, -as": "sour", "rico, -a, -os, -as": "rich; good; tasty", "sabroso, -a, -os, -as": "tasty; flavorful", "delicioso, -a, -os, -as": "delicious", "horrible, -s": "horrible", "malo, -a, -os, -as": "bad", "asqueroso, -a, -os, -as": "disgusting, gross", "helado, -a, -os, -as": "frozen", "caliente, -s": "hot (temperature)", "picante, -s": "spicy", "crudo, -a, -os, -as": "raw", "tostado, -a, -os, -as": "toasted", "fresco, -a, -os, -as": "fresh", "frito, -a, -os, -as": "fried", "sano, -a, -os, -as": "healthy", "saludable, -s": "healthy", "jugoso, -a, -os, -as": "juicy", "seco, -a, -os, as": "dry", "mucho, -a, -os, -as": "a lot (of), many", "todo, -a, -os, -as": "all / every", "la sandía": "the watermelon", "el coco": "the coconut", "la piña": "the pineapple", "la ciruela": "the plum", "la cereza": "the cherry", "la toronja": "the grapefruit", "el durazno": "the peach", "la pera": "the pear", "el limón": "the lemon", "la frambuesa": "the raspberry", "el melón": "the melon", "el aguacate": "the avocado", "el apio": "the celery", "los espárragos": "the asparagus", "la col": "the cabbage", "la calabaza": "the pumpkin/squash", "el brócoli": "the broccoli", "las espinacas": "the spinach", "el champiñón": "the mushroom", "la coliflor": "the cauliflower", "el pepino": "the cucumber", "el pavo": "the turkey", "la chuleta de cerdo": "the pork chop", "el perrito caliente": "the hot dog", "el cordero": "the lamb", "la ternera lechal": "the veal", "los mariscos": "the seafood", "el atún": "the tuna", "el cangrejo": "the crab", "el pulpo": "the octopus", "el salmón": "the salmon", "la langosta": "the lobster", "las almejas": "the clams", "las ostras": "the oysters", "los camarones": "the shrimp", "los mejillones": "the mussels", "las especias": "the spices", "la sal": "the salt", "la pimienta": "the pepper", "el azúcar": "the sugar", "el ajo": "the garlic", "la canela": "the cinnamon", "las nueces": "the nuts", "las almendras": "the almonds", "la salsa": "the sauce", "el catsup": "the ketchup", "la mostaza": "the mustard", "la mayonesa": "the mayonnaise", "el aderezo de ensalada": "the salad dressing", "la mermelada": "the jelly/jam               the peanut butter", "la mantequilla de maní": "the oatmeal", "la avena": "the sweet bread", "el pan dulce": "the French toast", "el pan francés": "the granola", "la granola": "the mac & cheese", "los macarrones con queso": "the chicken nuggets", "las presas de pollo": "the sandwich", "el sándwich": "the noodles", "los fideos": "the cream", "la nata": "the oil", "el aceite": "the appetizers", "las tapas": "the snacks", "las botanas": "the variety", "la variedad": "the flavor", "el sabor": "as / like / such as", "como": "to bake", "hornear": "it is/they are baked", "está/están horneado, -a, -os, -as": "it is/they are cooked"};
const sp1t3binfo = {"el plato": "the plate", "el vaso": "the glass", "el tazón": "the bowl", "el cuchillo": "the knife", "el tenedor": "the fork", "la cuchara": "the spoon", "la servilleta": "the napkin", "el aperitivo": "the appetizer", "el plato principal": "the main dish", "de plato principal": "as a main dish", "el camarero / la camarera": "the waiter / the waitress", "la cuenta": "the check; the bill", "la propina": "the tip", "la merienda": "the snack", "desear": "to want; to desire", "pedir (e -> i)": "to ask for; to order", "poner *yo: pongo": "the put; to set; to place", "preferir (e -> ie)": "to prefer", "traer": "to bring", "¿Me trae ___?": "Will you bring me ___?", "venir (e -> ie + -go)": "to come", "Me falta(n) ____": "I am missing; I need ________", "¡Qué + adjetivo!": "How!", "lo siento": "I'm sorry", "perdón": "pardon; excuse me", "gracias por _________": "thank you for _______", "ahora": "now", "¿Algo más?": "Anything else?", "por favor": "please", "de nada": "you're welcome", "otro, -a, -os, -as": "other; another", "(hacer) hago": "I do / I make", "(poner) pongo": "I put / I set", "(salir) salgo": "I leave / go out", "(traer) traigo": "I bring", "(caer) caigo": "I fall", "almorzar (o -> ue)": "to eat lunch", "devolver (o -> ue)": "to give back/return", "dormir (o -> ue)": "to sleep", "encontrar (o -> ue)": "to find", "poder (o -> ue)": "to be able to/can", "volver (o -> ue)": "to go back/return", "jugar (u -> ue)": "to play", "cerrar (e -> ie)": "to close", "confesar (e -> ie)": "to confess", "empezar (e -> ie)": "to start / begin", "entender (e -> ie)": "to understand", "pensar (e -> ie)": "to think/plan", "perder (e -> ie)": "to lose", "preferir (e -> ie)": "to prefer", "querer (e -> ie)": "to want", "recomendar (e -> ie)": "to recommend", "servir (e -> i)": "to serve", "repetir (e -> i)": "to repeat", "seguir (e -> i)": "to follow", "tener (e -> ie + -go)": "to have", "mantener (e -> ie + -go)": "to maintain", "decir (e -> i + -go)": "to say / to tell", "venir (e -> ie + -go)": "to come", "seguir (e -> i + -go)": "to follow", "el/la chef": "the chef", "el cocinero / la cocinera": "the cook", "el/la cliente": "the customer / the client", "la cocina": "the kitchen", "bienvenidos": "welcome"};
const sp1t4info = {"ir de compras": "to go shopping", "ver una película": "to see a movie", "dormir (o -> ue)": "to sleep", "ir de cámping / acampar": "to go camping / to camp", "ir de pesca / pescar": "to go fishing / to fish", "jugar (u -> ue)": "to play", "jugar al básquetbol / baloncesto": "to play basketball", "jugar al béisbol": "to play baseball", "jugar al fútbol": "to play soccer", "jugar al fútbol americano": "to play football", "jugar al golf": "to play golf", "jugar al tenis": "to play tennis", "jugar al vóleibol": "to play volleyball", "buscar": "to look for", "encontrar (o -> ue)": "to find", "poder (o -> ue)": "to be able to", "querer (e -> ie)": "to want", "tener": "to have", "tener que + infinitive verb": "to have to do something", "Me quedo en casa.": "I stay home.", "en casa": "at home", "para + infinitive verb": "in order to do something", "ir + a + infinitive": "to be going to + verb", "ir": "to go", "a": "to", "a la, a las, al (a + el), a los": "to the", "la biblioteca": "the library", "el café": "the cafe", "el centro comercial": "the mall", "el centro comunitario": "the community center", "la casa": "the home/house", "el trabajo": "the job/work", "el cine": "the movie theater", "el gimnasio": "the gym", "el parque": "the park", "la piscina": "the pool", "el lago": "the lake", "la playa": "the beach", "las montañas": "the mountains", "el baile": "the dance", "el concierto": "the concert", "la lección de (piano)": "the (piano) lesson", "la práctica de (béisbol)": "the (baseball) practice", "el equipo de [_____]": "the _____ team", "el partido": "the game / match", "el juego": "the game (not sports)", "antes de + infinitive verb": "before doing something", "después de + infinitive verb": "after doing something", "el tiempo libre": "the free time", "¿A qué hora?": "(At) what time?", "a la / a las ______.": "at (insert time)", "_____ y media": "_______ :30", "_____ y cuarto": "_______ :15", "_____ de la mañana": "a.m.", "_____ de la tarde": "p.m. (afternoon)", "_____ de la noche": "p.m. (night)", "este fin de semana": "this weekend", "mañana": "tomorrow / morning", "esta... noche / tarde /mañana": "tonight; this afternoon/morning", "por... la noche / tarde / mañana": "in the evening/afternoon/morning", "generalmente": "generally", "usualmente": "usually", "también": "also, too", "entonces": "then, so... (transition word)", "conmigo": "with me", "contigo": "with you", "solo, -a": "alone", "¿Te gustaría ____?": "Would you like ___?", "Me gustaría": "I would like", "el campo": "the (sports) field", "la cancha": "the (sports) court, course", "la pista": "the track", "la pista de hielo": "the ice rink", "el estadio": "the stadium / arena", "la clínica, el consultorio": "the clinic", "el dormitorio": "the bedroom", "el teatro": "the theater", "el zoológico": "the zoo", "el parque de diversiones": "the amusement park", "el supermercado": "the supermarket", "la tienda de _________": "the ______ store", "la cabaña": "the cabin", "la sinagoga": "the synagogue", "el templo": "the temple", "la mezquita": "the mosque", "la iglesia": "the church", "tener una fiesta": "to have a party", "alabar, rezar": "to worship, to pray", "comprar": "to buy", "descansar": "to rest", "pasear en bote": "to go boating", "pensar (e -> ie)": "to think / to plan", "recordar (o -> ue)": "to remember", "subir": "to climb/go up", "tomar una siesta": "to take a nap", "tomar el sol": "to sunbathe", "viajar": "to travel", "visitar": "to visit", "¡Ay! !Qué pena!": "Oh! What a shame!", "¡Genial!": "Great!", "Lo siento.": "I'm sorry.", "¡Oye!": "Hey! (listen)", "¡Qué buena idea!": "What a good idea!"};
const sp1t5info = {"los abuelos": "the grandparents", "el abuelo": "the grandfather", "la abuela": "the grandmother", "los padres": "the parents", "el padre, el papá": "the father, the dad", "la madre, la mamá": "the mother, the mom", "el padrastro": "the stepfather", "la madrastra": "the stepmother", "el esposo": "the husband", "la esposa": "the wife", "los hijos": "the children (sons or daughters)", "el hijo": "the son", "la hija": "the daughter", "los hermanos": "the siblings (or brothers)", "el hermano": "the brother", "la hermana": "the sister", "el hermanastro": "the step-brother", "la hermanastra": "the step-sister", "los tíos": "the aunt and uncles (or uncles)", "el tío": "the uncle", "la tía": "the aunt", "los primos": "the cousins", "el primo": "the cousin (male)", "la prima": "the cousin (female)", "las mascotas": "the pets", "el gato / la gata": "the cat", "el perro / la perra": "the dog", "alto, -a, -os, -as": "tall", "bajo, -a, -os, -as": "short (stature/height)", "blanco, -a, -os, -as": "white (skin color and color white)", "negro, -a, -os, -as": "black (skin color and color black)", "moreno, -a, -os, -as": "dark (skin color)", "corto, -a, -os, -as": "short (length)", "largo, -a, -os, -as": "long (length)", "grande, -s": "big", "pequeño, -a, -os, -as": "small", "guapo, -a, -os, -as": "good-looking", "pelirrojo, -a, -os, -as": "red-haired", "castaño, -a, -os, -as": "brunette", "rubio, -a, -os, -as": "blonde", "joven, jóvenes": "young", "viejo, -a, -os, -as": "old", "mayor, -es": "older", "menor, es": "younger", "que": "that (as a transition)", "sólo": "only", "junto, -a, -os, -as": "together", "afuera / adentro": "outside / inside", "el bisabuelo": "the great-grandfather", "la bisabuela": "the great-grandmother", "el medio hermano": "the half-brother", "la media hermana": "the half-sister", "el nieto / la nieta": "the grandson / granddaughter", "el sobrino / la sobrina": "the nephew / niece", "el suegro / la suegra": "the father-in-law/mother-in-law", "el padrino / la madrina": "the godfather / godmother", "el caballo": "the horse", "el conejillo de indias": "the guinea pig (the pet)", "el conejo": "the rabbit", "el cuy": "the guinea pig (you eat)", "el gerbo": "the gerbil", "el hámster": "the hamster", "el hurón": "the ferret", "el lagarto": "the lizard", "el pez (los peces)": "the fish (more than 1 fish)", "el pescado": "the fish (you eat)", "el ratón": "the mouse", "la rata": "the rat", "la iguana": "the iguana", "la serpiente": "the snake", "la tortuga": "the turtle", "por la noche": "at night", "por la mañana": "in the morning", "por la tarde": "in the afternoon", "el pelo": "the hair", "tengo pelo _____": "I have _____ hair", "los ojos": "the eyes", "azul, -es": "blue", "café, -es": "brown", "verde, -es": "green", "ojos color avellana": "hazel eyes", "la piel": "the skin", "calvo, -a, -os, -as": "bald", "canoso, -a, -os, -as": "grey", "delgado, -a, -os, -as": "thin", "feo, -a, -os, -as": "ugly", "gordo, -a, -os, -as": "fat", "fuerte, -s": "strong", "débil, -es": "weak"};
const sp2t1info = {"vivir (en)": "to live (in)", "crecer": "to grow", "cambiar": "to change", "migrar": "to migrate", "dormir": "to sleep", "volar": "to fly", "dar de comer": "to feed", "gatear": "to crawl", "grande, -es": "big", "pequeño, -a, -os, -as": "small", "largo, -a, -os, -as": "long (length)", "corto, -a, -os, -as": "short (length)", "alto, -a, -os, -as": "tall (height)", "bajo, -a, -os, -as": "short (height)", "seco, -a, -os, -as": "dry", "mojado, -a, -os, -as": "wet", "bonito, -a, -os, -as": "pretty", "feo, -a, -os, -as": "ugly", "limpio, -a, -os, -as": "clean", "sucio, -a, -os, -as": "dirty", "enojado, -a, -os, -as": "angry", "entusiasmado, -a, -os, -as": "excited", "fuerte, -es": "strong / loud", "débil, -es": "weak", "la vida": "the life", "el hogar": "the home", "el bosque": "the forest", "el desierto": "the desert", "la selva": "the jungle; the rainforest", "la sabana": "the savannah", "el campo": "the countryside / the field", "la granja": "the farm", "el océano": "the ocean", "la región ártica": "the arctic", "la región antártica": "the antarctic", "el árbol": "the tree", "el zoológico": "the zoo", "el animal": "the animal", "la tierra": "the land; the earth", "el río": "the river", "galopar": "to gallop", "saltar": "to jump", "brincar": "to hop", "caminar": "to walk", "culebrear": "to slither", "matar": "to kill", "descansar": "to rest", "subir": "to climb, to go up", "bajar": "to go down; to get off (something)", "adorable, -es": "adorable", "agresivo, -a, -os, -as": "aggressive", "hermoso, -a, -os, -as": "beautiful", "ingenioso, -a, -os, -as": "clever", "curioso, -a, -os, -as": "curious", "peligroso, -a, -os, -as": "dangerous", "energético, -a, -os, -as": "energetic", "feroz, feroces": "ferocious", "fiero, -a, -os, -as": "fierce", "amable, -es": "friendly", "peludo, -a, -os, -as": "furry/hairy", "crespo, -a, -os, -as": "fuzzy", "duro, -a, -os, -as": "hard", "juguetón, -es": "playful", "ruidoso, -a, -os, -as": "noisy", "escamoso, -a, -os, -as": "scaly", "limoso, -a, -os, -as": "slimy", "suave, -es": "soft/fluffy", "con puntas": "spikey", "apestoso, -a, -os, -as": "stinky", "domesticado, -a, -os, -as": "tame", "chiquitito, -a, -os, -as": "tiny", "acuático, -a, -os, -as": "aquatic", "indígena, -as": "indigenous", "nativo, -a, -os, -as": "native", "nocturno, -a, -os, -as": "nocturnal", "venenoso, -a, -os, -as": "poisonous", "salvaje, -es": "wild", "el anfibio": "the amphibian", "el cuerno": "the horn", "el insecto": "the insect", "el mamífero": "the mammal", "el reptil": "the reptile", "la hierba": "the grass", "el ruido": "the noise", "la mascota": "the pet", "la planta": "the plant", "el árbol": "the tree", "el mar": "the sea", "las alas": "the wings", "las plumas": "the feathers", "el carnívoro": "the carnivore", "el herbívoro": "the herbivore", "el omnívoro": "the omnivore", "el predador": "the predator", "la presa": "the prey"};
const sp2t2info = {"viajar": "to travel", "ir de vacaciones": "to go on vacation", "empacar": "to pack", "olvidar": "to forget", "buscar": "to look for", "encontrar *present tense o -> ue": "to find", "conocer *irregular yo (conozco)": "to know/meet(person); to be familiar with", "empezar *present tense e -> ie": "to start", "llegar": "to arrive", "llevar": "to carry; to bring; to wear", "sacar": "to take (out)", "tomar": "to try (an activity)", "tratar": "to take (as in, transportation or medicine)", "manejar": "to drive", "volver *present tense o -> ue": "to return", "documentar el equipaje": "to check (in) luggage", "escoger": "to choose", "comprar": "to buy", "salir *-go verb (salgo)": "to go out; to leave", "traer *-go verb (traigo)": "to bring", "el viaje": "the trip", "la maleta": "the suitcase", "el pasaporte": "the passport", "la aduana": "customs (at the airport)", "el país": "the country", "la ciudad": "the city", "el aeropuerto": "the airport", "el reclamo de equipaje": "the baggage claim", "el avión": "the airplane", "el tren": "the train", "el metro": "the subway", "el autobús": "the bus", "el boleto": "the ticket", "el lugar": "the place", "el mercado": "the market", "el dinero": "the money", "el cajero automático": "the ATM", "los recuerdos": "the souvenirs", "la carnet de identidad": "the ID card", "ayer": "yesterday", "anoche": "last night", "pasado, -a, -os, -as": "past / last", "ya": "already", "todavía": "still", "a la derecha (de)": "to the right (of)", "a la izquierda (de)": "to the left (of)", "cerca (de)": "close (to)", "lejos (de)": "far (from)", "entre": "between", "por": "via / through / for (how long)", "rápido, -a, -os, -as": "fast", "despacio": "slowly", "lento, -a, -os, -as": "slow", "seguir": "to continue/follow", "descansar": "to rest", "entrar": "to enter", "esperar": "to wait for / to hope", "explorar": "to explore", "parar": "to stop", "probar": "to try (foods or clothing)", "el barco": "the boat", "el bolso": "the bag / purse", "el puente": "the bridge", "la calle": "the street", "la esquina": "the corner", "la cuadra/la manzana\tthe block (of a street)": "la carretera", "the highway": "la cartera", "the wallet": "las escaleras", "the stairs": "el permiso de manejar the driver's license", "el coche; el carro": "the car", "la motocicleta": "the motorcycle", "\"¿Cómo se va ____?\"": "How do you go to ____?", "saludos desde": "Greetings from"};
const sp2t3info = {"vender": "to sell", "comprar": "to buy", "pagar": "to pay", "gastar": "to spend", "devolver *present tense o -> ue": "to return (an item/items)", "costar *present tense o -> ue": "to cost", "probar *present tense o -> ue": "to try (on), taste, test", "llevar": "to carry; to wear", "escoger *present tense yo: escojo": "to choose", "dar": "to give", "recibir": "to receive; to get", "la ropa (always singular)": "the clothing", "la talla": "the (clothing) size", "la chamarra / la chaqueta": "the jacket", "el abrigo": "the coat", "el vestido": "the dress", "la falda": "the skirt", "la camisa": "the shirt", "la camiseta": "the T-shirt", "el suéter": "the sweater", "la sudadera": "the sweatshirt", "los pantalones": "the pants", "los pantalones cortos": "the shorts", "los calcetines": "the socks", "los zapatos": "the shoes", "las botas": "the boots", "el traje": "the suit", "el traje de baño": "the swimsuit", "la gorra": "the cap / hat", "las joyas": "the jewelry", "el precio": "the price", "la liquidación": "the sale", "los dólares": "the dollars", "la tarjeta de crédito": "the credit card", "el regalo": "the gift", "la tienda": "the store", "la tienda de departamentos": "the department store", "tener frío": "to be cold", "tener calor": "to be hot", "tener prisa": "to be in a hurry", "apretado, -a, os, -as": "tight", "flojo, -a, os, -as": "loose, baggy", "cómodo, -a, os, -as": "comfortable", "elegante, -s": "elegant", "barato, -a, os, -as": "cheap", "caro, -a, os, -as": "expensive", "bastante, -s": "enough", "demasiado, -a, os, -as": "too, too much", "rojo, -a, os, -as": "red", "rosado, -a, os, -as": "pink", "anaranjado, -a, os, -as": "orange", "amarillo, -a, os, -as": "yellow", "verde, -s": "green", "azul, -es": "blue", "morado, -a, os, -as": "purple", "marrón, -es / café, -s": "brown", "gris, -es": "gray", "blanco, -a, os, -as": "white", "negro, -a, os, -as": "black", "estar de moda": "to be in fashion", "la marca": "the brand", "el estilo": "the style", "el tipo": "the type", "el descuento": "the discount", "el vendedor / la vendedora": "the salesperson", "verse": "to look, to appear"};
const sp3t0info = {"poner la mesa *-go (pongo)": "to set the table", "hacer la cama *-go (hago)": "to make the bed", "pasar la aspiradora": "to vacuum", "barrer": "to sweep", "cortar el césped": "to mow", "arreglar el cuarto": "to clean the room", "fregar los platos OR lavar los platos": "to wash dishes", "limpiar el polvo": "to dust", "limpiar": "to clean", "ayudar": "to help", "preparar": "to prepare", "quitar la nieve": "to shovel", "estar a favor": "to be in favor", "estar en contra": "to be against", "menospreciar": "to look down on", "maltratar": "to mistreat", "aburrir": "to bore", "interesar": "to interest", "preocupar": "to worry", "molestar": "to bother", "fascinar": "to fascinate", "importar": "to matter", "preferir *present tense e -> ie": "to prefer", "comenzar *present tense e -> ie": "to begin; to commence", "empezar *present tense e -> ie": "to start; to begin", "pensar *present tense e -> ie": "to think", "contar *present tense o -> ue": "to tell; to count", "recordar *present tense o -> ue": "to remember", "repetir  *present tense e -> i": "to repeat", "ocupado, -a, -os, -as": "busy", "equilibrado, -a, -os, -as": "balanced", "desequilibrado, -a, -os, -as": "imbalanced", "impensable, -s": "unthinkable", "cada": "every", "día": "day", "semana": "week", "fin de semana": "weekend", "mes": "month", "todo, -a, -os, -as": "every / all / all of the ___", "el tiempo": "time (all of the time)", "el día": "the day (all day)", "los días": "the days (every day)", "la semana": "the week (all week)", "el mes": "the month (all month)", "el año": "the year (all year)", "Time expressions with \"vez\"": "sometimes", "a veces": "once in a while", "de vez en cuando": "many times", "muchas veces": "three times a month", "tres veces al mes": "once a week", "mentir *present tense e -> ie": "to lie", "perder *present tense e -> ie": "to lose", "cerrar *present tense e -> ie": "to close", "entender *present tense e -> ie": "to understand", "querer *present tense e -> ie": "to want", "servir *present tense e -> i": "to serve", "seguir *present tense e -> i": "to follow; to continue", "reír *present tense e -> i": "to laugh", "sonreír *present tense e -> i": "to smile", "vestirse *present tense e -> i": "to dress (oneself)", "jugar *present tense u -> ue": "to play", "costar *present tense u -> ue": "to cost", "encontrar *present tense u -> ue": "to encounter", "volar *present tense u -> ue": "to fly", "dormir *present tense u -> ue": "to sleep", "volver *present tense u -> ue": "to return", "devolver *present tense u -> ue": "to return (item)", "acostarse *present tense u -> ue": "to go to bed", "almorzar *present tense u -> ue": "to have lunch"};
const temas = {"sp1-tema-0": sp1t0info, "sp1-tema-1": sp1t1info, "sp1-tema-2": sp1t2info, "sp1-tema-3a": sp1t3ainfo, "sp1-tema-3b": sp1t3binfo, "sp1-tema-4": sp1t4info, "sp1-tema-5": sp1t5info, "sp2-tema-1": sp2t1info, "sp2-tema-2": sp2t2info, "sp2-tema-3": sp2t3info, "sp3-tema-0": sp3t0info};
var field = document.getElementById("translation");

function canonicalise(phrase) {
    return phrase.toLowerCase().replace("á", "a").replace("é", "e").replace("í", "i").replace("ñ", "n").replace("ó", "o").replace("ú", "u").replace("ü", "u");
}

function update() {
    for (const [id, data] of Object.entries(temas)) {
        let temaDiv = document.getElementById(id);
        temaDiv.innerHTML = "";
        if (field.value.length < 2) continue;
        for (const [sp, en] of Object.entries(data)) {
            if (canonicalise(sp).includes(canonicalise(field.value)) || en.toLowerCase().includes(canonicalise(field.value))) {
                if (!temaDiv.innerHTML) {
                    temaDiv.innerHTML += `<h2>Spanish ${id[2]} Tema ${id.match(/[^-]+$/)[0]}</h2>`;
                }
                temaDiv.innerHTML += `<span class="def"><span class="en">${en}</span><span class="sp">${sp}</span></span><br>`;
            }
        }
    }
}

field.onchange = update;
field.onpaste = update;
field.onkeyup = update;
field.oninput = update;