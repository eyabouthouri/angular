import { Component, OnInit } from '@angular/core';
import { Contrat } from 'src/app/core/model/contrat';
import { Router } from '@angular/router';
import { ContratService } from 'src/app/core/services/contrat.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {

  constructor(private contratService :ContratService ,protected router: Router) { }
contrat : Contrat;
contratList:any;
  ngOnInit(): void {



    this.contratService.getcontrat().subscribe(data=>{
      
      this.contratList=JSON.parse(JSON.stringify(data));
      console.log('list contrat: ',this.contratList);

  }
    )
}





  generatePDF(action = 'open') {
    let docDefinition = {
      content: [
        {
          text: 'Dari.tn',
          fontSize: 16,
          alignment: 'center',
          color: '#047886'
        },
        {
          text: 'Credit',
          fontSize: 20,
          bold: true,
          alignment: 'center',
          decoration: 'underline',
          color: 'skyblue'
        },
        {
          text: 'Details',
          style: 'sectionHeader'
        },
        {
          columns: [
            [
              {
                text: this.contrat.montantContrat,
                bold:true
              },
              { text: this.contrat.dateDebutContrat },
              { text: this.contrat.dateFinContrat },
              { text: this.contrat.specialite },
              
            ],
            [
              {
                text: `Date: ${new Date().toLocaleString()}`,
                alignment: 'right'
              },
              
            ]
          ]
        },
        {
          text: 'Order Details',
          style: 'sectionHeader'
        },
        {
          text: 'Additional Details',
          style: 'sectionHeader'
        },
        {
          columns: [
            [{ qr: `${this.contrat.idContrat}`, fit: '50' }],
            [{ text: 'Signature', alignment: 'right', italics: true}],
          ]
        },
        {
          text: 'Terms and Conditions',
          style: 'sectionHeader'
        },
        {
            ul: [
              ' ok.',
              'This is system generated file.',
            ],
        }
      ],
      styles: {
        sectionHeader: {
          bold: true,
          decoration: 'underline',
          fontSize: 14,
          margin: [0, 15,0, 15]          
        }
      }
      
    };

}
}
