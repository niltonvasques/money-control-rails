export default class User {
  static route () { return '/users' }
  static columns () {
    return [
      { name: 'id', title: "#", type: 'number', editable: false },
      { name: 'name', type: 'string', help: 'Name must have at least 10 characters',
        validation: (value) => {
          if (!value) return 'error'
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
