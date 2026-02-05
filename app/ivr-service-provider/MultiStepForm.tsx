"use client";
import { useState } from "react";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [calls, setCalls] = useState(200);
  const [industry, setIndustry] = useState("ecommerce");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [website, setWebsite] = useState(""); // Honeypot
  const [errors, setErrors] = useState<{ name?: string, mobile?: string, email?: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Progress Bar Width
  const progress = (step / 3) * 100;

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone: string) => /^[0-9]{10,15}$/.test(phone);

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, ''); // Remove non-digits
    setMobile(val);
    if (errors.mobile) setErrors({ ...errors, mobile: undefined }); // Clear error on type
  };

  const submit = async () => {
    // BOT TRAP
    if (website) return;

    // VALIDATION
    const newErrors: typeof errors = {};
    if (!name.trim()) newErrors.name = "Name is required.";
    if (!mobile) newErrors.mobile = "Mobile number is required.";
    else if (!validatePhone(mobile)) newErrors.mobile = "Enter a valid 10-15 digit number.";
    if (email && !validateEmail(email)) newErrors.email = "Enter a valid email address.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          phone: mobile,
          email: email || "Not Provided",
          message: `IVR Blueprint Request:\nIndustry: ${industry}\nEstimated Daily Calls: ${calls >= 10000 ? "10,000+" : calls}`,
        }),
      });

      if (!res.ok) throw new Error("Failed to send");

      setSubmitted(true);
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
    // TODO: wire to API/CRM
  };

  if (submitted) return (
    <div className="p-8 rounded-2xl bg-navy-800/80 backdrop-blur-lg border border-cyan-glow/30 text-white shadow-glow-lg animate-fade-in text-center">
      <div className="w-16 h-16 bg-cyan-glow/20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">🎉</div>
      <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-white">Blueprint Sent!</h3>
      <p className="text-slate-300 mt-2 text-sm leading-relaxed">
        We've emailed your <span className="text-cyan-glow font-semibold capitalize">{industry}</span> IVR strategy to <br /><strong className="text-white">{email}</strong>.
      </p>
      <button onClick={() => setSubmitted(false)} className="mt-6 text-sm text-cyan-glow underline hover:text-white transition">Start Over</button>
    </div>
  );

  return (
    <div className="relative p-1 rounded-2xl bg-gradient-to-b from-cyan-glow/20 to-transparent shadow-2xl">
      <div className="bg-navy-900/90 backdrop-blur-md rounded-xl p-6 border border-navy-700 relative overflow-hidden">

        {/* Glow Element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-glow/10 blur-[50px] rounded-full pointer-events-none"></div>

        <div className="relative z-10">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-white">Get Your IVR Blueprint</h3>
            <div className="text-xs font-mono text-cyan-glow px-2 py-1 bg-cyan-glow/10 rounded">Step {step}/3</div>
          </div>

          {/* Progress Bar */}
          <div className="h-1.5 w-full bg-navy-700 rounded-full mb-6 overflow-hidden">
            <div className="h-full bg-cyan-glow transition-all duration-500 ease-out" style={{ width: `${progress}%` }}></div>
          </div>

          <div className="min-h-[140px]">
            {step === 1 && (
              <div className="animate-fade-in-up">
                <label className="block text-slate-300 text-sm font-medium mb-3">Estimated Daily Calls?</label>
                <div className="relative">
                  <input
                    type="range" min="10" max="10000" step="50"
                    className="w-full h-2 bg-navy-700 rounded-lg appearance-none cursor-pointer accent-cyan-glow"
                    value={calls} onChange={(e) => setCalls(Number(e.target.value))}
                  />
                  <div className="mt-4 text-center">
                    <span className="text-2xl font-bold text-white">
                      {calls >= 10000 ? "Unlimited / 10,000+" : calls.toLocaleString()}
                    </span>
                    <span className="text-slate-400 text-sm ml-2">calls/day</span>
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <button onClick={() => setStep(2)} className="w-full py-3 bg-cyan-glow text-navy-900 font-bold rounded-lg hover:bg-cyan-400 transition shadow-glow">
                    Next Step ➔
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-in-up">
                <label className="block text-slate-300 text-sm font-medium mb-3">Which industry fits best?</label>
                <div className="grid grid-cols-2 gap-3">
                  {['ecommerce', 'hospital', 'startup', 'enterprise'].map((ind) => (
                    <button
                      key={ind}
                      onClick={() => { setIndustry(ind); }}
                      className={`p-3 rounded-lg border text-sm font-medium capitalize transition-all ${industry === ind ? 'bg-cyan-glow/20 border-cyan-glow text-white shadow-glow' : 'bg-navy-800 border-navy-700 text-slate-400 hover:border-slate-500'}`}
                    >
                      {ind}
                    </button>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  <button onClick={() => setStep(1)} className="w-1/3 py-3 bg-navy-800 text-white font-semibold rounded-lg hover:bg-navy-700 transition border border-navy-700">Back</button>
                  <button onClick={() => setStep(3)} className="w-2/3 py-3 bg-cyan-glow text-navy-900 font-bold rounded-lg hover:bg-cyan-400 transition shadow-glow">Next ➔</button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-fade-in-up space-y-4">
                {/* Honeypot Field - Hidden */}
                <input
                  type="text"
                  name="website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="hidden"
                  autoComplete="off"
                />

                <div>
                  <label className="block text-slate-300 text-xs font-medium mb-1">Your Name</label>
                  <input
                    placeholder="John Doe"
                    type="text"
                    autoComplete="off"
                    name="user_name_new_1"
                    className={`w-full p-3 rounded-lg bg-navy-800 border text-white focus:ring-1 outline-none transition ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-navy-600 focus:border-cyan-glow focus:ring-cyan-glow'}`}
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    maxLength={50}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1 animate-pulse">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-slate-300 text-xs font-medium mb-1">Mobile Number <span className="text-red-400">*</span></label>
                  <input
                    placeholder="9876543210"
                    type="tel"
                    autoComplete="off"
                    name="user_mobile_new_1"
                    className={`w-full p-3 rounded-lg bg-navy-800 border text-white focus:ring-1 outline-none transition ${errors.mobile ? 'border-red-500 focus:border-red-500' : 'border-navy-600 focus:border-cyan-glow focus:ring-cyan-glow'}`}
                    value={mobile}
                    onChange={handleMobileChange}
                    maxLength={15}
                  />
                  {errors.mobile && <p className="text-red-400 text-xs mt-1 animate-pulse">{errors.mobile}</p>}
                </div>
                <div>
                  <label className="block text-slate-300 text-xs font-medium mb-1">Email Address</label>
                  <input
                    placeholder="name@company.com"
                    type="email"
                    autoComplete="off"
                    name="user_email_new_1"
                    className={`w-full p-3 rounded-lg bg-navy-800 border text-white focus:ring-1 outline-none transition ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-navy-600 focus:border-cyan-glow focus:ring-cyan-glow'}`}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    maxLength={100}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1 animate-pulse">{errors.email}</p>}
                </div>

                <div className="mt-6 flex gap-3">
                  <button onClick={() => setStep(2)} className="w-1/3 py-3 bg-navy-800 text-white font-semibold rounded-lg hover:bg-navy-700 transition border border-navy-700">Back</button>
                  <button
                    onClick={submit}
                    disabled={isSubmitting}
                    className="w-2/3 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-glow-lg transition disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : "Send My Blueprint 🚀"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
