'use client'
import { Search } from 'lucide-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const searchFormSchema = z.object({
  query: z.string().min(3),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export default function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    const res = await fetch(
      `http://localhost:3000/api/transactions/${data.query}`,
    )

    if (!res) {
      throw new Error('Faild to fetch data')
    }

    const query: string = await res.json()
    console.log(query)
    return query
  }

  return (
    <form
      onSubmit={handleSubmit(handleSearchTransactions)}
      className="mt-2 flex h-[3.375rem] w-[90%] min-w-[20.375rem] items-center gap-2"
    >
      <input
        type="text"
        className="h-[3.375rem] w-[90%] rounded-md bg-[#121214] p-4 outline-none"
        placeholder="Busque uma Transação"
        {...register('query')}
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="flex h-[3.375rem] w-[3.375rem] max-w-[9.188rem] items-center justify-center gap-3 rounded-md border-[1px] border-[#00B37E] md:w-[90%]"
      >
        <Search className="text-[#00B37E]" />

        <span className="invisible hidden font-bold text-[#00B37E] md:visible md:flex">
          Buscar
        </span>
      </button>
    </form>
  )
}
