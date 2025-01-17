const path = require("path");
const fs = require("fs");

const accessibilityReport = path.resolve(__dirname, "accessibility-report.html");
const performanceReport = path.resolve(__dirname, "performance-report.html");
const mochawesomeReport = path.resolve(__dirname, "cypress", "reports", "index.html");

console.log("\nTest Summary Reports:");
console.log("=".repeat(40));
console.log("📊 Accessibility Report: ", accessibilityReport);
console.log("📈 Performance Report:  ", performanceReport);
console.log("🧪 Mochawesome Report:  ", mochawesomeReport);
console.log("=".repeat(40));

// Ensure reports exist
[accessibilityReport, performanceReport, mochawesomeReport].forEach((report) => {
    if (!fs.existsSync(report)) {
        console.warn(`❌ Missing report: ${report}`);
    }
});
