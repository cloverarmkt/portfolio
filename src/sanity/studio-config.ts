import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { sanityConfig } from './config'

export default defineConfig({
  ...sanityConfig,
  basePath: '/studio',
  title: 'Portfolio de Fed',
  plugins: [
    structureTool(),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
