
import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Cpu, 
  Globe, 
  CheckCircle2, 
  Zap, 
  Users, 
  ArrowRight, 
  ShieldCheck, 
  MessageSquareCode, 
  Rocket,
  ArrowLeft
} from 'lucide-react';

// --- Shared Components ---

const Header: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => onNavigate('/')}
        >
          <div className="bg-blue-600 p-2 rounded-lg shadow-lg shadow-blue-200">
            <Cpu className="text-white w-6 h-6" />
          </div>
          <span className="font-extrabold text-xl tracking-tight text-slate-900">
            Luke's <span className="text-blue-600">AI</span> Automation
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => onNavigate('/')} className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Home</button>
          <a href="#solutions" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Solutions</a>
          <a href="#process" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Our Process</a>
          <a href="#contact" className="px-5 py-2.5 bg-slate-900 text-white rounded-full text-sm font-bold hover:bg-slate-800 transition-all shadow-sm">
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
};

const Footer: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  return (
    <footer className="py-16 border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="bg-slate-900 p-2 rounded-xl">
              <Cpu className="text-white w-5 h-5" />
            </div>
            <span className="font-black text-xl text-slate-900 tracking-tight">Luke's AI Automation</span>
          </div>
          
          <nav className="flex gap-8 text-[14px] font-semibold text-slate-500">
             <button onClick={() => onNavigate('/')} className="hover:text-blue-600 transition-colors">Home</button>
             <button onClick={() => onNavigate('/privacy')} className="hover:text-blue-600 transition-colors">Privacy Policy</button>
             <button onClick={() => onNavigate('/terms')} className="hover:text-blue-600 transition-colors">Terms of Service</button>
          </nav>

          <p className="text-[14px] font-medium text-slate-400">
            © {new Date().getFullYear()} Luke's AI Automation.
          </p>
        </div>
      </div>
    </footer>
  );
};

// --- Page Components ---

