function updateStatus(targetId, message, tone) {
  const node = document.getElementById(targetId);
  if (!node) return;
  const stamp = new Date().toLocaleString();
  const safeTone = tone || "normal";
  node.innerHTML = "<strong>[" + stamp + "]</strong> " + message;
  node.style.borderColor = safeTone === "error" ? "#d4a5a5" : "#d8ddd5";
  node.style.background = safeTone === "error" ? "#fff7f7" : "#fbfcfa";
}

function wireDemoButtons() {
  const buttons = document.querySelectorAll("[data-status-target]");
  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const target = btn.getAttribute("data-status-target");
      const message = btn.getAttribute("data-message") || "Status updated.";
      const tone = btn.getAttribute("data-tone") || "normal";
      updateStatus(target, message, tone);
    });
  });
}

document.addEventListener("DOMContentLoaded", wireDemoButtons);

function wireIssueFilter() {
  const select = document.getElementById("Defect-filter");
  if (!select) return;
  select.addEventListener("change", function () {
    const value = select.value;
    const items = document.querySelectorAll(".Defect-item[data-status]");
    items.forEach(function (item) {
      if (value === "all" || item.getAttribute("data-status") === value) {
        item.style.display = "grid";
      } else {
        item.style.display = "none";
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", wireIssueFilter);
