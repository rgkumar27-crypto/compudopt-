const stateShapes = [
  { code: "WA", points: "84,83 143,83 144,118 132,138 97,138 84,122", labelX: 114, labelY: 111, name: "Washington" },
  { code: "OR", points: "87,142 145,142 144,199 103,199 88,179", labelX: 118, labelY: 171, name: "Oregon" },
  { code: "CA", points: "89,204 143,204 158,282 145,338 120,360 103,340 114,316 96,292", labelX: 123, labelY: 280, name: "California" },
  { code: "ID", points: "150,107 192,107 199,199 161,199 146,173 153,139", labelX: 172, labelY: 154, name: "Idaho" },
  { code: "NV", points: "147,205 191,205 205,297 167,306", labelX: 173, labelY: 254, name: "Nevada" },
  { code: "MT", points: "201,87 294,87 294,147 203,147", labelX: 248, labelY: 117, name: "Montana" },
  { code: "WY", points: "207,155 286,155 286,211 207,211", labelX: 247, labelY: 183, name: "Wyoming" },
  { code: "UT", points: "197,219 250,219 250,296 208,296", labelX: 224, labelY: 258, name: "Utah" },
  { code: "AZ", points: "196,303 252,303 249,370 213,392 190,371", labelX: 223, labelY: 348, name: "Arizona" },
  { code: "CO", points: "258,221 333,221 333,296 258,296", labelX: 296, labelY: 258, name: "Colorado" },
  { code: "NM", points: "258,303 333,303 333,381 258,381", labelX: 296, labelY: 343, name: "New Mexico" },
  { code: "ND", points: "305,90 381,90 381,143 305,143", labelX: 343, labelY: 117, name: "North Dakota" },
  { code: "SD", points: "304,149 382,149 382,210 304,210", labelX: 343, labelY: 180, name: "South Dakota" },
  { code: "NE", points: "304,217 391,217 391,265 304,265", labelX: 347, labelY: 241, name: "Nebraska" },
  { code: "KS", points: "304,271 391,271 391,317 304,317", labelX: 347, labelY: 294, name: "Kansas" },
  { code: "OK", points: "302,324 405,324 405,365 360,365 349,382 303,382", labelX: 352, labelY: 349, name: "Oklahoma" },
  { code: "TX", points: "303,389 405,389 424,430 454,448 438,491 389,502 359,466 322,458 303,425", labelX: 380, labelY: 443, name: "Texas" },
  { code: "MN", points: "390,88 447,88 465,112 454,146 404,146 390,127", labelX: 426, labelY: 117, name: "Minnesota" },
  { code: "IA", points: "394,218 451,218 459,252 401,252 394,238", labelX: 425, labelY: 236, name: "Iowa" },
  { code: "MO", points: "398,258 455,258 469,318 430,341 402,316", labelX: 431, labelY: 295, name: "Missouri" },
  { code: "AR", points: "403,325 452,325 458,381 411,381", labelX: 430, labelY: 353, name: "Arkansas" },
  { code: "LA", points: "408,388 453,388 466,445 442,470 416,447 421,415", labelX: 438, labelY: 426, name: "Louisiana" },
  { code: "WI", points: "456,89 500,89 512,120 498,161 463,161 455,136", labelX: 483, labelY: 124, name: "Wisconsin" },
  { code: "IL", points: "469,169 505,169 512,251 489,279 471,260", labelX: 490, labelY: 223, name: "Illinois" },
  { code: "MS", points: "464,388 503,388 505,460 475,460 464,430", labelX: 485, labelY: 424, name: "Mississippi" },
  { code: "MI", points: "520,115 577,115 597,152 576,188 537,179 520,145", labelX: 558, labelY: 151, name: "Michigan" },
  { code: "IN", points: "513,171 548,171 550,251 517,251", labelX: 531, labelY: 211, name: "Indiana" },
  { code: "KY", points: "525,259 603,259 624,282 610,299 548,299 526,285", labelX: 575, labelY: 280, name: "Kentucky" },
  { code: "TN", points: "520,309 609,309 593,332 522,332", labelX: 560, labelY: 320, name: "Tennessee" },
  { code: "AL", points: "510,389 547,389 551,459 520,459", labelX: 531, labelY: 424, name: "Alabama" },
  { code: "GA", points: "554,388 604,388 622,441 597,468 555,442", labelX: 585, labelY: 425, name: "Georgia" },
  { code: "FL", points: "610,446 656,446 681,485 654,552 622,535 632,489", labelX: 648, labelY: 496, name: "Florida" },
  { code: "OH", points: "557,171 602,171 605,248 563,248", labelX: 581, labelY: 210, name: "Ohio" },
  { code: "WV", points: "607,222 641,222 649,271 624,284 604,257", labelX: 625, labelY: 251, name: "West Virginia" },
  { code: "PA", points: "610,178 686,178 689,223 614,223", labelX: 650, labelY: 201, name: "Pennsylvania" },
  { code: "VA", points: "649,259 736,259 703,298 648,289", labelX: 687, labelY: 278, name: "Virginia" },
  { code: "NC", points: "646,306 733,306 759,325 737,347 653,343", labelX: 700, labelY: 326, name: "North Carolina" },
  { code: "SC", points: "627,351 673,351 691,392 656,418 629,391", labelX: 658, labelY: 383, name: "South Carolina" },
  { code: "NY", points: "691,135 758,135 773,169 743,197 693,184", labelX: 730, labelY: 163, name: "New York" },
  { code: "NJ", points: "695,225 718,225 721,277 699,289", labelX: 708, labelY: 255, name: "New Jersey" },
  { code: "MD", points: "690,247 731,247 733,274 690,274", labelX: 711, labelY: 260, name: "Maryland" },
  { code: "DE", points: "725,226 741,226 743,273 728,273", labelX: 735, labelY: 250, name: "Delaware" },
  { code: "VT", points: "760,108 780,108 780,150 760,150", labelX: 770, labelY: 129, name: "Vermont" },
  { code: "NH", points: "784,103 806,103 805,155 784,155", labelX: 794, labelY: 128, name: "New Hampshire" },
  { code: "ME", points: "808,82 858,82 846,156 805,156", labelX: 831, labelY: 118, name: "Maine" },
  { code: "MA", points: "759,164 815,164 815,191 759,191", labelX: 787, labelY: 178, name: "Massachusetts" },
  { code: "CT", points: "759,198 803,198 803,220 759,220", labelX: 781, labelY: 209, name: "Connecticut" },
  { code: "RI", points: "807,196 821,196 821,220 807,220", labelX: 814, labelY: 208, name: "Rhode Island" },
  { code: "AK", points: "48,467 117,467 118,510 79,510 61,494", labelX: 84, labelY: 490, name: "Alaska" },
  { code: "HI", points: "145,528 189,528 197,557 160,557", labelX: 171, labelY: 543, name: "Hawaii" }
];

