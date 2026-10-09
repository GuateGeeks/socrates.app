/** Formative companions: independent from the published course and quiz scores.
 * Content references (checked 2026-10-03):
 * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security.html
 * https://docs.aws.amazon.com/whitepapers/latest/aws-overview/types-of-cloud-computing.html
 * https://docs.aws.amazon.com/pricing-calculator/latest/userguide/getting-started.html
 * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/
 */
export interface Practice {
  title: string;
  scenario: string;
  targets: { id: string; label: string; hint: string; icon: string; group?: string }[];
  items: { id: string; text: string; target: string; explanation: string }[];
  flow?: { id: string; text: string }[];
  flowExplanation?: string;
}

export interface PracticeValue {
  assignments?: Record<string, string>;
  order?: string[];
}

export const PRACTICES: Record<string, Practice> = {
  'cloud-value': {
    title: 'Una tienda que crece contigo',
    scenario: 'Una tienda prepara una campaña de dos días. Relaciona las primeras decisiones con los beneficios de la nube y las propuestas de infraestructura con su modelo de despliegue.',
    targets: [
      { id: 'elasticity', label: 'Elasticidad', hint: 'Ajustar capacidad a la demanda', icon: 'MoveHorizontal', group: 'benefits' },
      { id: 'agility', label: 'Agilidad', hint: 'Experimentar con rapidez', icon: 'Zap', group: 'benefits' },
      { id: 'usage', label: 'Pago por uso', hint: 'Gasto según consumo', icon: 'Wallet', group: 'benefits' },
      { id: 'public', label: 'Nube pública', hint: 'Servicios de un proveedor', icon: 'Cloud', group: 'models' },
      { id: 'private', label: 'Nube privada', hint: 'Uso exclusivo de una organización', icon: 'Building2', group: 'models' },
      { id: 'hybrid', label: 'Nube híbrida', hint: 'Infraestructuras conectadas', icon: 'Network', group: 'models' },
    ],
    items: [
      { id: 'launch', text: 'Crear un entorno de prueba en minutos.', target: 'agility', explanation: 'Aprovisionar recursos rápidamente permite probar una idea sin esperar a comprar hardware.' },
      { id: 'peak', text: 'Aumentar capacidad al subir las visitas y reducirla al terminar la campaña.', target: 'elasticity', explanation: 'La elasticidad ajusta la capacidad cuando cambia la demanda, tanto al subir como al bajar.' },
      { id: 'bill', text: 'Pagar por las horas de cómputo consumidas en lugar de comprar servidores.', target: 'usage', explanation: 'El pago por uso vincula el gasto al consumo; sigue siendo necesario vigilar los recursos activos.' },
      { id: 'prototype', text: 'Probar dos prototipos esta misma tarde.', target: 'agility', explanation: 'La agilidad facilita experimentar y lanzar soluciones con menos tiempo de preparación.' },
      { id: 'provider', text: 'Propuesta: desplegar la tienda en los servicios de nube pública de AWS.', target: 'public', explanation: 'La nube pública ofrece recursos de un proveedor. Esto no significa que los datos de tu aplicación sean públicos: debes configurar sus accesos.' },
      { id: 'exclusive', text: 'Propuesta: una nube con autoservicio y recursos dedicados exclusivamente a la organización.', target: 'private', explanation: 'Una nube privada se dedica a una sola organización. El acceso exclusivo y las capacidades de nube la distinguen de un simple servidor local.' },
      { id: 'connected', text: 'Propuesta: integrar los sistemas del centro de datos propio con la tienda desplegada en AWS.', target: 'hybrid', explanation: 'Un despliegue híbrido conecta infraestructura propia con servicios de nube. Esa conexión requiere diseño y configuración.' },
    ],
  },
  'shared-responsibility': {
    title: 'Reparte las responsabilidades',
    scenario: 'Tu equipo ejecuta una aplicación en Amazon EC2. Decide quién se encarga de cada tarea en este servicio.',
    targets: [
      { id: 'aws', label: 'AWS', hint: 'Seguridad de la infraestructura', icon: 'Cloud' },
      { id: 'customer', label: 'Tu equipo', hint: 'Lo que configura y usa', icon: 'Users' },
    ],
    items: [
      { id: 'os', text: 'Instalar parches del sistema operativo de la instancia EC2.', target: 'customer', explanation: 'En EC2 el cliente administra el sistema operativo invitado y sus parches. El reparto cambia con servicios administrados.' },
      { id: 'building', text: 'Controlar el acceso físico al centro de datos.', target: 'aws', explanation: 'AWS protege los centros de datos y la infraestructura física que ejecuta sus servicios.' },
      { id: 'permissions', text: 'Conceder al equipo solo los permisos IAM que necesita.', target: 'customer', explanation: 'El cliente configura las identidades y los permisos de acceso aplicando mínimo privilegio.' },
      { id: 'hardware', text: 'Mantener el hardware físico que ejecuta las instancias.', target: 'aws', explanation: 'AWS mantiene la infraestructura física; el cliente configura su aplicación y los recursos que utiliza.' },
    ],
  },
  'global-infrastructure': {
    title: 'Construye el recorrido de una imagen',
    scenario: 'Una aplicación recibe una solicitud, procesa una imagen con código activado por eventos y guarda el archivo. Relaciona primero cada necesidad con su servicio.',
    targets: [
      { id: 's3', label: 'Amazon S3', hint: 'Almacenamiento de objetos', icon: 'Database' },
      { id: 'ec2', label: 'Amazon EC2', hint: 'Máquinas virtuales configurables', icon: 'Server' },
      { id: 'lambda', label: 'AWS Lambda', hint: 'Código en respuesta a eventos', icon: 'Zap' },
    ],
    items: [
      { id: 'event', text: 'Ejecutar el código de procesamiento sin administrar servidores.', target: 'lambda', explanation: 'Lambda ejecuta código en respuesta a eventos; tu equipo sigue siendo responsable del código y sus permisos.' },
      { id: 'object', text: 'Conservar las imágenes como archivos para recuperarlas después.', target: 's3', explanation: 'S3 almacena objetos, como imágenes, documentos y copias de seguridad.' },
      { id: 'machine', text: 'Ejecutar una aplicación que necesita controlar su sistema operativo.', target: 'ec2', explanation: 'EC2 proporciona instancias configurables cuyo sistema operativo invitado administra el cliente.' },
    ],
    flow: [
      { id: 'request', text: 'La aplicación recibe la solicitud de procesar una imagen.' },
      { id: 'process', text: 'Se invoca el código en Lambda para procesar la imagen.' },
      { id: 'store', text: 'El código guarda el archivo resultante en S3.' },
    ],
    flowExplanation: 'En este escenario la solicitud inicia el trabajo, Lambda procesa la imagen y el código guarda el resultado en S3. Tu equipo configura la invocación y los permisos; conectar servicios requiere ese diseño.',
  },
  'cost-tools': {
    title: 'Prepara el presupuesto del proyecto',
    scenario: 'Tu equipo quiere planificar el gasto, recibir alertas y entender la factura. Coloca cada tarea en la herramienta adecuada.',
    targets: [
      { id: 'budgets', label: 'AWS Budgets', hint: 'Presupuestos y alertas', icon: 'Bell' },
      { id: 'calculator', label: 'Pricing Calculator', hint: 'Estimar antes de desplegar', icon: 'Calculator' },
      { id: 'explorer', label: 'Cost Explorer', hint: 'Analizar gasto y tendencias', icon: 'ChartNoAxesCombined' },
    ],
    items: [
      { id: 'estimate', text: 'Estimar cuánto costaría una solución que todavía no se ha desplegado.', target: 'calculator', explanation: 'Pricing Calculator permite estimar costos a partir de los servicios y el uso previstos.' },
      { id: 'history', text: 'Investigar cómo ha cambiado el gasto durante los últimos meses.', target: 'explorer', explanation: 'Cost Explorer ayuda a analizar el gasto histórico y sus tendencias.' },
      { id: 'alert', text: 'Recibir una alerta cuando el gasto se acerque al presupuesto definido.', target: 'budgets', explanation: 'AWS Budgets permite definir umbrales y alertas. Una alerta no detiene por sí sola todos los recursos.' },
    ],
  },
};

export function practiceReady(practice: Practice, value: PracticeValue): boolean {
  return practice.items.every(item => practice.targets.some(target => target.id === value.assignments?.[item.id]))
    && (!practice.flow || (value.order?.length === practice.flow.length
      && new Set(value.order).size === practice.flow.length
      && value.order.every(id => practice.flow!.some(step => step.id === id))));
}

export function checkPractice(practice: Practice, value: PracticeValue) {
  const incorrect = practice.items.filter(item => value.assignments?.[item.id] !== item.target).map(item => item.id);
  const flowCorrect = !practice.flow || practice.flow.every((step, index) => value.order?.[index] === step.id);
  return { correct: practiceReady(practice, value) && incorrect.length === 0 && flowCorrect, incorrect, flowCorrect };
}
