/**
 * Registro de medios PRODUCIDOS.
 *
 * Mientras un espacio (MediaSlot) no tenga archivo, la app muestra una maqueta con su ficha de producción.
 * Cuando el equipo produzca el recurso:
 *   1. Copia el archivo a public/media/ (p. ej. public/media/s01-portada.mp4)
 *   2. Agrega aquí la entrada con el MISMO id del espacio:
 *        's01-portada': { src: 'media/s01-portada.mp4', poster: 'media/s01-portada.jpg', credit: 'GuateGeeks' },
 * El catálogo de medios (Perfil → Medios por producir) muestra el avance de producción.
 */
export interface ProducedAsset { src: string; poster?: string; credit?: string; captions?: string }

export const MEDIA_ASSETS: Record<string, ProducedAsset> = {
  // 's01-portada': { src: 'media/s01-portada.mp4', poster: 'media/s01-portada.jpg' },
};
