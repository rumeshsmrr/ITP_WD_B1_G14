import jsPDF from "jspdf";

import "jspdf-autotable";

const generatePDF = (report) => {
  // initialize jsPDF
  const doc = new jsPDF();

  // define the columns we want and their titles

  const tableColumn = ["No", "User Name","NIC Number", "Role", "Salary (Rs.)", "Phone Number", "Sex", "Äge"];

  // define an empty array of rows

  const tableRows = [];

  // for each ticket pass all its data into an array

  let no = 0;

  report.forEach((report) => {
    no++;

    const reportData = [no, report.userName, report.nic ,report.role, report.salary, report.pNumber, report.sex, report.age ];

    // push each tickcet's info into a row
    console.log("reportData", reportData);

    tableRows.push(reportData);
  });

  //startY is basically margin-top
  var img = new Image();
  img.src =
    "https://res.cloudinary.com/waste123/image/upload/v1679341173/Assgnment/dqim8ikfg7n6ahq92imh.png";
  doc.addImage(img, "jpg", 3, 3, 200, 60);

  //doc.autoTable(tableColumn, tableRows, { startY: 70 });

  doc.autoTable({
    head: [tableColumn],
    body: tableRows,
    headerStyles: {
      lineWidth: 0.1,
      lineColor: [0, 0, 0],
      fillColor: [168, 168, 168],
    },
    bodyStyles: {
      lineWidth: 0.1,
      lineColor: [0, 0, 0],
      fillColor: [255, 255, 255],
    },
    startY: 70,
  });

  const date = Date().split(" ");

  // we use a date string to generate our filename.

  const dateStr = date[2] + date[3] + date[4];

  doc.setFontSize(12);

  // we define the name of our PDF file.

  doc.save(`Monthly User Report_${dateStr}.pdf`);
};

export default generatePDF;