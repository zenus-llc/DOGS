import React from 'react'
import { TemplatesLibrary } from './_components/templates-library'

export default function TemplatesPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Response Templates</h1>
        <p className="text-muted-foreground mt-2">
          Create and manage reusable response templates to save time
        </p>
      </div>
      <TemplatesLibrary />
    </div>
  )
}
