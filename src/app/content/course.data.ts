import { Topic } from '../core/models/learning.models';

export const TOPICS: Topic[] = [
  {
    "id": "inicio-lengua",
    "order": 0,
    "title": "Para empezar · La lengua que hablamos",
    "description": "El castellano, sus variedades y las lenguas de España.",
    "emoji": "🌍",
    "sections": [
      {
        "id": "lengua",
        "title": "La lengua que hablamos",
        "subtitle": "Lenguas, variedades y biografía lingüística",
        "kind": "communication",
        "emoji": "🗣️",
        "theory": [
          {
            "type": "text",
            "title": "Actividad de comunicación oral",
            "text": "Lenguas, variedades y biografía lingüística."
          },
          {
            "type": "list",
            "title": "Qué debes practicar",
            "items": [
              "Escuchar antes de responder.",
              "Hablar con claridad y mantener el tema.",
              "Respetar el turno de palabra.",
              "Explicar opiniones con razones cuando sea necesario."
            ]
          },
          {
            "type": "important",
            "title": "Se practica hablando y escuchando",
            "text": "No se evalúa con preguntas tipo test en el repaso teórico."
          }
        ],
        "questions": []
      }
    ]
  },
  {
    "id": "tema-01",
    "order": 1,
    "title": "En familia",
    "description": "Unidad 1: teoría, ejemplos, práctica y repaso paso a paso.",
    "emoji": "👨‍👩‍👧‍👦",
    "sections": [
      {
        "id": "situacion",
        "title": "Hablar y escuchar: la familia",
        "subtitle": "Participar en conversaciones y debates familiares",
        "kind": "communication",
        "emoji": "🗣️",
        "theory": [
          {
            "type": "text",
            "title": "Actividad de comunicación oral",
            "text": "Participar en conversaciones y debates familiares."
          },
          {
            "type": "list",
            "title": "Qué debes practicar",
            "items": [
              "Escuchar antes de responder.",
              "Hablar con claridad y mantener el tema.",
              "Respetar el turno de palabra.",
              "Explicar opiniones con razones cuando sea necesario."
            ]
          },
          {
            "type": "important",
            "title": "Se practica hablando y escuchando",
            "text": "No se evalúa con preguntas tipo test en el repaso teórico."
          }
        ],
        "questions": []
      },
      {
        "id": "campo-semantico",
        "title": "Campo semántico",
        "subtitle": "Agrupar palabras por significado",
        "kind": "vocabulary",
        "emoji": "🧩",
        "theory": [
          {
            "type": "text",
            "title": "¿Qué es un campo semántico?",
            "text": "Un campo semántico es un grupo de palabras de la misma clase que comparten una parte de su significado."
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "fútbol, tenis, baloncesto y natación son sustantivos y pertenecen al campo semántico de los deportes."
          },
          {
            "type": "important",
            "title": "No lo confundas",
            "text": "No basta con que las palabras aparezcan en una misma situación: deben compartir un rasgo de significado y pertenecer a la misma clase de palabras."
          },
          {
            "type": "tip",
            "title": "Cómo reconocerlo",
            "text": "Pregúntate: «¿Qué tienen en común estas palabras?» y busca una categoría que las incluya a todas."
          }
        ],
        "questions": [
          {
            "id": "t1-cs-1",
            "question": "¿Qué grupo forma un campo semántico?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "rojo-azul-verde-amarillo",
                "text": "rojo, azul, verde, amarillo",
                "correct": true
              },
              {
                "id": "rojo-correr-mesa-ayer",
                "text": "rojo, correr, mesa, ayer",
                "correct": false
              },
              {
                "id": "perro-rápido-cantar-azul",
                "text": "perro, rápido, cantar, azul",
                "correct": false
              },
              {
                "id": "libro-nube-saltar-feliz",
                "text": "libro, nube, saltar, feliz",
                "correct": false
              }
            ],
            "explanation": "Todas son palabras de la misma clase y nombran colores."
          },
          {
            "id": "t1-cs-2",
            "question": "León, tigre, gato y lince pertenecen al campo semántico de…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "los-felinos",
                "text": "los felinos",
                "correct": true
              },
              {
                "id": "los-muebles",
                "text": "los muebles",
                "correct": false
              },
              {
                "id": "los-colores",
                "text": "los colores",
                "correct": false
              },
              {
                "id": "los-deportes",
                "text": "los deportes",
                "correct": false
              }
            ],
            "explanation": "Todos son nombres de animales felinos."
          },
          {
            "id": "t1-cs-3",
            "question": "¿Qué palabra NO pertenece al campo semántico de «material escolar»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "tenedor",
                "text": "tenedor",
                "correct": true
              },
              {
                "id": "cuaderno",
                "text": "cuaderno",
                "correct": false
              },
              {
                "id": "lápiz",
                "text": "lápiz",
                "correct": false
              },
              {
                "id": "regla",
                "text": "regla",
                "correct": false
              }
            ],
            "explanation": "Un tenedor pertenece al ámbito de los cubiertos, no al material escolar."
          },
          {
            "id": "t1-cs-4",
            "question": "¿Qué tienen en común las palabras de un campo semántico?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "comparten-una-parte-de-s",
                "text": "Comparten una parte de su significado",
                "correct": true
              },
              {
                "id": "empiezan-siempre-por-la-",
                "text": "Empiezan siempre por la misma letra",
                "correct": false
              },
              {
                "id": "tienen-el-mismo-número-d",
                "text": "Tienen el mismo número de sílabas",
                "correct": false
              },
              {
                "id": "riman-siempre",
                "text": "Riman siempre",
                "correct": false
              }
            ],
            "explanation": "La relación es de significado, no de forma."
          },
          {
            "id": "t1-cs-5",
            "question": "Fútbol, tenis, baloncesto y natación forman el campo semántico de…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "los-deportes",
                "text": "los deportes",
                "correct": true
              },
              {
                "id": "los-meses",
                "text": "los meses",
                "correct": false
              },
              {
                "id": "los-alimentos",
                "text": "los alimentos",
                "correct": false
              },
              {
                "id": "las-profesiones",
                "text": "las profesiones",
                "correct": false
              }
            ],
            "explanation": "Las cuatro palabras nombran deportes."
          }
        ]
      },
      {
        "id": "acentuacion",
        "title": "Agudas, llanas y esdrújulas",
        "subtitle": "Reconocer la posición de la sílaba tónica",
        "kind": "spelling",
        "emoji": "✏️",
        "theory": [
          {
            "type": "text",
            "title": "La sílaba tónica",
            "text": "La sílaba tónica es la sílaba que pronunciamos con más fuerza dentro de una palabra. Las demás sílabas son átonas."
          },
          {
            "type": "list",
            "title": "Según dónde esté la sílaba tónica",
            "items": [
              "Agudas: la sílaba tónica es la última. Ejemplos: bebé, corazón, amor.",
              "Llanas: la sílaba tónica es la penúltima. Ejemplos: hermano, respeto, lápiz.",
              "Esdrújulas: la sílaba tónica es la antepenúltima. Ejemplos: sólido, vínculo, único."
            ]
          },
          {
            "type": "important",
            "title": "Tilde y sílaba tónica no son lo mismo",
            "text": "Todas las palabras tienen una sílaba tónica, pero no todas llevan tilde. La tilde es el signo gráfico que aparece en algunas palabras."
          },
          {
            "type": "example",
            "title": "Practica mentalmente",
            "text": "sofá → so-FÁ → aguda · lápiz → LÁ-piz → llana · música → MÚ-si-ca → esdrújula."
          },
          {
            "type": "tip",
            "title": "Truco",
            "text": "Pronuncia la palabra despacio y exagera ligeramente la sílaba que suena más fuerte. Después cuenta su posición desde el final."
          }
        ],
        "questions": [
          {
            "id": "t1-ac-1",
            "question": "¿Qué palabra es aguda?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "reloj",
                "text": "reloj",
                "correct": true
              },
              {
                "id": "mesa",
                "text": "mesa",
                "correct": false
              },
              {
                "id": "música",
                "text": "música",
                "correct": false
              },
              {
                "id": "árbol",
                "text": "árbol",
                "correct": false
              }
            ],
            "explanation": "re-LOJ tiene la sílaba tónica en la última sílaba.",
            "hint": "Pronúncialas despacio y escucha dónde recae la fuerza."
          },
          {
            "id": "t1-ac-2",
            "question": "¿Qué palabra es llana?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "lápiz",
                "text": "lápiz",
                "correct": true
              },
              {
                "id": "sofá",
                "text": "sofá",
                "correct": false
              },
              {
                "id": "corazón",
                "text": "corazón",
                "correct": false
              },
              {
                "id": "pájaro",
                "text": "pájaro",
                "correct": false
              }
            ],
            "explanation": "LÁ-piz es llana porque la sílaba tónica es la penúltima."
          },
          {
            "id": "t1-ac-3",
            "question": "¿Qué palabra es esdrújula?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "teléfono",
                "text": "teléfono",
                "correct": true
              },
              {
                "id": "pared",
                "text": "pared",
                "correct": false
              },
              {
                "id": "camino",
                "text": "camino",
                "correct": false
              },
              {
                "id": "compás",
                "text": "compás",
                "correct": false
              }
            ],
            "explanation": "te-LÉ-fo-no tiene la sílaba tónica en la antepenúltima."
          },
          {
            "id": "t1-ac-4",
            "question": "En la palabra «camión», ¿cuál es la sílaba tónica?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "mión",
                "text": "mión",
                "correct": true
              },
              {
                "id": "ca",
                "text": "ca",
                "correct": false
              },
              {
                "id": "mi",
                "text": "mi",
                "correct": false
              },
              {
                "id": "cam",
                "text": "cam",
                "correct": false
              }
            ],
            "explanation": "ca-MIÓN es aguda: la fuerza recae en la última sílaba."
          },
          {
            "id": "t1-ac-5",
            "question": "Clasifica «médico».",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "esdrújula",
                "text": "Esdrújula",
                "correct": true
              },
              {
                "id": "aguda",
                "text": "Aguda",
                "correct": false
              },
              {
                "id": "llana",
                "text": "Llana",
                "correct": false
              },
              {
                "id": "monosílaba",
                "text": "Monosílaba",
                "correct": false
              }
            ],
            "explanation": "MÉ-di-co es esdrújula porque la sílaba tónica es la antepenúltima."
          }
        ]
      },
      {
        "id": "gramatica",
        "title": "El sintagma nominal",
        "subtitle": "Identificar núcleo, determinante y complemento",
        "kind": "grammar",
        "emoji": "🔤",
        "theory": [
          {
            "type": "text",
            "title": "El sintagma nominal",
            "text": "El sintagma nominal es un grupo de palabras cuyo elemento principal es un sustantivo. Puede estar formado por una palabra o por varias."
          },
          {
            "type": "list",
            "title": "Partes del sintagma nominal",
            "items": [
              "Núcleo: es el sustantivo y la palabra más importante.",
              "Determinante: suele ir delante del sustantivo y lo concreta. Pueden funcionar como determinantes artículos, demostrativos, posesivos o numerales.",
              "Complemento: aporta información sobre el núcleo. Un adjetivo puede funcionar como complemento."
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "«La casa familiar»: la = determinante · casa = núcleo · familiar = complemento."
          },
          {
            "type": "example",
            "title": "Otro ejemplo",
            "text": "«Unas antiguas ruinas»: unas = determinante · ruinas = núcleo · antiguas = complemento."
          },
          {
            "type": "tip",
            "title": "Cómo encontrar el núcleo",
            "text": "Busca primero el sustantivo principal. Después observa qué palabra lo concreta y qué palabra dice cómo es."
          }
        ],
        "questions": [
          {
            "id": "t1-sn-1",
            "question": "En «la mochila azul», ¿cuál es el núcleo del sintagma nominal?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "mochila",
                "text": "mochila",
                "correct": true
              },
              {
                "id": "la",
                "text": "la",
                "correct": false
              },
              {
                "id": "azul",
                "text": "azul",
                "correct": false
              },
              {
                "id": "la-mochila",
                "text": "la mochila",
                "correct": false
              }
            ],
            "explanation": "El núcleo es el sustantivo «mochila»."
          },
          {
            "id": "t1-sn-2",
            "question": "En «el perro pequeño», ¿qué función tiene «el»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "determinante",
                "text": "Determinante",
                "correct": true
              },
              {
                "id": "núcleo",
                "text": "Núcleo",
                "correct": false
              },
              {
                "id": "complemento",
                "text": "Complemento",
                "correct": false
              },
              {
                "id": "verbo",
                "text": "Verbo",
                "correct": false
              }
            ],
            "explanation": "El artículo «el» concreta al sustantivo y funciona como determinante."
          },
          {
            "id": "t1-sn-3",
            "question": "En «unas flores preciosas», ¿qué palabra funciona como complemento?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "preciosas",
                "text": "preciosas",
                "correct": true
              },
              {
                "id": "unas",
                "text": "unas",
                "correct": false
              },
              {
                "id": "flores",
                "text": "flores",
                "correct": false
              },
              {
                "id": "unas-flores",
                "text": "unas flores",
                "correct": false
              }
            ],
            "explanation": "El adjetivo «preciosas» aporta información sobre el núcleo «flores»."
          },
          {
            "id": "t1-sn-4",
            "question": "¿Cuál es un sintagma nominal?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "mis-dos-amigos",
                "text": "mis dos amigos",
                "correct": true
              },
              {
                "id": "corre-deprisa",
                "text": "corre deprisa",
                "correct": false
              },
              {
                "id": "muy-lentamente",
                "text": "muy lentamente",
                "correct": false
              },
              {
                "id": "hemos-llegado",
                "text": "hemos llegado",
                "correct": false
              }
            ],
            "explanation": "Su núcleo es el sustantivo «amigos»."
          },
          {
            "id": "t1-sn-5",
            "question": "¿Qué estructura tiene «la casa grande»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "determinante-núcleo-comp",
                "text": "determinante + núcleo + complemento",
                "correct": true
              },
              {
                "id": "núcleo-verbo",
                "text": "núcleo + verbo",
                "correct": false
              },
              {
                "id": "verbo-complemento",
                "text": "verbo + complemento",
                "correct": false
              },
              {
                "id": "complemento-determinante",
                "text": "complemento + determinante",
                "correct": false
              }
            ],
            "explanation": "«la» es determinante, «casa» núcleo y «grande» complemento."
          }
        ]
      },
      {
        "id": "literatura",
        "title": "Los textos literarios",
        "subtitle": "Reconocer el uso artístico del lenguaje",
        "kind": "literature",
        "emoji": "📚",
        "theory": [
          {
            "type": "text",
            "title": "Los textos literarios",
            "text": "Los textos literarios utilizan el lenguaje de una forma especial para crear belleza, despertar emociones, entretener o contar mundos e historias imaginadas."
          },
          {
            "type": "list",
            "title": "Podemos encontrar literatura en",
            "items": [
              "Narraciones, como cuentos y novelas.",
              "Poemas y otras obras líricas.",
              "Obras teatrales escritas para ser representadas."
            ]
          },
          {
            "type": "tip",
            "title": "Al leer literatura",
            "text": "Fíjate no solo en lo que se cuenta, sino también en cómo se utilizan las palabras para producir un efecto en quien lee."
          }
        ],
        "questions": []

      },
      {
        "id": "escritura",
        "title": "Escribir un retrato",
        "subtitle": "Describir aspecto y carácter",
        "kind": "writing",
        "emoji": "📝",
        "theory": [
          {
            "type": "text",
            "title": "Actividad de expresión escrita",
            "text": "Describir aspecto y carácter."
          },
          {
            "type": "list",
            "title": "Cómo hacer la actividad",
            "items": [
              "Piensa qué quieres comunicar y a quién va dirigido.",
              "Haz un pequeño borrador y ordena las ideas.",
              "Escribe el texto siguiendo las características trabajadas en la unidad.",
              "Relee lo escrito y corrige ortografía, puntuación y repeticiones.",
              "Comprueba que el resultado cumple el objetivo de la actividad."
            ]
          },
          {
            "type": "important",
            "title": "Aquí no hay examen tipo test",
            "text": "Esta sección se aprende escribiendo. El objetivo es producir un texto, revisarlo y mejorarlo."
          }
        ],
        "questions": []
      },
      {
        "id": "repaso",
        "title": "Comprueba tu progreso",
        "subtitle": "Relacionar todos los aprendizajes del tema",
        "kind": "review",
        "emoji": "🏆",
        "theory": [
          {
            "type": "text",
            "title": "Repaso de la teoría de la unidad",
            "text": "Comprueba lo aprendido en los contenidos teóricos de este tema."
          },
          {
            "type": "important",
            "title": "Qué se repasa",
            "text": "En este tema se repasan campo semántico, acentuación y sintagma nominal. El texto literario se trabaja como contenido de lectura, pero no se evalúa con test."
          },
          {
            "type": "tip",
            "title": "Comprensión lectora",
            "text": "Las lecturas y sus actividades de comprensión se trabajan en clase y no forman parte de Palabraria."
          }
        ],
        "questions": [
                  {
                            "id": "tema-01-final-campo-1",
                            "question": "¿Qué grupo de palabras pertenece al mismo campo semántico?",
                            "difficulty": "medium",
                            "points": 10,
                            "answers": [
                                      {
                                                "id": "enero-marzo-julio-octubre",
                                                "text": "enero, marzo, julio, octubre",
                                                "correct": true
                                      },
                                      {
                                                "id": "enero-frio-calendario-viajar",
                                                "text": "enero, frío, calendario, viajar",
                                                "correct": false
                                      },
                                      {
                                                "id": "lunes-reloj-verano-agosto",
                                                "text": "lunes, reloj, verano, agosto",
                                                "correct": false
                                      },
                                      {
                                                "id": "abril-lluvia-correr-jardin",
                                                "text": "abril, lluvia, correr, jardín",
                                                "correct": false
                                      }
                            ],
                            "explanation": "Enero, marzo, julio y octubre son sustantivos que nombran meses del año."
                  },
                  {
                            "id": "tema-01-final-campo-2",
                            "question": "En el grupo «violín, guitarra, flauta, tambor», ¿cuál es la categoría que comparten?",
                            "difficulty": "medium",
                            "points": 10,
                            "answers": [
                                      {
                                                "id": "instrumentos-musicales",
                                                "text": "Instrumentos musicales",
                                                "correct": true
                                      },
                                      {
                                                "id": "tipos-de-musica",
                                                "text": "Tipos de música",
                                                "correct": false
                                      },
                                      {
                                                "id": "profesiones",
                                                "text": "Profesiones",
                                                "correct": false
                                      },
                                      {
                                                "id": "acciones",
                                                "text": "Acciones",
                                                "correct": false
                                      }
                            ],
                            "explanation": "Las cuatro palabras son sustantivos que nombran instrumentos musicales."
                  },
                  {
                            "id": "tema-01-final-campo-3",
                            "question": "¿Qué palabra sobra en el campo semántico formado por «camisa, pantalón, abrigo, cuchara»?",
                            "difficulty": "medium",
                            "points": 10,
                            "answers": [
                                      {
                                                "id": "cuchara",
                                                "text": "cuchara",
                                                "correct": true
                                      },
                                      {
                                                "id": "camisa",
                                                "text": "camisa",
                                                "correct": false
                                      },
                                      {
                                                "id": "pantalon",
                                                "text": "pantalón",
                                                "correct": false
                                      },
                                      {
                                                "id": "abrigo",
                                                "text": "abrigo",
                                                "correct": false
                                      }
                            ],
                            "explanation": "Camisa, pantalón y abrigo son prendas de vestir; cuchara es un cubierto."
                  },
                  {
                            "id": "tema-01-final-acentuacion-1",
                            "question": "¿Qué clasificación corresponde a la palabra «ventana»?",
                            "difficulty": "medium",
                            "points": 10,
                            "answers": [
                                      {
                                                "id": "llana",
                                                "text": "Llana",
                                                "correct": true
                                      },
                                      {
                                                "id": "aguda",
                                                "text": "Aguda",
                                                "correct": false
                                      },
                                      {
                                                "id": "esdrujula",
                                                "text": "Esdrújula",
                                                "correct": false
                                      },
                                      {
                                                "id": "monosilaba",
                                                "text": "Monosílaba",
                                                "correct": false
                                      }
                            ],
                            "explanation": "ven-TA-na tiene la sílaba tónica en la penúltima sílaba, por eso es llana."
                  },
                  {
                            "id": "tema-01-final-acentuacion-2",
                            "question": "¿En qué palabra recae la fuerza de voz en la última sílaba?",
                            "difficulty": "medium",
                            "points": 10,
                            "answers": [
                                      {
                                                "id": "animal",
                                                "text": "animal",
                                                "correct": true
                                      },
                                      {
                                                "id": "ventana",
                                                "text": "ventana",
                                                "correct": false
                                      },
                                      {
                                                "id": "lampara",
                                                "text": "lámpara",
                                                "correct": false
                                      },
                                      {
                                                "id": "facil",
                                                "text": "fácil",
                                                "correct": false
                                      }
                            ],
                            "explanation": "a-ni-MAL tiene la sílaba tónica en la última posición, así que es aguda."
                  },
                  {
                            "id": "tema-01-final-acentuacion-3",
                            "question": "La palabra «brújula» tiene la sílaba tónica en «brú». ¿Cómo se clasifica?",
                            "difficulty": "medium",
                            "points": 10,
                            "answers": [
                                      {
                                                "id": "esdrujula",
                                                "text": "Esdrújula",
                                                "correct": true
                                      },
                                      {
                                                "id": "aguda",
                                                "text": "Aguda",
                                                "correct": false
                                      },
                                      {
                                                "id": "llana",
                                                "text": "Llana",
                                                "correct": false
                                      },
                                      {
                                                "id": "monosilaba",
                                                "text": "Monosílaba",
                                                "correct": false
                                      }
                            ],
                            "explanation": "BRÚ-ju-la tiene la sílaba tónica en la antepenúltima posición."
                  },
                  {
                            "id": "tema-01-final-gramatica-1",
                            "question": "En el sintagma nominal «aquellos árboles altos», ¿cuál es el núcleo?",
                            "difficulty": "medium",
                            "points": 10,
                            "answers": [
                                      {
                                                "id": "arboles",
                                                "text": "árboles",
                                                "correct": true
                                      },
                                      {
                                                "id": "aquellos",
                                                "text": "aquellos",
                                                "correct": false
                                      },
                                      {
                                                "id": "altos",
                                                "text": "altos",
                                                "correct": false
                                      },
                                      {
                                                "id": "aquellos-arboles",
                                                "text": "aquellos árboles",
                                                "correct": false
                                      }
                            ],
                            "explanation": "El sustantivo «árboles» es la palabra principal y funciona como núcleo."
                  },
                  {
                            "id": "tema-01-final-gramatica-2",
                            "question": "En «mi bicicleta nueva», ¿qué función tiene la palabra «mi»?",
                            "difficulty": "medium",
                            "points": 10,
                            "answers": [
                                      {
                                                "id": "determinante",
                                                "text": "Determinante",
                                                "correct": true
                                      },
                                      {
                                                "id": "nucleo",
                                                "text": "Núcleo",
                                                "correct": false
                                      },
                                      {
                                                "id": "complemento",
                                                "text": "Complemento",
                                                "correct": false
                                      },
                                      {
                                                "id": "verbo",
                                                "text": "Verbo",
                                                "correct": false
                                      }
                            ],
                            "explanation": "«Mi» es un posesivo que concreta al sustantivo «bicicleta» y funciona como determinante."
                  },
                  {
                            "id": "tema-01-final-gramatica-3",
                            "question": "¿Qué análisis es correcto para «los zapatos negros»?",
                            "difficulty": "hard",
                            "points": 10,
                            "answers": [
                                      {
                                                "id": "det-nuc-comp",
                                                "text": "los = determinante · zapatos = núcleo · negros = complemento",
                                                "correct": true
                                      },
                                      {
                                                "id": "nuc-det-comp",
                                                "text": "los = núcleo · zapatos = determinante · negros = complemento",
                                                "correct": false
                                      },
                                      {
                                                "id": "det-comp-nuc",
                                                "text": "los = determinante · zapatos = complemento · negros = núcleo",
                                                "correct": false
                                      },
                                      {
                                                "id": "comp-nuc-det",
                                                "text": "los = complemento · zapatos = núcleo · negros = determinante",
                                                "correct": false
                                      }
                            ],
                            "explanation": "«los» concreta al sustantivo, «zapatos» es el sustantivo principal y «negros» aporta información sobre él."
                  }
        ]
      }
    ]
  },
  {
    "id": "tema-02",
    "order": 2,
    "title": "¡Te lo regalo!",
    "description": "Unidad 2: teoría, ejemplos, práctica y repaso paso a paso.",
    "emoji": "🎁",
    "sections": [
      {
        "id": "situacion",
        "title": "Hablar y escuchar: los regalos",
        "subtitle": "Expresar gustos, agradecimiento e intención",
        "kind": "communication",
        "emoji": "🗣️",
        "theory": [
          {
            "type": "text",
            "title": "Actividad de comunicación oral",
            "text": "Expresar gustos, agradecimiento e intención."
          },
          {
            "type": "list",
            "title": "Qué debes practicar",
            "items": [
              "Escuchar antes de responder.",
              "Hablar con claridad y mantener el tema.",
              "Respetar el turno de palabra.",
              "Explicar opiniones con razones cuando sea necesario."
            ]
          },
          {
            "type": "important",
            "title": "Se practica hablando y escuchando",
            "text": "No se evalúa con preguntas tipo test en el repaso teórico."
          }
        ],
        "questions": []
      },
      {
        "id": "campo-lexico",
        "title": "Campo léxico",
        "subtitle": "Relacionar palabras de distintas clases",
        "kind": "vocabulary",
        "emoji": "🧩",
        "theory": [
          {
            "type": "text",
            "title": "Lo que vas a aprender",
            "text": "Relacionar palabras de distintas clases."
          },
          {
            "type": "text",
            "title": "Explicación",
            "text": "Un campo léxico reúne palabras de diferentes clases relacionadas con un mismo tema: regalo, regalar, bonito, cuidadosamente."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Tema común",
              "Sustantivos",
              "Verbos",
              "Adjetivos"
            ]
          },
          {
            "type": "example",
            "title": "Aprende con ejemplos",
            "text": "Busca o inventa un ejemplo relacionado con tema común. Después explícalo con tus propias palabras."
          },
          {
            "type": "tip",
            "title": "Truco Palabraria",
            "text": "No memorices solo la definición: identifica la pista que te permite reconocer el concepto y úsala en un ejemplo nuevo."
          }
        ],
        "questions": [
          {
            "id": "campo-lexico-1",
            "question": "¿Cuál es uno de los conceptos que debes dominar en «Campo léxico»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "tema-común",
                "text": "Tema común",
                "correct": true
              },
              {
                "id": "una-raíz-cuadrada",
                "text": "Una raíz cuadrada",
                "correct": false
              },
              {
                "id": "una-cordillera",
                "text": "Una cordillera",
                "correct": false
              },
              {
                "id": "un-circuito-eléctrico",
                "text": "Un circuito eléctrico",
                "correct": false
              }
            ],
            "explanation": "Un campo léxico reúne palabras de diferentes clases relacionadas con un mismo tema: regalo, regalar, bonito, cuidadosamente."
          },
          {
            "id": "campo-lexico-2",
            "question": "¿Qué otro contenido se trabaja en «Campo léxico»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "sustantivos",
                "text": "Sustantivos",
                "correct": true
              },
              {
                "id": "los-planetas",
                "text": "Los planetas",
                "correct": false
              },
              {
                "id": "los-polígonos",
                "text": "Los polígonos",
                "correct": false
              },
              {
                "id": "la-fotosíntesis",
                "text": "La fotosíntesis",
                "correct": false
              }
            ],
            "explanation": "En esta sección también se trabaja sustantivos."
          },
          {
            "id": "campo-lexico-3",
            "question": "¿Qué opción está relacionada con «Campo léxico»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "verbos",
                "text": "Verbos",
                "correct": true
              },
              {
                "id": "división-decimal",
                "text": "División decimal",
                "correct": false
              },
              {
                "id": "escala-cartográfica",
                "text": "Escala cartográfica",
                "correct": false
              },
              {
                "id": "cadena-alimentaria",
                "text": "Cadena alimentaria",
                "correct": false
              }
            ],
            "explanation": "Verbos forma parte de esta sección."
          },
          {
            "id": "campo-lexico-4",
            "question": "¿Cuál es el objetivo de «Campo léxico»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "relacionar-palabras-de-d",
                "text": "Relacionar palabras de distintas clases",
                "correct": true
              },
              {
                "id": "resolver-problemas-numér",
                "text": "Resolver problemas numéricos",
                "correct": false
              },
              {
                "id": "estudiar-accidentes-geog",
                "text": "Estudiar accidentes geográficos",
                "correct": false
              },
              {
                "id": "clasificar-animales",
                "text": "Clasificar animales",
                "correct": false
              }
            ],
            "explanation": "Un campo léxico reúne palabras de diferentes clases relacionadas con un mismo tema: regalo, regalar, bonito, cuidadosamente."
          },
          {
            "id": "campo-lexico-5",
            "question": "¿Qué estrategia demuestra que has comprendido un contenido de Lengua?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "reconocerlo-y-aplicarlo-",
                "text": "Reconocerlo y aplicarlo en ejemplos nuevos",
                "correct": true
              },
              {
                "id": "repetir-sin-entender",
                "text": "Repetir sin entender",
                "correct": false
              },
              {
                "id": "elegir-al-azar",
                "text": "Elegir al azar",
                "correct": false
              },
              {
                "id": "no-revisar-errores",
                "text": "No revisar errores",
                "correct": false
              }
            ],
            "explanation": "Comprender significa poder aplicar lo aprendido."
          }
        ]
      },
      {
        "id": "agudas",
        "title": "Acentuación de palabras agudas",
        "subtitle": "Aplicar la regla de tilde",
        "kind": "spelling",
        "emoji": "✏️",
        "theory": [
          {
            "type": "text",
            "title": "Lo que vas a aprender",
            "text": "Aplicar la regla de tilde."
          },
          {
            "type": "text",
            "title": "Explicación",
            "text": "Las palabras agudas llevan tilde cuando terminan en vocal, n o s. Ejemplos: sofá, canción, compás. No la llevan en reloj o pared."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Última sílaba",
              "Vocal, n o s",
              "Tilde"
            ]
          },
          {
            "type": "example",
            "title": "Aprende con ejemplos",
            "text": "Busca o inventa un ejemplo relacionado con última sílaba. Después explícalo con tus propias palabras."
          },
          {
            "type": "tip",
            "title": "Truco Palabraria",
            "text": "No memorices solo la definición: identifica la pista que te permite reconocer el concepto y úsala en un ejemplo nuevo."
          }
        ],
        "questions": [
          {
            "id": "t2-ag-1",
            "question": "¿Qué palabra aguda debe llevar tilde?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "canción",
                "text": "canción",
                "correct": true
              },
              {
                "id": "reloj",
                "text": "reloj",
                "correct": false
              },
              {
                "id": "pared",
                "text": "pared",
                "correct": false
              },
              {
                "id": "animal",
                "text": "animal",
                "correct": false
              }
            ],
            "explanation": "Las agudas llevan tilde cuando terminan en vocal, n o s."
          },
          {
            "id": "t2-ag-2",
            "question": "¿Por qué «sofá» lleva tilde?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "es-aguda-y-termina-en-vo",
                "text": "Es aguda y termina en vocal",
                "correct": true
              },
              {
                "id": "es-llana-y-termina-en-vo",
                "text": "Es llana y termina en vocal",
                "correct": false
              },
              {
                "id": "todas-las-agudas-llevan-",
                "text": "Todas las agudas llevan tilde",
                "correct": false
              },
              {
                "id": "termina-en-consonante",
                "text": "Termina en consonante",
                "correct": false
              }
            ],
            "explanation": "so-FÁ es aguda y termina en vocal."
          },
          {
            "id": "t2-ag-3",
            "question": "¿Cuál está escrita correctamente?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "compás",
                "text": "compás",
                "correct": true
              },
              {
                "id": "compas",
                "text": "compas",
                "correct": false
              },
              {
                "id": "reloj",
                "text": "reloj́",
                "correct": false
              },
              {
                "id": "pared",
                "text": "pared́",
                "correct": false
              }
            ],
            "explanation": "COM-PÁS es aguda, termina en s y por eso lleva tilde."
          },
          {
            "id": "t2-ag-4",
            "question": "¿Cuál es aguda pero NO lleva tilde?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "reloj",
                "text": "reloj",
                "correct": true
              },
              {
                "id": "bebé",
                "text": "bebé",
                "correct": false
              },
              {
                "id": "jamón",
                "text": "jamón",
                "correct": false
              },
              {
                "id": "compás",
                "text": "compás",
                "correct": false
              }
            ],
            "explanation": "re-LOJ es aguda, pero termina en j, así que no lleva tilde."
          },
          {
            "id": "t2-ag-5",
            "question": "Completa: Las palabras agudas tienen la sílaba tónica…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "en-la-última-sílaba",
                "text": "en la última sílaba",
                "correct": true
              },
              {
                "id": "en-la-penúltima",
                "text": "en la penúltima",
                "correct": false
              },
              {
                "id": "en-la-antepenúltima",
                "text": "en la antepenúltima",
                "correct": false
              },
              {
                "id": "siempre-en-la-primera",
                "text": "siempre en la primera",
                "correct": false
              }
            ],
            "explanation": "La característica que define a las agudas es tener la sílaba tónica en último lugar."
          }
        ]
      },
      {
        "id": "pronombres",
        "title": "Los pronombres personales",
        "subtitle": "Sustituir nombres de personas o seres",
        "kind": "grammar",
        "emoji": "🔤",
        "theory": [
          {
            "type": "text",
            "title": "Lo que vas a aprender",
            "text": "Sustituir nombres de personas o seres."
          },
          {
            "type": "text",
            "title": "Explicación",
            "text": "Los pronombres personales nombran a las personas gramaticales sin usar un sustantivo: yo, tú, él, ella, nosotros, vosotras, ellos..."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Persona",
              "Singular y plural",
              "Sustitución"
            ]
          },
          {
            "type": "example",
            "title": "Aprende con ejemplos",
            "text": "Busca o inventa un ejemplo relacionado con persona. Después explícalo con tus propias palabras."
          },
          {
            "type": "tip",
            "title": "Truco Palabraria",
            "text": "No memorices solo la definición: identifica la pista que te permite reconocer el concepto y úsala en un ejemplo nuevo."
          }
        ],
        "questions": [
          {
            "id": "t2-pr-1",
            "question": "Sustituye «María» por un pronombre: «María canta muy bien».",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "ella-canta-muy-bien",
                "text": "Ella canta muy bien",
                "correct": true
              },
              {
                "id": "nosotros-canta-muy-bien",
                "text": "Nosotros canta muy bien",
                "correct": false
              },
              {
                "id": "tú-cantan-muy-bien",
                "text": "Tú cantan muy bien",
                "correct": false
              },
              {
                "id": "ellos-canta-muy-bien",
                "text": "Ellos canta muy bien",
                "correct": false
              }
            ],
            "explanation": "«Ella» es el pronombre personal de tercera persona singular adecuado."
          },
          {
            "id": "t2-pr-2",
            "question": "¿Qué pronombre es de primera persona plural?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "nosotros",
                "text": "nosotros",
                "correct": true
              },
              {
                "id": "ellos",
                "text": "ellos",
                "correct": false
              },
              {
                "id": "tú",
                "text": "tú",
                "correct": false
              },
              {
                "id": "ella",
                "text": "ella",
                "correct": false
              }
            ],
            "explanation": "«Nosotros/nosotras» señala a quien habla junto con otras personas."
          },
          {
            "id": "t2-pr-3",
            "question": "¿Qué pronombre puede sustituir a «Pedro y Luis»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "ellos",
                "text": "ellos",
                "correct": true
              },
              {
                "id": "él",
                "text": "él",
                "correct": false
              },
              {
                "id": "yo",
                "text": "yo",
                "correct": false
              },
              {
                "id": "ella",
                "text": "ella",
                "correct": false
              }
            ],
            "explanation": "Son varias personas de tercera persona: «ellos»."
          },
          {
            "id": "t2-pr-4",
            "question": "En «Tú preparas la mochila», el pronombre personal es…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "tú",
                "text": "tú",
                "correct": true
              },
              {
                "id": "preparas",
                "text": "preparas",
                "correct": false
              },
              {
                "id": "la",
                "text": "la",
                "correct": false
              },
              {
                "id": "mochila",
                "text": "mochila",
                "correct": false
              }
            ],
            "explanation": "«Tú» señala a la persona con la que se habla."
          },
          {
            "id": "t2-pr-5",
            "question": "¿Cuál es un pronombre personal?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "vosotras",
                "text": "vosotras",
                "correct": true
              },
              {
                "id": "aquella",
                "text": "aquella",
                "correct": false
              },
              {
                "id": "mi",
                "text": "mi",
                "correct": false
              },
              {
                "id": "tres",
                "text": "tres",
                "correct": false
              }
            ],
            "explanation": "«Vosotras» es un pronombre personal de segunda persona plural."
          }
        ]
      },
      {
        "id": "otros-textos",
        "title": "Texto informativo y fuentes",
        "subtitle": "Buscar información fiable",
        "kind": "media",
        "emoji": "🌐",
        "theory": [
          {
            "type": "text",
            "title": "Lo que vas a aprender",
            "text": "Buscar información fiable."
          },
          {
            "type": "text",
            "title": "Explicación",
            "text": "Un texto informativo comunica datos. Para investigar hay que consultar fuentes adecuadas, comparar información y distinguir autor y procedencia."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Fuentes",
              "Fiabilidad",
              "Información"
            ]
          },
          {
            "type": "example",
            "title": "Aprende con ejemplos",
            "text": "Busca o inventa un ejemplo relacionado con fuentes. Después explícalo con tus propias palabras."
          },
          {
            "type": "tip",
            "title": "Truco Palabraria",
            "text": "No memorices solo la definición: identifica la pista que te permite reconocer el concepto y úsala en un ejemplo nuevo."
          }
        ],
        "questions": [
          {
            "id": "otros-textos-1",
            "question": "¿Cuál es uno de los conceptos que debes dominar en «Texto informativo y fuentes»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "fuentes",
                "text": "Fuentes",
                "correct": true
              },
              {
                "id": "una-raíz-cuadrada",
                "text": "Una raíz cuadrada",
                "correct": false
              },
              {
                "id": "una-cordillera",
                "text": "Una cordillera",
                "correct": false
              },
              {
                "id": "un-circuito-eléctrico",
                "text": "Un circuito eléctrico",
                "correct": false
              }
            ],
            "explanation": "Un texto informativo comunica datos. Para investigar hay que consultar fuentes adecuadas, comparar información y distinguir autor y procedencia."
          },
          {
            "id": "otros-textos-2",
            "question": "¿Qué otro contenido se trabaja en «Texto informativo y fuentes»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "fiabilidad",
                "text": "Fiabilidad",
                "correct": true
              },
              {
                "id": "los-planetas",
                "text": "Los planetas",
                "correct": false
              },
              {
                "id": "los-polígonos",
                "text": "Los polígonos",
                "correct": false
              },
              {
                "id": "la-fotosíntesis",
                "text": "La fotosíntesis",
                "correct": false
              }
            ],
            "explanation": "En esta sección también se trabaja fiabilidad."
          },
          {
            "id": "otros-textos-3",
            "question": "¿Qué opción está relacionada con «Texto informativo y fuentes»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "información",
                "text": "Información",
                "correct": true
              },
              {
                "id": "división-decimal",
                "text": "División decimal",
                "correct": false
              },
              {
                "id": "escala-cartográfica",
                "text": "Escala cartográfica",
                "correct": false
              },
              {
                "id": "cadena-alimentaria",
                "text": "Cadena alimentaria",
                "correct": false
              }
            ],
            "explanation": "Información forma parte de esta sección."
          },
          {
            "id": "otros-textos-4",
            "question": "¿Cuál es el objetivo de «Texto informativo y fuentes»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "buscar-información-fiabl",
                "text": "Buscar información fiable",
                "correct": true
              },
              {
                "id": "resolver-problemas-numér",
                "text": "Resolver problemas numéricos",
                "correct": false
              },
              {
                "id": "estudiar-accidentes-geog",
                "text": "Estudiar accidentes geográficos",
                "correct": false
              },
              {
                "id": "clasificar-animales",
                "text": "Clasificar animales",
                "correct": false
              }
            ],
            "explanation": "Un texto informativo comunica datos. Para investigar hay que consultar fuentes adecuadas, comparar información y distinguir autor y procedencia."
          },
          {
            "id": "otros-textos-5",
            "question": "¿Qué estrategia demuestra que has comprendido un contenido de Lengua?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "reconocerlo-y-aplicarlo-",
                "text": "Reconocerlo y aplicarlo en ejemplos nuevos",
                "correct": true
              },
              {
                "id": "repetir-sin-entender",
                "text": "Repetir sin entender",
                "correct": false
              },
              {
                "id": "elegir-al-azar",
                "text": "Elegir al azar",
                "correct": false
              },
              {
                "id": "no-revisar-errores",
                "text": "No revisar errores",
                "correct": false
              }
            ],
            "explanation": "Comprender significa poder aplicar lo aprendido."
          }
        ]
      },
      {
        "id": "escritura",
        "title": "Notas de agradecimiento",
        "subtitle": "Escribir mensajes breves y corteses",
        "kind": "writing",
        "emoji": "📝",
        "theory": [
          {
            "type": "text",
            "title": "Actividad de expresión escrita",
            "text": "Escribir mensajes breves y corteses."
          },
          {
            "type": "list",
            "title": "Cómo hacer la actividad",
            "items": [
              "Piensa qué quieres comunicar y a quién va dirigido.",
              "Haz un pequeño borrador y ordena las ideas.",
              "Escribe el texto siguiendo las características trabajadas en la unidad.",
              "Relee lo escrito y corrige ortografía, puntuación y repeticiones.",
              "Comprueba que el resultado cumple el objetivo de la actividad."
            ]
          },
          {
            "type": "important",
            "title": "Aquí no hay examen tipo test",
            "text": "Esta sección se aprende escribiendo. El objetivo es producir un texto, revisarlo y mejorarlo."
          }
        ],
        "questions": []
      },
      {
        "id": "repaso",
        "title": "Comprueba tu progreso",
        "subtitle": "Consolidar el tema",
        "kind": "review",
        "emoji": "🏆",
        "theory": [
          {
            "type": "text",
            "title": "Repaso de la teoría de la unidad",
            "text": "Comprueba lo aprendido en los contenidos teóricos de este tema."
          },
          {
            "type": "important",
            "title": "Qué se repasa",
            "text": "Vocabulario, ortografía, gramática y, cuando corresponde, literatura o alfabetización mediática."
          },
          {
            "type": "tip",
            "title": "Comprensión lectora",
            "text": "Las lecturas y sus actividades de comprensión se trabajan en clase y no forman parte de Palabraria."
          }
        ],
        "questions": [
          {
            "id": "tema-02-rep-campo-lexico-1",
            "question": "¿Cuál es uno de los conceptos que debes dominar en «Campo léxico»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "tema-común",
                "text": "Tema común",
                "correct": true
              },
              {
                "id": "una-raíz-cuadrada",
                "text": "Una raíz cuadrada",
                "correct": false
              },
              {
                "id": "una-cordillera",
                "text": "Una cordillera",
                "correct": false
              },
              {
                "id": "un-circuito-eléctrico",
                "text": "Un circuito eléctrico",
                "correct": false
              }
            ],
            "explanation": "Un campo léxico reúne palabras de diferentes clases relacionadas con un mismo tema: regalo, regalar, bonito, cuidadosamente."
          },
          {
            "id": "tema-02-rep-campo-lexico-2",
            "question": "¿Qué otro contenido se trabaja en «Campo léxico»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "sustantivos",
                "text": "Sustantivos",
                "correct": true
              },
              {
                "id": "los-planetas",
                "text": "Los planetas",
                "correct": false
              },
              {
                "id": "los-polígonos",
                "text": "Los polígonos",
                "correct": false
              },
              {
                "id": "la-fotosíntesis",
                "text": "La fotosíntesis",
                "correct": false
              }
            ],
            "explanation": "En esta sección también se trabaja sustantivos."
          },
          {
            "id": "tema-02-rep-campo-lexico-3",
            "question": "¿Qué opción está relacionada con «Campo léxico»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "verbos",
                "text": "Verbos",
                "correct": true
              },
              {
                "id": "división-decimal",
                "text": "División decimal",
                "correct": false
              },
              {
                "id": "escala-cartográfica",
                "text": "Escala cartográfica",
                "correct": false
              },
              {
                "id": "cadena-alimentaria",
                "text": "Cadena alimentaria",
                "correct": false
              }
            ],
            "explanation": "Verbos forma parte de esta sección."
          },
          {
            "id": "tema-02-rep-agudas-1",
            "question": "¿Qué palabra aguda debe llevar tilde?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "canción",
                "text": "canción",
                "correct": true
              },
              {
                "id": "reloj",
                "text": "reloj",
                "correct": false
              },
              {
                "id": "pared",
                "text": "pared",
                "correct": false
              },
              {
                "id": "animal",
                "text": "animal",
                "correct": false
              }
            ],
            "explanation": "Las agudas llevan tilde cuando terminan en vocal, n o s."
          },
          {
            "id": "tema-02-rep-agudas-2",
            "question": "¿Por qué «sofá» lleva tilde?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "es-aguda-y-termina-en-vo",
                "text": "Es aguda y termina en vocal",
                "correct": true
              },
              {
                "id": "es-llana-y-termina-en-vo",
                "text": "Es llana y termina en vocal",
                "correct": false
              },
              {
                "id": "todas-las-agudas-llevan-",
                "text": "Todas las agudas llevan tilde",
                "correct": false
              },
              {
                "id": "termina-en-consonante",
                "text": "Termina en consonante",
                "correct": false
              }
            ],
            "explanation": "so-FÁ es aguda y termina en vocal."
          },
          {
            "id": "tema-02-rep-agudas-3",
            "question": "¿Cuál está escrita correctamente?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "compás",
                "text": "compás",
                "correct": true
              },
              {
                "id": "compas",
                "text": "compas",
                "correct": false
              },
              {
                "id": "reloj",
                "text": "reloj́",
                "correct": false
              },
              {
                "id": "pared",
                "text": "pared́",
                "correct": false
              }
            ],
            "explanation": "COM-PÁS es aguda, termina en s y por eso lleva tilde."
          },
          {
            "id": "tema-02-rep-pronombres-1",
            "question": "Sustituye «María» por un pronombre: «María canta muy bien».",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "ella-canta-muy-bien",
                "text": "Ella canta muy bien",
                "correct": true
              },
              {
                "id": "nosotros-canta-muy-bien",
                "text": "Nosotros canta muy bien",
                "correct": false
              },
              {
                "id": "tú-cantan-muy-bien",
                "text": "Tú cantan muy bien",
                "correct": false
              },
              {
                "id": "ellos-canta-muy-bien",
                "text": "Ellos canta muy bien",
                "correct": false
              }
            ],
            "explanation": "«Ella» es el pronombre personal de tercera persona singular adecuado."
          },
          {
            "id": "tema-02-rep-pronombres-2",
            "question": "¿Qué pronombre es de primera persona plural?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "nosotros",
                "text": "nosotros",
                "correct": true
              },
              {
                "id": "ellos",
                "text": "ellos",
                "correct": false
              },
              {
                "id": "tú",
                "text": "tú",
                "correct": false
              },
              {
                "id": "ella",
                "text": "ella",
                "correct": false
              }
            ],
            "explanation": "«Nosotros/nosotras» señala a quien habla junto con otras personas."
          },
          {
            "id": "tema-02-rep-pronombres-3",
            "question": "¿Qué pronombre puede sustituir a «Pedro y Luis»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "ellos",
                "text": "ellos",
                "correct": true
              },
              {
                "id": "él",
                "text": "él",
                "correct": false
              },
              {
                "id": "yo",
                "text": "yo",
                "correct": false
              },
              {
                "id": "ella",
                "text": "ella",
                "correct": false
              }
            ],
            "explanation": "Son varias personas de tercera persona: «ellos»."
          },
          {
            "id": "tema-02-rep-otros-textos-1",
            "question": "¿Cuál es uno de los conceptos que debes dominar en «Texto informativo y fuentes»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "fuentes",
                "text": "Fuentes",
                "correct": true
              },
              {
                "id": "una-raíz-cuadrada",
                "text": "Una raíz cuadrada",
                "correct": false
              },
              {
                "id": "una-cordillera",
                "text": "Una cordillera",
                "correct": false
              },
              {
                "id": "un-circuito-eléctrico",
                "text": "Un circuito eléctrico",
                "correct": false
              }
            ],
            "explanation": "Un texto informativo comunica datos. Para investigar hay que consultar fuentes adecuadas, comparar información y distinguir autor y procedencia."
          },
          {
            "id": "tema-02-rep-otros-textos-2",
            "question": "¿Qué otro contenido se trabaja en «Texto informativo y fuentes»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "fiabilidad",
                "text": "Fiabilidad",
                "correct": true
              },
              {
                "id": "los-planetas",
                "text": "Los planetas",
                "correct": false
              },
              {
                "id": "los-polígonos",
                "text": "Los polígonos",
                "correct": false
              },
              {
                "id": "la-fotosíntesis",
                "text": "La fotosíntesis",
                "correct": false
              }
            ],
            "explanation": "En esta sección también se trabaja fiabilidad."
          },
          {
            "id": "tema-02-rep-otros-textos-3",
            "question": "¿Qué opción está relacionada con «Texto informativo y fuentes»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "información",
                "text": "Información",
                "correct": true
              },
              {
                "id": "división-decimal",
                "text": "División decimal",
                "correct": false
              },
              {
                "id": "escala-cartográfica",
                "text": "Escala cartográfica",
                "correct": false
              },
              {
                "id": "cadena-alimentaria",
                "text": "Cadena alimentaria",
                "correct": false
              }
            ],
            "explanation": "Información forma parte de esta sección."
          }
        ]
      }
    ]
  },
  {
    "id": "tema-03",
    "order": 3,
    "title": "¿Cuánto cuesta?",
    "description": "Unidad 3: teoría, ejemplos, práctica y repaso paso a paso.",
    "emoji": "💶",
    "sections": [
      {
        "id": "situacion",
        "title": "Hablar y escuchar: comprar y elegir",
        "subtitle": "Argumentar decisiones de compra",
        "kind": "communication",
        "emoji": "🗣️",
        "theory": [
          {
            "type": "text",
            "title": "Actividad de comunicación oral",
            "text": "Argumentar decisiones de compra."
          },
          {
            "type": "list",
            "title": "Qué debes practicar",
            "items": [
              "Escuchar antes de responder.",
              "Hablar con claridad y mantener el tema.",
              "Respetar el turno de palabra.",
              "Explicar opiniones con razones cuando sea necesario."
            ]
          },
          {
            "type": "important",
            "title": "Se practica hablando y escuchando",
            "text": "No se evalúa con preguntas tipo test en el repaso teórico."
          }
        ],
        "questions": []
      },
      {
        "id": "prefijos",
        "title": "Los prefijos",
        "subtitle": "Formar palabras añadiendo elementos delante",
        "kind": "vocabulary",
        "emoji": "🧩",
        "theory": [
          {
            "type": "text",
            "title": "Lo que vas a aprender",
            "text": "Formar palabras añadiendo elementos delante."
          },
          {
            "type": "text",
            "title": "Explicación",
            "text": "Los prefijos se colocan delante de una palabra para modificar su significado: re- en rehacer o des- en desorden."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Palabra base",
              "Prefijo",
              "Palabra derivada"
            ]
          },
          {
            "type": "example",
            "title": "Aprende con ejemplos",
            "text": "Busca o inventa un ejemplo relacionado con palabra base. Después explícalo con tus propias palabras."
          },
          {
            "type": "tip",
            "title": "Truco Palabraria",
            "text": "No memorices solo la definición: identifica la pista que te permite reconocer el concepto y úsala en un ejemplo nuevo."
          }
        ],
        "questions": [
          {
            "id": "prefijos-1",
            "question": "¿Cuál es uno de los conceptos que debes dominar en «Los prefijos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "palabra-base",
                "text": "Palabra base",
                "correct": true
              },
              {
                "id": "una-raíz-cuadrada",
                "text": "Una raíz cuadrada",
                "correct": false
              },
              {
                "id": "una-cordillera",
                "text": "Una cordillera",
                "correct": false
              },
              {
                "id": "un-circuito-eléctrico",
                "text": "Un circuito eléctrico",
                "correct": false
              }
            ],
            "explanation": "Los prefijos se colocan delante de una palabra para modificar su significado: re- en rehacer o des- en desorden."
          },
          {
            "id": "prefijos-2",
            "question": "¿Qué otro contenido se trabaja en «Los prefijos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "prefijo",
                "text": "Prefijo",
                "correct": true
              },
              {
                "id": "los-planetas",
                "text": "Los planetas",
                "correct": false
              },
              {
                "id": "los-polígonos",
                "text": "Los polígonos",
                "correct": false
              },
              {
                "id": "la-fotosíntesis",
                "text": "La fotosíntesis",
                "correct": false
              }
            ],
            "explanation": "En esta sección también se trabaja prefijo."
          },
          {
            "id": "prefijos-3",
            "question": "¿Qué opción está relacionada con «Los prefijos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "palabra-derivada",
                "text": "Palabra derivada",
                "correct": true
              },
              {
                "id": "división-decimal",
                "text": "División decimal",
                "correct": false
              },
              {
                "id": "escala-cartográfica",
                "text": "Escala cartográfica",
                "correct": false
              },
              {
                "id": "cadena-alimentaria",
                "text": "Cadena alimentaria",
                "correct": false
              }
            ],
            "explanation": "Palabra derivada forma parte de esta sección."
          },
          {
            "id": "prefijos-4",
            "question": "¿Cuál es el objetivo de «Los prefijos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "formar-palabras-añadiend",
                "text": "Formar palabras añadiendo elementos delante",
                "correct": true
              },
              {
                "id": "resolver-problemas-numér",
                "text": "Resolver problemas numéricos",
                "correct": false
              },
              {
                "id": "estudiar-accidentes-geog",
                "text": "Estudiar accidentes geográficos",
                "correct": false
              },
              {
                "id": "clasificar-animales",
                "text": "Clasificar animales",
                "correct": false
              }
            ],
            "explanation": "Los prefijos se colocan delante de una palabra para modificar su significado: re- en rehacer o des- en desorden."
          },
          {
            "id": "prefijos-5",
            "question": "¿Qué estrategia demuestra que has comprendido un contenido de Lengua?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "reconocerlo-y-aplicarlo-",
                "text": "Reconocerlo y aplicarlo en ejemplos nuevos",
                "correct": true
              },
              {
                "id": "repetir-sin-entender",
                "text": "Repetir sin entender",
                "correct": false
              },
              {
                "id": "elegir-al-azar",
                "text": "Elegir al azar",
                "correct": false
              },
              {
                "id": "no-revisar-errores",
                "text": "No revisar errores",
                "correct": false
              }
            ],
            "explanation": "Comprender significa poder aplicar lo aprendido."
          }
        ]
      },
      {
        "id": "llanas",
        "title": "Acentuación de palabras llanas",
        "subtitle": "Aplicar la regla de tilde",
        "kind": "spelling",
        "emoji": "✏️",
        "theory": [
          {
            "type": "text",
            "title": "Lo que vas a aprender",
            "text": "Aplicar la regla de tilde."
          },
          {
            "type": "text",
            "title": "Explicación",
            "text": "Las llanas llevan tilde cuando NO terminan en vocal, n o s: lápiz, césped. Casa o joven no llevan tilde."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Penúltima sílaba",
              "Regla inversa",
              "Tilde"
            ]
          },
          {
            "type": "example",
            "title": "Aprende con ejemplos",
            "text": "Busca o inventa un ejemplo relacionado con penúltima sílaba. Después explícalo con tus propias palabras."
          },
          {
            "type": "tip",
            "title": "Truco Palabraria",
            "text": "No memorices solo la definición: identifica la pista que te permite reconocer el concepto y úsala en un ejemplo nuevo."
          }
        ],
        "questions": [
          {
            "id": "t3-ll-1",
            "question": "¿Qué palabra llana debe llevar tilde?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "césped",
                "text": "césped",
                "correct": true
              },
              {
                "id": "casa",
                "text": "casa",
                "correct": false
              },
              {
                "id": "joven",
                "text": "joven",
                "correct": false
              },
              {
                "id": "mesa",
                "text": "mesa",
                "correct": false
              }
            ],
            "explanation": "CÉS-ped es llana y no termina en vocal, n o s."
          },
          {
            "id": "t3-ll-2",
            "question": "¿Por qué «lápiz» lleva tilde?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "es-llana-y-termina-en-co",
                "text": "Es llana y termina en consonante distinta de n o s",
                "correct": true
              },
              {
                "id": "es-aguda",
                "text": "Es aguda",
                "correct": false
              },
              {
                "id": "todas-las-llanas-llevan-",
                "text": "Todas las llanas llevan tilde",
                "correct": false
              },
              {
                "id": "termina-en-vocal",
                "text": "Termina en vocal",
                "correct": false
              }
            ],
            "explanation": "LÁ-piz es llana y termina en z."
          },
          {
            "id": "t3-ll-3",
            "question": "¿Cuál está escrita correctamente?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "árbol",
                "text": "árbol",
                "correct": true
              },
              {
                "id": "arbol",
                "text": "arbol",
                "correct": false
              },
              {
                "id": "cása",
                "text": "cása",
                "correct": false
              },
              {
                "id": "jóven",
                "text": "jóven",
                "correct": false
              }
            ],
            "explanation": "ÁR-bol es llana y termina en l, por eso lleva tilde."
          },
          {
            "id": "t3-ll-4",
            "question": "¿Qué palabra llana NO lleva tilde?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "ventana",
                "text": "ventana",
                "correct": true
              },
              {
                "id": "fácil",
                "text": "fácil",
                "correct": false
              },
              {
                "id": "mármol",
                "text": "mármol",
                "correct": false
              },
              {
                "id": "césped",
                "text": "césped",
                "correct": false
              }
            ],
            "explanation": "ven-TA-na termina en vocal, por lo que no lleva tilde."
          },
          {
            "id": "t3-ll-5",
            "question": "Las palabras llanas tienen la sílaba tónica…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "en-la-penúltima-sílaba",
                "text": "en la penúltima sílaba",
                "correct": true
              },
              {
                "id": "en-la-última",
                "text": "en la última",
                "correct": false
              },
              {
                "id": "en-la-antepenúltima",
                "text": "en la antepenúltima",
                "correct": false
              },
              {
                "id": "siempre-al-principio",
                "text": "siempre al principio",
                "correct": false
              }
            ],
            "explanation": "La penúltima sílaba es la que se pronuncia con más intensidad."
          }
        ]
      },
      {
        "id": "demostrativos",
        "title": "Los demostrativos",
        "subtitle": "Indicar distancia",
        "kind": "grammar",
        "emoji": "🔤",
        "theory": [
          {
            "type": "text",
            "title": "Lo que vas a aprender",
            "text": "Indicar distancia."
          },
          {
            "type": "text",
            "title": "Explicación",
            "text": "Los demostrativos acompañan o sustituyen al sustantivo y expresan cercanía, distancia media o lejanía: este, ese, aquel y sus formas."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Cercanía",
              "Distancia media",
              "Lejanía"
            ]
          },
          {
            "type": "example",
            "title": "Aprende con ejemplos",
            "text": "Busca o inventa un ejemplo relacionado con cercanía. Después explícalo con tus propias palabras."
          },
          {
            "type": "tip",
            "title": "Truco Palabraria",
            "text": "No memorices solo la definición: identifica la pista que te permite reconocer el concepto y úsala en un ejemplo nuevo."
          }
        ],
        "questions": [
          {
            "id": "t3-de-1",
            "question": "Si tengo un libro en la mano, ¿qué demostrativo expresa cercanía?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "este-libro",
                "text": "este libro",
                "correct": true
              },
              {
                "id": "ese-libro",
                "text": "ese libro",
                "correct": false
              },
              {
                "id": "aquel-libro",
                "text": "aquel libro",
                "correct": false
              },
              {
                "id": "nuestro-libro",
                "text": "nuestro libro",
                "correct": false
              }
            ],
            "explanation": "«Este» indica cercanía respecto a quien habla."
          },
          {
            "id": "t3-de-2",
            "question": "¿Qué demostrativo expresa lejanía?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "aquella-montaña",
                "text": "aquella montaña",
                "correct": true
              },
              {
                "id": "esta-montaña",
                "text": "esta montaña",
                "correct": false
              },
              {
                "id": "esa-montaña",
                "text": "esa montaña",
                "correct": false
              },
              {
                "id": "mi-montaña",
                "text": "mi montaña",
                "correct": false
              }
            ],
            "explanation": "«Aquel/aquella» expresa lejanía."
          },
          {
            "id": "t3-de-3",
            "question": "Completa: «___ zapatos que llevas puestos son nuevos».",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "esos",
                "text": "Esos",
                "correct": true
              },
              {
                "id": "aquellos",
                "text": "Aquellos",
                "correct": false
              },
              {
                "id": "estas",
                "text": "Estas",
                "correct": false
              },
              {
                "id": "míos",
                "text": "Míos",
                "correct": false
              }
            ],
            "explanation": "«Esos» concuerda con «zapatos» y puede indicar distancia respecto a quien habla."
          },
          {
            "id": "t3-de-4",
            "question": "¿Cuál NO es un demostrativo?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "nuestro",
                "text": "nuestro",
                "correct": true
              },
              {
                "id": "este",
                "text": "este",
                "correct": false
              },
              {
                "id": "esa",
                "text": "esa",
                "correct": false
              },
              {
                "id": "aquellas",
                "text": "aquellas",
                "correct": false
              }
            ],
            "explanation": "«Nuestro» es posesivo."
          },
          {
            "id": "t3-de-5",
            "question": "Este, ese y aquel expresan principalmente…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "distancia",
                "text": "distancia",
                "correct": true
              },
              {
                "id": "cantidad",
                "text": "cantidad",
                "correct": false
              },
              {
                "id": "acción",
                "text": "acción",
                "correct": false
              },
              {
                "id": "tiempo-verbal",
                "text": "tiempo verbal",
                "correct": false
              }
            ],
            "explanation": "Los demostrativos sitúan algo según su distancia."
          }
        ]
      },
      {
        "id": "literatura",
        "title": "Las obras narrativas",
        "subtitle": "Reconocer narrador, personajes, acción, lugar y tiempo",
        "kind": "literature",
        "emoji": "📚",
        "theory": [
          {
            "type": "text",
            "title": "Lo que vas a aprender",
            "text": "Reconocer narrador, personajes, acción, lugar y tiempo."
          },
          {
            "type": "text",
            "title": "Explicación",
            "text": "Las narraciones cuentan hechos protagonizados por personajes. Un narrador relata una acción situada en un lugar y un tiempo."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Narrador",
              "Personajes",
              "Acción",
              "Lugar y tiempo"
            ]
          },
          {
            "type": "example",
            "title": "Aprende con ejemplos",
            "text": "Busca o inventa un ejemplo relacionado con narrador. Después explícalo con tus propias palabras."
          },
          {
            "type": "tip",
            "title": "Truco Palabraria",
            "text": "No memorices solo la definición: identifica la pista que te permite reconocer el concepto y úsala en un ejemplo nuevo."
          }
        ],
        "questions": [
          {
            "id": "literatura-1",
            "question": "¿Qué concepto pertenece a «Las obras narrativas»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "narrador",
                "text": "Narrador",
                "correct": true
              },
              {
                "id": "una-fracción",
                "text": "una fracción",
                "correct": false
              },
              {
                "id": "un-ecosistema",
                "text": "un ecosistema",
                "correct": false
              },
              {
                "id": "una-unidad-de-masa",
                "text": "una unidad de masa",
                "correct": false
              }
            ],
            "explanation": "Las narraciones cuentan hechos protagonizados por personajes. Un narrador relata una acción situada en un lugar y un tiempo."
          },
          {
            "id": "literatura-2",
            "question": "¿Cuál es otra idea importante de «Las obras narrativas»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "personajes",
                "text": "Personajes",
                "correct": true
              },
              {
                "id": "multiplicación",
                "text": "multiplicación",
                "correct": false
              },
              {
                "id": "kilómetro",
                "text": "kilómetro",
                "correct": false
              },
              {
                "id": "continente",
                "text": "continente",
                "correct": false
              }
            ],
            "explanation": "También trabajamos personajes."
          },
          {
            "id": "literatura-3",
            "question": "En literatura, además de entender qué ocurre, conviene fijarse en…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "cómo-está-usado-el-lengu",
                "text": "cómo está usado el lenguaje",
                "correct": true
              },
              {
                "id": "solo-el-número-de-página",
                "text": "solo el número de páginas",
                "correct": false
              },
              {
                "id": "el-precio-del-libro",
                "text": "el precio del libro",
                "correct": false
              },
              {
                "id": "el-tamaño-de-la-portada",
                "text": "el tamaño de la portada",
                "correct": false
              }
            ],
            "explanation": "La forma de usar el lenguaje es fundamental en los textos literarios."
          },
          {
            "id": "literatura-4",
            "question": "¿Qué deberías ser capaz de reconocer después de estudiar esta sección?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "acción",
                "text": "Acción",
                "correct": true
              },
              {
                "id": "una-operación",
                "text": "una operación",
                "correct": false
              },
              {
                "id": "una-coordenada",
                "text": "una coordenada",
                "correct": false
              },
              {
                "id": "una-unidad-de-volumen",
                "text": "una unidad de volumen",
                "correct": false
              }
            ],
            "explanation": "Uno de los aprendizajes previstos es reconocer acción."
          },
          {
            "id": "literatura-5",
            "question": "¿Cuál es una buena forma de demostrar comprensión literaria?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "identificar-el-recurso-o",
                "text": "Identificar el recurso o elemento y explicar su efecto",
                "correct": true
              },
              {
                "id": "copiar-sin-explicar",
                "text": "copiar sin explicar",
                "correct": false
              },
              {
                "id": "contar-letras",
                "text": "contar letras",
                "correct": false
              },
              {
                "id": "responder-sin-leer",
                "text": "responder sin leer",
                "correct": false
              }
            ],
            "explanation": "Hay que reconocer los elementos y comprender para qué sirven."
          }
        ]
      },
      {
        "id": "escritura",
        "title": "Anuncios para un tablón",
        "subtitle": "Redactar un anuncio útil",
        "kind": "writing",
        "emoji": "📝",
        "theory": [
          {
            "type": "text",
            "title": "Actividad de expresión escrita",
            "text": "Redactar un anuncio útil."
          },
          {
            "type": "list",
            "title": "Cómo hacer la actividad",
            "items": [
              "Piensa qué quieres comunicar y a quién va dirigido.",
              "Haz un pequeño borrador y ordena las ideas.",
              "Escribe el texto siguiendo las características trabajadas en la unidad.",
              "Relee lo escrito y corrige ortografía, puntuación y repeticiones.",
              "Comprueba que el resultado cumple el objetivo de la actividad."
            ]
          },
          {
            "type": "important",
            "title": "Aquí no hay examen tipo test",
            "text": "Esta sección se aprende escribiendo. El objetivo es producir un texto, revisarlo y mejorarlo."
          }
        ],
        "questions": []
      },
      {
        "id": "repaso",
        "title": "Comprueba tu progreso",
        "subtitle": "Consolidar el tema",
        "kind": "review",
        "emoji": "🏆",
        "theory": [
          {
            "type": "text",
            "title": "Repaso de la teoría de la unidad",
            "text": "Comprueba lo aprendido en los contenidos teóricos de este tema."
          },
          {
            "type": "important",
            "title": "Qué se repasa",
            "text": "Vocabulario, ortografía, gramática y, cuando corresponde, literatura o alfabetización mediática."
          },
          {
            "type": "tip",
            "title": "Comprensión lectora",
            "text": "Las lecturas y sus actividades de comprensión se trabajan en clase y no forman parte de Palabraria."
          }
        ],
        "questions": [
          {
            "id": "tema-03-rep-prefijos-1",
            "question": "¿Cuál es uno de los conceptos que debes dominar en «Los prefijos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "palabra-base",
                "text": "Palabra base",
                "correct": true
              },
              {
                "id": "una-raíz-cuadrada",
                "text": "Una raíz cuadrada",
                "correct": false
              },
              {
                "id": "una-cordillera",
                "text": "Una cordillera",
                "correct": false
              },
              {
                "id": "un-circuito-eléctrico",
                "text": "Un circuito eléctrico",
                "correct": false
              }
            ],
            "explanation": "Los prefijos se colocan delante de una palabra para modificar su significado: re- en rehacer o des- en desorden."
          },
          {
            "id": "tema-03-rep-prefijos-2",
            "question": "¿Qué otro contenido se trabaja en «Los prefijos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "prefijo",
                "text": "Prefijo",
                "correct": true
              },
              {
                "id": "los-planetas",
                "text": "Los planetas",
                "correct": false
              },
              {
                "id": "los-polígonos",
                "text": "Los polígonos",
                "correct": false
              },
              {
                "id": "la-fotosíntesis",
                "text": "La fotosíntesis",
                "correct": false
              }
            ],
            "explanation": "En esta sección también se trabaja prefijo."
          },
          {
            "id": "tema-03-rep-prefijos-3",
            "question": "¿Qué opción está relacionada con «Los prefijos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "palabra-derivada",
                "text": "Palabra derivada",
                "correct": true
              },
              {
                "id": "división-decimal",
                "text": "División decimal",
                "correct": false
              },
              {
                "id": "escala-cartográfica",
                "text": "Escala cartográfica",
                "correct": false
              },
              {
                "id": "cadena-alimentaria",
                "text": "Cadena alimentaria",
                "correct": false
              }
            ],
            "explanation": "Palabra derivada forma parte de esta sección."
          },
          {
            "id": "tema-03-rep-llanas-1",
            "question": "¿Qué palabra llana debe llevar tilde?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "césped",
                "text": "césped",
                "correct": true
              },
              {
                "id": "casa",
                "text": "casa",
                "correct": false
              },
              {
                "id": "joven",
                "text": "joven",
                "correct": false
              },
              {
                "id": "mesa",
                "text": "mesa",
                "correct": false
              }
            ],
            "explanation": "CÉS-ped es llana y no termina en vocal, n o s."
          },
          {
            "id": "tema-03-rep-llanas-2",
            "question": "¿Por qué «lápiz» lleva tilde?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "es-llana-y-termina-en-co",
                "text": "Es llana y termina en consonante distinta de n o s",
                "correct": true
              },
              {
                "id": "es-aguda",
                "text": "Es aguda",
                "correct": false
              },
              {
                "id": "todas-las-llanas-llevan-",
                "text": "Todas las llanas llevan tilde",
                "correct": false
              },
              {
                "id": "termina-en-vocal",
                "text": "Termina en vocal",
                "correct": false
              }
            ],
            "explanation": "LÁ-piz es llana y termina en z."
          },
          {
            "id": "tema-03-rep-llanas-3",
            "question": "¿Cuál está escrita correctamente?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "árbol",
                "text": "árbol",
                "correct": true
              },
              {
                "id": "arbol",
                "text": "arbol",
                "correct": false
              },
              {
                "id": "cása",
                "text": "cása",
                "correct": false
              },
              {
                "id": "jóven",
                "text": "jóven",
                "correct": false
              }
            ],
            "explanation": "ÁR-bol es llana y termina en l, por eso lleva tilde."
          },
          {
            "id": "tema-03-rep-demostrativos-1",
            "question": "Si tengo un libro en la mano, ¿qué demostrativo expresa cercanía?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "este-libro",
                "text": "este libro",
                "correct": true
              },
              {
                "id": "ese-libro",
                "text": "ese libro",
                "correct": false
              },
              {
                "id": "aquel-libro",
                "text": "aquel libro",
                "correct": false
              },
              {
                "id": "nuestro-libro",
                "text": "nuestro libro",
                "correct": false
              }
            ],
            "explanation": "«Este» indica cercanía respecto a quien habla."
          },
          {
            "id": "tema-03-rep-demostrativos-2",
            "question": "¿Qué demostrativo expresa lejanía?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "aquella-montaña",
                "text": "aquella montaña",
                "correct": true
              },
              {
                "id": "esta-montaña",
                "text": "esta montaña",
                "correct": false
              },
              {
                "id": "esa-montaña",
                "text": "esa montaña",
                "correct": false
              },
              {
                "id": "mi-montaña",
                "text": "mi montaña",
                "correct": false
              }
            ],
            "explanation": "«Aquel/aquella» expresa lejanía."
          },
          {
            "id": "tema-03-rep-demostrativos-3",
            "question": "Completa: «___ zapatos que llevas puestos son nuevos».",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "esos",
                "text": "Esos",
                "correct": true
              },
              {
                "id": "aquellos",
                "text": "Aquellos",
                "correct": false
              },
              {
                "id": "estas",
                "text": "Estas",
                "correct": false
              },
              {
                "id": "míos",
                "text": "Míos",
                "correct": false
              }
            ],
            "explanation": "«Esos» concuerda con «zapatos» y puede indicar distancia respecto a quien habla."
          },
          {
            "id": "tema-03-rep-literatura-1",
            "question": "¿Qué concepto pertenece a «Las obras narrativas»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "narrador",
                "text": "Narrador",
                "correct": true
              },
              {
                "id": "una-fracción",
                "text": "una fracción",
                "correct": false
              },
              {
                "id": "un-ecosistema",
                "text": "un ecosistema",
                "correct": false
              },
              {
                "id": "una-unidad-de-masa",
                "text": "una unidad de masa",
                "correct": false
              }
            ],
            "explanation": "Las narraciones cuentan hechos protagonizados por personajes. Un narrador relata una acción situada en un lugar y un tiempo."
          },
          {
            "id": "tema-03-rep-literatura-2",
            "question": "¿Cuál es otra idea importante de «Las obras narrativas»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "personajes",
                "text": "Personajes",
                "correct": true
              },
              {
                "id": "multiplicación",
                "text": "multiplicación",
                "correct": false
              },
              {
                "id": "kilómetro",
                "text": "kilómetro",
                "correct": false
              },
              {
                "id": "continente",
                "text": "continente",
                "correct": false
              }
            ],
            "explanation": "También trabajamos personajes."
          },
          {
            "id": "tema-03-rep-literatura-3",
            "question": "En literatura, además de entender qué ocurre, conviene fijarse en…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "cómo-está-usado-el-lengu",
                "text": "cómo está usado el lenguaje",
                "correct": true
              },
              {
                "id": "solo-el-número-de-página",
                "text": "solo el número de páginas",
                "correct": false
              },
              {
                "id": "el-precio-del-libro",
                "text": "el precio del libro",
                "correct": false
              },
              {
                "id": "el-tamaño-de-la-portada",
                "text": "el tamaño de la portada",
                "correct": false
              }
            ],
            "explanation": "La forma de usar el lenguaje es fundamental en los textos literarios."
          }
        ]
      }
    ]
  },
  {
    "id": "tema-04",
    "order": 4,
    "title": "¿Adónde vamos?",
    "description": "Unidad 4: teoría, ejemplos, práctica y repaso paso a paso.",
    "emoji": "🧭",
    "sections": [
      {
        "id": "situacion",
        "title": "Hablar y escuchar: viajes",
        "subtitle": "Planificar y explicar un viaje",
        "kind": "communication",
        "emoji": "🗣️",
        "theory": [
          {
            "type": "text",
            "title": "Actividad de comunicación oral",
            "text": "Planificar y explicar un viaje."
          },
          {
            "type": "list",
            "title": "Qué debes practicar",
            "items": [
              "Escuchar antes de responder.",
              "Hablar con claridad y mantener el tema.",
              "Respetar el turno de palabra.",
              "Explicar opiniones con razones cuando sea necesario."
            ]
          },
          {
            "type": "important",
            "title": "Se practica hablando y escuchando",
            "text": "No se evalúa con preguntas tipo test en el repaso teórico."
          }
        ],
        "questions": []
      },
      {
        "id": "prefijos-negacion",
        "title": "Prefijos de negación",
        "subtitle": "Formar palabras con significado contrario o negativo",
        "kind": "vocabulary",
        "emoji": "🧩",
        "theory": [
          {
            "type": "text",
            "title": "Lo que vas a aprender",
            "text": "Formar palabras con significado contrario o negativo."
          },
          {
            "type": "text",
            "title": "Explicación",
            "text": "Prefijos como in-, im-, des- o a- pueden aportar negación u oposición: incapaz, imposible, deshacer."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "In-/im-",
              "Des-",
              "Significado contrario"
            ]
          },
          {
            "type": "example",
            "title": "Aprende con ejemplos",
            "text": "Busca o inventa un ejemplo relacionado con in-/im-. Después explícalo con tus propias palabras."
          },
          {
            "type": "tip",
            "title": "Truco Palabraria",
            "text": "No memorices solo la definición: identifica la pista que te permite reconocer el concepto y úsala en un ejemplo nuevo."
          }
        ],
        "questions": [
          {
            "id": "prefijos-negacion-1",
            "question": "¿Cuál es uno de los conceptos que debes dominar en «Prefijos de negación»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "in-im",
                "text": "In-/im-",
                "correct": true
              },
              {
                "id": "una-raíz-cuadrada",
                "text": "Una raíz cuadrada",
                "correct": false
              },
              {
                "id": "una-cordillera",
                "text": "Una cordillera",
                "correct": false
              },
              {
                "id": "un-circuito-eléctrico",
                "text": "Un circuito eléctrico",
                "correct": false
              }
            ],
            "explanation": "Prefijos como in-, im-, des- o a- pueden aportar negación u oposición: incapaz, imposible, deshacer."
          },
          {
            "id": "prefijos-negacion-2",
            "question": "¿Qué otro contenido se trabaja en «Prefijos de negación»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "des",
                "text": "Des-",
                "correct": true
              },
              {
                "id": "los-planetas",
                "text": "Los planetas",
                "correct": false
              },
              {
                "id": "los-polígonos",
                "text": "Los polígonos",
                "correct": false
              },
              {
                "id": "la-fotosíntesis",
                "text": "La fotosíntesis",
                "correct": false
              }
            ],
            "explanation": "En esta sección también se trabaja des-."
          },
          {
            "id": "prefijos-negacion-3",
            "question": "¿Qué opción está relacionada con «Prefijos de negación»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "significado-contrario",
                "text": "Significado contrario",
                "correct": true
              },
              {
                "id": "división-decimal",
                "text": "División decimal",
                "correct": false
              },
              {
                "id": "escala-cartográfica",
                "text": "Escala cartográfica",
                "correct": false
              },
              {
                "id": "cadena-alimentaria",
                "text": "Cadena alimentaria",
                "correct": false
              }
            ],
            "explanation": "Significado contrario forma parte de esta sección."
          },
          {
            "id": "prefijos-negacion-4",
            "question": "¿Cuál es el objetivo de «Prefijos de negación»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "formar-palabras-con-sign",
                "text": "Formar palabras con significado contrario o negativo",
                "correct": true
              },
              {
                "id": "resolver-problemas-numér",
                "text": "Resolver problemas numéricos",
                "correct": false
              },
              {
                "id": "estudiar-accidentes-geog",
                "text": "Estudiar accidentes geográficos",
                "correct": false
              },
              {
                "id": "clasificar-animales",
                "text": "Clasificar animales",
                "correct": false
              }
            ],
            "explanation": "Prefijos como in-, im-, des- o a- pueden aportar negación u oposición: incapaz, imposible, deshacer."
          },
          {
            "id": "prefijos-negacion-5",
            "question": "¿Qué estrategia demuestra que has comprendido un contenido de Lengua?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "reconocerlo-y-aplicarlo-",
                "text": "Reconocerlo y aplicarlo en ejemplos nuevos",
                "correct": true
              },
              {
                "id": "repetir-sin-entender",
                "text": "Repetir sin entender",
                "correct": false
              },
              {
                "id": "elegir-al-azar",
                "text": "Elegir al azar",
                "correct": false
              },
              {
                "id": "no-revisar-errores",
                "text": "No revisar errores",
                "correct": false
              }
            ],
            "explanation": "Comprender significa poder aplicar lo aprendido."
          }
        ]
      },
      {
        "id": "esdrujulas",
        "title": "Acentuación de esdrújulas",
        "subtitle": "Tildar correctamente",
        "kind": "spelling",
        "emoji": "✏️",
        "theory": [
          {
            "type": "text",
            "title": "Lo que vas a aprender",
            "text": "Tildar correctamente."
          },
          {
            "type": "text",
            "title": "Explicación",
            "text": "Todas las palabras esdrújulas llevan tilde: brújula, fantástico, teléfono."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Antepenúltima",
              "Siempre tilde",
              "Acentuación de esdrújulas"
            ]
          },
          {
            "type": "example",
            "title": "Aprende con ejemplos",
            "text": "Busca o inventa un ejemplo relacionado con antepenúltima. Después explícalo con tus propias palabras."
          },
          {
            "type": "tip",
            "title": "Truco Palabraria",
            "text": "No memorices solo la definición: identifica la pista que te permite reconocer el concepto y úsala en un ejemplo nuevo."
          }
        ],
        "questions": [
          {
            "id": "t4-es-1",
            "question": "¿Cuál es una palabra esdrújula?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "brújula",
                "text": "brújula",
                "correct": true
              },
              {
                "id": "reloj",
                "text": "reloj",
                "correct": false
              },
              {
                "id": "camino",
                "text": "camino",
                "correct": false
              },
              {
                "id": "pared",
                "text": "pared",
                "correct": false
              }
            ],
            "explanation": "BRÚ-ju-la tiene la sílaba tónica en la antepenúltima."
          },
          {
            "id": "t4-es-2",
            "question": "¿Qué regla cumplen las palabras esdrújulas?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "siempre-llevan-tilde",
                "text": "Siempre llevan tilde",
                "correct": true
              },
              {
                "id": "nunca-llevan-tilde",
                "text": "Nunca llevan tilde",
                "correct": false
              },
              {
                "id": "solo-llevan-tilde-si-ter",
                "text": "Solo llevan tilde si terminan en n",
                "correct": false
              },
              {
                "id": "solo-llevan-tilde-si-ter",
                "text": "Solo llevan tilde si terminan en vocal",
                "correct": false
              }
            ],
            "explanation": "Todas las palabras esdrújulas llevan tilde."
          },
          {
            "id": "t4-es-3",
            "question": "¿Cuál está escrita correctamente?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "teléfono",
                "text": "teléfono",
                "correct": true
              },
              {
                "id": "telefono",
                "text": "telefono",
                "correct": false
              },
              {
                "id": "teléfonó",
                "text": "teléfonó",
                "correct": false
              },
              {
                "id": "télefono",
                "text": "télefono",
                "correct": false
              }
            ],
            "explanation": "te-LÉ-fo-no es esdrújula y lleva tilde en la vocal de su sílaba tónica."
          },
          {
            "id": "t4-es-4",
            "question": "¿Dónde está la sílaba tónica de «pájaro»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "pá",
                "text": "pá",
                "correct": true
              },
              {
                "id": "ja",
                "text": "ja",
                "correct": false
              },
              {
                "id": "ro",
                "text": "ro",
                "correct": false
              },
              {
                "id": "aro",
                "text": "aro",
                "correct": false
              }
            ],
            "explanation": "PÁ-ja-ro tiene la fuerza en la antepenúltima sílaba."
          },
          {
            "id": "t4-es-5",
            "question": "¿Qué palabra NO es esdrújula?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "camión",
                "text": "camión",
                "correct": true
              },
              {
                "id": "música",
                "text": "música",
                "correct": false
              },
              {
                "id": "médico",
                "text": "médico",
                "correct": false
              },
              {
                "id": "sábado",
                "text": "sábado",
                "correct": false
              }
            ],
            "explanation": "ca-MIÓN es aguda; las otras tres son esdrújulas."
          }
        ]
      },
      {
        "id": "posesivos",
        "title": "Los posesivos",
        "subtitle": "Expresar pertenencia",
        "kind": "grammar",
        "emoji": "🔤",
        "theory": [
          {
            "type": "text",
            "title": "Lo que vas a aprender",
            "text": "Expresar pertenencia."
          },
          {
            "type": "text",
            "title": "Explicación",
            "text": "Los posesivos indican a quién pertenece algo: mi, tu, su, nuestro, vuestra... Concuerdan cuando corresponde con el sustantivo."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Poseedor",
              "Pertenencia",
              "Concordancia"
            ]
          },
          {
            "type": "example",
            "title": "Aprende con ejemplos",
            "text": "Busca o inventa un ejemplo relacionado con poseedor. Después explícalo con tus propias palabras."
          },
          {
            "type": "tip",
            "title": "Truco Palabraria",
            "text": "No memorices solo la definición: identifica la pista que te permite reconocer el concepto y úsala en un ejemplo nuevo."
          }
        ],
        "questions": [
          {
            "id": "t4-po-1",
            "question": "En «mi bicicleta», ¿qué palabra indica pertenencia?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "mi",
                "text": "mi",
                "correct": true
              },
              {
                "id": "bicicleta",
                "text": "bicicleta",
                "correct": false
              },
              {
                "id": "la",
                "text": "la",
                "correct": false
              },
              {
                "id": "una",
                "text": "una",
                "correct": false
              }
            ],
            "explanation": "«Mi» es un posesivo."
          },
          {
            "id": "t4-po-2",
            "question": "¿Cuál es un posesivo?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "nuestro",
                "text": "nuestro",
                "correct": true
              },
              {
                "id": "aquel",
                "text": "aquel",
                "correct": false
              },
              {
                "id": "cinco",
                "text": "cinco",
                "correct": false
              },
              {
                "id": "algunos",
                "text": "algunos",
                "correct": false
              }
            ],
            "explanation": "«Nuestro» expresa pertenencia."
          },
          {
            "id": "t4-po-3",
            "question": "Completa: «Ana y yo hemos terminado ___ trabajo».",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "nuestro",
                "text": "nuestro",
                "correct": true
              },
              {
                "id": "vuestro",
                "text": "vuestro",
                "correct": false
              },
              {
                "id": "aquella",
                "text": "aquella",
                "correct": false
              },
              {
                "id": "tres",
                "text": "tres",
                "correct": false
              }
            ],
            "explanation": "El poseedor incluye a quien habla: «nuestro»."
          },
          {
            "id": "t4-po-4",
            "question": "¿Qué expresa un posesivo?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "a-quién-pertenece-algo",
                "text": "A quién pertenece algo",
                "correct": true
              },
              {
                "id": "la-distancia",
                "text": "La distancia",
                "correct": false
              },
              {
                "id": "una-acción",
                "text": "Una acción",
                "correct": false
              },
              {
                "id": "el-lugar",
                "text": "El lugar",
                "correct": false
              }
            ],
            "explanation": "Los posesivos relacionan algo con su poseedor."
          },
          {
            "id": "t4-po-5",
            "question": "¿Qué opción concuerda con «casas»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "nuestras-casas",
                "text": "nuestras casas",
                "correct": true
              },
              {
                "id": "nuestro-casas",
                "text": "nuestro casas",
                "correct": false
              },
              {
                "id": "nuestra-casas",
                "text": "nuestra casas",
                "correct": false
              },
              {
                "id": "nuestros-casas",
                "text": "nuestros casas",
                "correct": false
              }
            ],
            "explanation": "El posesivo concuerda en femenino plural con «casas»."
          }
        ]
      },
      {
        "id": "web",
        "title": "Página web y enlaces",
        "subtitle": "Navegar y comprender enlaces",
        "kind": "media",
        "emoji": "🌐",
        "theory": [
          {
            "type": "text",
            "title": "Lo que vas a aprender",
            "text": "Navegar y comprender enlaces."
          },
          {
            "type": "text",
            "title": "Explicación",
            "text": "Una página web combina textos y otros recursos. Los enlaces permiten saltar a otras secciones o páginas; conviene comprobar adónde llevan."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Web",
              "Hipervínculo",
              "Navegación segura"
            ]
          },
          {
            "type": "example",
            "title": "Aprende con ejemplos",
            "text": "Busca o inventa un ejemplo relacionado con web. Después explícalo con tus propias palabras."
          },
          {
            "type": "tip",
            "title": "Truco Palabraria",
            "text": "No memorices solo la definición: identifica la pista que te permite reconocer el concepto y úsala en un ejemplo nuevo."
          }
        ],
        "questions": [
          {
            "id": "web-1",
            "question": "¿Cuál es uno de los conceptos que debes dominar en «Página web y enlaces»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "web",
                "text": "Web",
                "correct": true
              },
              {
                "id": "una-raíz-cuadrada",
                "text": "Una raíz cuadrada",
                "correct": false
              },
              {
                "id": "una-cordillera",
                "text": "Una cordillera",
                "correct": false
              },
              {
                "id": "un-circuito-eléctrico",
                "text": "Un circuito eléctrico",
                "correct": false
              }
            ],
            "explanation": "Una página web combina textos y otros recursos. Los enlaces permiten saltar a otras secciones o páginas; conviene comprobar adónde llevan."
          },
          {
            "id": "web-2",
            "question": "¿Qué otro contenido se trabaja en «Página web y enlaces»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "hipervínculo",
                "text": "Hipervínculo",
                "correct": true
              },
              {
                "id": "los-planetas",
                "text": "Los planetas",
                "correct": false
              },
              {
                "id": "los-polígonos",
                "text": "Los polígonos",
                "correct": false
              },
              {
                "id": "la-fotosíntesis",
                "text": "La fotosíntesis",
                "correct": false
              }
            ],
            "explanation": "En esta sección también se trabaja hipervínculo."
          },
          {
            "id": "web-3",
            "question": "¿Qué opción está relacionada con «Página web y enlaces»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "navegación-segura",
                "text": "Navegación segura",
                "correct": true
              },
              {
                "id": "división-decimal",
                "text": "División decimal",
                "correct": false
              },
              {
                "id": "escala-cartográfica",
                "text": "Escala cartográfica",
                "correct": false
              },
              {
                "id": "cadena-alimentaria",
                "text": "Cadena alimentaria",
                "correct": false
              }
            ],
            "explanation": "Navegación segura forma parte de esta sección."
          },
          {
            "id": "web-4",
            "question": "¿Cuál es el objetivo de «Página web y enlaces»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "navegar-y-comprender-enl",
                "text": "Navegar y comprender enlaces",
                "correct": true
              },
              {
                "id": "resolver-problemas-numér",
                "text": "Resolver problemas numéricos",
                "correct": false
              },
              {
                "id": "estudiar-accidentes-geog",
                "text": "Estudiar accidentes geográficos",
                "correct": false
              },
              {
                "id": "clasificar-animales",
                "text": "Clasificar animales",
                "correct": false
              }
            ],
            "explanation": "Una página web combina textos y otros recursos. Los enlaces permiten saltar a otras secciones o páginas; conviene comprobar adónde llevan."
          },
          {
            "id": "web-5",
            "question": "¿Qué estrategia demuestra que has comprendido un contenido de Lengua?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "reconocerlo-y-aplicarlo-",
                "text": "Reconocerlo y aplicarlo en ejemplos nuevos",
                "correct": true
              },
              {
                "id": "repetir-sin-entender",
                "text": "Repetir sin entender",
                "correct": false
              },
              {
                "id": "elegir-al-azar",
                "text": "Elegir al azar",
                "correct": false
              },
              {
                "id": "no-revisar-errores",
                "text": "No revisar errores",
                "correct": false
              }
            ],
            "explanation": "Comprender significa poder aplicar lo aprendido."
          }
        ]
      },
      {
        "id": "escritura",
        "title": "Entrada para un blog",
        "subtitle": "Contar una experiencia para lectores",
        "kind": "writing",
        "emoji": "📝",
        "theory": [
          {
            "type": "text",
            "title": "Actividad de expresión escrita",
            "text": "Contar una experiencia para lectores."
          },
          {
            "type": "list",
            "title": "Cómo hacer la actividad",
            "items": [
              "Piensa qué quieres comunicar y a quién va dirigido.",
              "Haz un pequeño borrador y ordena las ideas.",
              "Escribe el texto siguiendo las características trabajadas en la unidad.",
              "Relee lo escrito y corrige ortografía, puntuación y repeticiones.",
              "Comprueba que el resultado cumple el objetivo de la actividad."
            ]
          },
          {
            "type": "important",
            "title": "Aquí no hay examen tipo test",
            "text": "Esta sección se aprende escribiendo. El objetivo es producir un texto, revisarlo y mejorarlo."
          }
        ],
        "questions": []
      },
      {
        "id": "repaso",
        "title": "Comprueba tu progreso",
        "subtitle": "Cerrar el trimestre",
        "kind": "review",
        "emoji": "🏆",
        "theory": [
          {
            "type": "text",
            "title": "Repaso de la teoría de la unidad",
            "text": "Comprueba lo aprendido en los contenidos teóricos de este tema."
          },
          {
            "type": "important",
            "title": "Qué se repasa",
            "text": "Vocabulario, ortografía, gramática y, cuando corresponde, literatura o alfabetización mediática."
          },
          {
            "type": "tip",
            "title": "Comprensión lectora",
            "text": "Las lecturas y sus actividades de comprensión se trabajan en clase y no forman parte de Palabraria."
          }
        ],
        "questions": [
          {
            "id": "tema-04-rep-prefijos-negacion-1",
            "question": "¿Cuál es uno de los conceptos que debes dominar en «Prefijos de negación»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "in-im",
                "text": "In-/im-",
                "correct": true
              },
              {
                "id": "una-raíz-cuadrada",
                "text": "Una raíz cuadrada",
                "correct": false
              },
              {
                "id": "una-cordillera",
                "text": "Una cordillera",
                "correct": false
              },
              {
                "id": "un-circuito-eléctrico",
                "text": "Un circuito eléctrico",
                "correct": false
              }
            ],
            "explanation": "Prefijos como in-, im-, des- o a- pueden aportar negación u oposición: incapaz, imposible, deshacer."
          },
          {
            "id": "tema-04-rep-prefijos-negacion-2",
            "question": "¿Qué otro contenido se trabaja en «Prefijos de negación»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "des",
                "text": "Des-",
                "correct": true
              },
              {
                "id": "los-planetas",
                "text": "Los planetas",
                "correct": false
              },
              {
                "id": "los-polígonos",
                "text": "Los polígonos",
                "correct": false
              },
              {
                "id": "la-fotosíntesis",
                "text": "La fotosíntesis",
                "correct": false
              }
            ],
            "explanation": "En esta sección también se trabaja des-."
          },
          {
            "id": "tema-04-rep-prefijos-negacion-3",
            "question": "¿Qué opción está relacionada con «Prefijos de negación»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "significado-contrario",
                "text": "Significado contrario",
                "correct": true
              },
              {
                "id": "división-decimal",
                "text": "División decimal",
                "correct": false
              },
              {
                "id": "escala-cartográfica",
                "text": "Escala cartográfica",
                "correct": false
              },
              {
                "id": "cadena-alimentaria",
                "text": "Cadena alimentaria",
                "correct": false
              }
            ],
            "explanation": "Significado contrario forma parte de esta sección."
          },
          {
            "id": "tema-04-rep-esdrujulas-1",
            "question": "¿Cuál es una palabra esdrújula?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "brújula",
                "text": "brújula",
                "correct": true
              },
              {
                "id": "reloj",
                "text": "reloj",
                "correct": false
              },
              {
                "id": "camino",
                "text": "camino",
                "correct": false
              },
              {
                "id": "pared",
                "text": "pared",
                "correct": false
              }
            ],
            "explanation": "BRÚ-ju-la tiene la sílaba tónica en la antepenúltima."
          },
          {
            "id": "tema-04-rep-esdrujulas-2",
            "question": "¿Qué regla cumplen las palabras esdrújulas?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "siempre-llevan-tilde",
                "text": "Siempre llevan tilde",
                "correct": true
              },
              {
                "id": "nunca-llevan-tilde",
                "text": "Nunca llevan tilde",
                "correct": false
              },
              {
                "id": "solo-llevan-tilde-si-ter",
                "text": "Solo llevan tilde si terminan en n",
                "correct": false
              },
              {
                "id": "solo-llevan-tilde-si-ter",
                "text": "Solo llevan tilde si terminan en vocal",
                "correct": false
              }
            ],
            "explanation": "Todas las palabras esdrújulas llevan tilde."
          },
          {
            "id": "tema-04-rep-esdrujulas-3",
            "question": "¿Cuál está escrita correctamente?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "teléfono",
                "text": "teléfono",
                "correct": true
              },
              {
                "id": "telefono",
                "text": "telefono",
                "correct": false
              },
              {
                "id": "teléfonó",
                "text": "teléfonó",
                "correct": false
              },
              {
                "id": "télefono",
                "text": "télefono",
                "correct": false
              }
            ],
            "explanation": "te-LÉ-fo-no es esdrújula y lleva tilde en la vocal de su sílaba tónica."
          },
          {
            "id": "tema-04-rep-posesivos-1",
            "question": "En «mi bicicleta», ¿qué palabra indica pertenencia?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "mi",
                "text": "mi",
                "correct": true
              },
              {
                "id": "bicicleta",
                "text": "bicicleta",
                "correct": false
              },
              {
                "id": "la",
                "text": "la",
                "correct": false
              },
              {
                "id": "una",
                "text": "una",
                "correct": false
              }
            ],
            "explanation": "«Mi» es un posesivo."
          },
          {
            "id": "tema-04-rep-posesivos-2",
            "question": "¿Cuál es un posesivo?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "nuestro",
                "text": "nuestro",
                "correct": true
              },
              {
                "id": "aquel",
                "text": "aquel",
                "correct": false
              },
              {
                "id": "cinco",
                "text": "cinco",
                "correct": false
              },
              {
                "id": "algunos",
                "text": "algunos",
                "correct": false
              }
            ],
            "explanation": "«Nuestro» expresa pertenencia."
          },
          {
            "id": "tema-04-rep-posesivos-3",
            "question": "Completa: «Ana y yo hemos terminado ___ trabajo».",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "nuestro",
                "text": "nuestro",
                "correct": true
              },
              {
                "id": "vuestro",
                "text": "vuestro",
                "correct": false
              },
              {
                "id": "aquella",
                "text": "aquella",
                "correct": false
              },
              {
                "id": "tres",
                "text": "tres",
                "correct": false
              }
            ],
            "explanation": "El poseedor incluye a quien habla: «nuestro»."
          },
          {
            "id": "tema-04-rep-web-1",
            "question": "¿Cuál es uno de los conceptos que debes dominar en «Página web y enlaces»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "web",
                "text": "Web",
                "correct": true
              },
              {
                "id": "una-raíz-cuadrada",
                "text": "Una raíz cuadrada",
                "correct": false
              },
              {
                "id": "una-cordillera",
                "text": "Una cordillera",
                "correct": false
              },
              {
                "id": "un-circuito-eléctrico",
                "text": "Un circuito eléctrico",
                "correct": false
              }
            ],
            "explanation": "Una página web combina textos y otros recursos. Los enlaces permiten saltar a otras secciones o páginas; conviene comprobar adónde llevan."
          },
          {
            "id": "tema-04-rep-web-2",
            "question": "¿Qué otro contenido se trabaja en «Página web y enlaces»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "hipervínculo",
                "text": "Hipervínculo",
                "correct": true
              },
              {
                "id": "los-planetas",
                "text": "Los planetas",
                "correct": false
              },
              {
                "id": "los-polígonos",
                "text": "Los polígonos",
                "correct": false
              },
              {
                "id": "la-fotosíntesis",
                "text": "La fotosíntesis",
                "correct": false
              }
            ],
            "explanation": "En esta sección también se trabaja hipervínculo."
          },
          {
            "id": "tema-04-rep-web-3",
            "question": "¿Qué opción está relacionada con «Página web y enlaces»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "navegación-segura",
                "text": "Navegación segura",
                "correct": true
              },
              {
                "id": "división-decimal",
                "text": "División decimal",
                "correct": false
              },
              {
                "id": "escala-cartográfica",
                "text": "Escala cartográfica",
                "correct": false
              },
              {
                "id": "cadena-alimentaria",
                "text": "Cadena alimentaria",
                "correct": false
              }
            ],
            "explanation": "Navegación segura forma parte de esta sección."
          }
        ]
      }
    ]
  },
  {
    "id": "tema-05",
    "order": 5,
    "title": "¿Nos unimos?",
    "description": "Unidad 5: teoría, ejemplos, práctica y repaso paso a paso.",
    "emoji": "🤝",
    "sections": [
      {
        "id": "situacion",
        "title": "Hablar y escuchar: colaborar",
        "subtitle": "Proponer acuerdos y trabajar en grupo",
        "kind": "communication",
        "emoji": "🗣️",
        "theory": [
          {
            "type": "text",
            "title": "Actividad de comunicación oral",
            "text": "Proponer acuerdos y trabajar en grupo."
          },
          {
            "type": "list",
            "title": "Qué debes practicar",
            "items": [
              "Escuchar antes de responder.",
              "Hablar con claridad y mantener el tema.",
              "Respetar el turno de palabra.",
              "Explicar opiniones con razones cuando sea necesario."
            ]
          },
          {
            "type": "important",
            "title": "Se practica hablando y escuchando",
            "text": "No se evalúa con preguntas tipo test en el repaso teórico."
          }
        ],
        "questions": []
      },
      {
        "id": "prefijos-lugar",
        "title": "Prefijos de lugar",
        "subtitle": "Interpretar posición mediante prefijos",
        "kind": "vocabulary",
        "emoji": "🧩",
        "theory": [
          {
            "type": "text",
            "title": "Lo que vas a aprender",
            "text": "Interpretar posición mediante prefijos."
          },
          {
            "type": "text",
            "title": "Explicación",
            "text": "Algunos prefijos expresan lugar o posición, como sub- (debajo), inter- (entre) o sobre- (encima)."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Sub-",
              "Inter-",
              "Sobre-"
            ]
          },
          {
            "type": "example",
            "title": "Aprende con ejemplos",
            "text": "Busca o inventa un ejemplo relacionado con sub-. Después explícalo con tus propias palabras."
          },
          {
            "type": "tip",
            "title": "Truco Palabraria",
            "text": "No memorices solo la definición: identifica la pista que te permite reconocer el concepto y úsala en un ejemplo nuevo."
          }
        ],
        "questions": [
          {
            "id": "prefijos-lugar-1",
            "question": "¿Cuál es uno de los conceptos que debes dominar en «Prefijos de lugar»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "sub",
                "text": "Sub-",
                "correct": true
              },
              {
                "id": "una-raíz-cuadrada",
                "text": "Una raíz cuadrada",
                "correct": false
              },
              {
                "id": "una-cordillera",
                "text": "Una cordillera",
                "correct": false
              },
              {
                "id": "un-circuito-eléctrico",
                "text": "Un circuito eléctrico",
                "correct": false
              }
            ],
            "explanation": "Algunos prefijos expresan lugar o posición, como sub- (debajo), inter- (entre) o sobre- (encima)."
          },
          {
            "id": "prefijos-lugar-2",
            "question": "¿Qué otro contenido se trabaja en «Prefijos de lugar»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "inter",
                "text": "Inter-",
                "correct": true
              },
              {
                "id": "los-planetas",
                "text": "Los planetas",
                "correct": false
              },
              {
                "id": "los-polígonos",
                "text": "Los polígonos",
                "correct": false
              },
              {
                "id": "la-fotosíntesis",
                "text": "La fotosíntesis",
                "correct": false
              }
            ],
            "explanation": "En esta sección también se trabaja inter-."
          },
          {
            "id": "prefijos-lugar-3",
            "question": "¿Qué opción está relacionada con «Prefijos de lugar»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "sobre",
                "text": "Sobre-",
                "correct": true
              },
              {
                "id": "división-decimal",
                "text": "División decimal",
                "correct": false
              },
              {
                "id": "escala-cartográfica",
                "text": "Escala cartográfica",
                "correct": false
              },
              {
                "id": "cadena-alimentaria",
                "text": "Cadena alimentaria",
                "correct": false
              }
            ],
            "explanation": "Sobre- forma parte de esta sección."
          },
          {
            "id": "prefijos-lugar-4",
            "question": "¿Cuál es el objetivo de «Prefijos de lugar»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "interpretar-posición-med",
                "text": "Interpretar posición mediante prefijos",
                "correct": true
              },
              {
                "id": "resolver-problemas-numér",
                "text": "Resolver problemas numéricos",
                "correct": false
              },
              {
                "id": "estudiar-accidentes-geog",
                "text": "Estudiar accidentes geográficos",
                "correct": false
              },
              {
                "id": "clasificar-animales",
                "text": "Clasificar animales",
                "correct": false
              }
            ],
            "explanation": "Algunos prefijos expresan lugar o posición, como sub- (debajo), inter- (entre) o sobre- (encima)."
          },
          {
            "id": "prefijos-lugar-5",
            "question": "¿Qué estrategia demuestra que has comprendido un contenido de Lengua?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "reconocerlo-y-aplicarlo-",
                "text": "Reconocerlo y aplicarlo en ejemplos nuevos",
                "correct": true
              },
              {
                "id": "repetir-sin-entender",
                "text": "Repetir sin entender",
                "correct": false
              },
              {
                "id": "elegir-al-azar",
                "text": "Elegir al azar",
                "correct": false
              },
              {
                "id": "no-revisar-errores",
                "text": "No revisar errores",
                "correct": false
              }
            ],
            "explanation": "Comprender significa poder aplicar lo aprendido."
          }
        ]
      },
      {
        "id": "adjetivos-v",
        "title": "Adjetivos con v",
        "subtitle": "Escribir terminaciones frecuentes",
        "kind": "spelling",
        "emoji": "✏️",
        "theory": [
          {
            "type": "text",
            "title": "Lo que vas a aprender",
            "text": "Escribir terminaciones frecuentes."
          },
          {
            "type": "text",
            "title": "Explicación",
            "text": "Muchos adjetivos terminados en -ave, -avo/-ava, -eve, -evo/-eva, -ivo/-iva se escriben con v, aunque existen excepciones."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Terminaciones",
              "V",
              "Excepciones"
            ]
          },
          {
            "type": "example",
            "title": "Aprende con ejemplos",
            "text": "Busca o inventa un ejemplo relacionado con terminaciones. Después explícalo con tus propias palabras."
          },
          {
            "type": "tip",
            "title": "Truco Palabraria",
            "text": "No memorices solo la definición: identifica la pista que te permite reconocer el concepto y úsala en un ejemplo nuevo."
          }
        ],
        "questions": [
          {
            "id": "adjetivos-v-1",
            "question": "¿Cuál es uno de los conceptos que debes dominar en «Adjetivos con v»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "terminaciones",
                "text": "Terminaciones",
                "correct": true
              },
              {
                "id": "una-raíz-cuadrada",
                "text": "Una raíz cuadrada",
                "correct": false
              },
              {
                "id": "una-cordillera",
                "text": "Una cordillera",
                "correct": false
              },
              {
                "id": "un-circuito-eléctrico",
                "text": "Un circuito eléctrico",
                "correct": false
              }
            ],
            "explanation": "Muchos adjetivos terminados en -ave, -avo/-ava, -eve, -evo/-eva, -ivo/-iva se escriben con v, aunque existen excepciones."
          },
          {
            "id": "adjetivos-v-2",
            "question": "¿Qué otro contenido se trabaja en «Adjetivos con v»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "v",
                "text": "V",
                "correct": true
              },
              {
                "id": "los-planetas",
                "text": "Los planetas",
                "correct": false
              },
              {
                "id": "los-polígonos",
                "text": "Los polígonos",
                "correct": false
              },
              {
                "id": "la-fotosíntesis",
                "text": "La fotosíntesis",
                "correct": false
              }
            ],
            "explanation": "En esta sección también se trabaja v."
          },
          {
            "id": "adjetivos-v-3",
            "question": "¿Qué opción está relacionada con «Adjetivos con v»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "excepciones",
                "text": "Excepciones",
                "correct": true
              },
              {
                "id": "división-decimal",
                "text": "División decimal",
                "correct": false
              },
              {
                "id": "escala-cartográfica",
                "text": "Escala cartográfica",
                "correct": false
              },
              {
                "id": "cadena-alimentaria",
                "text": "Cadena alimentaria",
                "correct": false
              }
            ],
            "explanation": "Excepciones forma parte de esta sección."
          },
          {
            "id": "adjetivos-v-4",
            "question": "¿Cuál es el objetivo de «Adjetivos con v»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "escribir-terminaciones-f",
                "text": "Escribir terminaciones frecuentes",
                "correct": true
              },
              {
                "id": "resolver-problemas-numér",
                "text": "Resolver problemas numéricos",
                "correct": false
              },
              {
                "id": "estudiar-accidentes-geog",
                "text": "Estudiar accidentes geográficos",
                "correct": false
              },
              {
                "id": "clasificar-animales",
                "text": "Clasificar animales",
                "correct": false
              }
            ],
            "explanation": "Muchos adjetivos terminados en -ave, -avo/-ava, -eve, -evo/-eva, -ivo/-iva se escriben con v, aunque existen excepciones."
          },
          {
            "id": "adjetivos-v-5",
            "question": "¿Qué estrategia demuestra que has comprendido un contenido de Lengua?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "reconocerlo-y-aplicarlo-",
                "text": "Reconocerlo y aplicarlo en ejemplos nuevos",
                "correct": true
              },
              {
                "id": "repetir-sin-entender",
                "text": "Repetir sin entender",
                "correct": false
              },
              {
                "id": "elegir-al-azar",
                "text": "Elegir al azar",
                "correct": false
              },
              {
                "id": "no-revisar-errores",
                "text": "No revisar errores",
                "correct": false
              }
            ],
            "explanation": "Comprender significa poder aplicar lo aprendido."
          }
        ]
      },
      {
        "id": "numerales-indefinidos",
        "title": "Numerales e indefinidos",
        "subtitle": "Expresar cantidad exacta o imprecisa",
        "kind": "grammar",
        "emoji": "🔤",
        "theory": [
          {
            "type": "text",
            "title": "Lo que vas a aprender",
            "text": "Expresar cantidad exacta o imprecisa."
          },
          {
            "type": "text",
            "title": "Explicación",
            "text": "Los numerales indican cantidad u orden exactos; los indefinidos expresan cantidad o identidad de manera imprecisa."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Cardinales",
              "Ordinales",
              "Indefinidos"
            ]
          },
          {
            "type": "example",
            "title": "Aprende con ejemplos",
            "text": "Busca o inventa un ejemplo relacionado con cardinales. Después explícalo con tus propias palabras."
          },
          {
            "type": "tip",
            "title": "Truco Palabraria",
            "text": "No memorices solo la definición: identifica la pista que te permite reconocer el concepto y úsala en un ejemplo nuevo."
          }
        ],
        "questions": [
          {
            "id": "numerales-indefinidos-1",
            "question": "¿Cuál es uno de los conceptos que debes dominar en «Numerales e indefinidos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "cardinales",
                "text": "Cardinales",
                "correct": true
              },
              {
                "id": "una-raíz-cuadrada",
                "text": "Una raíz cuadrada",
                "correct": false
              },
              {
                "id": "una-cordillera",
                "text": "Una cordillera",
                "correct": false
              },
              {
                "id": "un-circuito-eléctrico",
                "text": "Un circuito eléctrico",
                "correct": false
              }
            ],
            "explanation": "Los numerales indican cantidad u orden exactos; los indefinidos expresan cantidad o identidad de manera imprecisa."
          },
          {
            "id": "numerales-indefinidos-2",
            "question": "¿Qué otro contenido se trabaja en «Numerales e indefinidos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "ordinales",
                "text": "Ordinales",
                "correct": true
              },
              {
                "id": "los-planetas",
                "text": "Los planetas",
                "correct": false
              },
              {
                "id": "los-polígonos",
                "text": "Los polígonos",
                "correct": false
              },
              {
                "id": "la-fotosíntesis",
                "text": "La fotosíntesis",
                "correct": false
              }
            ],
            "explanation": "En esta sección también se trabaja ordinales."
          },
          {
            "id": "numerales-indefinidos-3",
            "question": "¿Qué opción está relacionada con «Numerales e indefinidos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "indefinidos",
                "text": "Indefinidos",
                "correct": true
              },
              {
                "id": "división-decimal",
                "text": "División decimal",
                "correct": false
              },
              {
                "id": "escala-cartográfica",
                "text": "Escala cartográfica",
                "correct": false
              },
              {
                "id": "cadena-alimentaria",
                "text": "Cadena alimentaria",
                "correct": false
              }
            ],
            "explanation": "Indefinidos forma parte de esta sección."
          },
          {
            "id": "numerales-indefinidos-4",
            "question": "¿Cuál es el objetivo de «Numerales e indefinidos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "expresar-cantidad-exacta",
                "text": "Expresar cantidad exacta o imprecisa",
                "correct": true
              },
              {
                "id": "resolver-problemas-numér",
                "text": "Resolver problemas numéricos",
                "correct": false
              },
              {
                "id": "estudiar-accidentes-geog",
                "text": "Estudiar accidentes geográficos",
                "correct": false
              },
              {
                "id": "clasificar-animales",
                "text": "Clasificar animales",
                "correct": false
              }
            ],
            "explanation": "Los numerales indican cantidad u orden exactos; los indefinidos expresan cantidad o identidad de manera imprecisa."
          },
          {
            "id": "numerales-indefinidos-5",
            "question": "¿Qué estrategia demuestra que has comprendido un contenido de Lengua?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "reconocerlo-y-aplicarlo-",
                "text": "Reconocerlo y aplicarlo en ejemplos nuevos",
                "correct": true
              },
              {
                "id": "repetir-sin-entender",
                "text": "Repetir sin entender",
                "correct": false
              },
              {
                "id": "elegir-al-azar",
                "text": "Elegir al azar",
                "correct": false
              },
              {
                "id": "no-revisar-errores",
                "text": "No revisar errores",
                "correct": false
              }
            ],
            "explanation": "Comprender significa poder aplicar lo aprendido."
          }
        ]
      },
      {
        "id": "literatura",
        "title": "Las obras líricas y la rima",
        "subtitle": "Reconocer versos, estrofas y rima",
        "kind": "literature",
        "emoji": "📚",
        "theory": [
          {
            "type": "text",
            "title": "Lo que vas a aprender",
            "text": "Reconocer versos, estrofas y rima."
          },
          {
            "type": "text",
            "title": "Explicación",
            "text": "La lírica expresa sentimientos e ideas. Los poemas se organizan en versos y estrofas; puede haber rima cuando se repiten sonidos al final."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Verso",
              "Estrofa",
              "Rima"
            ]
          },
          {
            "type": "example",
            "title": "Aprende con ejemplos",
            "text": "Busca o inventa un ejemplo relacionado con verso. Después explícalo con tus propias palabras."
          },
          {
            "type": "tip",
            "title": "Truco Palabraria",
            "text": "No memorices solo la definición: identifica la pista que te permite reconocer el concepto y úsala en un ejemplo nuevo."
          }
        ],
        "questions": [
          {
            "id": "literatura-1",
            "question": "¿Qué concepto pertenece a «Las obras líricas y la rima»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "verso",
                "text": "Verso",
                "correct": true
              },
              {
                "id": "una-fracción",
                "text": "una fracción",
                "correct": false
              },
              {
                "id": "un-ecosistema",
                "text": "un ecosistema",
                "correct": false
              },
              {
                "id": "una-unidad-de-masa",
                "text": "una unidad de masa",
                "correct": false
              }
            ],
            "explanation": "La lírica expresa sentimientos e ideas. Los poemas se organizan en versos y estrofas; puede haber rima cuando se repiten sonidos al final."
          },
          {
            "id": "literatura-2",
            "question": "¿Cuál es otra idea importante de «Las obras líricas y la rima»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "estrofa",
                "text": "Estrofa",
                "correct": true
              },
              {
                "id": "multiplicación",
                "text": "multiplicación",
                "correct": false
              },
              {
                "id": "kilómetro",
                "text": "kilómetro",
                "correct": false
              },
              {
                "id": "continente",
                "text": "continente",
                "correct": false
              }
            ],
            "explanation": "También trabajamos estrofa."
          },
          {
            "id": "literatura-3",
            "question": "En literatura, además de entender qué ocurre, conviene fijarse en…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "cómo-está-usado-el-lengu",
                "text": "cómo está usado el lenguaje",
                "correct": true
              },
              {
                "id": "solo-el-número-de-página",
                "text": "solo el número de páginas",
                "correct": false
              },
              {
                "id": "el-precio-del-libro",
                "text": "el precio del libro",
                "correct": false
              },
              {
                "id": "el-tamaño-de-la-portada",
                "text": "el tamaño de la portada",
                "correct": false
              }
            ],
            "explanation": "La forma de usar el lenguaje es fundamental en los textos literarios."
          },
          {
            "id": "literatura-4",
            "question": "¿Qué deberías ser capaz de reconocer después de estudiar esta sección?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "rima",
                "text": "Rima",
                "correct": true
              },
              {
                "id": "una-operación",
                "text": "una operación",
                "correct": false
              },
              {
                "id": "una-coordenada",
                "text": "una coordenada",
                "correct": false
              },
              {
                "id": "una-unidad-de-volumen",
                "text": "una unidad de volumen",
                "correct": false
              }
            ],
            "explanation": "Uno de los aprendizajes previstos es reconocer rima."
          },
          {
            "id": "literatura-5",
            "question": "¿Cuál es una buena forma de demostrar comprensión literaria?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "identificar-el-recurso-o",
                "text": "Identificar el recurso o elemento y explicar su efecto",
                "correct": true
              },
              {
                "id": "copiar-sin-explicar",
                "text": "copiar sin explicar",
                "correct": false
              },
              {
                "id": "contar-letras",
                "text": "contar letras",
                "correct": false
              },
              {
                "id": "responder-sin-leer",
                "text": "responder sin leer",
                "correct": false
              }
            ],
            "explanation": "Hay que reconocer los elementos y comprender para qué sirven."
          }
        ]
      },
      {
        "id": "escritura",
        "title": "Redactar una solicitud",
        "subtitle": "Pedir algo formalmente",
        "kind": "writing",
        "emoji": "📝",
        "theory": [
          {
            "type": "text",
            "title": "Actividad de expresión escrita",
            "text": "Pedir algo formalmente."
          },
          {
            "type": "list",
            "title": "Cómo hacer la actividad",
            "items": [
              "Piensa qué quieres comunicar y a quién va dirigido.",
              "Haz un pequeño borrador y ordena las ideas.",
              "Escribe el texto siguiendo las características trabajadas en la unidad.",
              "Relee lo escrito y corrige ortografía, puntuación y repeticiones.",
              "Comprueba que el resultado cumple el objetivo de la actividad."
            ]
          },
          {
            "type": "important",
            "title": "Aquí no hay examen tipo test",
            "text": "Esta sección se aprende escribiendo. El objetivo es producir un texto, revisarlo y mejorarlo."
          }
        ],
        "questions": []
      },
      {
        "id": "repaso",
        "title": "Comprueba tu progreso",
        "subtitle": "Consolidar el tema",
        "kind": "review",
        "emoji": "🏆",
        "theory": [
          {
            "type": "text",
            "title": "Repaso de la teoría de la unidad",
            "text": "Comprueba lo aprendido en los contenidos teóricos de este tema."
          },
          {
            "type": "important",
            "title": "Qué se repasa",
            "text": "Vocabulario, ortografía, gramática y, cuando corresponde, literatura o alfabetización mediática."
          },
          {
            "type": "tip",
            "title": "Comprensión lectora",
            "text": "Las lecturas y sus actividades de comprensión se trabajan en clase y no forman parte de Palabraria."
          }
        ],
        "questions": [
          {
            "id": "tema-05-rep-prefijos-lugar-1",
            "question": "¿Cuál es uno de los conceptos que debes dominar en «Prefijos de lugar»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "sub",
                "text": "Sub-",
                "correct": true
              },
              {
                "id": "una-raíz-cuadrada",
                "text": "Una raíz cuadrada",
                "correct": false
              },
              {
                "id": "una-cordillera",
                "text": "Una cordillera",
                "correct": false
              },
              {
                "id": "un-circuito-eléctrico",
                "text": "Un circuito eléctrico",
                "correct": false
              }
            ],
            "explanation": "Algunos prefijos expresan lugar o posición, como sub- (debajo), inter- (entre) o sobre- (encima)."
          },
          {
            "id": "tema-05-rep-prefijos-lugar-2",
            "question": "¿Qué otro contenido se trabaja en «Prefijos de lugar»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "inter",
                "text": "Inter-",
                "correct": true
              },
              {
                "id": "los-planetas",
                "text": "Los planetas",
                "correct": false
              },
              {
                "id": "los-polígonos",
                "text": "Los polígonos",
                "correct": false
              },
              {
                "id": "la-fotosíntesis",
                "text": "La fotosíntesis",
                "correct": false
              }
            ],
            "explanation": "En esta sección también se trabaja inter-."
          },
          {
            "id": "tema-05-rep-prefijos-lugar-3",
            "question": "¿Qué opción está relacionada con «Prefijos de lugar»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "sobre",
                "text": "Sobre-",
                "correct": true
              },
              {
                "id": "división-decimal",
                "text": "División decimal",
                "correct": false
              },
              {
                "id": "escala-cartográfica",
                "text": "Escala cartográfica",
                "correct": false
              },
              {
                "id": "cadena-alimentaria",
                "text": "Cadena alimentaria",
                "correct": false
              }
            ],
            "explanation": "Sobre- forma parte de esta sección."
          },
          {
            "id": "tema-05-rep-adjetivos-v-1",
            "question": "¿Cuál es uno de los conceptos que debes dominar en «Adjetivos con v»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "terminaciones",
                "text": "Terminaciones",
                "correct": true
              },
              {
                "id": "una-raíz-cuadrada",
                "text": "Una raíz cuadrada",
                "correct": false
              },
              {
                "id": "una-cordillera",
                "text": "Una cordillera",
                "correct": false
              },
              {
                "id": "un-circuito-eléctrico",
                "text": "Un circuito eléctrico",
                "correct": false
              }
            ],
            "explanation": "Muchos adjetivos terminados en -ave, -avo/-ava, -eve, -evo/-eva, -ivo/-iva se escriben con v, aunque existen excepciones."
          },
          {
            "id": "tema-05-rep-adjetivos-v-2",
            "question": "¿Qué otro contenido se trabaja en «Adjetivos con v»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "v",
                "text": "V",
                "correct": true
              },
              {
                "id": "los-planetas",
                "text": "Los planetas",
                "correct": false
              },
              {
                "id": "los-polígonos",
                "text": "Los polígonos",
                "correct": false
              },
              {
                "id": "la-fotosíntesis",
                "text": "La fotosíntesis",
                "correct": false
              }
            ],
            "explanation": "En esta sección también se trabaja v."
          },
          {
            "id": "tema-05-rep-adjetivos-v-3",
            "question": "¿Qué opción está relacionada con «Adjetivos con v»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "excepciones",
                "text": "Excepciones",
                "correct": true
              },
              {
                "id": "división-decimal",
                "text": "División decimal",
                "correct": false
              },
              {
                "id": "escala-cartográfica",
                "text": "Escala cartográfica",
                "correct": false
              },
              {
                "id": "cadena-alimentaria",
                "text": "Cadena alimentaria",
                "correct": false
              }
            ],
            "explanation": "Excepciones forma parte de esta sección."
          },
          {
            "id": "tema-05-rep-numerales-indefinidos-1",
            "question": "¿Cuál es uno de los conceptos que debes dominar en «Numerales e indefinidos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "cardinales",
                "text": "Cardinales",
                "correct": true
              },
              {
                "id": "una-raíz-cuadrada",
                "text": "Una raíz cuadrada",
                "correct": false
              },
              {
                "id": "una-cordillera",
                "text": "Una cordillera",
                "correct": false
              },
              {
                "id": "un-circuito-eléctrico",
                "text": "Un circuito eléctrico",
                "correct": false
              }
            ],
            "explanation": "Los numerales indican cantidad u orden exactos; los indefinidos expresan cantidad o identidad de manera imprecisa."
          },
          {
            "id": "tema-05-rep-numerales-indefinidos-2",
            "question": "¿Qué otro contenido se trabaja en «Numerales e indefinidos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "ordinales",
                "text": "Ordinales",
                "correct": true
              },
              {
                "id": "los-planetas",
                "text": "Los planetas",
                "correct": false
              },
              {
                "id": "los-polígonos",
                "text": "Los polígonos",
                "correct": false
              },
              {
                "id": "la-fotosíntesis",
                "text": "La fotosíntesis",
                "correct": false
              }
            ],
            "explanation": "En esta sección también se trabaja ordinales."
          },
          {
            "id": "tema-05-rep-numerales-indefinidos-3",
            "question": "¿Qué opción está relacionada con «Numerales e indefinidos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "indefinidos",
                "text": "Indefinidos",
                "correct": true
              },
              {
                "id": "división-decimal",
                "text": "División decimal",
                "correct": false
              },
              {
                "id": "escala-cartográfica",
                "text": "Escala cartográfica",
                "correct": false
              },
              {
                "id": "cadena-alimentaria",
                "text": "Cadena alimentaria",
                "correct": false
              }
            ],
            "explanation": "Indefinidos forma parte de esta sección."
          },
          {
            "id": "tema-05-rep-literatura-1",
            "question": "¿Qué concepto pertenece a «Las obras líricas y la rima»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "verso",
                "text": "Verso",
                "correct": true
              },
              {
                "id": "una-fracción",
                "text": "una fracción",
                "correct": false
              },
              {
                "id": "un-ecosistema",
                "text": "un ecosistema",
                "correct": false
              },
              {
                "id": "una-unidad-de-masa",
                "text": "una unidad de masa",
                "correct": false
              }
            ],
            "explanation": "La lírica expresa sentimientos e ideas. Los poemas se organizan en versos y estrofas; puede haber rima cuando se repiten sonidos al final."
          },
          {
            "id": "tema-05-rep-literatura-2",
            "question": "¿Cuál es otra idea importante de «Las obras líricas y la rima»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "estrofa",
                "text": "Estrofa",
                "correct": true
              },
              {
                "id": "multiplicación",
                "text": "multiplicación",
                "correct": false
              },
              {
                "id": "kilómetro",
                "text": "kilómetro",
                "correct": false
              },
              {
                "id": "continente",
                "text": "continente",
                "correct": false
              }
            ],
            "explanation": "También trabajamos estrofa."
          },
          {
            "id": "tema-05-rep-literatura-3",
            "question": "En literatura, además de entender qué ocurre, conviene fijarse en…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "cómo-está-usado-el-lengu",
                "text": "cómo está usado el lenguaje",
                "correct": true
              },
              {
                "id": "solo-el-número-de-página",
                "text": "solo el número de páginas",
                "correct": false
              },
              {
                "id": "el-precio-del-libro",
                "text": "el precio del libro",
                "correct": false
              },
              {
                "id": "el-tamaño-de-la-portada",
                "text": "el tamaño de la portada",
                "correct": false
              }
            ],
            "explanation": "La forma de usar el lenguaje es fundamental en los textos literarios."
          }
        ]
      }
    ]
  },
  {
    "id": "tema-06",
    "order": 6,
    "title": "¿Demasiada tele?",
    "description": "Unidad 6: teoría, ejemplos, práctica y repaso paso a paso.",
    "emoji": "📺",
    "sections": [
      {
        "id": "situacion",
        "title": "Hablar y escuchar: pantallas",
        "subtitle": "Debatir hábitos digitales",
        "kind": "communication",
        "emoji": "🗣️",
        "theory": [
          {
            "type": "text",
            "title": "Actividad de comunicación oral",
            "text": "Debatir hábitos digitales."
          },
          {
            "type": "list",
            "title": "Qué debes practicar",
            "items": [
              "Escuchar antes de responder.",
              "Hablar con claridad y mantener el tema.",
              "Respetar el turno de palabra.",
              "Explicar opiniones con razones cuando sea necesario."
            ]
          },
          {
            "type": "important",
            "title": "Se practica hablando y escuchando",
            "text": "No se evalúa con preguntas tipo test en el repaso teórico."
          }
        ],
        "questions": []
      },
      {
        "id": "sufijos",
        "title": "Los sufijos",
        "subtitle": "Formar palabras añadiendo elementos al final",
        "kind": "vocabulary",
        "emoji": "🧩",
        "theory": [
          {
            "type": "text",
            "title": "Lo que vas a aprender",
            "text": "Formar palabras añadiendo elementos al final."
          },
          {
            "type": "text",
            "title": "Explicación",
            "text": "Los sufijos se añaden al final de una raíz o palabra para crear otra: pan → panadero; pequeño → pequeñito."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Raíz",
              "Sufijo",
              "Derivación"
            ]
          },
          {
            "type": "example",
            "title": "Aprende con ejemplos",
            "text": "Busca o inventa un ejemplo relacionado con raíz. Después explícalo con tus propias palabras."
          },
          {
            "type": "tip",
            "title": "Truco Palabraria",
            "text": "No memorices solo la definición: identifica la pista que te permite reconocer el concepto y úsala en un ejemplo nuevo."
          }
        ],
        "questions": [
          {
            "id": "sufijos-1",
            "question": "¿Cuál es uno de los conceptos que debes dominar en «Los sufijos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "raíz",
                "text": "Raíz",
                "correct": true
              },
              {
                "id": "una-raíz-cuadrada",
                "text": "Una raíz cuadrada",
                "correct": false
              },
              {
                "id": "una-cordillera",
                "text": "Una cordillera",
                "correct": false
              },
              {
                "id": "un-circuito-eléctrico",
                "text": "Un circuito eléctrico",
                "correct": false
              }
            ],
            "explanation": "Los sufijos se añaden al final de una raíz o palabra para crear otra: pan → panadero; pequeño → pequeñito."
          },
          {
            "id": "sufijos-2",
            "question": "¿Qué otro contenido se trabaja en «Los sufijos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "sufijo",
                "text": "Sufijo",
                "correct": true
              },
              {
                "id": "los-planetas",
                "text": "Los planetas",
                "correct": false
              },
              {
                "id": "los-polígonos",
                "text": "Los polígonos",
                "correct": false
              },
              {
                "id": "la-fotosíntesis",
                "text": "La fotosíntesis",
                "correct": false
              }
            ],
            "explanation": "En esta sección también se trabaja sufijo."
          },
          {
            "id": "sufijos-3",
            "question": "¿Qué opción está relacionada con «Los sufijos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "derivación",
                "text": "Derivación",
                "correct": true
              },
              {
                "id": "división-decimal",
                "text": "División decimal",
                "correct": false
              },
              {
                "id": "escala-cartográfica",
                "text": "Escala cartográfica",
                "correct": false
              },
              {
                "id": "cadena-alimentaria",
                "text": "Cadena alimentaria",
                "correct": false
              }
            ],
            "explanation": "Derivación forma parte de esta sección."
          },
          {
            "id": "sufijos-4",
            "question": "¿Cuál es el objetivo de «Los sufijos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "formar-palabras-añadiend",
                "text": "Formar palabras añadiendo elementos al final",
                "correct": true
              },
              {
                "id": "resolver-problemas-numér",
                "text": "Resolver problemas numéricos",
                "correct": false
              },
              {
                "id": "estudiar-accidentes-geog",
                "text": "Estudiar accidentes geográficos",
                "correct": false
              },
              {
                "id": "clasificar-animales",
                "text": "Clasificar animales",
                "correct": false
              }
            ],
            "explanation": "Los sufijos se añaden al final de una raíz o palabra para crear otra: pan → panadero; pequeño → pequeñito."
          },
          {
            "id": "sufijos-5",
            "question": "¿Qué estrategia demuestra que has comprendido un contenido de Lengua?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "reconocerlo-y-aplicarlo-",
                "text": "Reconocerlo y aplicarlo en ejemplos nuevos",
                "correct": true
              },
              {
                "id": "repetir-sin-entender",
                "text": "Repetir sin entender",
                "correct": false
              },
              {
                "id": "elegir-al-azar",
                "text": "Elegir al azar",
                "correct": false
              },
              {
                "id": "no-revisar-errores",
                "text": "No revisar errores",
                "correct": false
              }
            ],
            "explanation": "Comprender significa poder aplicar lo aprendido."
          }
        ]
      },
      {
        "id": "ger-gir",
        "title": "Verbos acabados en -ger o -gir",
        "subtitle": "Aplicar una regularidad ortográfica",
        "kind": "spelling",
        "emoji": "✏️",
        "theory": [
          {
            "type": "text",
            "title": "Lo que vas a aprender",
            "text": "Aplicar una regularidad ortográfica."
          },
          {
            "type": "text",
            "title": "Explicación",
            "text": "Los verbos acabados en -ger y -gir suelen escribirse con g, excepto tejer y crujir. Ante a u o, algunas formas cambian g por j: coger → cojo."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "-ger",
              "-gir",
              "G/j"
            ]
          },
          {
            "type": "example",
            "title": "Aprende con ejemplos",
            "text": "Busca o inventa un ejemplo relacionado con -ger. Después explícalo con tus propias palabras."
          },
          {
            "type": "tip",
            "title": "Truco Palabraria",
            "text": "No memorices solo la definición: identifica la pista que te permite reconocer el concepto y úsala en un ejemplo nuevo."
          }
        ],
        "questions": [
          {
            "id": "ger-gir-1",
            "question": "¿Cuál es uno de los conceptos que debes dominar en «Verbos acabados en -ger o -gir»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "ger",
                "text": "-ger",
                "correct": true
              },
              {
                "id": "una-raíz-cuadrada",
                "text": "Una raíz cuadrada",
                "correct": false
              },
              {
                "id": "una-cordillera",
                "text": "Una cordillera",
                "correct": false
              },
              {
                "id": "un-circuito-eléctrico",
                "text": "Un circuito eléctrico",
                "correct": false
              }
            ],
            "explanation": "Los verbos acabados en -ger y -gir suelen escribirse con g, excepto tejer y crujir. Ante a u o, algunas formas cambian g por j: coger → cojo."
          },
          {
            "id": "ger-gir-2",
            "question": "¿Qué otro contenido se trabaja en «Verbos acabados en -ger o -gir»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "gir",
                "text": "-gir",
                "correct": true
              },
              {
                "id": "los-planetas",
                "text": "Los planetas",
                "correct": false
              },
              {
                "id": "los-polígonos",
                "text": "Los polígonos",
                "correct": false
              },
              {
                "id": "la-fotosíntesis",
                "text": "La fotosíntesis",
                "correct": false
              }
            ],
            "explanation": "En esta sección también se trabaja -gir."
          },
          {
            "id": "ger-gir-3",
            "question": "¿Qué opción está relacionada con «Verbos acabados en -ger o -gir»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "g-j",
                "text": "G/j",
                "correct": true
              },
              {
                "id": "división-decimal",
                "text": "División decimal",
                "correct": false
              },
              {
                "id": "escala-cartográfica",
                "text": "Escala cartográfica",
                "correct": false
              },
              {
                "id": "cadena-alimentaria",
                "text": "Cadena alimentaria",
                "correct": false
              }
            ],
            "explanation": "G/j forma parte de esta sección."
          },
          {
            "id": "ger-gir-4",
            "question": "¿Cuál es el objetivo de «Verbos acabados en -ger o -gir»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "aplicar-una-regularidad-",
                "text": "Aplicar una regularidad ortográfica",
                "correct": true
              },
              {
                "id": "resolver-problemas-numér",
                "text": "Resolver problemas numéricos",
                "correct": false
              },
              {
                "id": "estudiar-accidentes-geog",
                "text": "Estudiar accidentes geográficos",
                "correct": false
              },
              {
                "id": "clasificar-animales",
                "text": "Clasificar animales",
                "correct": false
              }
            ],
            "explanation": "Los verbos acabados en -ger y -gir suelen escribirse con g, excepto tejer y crujir. Ante a u o, algunas formas cambian g por j: coger → cojo."
          },
          {
            "id": "ger-gir-5",
            "question": "¿Qué estrategia demuestra que has comprendido un contenido de Lengua?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "reconocerlo-y-aplicarlo-",
                "text": "Reconocerlo y aplicarlo en ejemplos nuevos",
                "correct": true
              },
              {
                "id": "repetir-sin-entender",
                "text": "Repetir sin entender",
                "correct": false
              },
              {
                "id": "elegir-al-azar",
                "text": "Elegir al azar",
                "correct": false
              },
              {
                "id": "no-revisar-errores",
                "text": "No revisar errores",
                "correct": false
              }
            ],
            "explanation": "Comprender significa poder aplicar lo aprendido."
          }
        ]
      },
      {
        "id": "verbo",
        "title": "El verbo",
        "subtitle": "Reconocer acciones, estados y conjugaciones",
        "kind": "grammar",
        "emoji": "🔤",
        "theory": [
          {
            "type": "text",
            "title": "Lo que vas a aprender",
            "text": "Reconocer acciones, estados y conjugaciones."
          },
          {
            "type": "text",
            "title": "Explicación",
            "text": "Los verbos expresan acciones o estados. Su infinitivo termina en -ar, -er o -ir y sus formas cambian según persona, número y tiempo."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Infinitivo",
              "Conjugaciones",
              "Formas verbales"
            ]
          },
          {
            "type": "example",
            "title": "Aprende con ejemplos",
            "text": "Busca o inventa un ejemplo relacionado con infinitivo. Después explícalo con tus propias palabras."
          },
          {
            "type": "tip",
            "title": "Truco Palabraria",
            "text": "No memorices solo la definición: identifica la pista que te permite reconocer el concepto y úsala en un ejemplo nuevo."
          }
        ],
        "questions": [
          {
            "id": "t6-vb-1",
            "question": "¿Cuál de estas palabras es un verbo?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "correr",
                "text": "correr",
                "correct": true
              },
              {
                "id": "carrera",
                "text": "carrera",
                "correct": false
              },
              {
                "id": "rápido",
                "text": "rápido",
                "correct": false
              },
              {
                "id": "corredor",
                "text": "corredor",
                "correct": false
              }
            ],
            "explanation": "«Correr» expresa una acción y está en infinitivo."
          },
          {
            "id": "t6-vb-2",
            "question": "¿A qué conjugación pertenece «comer»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "segunda-conjugación",
                "text": "Segunda conjugación",
                "correct": true
              },
              {
                "id": "primera-conjugación",
                "text": "Primera conjugación",
                "correct": false
              },
              {
                "id": "tercera-conjugación",
                "text": "Tercera conjugación",
                "correct": false
              },
              {
                "id": "no-es-un-verbo",
                "text": "No es un verbo",
                "correct": false
              }
            ],
            "explanation": "Los infinitivos terminados en -er pertenecen a la segunda conjugación."
          },
          {
            "id": "t6-vb-3",
            "question": "¿Cuál está en infinitivo?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "vivir",
                "text": "vivir",
                "correct": true
              },
              {
                "id": "vivimos",
                "text": "vivimos",
                "correct": false
              },
              {
                "id": "vivió",
                "text": "vivió",
                "correct": false
              },
              {
                "id": "viviendo",
                "text": "viviendo",
                "correct": false
              }
            ],
            "explanation": "«Vivir» termina en -ir y es infinitivo."
          },
          {
            "id": "t6-vb-4",
            "question": "Los verbos pueden expresar…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "acciones-o-estados",
                "text": "acciones o estados",
                "correct": true
              },
              {
                "id": "solo-objetos",
                "text": "solo objetos",
                "correct": false
              },
              {
                "id": "solo-nombres-propios",
                "text": "solo nombres propios",
                "correct": false
              },
              {
                "id": "únicamente-colores",
                "text": "únicamente colores",
                "correct": false
              }
            ],
            "explanation": "El verbo informa de acciones, procesos o estados."
          },
          {
            "id": "t6-vb-5",
            "question": "¿Qué terminaciones tienen los infinitivos?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "ar-er-ir",
                "text": "-ar, -er, -ir",
                "correct": true
              },
              {
                "id": "al-el-il",
                "text": "-al, -el, -il",
                "correct": false
              },
              {
                "id": "aba-ía-é",
                "text": "-aba, -ía, -é",
                "correct": false
              },
              {
                "id": "o-a-os",
                "text": "-o, -a, -os",
                "correct": false
              }
            ],
            "explanation": "Las tres conjugaciones se reconocen por -ar, -er e -ir."
          }
        ]
      },
      {
        "id": "anuncio",
        "title": "El anuncio y el eslogan",
        "subtitle": "Interpretar mensajes publicitarios",
        "kind": "media",
        "emoji": "🌐",
        "theory": [
          {
            "type": "text",
            "title": "Lo que vas a aprender",
            "text": "Interpretar mensajes publicitarios."
          },
          {
            "type": "text",
            "title": "Explicación",
            "text": "Un anuncio busca llamar la atención y convencer. El eslogan es una frase breve y fácil de recordar."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Publicidad",
              "Eslogan",
              "Intención"
            ]
          },
          {
            "type": "example",
            "title": "Aprende con ejemplos",
            "text": "Busca o inventa un ejemplo relacionado con publicidad. Después explícalo con tus propias palabras."
          },
          {
            "type": "tip",
            "title": "Truco Palabraria",
            "text": "No memorices solo la definición: identifica la pista que te permite reconocer el concepto y úsala en un ejemplo nuevo."
          }
        ],
        "questions": [
          {
            "id": "anuncio-1",
            "question": "¿Cuál es uno de los conceptos que debes dominar en «El anuncio y el eslogan»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "publicidad",
                "text": "Publicidad",
                "correct": true
              },
              {
                "id": "una-raíz-cuadrada",
                "text": "Una raíz cuadrada",
                "correct": false
              },
              {
                "id": "una-cordillera",
                "text": "Una cordillera",
                "correct": false
              },
              {
                "id": "un-circuito-eléctrico",
                "text": "Un circuito eléctrico",
                "correct": false
              }
            ],
            "explanation": "Un anuncio busca llamar la atención y convencer. El eslogan es una frase breve y fácil de recordar."
          },
          {
            "id": "anuncio-2",
            "question": "¿Qué otro contenido se trabaja en «El anuncio y el eslogan»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "eslogan",
                "text": "Eslogan",
                "correct": true
              },
              {
                "id": "los-planetas",
                "text": "Los planetas",
                "correct": false
              },
              {
                "id": "los-polígonos",
                "text": "Los polígonos",
                "correct": false
              },
              {
                "id": "la-fotosíntesis",
                "text": "La fotosíntesis",
                "correct": false
              }
            ],
            "explanation": "En esta sección también se trabaja eslogan."
          },
          {
            "id": "anuncio-3",
            "question": "¿Qué opción está relacionada con «El anuncio y el eslogan»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "intención",
                "text": "Intención",
                "correct": true
              },
              {
                "id": "división-decimal",
                "text": "División decimal",
                "correct": false
              },
              {
                "id": "escala-cartográfica",
                "text": "Escala cartográfica",
                "correct": false
              },
              {
                "id": "cadena-alimentaria",
                "text": "Cadena alimentaria",
                "correct": false
              }
            ],
            "explanation": "Intención forma parte de esta sección."
          },
          {
            "id": "anuncio-4",
            "question": "¿Cuál es el objetivo de «El anuncio y el eslogan»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "interpretar-mensajes-pub",
                "text": "Interpretar mensajes publicitarios",
                "correct": true
              },
              {
                "id": "resolver-problemas-numér",
                "text": "Resolver problemas numéricos",
                "correct": false
              },
              {
                "id": "estudiar-accidentes-geog",
                "text": "Estudiar accidentes geográficos",
                "correct": false
              },
              {
                "id": "clasificar-animales",
                "text": "Clasificar animales",
                "correct": false
              }
            ],
            "explanation": "Un anuncio busca llamar la atención y convencer. El eslogan es una frase breve y fácil de recordar."
          },
          {
            "id": "anuncio-5",
            "question": "¿Qué estrategia demuestra que has comprendido un contenido de Lengua?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "reconocerlo-y-aplicarlo-",
                "text": "Reconocerlo y aplicarlo en ejemplos nuevos",
                "correct": true
              },
              {
                "id": "repetir-sin-entender",
                "text": "Repetir sin entender",
                "correct": false
              },
              {
                "id": "elegir-al-azar",
                "text": "Elegir al azar",
                "correct": false
              },
              {
                "id": "no-revisar-errores",
                "text": "No revisar errores",
                "correct": false
              }
            ],
            "explanation": "Comprender significa poder aplicar lo aprendido."
          }
        ]
      },
      {
        "id": "escritura",
        "title": "Hacer un cómic",
        "subtitle": "Combinar imágenes y palabras",
        "kind": "writing",
        "emoji": "📝",
        "theory": [
          {
            "type": "text",
            "title": "Actividad de expresión escrita",
            "text": "Combinar imágenes y palabras."
          },
          {
            "type": "list",
            "title": "Cómo hacer la actividad",
            "items": [
              "Piensa qué quieres comunicar y a quién va dirigido.",
              "Haz un pequeño borrador y ordena las ideas.",
              "Escribe el texto siguiendo las características trabajadas en la unidad.",
              "Relee lo escrito y corrige ortografía, puntuación y repeticiones.",
              "Comprueba que el resultado cumple el objetivo de la actividad."
            ]
          },
          {
            "type": "important",
            "title": "Aquí no hay examen tipo test",
            "text": "Esta sección se aprende escribiendo. El objetivo es producir un texto, revisarlo y mejorarlo."
          }
        ],
        "questions": []
      },
      {
        "id": "repaso",
        "title": "Comprueba tu progreso",
        "subtitle": "Consolidar el tema",
        "kind": "review",
        "emoji": "🏆",
        "theory": [
          {
            "type": "text",
            "title": "Repaso de la teoría de la unidad",
            "text": "Comprueba lo aprendido en los contenidos teóricos de este tema."
          },
          {
            "type": "important",
            "title": "Qué se repasa",
            "text": "Vocabulario, ortografía, gramática y, cuando corresponde, literatura o alfabetización mediática."
          },
          {
            "type": "tip",
            "title": "Comprensión lectora",
            "text": "Las lecturas y sus actividades de comprensión se trabajan en clase y no forman parte de Palabraria."
          }
        ],
        "questions": [
          {
            "id": "tema-06-rep-sufijos-1",
            "question": "¿Cuál es uno de los conceptos que debes dominar en «Los sufijos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "raíz",
                "text": "Raíz",
                "correct": true
              },
              {
                "id": "una-raíz-cuadrada",
                "text": "Una raíz cuadrada",
                "correct": false
              },
              {
                "id": "una-cordillera",
                "text": "Una cordillera",
                "correct": false
              },
              {
                "id": "un-circuito-eléctrico",
                "text": "Un circuito eléctrico",
                "correct": false
              }
            ],
            "explanation": "Los sufijos se añaden al final de una raíz o palabra para crear otra: pan → panadero; pequeño → pequeñito."
          },
          {
            "id": "tema-06-rep-sufijos-2",
            "question": "¿Qué otro contenido se trabaja en «Los sufijos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "sufijo",
                "text": "Sufijo",
                "correct": true
              },
              {
                "id": "los-planetas",
                "text": "Los planetas",
                "correct": false
              },
              {
                "id": "los-polígonos",
                "text": "Los polígonos",
                "correct": false
              },
              {
                "id": "la-fotosíntesis",
                "text": "La fotosíntesis",
                "correct": false
              }
            ],
            "explanation": "En esta sección también se trabaja sufijo."
          },
          {
            "id": "tema-06-rep-sufijos-3",
            "question": "¿Qué opción está relacionada con «Los sufijos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "derivación",
                "text": "Derivación",
                "correct": true
              },
              {
                "id": "división-decimal",
                "text": "División decimal",
                "correct": false
              },
              {
                "id": "escala-cartográfica",
                "text": "Escala cartográfica",
                "correct": false
              },
              {
                "id": "cadena-alimentaria",
                "text": "Cadena alimentaria",
                "correct": false
              }
            ],
            "explanation": "Derivación forma parte de esta sección."
          },
          {
            "id": "tema-06-rep-ger-gir-1",
            "question": "¿Cuál es uno de los conceptos que debes dominar en «Verbos acabados en -ger o -gir»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "ger",
                "text": "-ger",
                "correct": true
              },
              {
                "id": "una-raíz-cuadrada",
                "text": "Una raíz cuadrada",
                "correct": false
              },
              {
                "id": "una-cordillera",
                "text": "Una cordillera",
                "correct": false
              },
              {
                "id": "un-circuito-eléctrico",
                "text": "Un circuito eléctrico",
                "correct": false
              }
            ],
            "explanation": "Los verbos acabados en -ger y -gir suelen escribirse con g, excepto tejer y crujir. Ante a u o, algunas formas cambian g por j: coger → cojo."
          },
          {
            "id": "tema-06-rep-ger-gir-2",
            "question": "¿Qué otro contenido se trabaja en «Verbos acabados en -ger o -gir»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "gir",
                "text": "-gir",
                "correct": true
              },
              {
                "id": "los-planetas",
                "text": "Los planetas",
                "correct": false
              },
              {
                "id": "los-polígonos",
                "text": "Los polígonos",
                "correct": false
              },
              {
                "id": "la-fotosíntesis",
                "text": "La fotosíntesis",
                "correct": false
              }
            ],
            "explanation": "En esta sección también se trabaja -gir."
          },
          {
            "id": "tema-06-rep-ger-gir-3",
            "question": "¿Qué opción está relacionada con «Verbos acabados en -ger o -gir»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "g-j",
                "text": "G/j",
                "correct": true
              },
              {
                "id": "división-decimal",
                "text": "División decimal",
                "correct": false
              },
              {
                "id": "escala-cartográfica",
                "text": "Escala cartográfica",
                "correct": false
              },
              {
                "id": "cadena-alimentaria",
                "text": "Cadena alimentaria",
                "correct": false
              }
            ],
            "explanation": "G/j forma parte de esta sección."
          },
          {
            "id": "tema-06-rep-verbo-1",
            "question": "¿Cuál de estas palabras es un verbo?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "correr",
                "text": "correr",
                "correct": true
              },
              {
                "id": "carrera",
                "text": "carrera",
                "correct": false
              },
              {
                "id": "rápido",
                "text": "rápido",
                "correct": false
              },
              {
                "id": "corredor",
                "text": "corredor",
                "correct": false
              }
            ],
            "explanation": "«Correr» expresa una acción y está en infinitivo."
          },
          {
            "id": "tema-06-rep-verbo-2",
            "question": "¿A qué conjugación pertenece «comer»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "segunda-conjugación",
                "text": "Segunda conjugación",
                "correct": true
              },
              {
                "id": "primera-conjugación",
                "text": "Primera conjugación",
                "correct": false
              },
              {
                "id": "tercera-conjugación",
                "text": "Tercera conjugación",
                "correct": false
              },
              {
                "id": "no-es-un-verbo",
                "text": "No es un verbo",
                "correct": false
              }
            ],
            "explanation": "Los infinitivos terminados en -er pertenecen a la segunda conjugación."
          },
          {
            "id": "tema-06-rep-verbo-3",
            "question": "¿Cuál está en infinitivo?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "vivir",
                "text": "vivir",
                "correct": true
              },
              {
                "id": "vivimos",
                "text": "vivimos",
                "correct": false
              },
              {
                "id": "vivió",
                "text": "vivió",
                "correct": false
              },
              {
                "id": "viviendo",
                "text": "viviendo",
                "correct": false
              }
            ],
            "explanation": "«Vivir» termina en -ir y es infinitivo."
          },
          {
            "id": "tema-06-rep-anuncio-1",
            "question": "¿Cuál es uno de los conceptos que debes dominar en «El anuncio y el eslogan»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "publicidad",
                "text": "Publicidad",
                "correct": true
              },
              {
                "id": "una-raíz-cuadrada",
                "text": "Una raíz cuadrada",
                "correct": false
              },
              {
                "id": "una-cordillera",
                "text": "Una cordillera",
                "correct": false
              },
              {
                "id": "un-circuito-eléctrico",
                "text": "Un circuito eléctrico",
                "correct": false
              }
            ],
            "explanation": "Un anuncio busca llamar la atención y convencer. El eslogan es una frase breve y fácil de recordar."
          },
          {
            "id": "tema-06-rep-anuncio-2",
            "question": "¿Qué otro contenido se trabaja en «El anuncio y el eslogan»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "eslogan",
                "text": "Eslogan",
                "correct": true
              },
              {
                "id": "los-planetas",
                "text": "Los planetas",
                "correct": false
              },
              {
                "id": "los-polígonos",
                "text": "Los polígonos",
                "correct": false
              },
              {
                "id": "la-fotosíntesis",
                "text": "La fotosíntesis",
                "correct": false
              }
            ],
            "explanation": "En esta sección también se trabaja eslogan."
          },
          {
            "id": "tema-06-rep-anuncio-3",
            "question": "¿Qué opción está relacionada con «El anuncio y el eslogan»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "intención",
                "text": "Intención",
                "correct": true
              },
              {
                "id": "división-decimal",
                "text": "División decimal",
                "correct": false
              },
              {
                "id": "escala-cartográfica",
                "text": "Escala cartográfica",
                "correct": false
              },
              {
                "id": "cadena-alimentaria",
                "text": "Cadena alimentaria",
                "correct": false
              }
            ],
            "explanation": "Intención forma parte de esta sección."
          }
        ]
      }
    ]
  },
  {
    "id": "tema-07",
    "order": 7,
    "title": "¿Eso es verdad?",
    "description": "Unidad 7: teoría, ejemplos, práctica y repaso paso a paso.",
    "emoji": "🕵️",
    "sections": [
      {
        "id": "situacion",
        "title": "Hablar y escuchar: verdad e información",
        "subtitle": "Preguntar, comprobar y explicar",
        "kind": "communication",
        "emoji": "🗣️",
        "theory": [
          {
            "type": "text",
            "title": "Actividad de comunicación oral",
            "text": "Preguntar, comprobar y explicar."
          },
          {
            "type": "list",
            "title": "Qué debes practicar",
            "items": [
              "Escuchar antes de responder.",
              "Hablar con claridad y mantener el tema.",
              "Respetar el turno de palabra.",
              "Explicar opiniones con razones cuando sea necesario."
            ]
          },
          {
            "type": "important",
            "title": "Se practica hablando y escuchando",
            "text": "No se evalúa con preguntas tipo test en el repaso teórico."
          }
        ],
        "questions": []
      },
      {
        "id": "sufijos-sustantivos",
        "title": "Sufijos para formar sustantivos",
        "subtitle": "Crear nombres derivados",
        "kind": "vocabulary",
        "emoji": "🧩",
        "theory": [
          {
            "type": "text",
            "title": "Lo que vas a aprender",
            "text": "Crear nombres derivados."
          },
          {
            "type": "text",
            "title": "Explicación",
            "text": "Sufijos como -ero/-era, -ista, -ción o -dad permiten formar sustantivos a partir de otras palabras."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "-ero",
              "-ista",
              "-ción",
              "-dad"
            ]
          },
          {
            "type": "example",
            "title": "Aprende con ejemplos",
            "text": "Busca o inventa un ejemplo relacionado con -ero. Después explícalo con tus propias palabras."
          },
          {
            "type": "tip",
            "title": "Truco Palabraria",
            "text": "No memorices solo la definición: identifica la pista que te permite reconocer el concepto y úsala en un ejemplo nuevo."
          }
        ],
        "questions": [
          {
            "id": "sufijos-sustantivos-1",
            "question": "¿Cuál es uno de los conceptos que debes dominar en «Sufijos para formar sustantivos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "ero",
                "text": "-ero",
                "correct": true
              },
              {
                "id": "una-raíz-cuadrada",
                "text": "Una raíz cuadrada",
                "correct": false
              },
              {
                "id": "una-cordillera",
                "text": "Una cordillera",
                "correct": false
              },
              {
                "id": "un-circuito-eléctrico",
                "text": "Un circuito eléctrico",
                "correct": false
              }
            ],
            "explanation": "Sufijos como -ero/-era, -ista, -ción o -dad permiten formar sustantivos a partir de otras palabras."
          },
          {
            "id": "sufijos-sustantivos-2",
            "question": "¿Qué otro contenido se trabaja en «Sufijos para formar sustantivos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "ista",
                "text": "-ista",
                "correct": true
              },
              {
                "id": "los-planetas",
                "text": "Los planetas",
                "correct": false
              },
              {
                "id": "los-polígonos",
                "text": "Los polígonos",
                "correct": false
              },
              {
                "id": "la-fotosíntesis",
                "text": "La fotosíntesis",
                "correct": false
              }
            ],
            "explanation": "En esta sección también se trabaja -ista."
          },
          {
            "id": "sufijos-sustantivos-3",
            "question": "¿Qué opción está relacionada con «Sufijos para formar sustantivos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "ción",
                "text": "-ción",
                "correct": true
              },
              {
                "id": "división-decimal",
                "text": "División decimal",
                "correct": false
              },
              {
                "id": "escala-cartográfica",
                "text": "Escala cartográfica",
                "correct": false
              },
              {
                "id": "cadena-alimentaria",
                "text": "Cadena alimentaria",
                "correct": false
              }
            ],
            "explanation": "-ción forma parte de esta sección."
          },
          {
            "id": "sufijos-sustantivos-4",
            "question": "¿Cuál es el objetivo de «Sufijos para formar sustantivos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "crear-nombres-derivados",
                "text": "Crear nombres derivados",
                "correct": true
              },
              {
                "id": "resolver-problemas-numér",
                "text": "Resolver problemas numéricos",
                "correct": false
              },
              {
                "id": "estudiar-accidentes-geog",
                "text": "Estudiar accidentes geográficos",
                "correct": false
              },
              {
                "id": "clasificar-animales",
                "text": "Clasificar animales",
                "correct": false
              }
            ],
            "explanation": "Sufijos como -ero/-era, -ista, -ción o -dad permiten formar sustantivos a partir de otras palabras."
          },
          {
            "id": "sufijos-sustantivos-5",
            "question": "¿Qué estrategia demuestra que has comprendido un contenido de Lengua?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "reconocerlo-y-aplicarlo-",
                "text": "Reconocerlo y aplicarlo en ejemplos nuevos",
                "correct": true
              },
              {
                "id": "repetir-sin-entender",
                "text": "Repetir sin entender",
                "correct": false
              },
              {
                "id": "elegir-al-azar",
                "text": "Elegir al azar",
                "correct": false
              },
              {
                "id": "no-revisar-errores",
                "text": "No revisar errores",
                "correct": false
              }
            ],
            "explanation": "Comprender significa poder aplicar lo aprendido."
          }
        ]
      },
      {
        "id": "b-verbos",
        "title": "La b en los verbos",
        "subtitle": "Aplicar reglas frecuentes con b",
        "kind": "spelling",
        "emoji": "✏️",
        "theory": [
          {
            "type": "text",
            "title": "Lo que vas a aprender",
            "text": "Aplicar reglas frecuentes con b."
          },
          {
            "type": "text",
            "title": "Explicación",
            "text": "Las formas de verbos acabados en -bir suelen escribirse con b, salvo excepciones como hervir, servir y vivir. También se escribe con b el imperfecto de los verbos en -ar."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "-bir",
              "-aba",
              "Excepciones"
            ]
          },
          {
            "type": "example",
            "title": "Aprende con ejemplos",
            "text": "Busca o inventa un ejemplo relacionado con -bir. Después explícalo con tus propias palabras."
          },
          {
            "type": "tip",
            "title": "Truco Palabraria",
            "text": "No memorices solo la definición: identifica la pista que te permite reconocer el concepto y úsala en un ejemplo nuevo."
          }
        ],
        "questions": [
          {
            "id": "b-verbos-1",
            "question": "¿Cuál es uno de los conceptos que debes dominar en «La b en los verbos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "bir",
                "text": "-bir",
                "correct": true
              },
              {
                "id": "una-raíz-cuadrada",
                "text": "Una raíz cuadrada",
                "correct": false
              },
              {
                "id": "una-cordillera",
                "text": "Una cordillera",
                "correct": false
              },
              {
                "id": "un-circuito-eléctrico",
                "text": "Un circuito eléctrico",
                "correct": false
              }
            ],
            "explanation": "Las formas de verbos acabados en -bir suelen escribirse con b, salvo excepciones como hervir, servir y vivir. También se escribe con b el imperfecto de los verbos en -ar."
          },
          {
            "id": "b-verbos-2",
            "question": "¿Qué otro contenido se trabaja en «La b en los verbos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "aba",
                "text": "-aba",
                "correct": true
              },
              {
                "id": "los-planetas",
                "text": "Los planetas",
                "correct": false
              },
              {
                "id": "los-polígonos",
                "text": "Los polígonos",
                "correct": false
              },
              {
                "id": "la-fotosíntesis",
                "text": "La fotosíntesis",
                "correct": false
              }
            ],
            "explanation": "En esta sección también se trabaja -aba."
          },
          {
            "id": "b-verbos-3",
            "question": "¿Qué opción está relacionada con «La b en los verbos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "excepciones",
                "text": "Excepciones",
                "correct": true
              },
              {
                "id": "división-decimal",
                "text": "División decimal",
                "correct": false
              },
              {
                "id": "escala-cartográfica",
                "text": "Escala cartográfica",
                "correct": false
              },
              {
                "id": "cadena-alimentaria",
                "text": "Cadena alimentaria",
                "correct": false
              }
            ],
            "explanation": "Excepciones forma parte de esta sección."
          },
          {
            "id": "b-verbos-4",
            "question": "¿Cuál es el objetivo de «La b en los verbos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "aplicar-reglas-frecuente",
                "text": "Aplicar reglas frecuentes con b",
                "correct": true
              },
              {
                "id": "resolver-problemas-numér",
                "text": "Resolver problemas numéricos",
                "correct": false
              },
              {
                "id": "estudiar-accidentes-geog",
                "text": "Estudiar accidentes geográficos",
                "correct": false
              },
              {
                "id": "clasificar-animales",
                "text": "Clasificar animales",
                "correct": false
              }
            ],
            "explanation": "Las formas de verbos acabados en -bir suelen escribirse con b, salvo excepciones como hervir, servir y vivir. También se escribe con b el imperfecto de los verbos en -ar."
          },
          {
            "id": "b-verbos-5",
            "question": "¿Qué estrategia demuestra que has comprendido un contenido de Lengua?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "reconocerlo-y-aplicarlo-",
                "text": "Reconocerlo y aplicarlo en ejemplos nuevos",
                "correct": true
              },
              {
                "id": "repetir-sin-entender",
                "text": "Repetir sin entender",
                "correct": false
              },
              {
                "id": "elegir-al-azar",
                "text": "Elegir al azar",
                "correct": false
              },
              {
                "id": "no-revisar-errores",
                "text": "No revisar errores",
                "correct": false
              }
            ],
            "explanation": "Comprender significa poder aplicar lo aprendido."
          }
        ]
      },
      {
        "id": "numero-persona",
        "title": "Número y persona de los verbos",
        "subtitle": "Relacionar verbo y sujeto",
        "kind": "grammar",
        "emoji": "🔤",
        "theory": [
          {
            "type": "text",
            "title": "Lo que vas a aprender",
            "text": "Relacionar verbo y sujeto."
          },
          {
            "type": "text",
            "title": "Explicación",
            "text": "Una forma verbal puede estar en singular o plural y en primera, segunda o tercera persona."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Singular/plural",
              "1.ª persona",
              "2.ª persona",
              "3.ª persona"
            ]
          },
          {
            "type": "example",
            "title": "Aprende con ejemplos",
            "text": "Busca o inventa un ejemplo relacionado con singular/plural. Después explícalo con tus propias palabras."
          },
          {
            "type": "tip",
            "title": "Truco Palabraria",
            "text": "No memorices solo la definición: identifica la pista que te permite reconocer el concepto y úsala en un ejemplo nuevo."
          }
        ],
        "questions": [
          {
            "id": "t7-np-1",
            "question": "«Cantamos» está en…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "primera-persona-del-plur",
                "text": "primera persona del plural",
                "correct": true
              },
              {
                "id": "segunda-persona-singular",
                "text": "segunda persona singular",
                "correct": false
              },
              {
                "id": "tercera-persona-plural",
                "text": "tercera persona plural",
                "correct": false
              },
              {
                "id": "primera-persona-singular",
                "text": "primera persona singular",
                "correct": false
              }
            ],
            "explanation": "«Cantamos» equivale a «nosotros/nosotras cantamos»."
          },
          {
            "id": "t7-np-2",
            "question": "«Lees» corresponde a…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "segunda-persona-singular",
                "text": "segunda persona singular",
                "correct": true
              },
              {
                "id": "primera-plural",
                "text": "primera plural",
                "correct": false
              },
              {
                "id": "tercera-plural",
                "text": "tercera plural",
                "correct": false
              },
              {
                "id": "tercera-singular",
                "text": "tercera singular",
                "correct": false
              }
            ],
            "explanation": "«Tú lees»: segunda persona singular."
          },
          {
            "id": "t7-np-3",
            "question": "¿Qué forma está en tercera persona plural?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "corren",
                "text": "corren",
                "correct": true
              },
              {
                "id": "corro",
                "text": "corro",
                "correct": false
              },
              {
                "id": "corres",
                "text": "corres",
                "correct": false
              },
              {
                "id": "corremos",
                "text": "corremos",
                "correct": false
              }
            ],
            "explanation": "«Ellos/ellas corren» es tercera persona plural."
          },
          {
            "id": "t7-np-4",
            "question": "En «Yo dibujo», el verbo está en…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "primera-persona-singular",
                "text": "primera persona singular",
                "correct": true
              },
              {
                "id": "segunda-singular",
                "text": "segunda singular",
                "correct": false
              },
              {
                "id": "primera-plural",
                "text": "primera plural",
                "correct": false
              },
              {
                "id": "tercera-plural",
                "text": "tercera plural",
                "correct": false
              }
            ],
            "explanation": "El sujeto «yo» marca primera persona singular."
          },
          {
            "id": "t7-np-5",
            "question": "¿Qué dos rasgos indican quién realiza la acción?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "persona-y-número",
                "text": "persona y número",
                "correct": true
              },
              {
                "id": "género-y-tilde",
                "text": "género y tilde",
                "correct": false
              },
              {
                "id": "rima-y-verso",
                "text": "rima y verso",
                "correct": false
              },
              {
                "id": "prefijo-y-sufijo",
                "text": "prefijo y sufijo",
                "correct": false
              }
            ],
            "explanation": "Persona y número relacionan la forma verbal con su sujeto."
          }
        ]
      },
      {
        "id": "literatura",
        "title": "La medida de los versos",
        "subtitle": "Contar sílabas métricas de forma inicial",
        "kind": "literature",
        "emoji": "📚",
        "theory": [
          {
            "type": "text",
            "title": "Lo que vas a aprender",
            "text": "Contar sílabas métricas de forma inicial."
          },
          {
            "type": "text",
            "title": "Explicación",
            "text": "Para medir un verso se cuentan sus sílabas teniendo en cuenta fenómenos como la unión de vocales entre palabras en determinados casos."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Verso",
              "Sílabas",
              "Ritmo"
            ]
          },
          {
            "type": "example",
            "title": "Aprende con ejemplos",
            "text": "Busca o inventa un ejemplo relacionado con verso. Después explícalo con tus propias palabras."
          },
          {
            "type": "tip",
            "title": "Truco Palabraria",
            "text": "No memorices solo la definición: identifica la pista que te permite reconocer el concepto y úsala en un ejemplo nuevo."
          }
        ],
        "questions": [
          {
            "id": "literatura-1",
            "question": "¿Qué concepto pertenece a «La medida de los versos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "verso",
                "text": "Verso",
                "correct": true
              },
              {
                "id": "una-fracción",
                "text": "una fracción",
                "correct": false
              },
              {
                "id": "un-ecosistema",
                "text": "un ecosistema",
                "correct": false
              },
              {
                "id": "una-unidad-de-masa",
                "text": "una unidad de masa",
                "correct": false
              }
            ],
            "explanation": "Para medir un verso se cuentan sus sílabas teniendo en cuenta fenómenos como la unión de vocales entre palabras en determinados casos."
          },
          {
            "id": "literatura-2",
            "question": "¿Cuál es otra idea importante de «La medida de los versos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "sílabas",
                "text": "Sílabas",
                "correct": true
              },
              {
                "id": "multiplicación",
                "text": "multiplicación",
                "correct": false
              },
              {
                "id": "kilómetro",
                "text": "kilómetro",
                "correct": false
              },
              {
                "id": "continente",
                "text": "continente",
                "correct": false
              }
            ],
            "explanation": "También trabajamos sílabas."
          },
          {
            "id": "literatura-3",
            "question": "En literatura, además de entender qué ocurre, conviene fijarse en…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "cómo-está-usado-el-lengu",
                "text": "cómo está usado el lenguaje",
                "correct": true
              },
              {
                "id": "solo-el-número-de-página",
                "text": "solo el número de páginas",
                "correct": false
              },
              {
                "id": "el-precio-del-libro",
                "text": "el precio del libro",
                "correct": false
              },
              {
                "id": "el-tamaño-de-la-portada",
                "text": "el tamaño de la portada",
                "correct": false
              }
            ],
            "explanation": "La forma de usar el lenguaje es fundamental en los textos literarios."
          },
          {
            "id": "literatura-4",
            "question": "¿Qué deberías ser capaz de reconocer después de estudiar esta sección?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "ritmo",
                "text": "Ritmo",
                "correct": true
              },
              {
                "id": "una-operación",
                "text": "una operación",
                "correct": false
              },
              {
                "id": "una-coordenada",
                "text": "una coordenada",
                "correct": false
              },
              {
                "id": "una-unidad-de-volumen",
                "text": "una unidad de volumen",
                "correct": false
              }
            ],
            "explanation": "Uno de los aprendizajes previstos es reconocer ritmo."
          },
          {
            "id": "literatura-5",
            "question": "¿Cuál es una buena forma de demostrar comprensión literaria?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "identificar-el-recurso-o",
                "text": "Identificar el recurso o elemento y explicar su efecto",
                "correct": true
              },
              {
                "id": "copiar-sin-explicar",
                "text": "copiar sin explicar",
                "correct": false
              },
              {
                "id": "contar-letras",
                "text": "contar letras",
                "correct": false
              },
              {
                "id": "responder-sin-leer",
                "text": "responder sin leer",
                "correct": false
              }
            ],
            "explanation": "Hay que reconocer los elementos y comprender para qué sirven."
          }
        ]
      },
      {
        "id": "escritura",
        "title": "Redactar una noticia",
        "subtitle": "Informar de un hecho",
        "kind": "writing",
        "emoji": "📝",
        "theory": [
          {
            "type": "text",
            "title": "Actividad de expresión escrita",
            "text": "Informar de un hecho."
          },
          {
            "type": "list",
            "title": "Cómo hacer la actividad",
            "items": [
              "Piensa qué quieres comunicar y a quién va dirigido.",
              "Haz un pequeño borrador y ordena las ideas.",
              "Escribe el texto siguiendo las características trabajadas en la unidad.",
              "Relee lo escrito y corrige ortografía, puntuación y repeticiones.",
              "Comprueba que el resultado cumple el objetivo de la actividad."
            ]
          },
          {
            "type": "important",
            "title": "Aquí no hay examen tipo test",
            "text": "Esta sección se aprende escribiendo. El objetivo es producir un texto, revisarlo y mejorarlo."
          }
        ],
        "questions": []
      },
      {
        "id": "repaso",
        "title": "Comprueba tu progreso",
        "subtitle": "Consolidar el tema",
        "kind": "review",
        "emoji": "🏆",
        "theory": [
          {
            "type": "text",
            "title": "Repaso de la teoría de la unidad",
            "text": "Comprueba lo aprendido en los contenidos teóricos de este tema."
          },
          {
            "type": "important",
            "title": "Qué se repasa",
            "text": "Vocabulario, ortografía, gramática y, cuando corresponde, literatura o alfabetización mediática."
          },
          {
            "type": "tip",
            "title": "Comprensión lectora",
            "text": "Las lecturas y sus actividades de comprensión se trabajan en clase y no forman parte de Palabraria."
          }
        ],
        "questions": [
          {
            "id": "tema-07-rep-sufijos-sustantivos-1",
            "question": "¿Cuál es uno de los conceptos que debes dominar en «Sufijos para formar sustantivos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "ero",
                "text": "-ero",
                "correct": true
              },
              {
                "id": "una-raíz-cuadrada",
                "text": "Una raíz cuadrada",
                "correct": false
              },
              {
                "id": "una-cordillera",
                "text": "Una cordillera",
                "correct": false
              },
              {
                "id": "un-circuito-eléctrico",
                "text": "Un circuito eléctrico",
                "correct": false
              }
            ],
            "explanation": "Sufijos como -ero/-era, -ista, -ción o -dad permiten formar sustantivos a partir de otras palabras."
          },
          {
            "id": "tema-07-rep-sufijos-sustantivos-2",
            "question": "¿Qué otro contenido se trabaja en «Sufijos para formar sustantivos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "ista",
                "text": "-ista",
                "correct": true
              },
              {
                "id": "los-planetas",
                "text": "Los planetas",
                "correct": false
              },
              {
                "id": "los-polígonos",
                "text": "Los polígonos",
                "correct": false
              },
              {
                "id": "la-fotosíntesis",
                "text": "La fotosíntesis",
                "correct": false
              }
            ],
            "explanation": "En esta sección también se trabaja -ista."
          },
          {
            "id": "tema-07-rep-sufijos-sustantivos-3",
            "question": "¿Qué opción está relacionada con «Sufijos para formar sustantivos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "ción",
                "text": "-ción",
                "correct": true
              },
              {
                "id": "división-decimal",
                "text": "División decimal",
                "correct": false
              },
              {
                "id": "escala-cartográfica",
                "text": "Escala cartográfica",
                "correct": false
              },
              {
                "id": "cadena-alimentaria",
                "text": "Cadena alimentaria",
                "correct": false
              }
            ],
            "explanation": "-ción forma parte de esta sección."
          },
          {
            "id": "tema-07-rep-b-verbos-1",
            "question": "¿Cuál es uno de los conceptos que debes dominar en «La b en los verbos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "bir",
                "text": "-bir",
                "correct": true
              },
              {
                "id": "una-raíz-cuadrada",
                "text": "Una raíz cuadrada",
                "correct": false
              },
              {
                "id": "una-cordillera",
                "text": "Una cordillera",
                "correct": false
              },
              {
                "id": "un-circuito-eléctrico",
                "text": "Un circuito eléctrico",
                "correct": false
              }
            ],
            "explanation": "Las formas de verbos acabados en -bir suelen escribirse con b, salvo excepciones como hervir, servir y vivir. También se escribe con b el imperfecto de los verbos en -ar."
          },
          {
            "id": "tema-07-rep-b-verbos-2",
            "question": "¿Qué otro contenido se trabaja en «La b en los verbos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "aba",
                "text": "-aba",
                "correct": true
              },
              {
                "id": "los-planetas",
                "text": "Los planetas",
                "correct": false
              },
              {
                "id": "los-polígonos",
                "text": "Los polígonos",
                "correct": false
              },
              {
                "id": "la-fotosíntesis",
                "text": "La fotosíntesis",
                "correct": false
              }
            ],
            "explanation": "En esta sección también se trabaja -aba."
          },
          {
            "id": "tema-07-rep-b-verbos-3",
            "question": "¿Qué opción está relacionada con «La b en los verbos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "excepciones",
                "text": "Excepciones",
                "correct": true
              },
              {
                "id": "división-decimal",
                "text": "División decimal",
                "correct": false
              },
              {
                "id": "escala-cartográfica",
                "text": "Escala cartográfica",
                "correct": false
              },
              {
                "id": "cadena-alimentaria",
                "text": "Cadena alimentaria",
                "correct": false
              }
            ],
            "explanation": "Excepciones forma parte de esta sección."
          },
          {
            "id": "tema-07-rep-numero-persona-1",
            "question": "«Cantamos» está en…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "primera-persona-del-plur",
                "text": "primera persona del plural",
                "correct": true
              },
              {
                "id": "segunda-persona-singular",
                "text": "segunda persona singular",
                "correct": false
              },
              {
                "id": "tercera-persona-plural",
                "text": "tercera persona plural",
                "correct": false
              },
              {
                "id": "primera-persona-singular",
                "text": "primera persona singular",
                "correct": false
              }
            ],
            "explanation": "«Cantamos» equivale a «nosotros/nosotras cantamos»."
          },
          {
            "id": "tema-07-rep-numero-persona-2",
            "question": "«Lees» corresponde a…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "segunda-persona-singular",
                "text": "segunda persona singular",
                "correct": true
              },
              {
                "id": "primera-plural",
                "text": "primera plural",
                "correct": false
              },
              {
                "id": "tercera-plural",
                "text": "tercera plural",
                "correct": false
              },
              {
                "id": "tercera-singular",
                "text": "tercera singular",
                "correct": false
              }
            ],
            "explanation": "«Tú lees»: segunda persona singular."
          },
          {
            "id": "tema-07-rep-numero-persona-3",
            "question": "¿Qué forma está en tercera persona plural?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "corren",
                "text": "corren",
                "correct": true
              },
              {
                "id": "corro",
                "text": "corro",
                "correct": false
              },
              {
                "id": "corres",
                "text": "corres",
                "correct": false
              },
              {
                "id": "corremos",
                "text": "corremos",
                "correct": false
              }
            ],
            "explanation": "«Ellos/ellas corren» es tercera persona plural."
          },
          {
            "id": "tema-07-rep-literatura-1",
            "question": "¿Qué concepto pertenece a «La medida de los versos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "verso",
                "text": "Verso",
                "correct": true
              },
              {
                "id": "una-fracción",
                "text": "una fracción",
                "correct": false
              },
              {
                "id": "un-ecosistema",
                "text": "un ecosistema",
                "correct": false
              },
              {
                "id": "una-unidad-de-masa",
                "text": "una unidad de masa",
                "correct": false
              }
            ],
            "explanation": "Para medir un verso se cuentan sus sílabas teniendo en cuenta fenómenos como la unión de vocales entre palabras en determinados casos."
          },
          {
            "id": "tema-07-rep-literatura-2",
            "question": "¿Cuál es otra idea importante de «La medida de los versos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "sílabas",
                "text": "Sílabas",
                "correct": true
              },
              {
                "id": "multiplicación",
                "text": "multiplicación",
                "correct": false
              },
              {
                "id": "kilómetro",
                "text": "kilómetro",
                "correct": false
              },
              {
                "id": "continente",
                "text": "continente",
                "correct": false
              }
            ],
            "explanation": "También trabajamos sílabas."
          },
          {
            "id": "tema-07-rep-literatura-3",
            "question": "En literatura, además de entender qué ocurre, conviene fijarse en…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "cómo-está-usado-el-lengu",
                "text": "cómo está usado el lenguaje",
                "correct": true
              },
              {
                "id": "solo-el-número-de-página",
                "text": "solo el número de páginas",
                "correct": false
              },
              {
                "id": "el-precio-del-libro",
                "text": "el precio del libro",
                "correct": false
              },
              {
                "id": "el-tamaño-de-la-portada",
                "text": "el tamaño de la portada",
                "correct": false
              }
            ],
            "explanation": "La forma de usar el lenguaje es fundamental en los textos literarios."
          }
        ]
      }
    ]
  },
  {
    "id": "tema-08",
    "order": 8,
    "title": "¿Queremos ciudades más sanas?",
    "description": "Unidad 8: teoría, ejemplos, práctica y repaso paso a paso.",
    "emoji": "🌳",
    "sections": [
      {
        "id": "situacion",
        "title": "Hablar y escuchar: mejorar la ciudad",
        "subtitle": "Proponer mejoras razonadas",
        "kind": "communication",
        "emoji": "🗣️",
        "theory": [
          {
            "type": "text",
            "title": "Actividad de comunicación oral",
            "text": "Proponer mejoras razonadas."
          },
          {
            "type": "list",
            "title": "Qué debes practicar",
            "items": [
              "Escuchar antes de responder.",
              "Hablar con claridad y mantener el tema.",
              "Respetar el turno de palabra.",
              "Explicar opiniones con razones cuando sea necesario."
            ]
          },
          {
            "type": "important",
            "title": "Se practica hablando y escuchando",
            "text": "No se evalúa con preguntas tipo test en el repaso teórico."
          }
        ],
        "questions": []
      },
      {
        "id": "sufijos-adjetivos",
        "title": "Sufijos para formar adjetivos",
        "subtitle": "Crear adjetivos derivados",
        "kind": "vocabulary",
        "emoji": "🧩",
        "theory": [
          {
            "type": "text",
            "title": "Lo que vas a aprender",
            "text": "Crear adjetivos derivados."
          },
          {
            "type": "text",
            "title": "Explicación",
            "text": "Sufijos como -oso/-osa, -al, -able o -ivo/-iva pueden formar adjetivos: peligro → peligroso."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "-oso",
              "-al",
              "-able",
              "Derivación"
            ]
          },
          {
            "type": "example",
            "title": "Aprende con ejemplos",
            "text": "Busca o inventa un ejemplo relacionado con -oso. Después explícalo con tus propias palabras."
          },
          {
            "type": "tip",
            "title": "Truco Palabraria",
            "text": "No memorices solo la definición: identifica la pista que te permite reconocer el concepto y úsala en un ejemplo nuevo."
          }
        ],
        "questions": [
          {
            "id": "sufijos-adjetivos-1",
            "question": "¿Cuál es uno de los conceptos que debes dominar en «Sufijos para formar adjetivos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "oso",
                "text": "-oso",
                "correct": true
              },
              {
                "id": "una-raíz-cuadrada",
                "text": "Una raíz cuadrada",
                "correct": false
              },
              {
                "id": "una-cordillera",
                "text": "Una cordillera",
                "correct": false
              },
              {
                "id": "un-circuito-eléctrico",
                "text": "Un circuito eléctrico",
                "correct": false
              }
            ],
            "explanation": "Sufijos como -oso/-osa, -al, -able o -ivo/-iva pueden formar adjetivos: peligro → peligroso."
          },
          {
            "id": "sufijos-adjetivos-2",
            "question": "¿Qué otro contenido se trabaja en «Sufijos para formar adjetivos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "al",
                "text": "-al",
                "correct": true
              },
              {
                "id": "los-planetas",
                "text": "Los planetas",
                "correct": false
              },
              {
                "id": "los-polígonos",
                "text": "Los polígonos",
                "correct": false
              },
              {
                "id": "la-fotosíntesis",
                "text": "La fotosíntesis",
                "correct": false
              }
            ],
            "explanation": "En esta sección también se trabaja -al."
          },
          {
            "id": "sufijos-adjetivos-3",
            "question": "¿Qué opción está relacionada con «Sufijos para formar adjetivos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "able",
                "text": "-able",
                "correct": true
              },
              {
                "id": "división-decimal",
                "text": "División decimal",
                "correct": false
              },
              {
                "id": "escala-cartográfica",
                "text": "Escala cartográfica",
                "correct": false
              },
              {
                "id": "cadena-alimentaria",
                "text": "Cadena alimentaria",
                "correct": false
              }
            ],
            "explanation": "-able forma parte de esta sección."
          },
          {
            "id": "sufijos-adjetivos-4",
            "question": "¿Cuál es el objetivo de «Sufijos para formar adjetivos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "crear-adjetivos-derivado",
                "text": "Crear adjetivos derivados",
                "correct": true
              },
              {
                "id": "resolver-problemas-numér",
                "text": "Resolver problemas numéricos",
                "correct": false
              },
              {
                "id": "estudiar-accidentes-geog",
                "text": "Estudiar accidentes geográficos",
                "correct": false
              },
              {
                "id": "clasificar-animales",
                "text": "Clasificar animales",
                "correct": false
              }
            ],
            "explanation": "Sufijos como -oso/-osa, -al, -able o -ivo/-iva pueden formar adjetivos: peligro → peligroso."
          },
          {
            "id": "sufijos-adjetivos-5",
            "question": "¿Qué estrategia demuestra que has comprendido un contenido de Lengua?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "reconocerlo-y-aplicarlo-",
                "text": "Reconocerlo y aplicarlo en ejemplos nuevos",
                "correct": true
              },
              {
                "id": "repetir-sin-entender",
                "text": "Repetir sin entender",
                "correct": false
              },
              {
                "id": "elegir-al-azar",
                "text": "Elegir al azar",
                "correct": false
              },
              {
                "id": "no-revisar-errores",
                "text": "No revisar errores",
                "correct": false
              }
            ],
            "explanation": "Comprender significa poder aplicar lo aprendido."
          }
        ]
      },
      {
        "id": "y-verbos",
        "title": "La y en los verbos",
        "subtitle": "Reconocer formas verbales con y",
        "kind": "spelling",
        "emoji": "✏️",
        "theory": [
          {
            "type": "text",
            "title": "Lo que vas a aprender",
            "text": "Reconocer formas verbales con y."
          },
          {
            "type": "text",
            "title": "Explicación",
            "text": "Algunas formas verbales contienen y aunque el infinitivo no la tenga, como cayó, leyeron o construyeron. Conviene observar la familia verbal."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Y",
              "Formas verbales",
              "Familia verbal"
            ]
          },
          {
            "type": "example",
            "title": "Aprende con ejemplos",
            "text": "Busca o inventa un ejemplo relacionado con y. Después explícalo con tus propias palabras."
          },
          {
            "type": "tip",
            "title": "Truco Palabraria",
            "text": "No memorices solo la definición: identifica la pista que te permite reconocer el concepto y úsala en un ejemplo nuevo."
          }
        ],
        "questions": [
          {
            "id": "y-verbos-1",
            "question": "¿Cuál es uno de los conceptos que debes dominar en «La y en los verbos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "y",
                "text": "Y",
                "correct": true
              },
              {
                "id": "una-raíz-cuadrada",
                "text": "Una raíz cuadrada",
                "correct": false
              },
              {
                "id": "una-cordillera",
                "text": "Una cordillera",
                "correct": false
              },
              {
                "id": "un-circuito-eléctrico",
                "text": "Un circuito eléctrico",
                "correct": false
              }
            ],
            "explanation": "Algunas formas verbales contienen y aunque el infinitivo no la tenga, como cayó, leyeron o construyeron. Conviene observar la familia verbal."
          },
          {
            "id": "y-verbos-2",
            "question": "¿Qué otro contenido se trabaja en «La y en los verbos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "formas-verbales",
                "text": "Formas verbales",
                "correct": true
              },
              {
                "id": "los-planetas",
                "text": "Los planetas",
                "correct": false
              },
              {
                "id": "los-polígonos",
                "text": "Los polígonos",
                "correct": false
              },
              {
                "id": "la-fotosíntesis",
                "text": "La fotosíntesis",
                "correct": false
              }
            ],
            "explanation": "En esta sección también se trabaja formas verbales."
          },
          {
            "id": "y-verbos-3",
            "question": "¿Qué opción está relacionada con «La y en los verbos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "familia-verbal",
                "text": "Familia verbal",
                "correct": true
              },
              {
                "id": "división-decimal",
                "text": "División decimal",
                "correct": false
              },
              {
                "id": "escala-cartográfica",
                "text": "Escala cartográfica",
                "correct": false
              },
              {
                "id": "cadena-alimentaria",
                "text": "Cadena alimentaria",
                "correct": false
              }
            ],
            "explanation": "Familia verbal forma parte de esta sección."
          },
          {
            "id": "y-verbos-4",
            "question": "¿Cuál es el objetivo de «La y en los verbos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "reconocer-formas-verbale",
                "text": "Reconocer formas verbales con y",
                "correct": true
              },
              {
                "id": "resolver-problemas-numér",
                "text": "Resolver problemas numéricos",
                "correct": false
              },
              {
                "id": "estudiar-accidentes-geog",
                "text": "Estudiar accidentes geográficos",
                "correct": false
              },
              {
                "id": "clasificar-animales",
                "text": "Clasificar animales",
                "correct": false
              }
            ],
            "explanation": "Algunas formas verbales contienen y aunque el infinitivo no la tenga, como cayó, leyeron o construyeron. Conviene observar la familia verbal."
          },
          {
            "id": "y-verbos-5",
            "question": "¿Qué estrategia demuestra que has comprendido un contenido de Lengua?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "reconocerlo-y-aplicarlo-",
                "text": "Reconocerlo y aplicarlo en ejemplos nuevos",
                "correct": true
              },
              {
                "id": "repetir-sin-entender",
                "text": "Repetir sin entender",
                "correct": false
              },
              {
                "id": "elegir-al-azar",
                "text": "Elegir al azar",
                "correct": false
              },
              {
                "id": "no-revisar-errores",
                "text": "No revisar errores",
                "correct": false
              }
            ],
            "explanation": "Comprender significa poder aplicar lo aprendido."
          }
        ]
      },
      {
        "id": "tiempos",
        "title": "Los tiempos verbales",
        "subtitle": "Situar acciones en el tiempo",
        "kind": "grammar",
        "emoji": "🔤",
        "theory": [
          {
            "type": "text",
            "title": "Lo que vas a aprender",
            "text": "Situar acciones en el tiempo."
          },
          {
            "type": "text",
            "title": "Explicación",
            "text": "El presente sitúa la acción ahora; el pasado, antes; y el futuro, después. Los verbos poseen distintas formas para expresarlos."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Presente",
              "Pasado",
              "Futuro"
            ]
          },
          {
            "type": "example",
            "title": "Aprende con ejemplos",
            "text": "Busca o inventa un ejemplo relacionado con presente. Después explícalo con tus propias palabras."
          },
          {
            "type": "tip",
            "title": "Truco Palabraria",
            "text": "No memorices solo la definición: identifica la pista que te permite reconocer el concepto y úsala en un ejemplo nuevo."
          }
        ],
        "questions": [
          {
            "id": "t8-ti-1",
            "question": "«Ayer jugamos en el parque» está en…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "pasado",
                "text": "pasado",
                "correct": true
              },
              {
                "id": "presente",
                "text": "presente",
                "correct": false
              },
              {
                "id": "futuro",
                "text": "futuro",
                "correct": false
              },
              {
                "id": "infinitivo",
                "text": "infinitivo",
                "correct": false
              }
            ],
            "explanation": "«Ayer» sitúa una acción ya ocurrida."
          },
          {
            "id": "t8-ti-2",
            "question": "«Mañana visitaré a mi abuela» está en…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "futuro",
                "text": "futuro",
                "correct": true
              },
              {
                "id": "pasado",
                "text": "pasado",
                "correct": false
              },
              {
                "id": "presente",
                "text": "presente",
                "correct": false
              },
              {
                "id": "imperativo",
                "text": "imperativo",
                "correct": false
              }
            ],
            "explanation": "La acción se realizará después del momento actual."
          },
          {
            "id": "t8-ti-3",
            "question": "¿Qué oración está en presente?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "ahora-leo-un-cuento",
                "text": "Ahora leo un cuento",
                "correct": true
              },
              {
                "id": "ayer-leí-un-cuento",
                "text": "Ayer leí un cuento",
                "correct": false
              },
              {
                "id": "mañana-leeré-un-cuento",
                "text": "Mañana leeré un cuento",
                "correct": false
              },
              {
                "id": "la-semana-pasada-leía",
                "text": "La semana pasada leía",
                "correct": false
              }
            ],
            "explanation": "«Leo» expresa una acción situada en el presente."
          },
          {
            "id": "t8-ti-4",
            "question": "El tiempo verbal indica principalmente…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "cuándo-ocurre-la-acción",
                "text": "cuándo ocurre la acción",
                "correct": true
              },
              {
                "id": "el-género-del-sustantivo",
                "text": "el género del sustantivo",
                "correct": false
              },
              {
                "id": "el-número-de-sílabas",
                "text": "el número de sílabas",
                "correct": false
              },
              {
                "id": "la-distancia-de-un-objet",
                "text": "la distancia de un objeto",
                "correct": false
              }
            ],
            "explanation": "Permite situar la acción antes, ahora o después."
          },
          {
            "id": "t8-ti-5",
            "question": "Pasado, presente y futuro son…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "tiempos-verbales",
                "text": "tiempos verbales",
                "correct": true
              },
              {
                "id": "tipos-de-sustantivos",
                "text": "tipos de sustantivos",
                "correct": false
              },
              {
                "id": "campos-semánticos",
                "text": "campos semánticos",
                "correct": false
              },
              {
                "id": "recursos-literarios",
                "text": "recursos literarios",
                "correct": false
              }
            ],
            "explanation": "Son las tres referencias temporales básicas."
          }
        ]
      },
      {
        "id": "hechos-opiniones",
        "title": "Hechos y opiniones",
        "subtitle": "Distinguir información comprobable de valoración",
        "kind": "media",
        "emoji": "🌐",
        "theory": [
          {
            "type": "text",
            "title": "Lo que vas a aprender",
            "text": "Distinguir información comprobable de valoración."
          },
          {
            "type": "text",
            "title": "Explicación",
            "text": "Un hecho puede comprobarse; una opinión expresa una valoración personal. Las opiniones pueden argumentarse, pero no son datos por sí mismas."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Hecho",
              "Opinión",
              "Comprobación"
            ]
          },
          {
            "type": "example",
            "title": "Aprende con ejemplos",
            "text": "Busca o inventa un ejemplo relacionado con hecho. Después explícalo con tus propias palabras."
          },
          {
            "type": "tip",
            "title": "Truco Palabraria",
            "text": "No memorices solo la definición: identifica la pista que te permite reconocer el concepto y úsala en un ejemplo nuevo."
          }
        ],
        "questions": [
          {
            "id": "t8-ho-1",
            "question": "¿Cuál es un hecho comprobable?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "la-biblioteca-abre-a-las",
                "text": "La biblioteca abre a las nueve",
                "correct": true
              },
              {
                "id": "esta-biblioteca-es-preci",
                "text": "Esta biblioteca es preciosa",
                "correct": false
              },
              {
                "id": "leer-es-lo-más-divertido",
                "text": "Leer es lo más divertido",
                "correct": false
              },
              {
                "id": "ese-libro-es-aburridísim",
                "text": "Ese libro es aburridísimo",
                "correct": false
              }
            ],
            "explanation": "El horario puede comprobarse."
          },
          {
            "id": "t8-ho-2",
            "question": "¿Cuál es una opinión?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "el-parque-es-demasiado-p",
                "text": "El parque es demasiado pequeño",
                "correct": true
              },
              {
                "id": "el-parque-tiene-dos-fuen",
                "text": "El parque tiene dos fuentes",
                "correct": false
              },
              {
                "id": "el-parque-abre-a-las-och",
                "text": "El parque abre a las ocho",
                "correct": false
              },
              {
                "id": "hay-veinte-bancos",
                "text": "Hay veinte bancos",
                "correct": false
              }
            ],
            "explanation": "«Demasiado pequeño» expresa una valoración."
          },
          {
            "id": "t8-ho-3",
            "question": "Para saber si una afirmación es un hecho debemos…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "comprobarla-con-evidenci",
                "text": "comprobarla con evidencias",
                "correct": true
              },
              {
                "id": "ver-si-nos-gusta",
                "text": "ver si nos gusta",
                "correct": false
              },
              {
                "id": "contar-sus-sílabas",
                "text": "contar sus sílabas",
                "correct": false
              },
              {
                "id": "ponerle-una-tilde",
                "text": "ponerle una tilde",
                "correct": false
              }
            ],
            "explanation": "Los hechos pueden contrastarse."
          },
          {
            "id": "t8-ho-4",
            "question": "«En mi opinión, esta película es genial» es…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "una-opinión",
                "text": "una opinión",
                "correct": true
              },
              {
                "id": "un-hecho",
                "text": "un hecho",
                "correct": false
              },
              {
                "id": "una-norma-ortográfica",
                "text": "una norma ortográfica",
                "correct": false
              },
              {
                "id": "una-noticia-completa",
                "text": "una noticia completa",
                "correct": false
              }
            ],
            "explanation": "La expresión «en mi opinión» introduce una valoración personal."
          },
          {
            "id": "t8-ho-5",
            "question": "¿Qué diferencia principal hay?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "el-hecho-es-comprobable-",
                "text": "El hecho es comprobable; la opinión valora",
                "correct": true
              },
              {
                "id": "la-opinión-siempre-es-fa",
                "text": "La opinión siempre es falsa",
                "correct": false
              },
              {
                "id": "el-hecho-siempre-gusta-a",
                "text": "El hecho siempre gusta a todos",
                "correct": false
              },
              {
                "id": "no-existe-diferencia",
                "text": "No existe diferencia",
                "correct": false
              }
            ],
            "explanation": "Esa es la distinción fundamental."
          }
        ]
      },
      {
        "id": "escritura",
        "title": "Cartel con recomendaciones",
        "subtitle": "Dar consejos de forma visual",
        "kind": "writing",
        "emoji": "📝",
        "theory": [
          {
            "type": "text",
            "title": "Actividad de expresión escrita",
            "text": "Dar consejos de forma visual."
          },
          {
            "type": "list",
            "title": "Cómo hacer la actividad",
            "items": [
              "Piensa qué quieres comunicar y a quién va dirigido.",
              "Haz un pequeño borrador y ordena las ideas.",
              "Escribe el texto siguiendo las características trabajadas en la unidad.",
              "Relee lo escrito y corrige ortografía, puntuación y repeticiones.",
              "Comprueba que el resultado cumple el objetivo de la actividad."
            ]
          },
          {
            "type": "important",
            "title": "Aquí no hay examen tipo test",
            "text": "Esta sección se aprende escribiendo. El objetivo es producir un texto, revisarlo y mejorarlo."
          }
        ],
        "questions": []
      },
      {
        "id": "repaso",
        "title": "Comprueba tu progreso",
        "subtitle": "Cerrar el segundo trimestre",
        "kind": "review",
        "emoji": "🏆",
        "theory": [
          {
            "type": "text",
            "title": "Repaso de la teoría de la unidad",
            "text": "Comprueba lo aprendido en los contenidos teóricos de este tema."
          },
          {
            "type": "important",
            "title": "Qué se repasa",
            "text": "Vocabulario, ortografía, gramática y, cuando corresponde, literatura o alfabetización mediática."
          },
          {
            "type": "tip",
            "title": "Comprensión lectora",
            "text": "Las lecturas y sus actividades de comprensión se trabajan en clase y no forman parte de Palabraria."
          }
        ],
        "questions": [
          {
            "id": "tema-08-rep-sufijos-adjetivos-1",
            "question": "¿Cuál es uno de los conceptos que debes dominar en «Sufijos para formar adjetivos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "oso",
                "text": "-oso",
                "correct": true
              },
              {
                "id": "una-raíz-cuadrada",
                "text": "Una raíz cuadrada",
                "correct": false
              },
              {
                "id": "una-cordillera",
                "text": "Una cordillera",
                "correct": false
              },
              {
                "id": "un-circuito-eléctrico",
                "text": "Un circuito eléctrico",
                "correct": false
              }
            ],
            "explanation": "Sufijos como -oso/-osa, -al, -able o -ivo/-iva pueden formar adjetivos: peligro → peligroso."
          },
          {
            "id": "tema-08-rep-sufijos-adjetivos-2",
            "question": "¿Qué otro contenido se trabaja en «Sufijos para formar adjetivos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "al",
                "text": "-al",
                "correct": true
              },
              {
                "id": "los-planetas",
                "text": "Los planetas",
                "correct": false
              },
              {
                "id": "los-polígonos",
                "text": "Los polígonos",
                "correct": false
              },
              {
                "id": "la-fotosíntesis",
                "text": "La fotosíntesis",
                "correct": false
              }
            ],
            "explanation": "En esta sección también se trabaja -al."
          },
          {
            "id": "tema-08-rep-sufijos-adjetivos-3",
            "question": "¿Qué opción está relacionada con «Sufijos para formar adjetivos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "able",
                "text": "-able",
                "correct": true
              },
              {
                "id": "división-decimal",
                "text": "División decimal",
                "correct": false
              },
              {
                "id": "escala-cartográfica",
                "text": "Escala cartográfica",
                "correct": false
              },
              {
                "id": "cadena-alimentaria",
                "text": "Cadena alimentaria",
                "correct": false
              }
            ],
            "explanation": "-able forma parte de esta sección."
          },
          {
            "id": "tema-08-rep-y-verbos-1",
            "question": "¿Cuál es uno de los conceptos que debes dominar en «La y en los verbos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "y",
                "text": "Y",
                "correct": true
              },
              {
                "id": "una-raíz-cuadrada",
                "text": "Una raíz cuadrada",
                "correct": false
              },
              {
                "id": "una-cordillera",
                "text": "Una cordillera",
                "correct": false
              },
              {
                "id": "un-circuito-eléctrico",
                "text": "Un circuito eléctrico",
                "correct": false
              }
            ],
            "explanation": "Algunas formas verbales contienen y aunque el infinitivo no la tenga, como cayó, leyeron o construyeron. Conviene observar la familia verbal."
          },
          {
            "id": "tema-08-rep-y-verbos-2",
            "question": "¿Qué otro contenido se trabaja en «La y en los verbos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "formas-verbales",
                "text": "Formas verbales",
                "correct": true
              },
              {
                "id": "los-planetas",
                "text": "Los planetas",
                "correct": false
              },
              {
                "id": "los-polígonos",
                "text": "Los polígonos",
                "correct": false
              },
              {
                "id": "la-fotosíntesis",
                "text": "La fotosíntesis",
                "correct": false
              }
            ],
            "explanation": "En esta sección también se trabaja formas verbales."
          },
          {
            "id": "tema-08-rep-y-verbos-3",
            "question": "¿Qué opción está relacionada con «La y en los verbos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "familia-verbal",
                "text": "Familia verbal",
                "correct": true
              },
              {
                "id": "división-decimal",
                "text": "División decimal",
                "correct": false
              },
              {
                "id": "escala-cartográfica",
                "text": "Escala cartográfica",
                "correct": false
              },
              {
                "id": "cadena-alimentaria",
                "text": "Cadena alimentaria",
                "correct": false
              }
            ],
            "explanation": "Familia verbal forma parte de esta sección."
          },
          {
            "id": "tema-08-rep-tiempos-1",
            "question": "«Ayer jugamos en el parque» está en…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "pasado",
                "text": "pasado",
                "correct": true
              },
              {
                "id": "presente",
                "text": "presente",
                "correct": false
              },
              {
                "id": "futuro",
                "text": "futuro",
                "correct": false
              },
              {
                "id": "infinitivo",
                "text": "infinitivo",
                "correct": false
              }
            ],
            "explanation": "«Ayer» sitúa una acción ya ocurrida."
          },
          {
            "id": "tema-08-rep-tiempos-2",
            "question": "«Mañana visitaré a mi abuela» está en…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "futuro",
                "text": "futuro",
                "correct": true
              },
              {
                "id": "pasado",
                "text": "pasado",
                "correct": false
              },
              {
                "id": "presente",
                "text": "presente",
                "correct": false
              },
              {
                "id": "imperativo",
                "text": "imperativo",
                "correct": false
              }
            ],
            "explanation": "La acción se realizará después del momento actual."
          },
          {
            "id": "tema-08-rep-tiempos-3",
            "question": "¿Qué oración está en presente?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "ahora-leo-un-cuento",
                "text": "Ahora leo un cuento",
                "correct": true
              },
              {
                "id": "ayer-leí-un-cuento",
                "text": "Ayer leí un cuento",
                "correct": false
              },
              {
                "id": "mañana-leeré-un-cuento",
                "text": "Mañana leeré un cuento",
                "correct": false
              },
              {
                "id": "la-semana-pasada-leía",
                "text": "La semana pasada leía",
                "correct": false
              }
            ],
            "explanation": "«Leo» expresa una acción situada en el presente."
          },
          {
            "id": "tema-08-rep-hechos-opiniones-1",
            "question": "¿Cuál es un hecho comprobable?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "la-biblioteca-abre-a-las",
                "text": "La biblioteca abre a las nueve",
                "correct": true
              },
              {
                "id": "esta-biblioteca-es-preci",
                "text": "Esta biblioteca es preciosa",
                "correct": false
              },
              {
                "id": "leer-es-lo-más-divertido",
                "text": "Leer es lo más divertido",
                "correct": false
              },
              {
                "id": "ese-libro-es-aburridísim",
                "text": "Ese libro es aburridísimo",
                "correct": false
              }
            ],
            "explanation": "El horario puede comprobarse."
          },
          {
            "id": "tema-08-rep-hechos-opiniones-2",
            "question": "¿Cuál es una opinión?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "el-parque-es-demasiado-p",
                "text": "El parque es demasiado pequeño",
                "correct": true
              },
              {
                "id": "el-parque-tiene-dos-fuen",
                "text": "El parque tiene dos fuentes",
                "correct": false
              },
              {
                "id": "el-parque-abre-a-las-och",
                "text": "El parque abre a las ocho",
                "correct": false
              },
              {
                "id": "hay-veinte-bancos",
                "text": "Hay veinte bancos",
                "correct": false
              }
            ],
            "explanation": "«Demasiado pequeño» expresa una valoración."
          },
          {
            "id": "tema-08-rep-hechos-opiniones-3",
            "question": "Para saber si una afirmación es un hecho debemos…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "comprobarla-con-evidenci",
                "text": "comprobarla con evidencias",
                "correct": true
              },
              {
                "id": "ver-si-nos-gusta",
                "text": "ver si nos gusta",
                "correct": false
              },
              {
                "id": "contar-sus-sílabas",
                "text": "contar sus sílabas",
                "correct": false
              },
              {
                "id": "ponerle-una-tilde",
                "text": "ponerle una tilde",
                "correct": false
              }
            ],
            "explanation": "Los hechos pueden contrastarse."
          }
        ]
      }
    ]
  },
  {
    "id": "tema-09",
    "order": 9,
    "title": "¡Cuántas leyendas!",
    "description": "Unidad 9: teoría, ejemplos, práctica y repaso paso a paso.",
    "emoji": "🐉",
    "sections": [
      {
        "id": "situacion",
        "title": "Hablar y escuchar: historias locales",
        "subtitle": "Contar relatos tradicionales",
        "kind": "communication",
        "emoji": "🗣️",
        "theory": [
          {
            "type": "text",
            "title": "Actividad de comunicación oral",
            "text": "Contar relatos tradicionales."
          },
          {
            "type": "list",
            "title": "Qué debes practicar",
            "items": [
              "Escuchar antes de responder.",
              "Hablar con claridad y mantener el tema.",
              "Respetar el turno de palabra.",
              "Explicar opiniones con razones cuando sea necesario."
            ]
          },
          {
            "type": "important",
            "title": "Se practica hablando y escuchando",
            "text": "No se evalúa con preguntas tipo test en el repaso teórico."
          }
        ],
        "questions": []
      },
      {
        "id": "simples-compuestas",
        "title": "Palabras simples y compuestas",
        "subtitle": "Reconocer cómo se forman palabras",
        "kind": "vocabulary",
        "emoji": "🧩",
        "theory": [
          {
            "type": "text",
            "title": "Lo que vas a aprender",
            "text": "Reconocer cómo se forman palabras."
          },
          {
            "type": "text",
            "title": "Explicación",
            "text": "Una palabra simple contiene una sola base léxica; una compuesta combina dos o más: sacapuntas, paraguas."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Simple",
              "Compuesta",
              "Bases léxicas"
            ]
          },
          {
            "type": "example",
            "title": "Aprende con ejemplos",
            "text": "Busca o inventa un ejemplo relacionado con simple. Después explícalo con tus propias palabras."
          },
          {
            "type": "tip",
            "title": "Truco Palabraria",
            "text": "No memorices solo la definición: identifica la pista que te permite reconocer el concepto y úsala en un ejemplo nuevo."
          }
        ],
        "questions": [
          {
            "id": "simples-compuestas-1",
            "question": "¿Cuál es uno de los conceptos que debes dominar en «Palabras simples y compuestas»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "simple",
                "text": "Simple",
                "correct": true
              },
              {
                "id": "una-raíz-cuadrada",
                "text": "Una raíz cuadrada",
                "correct": false
              },
              {
                "id": "una-cordillera",
                "text": "Una cordillera",
                "correct": false
              },
              {
                "id": "un-circuito-eléctrico",
                "text": "Un circuito eléctrico",
                "correct": false
              }
            ],
            "explanation": "Una palabra simple contiene una sola base léxica; una compuesta combina dos o más: sacapuntas, paraguas."
          },
          {
            "id": "simples-compuestas-2",
            "question": "¿Qué otro contenido se trabaja en «Palabras simples y compuestas»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "compuesta",
                "text": "Compuesta",
                "correct": true
              },
              {
                "id": "los-planetas",
                "text": "Los planetas",
                "correct": false
              },
              {
                "id": "los-polígonos",
                "text": "Los polígonos",
                "correct": false
              },
              {
                "id": "la-fotosíntesis",
                "text": "La fotosíntesis",
                "correct": false
              }
            ],
            "explanation": "En esta sección también se trabaja compuesta."
          },
          {
            "id": "simples-compuestas-3",
            "question": "¿Qué opción está relacionada con «Palabras simples y compuestas»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "bases-léxicas",
                "text": "Bases léxicas",
                "correct": true
              },
              {
                "id": "división-decimal",
                "text": "División decimal",
                "correct": false
              },
              {
                "id": "escala-cartográfica",
                "text": "Escala cartográfica",
                "correct": false
              },
              {
                "id": "cadena-alimentaria",
                "text": "Cadena alimentaria",
                "correct": false
              }
            ],
            "explanation": "Bases léxicas forma parte de esta sección."
          },
          {
            "id": "simples-compuestas-4",
            "question": "¿Cuál es el objetivo de «Palabras simples y compuestas»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "reconocer-cómo-se-forman",
                "text": "Reconocer cómo se forman palabras",
                "correct": true
              },
              {
                "id": "resolver-problemas-numér",
                "text": "Resolver problemas numéricos",
                "correct": false
              },
              {
                "id": "estudiar-accidentes-geog",
                "text": "Estudiar accidentes geográficos",
                "correct": false
              },
              {
                "id": "clasificar-animales",
                "text": "Clasificar animales",
                "correct": false
              }
            ],
            "explanation": "Una palabra simple contiene una sola base léxica; una compuesta combina dos o más: sacapuntas, paraguas."
          },
          {
            "id": "simples-compuestas-5",
            "question": "¿Qué estrategia demuestra que has comprendido un contenido de Lengua?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "reconocerlo-y-aplicarlo-",
                "text": "Reconocerlo y aplicarlo en ejemplos nuevos",
                "correct": true
              },
              {
                "id": "repetir-sin-entender",
                "text": "Repetir sin entender",
                "correct": false
              },
              {
                "id": "elegir-al-azar",
                "text": "Elegir al azar",
                "correct": false
              },
              {
                "id": "no-revisar-errores",
                "text": "No revisar errores",
                "correct": false
              }
            ],
            "explanation": "Comprender significa poder aplicar lo aprendido."
          }
        ]
      },
      {
        "id": "j-verbos",
        "title": "La j en los verbos",
        "subtitle": "Escribir formas verbales con j",
        "kind": "spelling",
        "emoji": "✏️",
        "theory": [
          {
            "type": "text",
            "title": "Lo que vas a aprender",
            "text": "Escribir formas verbales con j."
          },
          {
            "type": "text",
            "title": "Explicación",
            "text": "Algunos verbos presentan j en ciertas formas, como dije, traje o conduje. Conviene relacionarlas con su infinitivo y aprender los cambios."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "J",
              "Formas irregulares",
              "Familia verbal"
            ]
          },
          {
            "type": "example",
            "title": "Aprende con ejemplos",
            "text": "Busca o inventa un ejemplo relacionado con j. Después explícalo con tus propias palabras."
          },
          {
            "type": "tip",
            "title": "Truco Palabraria",
            "text": "No memorices solo la definición: identifica la pista que te permite reconocer el concepto y úsala en un ejemplo nuevo."
          }
        ],
        "questions": [
          {
            "id": "j-verbos-1",
            "question": "¿Cuál es uno de los conceptos que debes dominar en «La j en los verbos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "j",
                "text": "J",
                "correct": true
              },
              {
                "id": "una-raíz-cuadrada",
                "text": "Una raíz cuadrada",
                "correct": false
              },
              {
                "id": "una-cordillera",
                "text": "Una cordillera",
                "correct": false
              },
              {
                "id": "un-circuito-eléctrico",
                "text": "Un circuito eléctrico",
                "correct": false
              }
            ],
            "explanation": "Algunos verbos presentan j en ciertas formas, como dije, traje o conduje. Conviene relacionarlas con su infinitivo y aprender los cambios."
          },
          {
            "id": "j-verbos-2",
            "question": "¿Qué otro contenido se trabaja en «La j en los verbos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "formas-irregulares",
                "text": "Formas irregulares",
                "correct": true
              },
              {
                "id": "los-planetas",
                "text": "Los planetas",
                "correct": false
              },
              {
                "id": "los-polígonos",
                "text": "Los polígonos",
                "correct": false
              },
              {
                "id": "la-fotosíntesis",
                "text": "La fotosíntesis",
                "correct": false
              }
            ],
            "explanation": "En esta sección también se trabaja formas irregulares."
          },
          {
            "id": "j-verbos-3",
            "question": "¿Qué opción está relacionada con «La j en los verbos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "familia-verbal",
                "text": "Familia verbal",
                "correct": true
              },
              {
                "id": "división-decimal",
                "text": "División decimal",
                "correct": false
              },
              {
                "id": "escala-cartográfica",
                "text": "Escala cartográfica",
                "correct": false
              },
              {
                "id": "cadena-alimentaria",
                "text": "Cadena alimentaria",
                "correct": false
              }
            ],
            "explanation": "Familia verbal forma parte de esta sección."
          },
          {
            "id": "j-verbos-4",
            "question": "¿Cuál es el objetivo de «La j en los verbos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "escribir-formas-verbales",
                "text": "Escribir formas verbales con j",
                "correct": true
              },
              {
                "id": "resolver-problemas-numér",
                "text": "Resolver problemas numéricos",
                "correct": false
              },
              {
                "id": "estudiar-accidentes-geog",
                "text": "Estudiar accidentes geográficos",
                "correct": false
              },
              {
                "id": "clasificar-animales",
                "text": "Clasificar animales",
                "correct": false
              }
            ],
            "explanation": "Algunos verbos presentan j en ciertas formas, como dije, traje o conduje. Conviene relacionarlas con su infinitivo y aprender los cambios."
          },
          {
            "id": "j-verbos-5",
            "question": "¿Qué estrategia demuestra que has comprendido un contenido de Lengua?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "reconocerlo-y-aplicarlo-",
                "text": "Reconocerlo y aplicarlo en ejemplos nuevos",
                "correct": true
              },
              {
                "id": "repetir-sin-entender",
                "text": "Repetir sin entender",
                "correct": false
              },
              {
                "id": "elegir-al-azar",
                "text": "Elegir al azar",
                "correct": false
              },
              {
                "id": "no-revisar-errores",
                "text": "No revisar errores",
                "correct": false
              }
            ],
            "explanation": "Comprender significa poder aplicar lo aprendido."
          }
        ]
      },
      {
        "id": "adverbio",
        "title": "El adverbio",
        "subtitle": "Expresar circunstancias",
        "kind": "grammar",
        "emoji": "🔤",
        "theory": [
          {
            "type": "text",
            "title": "Lo que vas a aprender",
            "text": "Expresar circunstancias."
          },
          {
            "type": "text",
            "title": "Explicación",
            "text": "Los adverbios son palabras invariables que pueden indicar lugar, tiempo, modo, cantidad, afirmación, negación o duda."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Invariable",
              "Lugar",
              "Tiempo",
              "Modo"
            ]
          },
          {
            "type": "example",
            "title": "Aprende con ejemplos",
            "text": "Busca o inventa un ejemplo relacionado con invariable. Después explícalo con tus propias palabras."
          },
          {
            "type": "tip",
            "title": "Truco Palabraria",
            "text": "No memorices solo la definición: identifica la pista que te permite reconocer el concepto y úsala en un ejemplo nuevo."
          }
        ],
        "questions": [
          {
            "id": "t9-ad-1",
            "question": "En «Llegó ayer», ¿cuál es el adverbio?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "ayer",
                "text": "ayer",
                "correct": true
              },
              {
                "id": "llegó",
                "text": "llegó",
                "correct": false
              },
              {
                "id": "el",
                "text": "el",
                "correct": false
              },
              {
                "id": "ninguno",
                "text": "ninguno",
                "correct": false
              }
            ],
            "explanation": "«Ayer» indica tiempo."
          },
          {
            "id": "t9-ad-2",
            "question": "¿Qué adverbio indica lugar?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "aquí",
                "text": "aquí",
                "correct": true
              },
              {
                "id": "ayer",
                "text": "ayer",
                "correct": false
              },
              {
                "id": "mucho",
                "text": "mucho",
                "correct": false
              },
              {
                "id": "quizás",
                "text": "quizás",
                "correct": false
              }
            ],
            "explanation": "«Aquí» expresa lugar."
          },
          {
            "id": "t9-ad-3",
            "question": "¿Qué adverbio expresa duda?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "quizás",
                "text": "quizás",
                "correct": true
              },
              {
                "id": "sí",
                "text": "sí",
                "correct": false
              },
              {
                "id": "no",
                "text": "no",
                "correct": false
              },
              {
                "id": "cerca",
                "text": "cerca",
                "correct": false
              }
            ],
            "explanation": "«Quizás» expresa duda o posibilidad."
          },
          {
            "id": "t9-ad-4",
            "question": "Los adverbios son normalmente palabras…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "invariables",
                "text": "invariables",
                "correct": true
              },
              {
                "id": "que-siempre-tienen-géner",
                "text": "que siempre tienen género",
                "correct": false
              },
              {
                "id": "que-siempre-son-verbos",
                "text": "que siempre son verbos",
                "correct": false
              },
              {
                "id": "que-nombran-personas",
                "text": "que nombran personas",
                "correct": false
              }
            ],
            "explanation": "No suelen variar en género ni número."
          },
          {
            "id": "t9-ad-5",
            "question": "En «Habla muy despacio», «despacio» indica…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "modo",
                "text": "modo",
                "correct": true
              },
              {
                "id": "lugar",
                "text": "lugar",
                "correct": false
              },
              {
                "id": "tiempo",
                "text": "tiempo",
                "correct": false
              },
              {
                "id": "afirmación",
                "text": "afirmación",
                "correct": false
              }
            ],
            "explanation": "Explica cómo habla."
          }
        ]
      },
      {
        "id": "literatura",
        "title": "Las obras teatrales",
        "subtitle": "Reconocer diálogo y acotaciones",
        "kind": "literature",
        "emoji": "📚",
        "theory": [
          {
            "type": "text",
            "title": "Lo que vas a aprender",
            "text": "Reconocer diálogo y acotaciones."
          },
          {
            "type": "text",
            "title": "Explicación",
            "text": "El teatro está pensado para ser representado. El texto contiene intervenciones de personajes y acotaciones con indicaciones escénicas."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Diálogo",
              "Acotación",
              "Representación"
            ]
          },
          {
            "type": "example",
            "title": "Aprende con ejemplos",
            "text": "Busca o inventa un ejemplo relacionado con diálogo. Después explícalo con tus propias palabras."
          },
          {
            "type": "tip",
            "title": "Truco Palabraria",
            "text": "No memorices solo la definición: identifica la pista que te permite reconocer el concepto y úsala en un ejemplo nuevo."
          }
        ],
        "questions": [
          {
            "id": "literatura-1",
            "question": "¿Qué concepto pertenece a «Las obras teatrales»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "diálogo",
                "text": "Diálogo",
                "correct": true
              },
              {
                "id": "una-fracción",
                "text": "una fracción",
                "correct": false
              },
              {
                "id": "un-ecosistema",
                "text": "un ecosistema",
                "correct": false
              },
              {
                "id": "una-unidad-de-masa",
                "text": "una unidad de masa",
                "correct": false
              }
            ],
            "explanation": "El teatro está pensado para ser representado. El texto contiene intervenciones de personajes y acotaciones con indicaciones escénicas."
          },
          {
            "id": "literatura-2",
            "question": "¿Cuál es otra idea importante de «Las obras teatrales»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "acotación",
                "text": "Acotación",
                "correct": true
              },
              {
                "id": "multiplicación",
                "text": "multiplicación",
                "correct": false
              },
              {
                "id": "kilómetro",
                "text": "kilómetro",
                "correct": false
              },
              {
                "id": "continente",
                "text": "continente",
                "correct": false
              }
            ],
            "explanation": "También trabajamos acotación."
          },
          {
            "id": "literatura-3",
            "question": "En literatura, además de entender qué ocurre, conviene fijarse en…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "cómo-está-usado-el-lengu",
                "text": "cómo está usado el lenguaje",
                "correct": true
              },
              {
                "id": "solo-el-número-de-página",
                "text": "solo el número de páginas",
                "correct": false
              },
              {
                "id": "el-precio-del-libro",
                "text": "el precio del libro",
                "correct": false
              },
              {
                "id": "el-tamaño-de-la-portada",
                "text": "el tamaño de la portada",
                "correct": false
              }
            ],
            "explanation": "La forma de usar el lenguaje es fundamental en los textos literarios."
          },
          {
            "id": "literatura-4",
            "question": "¿Qué deberías ser capaz de reconocer después de estudiar esta sección?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "representación",
                "text": "Representación",
                "correct": true
              },
              {
                "id": "una-operación",
                "text": "una operación",
                "correct": false
              },
              {
                "id": "una-coordenada",
                "text": "una coordenada",
                "correct": false
              },
              {
                "id": "una-unidad-de-volumen",
                "text": "una unidad de volumen",
                "correct": false
              }
            ],
            "explanation": "Uno de los aprendizajes previstos es reconocer representación."
          },
          {
            "id": "literatura-5",
            "question": "¿Cuál es una buena forma de demostrar comprensión literaria?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "identificar-el-recurso-o",
                "text": "Identificar el recurso o elemento y explicar su efecto",
                "correct": true
              },
              {
                "id": "copiar-sin-explicar",
                "text": "copiar sin explicar",
                "correct": false
              },
              {
                "id": "contar-letras",
                "text": "contar letras",
                "correct": false
              },
              {
                "id": "responder-sin-leer",
                "text": "responder sin leer",
                "correct": false
              }
            ],
            "explanation": "Hay que reconocer los elementos y comprender para qué sirven."
          }
        ]
      },
      {
        "id": "escritura",
        "title": "Escribir una leyenda",
        "subtitle": "Crear una narración ligada a un lugar",
        "kind": "writing",
        "emoji": "📝",
        "theory": [
          {
            "type": "text",
            "title": "Actividad de expresión escrita",
            "text": "Crear una narración ligada a un lugar."
          },
          {
            "type": "list",
            "title": "Cómo hacer la actividad",
            "items": [
              "Piensa qué quieres comunicar y a quién va dirigido.",
              "Haz un pequeño borrador y ordena las ideas.",
              "Escribe el texto siguiendo las características trabajadas en la unidad.",
              "Relee lo escrito y corrige ortografía, puntuación y repeticiones.",
              "Comprueba que el resultado cumple el objetivo de la actividad."
            ]
          },
          {
            "type": "important",
            "title": "Aquí no hay examen tipo test",
            "text": "Esta sección se aprende escribiendo. El objetivo es producir un texto, revisarlo y mejorarlo."
          }
        ],
        "questions": []
      },
      {
        "id": "repaso",
        "title": "Comprueba tu progreso",
        "subtitle": "Consolidar el tema",
        "kind": "review",
        "emoji": "🏆",
        "theory": [
          {
            "type": "text",
            "title": "Repaso de la teoría de la unidad",
            "text": "Comprueba lo aprendido en los contenidos teóricos de este tema."
          },
          {
            "type": "important",
            "title": "Qué se repasa",
            "text": "Vocabulario, ortografía, gramática y, cuando corresponde, literatura o alfabetización mediática."
          },
          {
            "type": "tip",
            "title": "Comprensión lectora",
            "text": "Las lecturas y sus actividades de comprensión se trabajan en clase y no forman parte de Palabraria."
          }
        ],
        "questions": [
          {
            "id": "tema-09-rep-simples-compuestas-1",
            "question": "¿Cuál es uno de los conceptos que debes dominar en «Palabras simples y compuestas»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "simple",
                "text": "Simple",
                "correct": true
              },
              {
                "id": "una-raíz-cuadrada",
                "text": "Una raíz cuadrada",
                "correct": false
              },
              {
                "id": "una-cordillera",
                "text": "Una cordillera",
                "correct": false
              },
              {
                "id": "un-circuito-eléctrico",
                "text": "Un circuito eléctrico",
                "correct": false
              }
            ],
            "explanation": "Una palabra simple contiene una sola base léxica; una compuesta combina dos o más: sacapuntas, paraguas."
          },
          {
            "id": "tema-09-rep-simples-compuestas-2",
            "question": "¿Qué otro contenido se trabaja en «Palabras simples y compuestas»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "compuesta",
                "text": "Compuesta",
                "correct": true
              },
              {
                "id": "los-planetas",
                "text": "Los planetas",
                "correct": false
              },
              {
                "id": "los-polígonos",
                "text": "Los polígonos",
                "correct": false
              },
              {
                "id": "la-fotosíntesis",
                "text": "La fotosíntesis",
                "correct": false
              }
            ],
            "explanation": "En esta sección también se trabaja compuesta."
          },
          {
            "id": "tema-09-rep-simples-compuestas-3",
            "question": "¿Qué opción está relacionada con «Palabras simples y compuestas»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "bases-léxicas",
                "text": "Bases léxicas",
                "correct": true
              },
              {
                "id": "división-decimal",
                "text": "División decimal",
                "correct": false
              },
              {
                "id": "escala-cartográfica",
                "text": "Escala cartográfica",
                "correct": false
              },
              {
                "id": "cadena-alimentaria",
                "text": "Cadena alimentaria",
                "correct": false
              }
            ],
            "explanation": "Bases léxicas forma parte de esta sección."
          },
          {
            "id": "tema-09-rep-j-verbos-1",
            "question": "¿Cuál es uno de los conceptos que debes dominar en «La j en los verbos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "j",
                "text": "J",
                "correct": true
              },
              {
                "id": "una-raíz-cuadrada",
                "text": "Una raíz cuadrada",
                "correct": false
              },
              {
                "id": "una-cordillera",
                "text": "Una cordillera",
                "correct": false
              },
              {
                "id": "un-circuito-eléctrico",
                "text": "Un circuito eléctrico",
                "correct": false
              }
            ],
            "explanation": "Algunos verbos presentan j en ciertas formas, como dije, traje o conduje. Conviene relacionarlas con su infinitivo y aprender los cambios."
          },
          {
            "id": "tema-09-rep-j-verbos-2",
            "question": "¿Qué otro contenido se trabaja en «La j en los verbos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "formas-irregulares",
                "text": "Formas irregulares",
                "correct": true
              },
              {
                "id": "los-planetas",
                "text": "Los planetas",
                "correct": false
              },
              {
                "id": "los-polígonos",
                "text": "Los polígonos",
                "correct": false
              },
              {
                "id": "la-fotosíntesis",
                "text": "La fotosíntesis",
                "correct": false
              }
            ],
            "explanation": "En esta sección también se trabaja formas irregulares."
          },
          {
            "id": "tema-09-rep-j-verbos-3",
            "question": "¿Qué opción está relacionada con «La j en los verbos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "familia-verbal",
                "text": "Familia verbal",
                "correct": true
              },
              {
                "id": "división-decimal",
                "text": "División decimal",
                "correct": false
              },
              {
                "id": "escala-cartográfica",
                "text": "Escala cartográfica",
                "correct": false
              },
              {
                "id": "cadena-alimentaria",
                "text": "Cadena alimentaria",
                "correct": false
              }
            ],
            "explanation": "Familia verbal forma parte de esta sección."
          },
          {
            "id": "tema-09-rep-adverbio-1",
            "question": "En «Llegó ayer», ¿cuál es el adverbio?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "ayer",
                "text": "ayer",
                "correct": true
              },
              {
                "id": "llegó",
                "text": "llegó",
                "correct": false
              },
              {
                "id": "el",
                "text": "el",
                "correct": false
              },
              {
                "id": "ninguno",
                "text": "ninguno",
                "correct": false
              }
            ],
            "explanation": "«Ayer» indica tiempo."
          },
          {
            "id": "tema-09-rep-adverbio-2",
            "question": "¿Qué adverbio indica lugar?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "aquí",
                "text": "aquí",
                "correct": true
              },
              {
                "id": "ayer",
                "text": "ayer",
                "correct": false
              },
              {
                "id": "mucho",
                "text": "mucho",
                "correct": false
              },
              {
                "id": "quizás",
                "text": "quizás",
                "correct": false
              }
            ],
            "explanation": "«Aquí» expresa lugar."
          },
          {
            "id": "tema-09-rep-adverbio-3",
            "question": "¿Qué adverbio expresa duda?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "quizás",
                "text": "quizás",
                "correct": true
              },
              {
                "id": "sí",
                "text": "sí",
                "correct": false
              },
              {
                "id": "no",
                "text": "no",
                "correct": false
              },
              {
                "id": "cerca",
                "text": "cerca",
                "correct": false
              }
            ],
            "explanation": "«Quizás» expresa duda o posibilidad."
          },
          {
            "id": "tema-09-rep-literatura-1",
            "question": "¿Qué concepto pertenece a «Las obras teatrales»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "diálogo",
                "text": "Diálogo",
                "correct": true
              },
              {
                "id": "una-fracción",
                "text": "una fracción",
                "correct": false
              },
              {
                "id": "un-ecosistema",
                "text": "un ecosistema",
                "correct": false
              },
              {
                "id": "una-unidad-de-masa",
                "text": "una unidad de masa",
                "correct": false
              }
            ],
            "explanation": "El teatro está pensado para ser representado. El texto contiene intervenciones de personajes y acotaciones con indicaciones escénicas."
          },
          {
            "id": "tema-09-rep-literatura-2",
            "question": "¿Cuál es otra idea importante de «Las obras teatrales»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "acotación",
                "text": "Acotación",
                "correct": true
              },
              {
                "id": "multiplicación",
                "text": "multiplicación",
                "correct": false
              },
              {
                "id": "kilómetro",
                "text": "kilómetro",
                "correct": false
              },
              {
                "id": "continente",
                "text": "continente",
                "correct": false
              }
            ],
            "explanation": "También trabajamos acotación."
          },
          {
            "id": "tema-09-rep-literatura-3",
            "question": "En literatura, además de entender qué ocurre, conviene fijarse en…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "cómo-está-usado-el-lengu",
                "text": "cómo está usado el lenguaje",
                "correct": true
              },
              {
                "id": "solo-el-número-de-página",
                "text": "solo el número de páginas",
                "correct": false
              },
              {
                "id": "el-precio-del-libro",
                "text": "el precio del libro",
                "correct": false
              },
              {
                "id": "el-tamaño-de-la-portada",
                "text": "el tamaño de la portada",
                "correct": false
              }
            ],
            "explanation": "La forma de usar el lenguaje es fundamental en los textos literarios."
          }
        ]
      }
    ]
  },
  {
    "id": "tema-10",
    "order": 10,
    "title": "¿Echamos una carrera?",
    "description": "Unidad 10: teoría, ejemplos, práctica y repaso paso a paso.",
    "emoji": "🏃",
    "sections": [
      {
        "id": "situacion",
        "title": "Hablar y escuchar: deporte y normas",
        "subtitle": "Explicar reglas y deportividad",
        "kind": "communication",
        "emoji": "🗣️",
        "theory": [
          {
            "type": "text",
            "title": "Actividad de comunicación oral",
            "text": "Explicar reglas y deportividad."
          },
          {
            "type": "list",
            "title": "Qué debes practicar",
            "items": [
              "Escuchar antes de responder.",
              "Hablar con claridad y mantener el tema.",
              "Respetar el turno de palabra.",
              "Explicar opiniones con razones cuando sea necesario."
            ]
          },
          {
            "type": "important",
            "title": "Se practica hablando y escuchando",
            "text": "No se evalúa con preguntas tipo test en el repaso teórico."
          }
        ],
        "questions": []
      },
      {
        "id": "homonimas",
        "title": "Palabras homónimas",
        "subtitle": "Distinguir palabras que suenan o se escriben igual",
        "kind": "vocabulary",
        "emoji": "🧩",
        "theory": [
          {
            "type": "text",
            "title": "Lo que vas a aprender",
            "text": "Distinguir palabras que suenan o se escriben igual."
          },
          {
            "type": "text",
            "title": "Explicación",
            "text": "Las homónimas coinciden en su forma o sonido pero tienen significados diferentes. El contexto permite saber cuál se usa."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Homónimas",
              "Significado",
              "Contexto"
            ]
          },
          {
            "type": "example",
            "title": "Aprende con ejemplos",
            "text": "Busca o inventa un ejemplo relacionado con homónimas. Después explícalo con tus propias palabras."
          },
          {
            "type": "tip",
            "title": "Truco Palabraria",
            "text": "No memorices solo la definición: identifica la pista que te permite reconocer el concepto y úsala en un ejemplo nuevo."
          }
        ],
        "questions": [
          {
            "id": "homonimas-1",
            "question": "¿Cuál es uno de los conceptos que debes dominar en «Palabras homónimas»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "homónimas",
                "text": "Homónimas",
                "correct": true
              },
              {
                "id": "una-raíz-cuadrada",
                "text": "Una raíz cuadrada",
                "correct": false
              },
              {
                "id": "una-cordillera",
                "text": "Una cordillera",
                "correct": false
              },
              {
                "id": "un-circuito-eléctrico",
                "text": "Un circuito eléctrico",
                "correct": false
              }
            ],
            "explanation": "Las homónimas coinciden en su forma o sonido pero tienen significados diferentes. El contexto permite saber cuál se usa."
          },
          {
            "id": "homonimas-2",
            "question": "¿Qué otro contenido se trabaja en «Palabras homónimas»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "significado",
                "text": "Significado",
                "correct": true
              },
              {
                "id": "los-planetas",
                "text": "Los planetas",
                "correct": false
              },
              {
                "id": "los-polígonos",
                "text": "Los polígonos",
                "correct": false
              },
              {
                "id": "la-fotosíntesis",
                "text": "La fotosíntesis",
                "correct": false
              }
            ],
            "explanation": "En esta sección también se trabaja significado."
          },
          {
            "id": "homonimas-3",
            "question": "¿Qué opción está relacionada con «Palabras homónimas»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "contexto",
                "text": "Contexto",
                "correct": true
              },
              {
                "id": "división-decimal",
                "text": "División decimal",
                "correct": false
              },
              {
                "id": "escala-cartográfica",
                "text": "Escala cartográfica",
                "correct": false
              },
              {
                "id": "cadena-alimentaria",
                "text": "Cadena alimentaria",
                "correct": false
              }
            ],
            "explanation": "Contexto forma parte de esta sección."
          },
          {
            "id": "homonimas-4",
            "question": "¿Cuál es el objetivo de «Palabras homónimas»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "distinguir-palabras-que-",
                "text": "Distinguir palabras que suenan o se escriben igual",
                "correct": true
              },
              {
                "id": "resolver-problemas-numér",
                "text": "Resolver problemas numéricos",
                "correct": false
              },
              {
                "id": "estudiar-accidentes-geog",
                "text": "Estudiar accidentes geográficos",
                "correct": false
              },
              {
                "id": "clasificar-animales",
                "text": "Clasificar animales",
                "correct": false
              }
            ],
            "explanation": "Las homónimas coinciden en su forma o sonido pero tienen significados diferentes. El contexto permite saber cuál se usa."
          },
          {
            "id": "homonimas-5",
            "question": "¿Qué estrategia demuestra que has comprendido un contenido de Lengua?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "reconocerlo-y-aplicarlo-",
                "text": "Reconocerlo y aplicarlo en ejemplos nuevos",
                "correct": true
              },
              {
                "id": "repetir-sin-entender",
                "text": "Repetir sin entender",
                "correct": false
              },
              {
                "id": "elegir-al-azar",
                "text": "Elegir al azar",
                "correct": false
              },
              {
                "id": "no-revisar-errores",
                "text": "No revisar errores",
                "correct": false
              }
            ],
            "explanation": "Comprender significa poder aplicar lo aprendido."
          }
        ]
      },
      {
        "id": "v-verbos",
        "title": "La v en los verbos",
        "subtitle": "Escribir determinadas formas con v",
        "kind": "spelling",
        "emoji": "✏️",
        "theory": [
          {
            "type": "text",
            "title": "Lo que vas a aprender",
            "text": "Escribir determinadas formas con v."
          },
          {
            "type": "text",
            "title": "Explicación",
            "text": "Algunas formas verbales se escriben con v, como estuve, tuve o anduve. Es útil aprenderlas dentro de su familia verbal."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "V",
              "Formas verbales",
              "Familias"
            ]
          },
          {
            "type": "example",
            "title": "Aprende con ejemplos",
            "text": "Busca o inventa un ejemplo relacionado con v. Después explícalo con tus propias palabras."
          },
          {
            "type": "tip",
            "title": "Truco Palabraria",
            "text": "No memorices solo la definición: identifica la pista que te permite reconocer el concepto y úsala en un ejemplo nuevo."
          }
        ],
        "questions": [
          {
            "id": "v-verbos-1",
            "question": "¿Cuál es uno de los conceptos que debes dominar en «La v en los verbos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "v",
                "text": "V",
                "correct": true
              },
              {
                "id": "una-raíz-cuadrada",
                "text": "Una raíz cuadrada",
                "correct": false
              },
              {
                "id": "una-cordillera",
                "text": "Una cordillera",
                "correct": false
              },
              {
                "id": "un-circuito-eléctrico",
                "text": "Un circuito eléctrico",
                "correct": false
              }
            ],
            "explanation": "Algunas formas verbales se escriben con v, como estuve, tuve o anduve. Es útil aprenderlas dentro de su familia verbal."
          },
          {
            "id": "v-verbos-2",
            "question": "¿Qué otro contenido se trabaja en «La v en los verbos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "formas-verbales",
                "text": "Formas verbales",
                "correct": true
              },
              {
                "id": "los-planetas",
                "text": "Los planetas",
                "correct": false
              },
              {
                "id": "los-polígonos",
                "text": "Los polígonos",
                "correct": false
              },
              {
                "id": "la-fotosíntesis",
                "text": "La fotosíntesis",
                "correct": false
              }
            ],
            "explanation": "En esta sección también se trabaja formas verbales."
          },
          {
            "id": "v-verbos-3",
            "question": "¿Qué opción está relacionada con «La v en los verbos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "familias",
                "text": "Familias",
                "correct": true
              },
              {
                "id": "división-decimal",
                "text": "División decimal",
                "correct": false
              },
              {
                "id": "escala-cartográfica",
                "text": "Escala cartográfica",
                "correct": false
              },
              {
                "id": "cadena-alimentaria",
                "text": "Cadena alimentaria",
                "correct": false
              }
            ],
            "explanation": "Familias forma parte de esta sección."
          },
          {
            "id": "v-verbos-4",
            "question": "¿Cuál es el objetivo de «La v en los verbos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "escribir-determinadas-fo",
                "text": "Escribir determinadas formas con v",
                "correct": true
              },
              {
                "id": "resolver-problemas-numér",
                "text": "Resolver problemas numéricos",
                "correct": false
              },
              {
                "id": "estudiar-accidentes-geog",
                "text": "Estudiar accidentes geográficos",
                "correct": false
              },
              {
                "id": "clasificar-animales",
                "text": "Clasificar animales",
                "correct": false
              }
            ],
            "explanation": "Algunas formas verbales se escriben con v, como estuve, tuve o anduve. Es útil aprenderlas dentro de su familia verbal."
          },
          {
            "id": "v-verbos-5",
            "question": "¿Qué estrategia demuestra que has comprendido un contenido de Lengua?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "reconocerlo-y-aplicarlo-",
                "text": "Reconocerlo y aplicarlo en ejemplos nuevos",
                "correct": true
              },
              {
                "id": "repetir-sin-entender",
                "text": "Repetir sin entender",
                "correct": false
              },
              {
                "id": "elegir-al-azar",
                "text": "Elegir al azar",
                "correct": false
              },
              {
                "id": "no-revisar-errores",
                "text": "No revisar errores",
                "correct": false
              }
            ],
            "explanation": "Comprender significa poder aplicar lo aprendido."
          }
        ]
      },
      {
        "id": "enlaces",
        "title": "Preposiciones, conjunciones e interjecciones",
        "subtitle": "Relacionar palabras y expresar reacciones",
        "kind": "grammar",
        "emoji": "🔤",
        "theory": [
          {
            "type": "text",
            "title": "Lo que vas a aprender",
            "text": "Relacionar palabras y expresar reacciones."
          },
          {
            "type": "text",
            "title": "Explicación",
            "text": "Las preposiciones relacionan elementos; las conjunciones unen palabras u oraciones; las interjecciones expresan impresiones o llamadas."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Preposición",
              "Conjunción",
              "Interjección"
            ]
          },
          {
            "type": "example",
            "title": "Aprende con ejemplos",
            "text": "Busca o inventa un ejemplo relacionado con preposición. Después explícalo con tus propias palabras."
          },
          {
            "type": "tip",
            "title": "Truco Palabraria",
            "text": "No memorices solo la definición: identifica la pista que te permite reconocer el concepto y úsala en un ejemplo nuevo."
          }
        ],
        "questions": [
          {
            "id": "t10-en-1",
            "question": "¿Cuál es una preposición?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "con",
                "text": "con",
                "correct": true
              },
              {
                "id": "y",
                "text": "y",
                "correct": false
              },
              {
                "id": "ay",
                "text": "¡ay!",
                "correct": false
              },
              {
                "id": "rápidamente",
                "text": "rápidamente",
                "correct": false
              }
            ],
            "explanation": "«Con» pertenece al grupo de las preposiciones."
          },
          {
            "id": "t10-en-2",
            "question": "En «Ana y Luis», ¿qué palabra une los dos nombres?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "y",
                "text": "y",
                "correct": true
              },
              {
                "id": "ana",
                "text": "Ana",
                "correct": false
              },
              {
                "id": "luis",
                "text": "Luis",
                "correct": false
              },
              {
                "id": "ninguna",
                "text": "ninguna",
                "correct": false
              }
            ],
            "explanation": "«Y» es una conjunción."
          },
          {
            "id": "t10-en-3",
            "question": "¿Cuál es una interjección?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "ay",
                "text": "¡ay!",
                "correct": true
              },
              {
                "id": "desde",
                "text": "desde",
                "correct": false
              },
              {
                "id": "pero",
                "text": "pero",
                "correct": false
              },
              {
                "id": "mesa",
                "text": "mesa",
                "correct": false
              }
            ],
            "explanation": "«¡Ay!» puede expresar dolor o sorpresa."
          },
          {
            "id": "t10-en-4",
            "question": "Las conjunciones sirven para…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "unir-palabras-u-oracione",
                "text": "unir palabras u oraciones",
                "correct": true
              },
              {
                "id": "nombrar-objetos",
                "text": "nombrar objetos",
                "correct": false
              },
              {
                "id": "indicar-siempre-lugar",
                "text": "indicar siempre lugar",
                "correct": false
              },
              {
                "id": "conjugar-verbos",
                "text": "conjugar verbos",
                "correct": false
              }
            ],
            "explanation": "Su función principal es enlazar elementos."
          },
          {
            "id": "t10-en-5",
            "question": "¿Qué opción contiene una preposición?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "voy-con-marta",
                "text": "Voy con Marta",
                "correct": true
              },
              {
                "id": "ana-y-marta",
                "text": "Ana y Marta",
                "correct": false
              },
              {
                "id": "oh-qué-sorpresa",
                "text": "¡Oh, qué sorpresa!",
                "correct": false
              },
              {
                "id": "quizás-venga",
                "text": "Quizás venga",
                "correct": false
              }
            ],
            "explanation": "«Con» es una preposición."
          }
        ]
      },
      {
        "id": "resena",
        "title": "La reseña y los buenos textos",
        "subtitle": "Resumir y valorar una obra",
        "kind": "media",
        "emoji": "🌐",
        "theory": [
          {
            "type": "text",
            "title": "Lo que vas a aprender",
            "text": "Resumir y valorar una obra."
          },
          {
            "type": "text",
            "title": "Explicación",
            "text": "Una reseña presenta una obra, resume lo esencial sin contarlo todo y ofrece una valoración razonada. Un buen texto es claro, coherente y adecuado."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Presentación",
              "Resumen",
              "Valoración"
            ]
          },
          {
            "type": "example",
            "title": "Aprende con ejemplos",
            "text": "Busca o inventa un ejemplo relacionado con presentación. Después explícalo con tus propias palabras."
          },
          {
            "type": "tip",
            "title": "Truco Palabraria",
            "text": "No memorices solo la definición: identifica la pista que te permite reconocer el concepto y úsala en un ejemplo nuevo."
          }
        ],
        "questions": [
          {
            "id": "resena-1",
            "question": "¿Cuál es uno de los conceptos que debes dominar en «La reseña y los buenos textos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "presentación",
                "text": "Presentación",
                "correct": true
              },
              {
                "id": "una-raíz-cuadrada",
                "text": "Una raíz cuadrada",
                "correct": false
              },
              {
                "id": "una-cordillera",
                "text": "Una cordillera",
                "correct": false
              },
              {
                "id": "un-circuito-eléctrico",
                "text": "Un circuito eléctrico",
                "correct": false
              }
            ],
            "explanation": "Una reseña presenta una obra, resume lo esencial sin contarlo todo y ofrece una valoración razonada. Un buen texto es claro, coherente y adecuado."
          },
          {
            "id": "resena-2",
            "question": "¿Qué otro contenido se trabaja en «La reseña y los buenos textos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "resumen",
                "text": "Resumen",
                "correct": true
              },
              {
                "id": "los-planetas",
                "text": "Los planetas",
                "correct": false
              },
              {
                "id": "los-polígonos",
                "text": "Los polígonos",
                "correct": false
              },
              {
                "id": "la-fotosíntesis",
                "text": "La fotosíntesis",
                "correct": false
              }
            ],
            "explanation": "En esta sección también se trabaja resumen."
          },
          {
            "id": "resena-3",
            "question": "¿Qué opción está relacionada con «La reseña y los buenos textos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "valoración",
                "text": "Valoración",
                "correct": true
              },
              {
                "id": "división-decimal",
                "text": "División decimal",
                "correct": false
              },
              {
                "id": "escala-cartográfica",
                "text": "Escala cartográfica",
                "correct": false
              },
              {
                "id": "cadena-alimentaria",
                "text": "Cadena alimentaria",
                "correct": false
              }
            ],
            "explanation": "Valoración forma parte de esta sección."
          },
          {
            "id": "resena-4",
            "question": "¿Cuál es el objetivo de «La reseña y los buenos textos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "resumir-y-valorar-una-ob",
                "text": "Resumir y valorar una obra",
                "correct": true
              },
              {
                "id": "resolver-problemas-numér",
                "text": "Resolver problemas numéricos",
                "correct": false
              },
              {
                "id": "estudiar-accidentes-geog",
                "text": "Estudiar accidentes geográficos",
                "correct": false
              },
              {
                "id": "clasificar-animales",
                "text": "Clasificar animales",
                "correct": false
              }
            ],
            "explanation": "Una reseña presenta una obra, resume lo esencial sin contarlo todo y ofrece una valoración razonada. Un buen texto es claro, coherente y adecuado."
          },
          {
            "id": "resena-5",
            "question": "¿Qué estrategia demuestra que has comprendido un contenido de Lengua?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "reconocerlo-y-aplicarlo-",
                "text": "Reconocerlo y aplicarlo en ejemplos nuevos",
                "correct": true
              },
              {
                "id": "repetir-sin-entender",
                "text": "Repetir sin entender",
                "correct": false
              },
              {
                "id": "elegir-al-azar",
                "text": "Elegir al azar",
                "correct": false
              },
              {
                "id": "no-revisar-errores",
                "text": "No revisar errores",
                "correct": false
              }
            ],
            "explanation": "Comprender significa poder aplicar lo aprendido."
          }
        ]
      },
      {
        "id": "escritura",
        "title": "Normas para competir con deportividad",
        "subtitle": "Redactar normas claras",
        "kind": "writing",
        "emoji": "📝",
        "theory": [
          {
            "type": "text",
            "title": "Actividad de expresión escrita",
            "text": "Redactar normas claras."
          },
          {
            "type": "list",
            "title": "Cómo hacer la actividad",
            "items": [
              "Piensa qué quieres comunicar y a quién va dirigido.",
              "Haz un pequeño borrador y ordena las ideas.",
              "Escribe el texto siguiendo las características trabajadas en la unidad.",
              "Relee lo escrito y corrige ortografía, puntuación y repeticiones.",
              "Comprueba que el resultado cumple el objetivo de la actividad."
            ]
          },
          {
            "type": "important",
            "title": "Aquí no hay examen tipo test",
            "text": "Esta sección se aprende escribiendo. El objetivo es producir un texto, revisarlo y mejorarlo."
          }
        ],
        "questions": []
      },
      {
        "id": "repaso",
        "title": "Comprueba tu progreso",
        "subtitle": "Consolidar el tema",
        "kind": "review",
        "emoji": "🏆",
        "theory": [
          {
            "type": "text",
            "title": "Repaso de la teoría de la unidad",
            "text": "Comprueba lo aprendido en los contenidos teóricos de este tema."
          },
          {
            "type": "important",
            "title": "Qué se repasa",
            "text": "Vocabulario, ortografía, gramática y, cuando corresponde, literatura o alfabetización mediática."
          },
          {
            "type": "tip",
            "title": "Comprensión lectora",
            "text": "Las lecturas y sus actividades de comprensión se trabajan en clase y no forman parte de Palabraria."
          }
        ],
        "questions": [
          {
            "id": "tema-10-rep-homonimas-1",
            "question": "¿Cuál es uno de los conceptos que debes dominar en «Palabras homónimas»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "homónimas",
                "text": "Homónimas",
                "correct": true
              },
              {
                "id": "una-raíz-cuadrada",
                "text": "Una raíz cuadrada",
                "correct": false
              },
              {
                "id": "una-cordillera",
                "text": "Una cordillera",
                "correct": false
              },
              {
                "id": "un-circuito-eléctrico",
                "text": "Un circuito eléctrico",
                "correct": false
              }
            ],
            "explanation": "Las homónimas coinciden en su forma o sonido pero tienen significados diferentes. El contexto permite saber cuál se usa."
          },
          {
            "id": "tema-10-rep-homonimas-2",
            "question": "¿Qué otro contenido se trabaja en «Palabras homónimas»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "significado",
                "text": "Significado",
                "correct": true
              },
              {
                "id": "los-planetas",
                "text": "Los planetas",
                "correct": false
              },
              {
                "id": "los-polígonos",
                "text": "Los polígonos",
                "correct": false
              },
              {
                "id": "la-fotosíntesis",
                "text": "La fotosíntesis",
                "correct": false
              }
            ],
            "explanation": "En esta sección también se trabaja significado."
          },
          {
            "id": "tema-10-rep-homonimas-3",
            "question": "¿Qué opción está relacionada con «Palabras homónimas»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "contexto",
                "text": "Contexto",
                "correct": true
              },
              {
                "id": "división-decimal",
                "text": "División decimal",
                "correct": false
              },
              {
                "id": "escala-cartográfica",
                "text": "Escala cartográfica",
                "correct": false
              },
              {
                "id": "cadena-alimentaria",
                "text": "Cadena alimentaria",
                "correct": false
              }
            ],
            "explanation": "Contexto forma parte de esta sección."
          },
          {
            "id": "tema-10-rep-v-verbos-1",
            "question": "¿Cuál es uno de los conceptos que debes dominar en «La v en los verbos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "v",
                "text": "V",
                "correct": true
              },
              {
                "id": "una-raíz-cuadrada",
                "text": "Una raíz cuadrada",
                "correct": false
              },
              {
                "id": "una-cordillera",
                "text": "Una cordillera",
                "correct": false
              },
              {
                "id": "un-circuito-eléctrico",
                "text": "Un circuito eléctrico",
                "correct": false
              }
            ],
            "explanation": "Algunas formas verbales se escriben con v, como estuve, tuve o anduve. Es útil aprenderlas dentro de su familia verbal."
          },
          {
            "id": "tema-10-rep-v-verbos-2",
            "question": "¿Qué otro contenido se trabaja en «La v en los verbos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "formas-verbales",
                "text": "Formas verbales",
                "correct": true
              },
              {
                "id": "los-planetas",
                "text": "Los planetas",
                "correct": false
              },
              {
                "id": "los-polígonos",
                "text": "Los polígonos",
                "correct": false
              },
              {
                "id": "la-fotosíntesis",
                "text": "La fotosíntesis",
                "correct": false
              }
            ],
            "explanation": "En esta sección también se trabaja formas verbales."
          },
          {
            "id": "tema-10-rep-v-verbos-3",
            "question": "¿Qué opción está relacionada con «La v en los verbos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "familias",
                "text": "Familias",
                "correct": true
              },
              {
                "id": "división-decimal",
                "text": "División decimal",
                "correct": false
              },
              {
                "id": "escala-cartográfica",
                "text": "Escala cartográfica",
                "correct": false
              },
              {
                "id": "cadena-alimentaria",
                "text": "Cadena alimentaria",
                "correct": false
              }
            ],
            "explanation": "Familias forma parte de esta sección."
          },
          {
            "id": "tema-10-rep-enlaces-1",
            "question": "¿Cuál es una preposición?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "con",
                "text": "con",
                "correct": true
              },
              {
                "id": "y",
                "text": "y",
                "correct": false
              },
              {
                "id": "ay",
                "text": "¡ay!",
                "correct": false
              },
              {
                "id": "rápidamente",
                "text": "rápidamente",
                "correct": false
              }
            ],
            "explanation": "«Con» pertenece al grupo de las preposiciones."
          },
          {
            "id": "tema-10-rep-enlaces-2",
            "question": "En «Ana y Luis», ¿qué palabra une los dos nombres?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "y",
                "text": "y",
                "correct": true
              },
              {
                "id": "ana",
                "text": "Ana",
                "correct": false
              },
              {
                "id": "luis",
                "text": "Luis",
                "correct": false
              },
              {
                "id": "ninguna",
                "text": "ninguna",
                "correct": false
              }
            ],
            "explanation": "«Y» es una conjunción."
          },
          {
            "id": "tema-10-rep-enlaces-3",
            "question": "¿Cuál es una interjección?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "ay",
                "text": "¡ay!",
                "correct": true
              },
              {
                "id": "desde",
                "text": "desde",
                "correct": false
              },
              {
                "id": "pero",
                "text": "pero",
                "correct": false
              },
              {
                "id": "mesa",
                "text": "mesa",
                "correct": false
              }
            ],
            "explanation": "«¡Ay!» puede expresar dolor o sorpresa."
          },
          {
            "id": "tema-10-rep-resena-1",
            "question": "¿Cuál es uno de los conceptos que debes dominar en «La reseña y los buenos textos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "presentación",
                "text": "Presentación",
                "correct": true
              },
              {
                "id": "una-raíz-cuadrada",
                "text": "Una raíz cuadrada",
                "correct": false
              },
              {
                "id": "una-cordillera",
                "text": "Una cordillera",
                "correct": false
              },
              {
                "id": "un-circuito-eléctrico",
                "text": "Un circuito eléctrico",
                "correct": false
              }
            ],
            "explanation": "Una reseña presenta una obra, resume lo esencial sin contarlo todo y ofrece una valoración razonada. Un buen texto es claro, coherente y adecuado."
          },
          {
            "id": "tema-10-rep-resena-2",
            "question": "¿Qué otro contenido se trabaja en «La reseña y los buenos textos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "resumen",
                "text": "Resumen",
                "correct": true
              },
              {
                "id": "los-planetas",
                "text": "Los planetas",
                "correct": false
              },
              {
                "id": "los-polígonos",
                "text": "Los polígonos",
                "correct": false
              },
              {
                "id": "la-fotosíntesis",
                "text": "La fotosíntesis",
                "correct": false
              }
            ],
            "explanation": "En esta sección también se trabaja resumen."
          },
          {
            "id": "tema-10-rep-resena-3",
            "question": "¿Qué opción está relacionada con «La reseña y los buenos textos»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "valoración",
                "text": "Valoración",
                "correct": true
              },
              {
                "id": "división-decimal",
                "text": "División decimal",
                "correct": false
              },
              {
                "id": "escala-cartográfica",
                "text": "Escala cartográfica",
                "correct": false
              },
              {
                "id": "cadena-alimentaria",
                "text": "Cadena alimentaria",
                "correct": false
              }
            ],
            "explanation": "Valoración forma parte de esta sección."
          }
        ]
      }
    ]
  },
  {
    "id": "tema-11",
    "order": 11,
    "title": "¿Qué lees?",
    "description": "Unidad 11: teoría, ejemplos, práctica y repaso paso a paso.",
    "emoji": "📚",
    "sections": [
      {
        "id": "situacion",
        "title": "Hablar y escuchar: recomendar lecturas",
        "subtitle": "Recomendar con razones",
        "kind": "communication",
        "emoji": "🗣️",
        "theory": [
          {
            "type": "text",
            "title": "Actividad de comunicación oral",
            "text": "Recomendar con razones."
          },
          {
            "type": "list",
            "title": "Qué debes practicar",
            "items": [
              "Escuchar antes de responder.",
              "Hablar con claridad y mantener el tema.",
              "Respetar el turno de palabra.",
              "Explicar opiniones con razones cuando sea necesario."
            ]
          },
          {
            "type": "important",
            "title": "Se practica hablando y escuchando",
            "text": "No se evalúa con preguntas tipo test en el repaso teórico."
          }
        ],
        "questions": []
      },
      {
        "id": "siglas",
        "title": "Las siglas",
        "subtitle": "Comprender abreviaciones formadas por iniciales",
        "kind": "vocabulary",
        "emoji": "🧩",
        "theory": [
          {
            "type": "text",
            "title": "Lo que vas a aprender",
            "text": "Comprender abreviaciones formadas por iniciales."
          },
          {
            "type": "text",
            "title": "Explicación",
            "text": "Las siglas se forman normalmente con letras iniciales de varias palabras y suelen escribirse en mayúsculas, sin puntos entre letras."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Iniciales",
              "Mayúsculas",
              "Significado"
            ]
          },
          {
            "type": "example",
            "title": "Aprende con ejemplos",
            "text": "Busca o inventa un ejemplo relacionado con iniciales. Después explícalo con tus propias palabras."
          },
          {
            "type": "tip",
            "title": "Truco Palabraria",
            "text": "No memorices solo la definición: identifica la pista que te permite reconocer el concepto y úsala en un ejemplo nuevo."
          }
        ],
        "questions": [
          {
            "id": "siglas-1",
            "question": "¿Cuál es uno de los conceptos que debes dominar en «Las siglas»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "iniciales",
                "text": "Iniciales",
                "correct": true
              },
              {
                "id": "una-raíz-cuadrada",
                "text": "Una raíz cuadrada",
                "correct": false
              },
              {
                "id": "una-cordillera",
                "text": "Una cordillera",
                "correct": false
              },
              {
                "id": "un-circuito-eléctrico",
                "text": "Un circuito eléctrico",
                "correct": false
              }
            ],
            "explanation": "Las siglas se forman normalmente con letras iniciales de varias palabras y suelen escribirse en mayúsculas, sin puntos entre letras."
          },
          {
            "id": "siglas-2",
            "question": "¿Qué otro contenido se trabaja en «Las siglas»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "mayúsculas",
                "text": "Mayúsculas",
                "correct": true
              },
              {
                "id": "los-planetas",
                "text": "Los planetas",
                "correct": false
              },
              {
                "id": "los-polígonos",
                "text": "Los polígonos",
                "correct": false
              },
              {
                "id": "la-fotosíntesis",
                "text": "La fotosíntesis",
                "correct": false
              }
            ],
            "explanation": "En esta sección también se trabaja mayúsculas."
          },
          {
            "id": "siglas-3",
            "question": "¿Qué opción está relacionada con «Las siglas»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "significado",
                "text": "Significado",
                "correct": true
              },
              {
                "id": "división-decimal",
                "text": "División decimal",
                "correct": false
              },
              {
                "id": "escala-cartográfica",
                "text": "Escala cartográfica",
                "correct": false
              },
              {
                "id": "cadena-alimentaria",
                "text": "Cadena alimentaria",
                "correct": false
              }
            ],
            "explanation": "Significado forma parte de esta sección."
          },
          {
            "id": "siglas-4",
            "question": "¿Cuál es el objetivo de «Las siglas»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "comprender-abreviaciones",
                "text": "Comprender abreviaciones formadas por iniciales",
                "correct": true
              },
              {
                "id": "resolver-problemas-numér",
                "text": "Resolver problemas numéricos",
                "correct": false
              },
              {
                "id": "estudiar-accidentes-geog",
                "text": "Estudiar accidentes geográficos",
                "correct": false
              },
              {
                "id": "clasificar-animales",
                "text": "Clasificar animales",
                "correct": false
              }
            ],
            "explanation": "Las siglas se forman normalmente con letras iniciales de varias palabras y suelen escribirse en mayúsculas, sin puntos entre letras."
          },
          {
            "id": "siglas-5",
            "question": "¿Qué estrategia demuestra que has comprendido un contenido de Lengua?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "reconocerlo-y-aplicarlo-",
                "text": "Reconocerlo y aplicarlo en ejemplos nuevos",
                "correct": true
              },
              {
                "id": "repetir-sin-entender",
                "text": "Repetir sin entender",
                "correct": false
              },
              {
                "id": "elegir-al-azar",
                "text": "Elegir al azar",
                "correct": false
              },
              {
                "id": "no-revisar-errores",
                "text": "No revisar errores",
                "correct": false
              }
            ],
            "explanation": "Comprender significa poder aplicar lo aprendido."
          }
        ]
      },
      {
        "id": "punto-coma",
        "title": "El punto y coma",
        "subtitle": "Usar una pausa intermedia",
        "kind": "spelling",
        "emoji": "✏️",
        "theory": [
          {
            "type": "text",
            "title": "Lo que vas a aprender",
            "text": "Usar una pausa intermedia."
          },
          {
            "type": "text",
            "title": "Explicación",
            "text": "El punto y coma marca una pausa mayor que la coma y menor que el punto. Puede separar partes relacionadas o elementos complejos de una enumeración."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Pausa",
              "Relación",
              "Enumeración compleja"
            ]
          },
          {
            "type": "example",
            "title": "Aprende con ejemplos",
            "text": "Busca o inventa un ejemplo relacionado con pausa. Después explícalo con tus propias palabras."
          },
          {
            "type": "tip",
            "title": "Truco Palabraria",
            "text": "No memorices solo la definición: identifica la pista que te permite reconocer el concepto y úsala en un ejemplo nuevo."
          }
        ],
        "questions": [
          {
            "id": "punto-coma-1",
            "question": "¿Cuál es uno de los conceptos que debes dominar en «El punto y coma»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "pausa",
                "text": "Pausa",
                "correct": true
              },
              {
                "id": "una-raíz-cuadrada",
                "text": "Una raíz cuadrada",
                "correct": false
              },
              {
                "id": "una-cordillera",
                "text": "Una cordillera",
                "correct": false
              },
              {
                "id": "un-circuito-eléctrico",
                "text": "Un circuito eléctrico",
                "correct": false
              }
            ],
            "explanation": "El punto y coma marca una pausa mayor que la coma y menor que el punto. Puede separar partes relacionadas o elementos complejos de una enumeración."
          },
          {
            "id": "punto-coma-2",
            "question": "¿Qué otro contenido se trabaja en «El punto y coma»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "relación",
                "text": "Relación",
                "correct": true
              },
              {
                "id": "los-planetas",
                "text": "Los planetas",
                "correct": false
              },
              {
                "id": "los-polígonos",
                "text": "Los polígonos",
                "correct": false
              },
              {
                "id": "la-fotosíntesis",
                "text": "La fotosíntesis",
                "correct": false
              }
            ],
            "explanation": "En esta sección también se trabaja relación."
          },
          {
            "id": "punto-coma-3",
            "question": "¿Qué opción está relacionada con «El punto y coma»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "enumeración-compleja",
                "text": "Enumeración compleja",
                "correct": true
              },
              {
                "id": "división-decimal",
                "text": "División decimal",
                "correct": false
              },
              {
                "id": "escala-cartográfica",
                "text": "Escala cartográfica",
                "correct": false
              },
              {
                "id": "cadena-alimentaria",
                "text": "Cadena alimentaria",
                "correct": false
              }
            ],
            "explanation": "Enumeración compleja forma parte de esta sección."
          },
          {
            "id": "punto-coma-4",
            "question": "¿Cuál es el objetivo de «El punto y coma»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "usar-una-pausa-intermedi",
                "text": "Usar una pausa intermedia",
                "correct": true
              },
              {
                "id": "resolver-problemas-numér",
                "text": "Resolver problemas numéricos",
                "correct": false
              },
              {
                "id": "estudiar-accidentes-geog",
                "text": "Estudiar accidentes geográficos",
                "correct": false
              },
              {
                "id": "clasificar-animales",
                "text": "Clasificar animales",
                "correct": false
              }
            ],
            "explanation": "El punto y coma marca una pausa mayor que la coma y menor que el punto. Puede separar partes relacionadas o elementos complejos de una enumeración."
          },
          {
            "id": "punto-coma-5",
            "question": "¿Qué estrategia demuestra que has comprendido un contenido de Lengua?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "reconocerlo-y-aplicarlo-",
                "text": "Reconocerlo y aplicarlo en ejemplos nuevos",
                "correct": true
              },
              {
                "id": "repetir-sin-entender",
                "text": "Repetir sin entender",
                "correct": false
              },
              {
                "id": "elegir-al-azar",
                "text": "Elegir al azar",
                "correct": false
              },
              {
                "id": "no-revisar-errores",
                "text": "No revisar errores",
                "correct": false
              }
            ],
            "explanation": "Comprender significa poder aplicar lo aprendido."
          }
        ]
      },
      {
        "id": "oracion",
        "title": "La oración y sus clases",
        "subtitle": "Reconocer oraciones y modalidad",
        "kind": "grammar",
        "emoji": "🔤",
        "theory": [
          {
            "type": "text",
            "title": "Lo que vas a aprender",
            "text": "Reconocer oraciones y modalidad."
          },
          {
            "type": "text",
            "title": "Explicación",
            "text": "Una oración comunica un mensaje completo y contiene un verbo. Según la intención puede ser enunciativa, interrogativa, exclamativa, exhortativa, desiderativa o dubitativa."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Verbo",
              "Mensaje completo",
              "Modalidad"
            ]
          },
          {
            "type": "example",
            "title": "Aprende con ejemplos",
            "text": "Busca o inventa un ejemplo relacionado con verbo. Después explícalo con tus propias palabras."
          },
          {
            "type": "tip",
            "title": "Truco Palabraria",
            "text": "No memorices solo la definición: identifica la pista que te permite reconocer el concepto y úsala en un ejemplo nuevo."
          }
        ],
        "questions": [
          {
            "id": "t11-or-1",
            "question": "¿Cuál es una oración interrogativa?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "vienes-mañana",
                "text": "¿Vienes mañana?",
                "correct": true
              },
              {
                "id": "qué-alegría",
                "text": "¡Qué alegría!",
                "correct": false
              },
              {
                "id": "cierra-la-puerta",
                "text": "Cierra la puerta.",
                "correct": false
              },
              {
                "id": "mañana-iremos",
                "text": "Mañana iremos.",
                "correct": false
              }
            ],
            "explanation": "Las interrogativas formulan preguntas."
          },
          {
            "id": "t11-or-2",
            "question": "«¡Qué frío hace!» es una oración…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "exclamativa",
                "text": "exclamativa",
                "correct": true
              },
              {
                "id": "interrogativa",
                "text": "interrogativa",
                "correct": false
              },
              {
                "id": "enunciativa",
                "text": "enunciativa",
                "correct": false
              },
              {
                "id": "dubitativa",
                "text": "dubitativa",
                "correct": false
              }
            ],
            "explanation": "Expresa emoción mediante exclamación."
          },
          {
            "id": "t11-or-3",
            "question": "«Tal vez llueva» es…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "dubitativa",
                "text": "dubitativa",
                "correct": true
              },
              {
                "id": "exhortativa",
                "text": "exhortativa",
                "correct": false
              },
              {
                "id": "interrogativa",
                "text": "interrogativa",
                "correct": false
              },
              {
                "id": "exclamativa",
                "text": "exclamativa",
                "correct": false
              }
            ],
            "explanation": "«Tal vez» expresa duda."
          },
          {
            "id": "t11-or-4",
            "question": "Una oración contiene normalmente…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "un-verbo-y-un-mensaje-co",
                "text": "un verbo y un mensaje completo",
                "correct": true
              },
              {
                "id": "solo-un-sustantivo",
                "text": "solo un sustantivo",
                "correct": false
              },
              {
                "id": "siempre-una-pregunta",
                "text": "siempre una pregunta",
                "correct": false
              },
              {
                "id": "una-sola-palabra",
                "text": "una sola palabra",
                "correct": false
              }
            ],
            "explanation": "El verbo es el núcleo del predicado y la oración comunica un mensaje."
          },
          {
            "id": "t11-or-5",
            "question": "«Por favor, guarda tus cosas» es principalmente…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "exhortativa",
                "text": "exhortativa",
                "correct": true
              },
              {
                "id": "dubitativa",
                "text": "dubitativa",
                "correct": false
              },
              {
                "id": "interrogativa",
                "text": "interrogativa",
                "correct": false
              },
              {
                "id": "desiderativa",
                "text": "desiderativa",
                "correct": false
              }
            ],
            "explanation": "Expresa una petición u orden."
          }
        ]
      },
      {
        "id": "literatura",
        "title": "Los recursos literarios",
        "subtitle": "Reconocer formas expresivas",
        "kind": "literature",
        "emoji": "📚",
        "theory": [
          {
            "type": "text",
            "title": "Lo que vas a aprender",
            "text": "Reconocer formas expresivas."
          },
          {
            "type": "text",
            "title": "Explicación",
            "text": "Recursos como comparación, metáfora o personificación hacen el lenguaje más expresivo y crean imágenes en la imaginación."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Comparación",
              "Metáfora",
              "Personificación"
            ]
          },
          {
            "type": "example",
            "title": "Aprende con ejemplos",
            "text": "Busca o inventa un ejemplo relacionado con comparación. Después explícalo con tus propias palabras."
          },
          {
            "type": "tip",
            "title": "Truco Palabraria",
            "text": "No memorices solo la definición: identifica la pista que te permite reconocer el concepto y úsala en un ejemplo nuevo."
          }
        ],
        "questions": [
          {
            "id": "literatura-1",
            "question": "¿Qué concepto pertenece a «Los recursos literarios»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "comparación",
                "text": "Comparación",
                "correct": true
              },
              {
                "id": "una-fracción",
                "text": "una fracción",
                "correct": false
              },
              {
                "id": "un-ecosistema",
                "text": "un ecosistema",
                "correct": false
              },
              {
                "id": "una-unidad-de-masa",
                "text": "una unidad de masa",
                "correct": false
              }
            ],
            "explanation": "Recursos como comparación, metáfora o personificación hacen el lenguaje más expresivo y crean imágenes en la imaginación."
          },
          {
            "id": "literatura-2",
            "question": "¿Cuál es otra idea importante de «Los recursos literarios»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "metáfora",
                "text": "Metáfora",
                "correct": true
              },
              {
                "id": "multiplicación",
                "text": "multiplicación",
                "correct": false
              },
              {
                "id": "kilómetro",
                "text": "kilómetro",
                "correct": false
              },
              {
                "id": "continente",
                "text": "continente",
                "correct": false
              }
            ],
            "explanation": "También trabajamos metáfora."
          },
          {
            "id": "literatura-3",
            "question": "En literatura, además de entender qué ocurre, conviene fijarse en…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "cómo-está-usado-el-lengu",
                "text": "cómo está usado el lenguaje",
                "correct": true
              },
              {
                "id": "solo-el-número-de-página",
                "text": "solo el número de páginas",
                "correct": false
              },
              {
                "id": "el-precio-del-libro",
                "text": "el precio del libro",
                "correct": false
              },
              {
                "id": "el-tamaño-de-la-portada",
                "text": "el tamaño de la portada",
                "correct": false
              }
            ],
            "explanation": "La forma de usar el lenguaje es fundamental en los textos literarios."
          },
          {
            "id": "literatura-4",
            "question": "¿Qué deberías ser capaz de reconocer después de estudiar esta sección?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "personificación",
                "text": "Personificación",
                "correct": true
              },
              {
                "id": "una-operación",
                "text": "una operación",
                "correct": false
              },
              {
                "id": "una-coordenada",
                "text": "una coordenada",
                "correct": false
              },
              {
                "id": "una-unidad-de-volumen",
                "text": "una unidad de volumen",
                "correct": false
              }
            ],
            "explanation": "Uno de los aprendizajes previstos es reconocer personificación."
          },
          {
            "id": "literatura-5",
            "question": "¿Cuál es una buena forma de demostrar comprensión literaria?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "identificar-el-recurso-o",
                "text": "Identificar el recurso o elemento y explicar su efecto",
                "correct": true
              },
              {
                "id": "copiar-sin-explicar",
                "text": "copiar sin explicar",
                "correct": false
              },
              {
                "id": "contar-letras",
                "text": "contar letras",
                "correct": false
              },
              {
                "id": "responder-sin-leer",
                "text": "responder sin leer",
                "correct": false
              }
            ],
            "explanation": "Hay que reconocer los elementos y comprender para qué sirven."
          }
        ]
      },
      {
        "id": "escritura",
        "title": "Fichas de figuras literarias",
        "subtitle": "Seleccionar y organizar información biográfica",
        "kind": "writing",
        "emoji": "📝",
        "theory": [
          {
            "type": "text",
            "title": "Actividad de expresión escrita",
            "text": "Seleccionar y organizar información biográfica."
          },
          {
            "type": "list",
            "title": "Cómo hacer la actividad",
            "items": [
              "Piensa qué quieres comunicar y a quién va dirigido.",
              "Haz un pequeño borrador y ordena las ideas.",
              "Escribe el texto siguiendo las características trabajadas en la unidad.",
              "Relee lo escrito y corrige ortografía, puntuación y repeticiones.",
              "Comprueba que el resultado cumple el objetivo de la actividad."
            ]
          },
          {
            "type": "important",
            "title": "Aquí no hay examen tipo test",
            "text": "Esta sección se aprende escribiendo. El objetivo es producir un texto, revisarlo y mejorarlo."
          }
        ],
        "questions": []
      },
      {
        "id": "repaso",
        "title": "Comprueba tu progreso",
        "subtitle": "Consolidar el tema",
        "kind": "review",
        "emoji": "🏆",
        "theory": [
          {
            "type": "text",
            "title": "Repaso de la teoría de la unidad",
            "text": "Comprueba lo aprendido en los contenidos teóricos de este tema."
          },
          {
            "type": "important",
            "title": "Qué se repasa",
            "text": "Vocabulario, ortografía, gramática y, cuando corresponde, literatura o alfabetización mediática."
          },
          {
            "type": "tip",
            "title": "Comprensión lectora",
            "text": "Las lecturas y sus actividades de comprensión se trabajan en clase y no forman parte de Palabraria."
          }
        ],
        "questions": [
          {
            "id": "tema-11-rep-siglas-1",
            "question": "¿Cuál es uno de los conceptos que debes dominar en «Las siglas»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "iniciales",
                "text": "Iniciales",
                "correct": true
              },
              {
                "id": "una-raíz-cuadrada",
                "text": "Una raíz cuadrada",
                "correct": false
              },
              {
                "id": "una-cordillera",
                "text": "Una cordillera",
                "correct": false
              },
              {
                "id": "un-circuito-eléctrico",
                "text": "Un circuito eléctrico",
                "correct": false
              }
            ],
            "explanation": "Las siglas se forman normalmente con letras iniciales de varias palabras y suelen escribirse en mayúsculas, sin puntos entre letras."
          },
          {
            "id": "tema-11-rep-siglas-2",
            "question": "¿Qué otro contenido se trabaja en «Las siglas»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "mayúsculas",
                "text": "Mayúsculas",
                "correct": true
              },
              {
                "id": "los-planetas",
                "text": "Los planetas",
                "correct": false
              },
              {
                "id": "los-polígonos",
                "text": "Los polígonos",
                "correct": false
              },
              {
                "id": "la-fotosíntesis",
                "text": "La fotosíntesis",
                "correct": false
              }
            ],
            "explanation": "En esta sección también se trabaja mayúsculas."
          },
          {
            "id": "tema-11-rep-siglas-3",
            "question": "¿Qué opción está relacionada con «Las siglas»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "significado",
                "text": "Significado",
                "correct": true
              },
              {
                "id": "división-decimal",
                "text": "División decimal",
                "correct": false
              },
              {
                "id": "escala-cartográfica",
                "text": "Escala cartográfica",
                "correct": false
              },
              {
                "id": "cadena-alimentaria",
                "text": "Cadena alimentaria",
                "correct": false
              }
            ],
            "explanation": "Significado forma parte de esta sección."
          },
          {
            "id": "tema-11-rep-punto-coma-1",
            "question": "¿Cuál es uno de los conceptos que debes dominar en «El punto y coma»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "pausa",
                "text": "Pausa",
                "correct": true
              },
              {
                "id": "una-raíz-cuadrada",
                "text": "Una raíz cuadrada",
                "correct": false
              },
              {
                "id": "una-cordillera",
                "text": "Una cordillera",
                "correct": false
              },
              {
                "id": "un-circuito-eléctrico",
                "text": "Un circuito eléctrico",
                "correct": false
              }
            ],
            "explanation": "El punto y coma marca una pausa mayor que la coma y menor que el punto. Puede separar partes relacionadas o elementos complejos de una enumeración."
          },
          {
            "id": "tema-11-rep-punto-coma-2",
            "question": "¿Qué otro contenido se trabaja en «El punto y coma»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "relación",
                "text": "Relación",
                "correct": true
              },
              {
                "id": "los-planetas",
                "text": "Los planetas",
                "correct": false
              },
              {
                "id": "los-polígonos",
                "text": "Los polígonos",
                "correct": false
              },
              {
                "id": "la-fotosíntesis",
                "text": "La fotosíntesis",
                "correct": false
              }
            ],
            "explanation": "En esta sección también se trabaja relación."
          },
          {
            "id": "tema-11-rep-punto-coma-3",
            "question": "¿Qué opción está relacionada con «El punto y coma»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "enumeración-compleja",
                "text": "Enumeración compleja",
                "correct": true
              },
              {
                "id": "división-decimal",
                "text": "División decimal",
                "correct": false
              },
              {
                "id": "escala-cartográfica",
                "text": "Escala cartográfica",
                "correct": false
              },
              {
                "id": "cadena-alimentaria",
                "text": "Cadena alimentaria",
                "correct": false
              }
            ],
            "explanation": "Enumeración compleja forma parte de esta sección."
          },
          {
            "id": "tema-11-rep-oracion-1",
            "question": "¿Cuál es una oración interrogativa?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "vienes-mañana",
                "text": "¿Vienes mañana?",
                "correct": true
              },
              {
                "id": "qué-alegría",
                "text": "¡Qué alegría!",
                "correct": false
              },
              {
                "id": "cierra-la-puerta",
                "text": "Cierra la puerta.",
                "correct": false
              },
              {
                "id": "mañana-iremos",
                "text": "Mañana iremos.",
                "correct": false
              }
            ],
            "explanation": "Las interrogativas formulan preguntas."
          },
          {
            "id": "tema-11-rep-oracion-2",
            "question": "«¡Qué frío hace!» es una oración…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "exclamativa",
                "text": "exclamativa",
                "correct": true
              },
              {
                "id": "interrogativa",
                "text": "interrogativa",
                "correct": false
              },
              {
                "id": "enunciativa",
                "text": "enunciativa",
                "correct": false
              },
              {
                "id": "dubitativa",
                "text": "dubitativa",
                "correct": false
              }
            ],
            "explanation": "Expresa emoción mediante exclamación."
          },
          {
            "id": "tema-11-rep-oracion-3",
            "question": "«Tal vez llueva» es…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "dubitativa",
                "text": "dubitativa",
                "correct": true
              },
              {
                "id": "exhortativa",
                "text": "exhortativa",
                "correct": false
              },
              {
                "id": "interrogativa",
                "text": "interrogativa",
                "correct": false
              },
              {
                "id": "exclamativa",
                "text": "exclamativa",
                "correct": false
              }
            ],
            "explanation": "«Tal vez» expresa duda."
          },
          {
            "id": "tema-11-rep-literatura-1",
            "question": "¿Qué concepto pertenece a «Los recursos literarios»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "comparación",
                "text": "Comparación",
                "correct": true
              },
              {
                "id": "una-fracción",
                "text": "una fracción",
                "correct": false
              },
              {
                "id": "un-ecosistema",
                "text": "un ecosistema",
                "correct": false
              },
              {
                "id": "una-unidad-de-masa",
                "text": "una unidad de masa",
                "correct": false
              }
            ],
            "explanation": "Recursos como comparación, metáfora o personificación hacen el lenguaje más expresivo y crean imágenes en la imaginación."
          },
          {
            "id": "tema-11-rep-literatura-2",
            "question": "¿Cuál es otra idea importante de «Los recursos literarios»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "metáfora",
                "text": "Metáfora",
                "correct": true
              },
              {
                "id": "multiplicación",
                "text": "multiplicación",
                "correct": false
              },
              {
                "id": "kilómetro",
                "text": "kilómetro",
                "correct": false
              },
              {
                "id": "continente",
                "text": "continente",
                "correct": false
              }
            ],
            "explanation": "También trabajamos metáfora."
          },
          {
            "id": "tema-11-rep-literatura-3",
            "question": "En literatura, además de entender qué ocurre, conviene fijarse en…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "cómo-está-usado-el-lengu",
                "text": "cómo está usado el lenguaje",
                "correct": true
              },
              {
                "id": "solo-el-número-de-página",
                "text": "solo el número de páginas",
                "correct": false
              },
              {
                "id": "el-precio-del-libro",
                "text": "el precio del libro",
                "correct": false
              },
              {
                "id": "el-tamaño-de-la-portada",
                "text": "el tamaño de la portada",
                "correct": false
              }
            ],
            "explanation": "La forma de usar el lenguaje es fundamental en los textos literarios."
          }
        ]
      }
    ]
  },
  {
    "id": "tema-12",
    "order": 12,
    "title": "¿Puede hacerlo cualquiera?",
    "description": "Unidad 12: teoría, ejemplos, práctica y repaso paso a paso.",
    "emoji": "🌟",
    "sections": [
      {
        "id": "situacion",
        "title": "Hablar y escuchar: igualdad",
        "subtitle": "Reflexionar sin estereotipos",
        "kind": "communication",
        "emoji": "🗣️",
        "theory": [
          {
            "type": "text",
            "title": "Actividad de comunicación oral",
            "text": "Reflexionar sin estereotipos."
          },
          {
            "type": "list",
            "title": "Qué debes practicar",
            "items": [
              "Escuchar antes de responder.",
              "Hablar con claridad y mantener el tema.",
              "Respetar el turno de palabra.",
              "Explicar opiniones con razones cuando sea necesario."
            ]
          },
          {
            "type": "important",
            "title": "Se practica hablando y escuchando",
            "text": "No se evalúa con preguntas tipo test en el repaso teórico."
          }
        ],
        "questions": []
      },
      {
        "id": "refranes",
        "title": "Los refranes",
        "subtitle": "Interpretar expresiones tradicionales",
        "kind": "vocabulary",
        "emoji": "🧩",
        "theory": [
          {
            "type": "text",
            "title": "Lo que vas a aprender",
            "text": "Interpretar expresiones tradicionales."
          },
          {
            "type": "text",
            "title": "Explicación",
            "text": "Los refranes son dichos populares breves que transmiten consejos, observaciones o enseñanzas y a menudo usan lenguaje figurado."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Tradición oral",
              "Enseñanza",
              "Sentido figurado"
            ]
          },
          {
            "type": "example",
            "title": "Aprende con ejemplos",
            "text": "Busca o inventa un ejemplo relacionado con tradición oral. Después explícalo con tus propias palabras."
          },
          {
            "type": "tip",
            "title": "Truco Palabraria",
            "text": "No memorices solo la definición: identifica la pista que te permite reconocer el concepto y úsala en un ejemplo nuevo."
          }
        ],
        "questions": [
          {
            "id": "refranes-1",
            "question": "¿Cuál es uno de los conceptos que debes dominar en «Los refranes»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "tradición-oral",
                "text": "Tradición oral",
                "correct": true
              },
              {
                "id": "una-raíz-cuadrada",
                "text": "Una raíz cuadrada",
                "correct": false
              },
              {
                "id": "una-cordillera",
                "text": "Una cordillera",
                "correct": false
              },
              {
                "id": "un-circuito-eléctrico",
                "text": "Un circuito eléctrico",
                "correct": false
              }
            ],
            "explanation": "Los refranes son dichos populares breves que transmiten consejos, observaciones o enseñanzas y a menudo usan lenguaje figurado."
          },
          {
            "id": "refranes-2",
            "question": "¿Qué otro contenido se trabaja en «Los refranes»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "enseñanza",
                "text": "Enseñanza",
                "correct": true
              },
              {
                "id": "los-planetas",
                "text": "Los planetas",
                "correct": false
              },
              {
                "id": "los-polígonos",
                "text": "Los polígonos",
                "correct": false
              },
              {
                "id": "la-fotosíntesis",
                "text": "La fotosíntesis",
                "correct": false
              }
            ],
            "explanation": "En esta sección también se trabaja enseñanza."
          },
          {
            "id": "refranes-3",
            "question": "¿Qué opción está relacionada con «Los refranes»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "sentido-figurado",
                "text": "Sentido figurado",
                "correct": true
              },
              {
                "id": "división-decimal",
                "text": "División decimal",
                "correct": false
              },
              {
                "id": "escala-cartográfica",
                "text": "Escala cartográfica",
                "correct": false
              },
              {
                "id": "cadena-alimentaria",
                "text": "Cadena alimentaria",
                "correct": false
              }
            ],
            "explanation": "Sentido figurado forma parte de esta sección."
          },
          {
            "id": "refranes-4",
            "question": "¿Cuál es el objetivo de «Los refranes»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "interpretar-expresiones-",
                "text": "Interpretar expresiones tradicionales",
                "correct": true
              },
              {
                "id": "resolver-problemas-numér",
                "text": "Resolver problemas numéricos",
                "correct": false
              },
              {
                "id": "estudiar-accidentes-geog",
                "text": "Estudiar accidentes geográficos",
                "correct": false
              },
              {
                "id": "clasificar-animales",
                "text": "Clasificar animales",
                "correct": false
              }
            ],
            "explanation": "Los refranes son dichos populares breves que transmiten consejos, observaciones o enseñanzas y a menudo usan lenguaje figurado."
          },
          {
            "id": "refranes-5",
            "question": "¿Qué estrategia demuestra que has comprendido un contenido de Lengua?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "reconocerlo-y-aplicarlo-",
                "text": "Reconocerlo y aplicarlo en ejemplos nuevos",
                "correct": true
              },
              {
                "id": "repetir-sin-entender",
                "text": "Repetir sin entender",
                "correct": false
              },
              {
                "id": "elegir-al-azar",
                "text": "Elegir al azar",
                "correct": false
              },
              {
                "id": "no-revisar-errores",
                "text": "No revisar errores",
                "correct": false
              }
            ],
            "explanation": "Comprender significa poder aplicar lo aprendido."
          }
        ]
      },
      {
        "id": "division-linea",
        "title": "División de palabras a final de línea",
        "subtitle": "Separar palabras correctamente",
        "kind": "spelling",
        "emoji": "✏️",
        "theory": [
          {
            "type": "text",
            "title": "Lo que vas a aprender",
            "text": "Separar palabras correctamente."
          },
          {
            "type": "text",
            "title": "Explicación",
            "text": "Al final de línea las palabras se dividen por sílabas usando guion. No deben separarse letras que pertenecen a la misma sílaba."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Sílabas",
              "Guion",
              "Separación"
            ]
          },
          {
            "type": "example",
            "title": "Aprende con ejemplos",
            "text": "Busca o inventa un ejemplo relacionado con sílabas. Después explícalo con tus propias palabras."
          },
          {
            "type": "tip",
            "title": "Truco Palabraria",
            "text": "No memorices solo la definición: identifica la pista que te permite reconocer el concepto y úsala en un ejemplo nuevo."
          }
        ],
        "questions": [
          {
            "id": "division-linea-1",
            "question": "¿Cuál es uno de los conceptos que debes dominar en «División de palabras a final de línea»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "sílabas",
                "text": "Sílabas",
                "correct": true
              },
              {
                "id": "una-raíz-cuadrada",
                "text": "Una raíz cuadrada",
                "correct": false
              },
              {
                "id": "una-cordillera",
                "text": "Una cordillera",
                "correct": false
              },
              {
                "id": "un-circuito-eléctrico",
                "text": "Un circuito eléctrico",
                "correct": false
              }
            ],
            "explanation": "Al final de línea las palabras se dividen por sílabas usando guion. No deben separarse letras que pertenecen a la misma sílaba."
          },
          {
            "id": "division-linea-2",
            "question": "¿Qué otro contenido se trabaja en «División de palabras a final de línea»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "guion",
                "text": "Guion",
                "correct": true
              },
              {
                "id": "los-planetas",
                "text": "Los planetas",
                "correct": false
              },
              {
                "id": "los-polígonos",
                "text": "Los polígonos",
                "correct": false
              },
              {
                "id": "la-fotosíntesis",
                "text": "La fotosíntesis",
                "correct": false
              }
            ],
            "explanation": "En esta sección también se trabaja guion."
          },
          {
            "id": "division-linea-3",
            "question": "¿Qué opción está relacionada con «División de palabras a final de línea»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "separación",
                "text": "Separación",
                "correct": true
              },
              {
                "id": "división-decimal",
                "text": "División decimal",
                "correct": false
              },
              {
                "id": "escala-cartográfica",
                "text": "Escala cartográfica",
                "correct": false
              },
              {
                "id": "cadena-alimentaria",
                "text": "Cadena alimentaria",
                "correct": false
              }
            ],
            "explanation": "Separación forma parte de esta sección."
          },
          {
            "id": "division-linea-4",
            "question": "¿Cuál es el objetivo de «División de palabras a final de línea»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "separar-palabras-correct",
                "text": "Separar palabras correctamente",
                "correct": true
              },
              {
                "id": "resolver-problemas-numér",
                "text": "Resolver problemas numéricos",
                "correct": false
              },
              {
                "id": "estudiar-accidentes-geog",
                "text": "Estudiar accidentes geográficos",
                "correct": false
              },
              {
                "id": "clasificar-animales",
                "text": "Clasificar animales",
                "correct": false
              }
            ],
            "explanation": "Al final de línea las palabras se dividen por sílabas usando guion. No deben separarse letras que pertenecen a la misma sílaba."
          },
          {
            "id": "division-linea-5",
            "question": "¿Qué estrategia demuestra que has comprendido un contenido de Lengua?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "reconocerlo-y-aplicarlo-",
                "text": "Reconocerlo y aplicarlo en ejemplos nuevos",
                "correct": true
              },
              {
                "id": "repetir-sin-entender",
                "text": "Repetir sin entender",
                "correct": false
              },
              {
                "id": "elegir-al-azar",
                "text": "Elegir al azar",
                "correct": false
              },
              {
                "id": "no-revisar-errores",
                "text": "No revisar errores",
                "correct": false
              }
            ],
            "explanation": "Comprender significa poder aplicar lo aprendido."
          }
        ]
      },
      {
        "id": "sujeto-predicado",
        "title": "El sujeto y el predicado",
        "subtitle": "Reconocer las dos partes básicas de muchas oraciones",
        "kind": "grammar",
        "emoji": "🔤",
        "theory": [
          {
            "type": "text",
            "title": "Lo que vas a aprender",
            "text": "Reconocer las dos partes básicas de muchas oraciones."
          },
          {
            "type": "text",
            "title": "Explicación",
            "text": "El sujeto indica de quién o de qué se habla; el predicado dice algo del sujeto y contiene el verbo. Ambos concuerdan en número y persona."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Sujeto",
              "Predicado",
              "Concordancia"
            ]
          },
          {
            "type": "example",
            "title": "Aprende con ejemplos",
            "text": "Busca o inventa un ejemplo relacionado con sujeto. Después explícalo con tus propias palabras."
          },
          {
            "type": "tip",
            "title": "Truco Palabraria",
            "text": "No memorices solo la definición: identifica la pista que te permite reconocer el concepto y úsala en un ejemplo nuevo."
          }
        ],
        "questions": [
          {
            "id": "t12-sp-1",
            "question": "En «Lucía prepara la merienda», ¿cuál es el sujeto?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "lucía",
                "text": "Lucía",
                "correct": true
              },
              {
                "id": "prepara",
                "text": "prepara",
                "correct": false
              },
              {
                "id": "la-merienda",
                "text": "la merienda",
                "correct": false
              },
              {
                "id": "prepara-la-merienda",
                "text": "prepara la merienda",
                "correct": false
              }
            ],
            "explanation": "«Lucía» es de quien se dice algo."
          },
          {
            "id": "t12-sp-2",
            "question": "En «Los perros corren por el parque», ¿cuál es el predicado?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "corren-por-el-parque",
                "text": "corren por el parque",
                "correct": true
              },
              {
                "id": "los-perros",
                "text": "Los perros",
                "correct": false
              },
              {
                "id": "perros",
                "text": "perros",
                "correct": false
              },
              {
                "id": "el-parque",
                "text": "el parque",
                "correct": false
              }
            ],
            "explanation": "El predicado dice qué hacen los perros e incluye el verbo."
          },
          {
            "id": "t12-sp-3",
            "question": "¿Qué palabra es imprescindible en el predicado?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "el-verbo",
                "text": "el verbo",
                "correct": true
              },
              {
                "id": "el-artículo",
                "text": "el artículo",
                "correct": false
              },
              {
                "id": "un-adjetivo",
                "text": "un adjetivo",
                "correct": false
              },
              {
                "id": "un-demostrativo",
                "text": "un demostrativo",
                "correct": false
              }
            ],
            "explanation": "El verbo funciona como núcleo del predicado."
          },
          {
            "id": "t12-sp-4",
            "question": "Completa con concordancia correcta: «Mi hermana y yo ___».",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "estudiamos",
                "text": "estudiamos",
                "correct": true
              },
              {
                "id": "estudia",
                "text": "estudia",
                "correct": false
              },
              {
                "id": "estudias",
                "text": "estudias",
                "correct": false
              },
              {
                "id": "estudio",
                "text": "estudio",
                "correct": false
              }
            ],
            "explanation": "«Mi hermana y yo» equivale a «nosotros/nosotras»: plural."
          },
          {
            "id": "t12-sp-5",
            "question": "El sujeto indica…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "de-quién-o-de-qué-se-hab",
                "text": "de quién o de qué se habla",
                "correct": true
              },
              {
                "id": "cómo-se-separan-las-síla",
                "text": "cómo se separan las sílabas",
                "correct": false
              },
              {
                "id": "dónde-va-la-tilde",
                "text": "dónde va la tilde",
                "correct": false
              },
              {
                "id": "el-significado-de-un-pre",
                "text": "el significado de un prefijo",
                "correct": false
              }
            ],
            "explanation": "El predicado, en cambio, dice algo del sujeto."
          }
        ]
      },
      {
        "id": "fake-news",
        "title": "Noticias y noticias falsas",
        "subtitle": "Verificar antes de compartir",
        "kind": "media",
        "emoji": "🌐",
        "theory": [
          {
            "type": "text",
            "title": "Lo que vas a aprender",
            "text": "Verificar antes de compartir."
          },
          {
            "type": "text",
            "title": "Explicación",
            "text": "Comprueba fuente, fecha, autor, evidencias y si otros medios fiables confirman la información. Un titular llamativo no demuestra que algo sea cierto."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Fuente",
              "Fecha",
              "Contraste",
              "Evidencia"
            ]
          },
          {
            "type": "example",
            "title": "Aprende con ejemplos",
            "text": "Busca o inventa un ejemplo relacionado con fuente. Después explícalo con tus propias palabras."
          },
          {
            "type": "tip",
            "title": "Truco Palabraria",
            "text": "No memorices solo la definición: identifica la pista que te permite reconocer el concepto y úsala en un ejemplo nuevo."
          }
        ],
        "questions": [
          {
            "id": "t12-fn-1",
            "question": "Antes de compartir una noticia sorprendente, ¿qué conviene hacer primero?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "comprobar-la-fuente-y-co",
                "text": "Comprobar la fuente y contrastarla",
                "correct": true
              },
              {
                "id": "compartirla-rápido",
                "text": "Compartirla rápido",
                "correct": false
              },
              {
                "id": "creerla-por-el-titular",
                "text": "Creerla por el titular",
                "correct": false
              },
              {
                "id": "mirar-solo-la-foto",
                "text": "Mirar solo la foto",
                "correct": false
              }
            ],
            "explanation": "Fuente, fecha, autor y contraste ayudan a verificar información."
          },
          {
            "id": "t12-fn-2",
            "question": "¿Qué señal debe hacernos desconfiar?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "no-indica-fuente-ni-auto",
                "text": "No indica fuente ni autor",
                "correct": true
              },
              {
                "id": "incluye-fecha-y-autor",
                "text": "Incluye fecha y autor",
                "correct": false
              },
              {
                "id": "cita-documentos-comproba",
                "text": "Cita documentos comprobables",
                "correct": false
              },
              {
                "id": "coincide-con-varias-fuen",
                "text": "Coincide con varias fuentes fiables",
                "correct": false
              }
            ],
            "explanation": "La falta de procedencia dificulta comprobar la información."
          },
          {
            "id": "t12-fn-3",
            "question": "Un titular muy llamativo…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "no-demuestra-que-la-noti",
                "text": "no demuestra que la noticia sea cierta",
                "correct": true
              },
              {
                "id": "garantiza-que-sea-cierto",
                "text": "garantiza que sea cierto",
                "correct": false
              },
              {
                "id": "es-una-prueba-suficiente",
                "text": "es una prueba suficiente",
                "correct": false
              },
              {
                "id": "hace-innecesario-leer",
                "text": "hace innecesario leer",
                "correct": false
              }
            ],
            "explanation": "Hay que revisar el contenido y sus evidencias."
          },
          {
            "id": "t12-fn-4",
            "question": "¿Qué es contrastar una noticia?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "compararla-con-otras-fue",
                "text": "Compararla con otras fuentes fiables",
                "correct": true
              },
              {
                "id": "cambiar-su-titular",
                "text": "Cambiar su titular",
                "correct": false
              },
              {
                "id": "compartirla-muchas-veces",
                "text": "Compartirla muchas veces",
                "correct": false
              },
              {
                "id": "eliminar-la-fecha",
                "text": "Eliminar la fecha",
                "correct": false
              }
            ],
            "explanation": "Contrastar permite comprobar si otras fuentes independientes confirman los hechos."
          },
          {
            "id": "t12-fn-5",
            "question": "¿Qué dato conviene revisar?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "la-fecha-de-publicación",
                "text": "La fecha de publicación",
                "correct": true
              },
              {
                "id": "el-color-de-la-página-ún",
                "text": "El color de la página únicamente",
                "correct": false
              },
              {
                "id": "el-tamaño-de-la-foto",
                "text": "El tamaño de la foto",
                "correct": false
              },
              {
                "id": "si-el-titular-rima",
                "text": "Si el titular rima",
                "correct": false
              }
            ],
            "explanation": "Una información antigua puede circular como si fuera actual."
          }
        ]
      },
      {
        "id": "escritura",
        "title": "Cartel sobre la igualdad",
        "subtitle": "Crear un mensaje inclusivo",
        "kind": "writing",
        "emoji": "📝",
        "theory": [
          {
            "type": "text",
            "title": "Actividad de expresión escrita",
            "text": "Crear un mensaje inclusivo."
          },
          {
            "type": "list",
            "title": "Cómo hacer la actividad",
            "items": [
              "Piensa qué quieres comunicar y a quién va dirigido.",
              "Haz un pequeño borrador y ordena las ideas.",
              "Escribe el texto siguiendo las características trabajadas en la unidad.",
              "Relee lo escrito y corrige ortografía, puntuación y repeticiones.",
              "Comprueba que el resultado cumple el objetivo de la actividad."
            ]
          },
          {
            "type": "important",
            "title": "Aquí no hay examen tipo test",
            "text": "Esta sección se aprende escribiendo. El objetivo es producir un texto, revisarlo y mejorarlo."
          }
        ],
        "questions": []
      },
      {
        "id": "repaso",
        "title": "Comprueba tu progreso",
        "subtitle": "Cerrar el curso",
        "kind": "review",
        "emoji": "🏆",
        "theory": [
          {
            "type": "text",
            "title": "Repaso de la teoría de la unidad",
            "text": "Comprueba lo aprendido en los contenidos teóricos de este tema."
          },
          {
            "type": "important",
            "title": "Qué se repasa",
            "text": "Vocabulario, ortografía, gramática y, cuando corresponde, literatura o alfabetización mediática."
          },
          {
            "type": "tip",
            "title": "Comprensión lectora",
            "text": "Las lecturas y sus actividades de comprensión se trabajan en clase y no forman parte de Palabraria."
          }
        ],
        "questions": [
          {
            "id": "tema-12-rep-refranes-1",
            "question": "¿Cuál es uno de los conceptos que debes dominar en «Los refranes»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "tradición-oral",
                "text": "Tradición oral",
                "correct": true
              },
              {
                "id": "una-raíz-cuadrada",
                "text": "Una raíz cuadrada",
                "correct": false
              },
              {
                "id": "una-cordillera",
                "text": "Una cordillera",
                "correct": false
              },
              {
                "id": "un-circuito-eléctrico",
                "text": "Un circuito eléctrico",
                "correct": false
              }
            ],
            "explanation": "Los refranes son dichos populares breves que transmiten consejos, observaciones o enseñanzas y a menudo usan lenguaje figurado."
          },
          {
            "id": "tema-12-rep-refranes-2",
            "question": "¿Qué otro contenido se trabaja en «Los refranes»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "enseñanza",
                "text": "Enseñanza",
                "correct": true
              },
              {
                "id": "los-planetas",
                "text": "Los planetas",
                "correct": false
              },
              {
                "id": "los-polígonos",
                "text": "Los polígonos",
                "correct": false
              },
              {
                "id": "la-fotosíntesis",
                "text": "La fotosíntesis",
                "correct": false
              }
            ],
            "explanation": "En esta sección también se trabaja enseñanza."
          },
          {
            "id": "tema-12-rep-refranes-3",
            "question": "¿Qué opción está relacionada con «Los refranes»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "sentido-figurado",
                "text": "Sentido figurado",
                "correct": true
              },
              {
                "id": "división-decimal",
                "text": "División decimal",
                "correct": false
              },
              {
                "id": "escala-cartográfica",
                "text": "Escala cartográfica",
                "correct": false
              },
              {
                "id": "cadena-alimentaria",
                "text": "Cadena alimentaria",
                "correct": false
              }
            ],
            "explanation": "Sentido figurado forma parte de esta sección."
          },
          {
            "id": "tema-12-rep-division-linea-1",
            "question": "¿Cuál es uno de los conceptos que debes dominar en «División de palabras a final de línea»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "sílabas",
                "text": "Sílabas",
                "correct": true
              },
              {
                "id": "una-raíz-cuadrada",
                "text": "Una raíz cuadrada",
                "correct": false
              },
              {
                "id": "una-cordillera",
                "text": "Una cordillera",
                "correct": false
              },
              {
                "id": "un-circuito-eléctrico",
                "text": "Un circuito eléctrico",
                "correct": false
              }
            ],
            "explanation": "Al final de línea las palabras se dividen por sílabas usando guion. No deben separarse letras que pertenecen a la misma sílaba."
          },
          {
            "id": "tema-12-rep-division-linea-2",
            "question": "¿Qué otro contenido se trabaja en «División de palabras a final de línea»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "guion",
                "text": "Guion",
                "correct": true
              },
              {
                "id": "los-planetas",
                "text": "Los planetas",
                "correct": false
              },
              {
                "id": "los-polígonos",
                "text": "Los polígonos",
                "correct": false
              },
              {
                "id": "la-fotosíntesis",
                "text": "La fotosíntesis",
                "correct": false
              }
            ],
            "explanation": "En esta sección también se trabaja guion."
          },
          {
            "id": "tema-12-rep-division-linea-3",
            "question": "¿Qué opción está relacionada con «División de palabras a final de línea»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "separación",
                "text": "Separación",
                "correct": true
              },
              {
                "id": "división-decimal",
                "text": "División decimal",
                "correct": false
              },
              {
                "id": "escala-cartográfica",
                "text": "Escala cartográfica",
                "correct": false
              },
              {
                "id": "cadena-alimentaria",
                "text": "Cadena alimentaria",
                "correct": false
              }
            ],
            "explanation": "Separación forma parte de esta sección."
          },
          {
            "id": "tema-12-rep-sujeto-predicado-1",
            "question": "En «Lucía prepara la merienda», ¿cuál es el sujeto?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "lucía",
                "text": "Lucía",
                "correct": true
              },
              {
                "id": "prepara",
                "text": "prepara",
                "correct": false
              },
              {
                "id": "la-merienda",
                "text": "la merienda",
                "correct": false
              },
              {
                "id": "prepara-la-merienda",
                "text": "prepara la merienda",
                "correct": false
              }
            ],
            "explanation": "«Lucía» es de quien se dice algo."
          },
          {
            "id": "tema-12-rep-sujeto-predicado-2",
            "question": "En «Los perros corren por el parque», ¿cuál es el predicado?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "corren-por-el-parque",
                "text": "corren por el parque",
                "correct": true
              },
              {
                "id": "los-perros",
                "text": "Los perros",
                "correct": false
              },
              {
                "id": "perros",
                "text": "perros",
                "correct": false
              },
              {
                "id": "el-parque",
                "text": "el parque",
                "correct": false
              }
            ],
            "explanation": "El predicado dice qué hacen los perros e incluye el verbo."
          },
          {
            "id": "tema-12-rep-sujeto-predicado-3",
            "question": "¿Qué palabra es imprescindible en el predicado?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "el-verbo",
                "text": "el verbo",
                "correct": true
              },
              {
                "id": "el-artículo",
                "text": "el artículo",
                "correct": false
              },
              {
                "id": "un-adjetivo",
                "text": "un adjetivo",
                "correct": false
              },
              {
                "id": "un-demostrativo",
                "text": "un demostrativo",
                "correct": false
              }
            ],
            "explanation": "El verbo funciona como núcleo del predicado."
          },
          {
            "id": "tema-12-rep-fake-news-1",
            "question": "Antes de compartir una noticia sorprendente, ¿qué conviene hacer primero?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "comprobar-la-fuente-y-co",
                "text": "Comprobar la fuente y contrastarla",
                "correct": true
              },
              {
                "id": "compartirla-rápido",
                "text": "Compartirla rápido",
                "correct": false
              },
              {
                "id": "creerla-por-el-titular",
                "text": "Creerla por el titular",
                "correct": false
              },
              {
                "id": "mirar-solo-la-foto",
                "text": "Mirar solo la foto",
                "correct": false
              }
            ],
            "explanation": "Fuente, fecha, autor y contraste ayudan a verificar información."
          },
          {
            "id": "tema-12-rep-fake-news-2",
            "question": "¿Qué señal debe hacernos desconfiar?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "no-indica-fuente-ni-auto",
                "text": "No indica fuente ni autor",
                "correct": true
              },
              {
                "id": "incluye-fecha-y-autor",
                "text": "Incluye fecha y autor",
                "correct": false
              },
              {
                "id": "cita-documentos-comproba",
                "text": "Cita documentos comprobables",
                "correct": false
              },
              {
                "id": "coincide-con-varias-fuen",
                "text": "Coincide con varias fuentes fiables",
                "correct": false
              }
            ],
            "explanation": "La falta de procedencia dificulta comprobar la información."
          },
          {
            "id": "tema-12-rep-fake-news-3",
            "question": "Un titular muy llamativo…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "no-demuestra-que-la-noti",
                "text": "no demuestra que la noticia sea cierta",
                "correct": true
              },
              {
                "id": "garantiza-que-sea-cierto",
                "text": "garantiza que sea cierto",
                "correct": false
              },
              {
                "id": "es-una-prueba-suficiente",
                "text": "es una prueba suficiente",
                "correct": false
              },
              {
                "id": "hace-innecesario-leer",
                "text": "hace innecesario leer",
                "correct": false
              }
            ],
            "explanation": "Hay que revisar el contenido y sus evidencias."
          }
        ]
      }
    ]
  }
];
