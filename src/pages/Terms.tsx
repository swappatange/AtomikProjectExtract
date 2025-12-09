import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Mail, Phone, FileText } from "lucide-react";

export default function Terms() {
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
            <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-primary-foreground" />
            </div>
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Legal
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Terms & Conditions
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
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to Atomik. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our platform, you agree to be bound by these Terms.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Atomik provides an agri-tech platform connecting farmers with certified drone pilots for precision farming services. We facilitate the booking and management of drone spraying services.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. User Accounts</h2>
              <p className="text-muted-foreground leading-relaxed">
                To access certain features, you may need to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Bookings and Payments</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>All drone service bookings are subject to pilot availability</li>
                <li>Payment terms will be as agreed between the farmer and the service provider</li>
                <li>Cancellation policies apply as per the terms agreed at the time of booking</li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. User Responsibilities</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Provide accurate and complete information</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Do not misuse the platform or its services</li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on our platform, including text, graphics, logos, and software, is the property of Atomik or its licensors and is protected by intellectual property laws.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Atomik shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify and hold harmless Atomik, its officers, directors, employees, and agents from any claims arising from your use of our services.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Modifications</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. Continued use of our services after changes constitutes acceptance of the new Terms.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                For any questions about these Terms, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  swapnil@atomik.in
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +91 8793657598
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