const LandingPage: React.FC = () => {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">THE AI OPPORTUNITY FOR SMALL BUSINESS</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-[1.1]">
            Bridge the <span className="gradient-text">AI Gap</span><br />
            for Small Businesses
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-slate-600 mb-10 leading-relaxed">
            400 million small businesses worldwide know AI can transform their operations—but most aren't using it meaningfully yet. 
            I'm Luke, and <strong>Luke's AI Automations</strong> builds simple, custom AI solutions that make you more money or save you time... without the tech headaches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#contact" className="px-8 py-4 bg-blue-600 text-white rounded-full text-lg font-bold hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200 transition-all flex items-center gap-2 group">
              Apply for Custom Automation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#problem" className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full text-lg font-bold hover:bg-slate-50 transition-all">
              View the Stats
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="problem" className="py-24 px-4 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="stat-card p-10 rounded-[2.5rem] shadow-sm flex flex-col items-center text-center bg-white border-slate-100">
              <div className="bg-blue-50 p-4 rounded-2xl mb-6">
                <BarChart3 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-5xl font-black text-slate-900 mb-4 tracking-tighter">Up to 80%</h3>
              <p className="text-slate-600 font-medium leading-relaxed text-sm">
                Of small business owners see AI as essential or a game-changer for staying competitive and growing.
                <span className="text-slate-400 block mt-2 text-xs font-normal">(Goldman Sachs, Reimagine Main Street, Salesforce 2025-2026 surveys)</span>
              </p>
              <div className="mt-8 w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-full w-[80%] rounded-full"></div>
              </div>
            </div>
            <div className="stat-card p-10 rounded-[2.5rem] shadow-xl flex flex-col items-center text-center transform scale-105 bg-white z-10 border-blue-100 ring-4 ring-blue-50">
              <div className="bg-blue-600 p-4 rounded-2xl mb-6 shadow-md shadow-blue-200">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-5xl font-black text-slate-900 mb-4 tracking-tighter">55-68%</h3>
              <p className="text-slate-700 font-medium leading-relaxed text-sm">
                Of U.S. small businesses now use AI regularly — but most are only using it for basic tasks.
                <span className="text-slate-400 block mt-2 text-xs font-normal">(U.S. Chamber, QuickBooks, Thryv 2025)</span>
              </p>
              <div className="mt-8 w-full h-3 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                <div className="bg-blue-600 h-full w-[62%] rounded-full"></div>
              </div>
            </div>
            <div className="stat-card p-10 rounded-[2.5rem] shadow-sm flex flex-col items-center text-center bg-white border-slate-100">
              <div className="bg-red-50 p-4 rounded-2xl mb-6">
                <Zap className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter">Your Opportunity</h3>
              <p className="text-slate-600 font-medium leading-relaxed text-sm">
                Deep, custom AI that truly transforms your operations is still rare — that's where we come in to help you stand out and save/make real money.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900">Meaningful AI Implementation for Real Results</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              We don't just drop in a chatbot. We rebuild your key processes to run faster, smarter, and more profitably — saving hours, boosting revenue, and letting you focus on what matters.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { title: "Voice AI Agents", desc: "24/7 intelligent phone system that books appointments, answers questions, qualifies leads — never miss a customer, even off the clock.", icon: <Users className="w-6 h-6 text-blue-600" /> },
              { title: "Workflow Automation", desc: "Custom Make/Zapier builds that connect your tools, eliminate manual data entry, and wipe out repetitive admin tasks.", icon: <CheckCircle2 className="w-6 h-6 text-blue-600" /> },
              { title: "AI CRM Integration", desc: "Turn your CRM into a smart sales engine: automatic follow-ups, lead scoring based on real intent, and no more lost opportunities.", icon: <ShieldCheck className="w-6 h-6 text-blue-600" /> },
              { title: "Custom Data Processing", desc: "Automated weekly reports and insights that turn your data into actionable wins — get hours back and spot trends fast.", icon: <MessageSquareCode className="w-6 h-6 text-blue-600" /> }
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-white border border-slate-100 rounded-[2rem] hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all group relative">
                <div className="bg-slate-50 p-3 rounded-2xl w-fit mb-6 group-hover:bg-blue-50 transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4 text-slate-900">{item.title}</h4>
                <p className="text-slate-500 leading-relaxed text-[15px]">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="max-w-4xl mx-auto p-12 bg-white rounded-[3rem] border border-slate-100 shadow-2xl shadow-blue-100/50 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
              <Rocket className="w-32 h-32 text-blue-600" />
            </div>
            <h3 className="text-3xl font-black mb-6 text-slate-900">Ready to go beyond basic AI?</h3>
            <a href="#contact" className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white rounded-full text-xl font-bold hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200 transition-all group/btn">
              Book Free Discovery Call
              <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
            </a>
            <p className="mt-6 text-slate-500 font-medium">See how we can customize this for your business.</p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-24 px-4 bg-[#0a0f1c] text-white rounded-[3.5rem] mx-4 my-12 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full -mr-48 -mt-48"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tight">
                Custom AI Builds<br /><span className="text-blue-500">Tailored to Your Business.</span>
              </h2>
              <p className="text-slate-400 text-xl mb-12 leading-relaxed font-medium">
                Every small business is unique. We don't push cookie-cutter tools. I work directly with you to build exactly what you need — reclaiming your time, boosting revenue, and scaling without adding staff.
              </p>
              <ul className="space-y-8">
                {[
                  { title: "Custom pricing", desc: "One-time setup fee based on your needs + affordable monthly support to keep everything running smoothly" },
                  { title: "Direct access to me (Luke)", desc: "Quick responses for questions and updates whenever you need them" },
                  { title: "Designed to grow", desc: "Scalable architecture that evolves with your business from day one" }
                ].map((li, idx) => (
                  <li key={idx} className="flex items-start gap-5 group">
                    <div className="bg-blue-500/10 p-1.5 rounded-full border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                       <CheckCircle2 className="text-blue-500 w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-bold text-xl block text-white mb-1">{li.title}</span>
                      <p className="text-slate-400 leading-relaxed font-medium">{li.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-10">
              {[
                { step: "01", title: "Audit", desc: "We map your current manual tasks and pinpoint the highest-impact automation opportunities — the ones that save the most time or make the most money." },
                { step: "02", title: "Architect", desc: "I create a custom AI blueprint tailored to your exact tools, goals, and workflows — no generic solutions." },
                { step: "03", title: "Automate", desc: "We build, test, and deploy your solutions, with thorough checks for reliability — plus ongoing support to fix issues and adapt as your business changes." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-10 p-10 rounded-[2.5rem] bg-[#141b2d] border border-white/5 hover:border-blue-500/30 transition-all group relative">
                  <span className="text-5xl font-black text-blue-500/20 group-hover:text-blue-500/40 transition-colors leading-none">{item.step}</span>
                  <div>
                    <h4 className="text-3xl font-black mb-3 tracking-tight group-hover:text-blue-400 transition-colors">{item.title}</h4>
                    <p className="text-slate-400 leading-relaxed text-lg font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-4 relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-black mb-6 text-slate-900 tracking-tight">Start Your Transformation</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Fill out the form below to see if your business is a fit for our custom AI automation services.</p>
        </div>
        <div className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-[0_48px_96px_-24px_rgba(0,0,0,0.12)] border border-slate-100 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-2.5 bg-blue-600"></div>
          <div className="p-4 md:p-10 pt-12">
            <iframe 
              src="https://tally.so/embed/jaP164?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
              loading="lazy" 
              width="100%" 
              height="950" 
              title="Luke's AI Automation Application"
              style={{ border: 'none' }}
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

const PrivacyPolicy: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="pt-40 pb-20 px-4 max-w-4xl mx-auto">
      <button 
        onClick={() => onNavigate('/')}
        className="flex items-center gap-2 text-blue-600 font-bold mb-10 hover:gap-3 transition-all"
      >
        <ArrowLeft className="w-5 h-5" /> Back to Home
      </button>
      <div className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-black mb-8 text-slate-900 uppercase">Privacy Policy</h1>
        <p className="text-slate-500 mb-6 font-medium italic">Last updated February 09, 2026</p>
        <div className="text-slate-700 space-y-6 leading-relaxed">
          <p>
            This Privacy Notice for Luke's AI Automation ("we," "us," or "our"), describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Visit our website at http://lukesaiautomation.com or any website of ours that links to this Privacy Notice</li>
            <li>Use tools created by Luke's AI Automation.</li>
            <li>Engage with us in other related ways, including any marketing or events</li>
          </ul>
          <p>
            Questions or concerns? Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at lhmorrow@bookedaiwork.com.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 pt-4">SUMMARY OF KEY POINTS</h2>
          <p>This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.</p>
          
          <div className="space-y-4 border-l-4 border-blue-600 pl-6 py-2 bg-blue-50/50 rounded-r-xl">
            <p><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.</p>
            <p><strong>Do we process any sensitive personal information?</strong> We do not process sensitive personal information.</p>
            <p><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We process your information only when we have a valid legal reason to do so.</p>
            <p><strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties.</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 pt-4">TABLE OF CONTENTS</h2>
          <ol className="list-decimal pl-6 space-y-1 font-bold text-blue-600">
            <li>WHAT INFORMATION DO WE COLLECT?</li>
            <li>HOW DO WE PROCESS YOUR INFORMATION?</li>
            <li>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</li>
            <li>DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</li>
            <li>HOW LONG DO WE KEEP YOUR INFORMATION?</li>
            <li>HOW DO WE KEEP YOUR INFORMATION SAFE?</li>
            <li>DO WE COLLECT INFORMATION FROM MINORS?</li>
            <li>WHAT ARE YOUR PRIVACY RIGHTS?</li>
            <li>CONTROLS FOR DO-NOT-TRACK FEATURES</li>
            <li>DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</li>
            <li>DO WE MAKE UPDATES TO THIS NOTICE?</li>
            <li>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
            <li>HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</li>
          </ol>

          <h3 className="text-xl font-bold text-slate-900 pt-4 underline">1. WHAT INFORMATION DO WE COLLECT?</h3>
          <p><strong>Personal information you disclose to us:</strong> We collect personal information that you provide to us voluntarily when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>
          <p>Personal information may include names, phone numbers, email addresses, job titles, and contact or authentication data. Sensitive information is not processed. Payment data is handled securely by Stripe.</p>

          <h3 className="text-xl font-bold text-slate-900 pt-4 underline">2. HOW DO WE PROCESS YOUR INFORMATION?</h3>
          <p>We process your information to deliver and facilitate delivery of services, fulfill and manage orders, request feedback, and post testimonials.</p>

          <h3 className="text-xl font-bold text-slate-900 pt-4 underline">3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h3>
          <p>We may share information during business transfers (mergers, sale of assets) or in specific situations outlined in this notice.</p>

          <h3 className="text-xl font-bold text-slate-900 pt-4 underline">4. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</h3>
          <p>Yes, we offer AI automation tools. All personal information processed using our AI Products is handled in line with our Privacy Notice and our agreement with third parties to ensure high security.</p>

          <h3 className="text-xl font-bold text-slate-900 pt-4 underline">5. HOW LONG DO WE KEEP YOUR INFORMATION?</h3>
          <p>We keep your information as long as necessary to fulfill the purposes outlined in this notice, unless required by law.</p>

          <h3 className="text-xl font-bold text-slate-900 pt-4 underline">6. HOW DO WE KEEP YOUR INFORMATION SAFE?</h3>
          <p>We use appropriate technical and organizational measures to protect your data. However, no transmission over the internet is 100% secure.</p>

          <h3 className="text-xl font-bold text-slate-900 pt-4 underline">7. DO WE COLLECT INFORMATION FROM MINORS?</h3>
          <p>We do not knowingly collect data from children under 18 years of age.</p>

          <h3 className="text-xl font-bold text-slate-900 pt-4 underline">8. WHAT ARE YOUR PRIVACY RIGHTS?</h3>
          <p>You may withdraw your consent at any time. Depending on your location, you may have rights regarding access, correction, or deletion of your personal data.</p>

          <h3 className="text-xl font-bold text-slate-900 pt-4 underline">9. CONTROLS FOR DO-NOT-TRACK FEATURES</h3>
          <p>We do not currently respond to DNT browser signals as no industry standard exists.</p>

          <h3 className="text-xl font-bold text-slate-900 pt-4 underline">10. US RESIDENTS SPECIFIC PRIVACY RIGHTS</h3>
          <p>Residents of various US states (including CA, TX, etc.) have specific rights regarding access, copy, and deletion of personal data. We do not sell your personal information.</p>

          <h3 className="text-xl font-bold text-slate-900 pt-4 underline">11. UPDATES TO THIS NOTICE</h3>
          <p>We will update this notice as necessary to stay compliant with relevant laws.</p>

          <h3 className="text-xl font-bold text-slate-900 pt-4 underline">12. CONTACT US</h3>
          <p>Email: lhmorrow@bookedaiwork.com. Post: Luke's AI Automation TX, United States.</p>
        </div>
      </div>
    </div>
  );
};

const TermsOfService: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="pt-40 pb-20 px-4 max-w-4xl mx-auto">
      <button 
        onClick={() => onNavigate('/')}
        className="flex items-center gap-2 text-blue-600 font-bold mb-10 hover:gap-3 transition-all"
      >
        <ArrowLeft className="w-5 h-5" /> Back to Home
      </button>
      <div className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-black mb-8 text-slate-900 uppercase">Terms of Service</h1>
        <p className="text-slate-500 mb-6 font-medium italic">Last updated February 11, 2026</p>
        <div className="text-slate-700 space-y-6 leading-relaxed">
          <h2 className="text-2xl font-bold text-slate-900 pt-4">AGREEMENT TO OUR LEGAL TERMS</h2>
          <p>
            We are BookedAIWork ("Company," "we," "us," "our"), a company registered in __________, United States at BookedAIWork, __________. We operate the website http://bookedaiwork.com (the "Site"), as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").
          </p>
          <p>
            These Legal Terms constitute a legally binding agreement made between you and BookedAIWork. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 pt-4">TABLE OF CONTENTS</h2>
          <ol className="list-decimal pl-6 space-y-1 font-bold text-blue-600">
            <li>OUR SERVICES</li>
            <li>INTELLECTUAL PROPERTY RIGHTS</li>
            <li>USER REPRESENTATIONS</li>
            <li>PURCHASES AND PAYMENT</li>
            <li>SUBSCRIPTIONS</li>
            <li>REFUND POLICY</li>
            <li>PROHIBITED ACTIVITIES</li>
            <li>USER GENERATED CONTRIBUTIONS</li>
            <li>CONTRIBUTION LICENSE</li>
            <li>SERVICES MANAGEMENT</li>
            <li>PRIVACY POLICY</li>
            <li>TERM AND TERMINATION</li>
            <li>MODIFICATIONS AND INTERRUPTIONS</li>
            <li>GOVERNING LAW</li>
            <li>DISPUTE RESOLUTION</li>
            <li>CORRECTIONS</li>
            <li>DISCLAIMER</li>
            <li>LIMITATIONS OF LIABILITY</li>
            <li>INDEMNIFICATION</li>
            <li>USER DATA</li>
            <li>ELECTRONIC COMMUNICATIONS</li>
            <li>SMS TEXT MESSAGING</li>
            <li>CALIFORNIA USERS AND RESIDENTS</li>
            <li>MISCELLANEOUS</li>
            <li>CONTACT US</li>
          </ol>

          <h3 className="text-xl font-bold text-slate-900 pt-4 underline">1. OUR SERVICES</h3>
          <p>The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction where such distribution or use would be contrary to law.</p>

          <h3 className="text-xl font-bold text-slate-900 pt-4 underline">2. INTELLECTUAL PROPERTY RIGHTS</h3>
          <p>We are the owner or the licensee of all intellectual property rights in our Services. We grant you a non-exclusive, non-transferable, revocable license to access the Services for your internal business use.</p>

          <h3 className="text-xl font-bold text-slate-900 pt-4 underline">4. PURCHASES AND PAYMENT</h3>
          <p>We accept Visa, Mastercard, American Express, Discover, PayPal. All payments are processed through Stripe.</p>

          <h3 className="text-xl font-bold text-slate-900 pt-4 underline">5. SUBSCRIPTIONS</h3>
          <p>Your subscription will continue and automatically renew unless canceled. Billing is monthly. You can cancel at any time.</p>

          <h3 className="text-xl font-bold text-slate-900 pt-4 underline">6. REFUND POLICY</h3>
          <p className="bg-red-50 p-4 border-l-4 border-red-500 rounded-r-xl"><strong>All sales are final and no refund will be issued.</strong></p>

          <h3 className="text-xl font-bold text-slate-900 pt-4 underline">14. GOVERNING LAW</h3>
          <p>These Legal Terms and your use of the Services are governed by and construed in accordance with the laws of the State of Texas.</p>

          <h3 className="text-xl font-bold text-slate-900 pt-4 underline">17. DISCLAIMER</h3>
          <p className="uppercase font-bold text-sm">The services are provided on an as-is and as-available basis. You agree that your use will be at your sole risk.</p>

          <h3 className="text-xl font-bold text-slate-900 pt-4 underline">25. CONTACT US</h3>
          <p>BookedAIWork, United States. Phone: 4327705299. Email: lhmorrow@bookedaiwork.com</p>
        </div>
      </div>
    </div>
  );
};

// --- Root App ---

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  return (
    <div className="relative min-h-screen grid-bg overflow-x-hidden">
      <Header onNavigate={navigate} />
      <main>
        {currentPath === '/privacy' ? (
          <PrivacyPolicy onNavigate={navigate} />
        ) : currentPath === '/terms' ? (
          <TermsOfService onNavigate={navigate} />
        ) : (
          <LandingPage />
        )}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
};

export default App;
