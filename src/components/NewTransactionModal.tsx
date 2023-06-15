'use client'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { ArrowDownCircle, ArrowUpCircle, X } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import z from 'zod'

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export default function NewTransactionModal() {
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: 'income',
    },
  })

  async function postData(url: string = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      cache: 'no-store',
      body: JSON.stringify(data),
    })

    return response.json()
  }

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    postData('/api/transactions', data)
    reset()
  }

  return (
    <Dialog.Portal className="relative">
      <Dialog.Overlay
        className="fixed inset-0 h-screen 
      w-screen bg-[rgba(0,0,0,0.5)]"
      />

      <Dialog.Content
        className="
      absolute bottom-0 flex 
      h-full max-h-[32.875rem] 
      w-full  max-w-[28.125rem] 
      items-center justify-center rounded-t-[20px] bg-[#202024] 
      px-6 pt-6 sm:top-1/4 
      sm:-translate-y-1/4 sm:translate-x-1/4 sm:rounded-md 
      md:top-1/3 md:-translate-y-1/3 md:translate-x-1/3
      lg:right-52 lg:top-[-12.5rem] lg:-translate-x-1/2
      lg:translate-y-1/2
      "
      >
        <div
          className="
        h-full 
        w-full max-w-[20.438rem]"
        >
          <div className="mb-6 flex justify-between">
            <Dialog.Title
              className="flex h-8 w-[8.75rem] items-center 
            text-base font-bold text-[#E1E1E6]"
            >
              Nova Transação
            </Dialog.Title>
            <Dialog.Close className="h-6 w-6">
              <X />
            </Dialog.Close>
          </div>

          <form
            onSubmit={handleSubmit(handleCreateNewTransaction)}
            className="h-[fit-content]"
          >
            <div className="mb-6 flex h-[11.625rem] w-[full] flex-col justify-between">
              <input
                className="h-[3.375rem] w-full rounded-md bg-[#121214] p-4 text-base text-[#7C7C8A] outline-none"
                type="text"
                placeholder="Descrição"
                required
                {...register('description')}
              />
              <input
                className="h-[3.375rem] w-full rounded-md bg-[#121214] p-4 text-base text-[#7C7C8A] outline-none"
                type="number"
                placeholder="Preço"
                required
                {...register('price', { valueAsNumber: true })}
              />
              <input
                className="h-[3.375rem] w-full rounded-md bg-[#121214] p-4 text-base text-[#7C7C8A] outline-none"
                type="text"
                placeholder="Categoria"
                required
                {...register('category')}
              />
            </div>

            <Controller
              control={control}
              name="type"
              render={({ field }) => {
                return (
                  <RadioGroup.Root
                    onValueChange={field.onChange}
                    value={field.value}
                    className="flex h-[3.625rem] w-full items-center justify-between gap-2"
                  >
                    <RadioGroup.Item
                      className="
                      flex h-[3.625rem] w-[9.969rem] items-center justify-center gap-[0.5rem] 
                      rounded-md bg-[#29292E] data-[state=checked]:bg-[#00B37E]"
                      value="income"
                    >
                      <ArrowUpCircle className="text-2xl data-[state=checked]:bg-[#0000]" />
                      Entrada
                    </RadioGroup.Item>
                    <RadioGroup.Item
                      className="
                      flex h-[3.625rem] w-[9.969rem] items-center justify-center gap-[0.5rem] 
                      rounded-md bg-[#29292E] data-[state=checked]:bg-[#F75A68]"
                      value="outcome"
                    >
                      <ArrowDownCircle className="text-2xl" />
                      Saída
                    </RadioGroup.Item>
                  </RadioGroup.Root>
                )
              }}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-[40px] h-[3.125rem] w-full rounded-md bg-[#00875F]"
            >
              Cadastrar
            </button>
          </form>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
