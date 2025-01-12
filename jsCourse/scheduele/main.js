/*************************************************
 * 1) DATA & CONFIG (from your original code)
 *************************************************/

// Constants used for referencing levels, types, etc.
const id = {
  level: {
    l1: "L1",
    l2: "L2",
    l3: "L3",
    l4: "M1",
    l5: "M2",
    l6: "D1",
    l7: "D2",
    l8: "D3",
  },
  type: {
    cs: "CS",
    ai: "AI",
  },
  section: {
    s1: "A",
    s2: "B",
    s3: "C",
  },
  month: {
    m1: "JANUARY",
    m2: "FEBRUARY",
    m3: "MARCH",
    m4: "APRIL",
    m5: "MAY",
    m6: "JUNE",
    m7: "JULY",
    m8: "AUGUST",
    m9: "SEPTEMBER",
    m10: "OCTOBER",
    m11: "NOVEMBER",
    m12: "DECEMBER",
  },
  hijri: {
    m1: "MUHARAM",
    m2: "SAFAR",
    m3: "RABIAWL",
    m4: "RABITANI",
    m5: "JUMADAAWL",
    m6: "JUMADATANI",
    m7: "RAJAB",
    m8: "SHABAN",
    m9: "RAMADAN",
    m10: "SHAWAL",
    m11: "ZUQIDA",
    m12: "ZUHIJA",
  },
  day: {
    d1: "SATURDAY",
    d2: "SUNDAY",
    d3: "MONDAY",
    d4: "TUESDAY",
    d5: "WEDNESDAY",
    d6: "THURSDAY",
    d7: "FRIDAY",
  },
  event: {
    hack: "HACKATHON",
    idea: "IDEATHON",
    aren: "ARENA",
    chss: "CHESS",
  },
  loc: {
    nrst: "NIT_RESTO",
    crst: "CP_RESTO",
    nitc: "NIT",
    crpk: "CYBERPARK",
  },
  sess: {
    nose: "NO_SESSION",
    oute: "OUT_EMPTY",
    inem: "IN_EMPTY",
    lnch: "NIT_LUNCH",
    pbsy: "PROF_BUSY",
    pfre: "PROF_FREE",
    pnit: "PROF_NIT",
  },
  cerm: {
    grad: "GRADUATION",
  },
};

const schd = {
  id: "",
  level: "",
  type: "",
  section: "",
  class: "",
  keys: {
    days: [1, 2, 3, 4, 5, 6, 7], // 7 days
    times: 5,                   // 5 timeslots
    start: 8.5,                 // 8:30
    end: 15.5,                  // 15:30
    sdur: 1.5,                  // each slot = 1h30
    lnch: 1,                    // lunch = 1h
    lidx: 2,                    // lunch is the 3rd slot (0-based)
  },
  // "days" is an array of length 7 (each representing a day),
  // each sub-array has 5 items (for 5 timeslots).
  // We'll keep placeholders for lunch or no session:
  days: [
    ["1", "", id.sess.lnch, "", ""],
    ["2", "", id.sess.lnch, "", ""],
    ["3", "", id.sess.lnch, "", ""],
    ["4", "", id.sess.lnch, "", ""],
    ["8", "", id.sess.lnch, "", ""],
    ["g", "", id.sess.lnch, "", ""],
    ["n", "", id.sess.nose, "", ""],
  ],
};

/*************************************************
 * 2) NAIVE SCHEDULER DATA
 *************************************************/

// 20 modules
const allModules = [
  { id: "MATH101", name: "Basic Math" },
  { id: "PHYS101", name: "Physics I" },
  { id: "CHEM101", name: "Chemistry I" },
  { id: "BIO101",  name: "Biology I" },
  { id: "CS101",   name: "Intro to CS" },
  { id: "CS102",   name: "Data Structures" },
  { id: "CS103",   name: "Algorithms" },
  { id: "AI101",   name: "AI Fundamentals" },
  { id: "ENG101",  name: "English Literature" },
  { id: "FRE101",  name: "French I" },
  { id: "HIS101",  name: "World History" },
  { id: "GEO101",  name: "Geography" },
  { id: "MATH201", name: "Advanced Math" },
  { id: "PHYS201", name: "Physics II" },
  { id: "CHEM201", name: "Chemistry II" },
  { id: "BIO201",  name: "Biology II" },
  { id: "CS201",   name: "OOP" },
  { id: "CS202",   name: "Databases" },
  { id: "AI201",   name: "Machine Learning" },
  { id: "PHIL101", name: "Philosophy" },
];

