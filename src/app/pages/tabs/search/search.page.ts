import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  @ViewChild('searchInput') sInput;
  model: any = {
    icon: 'search-outline',
    title: 'No Restaurants Record Found'
  };
  allRestaurants: any[] = [
    {
      uid: '12wefdss',
      cover: 'assets/imgs/1.jpg',
      name: 'Stayfit',
      short_name: 'stayfit',
      cuisines: [
        'Italian',
        'Mexican'
      ],
      rating: 5,
      delivery_time: 25,
      price: 100
    },
    {
      uid: '12wefsdsdss',
      cover: 'assets/imgs/2.jpg',
      name: 'Stayfit1',
      short_name: 'stayfit1',
      cuisines: [
        'Italian',
        'Mexican'
      ],
      rating: 5,
      delivery_time: 25,
      price: 100
    },
    {
      uid: '12wefsdsdsgbs',
      cover: 'assets/imgs/3.jpg',
      name: 'Stayfit3',
      short_name: 'stayfit3',
      cuisines: [
        'Italian',
        'Mexican'
      ],
      rating: 5,
      delivery_time: 25,
      price: 100
    }
  ];
  restaurants: any[] = [];
  query: any;
  isLoading: boolean = false;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.sInput.setFocus();
    }, 500);
  }

  async onSearchChange(event) {
    this.query = event.detail.value.toLowerCase();
    this.isLoading = true; // Set isLoading to true before filtering starts
    this.restaurants = []; // Clear previous search results

    if (this.query.length > 0) {
      setTimeout(() => {
        // Simulating an asynchronous operation with setTimeout
        this.restaurants = this.allRestaurants.filter((element) => {
          return element.short_name.includes(this.query);
        });

        this.isLoading = false; // Set isLoading to false after filtering is complete
      }, 3000); // Simulated delay of 3 seconds
    } else {
      this.isLoading = false; // If query is empty, set isLoading to false immediately
    }
  }


}
