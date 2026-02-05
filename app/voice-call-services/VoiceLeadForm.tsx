"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { FaPaperPlane, FaSpinner, FaUser, FaPhoneAlt, FaEnvelope, FaCheckCircle, FaLock } from "react-icons/fa";

export default function VoiceLeadForm() {
    const searchParams = useSearchParams();

    const [campaignType, setCampaignType] = useState("Broadcasting");
    const [volume, setVolume] = useState("10k");
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [website, setWebsite] = useState(""); // Honeypot

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState<{ mobile?: string, email?: string, name?: string }>({});

    // Auto-fill from URL
    useEffect(() => {
        const volParam = searchParams.get("volume");
        if (volParam) setVolume(volParam);
    }, [searchParams]);

    const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePhone = (phone: string) => /^[0-9]{10,15}$/.test(phone);

    const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value.replace(/\D/g, '');
        setMobile(val);
        if (errors.mobile) setErrors({ ...errors, mobile: undefined });
    };

    const submit = async () => {
        if (website) return; // Bot trap

        const newErrors: typeof errors = {};
        if (!name.trim()) newErrors.name = "Name is required";
        if (!mobile) newErrors.mobile = "Mobile is required";
        else if (!validatePhone(mobile)) newErrors.mobile = "Invalid mobile number";
        if (email && !validateEmail(email)) newErrors.email = "Invalid email";

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
                    name,
                    phone: mobile,
                    email: email || "Not Provided",
                    message: `Voice Service Inquiry:\nType: ${campaignType}\nVolume: ${volume}`,
                    website, // Check on server too
                }),
            });

            if (!res.ok) throw new Error("Failed");
            setSubmitted(true);
        } catch (err) {
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitted) return (
        <div className="p-8 rounded-3xl bg-white/90 backdrop-blur-xl border border-white/60 shadow-2xl text-center animate-fade-in flex flex-col items-center justify-center min-h-[400px]">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <FaCheckCircle size={40} />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-800 mb-2">Quote Requested!</h3>
            <p className="text-slate-600 mb-6 max-w-xs">
                We've received your request for <strong>{campaignType}</strong> services. Our team will contact you shortly at <strong className="text-slate-900">{mobile}</strong>.
            </p>
            {email && (
                <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium mb-6">
                    Confirmation email sent to {email}
                </div>
            )}
            <button
                onClick={() => { setSubmitted(false); setName(""); setMobile(""); }}
                className="text-sm font-bold text-blue-600 hover:text-blue-700 hover:underline transition-colors"
            >
                Start New Request
            </button>
        </div>
    );

    return (
        <div className="p-5 sm:p-6 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)] relative group max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent rounded-3xl pointer-events-none"></div>

            <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">Get Your Custom Quote</h3>

                {/* Campaign Type */}
                <div className="mb-4">
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Campaign Type</label>
                    <div className="grid grid-cols-3 gap-2 p-1 bg-slate-100/50 rounded-xl border border-slate-200">
                        {["Broadcasting", "Auto-Dialer", "Both"].map(type => (
                            <button
                                key={type}
                                onClick={() => setCampaignType(type)}
                                className={`py-1.5 px-1 rounded-lg text-[10px] sm:text-xs font-bold transition-all duration-300 ${campaignType === type
                                    ? 'bg-white text-blue-600 shadow-md scale-[1.02]'
                                    : 'text-slate-500 hover:text-slate-700 hover:bg-white/50'
                                    }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Volume */}
                <div className="mb-6">
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Target Volume (Calls/Mo)</label>
                    <div className="grid grid-cols-3 gap-2 p-1 bg-slate-100/50 rounded-xl border border-slate-200">
                        {["10k", "100k", "1M+"].map(vol => (
                            <button
                                key={vol}
                                onClick={() => setVolume(vol)}
                                className={`py-1.5 px-1 rounded-lg text-[10px] sm:text-xs font-bold transition-all duration-300 ${volume === vol
                                    ? 'bg-cyan-500 text-white shadow-md shadow-cyan-200 scale-[1.02]'
                                    : 'text-slate-500 hover:text-slate-700 hover:bg-white/50'
                                    }`}
                            >
                                {vol}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Inputs */}
                <div className="space-y-3">
                    <input type="text" name="website" value={website} onChange={e => setWebsite(e.target.value)} className="hidden" autoComplete="off" />

                    <div className="relative group/input">
                        <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-blue-500 transition-colors text-xs" />
                        <input
                            placeholder="Your Name"
                            value={name} onChange={e => { setName(e.target.value); if (errors.name) setErrors({ ...errors, name: undefined }); }}
                            className={`w-full pl-10 pr-4 py-3 bg-slate-50/50 border rounded-xl text-slate-800 text-sm font-medium focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-slate-400 ${errors.name ? 'border-red-400 focus:border-red-400' : 'border-slate-200 focus:border-blue-400'}`}
                            maxLength={50}
                        />
                        {errors.name && <p className="text-red-500 text-[10px] absolute -bottom-4 right-1 font-semibold">{errors.name}</p>}
                    </div>

                    <div className="relative group/input">
                        <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-blue-500 transition-colors text-xs" />
                        <input
                            placeholder="Mobile Number *"
                            type="tel"
                            value={mobile} onChange={handleMobileChange}
                            className={`w-full pl-10 pr-4 py-3 bg-slate-50/50 border rounded-xl text-slate-800 text-sm font-medium focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-slate-400 ${errors.mobile ? 'border-red-400 focus:border-red-400' : 'border-slate-200 focus:border-blue-400'}`}
                            maxLength={15}
                        />
                        {errors.mobile && <p className="text-red-500 text-[10px] absolute -bottom-4 right-1 font-semibold">{errors.mobile}</p>}
                    </div>

                    <div className="relative group/input">
                        <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-blue-500 transition-colors text-xs" />
                        <input
                            placeholder="Work Email (Optional)"
                            type="email"
                            value={email} onChange={e => { setEmail(e.target.value); if (errors.email) setErrors({ ...errors, email: undefined }); }}
                            className={`w-full pl-10 pr-4 py-3 bg-slate-50/50 border rounded-xl text-slate-800 text-sm font-medium focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-slate-400 ${errors.email ? 'border-red-400 focus:border-red-400' : 'border-slate-200 focus:border-blue-400'}`}
                            maxLength={100}
                        />
                        {errors.email && <p className="text-red-500 text-[10px] absolute -bottom-4 right-1 font-semibold">{errors.email}</p>}
                    </div>
                </div>

                <button
                    onClick={submit}
                    disabled={isSubmitting}
                    className="w-full mt-6 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl shadow-lg shadow-blue-200/50 hover:shadow-xl hover:shadow-blue-300/50 hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group/btn"
                >
                    {isSubmitting ? (
                        <><FaSpinner className="animate-spin" /> Sending...</>
                    ) : (
                        <>
                            <span className="text-sm">Request Strategy & Pricing</span>
                            <FaPaperPlane className="group-hover/btn:translate-x-1 transition-transform text-sm" />
                        </>
                    )}
                </button>

                <p className="text-[10px] text-slate-400 text-center mt-3 flex items-center justify-center gap-1.5 opacity-80">
                    <FaLock size={10} /> 100% Secure. We comply with TRAI & DND regulations.
                </p>
            </div>
        </div>
    );
}
