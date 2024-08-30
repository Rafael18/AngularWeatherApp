import { WeatherDatas } from './../../../../models/interfaces/WeatherDatas';
import { WeatherService } from './../../services/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class WeatherHomeComponent implements OnInit {

  initialCityName = 'São Paulo';

  WeatherDatas!: WeatherDatas;

  constructor(private ServiceWeather : WeatherService){}

  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
  }

  getWeatherDatas(cityName: string) : void {
    this.ServiceWeather.getWeatherDatas(cityName).subscribe({
      next: (response) => {
        response && (this.WeatherDatas = response)
        console.log(this.WeatherDatas.name)
      },
      error: (error) => console.log(error),
    });
  }
}
