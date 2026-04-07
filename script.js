const fipsToState = {
  "01": { code: "AL", name: "Alabama" },
  "02": { code: "AK", name: "Alaska" },
  "04": { code: "AZ", name: "Arizona" },
  "05": { code: "AR", name: "Arkansas" },
  "06": { code: "CA", name: "California" },
  "08": { code: "CO", name: "Colorado" },
  "09": { code: "CT", name: "Connecticut" },
  "10": { code: "DE", name: "Delaware" },
  "12": { code: "FL", name: "Florida" },
  "13": { code: "GA", name: "Georgia" },
  "15": { code: "HI", name: "Hawaii" },
  "16": { code: "ID", name: "Idaho" },
  "17": { code: "IL", name: "Illinois" },
  "18": { code: "IN", name: "Indiana" },
  "19": { code: "IA", name: "Iowa" },
  "20": { code: "KS", name: "Kansas" },
  "21": { code: "KY", name: "Kentucky" },
  "22": { code: "LA", name: "Louisiana" },
  "23": { code: "ME", name: "Maine" },
  "24": { code: "MD", name: "Maryland" },
  "25": { code: "MA", name: "Massachusetts" },
  "26": { code: "MI", name: "Michigan" },
  "27": { code: "MN", name: "Minnesota" },
  "28": { code: "MS", name: "Mississippi" },
  "29": { code: "MO", name: "Missouri" },
  "30": { code: "MT", name: "Montana" },
  "31": { code: "NE", name: "Nebraska" },
  "32": { code: "NV", name: "Nevada" },
  "33": { code: "NH", name: "New Hampshire" },
  "34": { code: "NJ", name: "New Jersey" },
  "35": { code: "NM", name: "New Mexico" },
  "36": { code: "NY", name: "New York" },
  "37": { code: "NC", name: "North Carolina" },
  "38": { code: "ND", name: "North Dakota" },
  "39": { code: "OH", name: "Ohio" },
  "40": { code: "OK", name: "Oklahoma" },
  "41": { code: "OR", name: "Oregon" },
  "42": { code: "PA", name: "Pennsylvania" },
  "44": { code: "RI", name: "Rhode Island" },
  "45": { code: "SC", name: "South Carolina" },
  "46": { code: "SD", name: "South Dakota" },
  "47": { code: "TN", name: "Tennessee" },
  "48": { code: "TX", name: "Texas" },
  "49": { code: "UT", name: "Utah" },
  "50": { code: "VT", name: "Vermont" },
  "51": { code: "VA", name: "Virginia" },
  "53": { code: "WA", name: "Washington" },
  "54": { code: "WV", name: "West Virginia" },
  "55": { code: "WI", name: "Wisconsin" },
  "56": { code: "WY", name: "Wyoming" }
};

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
    ],
    photos: [
      { src: "https://picsum.photos/seed/compudopt-texas-1/600/400", alt: "Students using laptops in class", caption: "Fictional Houston classroom technology rollout." },
      { src: "https://picsum.photos/seed/compudopt-texas-2/600/400", alt: "Computer lab with students", caption: "Sample Dallas digital access lab." },
      { src: "https://picsum.photos/seed/compudopt-texas-3/600/400", alt: "Family training event", caption: "Mock San Antonio family tech workshop." },
      { src: "https://picsum.photos/seed/compudopt-texas-4/600/400", alt: "Students collaborating on devices", caption: "Placeholder statewide impact image." }
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
    ],
    photos: [
      { src: "https://picsum.photos/seed/compudopt-california-1/600/400", alt: "Students in modern classroom", caption: "Mock Los Angeles school technology day." },
      { src: "https://picsum.photos/seed/compudopt-california-2/600/400", alt: "Laptop distribution event", caption: "Fictional Oakland community device handoff." },
      { src: "https://picsum.photos/seed/compudopt-california-3/600/400", alt: "Students in media lab", caption: "Sample San Diego digital media lab." },
      { src: "https://picsum.photos/seed/compudopt-california-4/600/400", alt: "Students collaborating", caption: "Placeholder statewide photo story." }
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
    ],
    photos: [
      { src: "https://picsum.photos/seed/compudopt-illinois-1/600/400", alt: "School laptop cart", caption: "Fictional Chicago classroom device access." },
      { src: "https://picsum.photos/seed/compudopt-illinois-2/600/400", alt: "Students using computers", caption: "Sample Aurora digital learning session." }
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
    ],
    photos: [
      { src: "https://picsum.photos/seed/compudopt-florida-1/600/400", alt: "Students with laptops", caption: "Fictional Miami student device distribution." },
      { src: "https://picsum.photos/seed/compudopt-florida-2/600/400", alt: "Training workshop", caption: "Sample Orlando family digital skills workshop." }
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
    ],
    photos: [
      { src: "https://picsum.photos/seed/compudopt-georgia-1/600/400", alt: "Students in tech class", caption: "Mock Atlanta school technology initiative." },
      { src: "https://picsum.photos/seed/compudopt-georgia-2/600/400", alt: "Community learning event", caption: "Sample Savannah family tech night." }
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
    ],
    photos: [
      { src: "https://picsum.photos/seed/compudopt-nc-1/600/400", alt: "Students in digital class", caption: "Fictional Charlotte career-readiness classroom." },
      { src: "https://picsum.photos/seed/compudopt-nc-2/600/400", alt: "Student workshop", caption: "Sample Raleigh digital access training event." }
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
    ],
    photos: [
      { src: "https://picsum.photos/seed/compudopt-ny-1/600/400", alt: "Urban classroom with laptops", caption: "Fictional Bronx classroom technology support." },
      { src: "https://picsum.photos/seed/compudopt-ny-2/600/400", alt: "Students using devices", caption: "Sample Buffalo after-school digital tutoring." },
      { src: "https://picsum.photos/seed/compudopt-ny-3/600/400", alt: "Family engagement event", caption: "Mock citywide parent digital access event." }
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
    ],
    photos: [
      { src: "https://picsum.photos/seed/compudopt-az-1/600/400", alt: "Students in classroom", caption: "Sample Phoenix device access initiative." },
      { src: "https://picsum.photos/seed/compudopt-az-2/600/400", alt: "Community digital training", caption: "Mock Tucson digital literacy workshop." }
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
    ],
    photos: [
      { src: "https://picsum.photos/seed/compudopt-co-1/600/400", alt: "Students using tablets", caption: "Sample Denver digital learning lab." },
      { src: "https://picsum.photos/seed/compudopt-co-2/600/400", alt: "School tech program", caption: "Mock Colorado Springs student tech initiative." }
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
    ],
    photos: [
      { src: "https://picsum.photos/seed/compudopt-wa-1/600/400", alt: "Students with laptops", caption: "Fictional Seattle classroom technology scene." },
      { src: "https://picsum.photos/seed/compudopt-wa-2/600/400", alt: "Computer workshop", caption: "Sample Tacoma enrichment technology lab." }
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
    ],
    photos: [
      { src: "https://picsum.photos/seed/compudopt-oh-1/600/400", alt: "Students in STEM class", caption: "Sample Columbus STEAM classroom photo." },
      { src: "https://picsum.photos/seed/compudopt-oh-2/600/400", alt: "Students in tutoring lab", caption: "Mock Cleveland digital tutoring program." }
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
    ],
    photos: [
      { src: "https://picsum.photos/seed/compudopt-pa-1/600/400", alt: "Students in school lab", caption: "Fictional Philadelphia classroom technology rollout." },
      { src: "https://picsum.photos/seed/compudopt-pa-2/600/400", alt: "Students in workshop", caption: "Sample Pittsburgh technology elective program." }
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
const photoGrid = document.querySelector("#photo-grid");
const photoCount = document.querySelector("#photo-count");
const totalStates = document.querySelector("#total-states");
const totalComputers = document.querySelector("#total-computers");
const totalStudents = document.querySelector("#total-students");

function formatNumber(value) {
  return new Intl.NumberFormat("en-US").format(value);
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
  const meta = Object.values(fipsToState).find((entry) => entry.code === code);
  const details = stateDetails[code];

  document.querySelectorAll(".state").forEach((node) => {
    node.classList.toggle("is-selected", node.dataset.code === code);
  });

  if (!details) {
    stateName.textContent = meta ? meta.name : code;
    stateSummary.textContent = "No fictional pilot data is shown here yet. In a real rollout, this panel could highlight future growth opportunities in this state.";
    detailMetrics.innerHTML = `
      <div class="detail-metric"><strong>Future</strong><span>Expansion market</span></div>
      <div class="detail-metric"><strong>0</strong><span>Sample schools loaded</span></div>
    `;
    cityCount.textContent = "0 cities";
    cityList.innerHTML = `<span class="chip">No demo city data yet</span>`;
    schoolCount.textContent = "0 schools";
    schoolList.innerHTML = `
      <article class="school-card">
        <h4>Potential next step</h4>
        <p>This state could display future school partners, device counts, and local impact stories once real program data is available.</p>
      </article>
    `;
    photoCount.textContent = "1 photo";
    photoGrid.innerHTML = `
      <article class="photo-card">
        <img src="https://picsum.photos/seed/future-state-photo/600/400" alt="Placeholder future community photo">
        <p>Future photo gallery for this state.</p>
      </article>
    `;
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

  const photos = details.photos || [];
  photoCount.textContent = `${photos.length} ${photos.length === 1 ? "photo" : "photos"}`;
  photoGrid.innerHTML = photos.map((photo) => `
    <article class="photo-card">
      <img src="${photo.src}" alt="${photo.alt}">
      <p>${photo.caption}</p>
    </article>
  `).join("");
}

async function drawMap() {
  const svg = d3.select("#usa-map");
  const width = 975;
  const height = 610;

  svg.selectAll("*").remove();

  const defs = svg.append("defs");
  const gradient = defs.append("linearGradient")
    .attr("id", "stateGradient")
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "100%")
    .attr("y2", "100%");

  gradient.append("stop").attr("offset", "0%").attr("stop-color", "#8ec341");
  gradient.append("stop").attr("offset", "100%").attr("stop-color", "#1d76bb");

  const us = await d3.json("https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json");
  const states = topojson.feature(us, us.objects.states).features;
  const nation = topojson.feature(us, us.objects.nation);

  const projection = d3.geoAlbersUsa().fitSize([width, height], nation);
  const path = d3.geoPath(projection);

  svg.append("g")
    .selectAll("path")
    .data(states)
    .join("path")
    .attr("class", (d) => {
      const code = fipsToState[String(d.id).padStart(2, "0")]?.code;
      return `state ${stateDetails[code] ? "state-active" : "state-inactive"}`;
    })
    .attr("data-code", (d) => fipsToState[String(d.id).padStart(2, "0")]?.code || "")
    .attr("d", path)
    .on("mouseenter", (event, d) => {
      const code = fipsToState[String(d.id).padStart(2, "0")]?.code;
      if (code) renderState(code);
    })
    .on("click", (event, d) => {
      const code = fipsToState[String(d.id).padStart(2, "0")]?.code;
      if (code) renderState(code);
    });

  const activeStates = states.filter((d) => {
    const code = fipsToState[String(d.id).padStart(2, "0")]?.code;
    return Boolean(stateDetails[code]);
  });

  svg.append("g")
    .selectAll("text")
    .data(activeStates)
    .join("text")
    .attr("class", "state-label active")
    .attr("transform", (d) => {
      const [x, y] = path.centroid(d);
      return `translate(${x},${y})`;
    })
    .attr("dy", "0.35em")
    .text((d) => fipsToState[String(d.id).padStart(2, "0")]?.code || "");
}

aggregateTotals();
drawMap().then(() => renderState("TX"));
