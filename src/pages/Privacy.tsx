import React from 'react';
import { Shield, Lock, Eye, Database, Bell, FileText } from 'lucide-react';
import { Card } from '../components/ui/Card';

const Privacy = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Lock className="h-16 w-16 text-purple-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Quick Summary */}
        <Card className="mb-8 bg-purple-50 p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Eye className="h-6 w-6 mr-2 text-purple-600" />
            Key Points Summary
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>We only collect essential information needed for medicine identification</li>
            <li>Your images are processed instantly and never stored permanently</li>
            <li>We use industry-standard security measures to protect your data</li>
            <li>You have full control over your data and can request deletion</li>
          </ul>
        </Card>

        {/* Data Collection */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Database className="h-6 w-6 mr-2 text-purple-600" />
            Information We Collect
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-3">Essential Data</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Medicine images you upload</li>
                <li>• Device type and browser information</li>
                <li>• App usage statistics</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-3">We Don't Collect</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Personal health information</li>
                <li>• Financial information</li>
                <li>• Social media profiles</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Data Usage */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <FileText className="h-6 w-6 mr-2 text-purple-600" />
            How We Use Your Data
          </h2>
          <Card className="p-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Medicine Identification</h3>
                <p className="text-gray-700">Images are processed immediately through our AI system for medicine identification. Processing happens in real-time and images are not stored.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Service Improvement</h3>
                <p className="text-gray-700">Usage data helps us improve accuracy and user experience. All data is anonymized and aggregated.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Security Measures</h3>
                <p className="text-gray-700">System monitoring to prevent misuse and ensure platform security.</p>
              </div>
            </div>
          </Card>
        </section>

        {/* Data Protection */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Shield className="h-6 w-6 mr-2 text-purple-600" />
            How We Protect Your Data
          </h2>
          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="font-semibold mb-3">Security Measures</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• End-to-end encryption for all data transfers</li>
                <li>• Regular security audits and updates</li>
                <li>• Strict access controls and authentication</li>
                <li>• Immediate image deletion after processing</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Your Rights */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Bell className="h-6 w-6 mr-2 text-purple-600" />
            Your Privacy Rights
          </h2>
          <Card className="p-6">
            <div className="space-y-4">
              <p className="text-gray-700">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Request access to your data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of analytics collection</li>
                <li>Receive a copy of your data</li>
              </ul>
              <p className="text-gray-700">To exercise these rights, contact us at:</p>
              <p className="font-medium text-purple-600">privacy@medidentify.com</p>
            </div>
          </Card>
        </section>

        {/* Contact Information */}
        <Card className="bg-purple-50 p-6">
          <h2 className="text-xl font-semibold mb-4">Questions or Concerns?</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about our privacy practices, please contact our Data Protection Officer:
          </p>
          <div className="text-purple-600">
            <p>Email: privacy@medidentify.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Hours: Monday - Friday, 9:00 AM - 5:00 PM EST</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Privacy;