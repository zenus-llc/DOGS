import { currentUser } from '@clerk/nextjs/server'
import { NextRequest, NextResponse } from 'next/server'
import { client } from '@/lib/prisma'

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await currentUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Verify template belongs to user
    const existingTemplate = await client.template.findFirst({
      where: {
        id: params.id,
        userId: user.id,
      },
    })

    if (!existingTemplate) {
      return NextResponse.json({ error: 'Template not found' }, { status: 404 })
    }

    const template = await client.template.update({
      where: { id: params.id },
      data: {
        usageCount: {
          increment: 1,
        },
      },
    })

    return NextResponse.json({ template }, { status: 200 })
  } catch (error) {
    console.error('Error incrementing template usage:', error)
    return NextResponse.json(
      { error: 'Failed to update template usage' },
      { status: 500 }
    )
  }
}
