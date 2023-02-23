import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Contrat } from 'src/app/core/model/contrat';
import { Specialite } from 'src/app/core/model/specialite';
import { ContratService } from 'src/app/core/services/contrat.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-list-contrat',
  templateUrl: './list-contrat.component.html',
  styleUrls: ['./list-contrat.component.css']
})
export class ListContratComponent implements OnInit {
  listcontrats:any
  contratList:any
  data:any
  contrat : Contrat
  constructor(private contratservice:ContratService,private HttpClient:HttpClient) { }

  ngOnInit(): void {
    this.contratservice.getcontrat().subscribe(data=>{
      
      this.listcontrats=JSON.parse(JSON.stringify(data));
      console.log('list contrat: ',this.listcontrats);
    
    }
)
   
}

delete(c: Contrat) {
  let i = this.listcontrats.indexOf(c);
this.contratservice.deleteContrat(c.idContrat).subscribe(
    ()=>this.listcontrats.splice(i, 1)
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
        text: 'Contrat',
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

public openPDF(): void {
  let DATA: any = document.getElementById('htmlData');
  html2canvas(DATA).then((canvas) => {
    let fileWidth = 208;
    let fileHeight = (canvas.height * fileWidth) / canvas.width;
    const FILEURI = canvas.toDataURL('image/png');
    let PDF = new jsPDF('p', 'mm', 'a4');
    let position = 0;
    PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
    PDF.save('angular-credit.pdf');
    PDF.setProperties({title: "Dari.tn"})
  });
}


}


