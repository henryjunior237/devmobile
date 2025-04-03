import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonTabButton, IonIcon, IonLabel,IonList, IonItem, IonCard, IonCardTitle, IonCardHeader, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonCardContent, IonCardSubtitle, IonCardHeader, IonCardTitle, IonCard, IonItem, IonLabel, IonIcon, IonTabButton, IonButton, IonHeader, IonToolbar, IonTitle, IonContent,IonList],
})
export class HomePage {
  constructor(private alertController: AlertController ) {
  }
}