import { Component, OnInit } from '@angular/core';
import { ExerciseSixService } from '../../services/exercise-six.service';
import { Rate } from '../../interfaces/USDExchange.interface';

@Component({
  selector: 'app-six',
  templateUrl: './six.component.html',
  styleUrls: ['./six.component.css']
})
export class SixComponent implements OnInit {

  // Bar-chart
  public basicData: any;
  public basicOptions: any;

  // Line-chart
  public data: any;
  public options: any;

  // Operations
  public barLabels: string[] = [];
  public barData: number[] = [];
  public lineLabels: string[] = [];
  public lineData: number[] = [];


  constructor(private exerciseSixService: ExerciseSixService) { }

  ngOnInit(): void {
    this.exerciseSixService.getCurrentExchange().subscribe(({ rates }) => {
      this.barLabels = Object.keys(rates);
      this.barData = Object.values(rates);

      this.barData = this.barData.filter(value => value < 200);

      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

      this.basicData = {
        labels: this.barLabels,
        datasets: [
          {
            label: 'Divisas',
            data: this.barData,
            backgroundColor: 'rgb(153, 102, 255)',
            borderColor: 'rgb(75, 192, 192)',
            borderWidth: 1
          }
        ]
      };

      this.basicOptions = {
        plugins: {
          legend: {
            labels: {
              color: textColor
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: textColorSecondary
            },
            grid: {
              color: surfaceBorder,
              drawBorder: true
            }
          },
          x: {
            ticks: {
              color: textColorSecondary
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false
            }
          }
        }
      };
    });

    this.exerciseSixService.getUSDExchange().subscribe(({ rates }) => {
      this.lineLabels = Object.keys(rates);
      let exchanges = Object.values(rates);
      exchanges.forEach(exchange => {
        this.lineData.push(exchange.USD);
      });

      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

      this.data = {
        labels: this.lineLabels,
        datasets: [
          {
            label: 'Divisa dólar estadounidense',
            data: this.lineData,
            fill: false,
            borderColor: documentStyle.getPropertyValue('--blue-500'),
            tension: 0.4
          }
        ]
      };

      this.options = {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
          legend: {
            labels: {
              color: textColor
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false
            }
          },
          y: {
            ticks: {
              color: textColorSecondary
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false
            }
          }
        }
      };
    })
  }

}
