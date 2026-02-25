---
name: deploy
description: Deploy the HomeSphere Risk Matrix app to Firebase Hosting. Use when the user wants to deploy, publish, or push the app live.
allowed-tools: Bash, Read, Grep, Glob
---

# Deploy to Firebase Hosting

Follow these steps in order when deploying.

## Step 1: Pre-deploy Safety Check

Before deploying, audit for sensitive data:

1. Run `git status` in the project root to see current state
2. Verify `firebase-config.js` is listed in `.gitignore` (this file contains API keys and must NEVER be committed or deployed publicly without protection)
3. Grep `index.html` for any hardcoded API keys, tokens, or secrets (patterns: `apiKey`, `secret`, `token`, `password`, `credential`)
4. If any sensitive data is found, **STOP** and alert the user before proceeding

## Step 2: Verify the Build

This is a single-file app (no build step), but verify it's valid:

1. Check that `index.html` exists in the project root
2. Check that `firebase-config.js` exists (needed for Firebase features to work in production)
3. Check that `firebase.json` has the correct hosting config with `"public": "."`
4. Report file sizes to the user so they know what's being deployed

## Step 3: Deploy

Run the Firebase deploy command:

```bash
firebase deploy --only hosting
```

If the deploy command is not found, tell the user to install it:
```bash
npm install -g firebase-tools
```

If not logged in, tell the user to run `firebase login` themselves (do not handle auth).

## Step 4: Post-deploy Verification

After successful deploy:

1. Report the hosting URL: `https://homesphere-92352.web.app`
2. Tell the user the deploy is complete and they can verify the live site
