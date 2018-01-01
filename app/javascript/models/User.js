export default class User {
  static columns () {
    return [
      { name: 'id', title: "#", type: 'number' },
      { name: 'name', type: 'string', help: 'Name must have at least 10 characters',
        validation: (value) => {
          const length = value.length
          if (length > 10) return 'success'
          else if (length > 5) return 'warning'
          return 'error'
        }
      },
      { name: 'username', type: 'string' },
      { name: 'email', type: 'string' }
    ]
  }
}
