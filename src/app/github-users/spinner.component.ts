import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-spinner',
  standalone: true,
  template: `
    <div class="spinner-container">
      <div class="spinner" role="status">
        <span class="sr-only"></span>
      </div>
    </div>
  `,
  styles: [`
    .spinner-container {
      position: absolute;
      top: 50%;
      left: 50%;
    }
    .spinner {
      border: 8px solid #f3f3f3;
      border-radius: 50%;
      border-top: 8px solid #3498db;
      width: 40px;
      height: 40px;
      -webkit-animation: spin 2s linear infinite;
      animation: spin 2s linear infinite;
    }
    @-webkit-keyframes spin {
      0% { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `]
})
export class SpinnerComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
}
