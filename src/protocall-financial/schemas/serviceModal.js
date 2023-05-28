export default {
    name: 'serviceModal',
    title: 'Service Modal',
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
        name: 'body',
        title: 'Body',
        type: 'array',
        of: [
          {
            type: 'block',
            styles: [],
            marks: {
              decorators: [{ title: 'Line Break', value: 'line-break' }],
            },
          },
        ],
      },
    ],
  };
  