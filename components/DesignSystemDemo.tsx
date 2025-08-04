import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function DesignSystemDemo() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">Design System Demo</h1>
        <p className="text-muted-foreground">Showcasing your custom HSL color palette</p>
      </div>

      {/* Color Palette */}
      <Card>
        <CardHeader>
          <CardTitle>Color Palette</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <div className="h-16 bg-primary rounded-lg"></div>
            <p className="text-sm font-medium">Primary</p>
            <p className="text-xs text-muted-foreground">hsl(110 25% 35%)</p>
          </div>
          <div className="space-y-2">
            <div className="h-16 bg-secondary rounded-lg"></div>
            <p className="text-sm font-medium">Secondary</p>
            <p className="text-xs text-muted-foreground">hsl(35 30% 85%)</p>
          </div>
          <div className="space-y-2">
            <div className="h-16 bg-whatsapp rounded-lg"></div>
            <p className="text-sm font-medium">WhatsApp</p>
            <p className="text-xs text-muted-foreground">hsl(142 70% 49%)</p>
          </div>
          <div className="space-y-2">
            <div className="h-16 bg-destructive rounded-lg"></div>
            <p className="text-sm font-medium">Destructive</p>
            <p className="text-xs text-muted-foreground">hsl(0 84.2% 60.2%)</p>
          </div>
        </CardContent>
      </Card>

      {/* Gradients */}
      <Card>
        <CardHeader>
          <CardTitle>Custom Gradients</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="h-24 bg-gradient-hero rounded-lg flex items-center justify-center">
            <p className="text-primary-foreground font-semibold">Hero Gradient</p>
          </div>
          <div className="h-24 bg-gradient-card rounded-lg flex items-center justify-center border">
            <p className="text-foreground font-semibold">Card Gradient</p>
          </div>
        </CardContent>
      </Card>

      {/* Shadows */}
      <Card>
        <CardHeader>
          <CardTitle>Custom Shadows</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="h-24 bg-card shadow-soft rounded-lg flex items-center justify-center">
            <p className="text-foreground font-medium">Soft Shadow</p>
          </div>
          <div className="h-24 bg-card shadow-card rounded-lg flex items-center justify-center">
            <p className="text-foreground font-medium">Card Shadow</p>
          </div>
          <div className="h-24 bg-card shadow-hover rounded-lg flex items-center justify-center">
            <p className="text-foreground font-medium">Hover Shadow</p>
          </div>
        </CardContent>
      </Card>

      {/* Buttons */}
      <Card>
        <CardHeader>
          <CardTitle>Button Variants</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Button variant="default">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="whatsapp">WhatsApp</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </CardContent>
      </Card>

      {/* Typography */}
      <Card>
        <CardHeader>
          <CardTitle>Typography</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Heading 1</h1>
          <h2 className="text-3xl font-semibold text-foreground">Heading 2</h2>
          <h3 className="text-2xl font-medium text-foreground">Heading 3</h3>
          <p className="text-foreground">Regular paragraph text with normal weight.</p>
          <p className="text-muted-foreground">Muted text for secondary information.</p>
          <p className="text-sm text-muted-foreground">Small text for captions and labels.</p>
        </CardContent>
      </Card>

      {/* Badges */}
      <Card>
        <CardHeader>
          <CardTitle>Badges</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </CardContent>
      </Card>
    </div>
  )
}