const stateDetails = {
  TX: {
    name: "Texas",
    summary: "Houston, Dallas, and San Antonio pilot programs show how Compudopt could present both scale and school-level outcomes in one place.",
    metrics: [
      { label: "Students reached", value: "5,800" },
      { label: "Computers placed", value: "4,650" },
      { label: "Schools supported", value: "9" },
      { label: "Training sessions", value: "115" }
    ],
    cities: ["Houston", "Dallas", "San Antonio", "El Paso"],
    schools: [
      { name: "Northline STEM Academy", city: "Houston", students: 820, computers: 620, impact: "Teachers reported stronger homework completion after students received take-home devices." },
      { name: "East Dallas College Prep", city: "Dallas", students: 690, computers: 540, impact: "A fictional digital literacy lab helped ninth graders complete more online coursework independently." },
      { name: "Mission Verde Intermediate", city: "San Antonio", students: 560, computers: 410, impact: "Device distribution paired with family tech nights raised parent engagement in the demo scenario." }
    ]
  },
  CA: {
    name: "California",
    summary: "California demonstrates how the map can spotlight regional variety across urban and suburban school partnerships.",
    metrics: [
      { label: "Students reached", value: "3,950" },
      { label: "Computers placed", value: "3,120" },
      { label: "Schools supported", value: "7" },
      { label: "Training sessions", value: "81" }
    ],
    cities: ["Los Angeles", "Oakland", "San Diego"],
    schools: [
      { name: "Pacific Horizon Middle", city: "Los Angeles", students: 710, computers: 560, impact: "The sample story highlights improved project completion in blended learning classes." },
      { name: "Laney Bridge Academy", city: "Oakland", students: 510, computers: 430, impact: "School leaders in this fictional example saw more students using digital portfolios." },
      { name: "Harbor Point Charter", city: "San Diego", students: 470, computers: 355, impact: "The demo data frames device access as a bridge to after-school coding participation." }
    ]
  },
  IL: {
    name: "Illinois",
    summary: "Illinois can represent Midwest urban impact with school access, household support, and digital upskilling.",
    metrics: [
      { label: "Students reached", value: "1,850" },
      { label: "Computers placed", value: "1,420" },
      { label: "Schools supported", value: "4" },
      { label: "Training sessions", value: "39" }
    ],
    cities: ["Chicago", "Aurora"],
    schools: [
      { name: "South Loop Innovation School", city: "Chicago", students: 430, computers: 310, impact: "The fictional dashboard shows attendance gains during weeks with major digital assignments." },
      { name: "Fox Valley Learning Center", city: "Aurora", students: 360, computers: 280, impact: "Students in the demo scenario had more reliable access to college and career resources." }
    ]
  },
  FL: {
    name: "Florida",
    summary: "Florida presents a strong statewide story for donors who want to see growth across several metro areas.",
    metrics: [
      { label: "Students reached", value: "2,600" },
      { label: "Computers placed", value: "2,050" },
      { label: "Schools supported", value: "5" },
      { label: "Training sessions", value: "54" }
    ],
    cities: ["Miami", "Orlando", "Tampa"],
    schools: [
      { name: "Little River Tech Academy", city: "Miami", students: 520, computers: 430, impact: "Sample family surveys indicate more students could complete homework from home." },
      { name: "Orange Grove Middle", city: "Orlando", students: 410, computers: 310, impact: "The proposal frames Compudopt as a partner in reducing device-sharing across households." }
    ]
  },
  GA: {
    name: "Georgia",
    summary: "Georgia emphasizes how city-level storytelling can anchor a broader statewide service narrative.",
    metrics: [
      { label: "Students reached", value: "1,480" },
      { label: "Computers placed", value: "1,120" },
      { label: "Schools supported", value: "3" },
      { label: "Training sessions", value: "27" }
    ],
    cities: ["Atlanta", "Savannah"],
    schools: [
      { name: "Peachtree Youth Academy", city: "Atlanta", students: 380, computers: 280, impact: "The fictional results suggest improved confidence using learning platforms and shared documents." },
      { name: "Harbor Oaks K-8", city: "Savannah", students: 260, computers: 200, impact: "This demo card highlights increased participation in digital reading and STEM modules." }
    ]
  },
  NC: {
    name: "North Carolina",
    summary: "North Carolina illustrates how the concept could scale through district partnerships and regional hubs.",
    metrics: [
      { label: "Students reached", value: "1,720" },
      { label: "Computers placed", value: "1,340" },
      { label: "Schools supported", value: "4" },
      { label: "Training sessions", value: "33" }
    ],
    cities: ["Charlotte", "Raleigh", "Greensboro"],
    schools: [
      { name: "Queen City Pathways", city: "Charlotte", students: 460, computers: 340, impact: "Counselors in the fictional case note stronger college application completion." },
      { name: "Capital Futures Magnet", city: "Raleigh", students: 330, computers: 255, impact: "The school profile shows improved access to career certifications and online tutorials." }
    ]
  },
  NY: {
    name: "New York",
    summary: "New York adds an East Coast example focused on dense population centers and measurable school-level benefits.",
    metrics: [
      { label: "Students reached", value: "1,930" },
      { label: "Computers placed", value: "1,510" },
      { label: "Schools supported", value: "4" },
      { label: "Training sessions", value: "42" }
    ],
    cities: ["New York City", "Buffalo"],
    schools: [
      { name: "Bronx Forward Academy", city: "New York City", students: 520, computers: 410, impact: "The demo outcome centers on better digital attendance and assignment submission rates." },
      { name: "Lake Effect Prep", city: "Buffalo", students: 290, computers: 220, impact: "Teachers in the fictional narrative used new devices to support math tutoring outside school hours." }
    ]
  },
  AZ: {
    name: "Arizona",
    summary: "Arizona showcases how the platform could serve as a quick regional briefing for corporate and philanthropic partners.",
    metrics: [
      { label: "Students reached", value: "1,260" },
      { label: "Computers placed", value: "990" },
      { label: "Schools supported", value: "3" },
      { label: "Training sessions", value: "21" }
    ],
    cities: ["Phoenix", "Tucson"],
    schools: [
      { name: "Desert Bloom Elementary", city: "Phoenix", students: 340, computers: 255, impact: "The fictional program snapshot highlights fewer device-sharing bottlenecks at home." },
      { name: "Catalina Rising School", city: "Tucson", students: 260, computers: 205, impact: "A made-up digital skills series helped students practice research and presentation tools." }
    ]
  },
  CO: {
    name: "Colorado",
    summary: "Colorado offers a lighter-scale example showing that the platform works for both large and emerging footprints.",
    metrics: [
      { label: "Students reached", value: "1,090" },
      { label: "Computers placed", value: "840" },
      { label: "Schools supported", value: "3" },
      { label: "Training sessions", value: "18" }
    ],
    cities: ["Denver", "Colorado Springs"],
    schools: [
      { name: "Mile High Discovery", city: "Denver", students: 290, computers: 220, impact: "The demo frame focuses on access to digital project work and cloud-based collaboration." },
      { name: "Pikes Peak Scholars", city: "Colorado Springs", students: 240, computers: 185, impact: "In this fictional scenario, student families reported more confidence using school portals." }
    ]
  },
  WA: {
    name: "Washington",
    summary: "Washington helps the concept feel truly national and gives the map a visible West Coast anchor.",
    metrics: [
      { label: "Students reached", value: "980" },
      { label: "Computers placed", value: "760" },
      { label: "Schools supported", value: "2" },
      { label: "Training sessions", value: "17" }
    ],
    cities: ["Seattle", "Tacoma"],
    schools: [
      { name: "Rainier View School", city: "Seattle", students: 250, computers: 190, impact: "The fictional impact note emphasizes better participation in remote enrichment work." },
      { name: "South Sound Learning Lab", city: "Tacoma", students: 210, computers: 165, impact: "This school story demonstrates how donated devices could support STEM club retention." }
    ]
  },
  OH: {
    name: "Ohio",
    summary: "Ohio supports a balanced map and shows how the same storytelling system can work in new partner regions.",
    metrics: [
      { label: "Students reached", value: "1,130" },
      { label: "Computers placed", value: "880" },
      { label: "Schools supported", value: "3" },
      { label: "Training sessions", value: "24" }
    ],
    cities: ["Columbus", "Cleveland"],
    schools: [
      { name: "Buckeye STEAM Academy", city: "Columbus", students: 300, computers: 230, impact: "The sample narrative points to more consistent use of online tutoring and intervention tools." },
      { name: "Lakeshore Community School", city: "Cleveland", students: 260, computers: 205, impact: "Teachers in the fictional example reported stronger participation in digital writing assignments." }
    ]
  },
  PA: {
    name: "Pennsylvania",
    summary: "Pennsylvania adds another Northeast proof point and reinforces the donor-facing scalability of the concept.",
    metrics: [
      { label: "Students reached", value: "1,610" },
      { label: "Computers placed", value: "1,220" },
      { label: "Schools supported", value: "4" },
      { label: "Training sessions", value: "30" }
    ],
    cities: ["Philadelphia", "Pittsburgh"],
    schools: [
      { name: "Liberty Bell Middle", city: "Philadelphia", students: 410, computers: 320, impact: "The fictional impact snapshot highlights improved online test readiness." },
      { name: "Three Rivers Academy", city: "Pittsburgh", students: 285, computers: 215, impact: "This sample school story ties device access to stronger participation in technology electives." }
    ]
  }
};

