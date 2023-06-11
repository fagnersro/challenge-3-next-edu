import { dateFormatter, priceFormatter } from '@/utils/formatter'
import { DataTransactions } from '@/@types/DataTransactions'
import SearchForm from '@/components/SearchForm'
import Header from '@/components/Header'
import Summary from '@/components/Summary'

async function getTransactions() {
  const res = await fetch('http://localhost:3000/api/transactions', {
    cache: 'no-cache',
  })
  if (!res) {
    throw new Error('Faild to fetch data')
  }
  const transactions: DataTransactions[] = await res.json()
  return transactions
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
            <div
              key={transaction.id}
              className="
              mt-4 flex 
              h-[8.75rem] 
              w-[90%] min-w-[20.375rem] 
              flex-col items-center justify-between 
              rounded-md bg-[#29292E] 
              p-5 md:h-[4.125rem] md:flex-row"
            >
              <div className="flex h-[1.625rem] w-[17.938rem] items-center">
                <span className="text-base font-bold text-[##C4C4CC]">
                  {transaction.description}
                </span>
              </div>

              <div className="flex h-[2rem] w-[17.938rem] items-center">
                {transaction.type === 'outcome' ? (
                  <span className="text-xl font-bold  text-[#F75A68]">
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatter.format(transaction.price)}
                  </span>
                ) : (
                  <span className="text-xl font-bold  text-[#00B37E]">
                    {priceFormatter.format(transaction.price)}
                  </span>
                )}
              </div>

              <div className="flex h-[1.625rem] w-[17.938rem] items-center justify-between">
                <span className="text-base text-[#7C7C8A]">
                  {transaction.category}
                </span>
                <span className="text-base text-[#7C7C8A]">
                  {dateFormatter.format(new Date(transaction.created_at))}
                </span>
              </div>
            </div>
          )
        })}
      </main>
    </div>
  )
}
