import fs from "fs/promises";
import path from "path";
import { Service, Project, Message, Activity, AdminProfile, TeamMember } from "@/types";

const DB_PATH = path.join(process.cwd(), "src/data/db.json");

export interface DBData {
  services: Service[];
  projects: Project[];
  messages: Message[];
  activities: Activity[];
  adminProfile: AdminProfile;
  team: TeamMember[];
}

export async function readDB(): Promise<DBData> {
  try {
    const data = await fs.readFile(DB_PATH, "utf-8");
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
        username: process.env.ADMIN_USERNAME || "Admin", 
        password: process.env.ADMIN_PASSWORD || "admin123" 
      },
      team: []
    };
  }
}

export async function writeDB(data: DBData): Promise<void> {
  try {
    await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2), "utf-8");
  } catch (error) {
    console.error("Error writing DB:", error);
  }
}

// Helper functions for easy access
export async function logActivity(
  type: Activity["type"],
  action: string,
  details: string
): Promise<void> {
  const db = await readDB();
  const newActivity: Activity = {
    id: Date.now().toString(),
    type,
    action,
    timestamp: new Date().toISOString(),
    details
  };
  
  db.activities = [newActivity, ...(db.activities || [])];
  
  // Keep only the last 100 activities
  if (db.activities.length > 100) {
    db.activities = db.activities.slice(0, 100);
  }
  
  await writeDB(db);
}

export async function getActivities(): Promise<Activity[]> {
  const db = await readDB();
  return db.activities || [];
}

export async function getMessages(): Promise<Message[]> {
  const db = await readDB();
  return db.messages || [];
}

export async function saveMessage(msg: Omit<Message, "id" | "createdAt" | "read">): Promise<void> {
  const db = await readDB();
  const newMessage: Message = {
    ...msg,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    read: false,
  };
  
  db.messages = [newMessage, ...(db.messages || [])];
  await writeDB(db);
}

export async function markMessageRead(id: string): Promise<void> {
  const db = await readDB();
  db.messages = (db.messages || []).map(m => m.id === id ? { ...m, read: true } : m);
  await writeDB(db);
}

export async function getAdminProfile(): Promise<AdminProfile> {
  const db = await readDB();
  return db.adminProfile || { 
    username: process.env.ADMIN_USERNAME || "Admin", 
    password: process.env.ADMIN_PASSWORD || "admin123" 
  };
}

export async function updateAdminProfile(data: Partial<AdminProfile>): Promise<void> {
  const db = await readDB();
  db.adminProfile = { 
    ...(db.adminProfile || { 
      username: process.env.ADMIN_USERNAME || "Admin", 
      password: process.env.ADMIN_PASSWORD || "admin123" 
    }), 
    ...data 
  };
  await writeDB(db);
}

// Team helpers
export async function getTeamMembers(): Promise<TeamMember[]> {
  const db = await readDB();
  return (db.team || []).sort((a, b) => (a.order || 0) - (b.order || 0));
}

export async function saveTeamMember(member: Partial<TeamMember> & { id?: string }): Promise<void> {
  const db = await readDB();
  db.team = db.team || [];
  if (member.id) {
    db.team = db.team.map((m) => (m.id === member.id ? { ...m, ...member } as TeamMember : m));
  } else {
    member.id = Date.now().toString();
    db.team.push(member as TeamMember);
  }
  await writeDB(db);
}

export async function deleteTeamMember(id: string): Promise<void> {
  const db = await readDB();
  if (!db.team) return;
  db.team = db.team.filter((m) => m.id !== id);
  await writeDB(db);
}
