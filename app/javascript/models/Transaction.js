export default class Transaction {
  static columns () {
    return [
      { name: 'id', title: "#", type: 'number' },
      { name: 'description', type: 'string' },
      { name: 'value', type: 'number' },
      { name: 'tags', type: 'string' },
      { name: 'account_id', type: 'number' }
    ]
  }
}
