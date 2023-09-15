import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

function getWidthPer(doc, num) {
  //num : width percent
  if (num > 100) return; //전달받은 수치가 100보다 클 때 예외처리(상황에 따라 추가 예외 처리 필요)

  const PAGE_WIDTH =
    doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
  return ((PAGE_WIDTH - MARGIN_SIZE * 2) / 100) * num;
}

export function downloadProblem(data) {
  // 건드리지 말것
  const doc = new jsPDF("p", "mm", "a4");
  doc.addFont("fonts/malgun.ttf", "malgun", "normal");
  doc.setFont("malgun");
  // 여기까지

  const body = [
    [
      {
        content: "데이터1",
        styles: { halign: "center", lineColor: [0, 0, 0], lineWidth: 0.3 },
      },
      {
        content: "데이터2",
        styles: { halign: "center", lineColor: [0, 0, 0], lineWidth: 0.3 },
      },
      {
        content: "데이터3",
        styles: { halign: "center", lineColor: [0, 0, 0], lineWidth: 0.3 },
      },
    ],
  ];

  autoTable(doc, {
    theme: "plain",
    styles: { font: "malgun" },
    margin: { top: 20, left: 15, right: 15, bottom: 20 },
    tableLineColor: [0, 0, 0],
    tableLineWidth: 0.3,
    headStyles: {
      halign: "center",
      valign: "middle",
      fillColor: [234, 234, 234],
      lineColor: [0, 0, 0],
      lineWidth: 0.3,
    },
    head: [["No.", "Word", "Meaning"]],
    body: body,
  });

  doc.save("table.pdf");
}
