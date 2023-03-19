import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { initializeApp } from 'firebase/app';
import {getFirestore, collection, getDocs } from 'firebase/firestore/lite';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  public landing!: string;
  firebaseConfig = {
    apiKey: "AIzaSyAIrcWeBvkU8DIxOo7bXm-eoO5SFm5NucU",
    authDomain: "slurbsfirebase.firebaseapp.com",
    projectId: "slurbsfirebase",
    storageBucket: "slurbsfirebase.appspot.com",
    messagingSenderId: "152524002143",
    appId: "1:152524002143:web:85ebef5f12dde38aaadcea"
  };
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.landing = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

}
