import { Service } from "typedi";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

@Service()
export default class PDFService {
  async createCompanyInvoice(params: {
    company: string
    siren: string
    iban: string
    vat: string
    milestones: { name: string; price: number }[]
  }) {
    const pdfDoc = await PDFDocument.create();

    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

    const page = await pdfDoc.addPage();

    const { height } = page.getSize();
    const fontSize = 30;
    try {
      page.drawText(`Company - ${params.company}`, {
        x: 50,
        y: height - 4 * fontSize,
        size: fontSize,
        font: helveticaFont,
        color: rgb(0, 0, 0)
      });

      const pdfBytes = await pdfDoc.save();
      // @ts-ignore
      const pdfBuffer = Buffer.from(pdfBytes.buffer);
      return pdfBuffer;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}
