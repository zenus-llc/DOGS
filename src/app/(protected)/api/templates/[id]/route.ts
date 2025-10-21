import { currentUser } from '@clerk/nextjs/server'
import { NextRequest, NextResponse } from 'next/server'
import { client } from '@/lib/prisma'

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await currentUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await req.json()
    const { name, content, category } = body

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
        name: name || existingTemplate.name,
        content: content || existingTemplate.content,
        category: category !== undefined ? category : existingTemplate.category,
      },
    })

    return NextResponse.json({ template }, { status: 200 })
  } catch (error) {
    console.error('Error updating template:', error)
    return NextResponse.json(
      { error: 'Failed to update template' },
      { status: 500 }
    )
  }
}

export async function DELETE(
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

    await client.template.delete({
      where: { id: params.id },
    })

    return NextResponse.json({ message: 'Template deleted' }, { status: 200 })
  } catch (error) {
    console.error('Error deleting template:', error)
    return NextResponse.json(
      { error: 'Failed to delete template' },
      { status: 500 }
    )
  }
}
