'use client'
import { DataTransactions } from '@/@types/DataTransactions'
import SearchForm from '@/components/SearchForm'
import Header from '@/components/Header'
import Summary from '@/components/Summary'
import TransactionCard from '@/components/TransactionCard'
// import useSWR from 'swr'
// import { DataTransactions } from '@/@types/DataTransactions'
// import useSWR, { Fetcher } from 'swr'

export async function getTransactions() {
  const res = await fetch('http://localhost:3000/api/transactions', {
    cache: 'no-store',
  })
  if (!res) {
    throw new Error('Faild to fetch data')
  }
  const transactions: DataTransactions[] = await res.json()
  return transactions
  // const fetcher: Fetcher<DataTransactions[]> = (...args) =>
  //   fetch(...args).then((res) => res.json())
  // const { data, error, isLoading } = useSWR(
  //   'http://localhost:3000/api/transactions',
  //   fetcher,
  //   console.log(data),
  // )
}

export default async function PageStart() {
  const transactions = await getTransactions()

  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <Header />
      <Summary />

      <main className="m-[0_auto] mt-8 flex w-[90%] flex-col items-center justify-center pb-5 ">
        <div className="flex h-[1.625rem] w-[90%] min-w-[20.375rem] items-center justify-between">
          <span className="text-lg text-gray-100">Transações</span>
          <span className="text-base text-gray-300">
            {transactions.length} itens
          </span>
        </div>

        <SearchForm />
        {transactions.map((transaction) => {
          return (
            <TransactionCard key={transaction.id} transaction={transaction} />
          )
        })}
      </main>
    </div>
  )
}
