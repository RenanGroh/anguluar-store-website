import { Component, OnInit } from '@angular/core';
import { IProduto, produtos } from '../produtos';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent implements OnInit {

  produtos: IProduto[] | undefined;

  constructor(
    private produtosService: ProdutosService
  ) {

  }

  ngOnInit(): void {
    console.log("ProdutosComponent carregado");
    this.produtos = this.produtosService.getAll();
  }


}
