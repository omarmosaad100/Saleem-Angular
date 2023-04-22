import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {
  Features:any = [
    {
      img : "../../../assets/Images/HomePage/Services/chronicCare.svg",
      header:"Manage Your Condition ",
      description : "High blood pressure, diabetes, asthma, allergies, high cholesterol, arthritis, thyroid disorders"
    },
    {
      img : "../../../assets/Images/HomePage/Services/womensHealth.svg",
      header:"Women's Health",
      description : "UTI, birth control, menopause, period problems, yeast infections, skin and hair care"
    },
    {
      img : "../../../assets/Images/HomePage/Services/childrensHealth-c55824f9d8d8aa210c8e37b105d07b28.svg",
      header:"Children's Health",
      description : "Cold and flu symptoms, diarrhea or constipation, skin rashes, allergies"
    },
    {
      img : "../../../assets/Images/HomePage/Services/wellnessPreventionLifestyle-da385e9e6793e202f3db6a2af351725f.svg",
      header:"Wellness, Prevention & Lifestyle",
      description : "Weight counseling, skin and hair care, supplements, health screenings, stress reduction"
    },

  ]


}
