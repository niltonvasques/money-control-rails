export default class User {
  static columns () {
    return [
      { name: 'id', title: "#" },
      { name: 'name' },
      { name: 'username' },
      { name: 'email' }
    ]
  }
}
