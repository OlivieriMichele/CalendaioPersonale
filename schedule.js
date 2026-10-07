// Edit this file to make the calendar yours. index.html never needs to change.
//
// events: one entry per recurring weekly commitment.
//   days   which days it repeats on: "mon" "tue" "wed" "thu" "fri" "sat" "sun"
//   from   start time, "HH:MM"
//   to     end time, "HH:MM"
//   type   a key from `types` below
//   title  text shown in the block
//   note   optional second line
//
// Any time between the earliest and latest event that is not covered on a
// given day is shown automatically as free time.

const schedule = {
  lang: "en", // sets day names and date format, e.g. "it", "de", "fr"
  title: "Typical week",
  eyebrow: "First year · Master's degree",
  subtitle: "October – December 2026 · University, app development, tutoring and dance school",
  owner: "Michele Olivieri · University of Bologna",
  link: "https://github.com/olivierimichele",
  labels: { time: "Time", today: "today" },

  // color: one value, or [light theme, dark theme]. No color = neutral block.
  // dashed: true draws a dashed outline (good for commuting).
  // `free` is required: it styles the automatic free-time blocks.
  types: {
    uni:    { label: "University",      color: ["#2563eb", "#60a5fa"] },
    dev:    { label: "Study / App dev", color: ["#9333ea", "#c084fc"] },
    tutor:  { label: "Tutoring",        color: ["#f59e0b", "#fbbf24"] },
    dance:  { label: "Dance school",    color: ["#e11d48", "#fb7185"] },
    free:   { label: "Free time",       color: ["#16a34a", "#4ade80"] },
    break:  { label: "Breaks" },
    travel: { label: "Commute", dashed: true },
  },

  events: [
    { days: ["mon", "wed", "thu"], from: "08:00", to: "09:00", type: "travel", title: "Train Forlì → Cesena" },
    { days: ["fri"],               from: "08:00", to: "09:00", type: "travel", title: "Commute" },
    { days: ["tue"],               from: "08:00", to: "13:00", type: "dev",    title: "Study / App dev" },
    { days: ["sat"],               from: "08:00", to: "09:00", type: "dev",    title: "Study", note: "3 hours" },

    { days: ["mon", "wed", "fri"], from: "09:00", to: "13:00", type: "uni",    title: "Lecture" },
    { days: ["thu"],               from: "09:00", to: "13:00", type: "uni",    title: "Lecture", note: "from 10:00" },
    { days: ["sat"],               from: "09:00", to: "13:00", type: "dev",    title: "App dev / Tutoring", note: "3 hours" },

    { days: ["mon", "tue", "wed", "thu", "fri"], from: "13:00", to: "14:00", type: "break", title: "Lunch break" },
    { days: ["sat"],               from: "13:00", to: "14:00", type: "break",  title: "Break" },

    { days: ["mon"],               from: "14:00", to: "17:00", type: "uni",    title: "Lecture", note: "until 16:00, then home" },
    { days: ["wed"],               from: "14:00", to: "17:00", type: "uni",    title: "Lecture", note: "until 15:00, then home" },
    { days: ["thu"],               from: "14:00", to: "17:00", type: "uni",    title: "Lecture", note: "until 17:00" },
    { days: ["tue"],               from: "14:00", to: "17:00", type: "tutor",  title: "Study / UniBo tutoring" },
    { days: ["fri"],               from: "14:00", to: "17:00", type: "tutor",  title: "UniBo tutoring / App dev" },

    { days: ["mon", "tue", "wed"], from: "17:00", to: "19:30", type: "dev",    title: "App dev / Study" },
    { days: ["fri"],               from: "17:00", to: "19:30", type: "dev",    title: "Study / App dev" },
    { days: ["thu"],               from: "17:00", to: "19:30", type: "free",   title: "Back home / Rest" },

    { days: ["mon", "tue", "wed", "thu"], from: "19:30", to: "20:30", type: "break", title: "Dinner", note: "and dance prep" },
    { days: ["fri"],               from: "19:30", to: "20:30", type: "free",   title: "Dinner & free time" },

    { days: ["mon", "tue", "wed"], from: "20:30", to: "23:00", type: "dance",  title: "Dance school", note: "20:30 – 22:30" },
    { days: ["thu"],               from: "20:30", to: "23:00", type: "dance",  title: "Dance school", note: "20:00 – 23:00" },
  ],
};
