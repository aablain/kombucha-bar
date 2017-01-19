import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div *ngFor="let currentKeg of kegs" class="item">
      <div class="textgoeshere">
        <h1>{{currentKeg.name}}</h1>
        <h3>{{currentKeg.brand}}</h3>
        <p>{{currentKeg.sugar}}<span>g of sugar</span></p>
        <h4 [class]="priceColor(currentKeg)"><span>$</span>{{currentKeg.price}}</h4>
        <p>{{currentKeg.amountLeft}} Pints Left</p>
        <button (click)="editKeg(currentKeg)">Edit!</button>
        <button (click)="minusOne(currentKeg)" (click)="checkBelow(currentKeg)">Serve a Pint</button>
        <div class="keg"></div>
      </div>
      <div class="fillit">

      </div>
    </div>
    <hr>
    <div>
      <h3>Edit Keg</h3>
      <label>Enter Keg Name:</label>
        <input [(ngModel)]="selectedKeg.name">
      <label>Enter Keg Brand:</label>
        <input [(ngModel)]="selectedKeg.brand">
      <label>Enter Keg Sugar Content:</label>
        <input [(ngModel)]="selectedKeg.sugar">
      <label>Enter Keg Price:</label>
        <input [(ngModel)]="selectedKeg.price">
    </div>
    <div>
      <form>
      <h1>Add New Keg</h1>
        <label>Drink Name:</label>
        <input #name placeholder="name">
        <label>Brand Name:</label>
        <input #brand placeholder="brand">
        <label>Sugar Amount:</label>
        <input #sugar placeholder="sugar" type="number">
        <label>Price per Pint:</label>
        <input #price placeholder="price" type="number">
        <button (click)="newKeg(name.value, brand.value, sugar.value, price.value)">Add New Drink!</button>
      </form>
    </div>
  </div>
`
})

export class AppComponent {
  kegs: Keg[] = [
    new Keg("Ginger-Lemon", "Health-Ade", 5, 6),
    new Keg("Trilogy", "Enlightened", 4, 5),
    new Keg("Coffee", "Reed's", 16, 4),
    new Keg("Moroccan Mint", "Beyond Brewing Company", 7, 7),
    new Keg("Blood Orange", "bucha", 24, 5),
    new Keg("Asian Pear", "Kombucha Wonder Drink", 8, 6)
  ];
  selectedKeg: Keg = this.kegs[0];

  priceColor(currentKeg){
    if (currentKeg.price > 5){
      return "expensive";
    } else if (currentKeg.price <= 5) {
      return "cheap";
    }
  }

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  minusOne(thisKeg) {
    thisKeg.amountLeft = thisKeg.amountLeft - 1;
  }

  checkBelow(thisKeg) {
    if (thisKeg.amountLeft < 10) {
      return alert("Warning!  Keg needs to be replaced soon.");
    }
  }
  newKeg(name, brand, sugar, price) {
    console.log(name);
    console.log(brand);
    console.log(sugar);
    console.log(price);
    this.kegs.push(new Keg(name, brand, sugar, price));
  }
}

export class Keg {
  public amountLeft: number = 124;
  constructor(public name: string, public brand: string, public sugar: number, public price: number) { }
}
