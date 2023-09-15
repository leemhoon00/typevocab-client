import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

const MARGIN_SIZE = 15;

function getWidthPer(doc, num) {
  //num : width percent
  if (num > 100) return; //전달받은 수치가 100보다 클 때 예외처리(상황에 따라 추가 예외 처리 필요)

  const PAGE_WIDTH =
    doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
  return ((PAGE_WIDTH - MARGIN_SIZE * 2) / 100) * num;
}

export function downloadAnswer(data) {
  // 건드리지 말것
  const doc = new jsPDF("p", "mm", "a4");
  doc.addFont("fonts/malgun.ttf", "malgun", "normal");
  doc.setFont("malgun");
  // 여기까지

  const numColWidth = getWidthPer(doc, 6);
  const otherColWidth = getWidthPer(doc, 47);

  const body = data.map((item, index) => [
    {
      content: index + 1,
      styles: { halign: "center", lineColor: [0, 0, 0], lineWidth: 0.3 },
    },
    {
      content: item.word,
      styles: { halign: "center", lineColor: [0, 0, 0], lineWidth: 0.3 },
    },
    {
      content: item.meaning,
      styles: { halign: "center", lineColor: [0, 0, 0], lineWidth: 0.3 },
    },
  ]);

  autoTable(doc, {
    theme: "plain",
    styles: { font: "malgun" },
    margin: { top: 20, left: MARGIN_SIZE, right: MARGIN_SIZE, bottom: 20 },
    tableLineColor: [0, 0, 0],
    tableLineWidth: 0.3,
    columnStyles: {
      0: { cellWidth: numColWidth },
      1: { cellWidth: otherColWidth },
      2: { cellWidth: otherColWidth },
    },
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

export function downloadProblem(data) {
  // 건드리지 말것
  const doc = new jsPDF("p", "mm", "a4");
  doc.addFont("fonts/malgun.ttf", "malgun", "normal");
  doc.setFont("malgun");
  // 여기까지

  const numColWidth = getWidthPer(doc, 6);
  const otherColWidth = getWidthPer(doc, 47);

  const body = data.map((item, index) => [
    {
      content: index + 1,
      styles: { halign: "center", lineColor: [0, 0, 0], lineWidth: 0.1 },
    },
    {
      content: item.word,
      styles: { halign: "center", lineColor: [0, 0, 0], lineWidth: 0.1 },
    },
    {
      content: "",
      styles: { halign: "center", lineColor: [0, 0, 0], lineWidth: 0.1 },
    },
  ]);

  autoTable(doc, {
    theme: "plain",
    styles: { font: "malgun" },
    margin: { top: 20, left: MARGIN_SIZE, right: MARGIN_SIZE, bottom: 20 },
    tableLineColor: [0, 0, 0],
    tableLineWidth: 0.3,
    columnStyles: {
      0: { cellWidth: numColWidth },
      1: { cellWidth: otherColWidth },
      2: { cellWidth: otherColWidth },
    },
    headStyles: {
      halign: "center",
      valign: "middle",
      fillColor: [234, 234, 234],
      lineColor: [0, 0, 0],
      lineWidth: 0.1,
    },
    head: [["No.", "Word", "Meaning"]],
    body: body,
  });

  doc.save("table.pdf");
}
