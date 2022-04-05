import { Component, OnInit, NgZone, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
// import { CrudService } from './../../service/crud.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public Categories = [];
  public CategoriesFiltered = [];

  @ViewChild('username', { static: true }) categoryElm: ElementRef;
  constructor(categoryElm: ElementRef) {
    this.categoryElm = categoryElm;
  }


  ngOnInit(): void {
    
    fetch('https://api.publicapis.org/categories')
    .then(response => response.json())
    .then(data => {
      this.Categories = data.categories;
      this.CategoriesFiltered = data.categories;
    });
  }

  filterCategory(category: any = '') {
    this.CategoriesFiltered = this.Categories;
    if(category) {
      this.CategoriesFiltered = this.Categories.filter(n => n == category);
    }

  }
  
}
