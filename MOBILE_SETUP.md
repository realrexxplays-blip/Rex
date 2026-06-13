# 📱 Rex Bot - Mobile Setup Guide

This guide will help you set up and run the Rex Discord Bot from your mobile device!

## 🔧 **Option 1: Using Termux (Android)**

Termux is a terminal emulator that lets you run Node.js on Android.

### Step 1: Install Termux
1. Download **Termux** from F-Droid (https://f-droid.org/en/packages/com.termux/)
   - Do NOT use Google Play Store version (it's outdated)

### Step 2: Update Termux
```bash
pkg update
pkg upgrade
```

### Step 3: Install Node.js
```bash
pkg install nodejs
```

### Step 4: Clone Your Bot Repository
```bash
pkg install git
git clone https://github.com/realrexxplays-blip/Rex.git
cd Rex
```

### Step 5: Install Dependencies
```bash
npm install
```

### Step 6: Set Up Environment
```bash
nano .env
```
- Press `Ctrl + X` then `Y` then `Enter` to save
- Add your bot token:
```
DISCORD_TOKEN=your_bot_token_here
```

### Step 7: Run the Bot
```bash
npm start
```

**Keep Termux running in the background while using Discord!**

---

## 📱 **Option 2: Using GitHub Web Editor (All Mobile Devices)**

Edit files directly on GitHub without needing a PC!

### Step 1: Go to Your Repository
1. Open GitHub in your mobile browser
2. Navigate to: `github.com/realrexxplays-blip/Rex`

### Step 2: Edit .env File
1. Click on `.env.example`
2. Tap the **pencil icon** (Edit this file)
3. Change the filename from `.env.example` to `.env`
4. Add your bot token
5. Scroll down and click **"Commit changes"**
6. Add a commit message and commit

### Step 3: Edit Files (if needed)
- Click any `.js` file
- Tap the **pencil icon** to edit
- Make changes and commit

---

## 🌐 **Option 3: Using Cloud Hosting (Recommended for Always-On Bot)**

### Heroku Setup (Free Alternative - Railway/Render)

#### Using Railway.app (Easiest)

1. Go to https://railway.app/
2. Click **"Start Project"**
3. Click **"Deploy from GitHub"**
4. Select your `realrexxplays-blip/Rex` repository
5. Railway will automatically detect `package.json`
6. Add environment variables:
   - Click **"Variables"**
   - Add `DISCORD_TOKEN` with your bot token
7. Click **"Deploy"**

**Your bot will now run 24/7 in the cloud!**

---

## 🎯 **Option 4: Using Visual Studio Code Mobile**

1. Download **VS Code** from your app store
2. Sign in with GitHub account
3. Open the Rex repository
4. Make edits directly on mobile
5. Commit and push changes

---

## 🤖 **Getting Your Discord Bot Token**

1. Go to https://discord.com/developers/applications
2. Click **"New Application"**
3. Name it **"Rex"**
4. Go to **"Bot"** tab → Click **"Add Bot"**
5. Under **TOKEN**, click **"Copy"** (Save this securely!)
6. Go to **"OAuth2"** → **"URL Generator"**
7. Select scopes: `bot`
8. Select permissions: `Administrator`
9. Copy the generated URL and visit it to invite your bot

---

## 📋 **Quick Mobile Troubleshooting**

| Issue | Solution |
|-------|----------|
| Bot won't start | Check your bot token in `.env` |
| Commands not showing | Restart the bot and wait 5 minutes |
| Can't edit files | Try GitHub mobile editor or Termux |
| Connection error | Check your internet connection |
| Bot offline | Keep Termux/Railway app running |

---

## ✅ **What's Next?**

Once your bot is running:
1. Invite it to your Discord server
2. Use `/help` to see all commands
3. Try `/ping` to test it works
4. Enjoy your 50+ command Discord bot!

---

## 💡 **Pro Tips**

- **Always keep bot token secret** - Never share it
- **Use a VPS** if you want 24/7 uptime (Railway, Render, or AWS)
- **Backup your code** on GitHub regularly
- **Update dependencies** occasionally: `npm update`

---

## 🆘 **Need Help?**

- Check the main README.md for more details
- Discord Bot issues? Visit discord.js docs: https://discord.js.org/
- GitHub issues: https://github.com/realrexxplays-blip/Rex/issues
