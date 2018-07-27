// Stimulsoft Reports module
var Stimulsoft = require('stimulsoft-reports-js');
console.log("Stimulsoft Reports loaded");

// Loading fonts
Stimulsoft.Base.StiFontCollection.addOpentypeFontFile("Roboto-Black.ttf");
console.log("Font loaded");

// Creating new report
var report = new Stimulsoft.Report.StiReport();
console.log("New report created");

// Loading report template
report.loadFile("SimpleList.mrt");
console.log("Report template loaded");

// Remove all connections from the report template
report.dictionary.databases.clear();

// Create new DataSet object
var dataSet = new Stimulsoft.System.Data.DataSet("Demo");
// Load JSON data file from specified URL to the DataSet object
dataSet.readJsonFile("Demo.json");
// Remove all connections from the report template
report.dictionary.databases.clear();
// Register DataSet object
report.regData("Demo", "Demo", dataSet);

// Renreding report
report.render();
console.log("Report rendered. Pages count: ", report.renderedPages.count);

// Saving rendered report to file
report.saveDocumentFile("SimpleList.mdc");
console.log("Rendered report saved");

// Export to PDF
var pdfData = report.exportDocument(Stimulsoft.Report.StiExportFormat.Pdf);

// Converting Array into buffer
var buffer = new Buffer(pdfData, "utf-8")

// File System module
var fs = require('fs');

// Saving string with rendered report in PDF into a file
fs.writeFileSync('./SimpleList.pdf', buffer);
console.log("Rendered report saved into PDF-file.");

