import { createClient } from 'next-sanity'
import { sanityConfig } from './config'

export const sanityClient = createClient(sanityConfig)

export async function getProyectos() {
  return sanityClient.fetch(`
    *[_type == "proyecto"] | order(orden asc, fecha desc) {
      _id,
      titulo,
      slug,
      categoria,
      cliente,
      descripcion,
      imagen,
      url,
      destacado,
      fecha
    }
  `)
}

export async function getProyectosDestacados() {
  return sanityClient.fetch(`
    *[_type == "proyecto" && destacado == true] | order(orden asc) {
      _id,
      titulo,
      slug,
      categoria,
      cliente,
      descripcion,
      imagen,
      url
    }
  `)
}
