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
    const heleveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    const page = await pdfDoc.addPage();

    const { width, height } = page.getSize();
    const fontSize = 14;
    try {
      page.drawText(`Company - ${params.company}`, {
        x: width / 2 - 100,
        y: height - 10 * fontSize,
        size: fontSize,
        font: helveticaFont,
        color: rgb(0, 0, 0)
      });

      page.drawText(`Siren: ${params.siren}`, {
        x: 40,
        y: height - 20 * fontSize,
        size: fontSize,
        font: helveticaFont,
        color: rgb(0, 0, 0)
      });

      page.drawText(`IBAN: ${params.iban}`, {
        x: 40,
        y: height - 23 * fontSize,
        size: fontSize,
        font: helveticaFont,
        color: rgb(0, 0, 0)
      });
      page.drawText(`VAT number: ${params.vat}`, {
        x: 40,
        y: height - 25 * fontSize,
        size: fontSize,
        font: helveticaFont,
        color: rgb(0, 0, 0)
      });


      let milestoneIndex = 0;
      let total = 0;
      for (const index in params.milestones) {
        milestoneIndex = Number(index) * 3;
        const milestone = params.milestones[index];
        total += Number(milestone.price);
        page.drawText(`${milestone.name}`, {
          x: 40,
          y: height - (milestoneIndex + 28) * fontSize,
          size: fontSize,
          font: helveticaFont,
          color: rgb(0, 0, 0)
        });

        page.drawText(`${milestone.price} €`, {
          x: width - 100,
          y: height - (milestoneIndex + 28) * fontSize,
          size: fontSize,
          font: heleveticaBold,
          color: rgb(0, 0, 0)
        });
      }
      page.drawText(`Total ${total} €`, {
        x: width - 150,
        y: height - (milestoneIndex + 35) * fontSize,
        size: fontSize,
        font: heleveticaBold,
        color: rgb(0, 0, 0)
      });


      const pdfBytes = await pdfDoc.save();
      const pdfBuffer = Buffer.from(pdfBytes.buffer);
      return pdfBuffer;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}
