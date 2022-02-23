//putting memo first took longer. naturally means everything that
//is not dependent on the previous result will be calculated immediately, and
//only the dependent parts are waiting for the previous value
//Check it with the following fn console.log(`Took ${new Date().getTime() - startTime} ms`)s


const result = await printingPages.reduce(async (memo, page) => {
    const pdfDoc = await memo;
    const pdf = await PDFDocument.load(await printPDF(page));
    (await pdfDoc.copyPages(pdf, pdf.getPageIndices()))
    .forEach((page) => pdfDoc.addPage(page));
    return pdfDoc;
   }, PDFDocument.create());