// Professors and the modules they can teach
const professors = [
  {
    name: "Dr. Smith",
    canTeach: ["MATH101", "MATH201", "PHYS101", "PHYS201"],
  },
  {
    name: "Dr. Jones",
    canTeach: ["CS101", "CS102", "CS103", "CS201", "CS202"],
  },
  {
    name: "Dr. Miller",
    canTeach: ["BIO101", "BIO201", "CHEM101", "CHEM201"],
  },
  {
    name: "Dr. Brown",
    canTeach: ["AI101", "AI201"],
  },
  {
    name: "Prof. Adams",
    canTeach: ["ENG101", "PHIL101", "FRE101", "HIS101", "GEO101"],
  },
];

// 3 classes (A, B, C), each has its own copy of schd
const classSections = [
  { name: "Class A", schedule: JSON.parse(JSON.stringify(schd)) },
  { name: "Class B", schedule: JSON.parse(JSON.stringify(schd)) },
  { name: "Class C", schedule: JSON.parse(JSON.stringify(schd)) },
];

// Example students array (not used directly in the naive solver, but can be extended)
const students = [
  { name: "Alice", class: "Class A" },
  { name: "Bob", class: "Class A" },
  { name: "Charlie", class: "Class B" },
  { name: "Diana", class: "Class B" },
  { name: "Eve", class: "Class C" },
];

/*************************************************
 * 3) NAIVE SOLVER: Assign modules/profs to each class schedule
 *************************************************/
function solveSchoolSchedules(classSections, professors, allModules) {
  // For each class schedule
  classSections.forEach((cls) => {
    // For each day in the schedule
    cls.schedule.days.forEach((daySlots, dayIndex) => {
      // daySlots is an array like ["1", "", "NIT_LUNCH", "", ""]
      for (let slot = 0; slot < daySlots.length; slot++) {
        const cellVal = daySlots[slot];
        // If it's lunch or no_session, skip
        if (cellVal === id.sess.lnch || cellVal === id.sess.nose) {
          continue;
        }
        // If it's some placeholder like "1", "2", etc., we can replace it
        // with a random module+prof (in real logic, you'd do conflict checks)
        // 1) pick random module
        const randomModule = allModules[Math.floor(Math.random() * allModules.length)];
        // 2) find a professor who can teach that module
        const possibleProfs = professors.filter((p) => p.canTeach.includes(randomModule.id));
        if (possibleProfs.length > 0) {
          const chosenProf = possibleProfs[Math.floor(Math.random() * possibleProfs.length)];
          // 3) fill the slot with something like "CS101<br>Dr. Jones"
          daySlots[slot] = randomModule.id + "<br>" + chosenProf.name;
        }
      }
    });
  });
}

/*************************************************
 * 4) TIME-FORMATTING & TABLE-DISPLAY FUNCTIONS
 *************************************************/

// Utility function from your code
function RmDot(val) {
  var cl = Math.ceil(val);
  return [cl, (cl - val).toFixed(2)];
}

// Original function to compute each timeslot's start-end
function GetSessTime(keys, i) {
  // Start Time
  var h = RmDot(
    keys.start +
      (keys.lidx == i ? i - 1 : i) * keys.sdur +
      (keys.lidx == i ? keys.lnch : keys.lidx < i ? -keys.sdur + keys.lnch : 0)
  );
  h[0] = h[0] < 10 ? "0" + h[0] : h[0];
  h[1] = Math.ceil(h[1] * 60);
  h[1] = h[1] == 0 ? "00" : h[1];
  var res = h.join(":");

  // End Time
  i++;
  h = RmDot(
    keys.start +
      (keys.lidx == i ? i - 1 : i) * keys.sdur +
      (keys.lidx == i ? keys.lnch : keys.lidx < i ? -keys.sdur + keys.lnch : 0)
  );
  h[0] = h[0] < 10 ? "0" + h[0] : h[0];
  h[1] = Math.ceil(h[1] * 60);
  h[1] = h[1] == 0 ? "00" : h[1];
  res += "<br>" + h.join(":");

  return res;
}

// Dynamically generate schedule table
function ShowSchd(tbl, scd) {
  var cnt = "<tr><th>Days<br>Hours</th>";
  var len = scd.keys.days.length;

  // Header row => day names
  for (var i = 0; i < len; i++) {
    cnt += "<th>" + id.day["d" + scd.keys.days[i]] + "</th>";
  }
  cnt += "</tr>";

  // Each row => timeslot
  for (var i = 0; i < scd.keys.times; i++) {
    cnt += "<tr><td>" + GetSessTime(scd.keys, i) + "</td>";
    for (var j = 0; j < len; j++) {
      cnt += "<td>" + (scd.days[j][i] || "") + "</td>";
    }
    cnt += "</tr>";
  }

  // Insert generated rows into table
  tbl.innerHTML = cnt;
}
