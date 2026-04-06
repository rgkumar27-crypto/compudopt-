const stateDetails = {
  TX: {
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
const states = Array.from(document.querySelectorAll(".state"));

let selectedCode = "TX";

function formatNumber(value) {
  return new Intl.NumberFormat("en-US").format(value);
}

function aggregateTotals() {
  const codes = Object.keys(stateDetails);
  const totals = codes.reduce(
    (accumulator, code) => {
      const computersMetric = stateDetails[code].metrics.find((metric) => metric.label === "Computers placed");
      const studentsMetric = stateDetails[code].metrics.find((metric) => metric.label === "Students reached");
      accumulator.computers += Number(computersMetric.value.replace(/,/g, ""));
      accumulator.students += Number(studentsMetric.value.replace(/,/g, ""));
      return accumulator;
    },
    { computers: 0, students: 0 }
  );

  totalStates.textContent = formatNumber(codes.length);
  totalComputers.textContent = formatNumber(totals.computers);
  totalStudents.textContent = formatNumber(totals.students);
}

function renderState(code) {
  selectedCode = code;
  const details = stateDetails[code];

  states.forEach((state) => {
    state.classList.toggle("is-selected", state.dataset.code === code);
  });

  if (!details) {
    stateName.textContent = code;
    stateSummary.textContent = "No fictional pilot data is shown here yet. In a real rollout, this panel could invite donations, volunteers, or partnership expansion in this state.";
    detailMetrics.innerHTML = `
      <div class="detail-metric">
        <strong>Future</strong>
        <span>Expansion market</span>
      </div>
      <div class="detail-metric">
        <strong>0</strong>
        <span>Sample schools loaded</span>
      </div>
    `;
    cityCount.textContent = "0 cities";
    cityList.innerHTML = `<span class="chip">No demo city data yet</span>`;
    schoolCount.textContent = "0 schools";
    schoolList.innerHTML = `
      <article class="school-card">
        <h4>Potential next step</h4>
        <p>This state could display future school partners, device counts, local quotes, or district-level maps once real program data is available.</p>
      </article>
    `;
    return;
  }

  stateName.textContent = code;
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

states.forEach((state) => {
  const code = state.dataset.code;
  state.dataset.active = String(Boolean(stateDetails[code]));
  state.addEventListener("mouseenter", () => renderState(code));
  state.addEventListener("click", () => renderState(code));
});

aggregateTotals();
renderState(selectedCode);
