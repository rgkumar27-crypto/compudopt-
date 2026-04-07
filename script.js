const TEXAS_FIPS = "48";

const texasData = {
  summary: "Texas is the featured state in this demo. Hover or click the state to zoom in, then click a city flag to view fictional school-level distributions.",
  metrics: [
    { label: "Students reached", value: "5,800" },
    { label: "Computers placed", value: "4,650" },
    { label: "Cities featured", value: "4" },
    { label: "Schools supported", value: "14" }
  ],
  cities: [
    {
      key: "el-paso",
      name: "El Paso",
      coordinates: [-106.4850, 31.7619],
      schoolCount: 3,
      summary: "El Paso highlights a border-region expansion story with device access and family support.",
      schools: [
        { name: "Rio Vista Academy", students: 420, computers: 310, impact: "Homework completion rose in the fictional case study after home device access improved." },
        { name: "Franklin Tech Middle", students: 360, computers: 280, impact: "Digital project participation increased across eighth grade classrooms." },
        { name: "Desert Trails Prep", students: 290, computers: 215, impact: "Teachers reported better student consistency on online assignments." }
      ]
    },
    {
      key: "dallas",
      name: "Dallas",
      coordinates: [-96.7970, 32.7767],
      schoolCount: 4,
      summary: "Dallas demonstrates how a metro hub can distribute technology across multiple campuses.",
      schools: [
        { name: "East Dallas College Prep", students: 690, computers: 540, impact: "A fictional digital literacy lab helped ninth graders complete more online coursework independently." },
        { name: "Red River STEM Academy", students: 510, computers: 395, impact: "The demo case links device access to stronger attendance in blended-learning periods." },
        { name: "Oak Cliff Future Leaders", students: 430, computers: 330, impact: "Families in the mock program had more reliable access to school platforms." },
        { name: "North Dallas Pathways", students: 320, computers: 250, impact: "Students showed improved submission rates on digital homework." }
      ]
    },
    {
      key: "houston",
      name: "Houston",
      coordinates: [-95.3698, 29.7604],
      schoolCount: 5,
      summary: "Houston is framed as Compudopt's flagship city in this proposal, with broad school and family engagement.",
      schools: [
        { name: "Northline STEM Academy", students: 820, computers: 620, impact: "Teachers reported stronger homework completion after students received take-home devices." },
        { name: "Gulfton Digital Prep", students: 540, computers: 420, impact: "The sample narrative highlights better participation in online tutoring." },
        { name: "Third Ward Innovation School", students: 470, computers: 360, impact: "Students used devices to complete collaborative projects more consistently." },
        { name: "Aldine Futures Campus", students: 390, computers: 300, impact: "Families in the demo had increased engagement during technology workshops." },
        { name: "East End Learning Hub", students: 310, computers: 240, impact: "School staff described stronger confidence using digital learning platforms." }
      ]
    },
    {
      key: "san-antonio",
      name: "San Antonio",
      coordinates: [-98.4936, 29.4241],
      schoolCount: 2,
      summary: "San Antonio shows how a smaller cluster can still deliver visible school-level outcomes.",
      schools: [
        { name: "Mission Verde Intermediate", students: 560, computers: 410, impact: "Device distribution paired with family tech nights raised parent engagement in the demo scenario." },
        { name: "River City Scholars", students: 380, computers: 290, impact: "The fictional case ties device access to improved class participation and research skills." }
      ]
    }
  ]
};

const stateName = document.querySelector("#state-name");
const stateSummary = document.querySelector("#state-summary");
const detailMetrics = document.querySelector("#detail-metrics");
const cityList = document.querySelector("#city-list");
const cityCount = document.querySelector("#city-count");
const schoolList = document.querySelector("#school-list");
const schoolCount = document.querySelector("#school-count");

function formatNumber(value) {
  return new Intl.NumberFormat("en-US").format(value);
}

function renderTexasOverview() {
  stateName.textContent = "Texas";
  stateSummary.textContent = texasData.summary;

  detailMetrics.innerHTML = texasData.metrics.map((metric) => `
    <div class="detail-metric">
      <strong>${metric.value}</strong>
      <span>${metric.label}</span>
    </div>
  `).join("");

  cityCount.textContent = `${texasData.cities.length} cities`;
  cityList.innerHTML = texasData.cities.map((city) => `<span class="chip">${city.name}</span>`).join("");

  schoolCount.textContent = "Select a city";
  schoolList.innerHTML = `
    <article class="school-card">
      <h4>Choose a city flag</h4>
      <p>Click a Texas city flag on the map to load fictional school-level impact distributions for that metro area.</p>
    </article>
  `;
}

