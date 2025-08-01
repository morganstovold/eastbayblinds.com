"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 sm:px-0 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Privacy Policy
              </h1>
              <p className="text-lg text-gray-600">
                Last updated: July 17, 2025
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="mb-8">
                This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
              </p>
              
              <p className="mb-8">
                We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">
                Interpretation and Definitions
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Interpretation
              </h3>
              <p className="mb-6">
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Definitions
              </h3>
              <p className="mb-4">For the purposes of this Privacy Policy:</p>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
                <li><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
                <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to East Bay Blinds.</li>
                <li><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</li>
                <li><strong>Country</strong> refers to: California, United States</li>
                <li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
                <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
                <li><strong>Service</strong> refers to the Website.</li>
                <li><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company.</li>
                <li><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself.</li>
                <li><strong>Website</strong> refers to East Bay Blinds, accessible from https://www.eastbayblinds.com/</li>
                <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">
                Collecting and Using Your Personal Data
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Types of Data Collected
              </h3>
              
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Personal Data
              </h4>
              <p className="mb-4">
                While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Phone number</li>
                <li>Address, State, Province, ZIP/Postal code, City</li>
                <li>Usage Data</li>
              </ul>
              
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Usage Data
              </h4>
              <p className="mb-4">
                Usage Data is collected automatically when using the Service.
              </p>
              <p className="mb-6">
                Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Tracking Technologies and Cookies
              </h3>
              <p className="mb-4">
                We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service.
              </p>
              <p className="mb-6">
                You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">
                Use of Your Personal Data
              </h2>
              <p className="mb-4">The Company may use Personal Data for the following purposes:</p>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li><strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.</li>
                <li><strong>To manage Your Account</strong>: to manage Your registration as a user of the Service.</li>
                <li><strong>For the performance of a contract</strong>: the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased.</li>
                <li><strong>To contact You</strong>: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication.</li>
                <li><strong>To provide You</strong> with news, special offers and general information about other goods, services and events which we offer.</li>
                <li><strong>To manage Your requests</strong>: To attend and manage Your requests to Us.</li>
                <li><strong>For business transfers</strong>: We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets.</li>
                <li><strong>For other purposes</strong>: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns.</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">
                Retention of Your Personal Data
              </h2>
              <p className="mb-6">
                The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">
                Transfer of Your Personal Data
              </h2>
              <p className="mb-6">
                Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">
                Delete Your Personal Data
              </h2>
              <p className="mb-6">
                You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You. You may update, amend, or delete Your information at any time by contacting Us to request access to, correct, or delete any personal information that You have provided to Us.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">
                Disclosure of Your Personal Data
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Business Transactions
              </h3>
              <p className="mb-6">
                If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Law enforcement
              </h3>
              <p className="mb-6">
                Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">
                Security of Your Personal Data
              </h2>
              <p className="mb-6">
                The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">
                Children's Privacy
              </h2>
              <p className="mb-6">
                Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">
                Links to Other Websites
              </h2>
              <p className="mb-6">
                Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">
                Changes to this Privacy Policy
              </h2>
              <p className="mb-6">
                We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page. We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">
                Contact Us
              </h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy, You can contact us:
              </p>
              <p className="mb-6">
                By phone number: <a href="tel:925-200-4521" className="text-primary hover:underline">(925) 200-4521</a>
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 