export default {
  name: 'message',
  type: 'document',
  title: 'Visitor Messages',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Visitor Name',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
    },
    {
      name: 'message',
      type: 'text',
      title: 'Message',
    },
    {
      name: 'createdAt',
      type: 'datetime',
      title: 'Submitted At',
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    }
  ],
}
