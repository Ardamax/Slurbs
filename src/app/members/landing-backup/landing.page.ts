import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  public landing!: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.landing = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

}
