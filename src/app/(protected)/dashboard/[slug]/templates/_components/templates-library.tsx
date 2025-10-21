'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Plus, Search, Filter } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { TemplateCard } from './template-card'
import { TemplateDialog } from './template-dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { toast } from 'sonner'

interface Template {
  id: string
  name: string
  content: string
  category: string | null
  usageCount: number
  createdAt: string
  updatedAt: string
}

export function TemplatesLibrary() {
  const [templates, setTemplates] = useState<Template[]>([])
  const [filteredTemplates, setFilteredTemplates] = useState<Template[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editingTemplate, setEditingTemplate] = useState<Template | null>(null)

  const categories = ['all', 'General', 'Welcome', 'Support', 'Sales', 'Follow-up']

  useEffect(() => {
    fetchTemplates()
  }, [categoryFilter])

  useEffect(() => {
    filterTemplates()
  }, [templates, searchQuery, categoryFilter])

  const fetchTemplates = async () => {
    try {
      setLoading(true)
      const params = new URLSearchParams()
      if (categoryFilter !== 'all') {
        params.append('category', categoryFilter)
      }

      const response = await fetch(`/api/templates?${params.toString()}`)
      if (!response.ok) throw new Error('Failed to fetch templates')

      const data = await response.json()
      setTemplates(data.templates)
    } catch (error) {
      toast.error('Failed to load templates')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const filterTemplates = () => {
    let filtered = templates

    if (searchQuery) {
      filtered = filtered.filter(
        (template) =>
          template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          template.content.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    setFilteredTemplates(filtered)
  }

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/templates/${id}`, {
        method: 'DELETE',
      })

      if (!response.ok) throw new Error('Failed to delete template')

      setTemplates(templates.filter((t) => t.id !== id))
      toast.success('Template deleted successfully')
    } catch (error) {
      toast.error('Failed to delete template')
      console.error(error)
    }
  }

  const handleEdit = (template: Template) => {
    setEditingTemplate(template)
    setDialogOpen(true)
  }

  const handleDialogClose = (refreshData?: boolean) => {
    setDialogOpen(false)
    setEditingTemplate(null)
    if (refreshData) {
      fetchTemplates()
    }
  }

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="flex flex-1 gap-4 w-full sm:w-auto">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-[180px]">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat === 'all' ? 'All Categories' : cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button onClick={() => setDialogOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          New Template
        </Button>
      </div>

      {/* Templates Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader>
                <div className="h-4 bg-muted rounded w-3/4"></div>
                <div className="h-3 bg-muted rounded w-1/2 mt-2"></div>
              </CardHeader>
              <CardContent>
                <div className="h-20 bg-muted rounded"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : filteredTemplates.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <p className="text-muted-foreground text-center mb-4">
              {searchQuery || categoryFilter !== 'all'
                ? 'No templates found matching your filters'
                : 'No templates yet. Create your first template to get started!'}
            </p>
            {!searchQuery && categoryFilter === 'all' && (
              <Button onClick={() => setDialogOpen(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Create Template
              </Button>
            )}
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTemplates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </div>
      )}

      {/* Create/Edit Dialog */}
      <TemplateDialog
        open={dialogOpen}
        onClose={handleDialogClose}
        template={editingTemplate}
        categories={categories.filter((c) => c !== 'all')}
      />
    </div>
  )
}