const svg = document.querySelector("#usa-map");
const stateName = document.querySelector("#state-name");
const stateSummary = document.querySelector("#state-summary");
const detailMetrics = document.querySelector("#detail-metrics");
const cityList = document.querySelector("#city-list");
const cityCount = document.querySelector("#city-count");
const schoolList = document.querySelector("#school-list");
const schoolCount = document.querySelector("#school-count");
const totalStates = document.querySelector("#total-states");
const totalComputers = document.querySelector("#total-computers");
const totalStudents = document.querySelector("#total-students");

let selectedCode = "TX";

function formatNumber(value) {
  return new Intl.NumberFormat("en-US").format(value);
}

function buildMap() {
  stateShapes.forEach((state) => {
    const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    polygon.setAttribute("points", state.points);
    polygon.setAttribute("class", "state");
    polygon.setAttribute("data-code", state.code);
    polygon.setAttribute("data-active", String(Boolean(stateDetails[state.code])));
    polygon.setAttribute("aria-label", state.name);

    polygon.addEventListener("mouseenter", () => renderState(state.code));
    polygon.addEventListener("click", () => renderState(state.code));

    svg.appendChild(polygon);

    const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
    label.setAttribute("x", state.labelX);
    label.setAttribute("y", state.labelY);
    label.setAttribute("class", `state-label${stateDetails[state.code] ? " active" : ""}`);
    label.textContent = state.code;

    svg.appendChild(label);
  });
}

