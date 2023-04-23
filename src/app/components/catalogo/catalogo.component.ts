import { AfterViewInit, Component, OnInit,  ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DetalleComponent } from '../detalle/detalle.component';
import { AuthService } from 'src/app/services/auth.service';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductData } from 'src/app/interfaces/productData';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BuscadorComponent } from '../buscador/buscador.component';




@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit, AfterViewInit{

  isLogin = false;
  displayedColumns: string[] = ['id', 'title', 'condition','price', 'catalog_product_id','detalle'];
  dataSource: MatTableDataSource<ProductData>;

  idEjemplo:number;
  nombreEjemplo:string;
  precioEjemplo:string;



  buscado:string="reel"
  @ViewChild(BuscadorComponent) searchProduct: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private authService:AuthService,
    private productosService:ProductosService,
    public dialog: MatDialog//para usar el dialog en el detalle
  ) {
    this.buscar(this.buscado);

    //habilito detalle si esta logueado
    this.authService.isLogin()
    .subscribe(value=>{
      this.isLogin=value
    })

  }
  buscar(_buscado:string){
    this.buscado=_buscado;
    this.productosService.getAll(this.buscado)
    .subscribe({
      next:(data:any)=>{
        console.log(data.results)
        this.dataSource= new MatTableDataSource(data.results);//asigno al data source el array de productos
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:(e)=>{
        console.log(e)
      }
    })
  }
  addItemSearch(newItem: string) {
    this.buscar(newItem);
  }
  ngOnInit() {

  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openDialog(id:string): void {
    let _id=id
    const dialogRef = this.dialog.open(DetalleComponent, {
      data: {id:_id},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
}
}

