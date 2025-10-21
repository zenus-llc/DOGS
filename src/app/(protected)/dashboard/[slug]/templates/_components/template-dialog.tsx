'use client'

import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'

interface Template {
  id: string
  name: string
  content: string
  category: string | null
}

interface TemplateDialogProps {
  open: boolean
  onClose: (refreshData?: boolean) => void
  template: Template | null
  categories: string[]
}

export function TemplateDialog({
  open,
  onClose,
  template,
  categories,
}: TemplateDialogProps) {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    content: '',
    category: 'General',
  })

  useEffect(() => {
    if (template) {
      setFormData({
        name: template.name,
        content: template.content,
        category: template.category || 'General',
      })
    } else {
      setFormData({
        name: '',
        content: '',
        category: 'General',
      })
    }
  }, [template, open])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.content.trim()) {
      toast.error('Name and content are required')
      return
    }

    try {
      setLoading(true)

      const url = template ? `/api/templates/${template.id}` : '/api/templates'
      const method = template ? 'PUT' : 'POST'

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error(`Failed to ${template ? 'update' : 'create'} template`)
      }

      toast.success(
        template ? 'Template updated successfully' : 'Template created successfully'
      )
      onClose(true)
    } catch (error) {
      toast.error(
        template ? 'Failed to update template' : 'Failed to create template'
      )
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={() => !loading && onClose()}>
      <DialogContent className="sm:max-w-[600px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>
              {template ? 'Edit Template' : 'Create New Template'}
            </DialogTitle>
            <DialogDescription>
              {template
                ? 'Update your template details below.'
                : 'Create a reusable response template.'}
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Template Name</Label>
              <Input
                id="name"
                placeholder="e.g., Welcome Message"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="category">Category</Label>
              <Select
                value={formData.category}
                onValueChange={(value) =>
                  setFormData({ ...formData, category: value })
                }
              >
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="content">Template Content</Label>
              <Textarea
                id="content"
                placeholder="Hi {{name}}, thanks for reaching out! How can I help you today?"
                value={formData.content}
                onChange={(e) =>
                  setFormData({ ...formData, content: e.target.value })
                }
                rows={6}
                required
              />
              <p className="text-xs text-muted-foreground">
                Tip: Use {'{'}{'{'} name {'}'}{'}'}  for dynamic values
              </p>
            </div>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onClose()}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {template ? 'Update' : 'Create'} Template
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
