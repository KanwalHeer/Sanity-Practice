// schemas/nameSchema.ts
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'nameSchema',
  title: 'Name Schema',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Enter the name',
    }),
  ],
})
