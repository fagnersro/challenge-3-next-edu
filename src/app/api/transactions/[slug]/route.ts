import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(
  req: Request,
  { params }: { params: { slug: string } },
) {
  const slug = params.slug

  const findTransaction = await prisma.transaction.findMany({
    where: {
      description: {
        contains: slug,
      },
    },
  })

  return NextResponse.json(findTransaction)
}
