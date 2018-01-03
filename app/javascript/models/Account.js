export default class Account {
  static route () { return '/accounts' }
  static columns () {
    return [
      { name: 'id', title: "#", type: 'number', editable: false },
      { name: 'description', type: 'string' },
      { name: 'initial_balance', type: 'number' },
      { name: 'user_id', type: 'number' }
    ]
  }
}
