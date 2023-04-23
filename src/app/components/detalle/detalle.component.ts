import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductData } from 'src/app/interfaces/productData';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
dataProduct:any
  constructor(
    private productosService:ProductosService,
    public dialogRef: MatDialogRef<DetalleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductData,
  ) {
    this.productosService.getById(data.id)
    .subscribe({
      next:(data:any)=>{
        console.log(data)
        this.dataProduct= data;
      },
      error:(e)=>{
        console.log(e)
      }
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    console.log("id en el detalle:",this.dataProduct)
  }

}
