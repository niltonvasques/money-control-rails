export default class Transaction {
  static route () { return '/transactions' }
  static columns () {
    return [
      { name: 'id', title: "#", type: 'number', editable: false },
      { name: 'description', type: 'string' },
      { name: 'value', type: 'number' },
      { name: 'tags', type: 'string' },
      { name: 'account_id', type: 'number' }
    ]
  }
}
