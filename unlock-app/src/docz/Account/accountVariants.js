//With address and balance
const accountWithBalance = {
    address: '0xabc',
    balance: '300000000000000000',
  };
//With address but no balance
let accountWithoutBalance = {
  address: '0xabc',
}
//With no address
let accountWithoutAddress = {}

let accountPicker = () => {
return false; // We don't need this to do anything in the storybook context
};

export { accountWithBalance,accountWithoutBalance, accountWithoutAddress, accountPicker};