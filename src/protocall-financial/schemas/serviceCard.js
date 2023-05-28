// serviceCard.js
export default {
  name: 'serviceCard',
  title: 'Service Card',
  type: 'document',
  fields: [
    {
      name: 'id',
      type: 'number',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image', // Assuming the image field type is 'image'
      options: {
        hotspot: true, // If you want to enable image hotspot functionality
      },
    },
  ],
};
