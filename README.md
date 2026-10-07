# Personal Calendar

A minimal weekly calendar you can publish for free on GitHub Pages and share with anyone who wants to book time with you. Free slots are highlighted automatically, so people can see at a glance when you are available.

**👉 [See mine live](https://olivierimichele.github.io/CalendaioPersonale/)**

## Features

- **One config file**: all your commitments live in `schedule.js`. No HTML to touch.
- **Automatic free time**: any gap between your commitments shows up as free time.
- **Colour-coded activities**: define your own categories and colours.
- **Mobile-first**: on phones it shows one day at a time and opens on today.
- **Light and dark theme**: follows the device setting.
- **Any language**: day names come from the browser, just set `lang`.
- **No build, no dependencies, no server**.

## Make your own

1. **Fork** this repository (or use it as a template).
2. Edit **`schedule.js`**: page text, categories and your weekly events.
3. In your fork go to **Settings → Pages**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, and save.
4. After a minute your calendar is live at `https://<your-username>.github.io/<repo-name>/`.

## Configuration

```js
types: {
  uni:  { label: "University", color: ["#2563eb", "#60a5fa"] }, // [light, dark]
  free: { label: "Free time",  color: "#16a34a" },              // required
  travel: { label: "Commute", dashed: true },                   // no color = neutral
},

events: [
  { days: ["mon", "wed"], from: "09:00", to: "13:00", type: "uni", title: "Lecture", note: "Room 2.4" },
],
```

- `days`: `mon` `tue` `wed` `thu` `fri` `sat` `sun`
- `from` / `to`: `HH:MM`. Every distinct time becomes a row in the grid, and the day spans from the earliest to the latest time used.
- `note`: optional second line.

Events on the same day must not overlap.

## Run locally

Open `index.html` in a browser.
