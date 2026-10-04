# Programas educativos en Socrates

## Alcance

Socrates ofrece dos programas: Sexto Primaria (CNB Guatemala) y preparación inicial para AWS Certified Cloud Practitioner (CLF-C02). La primera configuración exige elegir un programa. La elección se guarda en el perfil y se puede cambiar en Ajustes; cambiar de programa conserva el progreso del anterior. Los perfiles que ya terminaron la configuración se asignan a CNB para conservar su acceso.

## Experiencia

La selección aparece después de la bienvenida. El resto de la configuración comparte nombre, meta y preferencias. La experiencia AWS usa un inicio orientado a adultos, un temario por dominios del examen, lecciones breves y preguntas con explicación. Muestra carga, error y reintento cuando Firestore no responde o no tiene un curso publicado. CNB conserva su navegación actual. Ajustes permite cambiar entre programas y deja claro que cada uno conserva su avance.

## Datos

El contenido AWS se lee exclusivamente del documento público `programs/aws-cloud-practitioner` en Firestore. Un JSON versionado en el repositorio contiene una muestra editable y un script administrativo la publica; la app no importa ese JSON. El documento incluye código de examen, dominios, lecciones, secciones, preguntas y fuente. La lectura valida el esquema antes de mostrarlo. Las reglas permiten leer solo el documento publicado y niegan escrituras del cliente.

El progreso CNB mantiene su almacenamiento y documento de sincronización actual. AWS usa una clave local y un documento de estado propios por usuario; completar o repetir una lección guarda su mejor puntuación y fecha. El perfil conserva programa activo y programas elegidos.

## Verificación

Pruebas de migración y selección del perfil, validación del catálogo y aislamiento de progreso. Compilación y suite actual. La muestra sigue los cuatro dominios y porcentajes de la [guía oficial CLF-C02](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html).
