module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/fs/promises [external] (fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/src/lib/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteTeamMember",
    ()=>deleteTeamMember,
    "getActivities",
    ()=>getActivities,
    "getAdminProfile",
    ()=>getAdminProfile,
    "getMessages",
    ()=>getMessages,
    "getTeamMembers",
    ()=>getTeamMembers,
    "logActivity",
    ()=>logActivity,
    "markMessageRead",
    ()=>markMessageRead,
    "readDB",
    ()=>readDB,
    "saveMessage",
    ()=>saveMessage,
    "saveTeamMember",
    ()=>saveTeamMember,
    "updateAdminProfile",
    ()=>updateAdminProfile,
    "writeDB",
    ()=>writeDB
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
const DB_PATH = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "src/data/db.json");
async function readDB() {
    try {
        const data = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].readFile(DB_PATH, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading DB:", error);
        // Return sensible defaults if file is missing or corrupted
        return {
            services: [],
            projects: [],
            messages: [],
            activities: [],
            adminProfile: {
                username: "Admin",
                password: "admin123"
            },
            team: []
        };
    }
}
async function writeDB(data) {
    try {
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(DB_PATH, JSON.stringify(data, null, 2), "utf-8");
    } catch (error) {
        console.error("Error writing DB:", error);
    }
}
async function logActivity(type, action, details) {
    const db = await readDB();
    const newActivity = {
        id: Date.now().toString(),
        type,
        action,
        timestamp: new Date().toISOString(),
        details
    };
    db.activities = [
        newActivity,
        ...db.activities || []
    ];
    // Keep only the last 100 activities
    if (db.activities.length > 100) {
        db.activities = db.activities.slice(0, 100);
    }
    await writeDB(db);
}
async function getActivities() {
    const db = await readDB();
    return db.activities || [];
}
async function getMessages() {
    const db = await readDB();
    return db.messages || [];
}
async function saveMessage(msg) {
    const db = await readDB();
    const newMessage = {
        ...msg,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        read: false
    };
    db.messages = [
        newMessage,
        ...db.messages || []
    ];
    await writeDB(db);
}
async function markMessageRead(id) {
    const db = await readDB();
    db.messages = (db.messages || []).map((m)=>m.id === id ? {
            ...m,
            read: true
        } : m);
    await writeDB(db);
}
async function getAdminProfile() {
    const db = await readDB();
    return db.adminProfile || {
        username: "Admin",
        password: "admin123"
    };
}
async function updateAdminProfile(data) {
    const db = await readDB();
    db.adminProfile = {
        ...db.adminProfile || {
            username: "Admin",
            password: "admin123"
        },
        ...data
    };
    await writeDB(db);
}
async function getTeamMembers() {
    const db = await readDB();
    return (db.team || []).sort((a, b)=>(a.order || 0) - (b.order || 0));
}
async function saveTeamMember(member) {
    const db = await readDB();
    db.team = db.team || [];
    if (member.id) {
        db.team = db.team.map((m)=>m.id === member.id ? {
                ...m,
                ...member
            } : m);
    } else {
        member.id = Date.now().toString();
        db.team.push(member);
    }
    await writeDB(db);
}
async function deleteTeamMember(id) {
    const db = await readDB();
    if (!db.team) return;
    db.team = db.team.filter((m)=>m.id !== id);
    await writeDB(db);
}
}),
"[project]/src/app/api/admin/activities/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-route] (ecmascript)");
;
;
async function GET() {
    const activities = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getActivities"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(activities);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0m8lgyh._.js.map