function renderCity(cityKey) {
  const city = texasData.cities.find((item) => item.key === cityKey);
  if (!city) return;

  stateName.textContent = `${city.name}, Texas`;
  stateSummary.textContent = city.summary;

  const students = city.schools.reduce((sum, school) => sum + school.students, 0);
  const computers = city.schools.reduce((sum, school) => sum + school.computers, 0);

  detailMetrics.innerHTML = `
    <div class="detail-metric">
      <strong>${city.schoolCount}</strong>
      <span>Schools impacted</span>
    </div>
    <div class="detail-metric">
      <strong>${formatNumber(students)}</strong>
      <span>Students reached</span>
    </div>
    <div class="detail-metric">
      <strong>${formatNumber(computers)}</strong>
      <span>Computers placed</span>
    </div>
    <div class="detail-metric">
      <strong>${city.name}</strong>
      <span>Featured city</span>
    </div>
  `;

  cityCount.textContent = `${texasData.cities.length} cities`;
  cityList.innerHTML = texasData.cities.map((item) => `
    <span class="chip">${item.name} (${item.schoolCount})</span>
  `).join("");

  schoolCount.textContent = `${city.schools.length} schools`;
  schoolList.innerHTML = city.schools.map((school) => `
    <article class="school-card">
      <h4>${school.name}</h4>
      <div class="school-meta">
        <span class="school-pill">${formatNumber(school.students)} students</span>
        <span class="school-pill">${formatNumber(school.computers)} computers</span>
      </div>
      <p>${school.impact}</p>
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

  const zoomLayer = svg.append("g").attr("class", "zoom-layer");
  const statesLayer = zoomLayer.append("g").attr("class", "states-layer");
  const markerLayer = zoomLayer.append("g").attr("class", "marker-layer");

  const texasFeature = states.find((d) => String(d.id).padStart(2, "0") === TEXAS_FIPS);

  statesLayer.selectAll("path")
    .data(states)
    .join("path")
    .attr("class", (d) => {
      const isTexas = String(d.id).padStart(2, "0") === TEXAS_FIPS;
      return `state ${isTexas ? "state-texas" : "state-other"}`;
    })
    .attr("data-code", (d) => String(d.id).padStart(2, "0") === TEXAS_FIPS ? "TX" : "")
    .attr("d", path);

  const texasShape = statesLayer.select('[data-code="TX"]');

  const texasBounds = path.bounds(texasFeature);
  const dx = texasBounds[1][0] - texasBounds[0][0];
  const dy = texasBounds[1][1] - texasBounds[0][1];
  const x = (texasBounds[0][0] + texasBounds[1][0]) / 2;
  const y = (texasBounds[0][1] + texasBounds[1][1]) / 2;

  const scale = Math.min(7, 1.75 / Math.max(dx / width, dy / height));
  const translateX = width / 2 - scale * x - 30;
  const translateY = height / 2 - scale * y + 35;

  function showFlags(show) {
    markerLayer.selectAll(".city-marker")
      .interrupt()
      .transition()
      .duration(250)
      .style("opacity", show ? 1 : 0)
      .style("pointer-events", show ? "auto" : "none");
  }

  function zoomTexas() {
    zoomLayer.interrupt()
      .transition()
      .duration(700)
      .ease(d3.easeCubicOut)
      .attr("transform", `translate(${translateX},${translateY}) scale(${scale})`);

    showFlags(true);
    renderTexasOverview();
    texasShape.classed("is-selected", true);
  }

  function resetMap() {
    zoomLayer.interrupt()
      .transition()
      .duration(500)
      .ease(d3.easeCubicOut)
      .attr("transform", "translate(0,0) scale(1)");

    showFlags(false);
    renderTexasOverview();
    texasShape.classed("is-selected", false);
  }

  texasShape
    .on("mouseenter", zoomTexas)
    .on("click", zoomTexas);

  const markers = markerLayer.selectAll(".city-marker")
    .data(texasData.cities)
    .join("g")
    .attr("class", "city-marker")
    .attr("transform", (d) => {
      const [mx, my] = projection(d.coordinates);
      return `translate(${mx},${my})`;
    })
    .style("opacity", 0)
    .style("pointer-events", "none")
    .on("click", (event, d) => {
      event.stopPropagation();
      renderCity(d.key);
    });

  markers.append("line")
    .attr("class", "flag-pole")
    .attr("x1", 0)
    .attr("y1", 0)
    .attr("x2", 0)
    .attr("y2", -34);

  markers.append("rect")
    .attr("class", "flag-body")
    .attr("x", 0)
    .attr("y", -34)
    .attr("rx", 6)
    .attr("ry", 6)
    .attr("width", 26)
    .attr("height", 18);

  markers.append("text")
    .attr("class", "flag-count")
    .attr("x", 13)
    .attr("y", -22)
    .text((d) => d.schoolCount);

  markers.append("text")
    .attr("class", "flag-label")
    .attr("x", 13)
    .attr("y", -42)
    .text((d) => d.name);

  svg.on("mouseleave", resetMap);

  renderTexasOverview();
}

drawMap();
