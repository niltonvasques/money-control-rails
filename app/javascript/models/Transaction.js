export default class Transaction {
  static columns () {
    return [
      { name: 'id', title: "#" },
      { name: 'description' },
      { name: 'value' },
      { name: 'tags' },
      { name: 'account_id' }
    ]
  }
}
