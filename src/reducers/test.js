export default (state = 0, action) => {
  switch (action.types) {
    case 'TEST_ACTION':
      console.log('=============> TEST ACTION <================')
      return state + 1

    default:
      return state
  }
}