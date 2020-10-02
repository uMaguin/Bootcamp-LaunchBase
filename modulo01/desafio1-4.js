// Crie um programa para realizar operações bancárias na conta de um usuário:

const user = {
  name: "Mariana",
  transactions: [],
  balance: 0,
};

function createTransaction(transaction) {
  user.transactions.push(transaction);

  if (transaction.type === "credit") {
    user.balance = user.balance + transiction.value;
  } else {
    user.balance = user.balance - transiction.value;
  }
}

// Relatórios:

function getHigherTransactionByType(type) {
  let higherTransaction;
  let higherValue;

  for (let transactions of user.transactions) {
    if (transaction.type == type && trans.value > higherValue) {
      higherTransaction = transaction.value;
      higherTransaction = value;
    }
  }
}

return higherTransaction;
