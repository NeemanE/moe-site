import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Protocall-Financial',

  projectId: '9z50pvjd',
  dataset: 'production',

  apiurl: 'https://9z50pvjd.api.sanity.io/v1/data/query/production ',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

//comment