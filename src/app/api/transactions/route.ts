import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: Request) {
  const transactions = await prisma.transaction.findMany({
    orderBy: {
      created_at: 'desc',
    },
  })

  return NextResponse.json(transactions)
}

export async function POST(req: Request) {
  const body = await req.json()

  const { description, price, category, type } = body

  const transaction = await prisma.transaction.create({
    data: {
      description,
      price,
      category,
      type,
    },
  })

  return NextResponse.json(transaction)
}
