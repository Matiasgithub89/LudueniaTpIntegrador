import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
    private router:Router
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

  //envio por url el mensaje predefinido para la vista de Consulta
  consultar(producto:string){
    const url=producto.replace('/', '-');//quito las barras de los titulos, para evitar problema de routing.

    console.log("Producto despues del replace",url)
    this.router.navigate([`/Registro/'"${url}"`]);
    this.dialogRef.close();
  }
}
