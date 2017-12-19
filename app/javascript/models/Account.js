export default class Account {
  static columns () {
    return [
      { name: 'id', title: "#", type: 'number' },
      { name: 'description', type: 'string' },
      { name: 'initial_balance', type: 'number' },
      { name: 'user_id', type: 'number' }
    ]
  }
}
