import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor() { }

 public addNumbers(a: number, b: number){ 
    return a + b; 
} 
public sub(a: number, b: number){ 
  return a - b; 
} 
}
