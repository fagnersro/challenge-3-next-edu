import { DataTransactions } from '@/@types/DataTransactions'

export async function useSummary() {
  async function getTransactions() {
    const res = await fetch('http://localhost:3000/api/transactions', {
      cache: 'no-store',
    })
    if (!res) {
      throw new Error('Faild to fetch data')
    }
    const transactions: DataTransactions[] = await res.json()
    return transactions
  }

  const transactions = await getTransactions()

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.price
        acc.total += transaction.price
      } else {
        acc.outcome += transaction.price
        acc.total -= transaction.price
      }
      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )

  return summary
}
