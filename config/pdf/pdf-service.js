const PDFDocument = require('pdfkit');

function buildPDF(heading, data, dataCallback, endCallback) {
  const doc = new PDFDocument();
  doc.on('data', dataCallback);
  doc.on('end', endCallback);
  doc.text(heading + '\n\n', {
    width: 410,
    align: 'center',
  });
  if (typeof data === 'string') {
    doc.text(data);
  } else if (data instanceof Array) {
    data.forEach(item => {
      doc.fillColor(item.fillColor).text(item.text, { align: item.align });
      if (item.url) {
        doc.fillColor(item.url.fillColor).text(item.url.title, {
          link: item.url.link,
        });
      }
      doc.fillColor('black').text('\n');
    });
  }
  doc.text('\n Generado por Agoratrax', {
    width: 410,
    align: 'center',
  });
  doc.text('www.agoratrax.farm', {
    underline: true,
    link: 'https://www.agoratrax.farm',
    width: 410,
    align: 'center',
  });

  // finalize the PDF and end the stream
  doc.end();
}

module.exports = { buildPDF };
