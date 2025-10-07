# 25 + 5 Clock ⏱️

A Pomodoro-style timer web app: count down a “session” period, then a “break” period, and cycle between them.  
Live demo: [25 + 5 Clock by jr-delfin](https://codepen.io/jr-delfin/pen/RNrKYdQ)

---

## Table of Contents

1. What This Does  
2. Tools & Technologies Used  
3. How It Works   

---

## 1. What This Does

- Provides a UI to set **session length** and **break length** (in minutes)  
- Shows a timer counting down (format **mm:ss**) for the current period (Session or Break)  
- After the session timer reaches 00:00, the break starts automatically  
- After the break reaches 00:00, the session starts again (cycle)  
- Includes **Start / Pause** control, and **Reset** to default  
- Plays a beep or sound when a countdown ends (session → break or break → session)  
- Enforces constraints (min / max values) on session / break lengths  

---

## 2. Tools & Technologies Used

- **HTML5** — markup for buttons, labels, display, audio  
- **CSS3** — layout, styling, transitions, responsive design  
- **JavaScript (ES6+)** — core logic, timers, state management  
- **Audio / HTML5 Audio Element** — for beep / alert sound  
- Possibly integrated FreeCodeCamp’s test suite (if your project follows FCC requirements)  

---

## 3. How It Works

- On load, session length is defaulted (e.g. 25 minutes), break length default (e.g. 5 minutes), and timer is set to session.  
- You can **increment / decrement** session or break length *before* starting the timer. These buttons typically have IDs like `session-decrement`, `session-increment`, `break-decrement`, `break-increment`.  
- Once **Start** is pressed:
  - The timer begins decreasing every second (using `setInterval` or equivalent)  
  - The display updates in `mm:ss` format  
  - When the time reaches **00:00**, it triggers the switch:
    - If it was a Session period → switch to Break  
    - If it was Break → switch to Session  
    - The timer resets to the configured length of the next period  
    - Play the beep sound via the audio element (e.g. `id="beep"`)  
- **Pause / Resume** toggles whether the countdown is running  
- **Reset** brings everything back to default: stops the timer, resets session & break lengths, clears any running intervals, rewinds the audio  

Edge / validation logic:
- You cannot set lengths less than 1 minute or more than 60 minutes  
- The timer display should always stay in two-digit format (e.g. `05:00`, not `5:0`)  
- The audio beep should be at least 1 second long to satisfy certain test criteria  
