(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/services.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getServiceBySlug",
    ()=>getServiceBySlug,
    "services",
    ()=>services
]);
const services = [
    {
        slug: "construction",
        title: "Construction Works",
        shortDescription: "Expert construction services for commercial, residential, and infrastructure projects across Tanzania.",
        longDescription: "Cmakey Company Limited delivers high-quality construction works from the ground up. Our experienced team handles everything from site preparation and structural engineering to interior finishing, ensuring every project meets international standards while respecting local building codes and community needs.",
        features: [
            "Commercial & residential building construction",
            "Infrastructure and civil works",
            "Renovation & refurbishment projects",
            "Project management and supervision",
            "Quality assurance and compliance",
            "Site planning and feasibility studies"
        ],
        icon: "🏗️",
        heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"
    },
    {
        slug: "hospitality",
        title: "Hospitality Services",
        shortDescription: "Premier hospitality solutions covering accommodation, catering, and event management in Dar es Salaam.",
        longDescription: "Our hospitality division provides world-class services across accommodation, catering, conference facilities, and event management. We combine warm Tanzanian hospitality with international service standards to create memorable experiences for guests and clients alike.",
        features: [
            "Hotel and accommodation management",
            "Catering and food services",
            "Conference and event planning",
            "Corporate hospitality packages",
            "Staff training and management",
            "Venue setup and decoration"
        ],
        icon: "🏨",
        heroImage: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80"
    },
    {
        slug: "entertainment",
        title: "Entertainment Services",
        shortDescription: "Dynamic entertainment solutions for events, corporate functions, and cultural celebrations.",
        longDescription: "Cmakey's entertainment division brings creativity and professionalism to every occasion. From corporate events and product launches to cultural festivals and private parties, we provide end-to-end entertainment solutions that captivate audiences and leave lasting impressions.",
        features: [
            "Event production and management",
            "Live entertainment booking",
            "Audio-visual and staging equipment",
            "Corporate team-building activities",
            "Cultural and traditional events",
            "Brand activation campaigns"
        ],
        icon: "🎭",
        heroImage: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&q=80"
    },
    {
        slug: "clearing",
        title: "Clearing & Forwarding",
        shortDescription: "Efficient customs clearance and freight forwarding services through all Tanzanian ports and borders.",
        longDescription: "Navigate Tanzania's import and export regulations with confidence. Our clearing and forwarding experts handle all customs documentation, duty assessments, and port procedures—ensuring your cargo moves smoothly through Dar es Salaam Port and border crossings without unnecessary delays.",
        features: [
            "Customs documentation and filing",
            "Import and export clearance",
            "Duty and tax assessment support",
            "Port handling and inspection liaison",
            "Freight forwarding coordination",
            "Compliance with TCRA and TRA regulations"
        ],
        icon: "📦",
        heroImage: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=80"
    },
    {
        slug: "logistics",
        title: "Logistics Services",
        shortDescription: "Comprehensive logistics and supply chain management for businesses of all sizes.",
        longDescription: "From first-mile collection to last-mile delivery, Cmakey's logistics arm powers seamless supply chains across Tanzania and the East African region. We combine a modern fleet, experienced drivers, and robust tracking systems to ensure your goods arrive on time, every time.",
        features: [
            "Road freight and haulage",
            "Warehousing and distribution",
            "Fleet management services",
            "Cold-chain logistics",
            "Real-time cargo tracking",
            "Cross-border transportation"
        ],
        icon: "🚛",
        heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80"
    },
    {
        slug: "supply",
        title: "General Material Supply",
        shortDescription: "Reliable procurement and supply of general materials, equipment, and consumables.",
        longDescription: "Cmakey acts as a trusted procurement partner, sourcing and supplying a diverse range of materials—from construction supplies and industrial equipment to office consumables and perishables. Our supplier network ensures competitive pricing, quality assurance, and timely delivery.",
        features: [
            "Construction materials and hardware",
            "Office supplies and consumables",
            "Industrial and mechanical equipment",
            "Procurement and sourcing services",
            "Bulk supply agreements",
            "Quality inspection before delivery"
        ],
        icon: "🔩",
        heroImage: "https://images.unsplash.com/photo-1565138163291-2aa5a2c0f5aa?w=1200&q=80"
    }
];
function getServiceBySlug(slug) {
    return services.find((s)=>s.slug === slug);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ContactForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/services.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ContactForm() {
    _s();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        phone: "",
        subject: "",
        service: "",
        message: ""
    });
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const validate = ()=>{
        const e = {};
        if (!form.name.trim()) e.name = "Full name is required.";
        if (!form.email.trim()) e.email = "Email address is required.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Please enter a valid email address.";
        if (form.phone && !/^\+?[\d\s\-()]{7,15}$/.test(form.phone)) e.phone = "Please enter a valid phone number.";
        if (!form.message.trim()) e.message = "Message is required.";
        return e;
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) {
            setErrors(errs);
            return;
        }
        setErrors({});
        setIsLoading(true);
        // Simulate API call
        setTimeout(()=>{
            setIsLoading(false);
            setSubmitted(true);
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }, 1500);
    };
    if (submitted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-[2.5rem] p-12 md:p-20 text-center shadow-2xl border border-gray-50 animate-fade-in-up",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-green-100 rounded-full animate-ping opacity-20"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ContactForm.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                            size: 48,
                            className: "text-green-500 relative z-10"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ContactForm.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ContactForm.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-3xl font-black text-brand-navy mb-4",
                    children: "Message Received!"
                }, void 0, false, {
                    fileName: "[project]/src/components/ContactForm.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500 text-lg leading-relaxed max-w-md mx-auto",
                    children: "Thank you for reaching out to Cmakey Company Limited. One of our experts will review your inquiry and contact you within 24 hours."
                }, void 0, false, {
                    fileName: "[project]/src/components/ContactForm.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setSubmitted(false),
                    className: "mt-10 text-brand-gold font-bold hover:underline",
                    children: "Send another message"
                }, void 0, false, {
                    fileName: "[project]/src/components/ContactForm.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ContactForm.tsx",
            lineNumber: 52,
            columnNumber: 7
        }, this);
    }
    const field = (id, label, type = "text", placeholder = "")=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    htmlFor: id,
                    className: "block text-sm font-medium text-gray-700 mb-1.5",
                    children: [
                        label,
                        " ",
                        id !== "phone" && id !== "service" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-red-500",
                            children: "*"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ContactForm.tsx",
                            lineNumber: 84,
                            columnNumber: 56
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ContactForm.tsx",
                    lineNumber: 80,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    id: id,
                    type: type,
                    value: form[id],
                    onChange: (e)=>setForm({
                            ...form,
                            [id]: e.target.value
                        }),
                    placeholder: placeholder,
                    className: `w-full px-4 py-3 rounded-xl border text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all ${errors[id] ? "border-red-400 bg-red-50" : "border-gray-200 bg-white"}`
                }, void 0, false, {
                    fileName: "[project]/src/components/ContactForm.tsx",
                    lineNumber: 86,
                    columnNumber: 7
                }, this),
                errors[id] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-500 text-xs mt-1",
                    children: errors[id]
                }, void 0, false, {
                    fileName: "[project]/src/components/ContactForm.tsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ContactForm.tsx",
            lineNumber: 79,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "bg-white rounded-3xl p-8 md:p-10 shadow-lg space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid sm:grid-cols-2 gap-5",
                children: [
                    field("name", "Full Name", "text", "e.g. John Doe"),
                    field("email", "Email Address", "email", "you@example.com")
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ContactForm.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid sm:grid-cols-2 gap-5",
                children: [
                    field("phone", "Phone Number", "tel", "+255 XXX XXX XXX"),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "subject",
                                className: "block text-sm font-medium text-gray-700 mb-1.5",
                                children: "Subject"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContactForm.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "subject",
                                type: "text",
                                value: form.subject,
                                onChange: (e)=>setForm({
                                        ...form,
                                        subject: e.target.value
                                    }),
                                placeholder: "How can we help?",
                                className: "w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/50"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContactForm.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ContactForm.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ContactForm.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "service",
                        className: "block text-sm font-medium text-gray-700 mb-1.5",
                        children: "Service of Interest"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactForm.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: "service",
                        value: form.service,
                        onChange: (e)=>setForm({
                                ...form,
                                service: e.target.value
                            }),
                        className: "w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/50 bg-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "Select a service..."
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContactForm.tsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["services"].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: s.slug,
                                    children: s.title
                                }, s.slug, false, {
                                    fileName: "[project]/src/components/ContactForm.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "other",
                                children: "Other / General Inquiry"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContactForm.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ContactForm.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ContactForm.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "message",
                        className: "block text-sm font-medium text-gray-700 mb-1.5",
                        children: [
                            "Message ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-red-500",
                                children: "*"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContactForm.tsx",
                                lineNumber: 154,
                                columnNumber: 19
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ContactForm.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        id: "message",
                        rows: 5,
                        value: form.message,
                        onChange: (e)=>setForm({
                                ...form,
                                message: e.target.value
                            }),
                        placeholder: "Tell us about your project or inquiry...",
                        className: `w-full px-4 py-3 rounded-xl border text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/50 resize-none transition-all ${errors.message ? "border-red-400 bg-red-50" : "border-gray-200"}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactForm.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    errors.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-500 text-xs mt-1",
                        children: errors.message
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactForm.tsx",
                        lineNumber: 167,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ContactForm.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                disabled: isLoading,
                className: `w-full flex items-center justify-center gap-3 py-4 bg-brand-navy text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-[1.01] ${isLoading ? "opacity-70 cursor-not-allowed" : "hover:bg-brand-navy-dark"}`,
                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ContactForm.tsx",
                            lineNumber: 177,
                            columnNumber: 13
                        }, this),
                        "Sending..."
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "Send Message ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/components/ContactForm.tsx",
                            lineNumber: 182,
                            columnNumber: 26
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/src/components/ContactForm.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-gray-400 text-center",
                children: "Your data is safe with us. We never share your information with third parties."
            }, void 0, false, {
                fileName: "[project]/src/components/ContactForm.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ContactForm.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
_s(ContactForm, "n0mO/PqwnoWzxu8L71o7T+sGRX0=");
_c = ContactForm;
var _c;
__turbopack_context__.k.register(_c, "ContactForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Send
]);
/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
            key: "1ffxy3"
        }
    ],
    [
        "path",
        {
            d: "m21.854 2.147-10.94 10.939",
            key: "12cjpa"
        }
    ]
];
const Send = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("send", __iconNode);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Send",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>CircleCheckBig
]);
/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21.801 10A10 10 0 1 1 17 3.335",
            key: "yps3ct"
        }
    ],
    [
        "path",
        {
            d: "m9 11 3 3L22 4",
            key: "1pflzl"
        }
    ]
];
const CircleCheckBig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("circle-check-big", __iconNode);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_0bv27-8._.js.map