import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { 
  Sparkles,
  Mail,
  MessageCircle,
  HelpCircle,
  BookOpen,
  Clock,
  Users,
  ArrowLeft
} from 'lucide-react'
import Link from 'next/link'

export default function SupportPage() {
  const faqs = [
    {
      question: 'How does Echelon's automation work?',
      answer: 'Echelon uses advanced AI to analyze incoming comments and DMs on your Instagram account, then generates contextual, human-like responses based on your brand voice and custom settings. You maintain full control over what gets automated.',
    },
    {
      question: 'Is my Instagram account safe?',
      answer: 'Absolutely. We use OAuth 2.0 authentication and bank-level encryption. We never store your Instagram password, and you can revoke access at any time. Our platform is compliant with Instagram\'s API terms of service.',
    },
    {
      question: 'Can I customize the automated responses?',
      answer: 'Yes! You can create custom response templates, set up keyword triggers, and train the AI to match your brand voice. Our Pro plan includes advanced AI customization options for even more control.',
    },
    {
      question: 'What happens if I exceed my plan limits?',
      answer: 'We\'ll notify you when you\'re approaching your limit. On the free plan, automation will pause until the next month. Pro users have unlimited responses, and Enterprise clients have custom arrangements.',
    },
    {
      question: 'How quickly are responses sent?',
      answer: 'Automated responses are sent within 1 second of receiving a comment or DM. You can also add delays to make responses appear more natural if desired.',
    },
    {
      question: 'Can I use Echelon with multiple Instagram accounts?',
      answer: 'Yes! Pro plan users can manage multiple Instagram accounts from a single dashboard. Each account can have its own automation rules and response templates.',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 14-day money-back guarantee for all paid plans. If you\'re not satisfied, contact our support team for a full refund—no questions asked.',
    },
    {
      question: 'How do I cancel my subscription?',
      answer: 'You can cancel anytime from your account settings. Your subscription will remain active until the end of your billing period, and you won\'t be charged again.',
    },
  ]

  const contactOptions = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Support',
      description: 'Get help via email',
      detail: 'support@echelon.app',
      action: 'Send Email',
      href: 'mailto:support@echelon.app',
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: 'Live Chat',
      description: '24/7 support chat',
      detail: 'Average response: 2 minutes',
      action: 'Start Chat',
      href: '#',
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: 'Documentation',
      description: 'Comprehensive guides',
      detail: 'Step-by-step tutorials',
      action: 'View Docs',
      href: '#',
    },
  ]

  return (
    <main className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 flex items-center justify-center font-bold text-white shadow-lg shadow-purple-500/30">
                <Sparkles className="h-5 w-5" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Echelon
              </span>
            </Link>
            <Link href="/">
              <Button variant="ghost" className="text-gray-300 hover:text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              How can we <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">help you?</span>
            </h1>
            <p className="text-xl text-gray-400">
              Get the support you need to make the most of Echelon
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
            {contactOptions.map((option, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-purple-400 mb-4">
                    {option.icon}
                  </div>
                  <CardTitle className="text-white">{option.title}</CardTitle>
                  <CardDescription className="text-gray-400">{option.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 text-sm mb-4">{option.detail}</p>
                  <Link href={option.href}>
                    <Button className="w-full bg-white/10 hover:bg-white/20">
                      {option.action}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-black to-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Frequently Asked <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className="text-gray-400">Find quick answers to common questions</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardHeader>
                    <CardTitle className="text-lg text-white flex items-start gap-3">
                      <HelpCircle className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 pl-8">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Still Need Help Section */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Users className="h-16 w-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Still need help?
            </h2>
            <p className="text-gray-400 mb-8">
              Our support team is available 24/7 to assist you with any questions or issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="mailto:support@echelon.app">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Support
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5">
                  Go to Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Echelon. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
