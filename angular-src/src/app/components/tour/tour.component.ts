import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { ToursService } from '../../services/tours.service';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {

  tour: Object;
  tourId: String;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toursService: ToursService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.tourId = params.get('id');
        
      }
    );
    this.toursService.findTourById(this.tourId).subscribe(res => {
      this.tour = res;
    },
    err => {
      console.log(err);
      return false;
    });
  }

  onPurchaseClick() {
    this.router.navigate(['/checkout']);
  }

}
