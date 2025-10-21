import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { 
  CheckCircle, 
  Zap, 
  MessageSquare, 
  TrendingUp, 
  Shield, 
  Sparkles,
  Instagram,
  BarChart3,
  Clock,
  Users
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-purple-500" />,
      title: 'Lightning Fast Automation',
      description: 'Respond to comments and DMs instantly with AI-powered automation that never sleeps.',
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-blue-500" />,
      title: 'Smart Conversations',
      description: 'Engage your audience with contextual, intelligent responses that feel genuinely human.',
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-500" />,
      title: 'Growth Analytics',
      description: 'Track engagement metrics and optimize your strategy with detailed insights.',
    },
    {
      icon: <Shield className="h-8 w-8 text-orange-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level encryption keeps your data and connections completely secure.',
    },
  ]

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for growing creators',
      price: '$0',
      period: 'Forever Free',
      features: [
        'Up to 1,000 automated responses/month',
        'Basic comment automation',
        'Standard response templates',
        'Community support',
        'Basic analytics dashboard',
      ],
      cta: 'Start Free',
      popular: false,
    },
    {
      name: 'Pro',
      description: 'For serious influencers & businesses',
      price: '$49',
      period: '/month',
      features: [
        'Unlimited automated responses',
        'AI-powered custom responses',
        'Advanced DM automation',
        'Priority support',
        'Advanced analytics & insights',
        'Custom branding',
        'Multi-account management',
        'API access',
      ],
      cta: 'Upgrade to Pro',
      popular: true,
    },
    {
      name: 'Enterprise',
      description: 'Custom solutions for teams',
      price: 'Custom',
      period: 'Contact us',
      features: [
        'Everything in Pro',
        'Dedicated account manager',
        'White-label options',
        'Custom integrations',
        'SLA guarantee',
        'Team training & onboarding',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 flex items-center justify-center font-bold text-white shadow-lg shadow-purple-500/30">
                <Sparkles className="h-5 w-5" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Echelon
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-gray-300 hover:text-white transition-colors">Features</Link>
              <Link href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link>
              <Link href="/support" className="text-gray-300 hover:text-white transition-colors">Support</Link>
              <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy</Link>
            </div>
            <Link href="/dashboard">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg shadow-purple-500/30">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-black">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
              <Sparkles className="h-4 w-4 text-purple-400" />
              <span className="text-sm text-gray-300">AI-Powered Instagram Automation</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Elevate Your Instagram
              </span>
              <br />
              <span className="text-white">To The Next Level</span>
            </h1>

            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Transform every comment and DM into meaningful connections. Echelon's AI-powered automation helps you engage authentically, at scale.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <Link href="/dashboard">
                <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-2xl shadow-purple-500/50">
                  <Zap className="mr-2 h-5 w-5" />
                  Start Free Trial
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white/20 hover:bg-white/5">
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { label: 'Active Users', value: '50K+', icon: <Users className="h-5 w-5" /> },
                { label: 'Messages/Day', value: '2M+', icon: <MessageSquare className="h-5 w-5" /> },
                { label: 'Response Time', value: '<1s', icon: <Clock className="h-5 w-5" /> },
                { label: 'Satisfaction', value: '99%', icon: <TrendingUp className="h-5 w-5" /> },
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                  <div className="flex items-center justify-center gap-2 mb-2 text-purple-400">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gradient-to-b from-black to-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Powerful Features That <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Drive Results</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to dominate Instagram engagement and grow your audience exponentially.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-2xl text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Simple, <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Transparent Pricing</span>
            </h2>
            <p className="text-xl text-gray-400">Choose the plan that fits your ambition</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative ${plan.popular ? 'bg-gradient-to-b from-purple-600/20 to-blue-600/20 border-purple-400 scale-105' : 'bg-white/5 border-white/10'} backdrop-blur-sm hover:scale-105 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl text-white mb-2">{plan.name}</CardTitle>
                  <CardDescription className={plan.popular ? "text-gray-200" : "text-gray-400"}>{plan.description}</CardDescription>
                  <div className="mt-6">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className={plan.popular ? "text-gray-200 ml-2" : "text-gray-400 ml-2"}>{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className={`h-5 w-5 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-purple-300' : 'text-purple-400'}`} />
                        <span className={plan.popular ? "text-white" : "text-gray-300"}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/dashboard" className="w-full">
                    <Button 
                      className={`w-full ${plan.popular ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg shadow-purple-500/50 text-white' : 'bg-white/10 hover:bg-white/20'}`}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Transform</span> Your Instagram?
            </h2>
            <p className="text-xl text-gray-400 mb-10">
              Join thousands of creators and businesses using Echelon to automate engagement and accelerate growth.
            </p>
            <Link href="/dashboard">
              <Button size="lg" className="text-lg px-10 py-7 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-2xl shadow-purple-500/50">
                <Instagram className="mr-2 h-5 w-5" />
                Get Started Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Echelon
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Elevating Instagram automation with AI-powered intelligence.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/support" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/support" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/support" className="hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Echelon. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
