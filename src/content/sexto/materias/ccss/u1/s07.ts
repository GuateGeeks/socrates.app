/**
 * Ciencias Sociales · Unidad 1 · Semana 7 — Paz, democracia e integración.
 * Progresión: procesos de paz en el mundo y el papel de la niñez y la juventud → la apertura democrática
 * en Latinoamérica: relación entre procesos políticos y condiciones de vida, avances y desafíos →
 * los esfuerzos de integración y cooperación del continente americano, en esquema.
 */
import { lesson, S, cierre } from '../../../../dsl';

export default [
  /* ───────────────────────── 1. Procesos de paz en el mundo ───────────────────────── */
  lesson({
    id: 's07-ccss-1',
    title: 'Países que eligieron la paz',
    icon: 'HeartHandshake',
    minutes: 15,
    gancho: 'Guatemala firmó la paz en 1996, después de 36 años de conflicto. ¿Fue el único país que lo logró? ¿Quién ayuda a que dos partes enfrentadas se sienten a dialogar?',
    objetivos: [
      'Comparar procesos de paz mediante acuerdos, actores y participación',
    ],
    resumen: [
      'Un proceso de paz es un camino de diálogo y acuerdos entre partes enfrentadas para terminar un conflicto y atender sus causas.',
      'Ejemplos: Esquipulas II (Centroamérica, 1987), El Salvador (Acuerdos de Chapultepec, 1992), Sudáfrica (fin del apartheid, 1994), Guatemala (Acuerdo de Paz Firme y Duradera, 1996), Irlanda del Norte (Acuerdo de Viernes Santo, 1998) y Colombia (acuerdo con las FARC, 2016).',
      'Organismos como la ONU median, verifican el cumplimiento de los acuerdos y defienden los derechos humanos; en Guatemala, la misión MINUGUA verificó los Acuerdos de Paz (1994-2004).',
      'La paz se construye todos los días. Niñas, niños y jóvenes la construyen cuando dialogan, incluyen a otros, rechazan la violencia y participan en su comunidad; la Convención sobre los Derechos del Niño (1989) reconoce su derecho a participar.',
    ],
    media: {
      id: 's07-ccss-1-mapa', kind: 'diagram', title: 'Mapa de procesos de paz', aspect: '16:9',
      alt: 'Mapamundi con seis lugares marcados con una paloma y el año de su acuerdo de paz.',
      brief: 'Mapamundi simple en tonos claros con marcadores de paloma blanca: Centroamérica "Esquipulas II, 1987", El Salvador "1992", Sudáfrica "1994", Guatemala "1996", Irlanda del Norte "1998" y Colombia "2016". Cada marcador con una etiqueta breve: país, año y nombre corto del acuerdo. En una esquina, un recuadro con una mesa redonda y sillas vacías, símbolo del diálogo. Sin banderas ni retratos de personas reales.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['ccss'], cnb: ['ccss:7.2.1', 'ccss:7.1.2'], title: 'La paz es un proceso',
          prompt: 'Los procesos de paz combinan diálogo, acuerdos, verificación y participación social. Cada caso ocurre en un contexto histórico distinto.' },
        { icon: 'Handshake', body: 'Compararemos casos sin asumir que una misma fórmula resuelve todos los conflictos.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:7.2.1'], ambito: 'conocer',
          prompt: 'Dos compañeros llevan semanas peleados y ya ni se hablan. ¿Qué suele ayudar más a que se reconcilien?',
          explain: 'Una **persona mediadora** en quien ambos confían, que los escucha y los ayuda a llegar a **acuerdos**. Así funcionan también los procesos de paz entre países o dentro de ellos.' },
        { options: [
          { id: 'a', text: 'Que alguien de confianza los ayude a hablar y a llegar a acuerdos', icon: 'Handshake' },
          { id: 'b', text: 'Que cada uno busque más amigos para pelear', icon: 'Users', feedback: 'Así el conflicto crece. Es lo contrario a construir paz.' },
          { id: 'c', text: 'Que nunca vuelvan a verse', icon: 'EyeOff', feedback: 'Evitarse no resuelve el problema; solo lo esconde.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:7.2.1'], ambito: 'conocer', title: '¿Qué es un proceso de paz?',
          prompt: 'Un **proceso de paz** es un camino, muchas veces largo, para terminar un conflicto armado con **diálogo** en lugar de armas. Toca cada tarjeta para conocer sus pasos.' },
        { icon: 'Route', body: 'Firmar la paz **no es el final**: después hay que cumplir los acuerdos, reparar a las víctimas y atender las causas del conflicto.', reveal: [
          { icon: 'MessagesSquare', front: '1. Diálogo', back: 'Las partes aceptan sentarse a conversar, muchas veces con un **mediador** (otro país, la ONU o la Iglesia).' },
          { icon: 'Pause', front: '2. Cese al fuego', back: 'Se acuerda detener los ataques para poder negociar con confianza.' },
          { icon: 'ScrollText', front: '3. Acuerdos', back: 'Se firman compromisos sobre derechos humanos, tierras, participación política, desarme y reparación a las víctimas.' },
          { icon: 'Eye', front: '4. Verificación y cumplimiento', back: 'Un organismo imparcial **vigila** que se cumpla lo prometido. Es la etapa más larga.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:7.2.1'], ambito: 'conocer', title: 'Procesos de paz en el mundo',
          prompt: 'Guatemala no es el único país que salió de una guerra con **diálogo**. Toca cada tarjeta.',
          media: { id: 's07-ccss-1-esquipulas', kind: 'image', title: 'Esquipulas: Centroamérica busca la paz', aspect: '16:9',
            alt: 'Ilustración de una mesa redonda con cinco sillas y cinco carpetas, en un salón con vista a la basílica de Esquipulas; sobre la mesa, una paloma de papel.',
            brief: 'Ilustración simbólica, sin retratos de personas reales: una mesa redonda con cinco sillas vacías y cinco carpetas rotuladas Guatemala, El Salvador, Honduras, Nicaragua y Costa Rica. Por la ventana se ve la basílica blanca de Esquipulas, Chiquimula. Sobre la mesa, una paloma de papel y un documento que dice "Esquipulas II, 1987". Colores suaves y luminosos.' } },
        { icon: 'Handshake', body: 'Cada proceso fue distinto, pero todos necesitaron **diálogo**, **acuerdos** y **respeto a los derechos humanos**.', reveal: [
          { icon: 'MapPin', front: 'Centroamérica, 1987', back: 'En **Esquipulas**, Guatemala, los presidentes de Guatemala, El Salvador, Honduras, Nicaragua y Costa Rica firmaron **Esquipulas II**, un plan para buscar la paz en la región.' },
          { icon: 'MapPin', front: 'El Salvador, 1992', back: 'El gobierno y la guerrilla firmaron los **Acuerdos de Chapultepec**, en México, que terminaron su guerra civil.' },
          { icon: 'Scale', front: 'Sudáfrica, 1994', back: 'Terminó el **apartheid**, un sistema que separaba a las personas por su color de piel. Hubo elecciones en las que votaron todas las personas y **Nelson Mandela** fue electo presidente.' },
          { icon: 'Flower2', front: 'Guatemala, 1996', back: 'El 29 de diciembre se firmó el **Acuerdo de Paz Firme y Duradera** entre el gobierno y la guerrilla (URNG). Antes se firmaron otros acuerdos, como el de **Identidad y Derechos de los Pueblos Indígenas** (1995).' },
          { icon: 'Flag', front: 'Irlanda del Norte, 1998', back: 'El **Acuerdo de Viernes Santo** puso fin a décadas de violencia.' },
          { icon: 'Sprout', front: 'Colombia, 2016', back: 'El gobierno y la guerrilla de las **FARC** firmaron un acuerdo de paz después de más de 50 años de conflicto.' },
        ] },
      ),
      S.match(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:7.2.1'], prompt: 'Une cada país o región con su proceso de paz.',
          hint: 'Recuerda las tarjetas: Chapultepec (1992), apartheid (1994), Esquipulas (1987), FARC (2016).',
          explain: 'Conocer otros procesos muestra que la paz es posible aun después de conflictos muy largos.' },
        { leftTitle: 'País o región', rightTitle: 'Proceso', pairs: [
          { id: 'gt', left: 'Guatemala', leftIcon: 'MapPin', right: 'Acuerdo de Paz Firme y Duradera (1996)' },
          { id: 'sv', left: 'El Salvador', leftIcon: 'MapPin', right: 'Acuerdos de Chapultepec (1992)' },
          { id: 'za', left: 'Sudáfrica', leftIcon: 'MapPin', right: 'Fin del apartheid (1994)' },
          { id: 'co', left: 'Colombia', leftIcon: 'MapPin', right: 'Acuerdo con las FARC (2016)' },
          { id: 'ca', left: 'Centroamérica', leftIcon: 'MapPin', right: 'Esquipulas II (1987)' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:7.2.1'], ambito: 'conocer', title: 'Organismos internacionales al servicio de la paz',
          prompt: 'Después de la Segunda Guerra Mundial se crearon organismos para **prevenir** y **resolver** conflictos. Toca cada tarjeta.' },
        { icon: 'Globe', body: 'También los países pueden resolver sus diferencias en tribunales: Guatemala y Belice llevaron su **diferendo territorial** a la **Corte Internacional de Justicia**, en lugar de usar la fuerza.', reveal: [
          { icon: 'Globe', front: 'ONU', back: 'La Organización de las Naciones Unidas **media** entre las partes, envía **misiones de paz** ("cascos azules") y **verifica** acuerdos. En Guatemala, la misión **MINUGUA** verificó los Acuerdos de Paz de 1994 a 2004.' },
          { icon: 'Gavel', front: 'Corte Internacional de Justicia', back: 'Tribunal de la ONU, con sede en La Haya (Países Bajos), que resuelve **diferencias entre países** según el derecho internacional.' },
          { icon: 'Users', front: 'OEA', back: 'La Organización de los Estados Americanos promueve la democracia, los derechos humanos y el diálogo en el continente.' },
          { icon: 'Baby', front: 'UNICEF', back: 'Organismo de la ONU que defiende los **derechos de la niñez**, también en lugares con conflictos.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:7.1.2'], ambito: 'convivir', title: 'La niñez y la juventud construyen paz',
          prompt: 'La **cultura de paz** es una forma de vivir que resuelve los conflictos con diálogo, respeto y cooperación. No es cosa solo de presidentes: se aprende y se practica desde pequeños. Toca cada tarjeta.' },
        { icon: 'Smile', body: 'La **Convención sobre los Derechos del Niño** (ONU, 1989) reconoce que niñas y niños tienen derecho a **expresar su opinión** y a **participar** en lo que les afecta.', reveal: [
          { icon: 'Sprout', front: '¿Por qué la niñez es clave?', back: 'Lo que hoy aprenden niñas y niños sobre cómo tratar a los demás es la forma en que funcionará la sociedad **mañana**.' },
          { icon: 'MessagesSquare', front: 'Mediación escolar', back: 'En muchas escuelas, estudiantes capacitados ayudan a compañeros a resolver conflictos hablando.' },
          { icon: 'Users', front: 'Participación', back: 'Gobiernos escolares, grupos juveniles y voluntariados permiten que las nuevas generaciones propongan soluciones.' },
          { icon: 'Award', front: 'Jóvenes que inspiran', back: '**Malala Yousafzai**, de Pakistán, defendió el derecho de las niñas a estudiar y recibió el Premio Nobel de la Paz en 2014, con 17 años.' },
        ] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:7.1.2'], ambito: 'convivir',
          prompt: '¿Esta acción de un joven **construye paz** o **alimenta la violencia**?',
          explain: 'La paz se construye con acciones pequeñas y diarias: escuchar, incluir, dialogar, pedir ayuda y no responder con violencia.' },
        { buckets: [
          { id: 'paz', label: 'Construye paz', icon: 'HeartHandshake', color: 'var(--c-ok)' },
          { id: 'vio', label: 'Alimenta la violencia', icon: 'Megaphone', color: 'var(--c-bad)' },
        ], items: [
          { id: 'p1', text: 'Ayudar a dos compañeros a hablar después de una pelea', bucket: 'paz' },
          { id: 'p2', text: 'Reenviar un video donde se humilla a alguien', bucket: 'vio' },
          { id: 'p3', text: 'Invitar a jugar al compañero nuevo que está solo', bucket: 'paz' },
          { id: 'p4', text: 'Responder un empujón con otro más fuerte', bucket: 'vio' },
          { id: 'p5', text: 'Proponer en el gobierno escolar un rincón de diálogo', bucket: 'paz' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:7.2.1'], ambito: 'conocer',
          prompt: 'Después de firmar un acuerdo de paz, ¿por qué es importante que un organismo imparcial como la ONU **verifique** su cumplimiento?',
          explain: 'La verificación da **confianza** a ambas partes y a la población: si alguien no cumple, se sabe y se puede corregir. Sin ella, los acuerdos pueden quedarse en papel.' },
        { options: [
          { id: 'a', text: 'Para que las partes confíen y los compromisos no se queden solo en papel' },
          { id: 'b', text: 'Para que la ONU gobierne el país', feedback: 'La ONU no gobierna: acompaña y verifica. Las decisiones son del país.' },
          { id: 'c', text: 'No es importante: firmar ya lo resuelve todo', feedback: 'Firmar es solo el inicio; cumplir los acuerdos toma muchos años.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:7.2.1'], prompt: '¿En qué país terminó en 1994 un sistema que separaba a las personas por su color de piel?' },
        { options: [
          { id: 'a', text: 'Sudáfrica' },
          { id: 'b', text: 'Colombia' },
          { id: 'c', text: 'Irlanda del Norte' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:7.2.1', 'ccss:7.1.2'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Esquipulas II fue firmado en Guatemala por presidentes centroamericanos en 1987.', answer: true },
          { text: 'La cultura de paz solo depende de los presidentes; los niños no pueden aportar.', answer: false, why: 'Niñas, niños y jóvenes construyen paz cada día con diálogo, respeto e inclusión.' },
          { text: 'MINUGUA fue una misión de la ONU que verificó los Acuerdos de Paz de Guatemala.', answer: true },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 2. Democracia en Latinoamérica ───────────────────────── */
  lesson({
    id: 's07-ccss-2',
    title: 'Latinoamérica y la apertura democrática',
    icon: 'Vote',
    minutes: 15,
    gancho: 'Tus abuelos quizá vivieron años en que no se podía elegir libremente a las autoridades. Hoy en Guatemala hay elecciones cada cuatro años. ¿Qué cambió? ¿Ya está todo resuelto?',
    objetivos: [
      'Relacionar la apertura democrática latinoamericana con avances y desafíos sociales',
    ],
    resumen: [
      'En la democracia el poder viene del pueblo: se eligen autoridades en elecciones libres, se respetan los derechos humanos y hay separación de poderes.',
      'Durante buena parte del siglo XX, muchos países latinoamericanos tuvieron dictaduras o gobiernos militares. En los años ochenta vino la apertura democrática: Argentina (1983), Brasil y Uruguay (1985), Guatemala (Constitución de 1985) y Chile (1990).',
      'Los procesos políticos afectan la vida diaria: la guerra y la corrupción empobrecen; la paz, la democracia y la buena administración permiten invertir en salud, educación y empleo.',
      'Avances: elecciones periódicas, constituciones con derechos, instituciones como el Tribunal Supremo Electoral y el Procurador de los Derechos Humanos. Desafíos: pobreza, desigualdad, corrupción, violencia y poca participación ciudadana.',
    ],
    media: {
      id: 's07-ccss-2-urna', kind: 'image', title: 'Un día de elecciones', aspect: '16:9',
      alt: 'Escuela convertida en centro de votación: personas diversas hacen fila, una señora mayor deposita su papeleta en la urna y un joven muestra su dedo con tinta.',
      brief: 'Ilustración de un día de elecciones en una escuela de Guatemala. Personas diversas (mujeres y hombres mayas, garífunas, xinkas y ladinos, jóvenes y mayores, una persona en silla de ruedas) hacen fila en orden; en una mesa, integrantes de la junta receptora de votos con chalecos; una señora mayor deposita su papeleta en una urna transparente; un joven sonríe mostrando el dedo con tinta. Sin logos de partidos ni nombres de candidatos. Colores luminosos.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['ccss'], cnb: ['ccss:6.7.4', 'ccss:6.7.1'], title: 'Democracia: proceso y condiciones',
          prompt: 'La apertura democrática describe transiciones desde regímenes autoritarios hacia elecciones e instituciones civiles; no elimina automáticamente desigualdad, violencia o corrupción.' },
        { icon: 'Landmark', body: 'Para analizarla distinguiremos cambios políticos de sus efectos sociales posibles.' },
      ),
      S.sort(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:6.7.4'], ambito: 'conocer',
          prompt: 'Según lo que ya sabes, ¿cada situación es propia de una **democracia** o de una **dictadura**?',
          explain: 'En una democracia el poder viene del pueblo y se respetan los derechos. En una dictadura una persona o un grupo concentra el poder sin elecciones libres.' },
        { buckets: [
          { id: 'dem', label: 'Democracia', icon: 'Vote', color: 'var(--c-ok)' },
          { id: 'dic', label: 'Dictadura', icon: 'Lock', color: 'var(--c-bad)' },
        ], items: [
          { id: 'd1', text: 'Se elige a las autoridades en elecciones libres', bucket: 'dem' },
          { id: 'd2', text: 'Se encarcela a quien critica al gobierno', bucket: 'dic' },
          { id: 'd3', text: 'Los periódicos pueden publicar opiniones distintas', bucket: 'dem' },
          { id: 'd4', text: 'Un gobernante decide quedarse en el poder sin elecciones', bucket: 'dic' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:6.7.4'], ambito: 'conocer', title: 'De gobiernos militares a gobiernos electos',
          prompt: 'Durante buena parte del siglo XX, en plena Guerra Fría, muchos países de Latinoamérica tuvieron **dictaduras** o gobiernos **militares**. En los años ochenta empezó a cambiar. Toca cada tarjeta.' },
        { icon: 'Vote', body: 'A este paso de gobiernos autoritarios a gobiernos electos por el pueblo se le llama **apertura democrática** o **transición a la democracia**.', reveal: [
          { icon: 'Lock', front: 'Antes', back: 'Gobiernos que llegaban por **golpes de Estado** o elecciones con fraude; se limitaba la libertad de expresión y de organización.' },
          { icon: 'CalendarDays', front: 'Años ochenta', back: 'Volvieron los gobiernos civiles electos: **Argentina** (1983), **Brasil** y **Uruguay** (1985). **Chile** en 1990.' },
          { icon: 'ScrollText', front: 'Guatemala', back: 'En **1985** se aprobó la **Constitución Política** vigente y hubo elecciones; en 1986 asumió un presidente civil. Se crearon o fortalecieron el **Tribunal Supremo Electoral**, la **Corte de Constitucionalidad** y el **Procurador de los Derechos Humanos**.' },
        ] },
      ),
      S.match(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:6.7.4'], prompt: 'La Constitución de 1985 creó o fortaleció instituciones que cuidan la democracia en Guatemala. Une cada institución con su función.',
          hint: 'Piensa en el nombre: "Electoral" tiene que ver con elecciones; "Derechos Humanos", con defender derechos; "Constitucionalidad", con la Constitución.',
          explain: 'Estas instituciones son **avances** de la apertura democrática: ponen límites al poder y protegen a la ciudadanía.' },
        { leftTitle: 'Institución', rightTitle: 'Función', pairs: [
          { id: 'tse', left: 'Tribunal Supremo Electoral', leftIcon: 'Vote', right: 'Organiza las elecciones y cuenta los votos' },
          { id: 'pdh', left: 'Procurador de los Derechos Humanos', leftIcon: 'ShieldCheck', right: 'Vigila que se respeten los derechos humanos' },
          { id: 'cc', left: 'Corte de Constitucionalidad', leftIcon: 'Gavel', right: 'Defiende que las leyes respeten la Constitución' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:6.7.1'], ambito: 'conocer', title: 'Política y vida diaria van juntas',
          prompt: 'Lo que pasa en el gobierno parece lejano, pero cambia la vida de las familias. Toca cada tarjeta.',
          media: { id: 's07-ccss-2-cadena', kind: 'diagram', title: 'De la decisión política a mi mesa', aspect: '16:9',
            alt: 'Dos cadenas de flechas: una empieza en "corrupción" y termina en "escuela sin techo"; otra empieza en "presupuesto bien usado" y termina en "centro de salud con medicinas".',
            brief: 'Diagrama de dos filas de cajas unidas por flechas. Fila roja suave: "Corrupción: se roba dinero público" → "Menos dinero para obras" → "Escuela sin techo, camino sin arreglar" → "Familias con menos oportunidades". Fila verde suave: "Gobierno transparente y ciudadanía que vigila" → "Presupuesto bien usado" → "Centro de salud con medicinas, escuela con maestros" → "Mejor calidad de vida". Íconos simples en cada caja. Texto grande.' } },
        { icon: 'Link', body: 'Los **procesos políticos** (quién gobierna, cómo se decide, cómo se usa el dinero público) influyen en las **condiciones económicas y sociales**: empleo, salud, educación, seguridad.', reveal: [
          { icon: 'CloudRain', front: 'Conflicto armado', back: 'Destruye cosechas, caminos y escuelas; las familias huyen; se pierde inversión y aumenta la pobreza.' },
          { icon: 'Coins', front: 'Corrupción', back: 'El dinero de los impuestos que debía ir a hospitales o carreteras termina en manos de pocos.' },
          { icon: 'Sprout', front: 'Paz y democracia', back: 'Permiten invertir en **salud, educación y empleo**, y que la gente reclame sus derechos sin miedo.' },
          { icon: 'Eye', front: 'Participación ciudadana', back: 'Cuando la población vota informada, se organiza (por ejemplo, en el **COCODE**) y vigila a sus autoridades, los recursos se usan mejor.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:6.7.4'], prompt: 'Clasifica cada situación como **avance** o **desafío** de la democracia en Latinoamérica.',
          hint: 'Un avance ya se logró; un desafío es un problema que todavía hay que resolver.',
          explain: 'La democracia no termina con votar: se construye cada día con instituciones fuertes, transparencia y participación.' },
        { buckets: [
          { id: 'av', label: 'Avance', icon: 'TrendingUp', color: 'var(--c-ok)' },
          { id: 'de', label: 'Desafío', icon: 'Target', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'x1', text: 'Elecciones periódicas para elegir autoridades', icon: 'Vote', bucket: 'av' },
          { id: 'x2', text: 'Constituciones que reconocen derechos humanos', icon: 'ScrollText', bucket: 'av' },
          { id: 'x3', text: 'Corrupción en el manejo de fondos públicos', icon: 'Coins', bucket: 'de' },
          { id: 'x4', text: 'Gran desigualdad entre ricos y pobres', icon: 'Scale', bucket: 'de' },
          { id: 'x5', text: 'Instituciones que defienden los derechos humanos', icon: 'ShieldCheck', bucket: 'av', feedback: 'En Guatemala, la Constitución de 1985 creó el Procurador de los Derechos Humanos.' },
          { id: 'x6', text: 'Poca participación de jóvenes en las decisiones', icon: 'Users', bucket: 'de' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:6.7.1'], ambito: 'conocer',
          prompt: 'Cuando un país vive muchos años de conflicto armado, ¿qué suele ocurrir con las condiciones económicas y sociales de sus habitantes?',
          explain: 'La guerra destruye cosechas, caminos y escuelas, y hace que las personas huyan. En cambio, la paz y la democracia permiten invertir en salud, educación y empleo.' },
        { options: [
          { id: 'a', text: 'Se pierden cosechas, empleos y escuelas, y aumenta la pobreza', icon: 'Wheat' },
          { id: 'b', text: 'La economía mejora porque se compran más armas', icon: 'Coins', feedback: 'El dinero gastado en guerra deja de invertirse en salud, educación y caminos.' },
          { id: 'c', text: 'No cambia nada en la vida de las familias', icon: 'Minus', feedback: 'Los conflictos afectan directamente la vida de las familias.' },
        ], correct: ['a'] },
      ),
      S.reading(
        { fase: 'aplicar', areas: ['ccss', 'l1'], cnb: ['ccss:6.7.1', 'ccss:6.7.4'], ambito: 'conocer', prompt: 'Lee este caso hipotético y responde.' },
        { genre: 'Caso', heading: 'El puente de San Miguel', passage:
          'Supongamos que en el municipio de San Miguel, el río crece cada época de lluvia y los niños de tres aldeas no pueden llegar a la escuela. La municipalidad anunció la construcción de un puente, pero pasó un año y no se construyó nada.\n\nLos vecinos se organizaron en su **COCODE**, pidieron información pública sobre el presupuesto del puente y descubrieron que el dinero se había pagado a una empresa que nunca trabajó. Presentaron una denuncia ante las autoridades y hablaron en la radio comunitaria.\n\nMeses después, el caso se investigó y el puente se construyó. Hoy los niños cruzan seguros. Los vecinos dicen: "La democracia no es solo votar: también es **vigilar** y **participar**".',
          questions: [
            { q: '¿Qué **desafío** de la democracia aparece en el caso?', options: [
              { id: 'a', text: 'La corrupción: se pagó una obra que no se hizo' },
              { id: 'b', text: 'Las elecciones periódicas' },
              { id: 'c', text: 'La libertad de expresión' },
            ], correct: 'a' },
            { q: '¿Cómo afectaba este problema político a la vida de las familias?', options: [
              { id: 'a', text: 'Los niños no podían llegar a la escuela en la época de lluvia' },
              { id: 'b', text: 'No les afectaba en nada' },
              { id: 'c', text: 'Les daba más dinero' },
            ], correct: 'a' },
            { q: '¿Qué herramientas democráticas usaron los vecinos?', options: [
              { id: 'a', text: 'Organizarse, pedir información pública, denunciar y expresarse en la radio' },
              { id: 'b', text: 'Destruir la municipalidad' },
              { id: 'c', text: 'Esperar sin hacer nada' },
            ], correct: 'a', why: 'Participar y vigilar de forma pacífica y legal fortalece la democracia.' },
          ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.7.4'], prompt: '¿Qué fue la **apertura democrática** en Latinoamérica?' },
        { options: [
          { id: 'a', text: 'El paso de gobiernos militares o dictaduras a gobiernos electos por el pueblo, sobre todo en los años ochenta' },
          { id: 'b', text: 'La apertura de nuevas carreteras entre países' },
          { id: 'c', text: 'La llegada de los europeos a América' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.7.1', 'ccss:6.7.4'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'La actual Constitución de Guatemala se aprobó en 1985.', answer: true },
          { text: 'La corrupción es un avance de la democracia.', answer: false, why: 'Es uno de sus principales desafíos: quita recursos a la población.' },
          { text: 'Las decisiones políticas pueden mejorar o empeorar la salud y la educación de la población.', answer: true },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 3. Integración y cooperación en América ───────────────────────── */
  lesson({
    id: 's07-ccss-3',
    title: 'América se une: bloques de integración',
    icon: 'Link',
    minutes: 14,
    gancho: 'Con tu DPI, una persona adulta guatemalteca puede viajar por tierra a El Salvador, Honduras o Nicaragua sin pasaporte. ¿Por qué? ¿Qué ganan los países al unirse?',
    objetivos: [
      'Ubicar a Guatemala en redes americanas de integración y cooperación',
    ],
    resumen: [
      'La integración regional es la unión de países vecinos para cooperar en comercio, paz, salud, ambiente, migración y más: juntos son más fuertes.',
      'Centroamérica: el Mercado Común Centroamericano (1960) y el SICA (Sistema de la Integración Centroamericana, 1991), con Guatemala, El Salvador, Honduras, Nicaragua, Costa Rica, Panamá, Belice y República Dominicana. El Parlamento Centroamericano tiene su sede en Guatemala.',
      'Otros bloques: Mercosur (fundado por Argentina, Brasil, Paraguay y Uruguay), la Comunidad Andina (Bolivia, Colombia, Ecuador y Perú) y CARICOM (países del Caribe). La OEA (1948) reúne a casi todos los países del continente.',
      'Beneficios: comercio con menos trabas, libre movilidad (como el convenio CA-4), respuesta conjunta ante desastres y enfermedades, y diálogo para la paz. Desafío: que los beneficios lleguen a toda la población.',
    ],
    media: {
      id: 's07-ccss-3-bloques', kind: 'diagram', title: 'Bloques de integración de América', aspect: '3:4',
      alt: 'Mapa del continente americano con grupos de países coloreados: SICA en Centroamérica, CARICOM en el Caribe, Comunidad Andina y Mercosur en América del Sur; un contorno punteado alrededor de todo el continente para la OEA.',
      brief: 'Mapa vertical del continente americano. Colores suaves por bloque: SICA (verde) en Centroamérica y República Dominicana; CARICOM (turquesa) en las islas del Caribe, Guyana y Surinam; Comunidad Andina (naranja) en Bolivia, Colombia, Ecuador y Perú; Mercosur (azul) en Argentina, Brasil, Paraguay y Uruguay. Un contorno punteado alrededor de todo el continente con la etiqueta "OEA: casi todos los países de América". Guatemala señalada con una estrella y "sede del Parlamento Centroamericano". Leyenda clara. Sin banderas.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['ccss'], cnb: ['ccss:6.6.6'], title: 'Cooperar entre países',
          prompt: 'Los bloques regionales coordinan asuntos como comercio, movilidad, salud, ambiente y respuesta ante riesgos, con alcances distintos.' },
        { icon: 'Map', body: 'Guatemala participa en el **SICA**, una red centroamericana de integración.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:6.6.6'], ambito: 'conocer',
          prompt: 'Si un solo grado quiere sembrar 500 árboles, parece imposible. ¿Y si se unen todos los grados, las familias y la municipalidad? ¿Qué idea explica esto?',
          hint: 'Piensa en lo que cambia cuando varias partes comparten recursos y responsabilidades.',
          explain: '**Unidos se logra más.** Los países piensan igual: al unirse en **bloques** comercian más, enfrentan juntos los desastres y resuelven problemas comunes.' },
        { options: [
          { id: 'a', text: 'Unidos se logran metas que solos serían muy difíciles', icon: 'Users' },
          { id: 'b', text: 'Es mejor que cada uno trabaje solo', icon: 'User', feedback: 'Para metas grandes, cooperar suele dar mejores resultados.' },
          { id: 'c', text: 'Mientras más grupos, más peleas', icon: 'Zap', feedback: 'La cooperación bien organizada evita peleas y reparte el trabajo.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:6.6.6'], ambito: 'conocer', title: '¿Qué es la integración regional?',
          prompt: 'La **integración regional** es la unión de países vecinos para **cooperar** y resolver juntos problemas comunes. Toca cada tarjeta para ver en qué cooperan.' },
        { icon: 'Link', body: 'Integrarse no significa dejar de ser un país: cada uno conserva su gobierno, pero **acuerda reglas comunes** con sus vecinos.', reveal: [
          { icon: 'Truck', front: 'Comercio', back: 'Bajar impuestos y trámites para vender y comprar entre países vecinos.' },
          { icon: 'Route', front: 'Movilidad', back: 'Facilitar que las personas viajen. Por el convenio **CA-4**, guatemaltecos, salvadoreños, hondureños y nicaragüenses pueden viajar entre esos países con su documento de identidad.' },
          { icon: 'CloudRain', front: 'Desastres y salud', back: 'Ayudarse ante huracanes, terremotos y epidemias, y comprar medicinas en conjunto.' },
          { icon: 'Handshake', front: 'Paz y democracia', back: 'Dialogar para resolver conflictos y defender juntos la democracia y los derechos humanos.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:6.6.6'], ambito: 'conocer', title: 'Los bloques del continente americano',
          prompt: 'En América hay varios bloques. Toca cada tarjeta y fíjate en qué países reúne cada uno.' },
        { icon: 'Map', body: 'Un país puede pertenecer a **varios** bloques a la vez. Guatemala está en el **SICA** y en la **OEA**.', reveal: [
          { icon: 'MapPin', front: 'SICA (1991)', back: '**Sistema de la Integración Centroamericana**: Guatemala, El Salvador, Honduras, Nicaragua, Costa Rica, Panamá, Belice y República Dominicana. Continúa el **Mercado Común Centroamericano** (1960). El **Parlamento Centroamericano** tiene su sede en la Ciudad de Guatemala.' },
          { icon: 'Waves', front: 'CARICOM (1973)', back: '**Comunidad del Caribe**: une a países del Caribe como Jamaica, Trinidad y Tobago y Barbados, además de Belice, Guyana y Surinam.' },
          { icon: 'Mountain', front: 'Comunidad Andina', back: 'Países de la cordillera de los Andes: **Bolivia, Colombia, Ecuador y Perú**.' },
          { icon: 'Handshake', front: 'Mercosur (1991)', back: '**Mercado Común del Sur**: fundado por **Argentina, Brasil, Paraguay y Uruguay**; después se sumó Bolivia.' },
          { icon: 'Globe', front: 'OEA (1948)', back: '**Organización de los Estados Americanos**: reúne a **casi todos** los países del continente, desde Canadá hasta Argentina, para promover la democracia, los derechos humanos y la cooperación.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:6.6.6'], ambito: 'hacer', title: 'Ejemplo: cómo esquematizar los bloques',
          prompt: 'Un **esquema** ayuda a no confundir los bloques. Mira cómo se arma paso a paso.' },
        { icon: 'Network', problem: '¿Cómo organizo en un esquema los bloques de integración de América?',
          steps: [
            { text: 'En el centro escribo el tema: **"Integración en América"**.' },
            { text: 'Saco una rama por **región**: Centroamérica, Caribe, Andes, Sur del continente y, arriba de todos, "Todo el continente".', why: 'Agrupar por región ayuda a recordar: cada bloque reúne a vecinos.' },
            { text: 'En cada rama pongo el bloque: Centroamérica → **SICA**; Caribe → **CARICOM**; Andes → **Comunidad Andina**; Sur → **Mercosur**; Todo el continente → **OEA**.' },
            { text: 'Debajo de cada bloque anoto 2 o 3 países y un propósito (comercio, paz, desarrollo).' },
          ],
          answer: 'Queda un esquema en forma de árbol: tema al centro, regiones en las ramas y, en cada una, su bloque con países y propósito.',
          tip: 'Truco: el nombre muchas veces dice la región: Centro-americana, Caribe, Andina, del Sur.' },
      ),
      S.match(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:6.6.6'], ambito: 'hacer', prompt: 'Completa el **esquema**: une cada bloque con los países o la región que agrupa.',
          explain: 'SICA en Centroamérica, CARICOM en el Caribe, la Comunidad Andina en los Andes, Mercosur en el sur y la OEA en todo el continente.' },
        { leftTitle: 'Bloque', rightTitle: 'Países o región', pairs: [
          { id: 'b1', left: 'SICA', leftIcon: 'MapPin', right: 'Guatemala, Honduras, Costa Rica y sus vecinos' },
          { id: 'b2', left: 'Mercosur', leftIcon: 'Handshake', right: 'Fundado por Argentina, Brasil, Paraguay y Uruguay' },
          { id: 'b3', left: 'Comunidad Andina', leftIcon: 'Mountain', right: 'Bolivia, Colombia, Ecuador y Perú' },
          { id: 'b4', left: 'CARICOM', leftIcon: 'Waves', right: 'Países del Caribe' },
          { id: 'b5', left: 'OEA', leftIcon: 'Globe', right: 'Casi todo el continente americano' },
        ] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:6.6.6'], ambito: 'conocer',
          prompt: '¿Esta situación es un **beneficio** de la integración o un **desafío** que aún falta resolver?',
          explain: 'La integración trae beneficios, pero un gran reto es que lleguen a toda la población y no solo a unas pocas empresas o ciudades.' },
        { buckets: [
          { id: 'be', label: 'Beneficio', icon: 'ThumbsUp', color: 'var(--c-ok)' },
          { id: 'de', label: 'Desafío', icon: 'Target', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'y1', text: 'Un agricultor vende sus frutas en El Salvador con menos trámites', bucket: 'be' },
          { id: 'y2', text: 'Tras un huracán, los países vecinos envían ayuda coordinada', bucket: 'be' },
          { id: 'y3', text: 'Filas de camiones que esperan días en la frontera', bucket: 'de' },
          { id: 'y4', text: 'Familias rurales que no saben cómo aprovechar los acuerdos', bucket: 'de' },
          { id: 'y5', text: 'Viajar a Honduras con tu documento de identidad', bucket: 'be' },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.6.6'], prompt: '¿Qué organismo integra a los países de **Centroamérica**, incluida Guatemala?' },
        { options: [
          { id: 'a', text: 'El SICA' },
          { id: 'b', text: 'El Mercosur' },
          { id: 'c', text: 'La Comunidad Andina' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.6.6'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'La OEA reúne a casi todos los países del continente americano.', answer: true },
          { text: 'Brasil y Argentina pertenecen al SICA.', answer: false, why: 'Pertenecen al Mercosur. El SICA reúne a los países centroamericanos y República Dominicana.' },
          { text: 'El Parlamento Centroamericano tiene su sede en Guatemala.', answer: true },
        ] },
      ),
      cierre({ areas: ['ccss'], cnb: [] }, ['Conozco procesos de paz de distintos países', 'Distingo avances y desafíos de la democracia', 'Esquematizo los bloques de integración de América'],
        ['Preguntaré en casa si alguien ha votado y cómo fue su experiencia', 'Ayudaré a resolver un conflicto con diálogo esta semana']),
    ],
  }),
];
