export default {
  name: 'proyecto',
  title: 'Proyecto',
  type: 'document',
  fields: [
    {
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: (rule: any) => rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'titulo' },
      validation: (rule: any) => rule.required(),
    },
    {
      name: 'categoria',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'Desarrollo Web', value: 'web' },
          { title: 'Marketing Digital', value: 'marketing' },
          { title: 'Identidad de Marca', value: 'marca' },
          { title: 'Redes Sociales', value: 'redes' },
          { title: 'Video', value: 'video' },
          { title: 'Otro', value: 'otro' },
        ],
      },
      validation: (rule: any) => rule.required(),
    },
    {
      name: 'cliente',
      title: 'Cliente',
      type: 'string',
    },
    {
      name: 'descripcion',
      title: 'Descripción corta',
      type: 'text',
      rows: 3,
      validation: (rule: any) => rule.required(),
    },
    {
      name: 'descripcionLarga',
      title: 'Descripción larga',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'imagen',
      title: 'Imagen principal',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'imagenes',
      title: 'Galería de imágenes',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'url',
      title: 'URL del proyecto (si tiene)',
      type: 'url',
    },
    {
      name: 'destacado',
      title: '¿Destacado en home?',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'orden',
      title: 'Orden de aparición',
      type: 'number',
    },
    {
      name: 'fecha',
      title: 'Fecha',
      type: 'date',
    },
  ],
  preview: {
    select: {
      title: 'titulo',
      subtitle: 'cliente',
      media: 'imagen',
    },
  },
}
