# Martial Arts App

## **Phase 1: Accounts & Grundlagen erstellen**

### **Schritt 1: GitHub Account & Repository**

1. Gehe zu [github.com](https://github.com)
2. Erstelle einen Account (falls noch nicht vorhanden)
3. Klicke auf **"New repository"**
4. Repository-Name: `fighter-martial-arts-site`
5. Setze auf **"Public"** oder **"Private"**
6. Haken bei **"Add a README file"**
7. Klicke **"Create repository"**
8. Kopiere die Repository-URL für später


### **Schritt 2: Vercel Account erstellen**

1. Gehe zu [vercel.com](https://vercel.com)
2. Klicke auf **"Sign Up"**
3. Wähle **"Continue with GitHub"** (empfohlen)
4. Autorisiere Vercel für dein GitHub Account
5. Wähle den **"Hobby Plan"** (kostenlos)
6. Bestätige deine E-Mail-Adresse


### **Schritt 3: Neon Database Account**

1. Gehe zu [neon.tech](https://neon.tech)
2. Klicke auf **"Sign Up"**
3. Wähle **"Continue with GitHub"** (empfohlen)
4. Autorisiere Neon für dein GitHub Account
5. Bestätige deine E-Mail-Adresse


## **Phase 2: Database Setup**

### **Schritt 4: Neon Database erstellen**

1. Im Neon Dashboard klicke **"Create Project"**
2. Project Name: `fighter-db`
3. Database Name: `fighter_martial_arts`
4. Region: **"US East (Ohio)"** (empfohlen für Vercel)
5. Postgres Version: **"16"** (neueste)
6. Klicke **"Create Project"**


### **Schritt 5: Connection String kopieren**

1. Nach der Erstellung siehst du das Dashboard
2. Klicke auf **"Connection Details"**
3. Wähle **"Pooled connection"**
4. Kopiere die komplette **"Connection string"**
5. Speichere sie in einem Textdokument (brauchst du später)


### **Schritt 6: Database Schema erstellen**

1. Im Neon Dashboard klicke **"SQL Editor"**
2. Führe das SQL-Script für die Tabellen aus (users, fighters, events, etc.)
3. Führe das SQL-Script für die Beispieldaten aus
4. Verifiziere mit `SELECT * FROM users;` dass Daten vorhanden sind


## **Phase 3: Lokale Entwicklung**

### **Schritt 7: Node.js & npm installieren**

1. Gehe zu [nodejs.org](https://nodejs.org)
2. Lade die **"LTS Version"** herunter
3. Installiere Node.js (folge dem Installer)
4. Öffne Terminal/Kommandozeile
5. Prüfe Installation: `node --version` und `npm --version`


### **Schritt 8: Projekt lokal einrichten**

1. Erstelle einen neuen Ordner: `fighter-martial-arts-site`
2. Öffne Terminal in diesem Ordner
3. Initialisiere das Projekt: `npm init -y`
4. Installiere Next.js: `npx create-next-app@latest . --typescript --tailwind --eslint --app`
5. Bestätige alle Fragen mit "Yes"


### **Schritt 9: Dependencies installieren**

1. Installiere alle benötigten Pakete:

1. `npm install @neondatabase/serverless`
2. `npm install drizzle-orm`
3. `npm install drizzle-kit`
4. `npm install bcryptjs`
5. `npm install @types/bcryptjs`
6. `npm install jsonwebtoken`
7. `npm install @types/jsonwebtoken`
8. `npm install lucide-react`
9. `npm install dotenv`





### **Schritt 10: Environment Variables einrichten**

1. Erstelle `.env.local` Datei im Projekt-Root
2. Füge deine Neon Connection String ein
3. Füge JWT_SECRET hinzu
4. Erstelle `.env.example` für andere Entwickler
5. Aktualisiere `.gitignore` um `.env.local` auszuschließen


## **Phase 4: Code Development**

### **Schritt 11: Projekt-Struktur erstellen**

1. Erstelle alle notwendigen Ordner (app, components, lib, etc.)
2. Erstelle die Database-Schema Datei
3. Erstelle die Utility-Funktionen
4. Erstelle die Authentication-Logik


### **Schritt 12: Pages & Components entwickeln**

1. Erstelle die Homepage
2. Erstelle die Login-Seite
3. Erstelle das Admin-Dashboard
4. Erstelle alle Fighter-Seiten
5. Erstelle die Event-Seiten
6. Erstelle die API-Routes


### **Schritt 13: Lokales Testen**

1. Starte den Development Server: `npm run dev`
2. Öffne `http://localhost:3000`
3. Teste alle Seiten und Funktionen
4. Teste Login mit: `admin@fighter.com` / `admin123`
5. Teste alle CRUD-Operationen im Admin-Bereich


## **Phase 5: Git & GitHub**

### **Schritt 14: Git Repository initialisieren**

1. Im Projekt-Ordner: `git init`
2. Füge alle Dateien hinzu: `git add .`
3. Erster Commit: `git commit -m "Initial commit: FIGHTER martial arts website"`
4. Verbinde mit GitHub: `git remote add origin [DEINE-REPO-URL]`
5. Push zu GitHub: `git push -u origin main`


### **Schritt 15: Repository auf GitHub verifizieren**

1. Gehe zu deinem GitHub Repository
2. Prüfe dass alle Dateien hochgeladen wurden
3. Prüfe dass `.env.local` NICHT sichtbar ist
4. Prüfe dass `.gitignore` korrekt funktioniert


## **Phase 6: Vercel Deployment**

### **Schritt 16: Vercel CLI installieren**

1. Installiere global: `npm install -g vercel`
2. Login: `vercel login`
3. Folge den Browser-Anweisungen
4. Bestätige Login im Terminal


### **Schritt 17: Projekt mit Vercel verbinden**

1. Im Projekt-Ordner: `vercel`
2. Beantworte alle Setup-Fragen
3. Wähle dein GitHub Repository
4. Bestätige Projekt-Name
5. Warte auf ersten Deployment


### **Schritt 18: Environment Variables in Vercel setzen**

1. Gehe zu [vercel.com/dashboard](https://vercel.com/dashboard)
2. Klicke auf dein Projekt
3. Gehe zu **"Settings"** → **"Environment Variables"**
4. Füge `DATABASE_URL` hinzu (alle Environments)
5. Füge `JWT_SECRET` hinzu (alle Environments)
6. Füge `NODE_ENV=production` hinzu (nur Production)


### **Schritt 19: Production Deployment**

1. Führe aus: `vercel --prod`
2. Warte auf Deployment-Abschluss
3. Kopiere die Live-URL
4. Teste die Live-Website


## **Phase 7: Database auf Production**

### **Schritt 20: Production Database Setup**

1. Gehe zu deiner Live-URL
2. Navigiere zu `/admin/setup` (falls Setup-Route vorhanden)
3. Oder führe Database-Setup über Vercel Functions aus
4. Verifiziere dass alle Tabellen erstellt wurden
5. Teste Login auf der Live-Website


### **Schritt 21: Finale Tests**

1. Teste alle Seiten auf der Live-Website
2. Teste Login-Funktionalität
3. Teste Admin-Dashboard
4. Teste alle CRUD-Operationen
5. Teste Responsive Design auf verschiedenen Geräten


## **Phase 8: Monitoring & Wartung**

### **Schritt 22: Vercel Analytics aktivieren**

1. Im Vercel Dashboard → **"Analytics"**
2. Aktiviere **"Web Analytics"**
3. Aktiviere **"Speed Insights"**
4. Konfiguriere Monitoring


### **Schritt 23: Domain Setup (Optional)**

1. Kaufe eine Domain (z.B. bei Namecheap, GoDaddy)
2. In Vercel: **"Settings"** → **"Domains"**
3. Füge deine Domain hinzu
4. Konfiguriere DNS-Records bei deinem Domain-Provider
5. Warte auf DNS-Propagation (bis zu 24h)


## **🎉 Projekt ist LIVE!**

### **📋 Finale Checkliste:**

- ✅ GitHub Account & Repository erstellt
- ✅ Vercel Account erstellt
- ✅ Neon Database erstellt & konfiguriert
- ✅ Lokale Entwicklungsumgebung eingerichtet
- ✅ Alle Dependencies installiert
- ✅ Code entwickelt & lokal getestet
- ✅ Git Repository initialisiert & gepusht
- ✅ Vercel CLI installiert & konfiguriert
- ✅ Environment Variables gesetzt
- ✅ Production Deployment erfolgreich
- ✅ Database auf Production eingerichtet
- ✅ Alle Funktionen getestet
- ✅ Monitoring aktiviert


### **🔗 Wichtige URLs:**

- **Live Website:** `https://dein-projekt.vercel.app`
- **Vercel Dashboard:** `https://vercel.com/dashboard`
- **GitHub Repository:** `https://github.com/username/fighter-martial-arts-site`
- **Neon Database:** `https://console.neon.tech`


### **🔑 Login-Daten für Tests:**

- **Admin:** `admin@fighter.com` / `admin123`
- **User:** `max@example.com` / `user123`


**Deine FIGHTER Martial Arts Website ist jetzt vollständig live und einsatzbereit! 🥊🚀**
