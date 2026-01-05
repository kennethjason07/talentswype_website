import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FoundingMember = () => {
    const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);

    useEffect(() => {
        // Load Font Awesome
        const faLink = document.createElement('link');
        faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
        faLink.rel = 'stylesheet';
        document.head.appendChild(faLink);

        // Load Tailwind CDN (isolated to this page if possible, but CDN is global)
        const tailwindScript = document.createElement('script');
        tailwindScript.src = 'https://cdn.tailwindcss.com';
        document.head.appendChild(tailwindScript);

        tailwindScript.onload = () => {
            window.tailwind.config = {
                theme: {
                    extend: {
                        colors: {
                            brand: {
                                dark: '#0f172a',
                                navy: '#1e293b',
                                gold: '#fbbf24',
                                goldlight: '#fde68a',
                                accent: '#3b82f6'
                            }
                        }
                    }
                }
            };
        };

        return () => {
            // Clean up? Removing scripts might not undo CSS changes from Tailwind CDN
            // document.head.removeChild(fontLink);
            // document.head.removeChild(faLink);
            // document.head.removeChild(tailwindScript);
        };
    }, []);

    const selectPlan = (planName, price) => {
        const upiId = "skmusic5733@okicici";
        const payeeName = "TalentSwype";
        const phone = "919764840628";
        
        // Handle UPI deep linking
        if (price !== 'general') {
            const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${price}&cu=INR&tn=${encodeURIComponent('Founding Member - ' + planName)}`;
            window.location.href = upiUrl;
        }

        let text = "";
        if (price === 'general') {
            text = "Hi TalentSwype, I am interested in the Founding Member campaign. (Attaching screenshot of payment if completed)";
        } else {
            text = `Hi TalentSwype, I have made the payment of ₹${price} for the ${planName} plan. (Attaching screenshot of payment)`;
        }
        
        const encodedText = encodeURIComponent(text);
        const link = `https://wa.me/${phone}?text=${encodedText}`;
        
        if (price === 'general') {
            window.open(link, '_blank');
        }
    };

    const openLegal = () => {
        setIsLegalModalOpen(true);
    };

    return (
        <div className="bg-slate-50 text-slate-800 antialiased">
            <style dangerouslySetInnerHTML={{ __html: `
                .gold-gradient {
                    background: linear-gradient(135deg, #fbbf24 0%, #d97706 100%);
                }
                .text-gold-gradient {
                    background: linear-gradient(135deg, #fbbf24 0%, #d97706 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .glass-card {
                    background: rgba(255, 255, 255, 0.03);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }
                .check-list li {
                    position: relative;
                    padding-left: 1.5rem;
                    margin-bottom: 0.5rem;
                }
                .check-list li::before {
                    content: '✓';
                    position: absolute;
                    left: 0;
                    color: #fbbf24;
                    font-weight: bold;
                }
                @keyframes sweep {
                    0%    {opacity: 0; transform: translateY(-10px)}
                    100%  {opacity: 1; transform: translateY(0)}
                }
                details[open] summary ~ * {
                    animation: sweep .5s ease-in-out;
                }
                details > summary {
                    list-style: none;
                }
                details > summary::-webkit-details-marker {
                    display: none;
                }
            `}} />

            {/* Sticky Header */}
            <nav className="fixed w-full z-50 bg-brand-dark/95 backdrop-blur border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex items-center gap-3">
                            <img src="/logo.png" 
                                 alt="TalentSwype" 
                                 className="h-10 w-10 rounded-full object-cover border border-white/10 bg-white/5"
                                 onError={(e) => {
                                     e.target.style.display='none'; 
                                     e.target.nextElementSibling.style.display='flex';
                                 }} />
                            <div className="hidden w-8 h-8 rounded bg-gradient-to-tr from-blue-600 to-cyan-400 items-center justify-center text-white font-bold text-lg">T</div>
                            <span className="text-white font-bold text-xl tracking-tight">TalentSwype</span>
                        </div>
                        <div className="hidden md:flex space-x-8">
                            <a href="#benefits" className="text-gray-300 hover:text-white transition">Benefits</a>
                            <a href="#tiers" className="text-gray-300 hover:text-white transition">Pricing</a>
                            <a href="#faq" className="text-gray-300 hover:text-white transition">FAQ</a>
                        </div>
                        <button onClick={() => selectPlan('General Inquiry', 'general')} className="gold-gradient text-white px-5 py-2 rounded-full font-semibold shadow-lg hover:shadow-yellow-500/20 transition transform hover:-translate-y-0.5 text-sm cursor-pointer">
                            Become a Founder
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="relative bg-brand-dark pt-32 pb-20 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-block px-4 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-sm font-semibold mb-6 animate-pulse">
                        Founding Member Access: Only 100 Spots Total
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
                        Launch Your Career with <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">India's Most Trusted Platform</span>
                    </h1>
                    
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Stop applying into the void. Get an ATS-proof resume, direct HR mentorship, and premium placement support. Join the revolution against "Resume Fatigue."
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                        <a href="#tiers" className="gold-gradient text-white text-lg px-8 py-4 rounded-lg font-bold shadow-xl hover:shadow-yellow-500/30 transition transform hover:scale-105">
                            Claim Founding Status
                        </a>
                        <a href="#benefits" className="bg-white/10 backdrop-blur border border-white/20 text-white text-lg px-8 py-4 rounded-lg font-medium hover:bg-white/20 transition">
                            View Benefits
                        </a>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-2">
                        <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-green-400 to-green-600 w-[78%]"></div>
                        </div>
                        <p className="text-gray-400 text-sm">78% of founding spots claimed</p>
                    </div>
                </div>
            </div>

            {/* Value Proposition Grid */}
            <section id="benefits" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Become a Founding Member?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">We are building the future of recruitment. Early adopters get lifetime bragging rights and immediate career acceleration.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-lg hover:shadow-xl transition">
                            <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 text-2xl mb-6">
                                <i className="fas fa-file-contract"></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">ATS-Proof Resume</h3>
                            <p className="text-gray-600">90% of resumes are rejected by bots. We build you a professional resume that passes Applicant Tracking Systems guarantees.</p>
                            <p className="mt-4 text-sm font-semibold text-blue-600">Value: ₹2,000</p>
                        </div>

                        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-lg hover:shadow-xl transition">
                            <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 text-2xl mb-6">
                                <i className="fas fa-chalkboard-teacher"></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Mentorship</h3>
                            <p className="text-gray-600">Get 1-on-1 guidance and mock interviews with real HR professionals to crack your next big opportunity.</p>
                            <p className="mt-4 text-sm font-semibold text-purple-600">Value: ₹4,500+</p>
                        </div>

                        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-lg hover:shadow-xl transition">
                            <div className="w-14 h-14 rounded-xl bg-yellow-100 flex items-center justify-center text-yellow-600 text-2xl mb-6">
                                <i className="fas fa-crown"></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">2026 App Premium</h3>
                            <p className="text-gray-600">When we launch in April 2026, you get Profile Gold Frames, Video Resume access, and top visibility to recruiters.</p>
                            <p className="mt-4 text-sm font-semibold text-yellow-600">Value: Priceless</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="tiers" className="py-20 bg-slate-900 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-yellow-400 font-bold tracking-wider uppercase text-sm">Limited Time Offer</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-6">Choose Your Level</h2>
                        <p className="text-gray-400">Lock in benefits worth up to ₹20,988 for a fraction of the cost.</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 items-start">
                        {/* Tier 1: NEW Starter 99/mo */}
                        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 order-2 lg:order-1 relative overflow-hidden group hover:border-blue-500/50 transition">
                            <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
                            <h3 className="text-xl font-bold text-white mb-2">Career <span className="text-blue-400">Starter</span></h3>
                            <p className="text-gray-400 text-sm mb-6">Start your journey today.</p>
                            
                            <div className="flex items-baseline mb-2">
                                <span className="text-5xl font-bold text-white">₹99</span>
                                <span className="text-gray-400 ml-2 text-sm">/ month</span>
                            </div>
                            <div className="text-blue-400 text-xs font-bold mb-6 tracking-wide uppercase">Single Month Access</div>

                            <ul className="space-y-4 mb-8 text-gray-300 text-sm">
                                <li className="flex items-center"><i className="fas fa-check text-blue-500 mr-2"></i> ATS-Friendly Resume</li>
                                <li className="flex items-center"><i className="fas fa-check text-blue-500 mr-2"></i> Priority Job Access</li>
                                <li className="flex items-center"><i className="fas fa-check text-blue-500 mr-2"></i> Industry Tips & Insights</li>
                                <li className="flex items-center text-slate-600 opacity-60"><i className="fas fa-times mr-3 ml-1"></i> No Mentorship Session</li>
                                <li className="flex items-center text-slate-600 opacity-60"><i className="fas fa-times mr-3 ml-1"></i> No Mock Interview</li>
                            </ul>

                            <button onClick={() => selectPlan('Career Starter (Monthly)', '99')} className="w-full py-3 rounded-lg bg-slate-700 hover:bg-slate-600 text-white font-semibold transition border border-slate-600 shadow-lg cursor-pointer">
                                Start for ₹99
                            </button>
                        </div>

                        {/* Tier 3: PREMIUM */}
                        <div className="bg-white rounded-2xl p-1 relative transform lg:scale-105 shadow-2xl shadow-yellow-500/20 z-10 order-1 lg:order-2">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg">
                                Best Value • 50 Spots Left
                            </div>
                            <div className="bg-white rounded-xl p-8 h-full flex flex-col">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Career Pro <span className="text-yellow-500">Plus</span></h3>
                                <p className="text-gray-500 text-sm mb-6">The Ultimate Career Acceleration.</p>
                                
                                <div className="flex items-baseline mb-2">
                                    <span className="text-5xl font-extrabold text-gray-900">₹999</span>
                                    <span className="text-gray-400 ml-2 line-through text-lg">₹20,988</span>
                                </div>
                                <div className="inline-block bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded mb-6 self-start">
                                    SAVE ₹19,989 (95% OFF)
                                </div>

                                <div className="space-y-4 mb-8 flex-grow">
                                    <div className="font-bold text-gray-900 border-b pb-2">Immediate Benefits:</div>
                                    <ul className="space-y-3 text-gray-600 text-sm">
                                        <li className="flex items-start"><i className="fas fa-check-circle text-yellow-500 mt-1 mr-2"></i> <span><strong>ATS-Friendly Resume</strong> (Guaranteed Pass)</span></li>
                                        <li className="flex items-start"><i className="fas fa-check-circle text-yellow-500 mt-1 mr-2"></i> <span><strong>3-Month Course</strong> (3 Sessions)</span></li>
                                        <li className="flex items-start"><i className="fas fa-check-circle text-yellow-500 mt-1 mr-2"></i> <span><strong>Mock Interview</strong> with HR</span></li>
                                        <li className="flex items-start"><i className="fas fa-check-circle text-yellow-500 mt-1 mr-2"></i> <span><strong>Placement Support</strong> until Day 1</span></li>
                                    </ul>

                                    <div className="font-bold text-gray-900 border-b pb-2 pt-2">2026 App Launch Bonus:</div>
                                    <ul className="space-y-3 text-gray-600 text-sm">
                                        <li className="flex items-start"><i className="fas fa-star text-yellow-500 mt-1 mr-2"></i> <span><strong>1 Year Premium FREE</strong></span></li>
                                        <li className="flex items-start"><i className="fas fa-crown text-yellow-500 mt-1 mr-2"></i> <span><strong>Gold Profile Frame</strong> & Top Visibility</span></li>
                                        <li className="flex items-start"><i className="fas fa-video text-yellow-500 mt-1 mr-2"></i> <span><strong>Video Resume</strong> Feature Access</span></li>
                                    </ul>
                                </div>

                                <button onClick={() => selectPlan('Career Pro Plus (Lifetime)', '999')} className="w-full gold-gradient text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-yellow-500/40 transition transform hover:-translate-y-1 cursor-pointer">
                                    Get Pro Plus Founder Status
                                </button>
                                <p className="text-center text-xs text-gray-400 mt-3">One-time payment. Lifetime founder badge.</p>
                            </div>
                        </div>

                        {/* Tier 2: Lite / Flexible */}
                        <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 relative order-3 lg:order-3">
                            <h3 className="text-xl font-bold text-white mb-2">Career Pro <span className="text-purple-400">Lite</span></h3>
                            <p className="text-gray-400 text-sm mb-6">Flexible durations for serious candidates.</p>
                            
                            <div className="bg-slate-900/50 p-4 rounded-lg mb-4 border border-slate-600">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-gray-300 font-medium">3 Months</span>
                                    <div className="text-right">
                                        <span className="text-2xl font-bold text-white">₹249</span>
                                    </div>
                                </div>
                                <p className="text-xs text-green-400 mb-3 text-right">Rounded Offer (Save 95%)</p>
                                <ul className="text-xs text-gray-300 space-y-1 mb-4">
                                    <li className="flex items-center"><i className="fas fa-check text-blue-500 mr-2"></i> ATS Resume (2 Revisions)</li>
                                    <li className="flex items-center"><i className="fas fa-check text-blue-500 mr-2"></i> Priority Job Access (3 Mo)</li>
                                    <li className="flex items-center"><i className="fas fa-check text-blue-500 mr-2"></i> Industry Insights</li>
                                </ul>
                                <button onClick={() => selectPlan('Career Pro Lite (3 Months)', '249')} className="w-full py-2 rounded bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium transition cursor-pointer">Select 3 Months</button>
                            </div>

                            <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-600 relative overflow-hidden">
                                 <div className="absolute top-0 right-0 bg-purple-600 text-white text-[10px] px-2 py-0.5 font-bold">BEST SELLER</div>
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-gray-300 font-medium">6 Months</span>
                                    <div className="text-right">
                                        <span className="text-2xl font-bold text-white">₹499</span>
                                    </div>
                                </div>
                                <p className="text-xs text-green-400 mb-3 text-right">Includes Mentorship!</p>
                                <ul className="text-xs text-gray-300 space-y-1 mb-4">
                                    <li className="flex items-center"><i className="fas fa-check text-blue-500 mr-2"></i> <strong>Everything in 3 Mo +</strong></li>
                                    <li className="flex items-center"><i className="fas fa-check text-purple-400 mr-2"></i> <strong>1 Mentorship Session</strong></li>
                                    <li className="flex items-center"><i className="fas fa-check text-purple-400 mr-2"></i> <strong>1 Mock Interview</strong></li>
                                </ul>
                                <button onClick={() => selectPlan('Career Pro Lite (6 Months)', '499')} className="w-full py-2 rounded bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium transition cursor-pointer">Select 6 Months</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Urgency Strip */}
            <section className="bg-gradient-to-r from-red-600 to-red-700 py-4">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-white font-medium flex items-center justify-center gap-2">
                        <i className="fas fa-clock"></i> 
                        Warning: Regular pricing of ₹499/month applies once these 100 spots are filled.
                    </p>
                </div>
            </section>

            {/* Detailed Feature Breakdown */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">What's Inside The Box?</h2>
                    
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-600">
                            <h4 className="text-lg font-bold text-slate-800 mb-2">📄 ATS-Friendly Resume Service</h4>
                            <p className="text-gray-600">A resume isn't just a document; it's code for a bot. We craft resumes specifically formatted to pass Applicant Tracking Systems used by 99% of large companies. Includes 2 revisions. Included in ALL plans.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-600">
                            <h4 className="text-lg font-bold text-slate-800 mb-2">🎓 Mentorship & Mock Interviews</h4>
                            <p className="text-gray-600">Exclusive to the 6-Month Plan (₹499) and Pro Plus (₹999). Get real feedback from HR professionals and industry experts to refine your pitch.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-yellow-500">
                            <h4 className="text-lg font-bold text-slate-800 mb-2">🤝 Personalized Placement Support (Pro Plus)</h4>
                            <p className="text-gray-600">We don't just give you a list. We process applications, communicate with HRs on your behalf, schedule interviews, and provide logistics support until Day 1 of your joining.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-16 bg-white border-t border-slate-200">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-slate-900 mb-10">Frequently Asked Questions</h2>
                    
                    <div className="space-y-4">
                        <details className="group bg-slate-50 p-4 rounded-lg border border-slate-200 cursor-pointer">
                            <summary className="flex justify-between items-center font-medium text-slate-800">
                                <span>When will the TalentSwype App launch?</span>
                                <span className="transition group-open:rotate-180"><i className="fas fa-chevron-down"></i></span>
                            </summary>
                            <div className="text-gray-600 mt-3 text-sm leading-relaxed">
                                The full TalentSwype mobile application is scheduled to launch in April 2026. Founding members will receive their premium app benefits automatically upon launch.
                            </div>
                        </details>

                        <details className="group bg-slate-50 p-4 rounded-lg border border-slate-200 cursor-pointer">
                            <summary className="flex justify-between items-center font-medium text-slate-800">
                                <span>Does the ₹99 plan include the mock interview?</span>
                                <span className="transition group-open:rotate-180"><i className="fas fa-chevron-down"></i></span>
                            </summary>
                            <div className="text-gray-600 mt-3 text-sm leading-relaxed">
                                No, the ₹99/month plan includes the ATS Resume, Priority Job Access, and Industry Insights. The Mentorship Session and Mock Interview are available starting from the 6-Month Lite plan (₹499) and the Pro Plus plan (₹999).
                            </div>
                        </details>

                        <details className="group bg-slate-50 p-4 rounded-lg border border-slate-200 cursor-pointer">
                            <summary className="flex justify-between items-center font-medium text-slate-800">
                                <span>Is the payment one-time or recurring?</span>
                                <span className="transition group-open:rotate-180"><i className="fas fa-chevron-down"></i></span>
                            </summary>
                            <div className="text-gray-600 mt-3 text-sm leading-relaxed">
                                This is a one-time payment for the specific duration selected (1 month, 3 months, 6 months, or Lifetime Founder status). There are no auto-debits.
                            </div>
                        </details>

                        <details className="group bg-slate-50 p-4 rounded-lg border border-slate-200 cursor-pointer">
                            <summary className="flex justify-between items-center font-medium text-slate-800">
                                <span>How do I access the priority jobs?</span>
                                <span className="transition group-open:rotate-180"><i className="fas fa-chevron-down"></i></span>
                            </summary>
                            <div className="text-gray-600 mt-3 text-sm leading-relaxed">
                                Once you join, you will be added to our exclusive Founding Member distribution list where priority job openings are shared 3 days before they go public.
                            </div>
                        </details>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-brand-dark border-t border-slate-800 pt-12 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div className="col-span-1 md:col-span-2">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-white text-xs font-bold">T</div>
                                <span className="text-white font-bold text-lg">TalentSwype</span>
                            </div>
                            <p className="text-gray-400 text-sm max-w-xs">
                                The new rhythm of recruitment. Solving resume fatigue and connecting talent with opportunity.
                            </p>
                        </div>
                        <div>
                            <h5 className="text-white font-bold mb-4">Legal</h5>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><button onClick={openLegal} className="hover:text-white text-left">Privacy Policy</button></li>
                                <li><button onClick={openLegal} className="hover:text-white text-left">Terms of Service</button></li>
                                <li><button onClick={openLegal} className="hover:text-white text-left">Refund Policy</button></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-white font-bold mb-4">Contact</h5>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>admin@talentswype.com</li>
                                <li>Pune, Maharashtra, India</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-500 text-sm">© 2026 TalentSwype. All rights reserved.</p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <a href="https://www.linkedin.com/company/talent-swype/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition transform hover:scale-110">
                                <i className="fab fa-linkedin fa-lg"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Legal Modal */}
            {isLegalModalOpen && (
                <div className="fixed inset-0 z-[110] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] flex flex-col relative">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-slate-50 rounded-t-xl">
                            <h3 className="text-xl font-bold text-gray-900">Legal Information</h3>
                            <button onClick={() => setIsLegalModalOpen(false)} className="text-gray-400 hover:text-red-500 transition cursor-pointer">
                                <i className="fas fa-times text-xl"></i>
                            </button>
                        </div>

                        <div className="p-6 overflow-y-auto text-sm text-gray-600 leading-relaxed space-y-6">
                            <div>
                                <h4 className="font-bold text-gray-900 text-lg mb-2">Terms & Conditions</h4>
                                <p className="mb-2"><strong>Effective Date:</strong> January 2026</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li><strong>1. Acceptance & Contribution:</strong> By contributing, you agree to these Terms, the Privacy Policy, and Refund Policy. You acknowledge this contribution supports the pre-launch development of TalentSwype.</li>
                                    <li><strong>2. No Job Guarantee:</strong> TalentSwype is a career acceleration platform providing tools (resumes, mentorship). We <u>do not</u> guarantee a job offer, interview call, or specific salary. Employment outcomes depend on market conditions and third-party employer discretion. By contributing, you release us from any liability regarding employment outcomes.</li>
                                    <li><strong>3. Payment Security:</strong> We only accept payment through the specific QR code provided on this page. TalentSwype is not responsible for monetary loss if you transfer funds to any other unauthorized account.</li>
                                    <li><strong>4. App Launch Timeline:</strong> The TalentSwype mobile application is scheduled to launch in <strong>April 2026</strong>. You acknowledge that software development is subject to delays and this date is an estimate.</li>
                                    <li><strong>5. Intellectual Property:</strong> Resume formats and course materials provided are for your personal use only and may not be redistributed commercially.</li>
                                </ul>
                            </div>

                            <div className="border-t pt-4">
                                <h4 className="font-bold text-gray-900 text-lg mb-2">Privacy Policy & Consent</h4>
                                <p className="mb-2"><strong>Data Collection:</strong> We collect your Name, Email, Phone Number, and Resume details solely for the purpose of delivering career services (Resume optimization, Job matching).</p>
                                <p className="mb-2"><strong>Consent to Contact:</strong> By submitting your details, you explicitly consent to receive communications via WhatsApp, Email, SMS, or Call regarding your membership, service updates, and potential job opportunities. This consent overrides any DND registry status.</p>
                                <p><strong>Data Sharing:</strong> Your professional profile may be shared with potential recruiters and HR partners to facilitate job placement. We do not sell your personal data to third-party advertisers.</p>
                            </div>

                            <div className="border-t pt-4">
                                <h4 className="font-bold text-gray-900 text-lg mb-2">Refund & Cancellation Policy</h4>
                                <p><strong>Strict No-Refund Policy:</strong> Due to the immediate allocation of funds towards app development, mentor compensation, and the non-recoverable nature of manual services (Resume writing), <strong>all contributions are final and non-refundable</strong>. Cancellations are not accepted once payment is verified.</p>
                            </div>

                            <div className="border-t pt-4 bg-slate-50 p-4 rounded-lg">
                                <p className="font-bold text-gray-800">Contact & Jurisdiction</p>
                                <p className="mt-1">For support or grievances: <a href="mailto:admin@talentswype.com" className="text-blue-600 underline">admin@talentswype.com</a></p>
                                <p className="mt-1">All disputes are subject to the exclusive jurisdiction of the courts in <strong>Pune, Maharashtra, India</strong>.</p>
                            </div>
                        </div>

                        <div className="p-4 border-t border-gray-100 bg-slate-50 rounded-b-xl text-center">
                            <button onClick={() => setIsLegalModalOpen(false)} className="bg-slate-800 text-white px-6 py-2 rounded-lg font-medium hover:bg-slate-700 transition cursor-pointer">
                                I Understand & Agree
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FoundingMember;
