
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
          <a href="#about" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">About</a>
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

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Image and Tags */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative group">
              <img 
                src="https://res.cloudinary.com/dsvvtxd2b/image/upload/v1774387022/IMG_3322_iwjhxp.jpg" 
                alt="Luke - AI Automation Expert" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>
            
            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
              <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold border border-blue-100 shadow-sm">Industrial Engineer</span>
              <span className="px-4 py-2 bg-slate-900 text-white rounded-full text-sm font-bold shadow-md">AI Consultant</span>
              <span className="px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-sm font-bold border border-slate-200">Process Improvement</span>
              <span className="px-4 py-2 bg-white text-slate-500 rounded-full text-sm font-bold border border-slate-200 shadow-sm">DFW-Based</span>
            </div>
          </div>

          {/* Right Side: Content */}
          <div>
            <span className="text-sm font-bold text-blue-600 uppercase tracking-widest block mb-4">Meet Luke</span>
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-slate-900 leading-tight">
              I make AI simple so your business <span className="text-blue-600">saves real money.</span>
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed mb-10">
              <p>
                I'm an industrial engineer with a background in process efficiency and improvement. I spent years learning how to find waste, fix broken workflows, and make complex systems run better. Now I apply that same thinking to AI, helping small businesses cut costs and reclaim time without needing a tech team.
              </p>
              <p>
                Most business owners hear "AI" and think it's complicated or expensive. My job is to prove them wrong. I translate the technical stuff into plain language, identify exactly where AI can move the needle for your operation, and build solutions that actually get used.
              </p>
            </div>

            <div className="w-12 h-1 bg-blue-600 mb-10"></div>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "BACKGROUND", val: "Industrial Engineering process efficiency & waste reduction" },
                { label: "SPECIALTY", val: "AI implementation for small and mid-size businesses" },
                { label: "APPROACH", val: "Complex technology explained in plain, actionable language" },
                { label: "RESULT", val: "Real time and cost savings, not just demos and decks" }
              ].map((card, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
                  <span className="text-[10px] font-black text-blue-600 tracking-widest uppercase block mb-2">{card.label}</span>
                  <p className="text-sm font-bold text-slate-800 leading-snug">{card.val}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

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

      <AboutMe />

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
      <div className="prose prose-slate max-w-none text-slate-700">
        <h1 className="text-4xl font-black mb-2 text-slate-900 uppercase">PRIVACY POLICY</h1>
        <p className="text-slate-500 mb-8 font-medium">Last updated February 09, 2026</p>
        
        <div className="space-y-6 leading-relaxed">
          <p>This Privacy Notice for Luke's AI Automation ("we," "us," or "our"), describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Visit our website at http://lukesaiautomation or any website of ours that links to this Privacy Notice</li>
            <li>Engage with us in other related ways, including any marketing or events</li>
          </ul>
          <p>Questions or concerns? Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at lhmorrow@bookedaiwork.com.</p>

          <h2 className="text-2xl font-bold text-slate-900 pt-4 uppercase">SUMMARY OF KEY POINTS</h2>
          <p>This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.</p>
          
          <p><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about personal information you disclose to us.</p>
          <p><strong>Do we process any sensitive personal information?</strong> Some of the information may be considered "special" or "sensitive" in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. We do not process sensitive personal information.</p>
          <p><strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.</p>
          <p><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about how we process your information.</p>
          <p><strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties. Learn more about when and with whom we share your personal information.</p>
          <p><strong>How do we keep your information safe?</strong> We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about how we keep your information safe.</p>
          <p><strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about your privacy rights.</p>
          <p><strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by submitting a data subject access request, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</p>
          <p>Want to learn more about what we do with any information we collect? Review the Privacy Notice in full.</p>

          <h2 className="text-2xl font-bold text-slate-900 pt-4 uppercase">TABLE OF CONTENTS</h2>
          <ol className="list-decimal pl-6 space-y-1">
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

          <h3 className="text-xl font-bold text-slate-900 pt-4">1. WHAT INFORMATION DO WE COLLECT?</h3>
          <p><strong>Personal information you disclose to us</strong></p>
          <p><strong>In Short:</strong> We collect personal information that you provide to us.</p>
          <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>
          <p><strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>names</li>
            <li>phone numbers</li>
            <li>email addresses</li>
            <li>job titles</li>
            <li>contact or authentication data</li>
          </ul>
          <p><strong>Sensitive Information.</strong> We do not process sensitive information.</p>
          <p><strong>Payment Data.</strong> We may collect data necessary to process your payment if you choose to make purchases, such as your payment instrument number, and the security code associated with your payment instrument. All payment data is handled and stored by Stripe. You may find their privacy notice link(s) here: https://stripe.com/privacy.</p>
          <p>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>
          <p><strong>Google API</strong></p>
          <p>Our use of information received from Google APIs will adhere to Google API Services User Data Policy, including the Limited Use requirements.</p>

          <h3 className="text-xl font-bold text-slate-900 pt-4">2. HOW DO WE PROCESS YOUR INFORMATION?</h3>
          <p><strong>In Short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</p>
          <p>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>To deliver and facilitate delivery of services to the user. We may process your information to provide you with the requested service.</li>
            <li>To fulfill and manage your orders. We may process your information to fulfill and manage your orders, payments, returns, and exchanges made through the Services.</li>
            <li>To request feedback. We may process your information when necessary to request feedback and to contact you about your use of our Services.</li>
            <li>To post testimonials. We post testimonials on our Services that may contain personal information.</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-900 pt-4">3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h3>
          <p><strong>In Short:</strong> We may share information in specific situations described in this section and/or with the following third parties.</p>
          <p>We may need to share your personal information in the following situations:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-900 pt-4">4. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</h3>
          <p><strong>In Short:</strong> We offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies.</p>
          <p>As part of our Services, we offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies (collectively, "AI Products"). These tools are designed to enhance your experience and provide you with innovative solutions. The terms in this Privacy Notice govern your use of the AI Products within our Services.</p>
          <p><strong>Our AI Products</strong></p>
          <p>Our AI Products are designed for the following functions: AI automation</p>
          <p><strong>How We Process Your Data Using AI</strong></p>
          <p>All personal information processed using our AI Products is handled in line with our Privacy Notice and our agreement with third parties. This ensures high security and safeguards your personal information throughout the process, giving you peace of mind about your data's safety.</p>

          <h3 className="text-xl font-bold text-slate-900 pt-4">5. HOW LONG DO WE KEEP YOUR INFORMATION?</h3>
          <p><strong>In Short:</strong> We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.</p>
          <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).</p>
          <p>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>

          <h3 className="text-xl font-bold text-slate-900 pt-4">6. HOW DO WE KEEP YOUR INFORMATION SAFE?</h3>
          <p><strong>In Short:</strong> We aim to protect your personal information through a system of organizational and technical security measures.</p>
          <p>We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</p>

          <h3 className="text-xl font-bold text-slate-900 pt-4">7. DO WE COLLECT INFORMATION FROM MINORS?</h3>
          <p><strong>In Short:</strong> We do not knowingly collect data from or market to children under 18 years of age.</p>
          <p>We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at lhmorrow@bookedaiwork.com.</p>

          <h3 className="text-xl font-bold text-slate-900 pt-4">8. WHAT ARE YOUR PRIVACY RIGHTS?</h3>
          <p><strong>In Short:</strong> You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.</p>
          <p><strong>Withdrawing your consent:</strong> If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.</p>
          <p>However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</p>
          <p>If you have questions or comments about your privacy rights, you may email us at lhmorrow@bookedaiwork.com.</p>

          <h3 className="text-xl font-bold text-slate-900 pt-4">9. CONTROLS FOR DO-NOT-TRACK FEATURES</h3>
          <p>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.</p>
          <p>California law requires us to let you know how we respond to web browser DNT signals. Because there currently is not an industry or legal standard for recognizing or honoring DNT signals, we do not respond to them at this time.</p>

          <h3 className="text-xl font-bold text-slate-900 pt-4 uppercase">10. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h3>
          <p><strong>In Short:</strong> If you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you may have the right to request access to and receive details about the personal information we maintain about you and how we have processed it, correct inaccuracies, get a copy of, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. More information is provided below.</p>
          <p><strong>Categories of Personal Information We Collect</strong></p>
          <p>The table below shows the categories of personal information we have collected in the past twelve (12) months. The table includes illustrative examples of each category and does not reflect the personal information we collect from you. For a comprehensive inventory of all personal information we process, please refer to the section "WHAT INFORMATION DO WE COLLECT?"</p>
          
          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-slate-200 text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 p-2 text-left">Category</th>
                  <th className="border border-slate-200 p-2 text-left">Examples</th>
                  <th className="border border-slate-200 p-2 text-left">Collected</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 p-2">A. Identifiers</td><td className="border border-slate-200 p-2">Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name</td><td className="border border-slate-200 p-2 font-bold">NO</td></tr>
                <tr><td className="border border-slate-200 p-2">B. Personal information as defined in the California Customer Records statute</td><td className="border border-slate-200 p-2">Name, contact information, education, employment, employment history, and financial information</td><td className="border border-slate-200 p-2 font-bold">NO</td></tr>
                <tr><td className="border border-slate-200 p-2">C. Protected classification characteristics under state or federal law</td><td className="border border-slate-200 p-2">Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data</td><td className="border border-slate-200 p-2 font-bold">NO</td></tr>
                <tr><td className="border border-slate-200 p-2">D. Commercial information</td><td className="border border-slate-200 p-2">Transaction information, purchase history, financial details, and payment information</td><td className="border border-slate-200 p-2 font-bold">NO</td></tr>
                <tr><td className="border border-slate-200 p-2">E. Biometric information</td><td className="border border-slate-200 p-2">Fingerprints and voiceprints</td><td className="border border-slate-200 p-2 font-bold">NO</td></tr>
                <tr><td className="border border-slate-200 p-2">F. Internet or other similar network activity</td><td className="border border-slate-200 p-2">Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements</td><td className="border border-slate-200 p-2 font-bold">NO</td></tr>
                <tr><td className="border border-slate-200 p-2">G. Geolocation data</td><td className="border border-slate-200 p-2">Device location</td><td className="border border-slate-200 p-2 font-bold">NO</td></tr>
                <tr><td className="border border-slate-200 p-2">H. Audio, electronic, sensory, or similar information</td><td className="border border-slate-200 p-2">Images and audio, video or call recordings created in connection with our business activities</td><td className="border border-slate-200 p-2 font-bold">NO</td></tr>
                <tr><td className="border border-slate-200 p-2">I. Professional or employment-related information</td><td className="border border-slate-200 p-2">Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us</td><td className="border border-slate-200 p-2 font-bold">NO</td></tr>
                <tr><td className="border border-slate-200 p-2">J. Education Information</td><td className="border border-slate-200 p-2">Student records and directory information</td><td className="border border-slate-200 p-2 font-bold">NO</td></tr>
                <tr><td className="border border-slate-200 p-2">K. Inferences drawn from collected personal information</td><td className="border border-slate-200 p-2">Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual's preferences and characteristics</td><td className="border border-slate-200 p-2 font-bold">NO</td></tr>
                <tr><td className="border border-slate-200 p-2">L. Sensitive personal Information</td><td className="border border-slate-200 p-2"></td><td className="border border-slate-200 p-2 font-bold">NO</td></tr>
              </tbody>
            </table>
          </div>
          
          <p>We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:</p>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>Receiving help through our customer support channels;</li>
            <li>Participation in customer surveys or contests; and</li>
            <li>Facilitation in the delivery of our Services and to respond to your inquiries.</li>
          </ul>
          
          <p><strong>Sources of Personal Information</strong></p>
          <p>Learn more about the sources of personal information we collect in "WHAT INFORMATION DO WE COLLECT?"</p>
          <p><strong>How We Use and Share Personal Information</strong></p>
          <p>Learn more about how we use your personal information in the section, "HOW DO WE PROCESS YOUR INFORMATION?"</p>
          <p><strong>Will your information be shared with anyone else?</strong></p>
          <p>We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Learn more about how we disclose personal information to in the section, "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?"</p>
          <p>We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal information.</p>
          <p>We have not disclosed, sold, or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. We will not sell or share personal information in the future belonging to website visitors, users, and other consumers.</p>
          
          <p><strong>Your Rights</strong></p>
          <p>You have rights under certain US state data protection laws. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law. These rights include:</p>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>Right to know whether or not we are processing your personal data</li>
            <li>Right to access your personal data</li>
            <li>Right to correct inaccuracies in your personal data</li>
            <li>Right to request the deletion of your personal data</li>
            <li>Right to obtain a copy of the personal data you previously shared with us</li>
            <li>Right to non-discrimination for exercising your rights</li>
            <li>Right to opt out of the processing of your personal data if it is used for targeted advertising (or sharing as defined under California's privacy law), the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects ("profiling")</li>
          </ul>
          
          <p><strong>How to Exercise Your Rights</strong></p>
          <p>To exercise these rights, you can contact us by submitting a data subject access request, by emailing us at lhmorrow@bookedaiwork.com, or by referring to the contact details at the bottom of this document.</p>
          <p>Under certain US state data protection laws, you can designate an authorized agent to make a request on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with applicable laws.</p>
          
          <p><strong>Request Verification</strong></p>
          <p>Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. We will only use personal information provided in your request to verify your identity or authority to make the request. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes.</p>
          
          <p><strong>Appeals</strong></p>
          <p>Under certain US state data protection laws, if we decline to take action regarding your request, you may appeal our decision by emailing us at lhmorrow@bookedaiwork.com. We will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may submit a complaint to your state attorney general.</p>
          
          <p><strong>California "Shine The Light" Law</strong></p>
          <p>California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"</p>

          <h3 className="text-xl font-bold text-slate-900 pt-4">11. DO WE MAKE UPDATES TO THIS NOTICE?</h3>
          <p><strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>
          <p>We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.</p>

          <h3 className="text-xl font-bold text-slate-900 pt-4">12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h3>
          <p>If you have questions or comments about this notice, you may email us at lhmorrow@bookedaiwork.com or contact us by post at:</p>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 w-fit">
            <p>Luke's AI Automation</p>
            <p>TX</p>
            <p>United States</p>
          </div>

          <h3 className="text-xl font-bold text-slate-900 pt-4">13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h3>
          <p>You have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please fill out and submit a data subject access request.</p>
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
      <div className="prose prose-slate max-w-none text-slate-700">
        <h1 className="text-4xl font-black mb-2 text-slate-900 uppercase">TERMS OF SERVICE</h1>
        <p className="text-slate-500 mb-8 font-medium italic">Last updated February 11, 2026</p>
        
        <div className="space-y-6 leading-relaxed">
          <h2 className="text-2xl font-bold text-slate-900 pt-4 uppercase">AGREEMENT TO OUR LEGAL TERMS</h2>
          <p>
            We are Luke's AI Automation ("Company," "we," "us," "our"), a company registered in United States. We operate the website http://lukesaiautomation (the "Site"), as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").
          </p>
          <p>
            You can contact us by phone at 4327705299, email at lhmorrow@bookedaiwork.com, United States.
          </p>
          <p>
            These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and BookedAIWork, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
          </p>
          <p>
            The Services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Services. We recommend that you print a copy of these Legal Terms for your records.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 pt-4 uppercase">TABLE OF CONTENTS</h2>
          <ol className="list-decimal pl-6 space-y-1">
            <li>OUR SERVICES</li>
            <li>INTELLECTUAL PROPERTY RIGHTS</li>
            <li>USER REPRESENTATIONS</li>
            <li>PURCHASES AND PAYMENT</li>
            <li>SUBSCRIPTIONS</li>
            <li>POLICY</li>
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
            <li>ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</li>
            <li>SMS TEXT MESSAGING</li>
            <li>CALIFORNIA USERS AND RESIDENTS</li>
            <li>MISCELLANEOUS</li>
            <li>CONTACT US</li>
          </ol>

          <h3 className="text-xl font-bold text-slate-900 pt-4">1. OUR SERVICES</h3>
          <p>
            The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation...
          </p>

          <h3 className="text-xl font-bold text-slate-900 pt-4">2. INTELLECTUAL PROPERTY RIGHTS</h3>
          <p>
            We are the owner or the licensee of all intellectual property rights in our Services... SUBJECT to your compliance with these Legal Terms, we grant you a non-exclusive, non-transferable, revocable license to access the Services and download or print a copy of any portion of the Content...
          </p>

          <h3 className="text-xl font-bold text-slate-900 pt-4">3. USER REPRESENTATIONS</h3>
          <p>
            By using the Services, you represent and warrant that (1) you have the legal capacity and you agree to comply with these Legal Terms...
          </p>

          <h3 className="text-xl font-bold text-slate-900 pt-4">4. PURCHASES AND PAYMENT</h3>
          <p>We accept the following forms of payment:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Visa, Mastercard, American Express, Discover, PayPal</li>
          </ul>
          <p>
            You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services...
          </p>

          <h3 className="text-xl font-bold text-slate-900 pt-4">5. SUBSCRIPTIONS</h3>
          <p>
            Your subscription will continue and automatically renew unless canceled. The length of your billing cycle is monthly. You can cancel at any time by contacting us...
          </p>

          <h3 className="text-xl font-bold text-slate-900 pt-4">6. POLICY</h3>
          <p className="font-bold text-red-600">All sales are final and no refund will be issued.</p>

          <h3 className="text-xl font-bold text-slate-900 pt-4">7. PROHIBITED ACTIVITIES</h3>
          <p>
            You may not access or use the Services for any purpose other than that for which we make the Services available. As a user, you agree not to systematically retrieve data, trick or defraud, circumvent security features, disparage or harm us, etc.
          </p>

          <h3 className="text-xl font-bold text-slate-900 pt-4">8. USER GENERATED CONTRIBUTIONS</h3>
          <p>
            The Services does not offer users to submit or post content. If provided the opportunity, your contributions must not infringe proprietary rights...
          </p>

          <h3 className="text-xl font-bold text-slate-900 pt-4">9. CONTRIBUTION LICENSE</h3>
          <p>
            By submitting suggestions or other feedback, you agree that we can use and share such feedback for any purpose without compensation to you.
          </p>

          <h3 className="text-xl font-bold text-slate-900 pt-4">10. SERVICES MANAGEMENT</h3>
          <p>
            We reserve the right to monitor the Services for violations and take appropriate legal action.
          </p>

          <h3 className="text-xl font-bold text-slate-900 pt-4">11. PRIVACY POLICY</h3>
          <p>
            Please review our Privacy Policy at https://lukesaiautomation.com/policy. By using the Services, you agree to be bound by our Privacy Policy.
          </p>

          <h3 className="text-xl font-bold text-slate-900 pt-4">12. TERM AND TERMINATION</h3>
          <p>
            These Legal Terms shall remain in full force and effect while you use the Services. We reserve the right to deny access for any reason...
          </p>

          <h3 className="text-xl font-bold text-slate-900 pt-4">13. MODIFICATIONS AND INTERRUPTIONS</h3>
          <p>
            We reserve the right to change, modify, or remove the contents of the Services at any time without notice.
          </p>

          <h3 className="text-xl font-bold text-slate-900 pt-4">14. GOVERNING LAW</h3>
          <p>
            These Legal Terms and your use of the Services are governed by and construed in accordance with the laws of the State of Texas...
          </p>

          <h3 className="text-xl font-bold text-slate-900 pt-4">15. DISPUTE RESOLUTION</h3>
          <p>
            Parties agree to first attempt to negotiate any Dispute informally for at least thirty (30) days... If unable to resolve, the dispute will be finally and exclusively resolved by binding arbitration under the rules of the American Arbitration Association...
          </p>

          <h3 className="text-xl font-bold text-slate-900 pt-4">16. CORRECTIONS</h3>
          <p>
            We reserve the right to correct any errors, inaccuracies, or omissions on the Services.
          </p>

          <h3 className="text-xl font-bold text-slate-900 pt-4">17. DISCLAIMER</h3>
          <p className="uppercase font-bold text-sm">
            THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE WILL BE AT YOUR SOLE RISK...
          </p>

          <h3 className="text-xl font-bold text-slate-900 pt-4">18. LIMITATIONS OF LIABILITY</h3>
          <p className="uppercase font-bold text-sm">
            IN NO EVENT WILL WE BE LIABLE FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, OR PUNITIVE DAMAGES... OUR LIABILITY WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID BY YOU DURING THE SIX (6) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING.
          </p>

          <h3 className="text-xl font-bold text-slate-900 pt-4">19. INDEMNIFICATION</h3>
          <p>
            You agree to defend, indemnify, and hold us harmless from and against any loss, damage, or liability arising out of your use of the Services or breach of these terms.
          </p>

          <h3 className="text-xl font-bold text-slate-900 pt-4">20. USER DATA</h3>
          <p>
            We will maintain certain data that you transmit. You are solely responsible for all data that you transmit or that relates to any activity you have undertaken.
          </p>

          <h3 className="text-xl font-bold text-slate-900 pt-4">21. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</h3>
          <p>
            Visiting the Services, sending emails, and completing forms constitute electronic communications. You consent to receive electronic communications and use electronic signatures.
          </p>

          <h3 className="text-xl font-bold text-slate-900 pt-4">22. SMS TEXT MESSAGING</h3>
          <p>
            By opting into any Twilio text messaging program, you expressly consent to receive text messages for reminders, alerts, and updates. You can opt out by replying "STOP".
          </p>

          <h3 className="text-xl font-bold text-slate-900 pt-4">23. CALIFORNIA USERS AND RESIDENTS</h3>
          <p>
            California residents may contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs.
          </p>

          <h3 className="text-xl font-bold text-slate-900 pt-4">24. MISCELLANEOUS</h3>
          <p>
            These Legal Terms and any policies posted by us constitute the entire agreement. Failure to enforce any right does not waive it.
          </p>

          <h3 className="text-xl font-bold text-slate-900 pt-4">25. CONTACT US</h3>
          <p>In order to resolve a complaint, please contact us at:</p>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 w-fit">
            <p>Luke's AI Automation</p>
            <p>United States</p>
            <p>Phone: 4327705299</p>
            <p>lhmorrow@bookedaiwork.com</p>
          </div>
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
