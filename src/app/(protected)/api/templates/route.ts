import { currentUser } from '@clerk/nextjs/server'
import { NextRequest, NextResponse } from 'next/server'
import { client } from '@/lib/prisma'

export async function GET(req: NextRequest) {
  try {
    const user = await currentUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(req.url)
    const category = searchParams.get('category')

    const where: any = {
      userId: user.id,
    }

    if (category && category !== 'all') {
      where.category = category
    }

    const templates = await client.template.findMany({
      where,
      orderBy: [
        { usageCount: 'desc' },
        { createdAt: 'desc' },
      ],
    })

    return NextResponse.json({ templates }, { status: 200 })
  } catch (error) {
    console.error('Error fetching templates:', error)
    return NextResponse.json(
      { error: 'Failed to fetch templates' },
      { status: 500 }
    )
  }
}

export async function POST(req: NextRequest) {
  try {
    const user = await currentUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await req.json()
    const { name, content, category } = body

    if (!name || !content) {
      return NextResponse.json(
        { error: 'Name and content are required' },
        { status: 400 }
      )
    }

    const template = await client.template.create({
      data: {
        name,
        content,
        category: category || 'General',
        userId: user.id,
      },
    })

    return NextResponse.json({ template }, { status: 201 })
  } catch (error) {
    console.error('Error creating template:', error)
    return NextResponse.json(
      { error: 'Failed to create template' },
      { status: 500 }
    )
  }
}
