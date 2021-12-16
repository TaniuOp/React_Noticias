Ejercicio: https://github.com/TheBridge-FullStackDeveloper/temario_fullstack_FT_sept21/blob/main/teoria/react/clase40.md

Proyecto: News API (reactnoticias)

API noticias: https://developer.nytimes.com/apis 

https://api.nytimes.com/svc/topstories/v2/home.json?api-key=YbZWATGOmqymqvj2SGi1yaEuMamc2A8L


Routing:
- /home. Home de la app
- /form. Formulario para crear noticia
- /list. Lista detallada de noticias


Componentes: 
- Head
- Nav
- Main
- Home. Input + botón para introducir nombre de usuario
- Form. Formulario de alta de nueva noticia. Tras dar de alta debes redirigir a ListNews
- ListNews. Haz una precarga de 5 noticias de la API + las que has dado de alta. Tu eliges el topic
- Card. Representa cada noticia. Debe tener un botón para poder borrarla
- Footer


Comunicación

Context:
- Se debe introducir nombre de usuario desde la Home. Provider
- En el Head debe aparecer el nombre de usuario. Consumer
- Sibling--sibling. Para Form y ListNews
- CSS/SCSS. Utilizar las técnicas de estilo vistas en clase

- Lifecycle: No olvides usarlo para el tema de llamadas asíncronas

