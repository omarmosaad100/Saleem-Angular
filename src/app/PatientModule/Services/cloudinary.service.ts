import { Injectable } from '@angular/core';
import * as cloudinary from 'cloudinary-core';

@Injectable({
  providedIn: 'root'
})
export class CloudinaryService {

cl : any;
constructor() {
  this.cl = new cloudinary.Cloudinary({
    cloud_name: 'dnvinlruh',
    api_key: '726724739225593',
    api_secret: 'x49ioTO1xF-XRZ3jgoXphG3F4KM'
  });

}


}
