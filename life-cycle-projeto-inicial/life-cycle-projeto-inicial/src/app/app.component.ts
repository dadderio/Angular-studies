import { Component, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app-lista-de-compras';
  // ! significa que vai iniciar vazia
  listaDeCompra! : Array<Item>
  itemParaSerEditado! : Item;

  constructor(
    private listaService : ListaDeCompraService
  ) { }

  ngOnInit(): void {
    this.listaDeCompra = this.listaService.getListaDeCompra();
  }

  editarItem(item: Item){
    this.itemParaSerEditado = item;
  }

}
