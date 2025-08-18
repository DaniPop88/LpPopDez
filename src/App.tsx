import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Shield, ArrowRight, Crown, Star, Zap } from "@phosphor-icons/react"
import { useState, useEffect } from "react"

const platformLinks = [
  { id: 1, url: "popdez11.com", label: "Principal" },
  { id: 2, url: "popdez22.com", label: "Backup" },
  { id: 3, url: "popdez33.com", label: "Espelho" },
  { id: 4, url: "popdez44.com", label: "Alternativo" }
]

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleLinkClick = (url: string) => {
    window.open(`https://${url}`, '_blank', 'noopener,noreferrer')
  }

  const handleMainPlatform = () => {
    window.open('https://popdez.com', '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="h-screen w-full bg-background text-foreground overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/15 pointer-events-none" />
      <div className="absolute inset-0 mobile-stars pointer-events-none" />
      
      {/* Single Page Layout */}
      <div className={`h-full flex flex-col justify-center px-4 py-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        
        {/* Top Badge */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
          <Badge className="bg-accent/90 text-accent-foreground px-3 py-1 text-xs font-bold shadow-lg">
            <Crown className="w-3 h-3 mr-1" />
            OFICIAL 2024
          </Badge>
        </div>
        
        {/* Main Content Container */}
        <div className="flex-1 flex flex-col justify-center space-y-6 max-w-md mx-auto w-full">
          
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-6xl font-black shimmer-text animate-pulse-glow leading-none">
              POPDEZ
            </h1>
            <div className="flex items-center justify-center gap-2 text-accent">
              <Star className="w-5 h-5 fill-current" />
              <span className="text-lg font-bold">JOGOS PREMIUM</span>
              <Star className="w-5 h-5 fill-current" />
            </div>
          </div>
          
          {/* Main CTA */}
          <div className="space-y-3">
            <Button 
              size="lg" 
              className="mobile-main-cta w-full h-14 text-xl font-bold relative overflow-hidden"
              onClick={handleMainPlatform}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Zap className="w-6 h-6" />
                ENTRAR AGORA
                <ArrowRight className="w-6 h-6" />
              </span>
            </Button>
            
            <p className="text-accent text-center font-semibold animate-bounce">
              ⚡ ACESSO INSTANTÂNEO ⚡
            </p>
          </div>
          
          {/* Quick Links Grid */}
          <div className="space-y-3">
            <h2 className="text-center text-sm font-bold text-accent">
              LINKS ALTERNATIVOS
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {platformLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.url)}
                  className="mobile-link-card p-3 rounded-lg text-left bg-card/80 border border-border/40 hover:border-accent/50 transition-all duration-200 backdrop-blur-sm"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-accent font-bold text-sm">{link.url}</div>
                      <div className="text-xs text-muted-foreground">{link.label}</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-accent" />
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="space-y-2 text-center">
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Shield className="w-3 h-3 text-accent" />
              <span>100% SEGURO E CONFIÁVEL</span>
            </div>
            <div className="text-xs text-accent font-medium">
              🎮 50.000+ Online • 🎁 Bônus para Novos Membros
            </div>
          </div>
          
        </div>
        
        {/* Bottom Footer */}
        <div className="text-center space-y-1 mt-6">
          <div className="text-xs text-muted-foreground flex justify-center items-center gap-3">
            <span>🔒 SSL</span>
            <span>⚡ Instantâneo</span>
            <span>🎮 24/7</span>
          </div>
          <div className="text-xs text-muted-foreground">
            © 2024 POPDEZ
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
