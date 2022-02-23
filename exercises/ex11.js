//there are 2 lines of code, which  of the foll took longer?
const arr = [1, 2, 3];
const startTime = new Date().getTime();
const asyncRes = await arr.reduce(async (memo, e) => {
 await sleep(10);
 return (await memo) + e;
}, 0);

const arr = [1, 2, 3];
const startTime = new Date().getTime();
const asyncRes = await arr.reduce(async (memo, e) => {
 await memo;
 await sleep(10);
 return (await memo) + e;
}, 0);


//modify the foll code so that it runs faster
const result = await printingPages.reduce(async (memo, page) => {
    const pdf = await PDFDocument.load(await printPDF(page));
    const pdfDoc = await memo;
    (await pdfDoc.copyPages(pdf, pdf.getPageIndices()))
    .forEach((page) => pdfDoc.addPage(page));
    return pdfDoc;
   }, PDFDocument.create());
   