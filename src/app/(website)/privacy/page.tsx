import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { 
  Sparkles,
  Shield,
  Lock,
  Eye,
  Database,
  UserCheck,
  ArrowLeft
} from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPage() {
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
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 mb-6">
              <Shield className="h-8 w-8 text-purple-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Privacy <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-lg text-gray-400">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Overview Cards */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: <Lock className="h-6 w-6" />,
                title: 'Data Encryption',
                description: 'All data is encrypted using industry-standard AES-256 encryption.',
              },
              {
                icon: <Eye className="h-6 w-6" />,
                title: 'Transparency',
                description: 'We\'re clear about what data we collect and how we use it.',
              },
              {
                icon: <UserCheck className="h-6 w-6" />,
                title: 'Your Control',
                description: 'You own your data and can delete it anytime.',
              },
            ].map((item, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-purple-400 mb-2">
                    {item.icon}
                  </div>
                  <CardTitle className="text-white text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-12 bg-gradient-to-b from-black to-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-white">1. Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-400 space-y-4">
                <p>
                  <strong className="text-white">Account Information:</strong> When you create an Echelon account, we collect your name, email address, and Instagram account credentials (via secure OAuth authentication).
                </p>
                <p>
                  <strong className="text-white">Usage Data:</strong> We collect information about how you use our services, including automation settings, response metrics, and engagement statistics.
                </p>
                <p>
                  <strong className="text-white">Instagram Data:</strong> We access your Instagram comments, direct messages, and account information necessary to provide our automation services. We never access your Instagram password.
                </p>
                <p>
                  <strong className="text-white">Payment Information:</strong> For paid plans, we collect billing information through our secure payment processor (Stripe). We do not store credit card details on our servers.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-white">2. How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-400 space-y-4">
                <p>We use the collected information to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide and improve our Instagram automation services</li>
                  <li>Process your automated responses and engagements</li>
                  <li>Analyze service performance and user engagement patterns</li>
                  <li>Send service-related notifications and updates</li>
                  <li>Provide customer support and respond to inquiries</li>
                  <li>Prevent fraud and ensure platform security</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-white">3. Data Sharing and Disclosure</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-400 space-y-4">
                <p>
                  <strong className="text-white">We do not sell your personal data.</strong> We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">Service Providers:</strong> We work with trusted third-party service providers (like cloud hosting and analytics) who assist in operating our platform.</li>
                  <li><strong className="text-white">Legal Requirements:</strong> We may disclose information if required by law, court order, or government request.</li>
                  <li><strong className="text-white">Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new owner.</li>
                  <li><strong className="text-white">Your Consent:</strong> We may share information with your explicit consent for specific purposes.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-white">4. Data Security</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-400 space-y-4">
                <p>
                  We implement industry-standard security measures to protect your data:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>AES-256 encryption for data at rest</li>
                  <li>TLS 1.3 encryption for data in transit</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Multi-factor authentication options</li>
                  <li>Strict access controls and employee training</li>
                  <li>Automated backup and disaster recovery systems</li>
                </ul>
                <p className="mt-4">
                  While we strive to protect your data, no method of transmission over the internet is 100% secure. We encourage you to use strong passwords and enable two-factor authentication.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-white">5. Your Rights and Choices</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-400 space-y-4">
                <p>You have the following rights regarding your personal data:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">Access:</strong> Request a copy of the personal data we hold about you</li>
                  <li><strong className="text-white">Correction:</strong> Update or correct inaccurate information</li>
                  <li><strong className="text-white">Deletion:</strong> Request deletion of your account and associated data</li>
                  <li><strong className="text-white">Export:</strong> Download your data in a portable format</li>
                  <li><strong className="text-white">Opt-out:</strong> Unsubscribe from marketing communications</li>
                  <li><strong className="text-white">Revoke Access:</strong> Disconnect your Instagram account at any time</li>
                </ul>
                <p className="mt-4">
                  To exercise any of these rights, please contact us at <a href="mailto:privacy@echelon.app" className="text-purple-400 hover:text-purple-300">privacy@echelon.app</a>
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-white">6. Data Retention</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-400 space-y-4">
                <p>
                  We retain your personal data only as long as necessary to provide our services and comply with legal obligations:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Account data is retained while your account is active</li>
                  <li>Upon account deletion, personal data is removed within 30 days</li>
                  <li>Backup copies are deleted within 90 days</li>
                  <li>Aggregated, anonymized analytics may be retained indefinitely</li>
                  <li>Legal or regulatory requirements may extend retention periods</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-white">7. Cookies and Tracking</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-400 space-y-4">
                <p>
                  We use cookies and similar tracking technologies to improve your experience:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">Essential Cookies:</strong> Required for the platform to function properly</li>
                  <li><strong className="text-white">Analytics Cookies:</strong> Help us understand how you use our service</li>
                  <li><strong className="text-white">Preference Cookies:</strong> Remember your settings and preferences</li>
                </ul>
                <p className="mt-4">
                  You can control cookies through your browser settings. Note that disabling certain cookies may affect platform functionality.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-white">8. Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-400 space-y-4">
                <p>
                  Echelon is not intended for users under the age of 16. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately at <a href="mailto:privacy@echelon.app" className="text-purple-400 hover:text-purple-300">privacy@echelon.app</a>.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-white">9. International Data Transfers</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-400 space-y-4">
                <p>
                  Your data may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Standard Contractual Clauses approved by regulatory authorities</li>
                  <li>Adequacy decisions recognizing equivalent data protection standards</li>
                  <li>Data processing agreements with all service providers</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-white">10. Changes to This Policy</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-400 space-y-4">
                <p>
                  We may update this Privacy Policy from time to time. When we make significant changes, we will:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Update the "Last updated" date at the top of this policy</li>
                  <li>Notify you via email or in-app notification</li>
                  <li>Provide a summary of key changes</li>
                </ul>
                <p className="mt-4">
                  Your continued use of Echelon after changes become effective constitutes acceptance of the updated policy.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white">11. Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-400 space-y-4">
                <p>
                  If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="mt-4 space-y-2">
                  <p><strong className="text-white">Email:</strong> <a href="mailto:privacy@echelon.app" className="text-purple-400 hover:text-purple-300">privacy@echelon.app</a></p>
                  <p><strong className="text-white">Support:</strong> <Link href="/support" className="text-purple-400 hover:text-purple-300">Visit our Support Center</Link></p>
                  <p><strong className="text-white">Address:</strong> Echelon, Inc., 123 Tech Street, San Francisco, CA 94105, USA</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="h-16 w-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Your Privacy Matters
            </h2>
            <p className="text-gray-400 mb-8">
              We're committed to protecting your data and being transparent about our practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/support">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Contact Us
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
