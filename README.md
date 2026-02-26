# HomeSphere Robotics - Risk Assessment Platform

A single-page web application for enterprise risk management, featuring an interactive 5x5 risk heat map, RACI responsibility matrix, and company profile — built for HomeSphere Robotics.

## Quick Start (No Firebase)

The app works fully offline with localStorage. Just open `index.html` in a browser.

1. Clone the repo:
   ```bash
   git clone https://github.com/jacksliwoski/homesphere-risk-matrix.git
   cd homesphere-risk-matrix
   ```
2. Open `index.html` in any modern browser — that's it.

All data is saved to your browser's localStorage automatically.

## Setup with Firebase (Optional)

Firebase enables **real-time team collaboration** — when multiple team members are working in the app simultaneously (e.g., adding or editing risks concurrently during a workshop), changes sync instantly across all connected browsers. Without Firebase, data is stored in localStorage only and limited to a single device.

### 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **Add Project** and follow the prompts
3. Once created, go to **Project Settings > General > Your apps** and click the web icon (`</>`) to register a web app
4. Copy the `firebaseConfig` object from the setup screen

### 2. Enable Realtime Database

1. In the Firebase Console, go to **Build > Realtime Database**
2. Click **Create Database**
3. Choose a location and start in **test mode** (or configure security rules for production)

### 3. Connect the App to Firebase

1. Copy the example config file:
   ```bash
   cp firebase-config.example.js firebase-config.js
   ```
2. Open `firebase-config.js` and replace the placeholder values with your Firebase project credentials:
   ```javascript
   const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
       databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_PROJECT_ID.appspot.com",
       messagingSenderId: "YOUR_SENDER_ID",
       appId: "YOUR_APP_ID"
   };
   ```
3. `firebase-config.js` is gitignored — your credentials will not be committed.

### 4. Deploy to Firebase Hosting

1. Install Firebase CLI (if you haven't already):
   ```bash
   npm install -g firebase-tools
   ```
2. Log in:
   ```bash
   firebase login
   ```
3. Deploy:
   ```bash
   firebase deploy --only hosting
   ```
4. Your app will be live at `https://YOUR_PROJECT_ID.web.app`

## App Features

### Risk Heat Map (Heatmap View)

The main view — a 5x5 color-coded risk matrix plotting risks by likelihood vs. impact.

- **Add a Risk**: Click "+ Add Risk" to open the risk form. Enter a title, select likelihood (1-5), and use the weighted impact calculator across four categories (Trust & Reputation, Operational, Legal & Regulatory, Enterprise Value). Add justification notes for your scoring.
- **View Risks**: Click any cell on the grid to see all risks at that likelihood/impact intersection. Expand a risk card to view full details including scoring justifications and impact breakdown.
- **Edit/Delete Risks**: From the expanded detail view, use the Edit or Delete buttons.
- **Risk Appetite Threshold**: The dark boundary line on the grid shows the organization's risk appetite. Risks above/right of the line exceed the threshold. Adjust it via the Settings gear icon.
- **Stats Dashboard**: Shows total risk count, counts by severity level (Critical, High, Medium, Low), and average risk score.

### Weighted Impact Calculator

When adding or editing a risk, the impact score is calculated from four weighted categories:

| Category | Description |
|----------|-------------|
| Trust & Reputation | Brand damage, customer trust, public perception |
| Operational | Business continuity, process disruption, resource impact |
| Legal & Regulatory | Compliance violations, lawsuits, regulatory penalties |
| Enterprise Value | Financial loss, market position, strategic impact |

Each category is scored 1-5 and multiplied by its weight (default 25% each). Weights are adjustable in Settings and must total 100%.

### RACI Matrix (RACI View)

A responsibility assignment matrix mapping risks to organizational roles.

- **Read the Matrix**: Each cell shows who is Responsible, Accountable, Consulted, or Informed for each risk/task.
- **Edit Assignments**: Click any cell dropdown to change the RACI assignment.
- **Add Tasks/Roles**: Use "+ Add Task" or "+ Add Role" to extend the matrix.
- **Delete Tasks/Roles**: Use the x buttons on row/column headers to remove them.

### Company Profile (Company View)

A read-only overview of HomeSphere Robotics, including:

- Company overview and mission statement
- Product portfolio
- Organizational structure and key roles
- Technology stack and infrastructure
- Market position and competitive landscape
- Risk and compliance maturity status
- Operational dependencies
- Known challenges and opportunities

### Settings

Click the gear icon in the header to access:

- **Risk Appetite Threshold**: Set the boundary level (1-5) for acceptable risk
- **Impact Weights**: Adjust the percentage weight of each impact category
- **Rubric Editor**: Customize the descriptions for each likelihood and impact level shown in the scoring scales

## Tech Stack

- **Frontend**: Vanilla HTML, CSS, JavaScript (single `index.html` file, no build step)
- **Persistence**: localStorage (primary) + Firebase Realtime Database (optional sync)
- **Hosting**: Firebase Hosting
- **Cross-tab Sync**: `storage` event listener for multi-tab consistency

## Project Structure

```
homesphere-risk-matrix/
  index.html                    # Entire application (HTML + CSS + JS)
  logo.png                      # Company logo
  firebase-config.js            # Your Firebase credentials (gitignored)
  firebase-config.example.js    # Template for firebase-config.js
  firebase.json                 # Firebase Hosting configuration
  .firebaserc                   # Firebase project alias
  .gitignore                    # Ignores firebase-config.js, .firebase/, OS files
```
