export default class User {
  static columns () {
    return [
      { name: 'id', title: "#", type: 'number' },
      { name: 'name', type: 'string' },
      { name: 'username', type: 'string' },
      { name: 'email', type: 'string' }
    ]
  }
}
