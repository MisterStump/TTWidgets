const sidebarToggle = document.querySelector("#sidebar-toggle");
const desktopViewport = window.matchMedia("(min-width: 721px)");

function setSidebarOpen(isOpen) {
  document.body.classList.toggle("sidebar-open", isOpen);
  document.body.classList.toggle("sidebar-collapsed", !isOpen);
  sidebarToggle.setAttribute("aria-expanded", String(isOpen));
  sidebarToggle.setAttribute("aria-label", `${isOpen ? "Collapse" : "Expand"} sidebar`);
  sidebarToggle.title = `${isOpen ? "Collapse" : "Expand"} sidebar`;
}

setSidebarOpen(desktopViewport.matches);
sidebarToggle.addEventListener("click", () => {
  setSidebarOpen(sidebarToggle.getAttribute("aria-expanded") !== "true");
});
desktopViewport.addEventListener("change", (event) => setSidebarOpen(event.matches));

const demoButton = document.querySelector("#demo-button");
const demoOutput = document.querySelector("#demo-output");

if (demoButton && demoOutput) {
  let clickCount = 0;
  demoButton.addEventListener("click", () => {
    clickCount += 1;
    demoOutput.textContent = `Button clicked ${clickCount} ${clickCount === 1 ? "time" : "times"}.`;
  });
}