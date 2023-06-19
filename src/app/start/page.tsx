'use client'
import SearchForm from '@/components/SearchForm'
import Header from '@/components/Header'
// import Summary from '@/components/Summary'
import TransactionCard from '@/components/TransactionCard'
import { useFetch } from '@/hook/useFetch'
import { DataTransactions } from '@/@types/DataTransactions'

export default function PageStart() {
  const { data } = useFetch<DataTransactions[]>('transactions')

  if (!data) {
    return <p>Loading...</p>
  }

  console.log(data)

  return (
    <div className="h-screen w-screen overflow-x-hidden">
      {/* <Header />
      <Summary /> */}
      <Header />

      <main className="m-[0_auto] mt-8 flex w-[90%] flex-col items-center justify-center pb-5 ">
        <div className="flex h-[1.625rem] w-[90%] min-w-[20.375rem] items-center justify-between">
          <span className="text-lg text-gray-100">Transações</span>
          <span className="text-base text-gray-300">{data.length} itens</span>
        </div>

        <SearchForm />
        {data.map((transaction) => {
          return (
            <TransactionCard key={transaction.id} transaction={transaction} />
          )
        })}
      </main>
    </div>
  )
}
