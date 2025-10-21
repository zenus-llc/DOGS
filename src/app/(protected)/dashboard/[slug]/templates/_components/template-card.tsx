'use client'

import { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Copy, Edit2, MoreVertical, Trash2, TrendingUp } from 'lucide-react'
import { toast } from 'sonner'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { Badge } from '@/components/ui/badge'

interface Template {
  id: string
  name: string
  content: string
  category: string | null
  usageCount: number
  createdAt: string
  updatedAt: string
}

interface TemplateCardProps {
  template: Template
  onDelete: (id: string) => void
  onEdit: (template: Template) => void
}

export function TemplateCard({ template, onDelete, onEdit }: TemplateCardProps) {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(template.content)
      toast.success('Template copied to clipboard')

      // Increment usage count
      await fetch(`/api/templates/${template.id}/use`, {
        method: 'POST',
      })
    } catch (error) {
      toast.error('Failed to copy template')
      console.error(error)
    }
  }

  const handleDelete = () => {
    onDelete(template.id)
    setDeleteDialogOpen(false)
  }

  return (
    <>
      <Card className="hover:shadow-lg transition-all duration-200 hover:border-primary/50">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="text-lg line-clamp-1">{template.name}</CardTitle>
              <div className="flex items-center gap-2 mt-2">
                {template.category && (
                  <Badge variant="secondary" className="text-xs">
                    {template.category}
                  </Badge>
                )}
                {template.usageCount > 0 && (
                  <div className="flex items-center text-xs text-muted-foreground">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {template.usageCount} uses
                  </div>
                )}
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={handleCopy}>
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onEdit(template)}>
                  <Edit2 className="h-4 w-4 mr-2" />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setDeleteDialogOpen(true)}
                  className="text-destructive"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {template.content}
          </p>
        </CardContent>
        <CardFooter className="pt-3">
          <Button variant="outline" size="sm" className="w-full" onClick={handleCopy}>
            <Copy className="h-4 w-4 mr-2" />
            Use Template
          </Button>
        </CardFooter>
      </Card>

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Template?</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete &quot;{template.name}&quot;? This action
              cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