function aggregateTotals() {
  const codes = Object.keys(stateDetails);
  let computers = 0;
  let students = 0;

  codes.forEach((code) => {
    const c = stateDetails[code].metrics.find((m) => m.label === "Computers placed");
    const s = stateDetails[code].metrics.find((m) => m.label === "Students reached");
    computers += Number(c.value.replace(/,/g, ""));
    students += Number(s.value.replace(/,/g, ""));
  });

  totalStates.textContent = formatNumber(codes.length);
  totalComputers.textContent = formatNumber(computers);
  totalStudents.textContent = formatNumber(students);
}

function renderState(code) {
  selectedCode = code;
  const details = stateDetails[code];
  const shape = stateShapes.find((state) => state.code === code);

  document.querySelectorAll(".state").forEach((state) => {
    state.classList.toggle("is-selected", state.dataset.code === code);
  });

  if (!details) {
    stateName.textContent = shape.name;
    stateSummary.textContent = "No fictional pilot data is shown here yet. In a real rollout, this panel could invite expansion, donations, or partnership development in this state.";
    detailMetrics.innerHTML = `
      <div class="detail-metric"><strong>Future</strong><span>Expansion market</span></div>
      <div class="detail-metric"><strong>0</strong><span>Sample schools loaded</span></div>
    `;
    cityCount.textContent = "0 cities";
    cityList.innerHTML = `<span class="chip">No demo city data yet</span>`;
    schoolCount.textContent = "0 schools";
    schoolList.innerHTML = `<article class="school-card"><h4>Potential next step</h4><p>This state could display future school partners, device counts, and local impact quotes once real data is available.</p></article>`;
    return;
  }

  stateName.textContent = details.name;
  stateSummary.textContent = details.summary;

  detailMetrics.innerHTML = details.metrics.map((metric) => `
    <div class="detail-metric">
      <strong>${metric.value}</strong>
      <span>${metric.label}</span>
    </div>
  `).join("");

  cityCount.textContent = `${details.cities.length} cities`;
  cityList.innerHTML = details.cities.map((city) => `<span class="chip">${city}</span>`).join("");

  schoolCount.textContent = `${details.schools.length} schools`;
  schoolList.innerHTML = details.schools.map((school) => `
    <article class="school-card">
      <h4>${school.name}</h4>
      <div class="school-meta">
        <span class="school-pill">${school.city}</span>
        <span class="school-pill">${formatNumber(school.students)} students</span>
        <span class="school-pill">${formatNumber(school.computers)} computers</span>
      </div>
      <p>${school.impact}</p>
    </article>
  `).join("");
}

buildMap();
aggregateTotals();
renderState(selectedCode);
