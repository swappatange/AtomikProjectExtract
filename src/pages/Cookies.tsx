import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Cookie, Settings, BarChart3, Target, Shield } from "lucide-react";

export default function Cookies() {
  return (
    <Layout>
      <section className="py-24 gradient-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Legal
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Cookie Policy
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Last updated: December 2024
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
              <h2 className="text-2xl font-bold text-foreground mb-4">What Are Cookies?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners. Cookies help us understand how you use our website and improve your experience.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
              <h2 className="text-2xl font-bold text-foreground mb-6">Types of Cookies We Use</h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Necessary Cookies</h3>
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      These cookies are essential for the website to function properly. They enable basic functions like page navigation, access to secure areas, and remember your cookie preferences.
                    </p>
                    <p className="text-sm text-muted-foreground italic">
                      These cookies cannot be disabled as they are necessary for the site to work.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Settings className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Functional Cookies</h3>
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      These cookies enable enhanced functionality and personalization, such as:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                      <li>Remembering your login details</li>
                      <li>Storing your language preferences</li>
                      <li>Personalizing content based on your interests</li>
                      <li>Remembering your location for weather updates</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Analytics Cookies</h3>
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                      <li>Number of visitors and page views</li>
                      <li>How visitors navigate through the site</li>
                      <li>Which pages are most popular</li>
                      <li>Time spent on each page</li>
                      <li>Any error messages encountered</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Marketing Cookies</h3>
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      These cookies track your online activity to help deliver relevant advertisements:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                      <li>Display personalized ads based on your interests</li>
                      <li>Limit the number of times you see an advertisement</li>
                      <li>Measure advertising campaign effectiveness</li>
                      <li>Share information with advertisers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
              <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We may use third-party services that set cookies on your device. These include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Google Analytics for website analytics</li>
                <li>Social media platforms for social sharing features</li>
                <li>Payment processors for secure transactions</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                These third parties have their own privacy policies and cookie policies.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
              <h2 className="text-2xl font-bold text-foreground mb-4">Managing Your Cookie Preferences</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Use our cookie preference tool to select which cookies you accept</li>
                <li>Configure your browser settings to block or delete cookies</li>
                <li>Use browser extensions or privacy tools</li>
                <li>Opt-out of third-party advertising cookies</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Please note that blocking certain cookies may affect your experience on our website and limit the functionality available to you.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
              <h2 className="text-2xl font-bold text-foreground mb-4">Cookie Duration</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Cookies can be either session cookies or persistent cookies:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Session cookies:</strong> Temporary cookies that are deleted when you close your browser</li>
                <li><strong>Persistent cookies:</strong> Remain on your device until they expire or you delete them manually</li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
              <h2 className="text-2xl font-bold text-foreground mb-4">Updates to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business operations. We encourage you to review this page periodically for the latest information.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                If you have any questions about our use of cookies, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>Email: swapnil@atomik.in</p>
                <p>Phone: +91 8793657598</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
