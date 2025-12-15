import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database, FileText, Mail, UserCheck, Clock, Users, RefreshCw } from "lucide-react";
import { GeometricShapes } from "@/components/ui/GeometricShapes";

export default function Privacy() {
  return (
    <Layout>
      <section className="py-24 gradient-hero relative overflow-hidden">
        <GeometricShapes position="bottom-right" size="lg" opacity={0.1} />
        <GeometricShapes position="top-left" size="md" opacity={0.07} flip />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              Your privacy is important to us. Learn how we protect your data.
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
            className="prose prose-lg max-w-none"
          >
            <div className="bg-card rounded-2xl p-8 border border-border shadow-soft space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Lock className="w-6 h-6 text-primary" />
                  Introduction
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Atomik Agri-Tech ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our mobile application and services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Database className="w-6 h-6 text-primary" />
                  Information We Collect
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Personal Information</h3>
                    <p className="leading-relaxed">
                      We may collect personal information that you provide to us, including:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                      <li>Name, email address, and phone number</li>
                      <li>Farm location and acreage details</li>
                      <li>Drone pilot license and certification information</li>
                      <li>Payment and billing information</li>
                      <li>Communication preferences</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Automatically Collected Information</h3>
                    <p className="leading-relaxed">
                      When you access our services, we may automatically collect:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                      <li>Device information and identifiers</li>
                      <li>IP address and browser type</li>
                      <li>Usage data and analytics</li>
                      <li>Location data (with your permission)</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Eye className="w-6 h-6 text-primary" />
                  How We Use Your Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process bookings and transactions</li>
                  <li>Connect farmers with certified drone pilots</li>
                  <li>Send service notifications and updates</li>
                  <li>Respond to customer inquiries and support requests</li>
                  <li>Analyze usage patterns and improve user experience</li>
                  <li>Ensure platform security and prevent fraud</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-primary" />
                  Information Sharing and Disclosure
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We may share your information in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>With drone pilots to facilitate service delivery</li>
                  <li>With service providers who assist in our operations</li>
                  <li>To comply with legal requirements or protect our rights</li>
                  <li>In connection with a business transfer or merger</li>
                  <li>With your explicit consent</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  We do not sell your personal information to third parties.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-primary" />
                  Data Security
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <UserCheck className="w-6 h-6 text-primary" />
                  Your Rights
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Access and receive a copy of your personal data</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to or restrict certain processing activities</li>
                  <li>Withdraw consent at any time</li>
                  <li>Lodge a complaint with a supervisory authority</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Clock className="w-6 h-6 text-primary" />
                  Data Retention
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Users className="w-6 h-6 text-primary" />
                  Children's Privacy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <RefreshCw className="w-6 h-6 text-primary" />
                  Changes to This Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Mail className="w-6 h-6 text-primary" />
                  Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p>Email: swapnil@atomik.in</p>
                  <p>Phone: +91 8793657598</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
