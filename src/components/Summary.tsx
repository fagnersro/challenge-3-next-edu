import { useSummary } from '@/hook/useSumary'
import { priceFormatter } from '@/utils/formatter'
import { ArrowDownCircle, ArrowUpCircle, DollarSign } from 'lucide-react'

export default async function Summary() {
  const summary = await useSummary()

  if (!summary) {
    return <p>Loading...</p>
  }

  return (
    <section
      className="
    mt-[-5rem] flex 
    h-[fit-content] 
    w-full items-center gap-[2rem] overflow-x-auto 
    pl-[1.5rem] pr-[0.575rem] md:m-[0_auto] md:mt-[-5rem] md:justify-center"
    >
      <div
        className="
      h-[9.375rem] 
      w-[14.938rem] min-w-[14.938rem] 
      rounded-md bg-[#323238] p-[2rem] md:w-[90%] md:max-w-[21.700rem]"
      >
        <header className="flex items-center justify-between">
          <span>Entradas</span>
          <ArrowUpCircle className="text-[#00875F]" />
        </header>

        <strong className="mt-[1rem] text-2xl">
          {priceFormatter.format(summary.income)}
        </strong>
      </div>

      <div
        className="
      h-[9.375rem]  
      min-w-[14.938rem] rounded-md 
      bg-[#323238] p-[2rem] md:w-[90%] md:max-w-[21.700rem]"
      >
        <header className="flex items-center justify-between">
          <span>Saídas</span>
          <ArrowDownCircle className="text-[#F75A68]" />
        </header>

        <strong className="mt-[2rem] text-2xl">
          {priceFormatter.format(summary.outcome)}
        </strong>
      </div>

      <div
        className="
      h-[9.375rem]  
      min-w-[14.938rem] 
      rounded-md bg-[#00875F] 
      p-[2rem] md:w-[90%] md:max-w-[21.700rem]"
      >
        <header className="flex items-center justify-between">
          <span>Total</span>
          <DollarSign />
        </header>

        <strong className="mt-[1rem] text-2xl">
          {priceFormatter.format(summary.total)}
        </strong>
      </div>
    </section>
  )
}
