// sum all the change in the drawer for initial tests
function calcCidSum(cid) {
  let cidSum = 0;
  for (let i = 0; i < cid.length; i++) {
    cidSum += cid[i][1];
  }
  return Math.round(cidSum * 100) / 100;
}

function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let cidSum = calcCidSum(cid);

  // Check for exact change
  if (change === cidSum) {
    return {status: "CLOSED", change: cid};
  // Check for insufficient funds
  } else if (change > cidSum) {
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }

  // Create lookup object for units
  let curUnits = {
  "PENNY" : 0.01,
  "NICKEL" : 0.05,
  "DIME" : 0.1,
  "QUARTER" : 0.25,
  "ONE" : 1,
  "FIVE" : 5,
  "TEN" : 10,
  "TWENTY" : 20,
  "ONE HUNDRED" : 100}
  
  // create empty change list
  let changeList = [
  ["PENNY", 0],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]
  ].reverse();

  // add change to changelist
  let cidSorted = [...cid].reverse()
  for (let i = 0; i < cidSorted.length; i++) {
    while (change >= curUnits[cidSorted[i][0]] && cidSorted[i][1] !== 0) {
      cidSorted[i][1] -= curUnits[cidSorted[i][0]]
      changeList[i][1] = changeList[i][1] + curUnits[cidSorted[i][0]];
      change -= curUnits[cidSorted[i][0]];
      change = change.toFixed(2);
    }
  }

  // check if change could be made
  if (change > 0) {
    return {status: "INSUFFICIENT_FUNDS", change: []}; 
  }

  // remove 0 values from changelist
  let temp = [];
  for (let i = 0; i < changeList.length; i++) {
    if (changeList[i][1] !== 0) {
      temp.push(changeList[i]);
    }
  }
  changeList = [...temp]

  return {status: "OPEN", change: changeList}
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
