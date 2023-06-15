import { DataTransactions } from '@/@types/DataTransactions'
import { priceFormatter, dateFormatter } from '@/utils/formatter'

interface TransactionCardProps {
  transaction: DataTransactions
}

export default function TransactionCard({ transaction }: TransactionCardProps) {
  return (
    <div
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
        <span className="text-base text-[#7C7C8A]">{transaction.category}</span>
        <span className="text-base text-[#7C7C8A]">
          {dateFormatter.format(new Date(transaction.created_at))}
        </span>
      </div>
    </div>
  )
}
