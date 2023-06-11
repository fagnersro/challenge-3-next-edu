'use client'
import * as Dialog from '@radix-ui/react-dialog'

import NewTransactionModal from './NewTransactionModal'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { redirect } from 'next/navigation'

export default function Header() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/?callbackUrl=/start')
    },
  })

  return (
    <>
      <div className="flex h-[12.5rem] w-full flex-col items-center bg-[#09090A] py-[2.5rem] pb-[7.5rem]">
        <div className="flex h-[3.375rem] w-[20.438rem] max-w-[69rem] items-center justify-between  md:w-[90%]">
          {session ? (
            <div className="flex gap-5">
              <div className="h-[fit-content] w-[fit-content] rounded-full border-2 border-gray-300 object-cover">
                <Image
                  className="rounded-full"
                  src={`${session.user?.image}`}
                  width={40}
                  height={40}
                  alt={`${session.user?.name}`}
                  quality={100}
                  priority
                />
              </div>
              <div className="flex flex-col items-start justify-start">
                <span className="font-bold">{session.user?.name}</span>
                <button
                  className="w-[30px]  text-red-400"
                  onClick={() => {
                    signOut()
                  }}
                >
                  Sair
                </button>
              </div>
            </div>
          ) : (
            <div className="flex w-[170px] items-center gap-2">
              <div className="h-[fit-content] w-[fit-content] rounded-full border-2 border-gray-300  object-cover">
                <Image
                  className="rounded-full"
                  src=""
                  width={40}
                  height={40}
                  alt=""
                  quality={100}
                  priority
                />
              </div>
              <div className="flex w-[100%] flex-col">
                <span className="text-[14px] font-bold">Fagner Henrique</span>
                <span className="block text-[14px] text-base text-red-400">
                  Sair
                </span>
              </div>
            </div>
          )}

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className="h-[2.375rem] w-[8.125rem] rounded-md bg-[#00875F] text-sm font-bold text-gray-100">
                Nova Transação
              </button>
            </Dialog.Trigger>

            <NewTransactionModal />
          </Dialog.Root>
        </div>
      </div>
    </>
  )
}
