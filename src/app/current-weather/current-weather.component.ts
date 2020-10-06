import { Component, OnDestroy, OnInit } from '@angular/core'
import { SubSink } from 'subsink'

import { ICurrentWeather } from '../interfaces'
import { WeatherService } from '../weather/weather.service'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit, OnDestroy {
  private subscriptions = new SubSink()
  current: ICurrentWeather
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.weatherService.currentWeather$.subscribe((data) => (this.current = data))
    )
  }

  // tslint:disable-next-line: typedef
  ngOnDestroy() {
    this.subscriptions.unsubscribe()
  }
  // tslint:disable-next-line: typedef
  getOrdinal(date: number) {
    const n = new Date(date).getDate()
    return n > 0
      ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10]
      : ''
  }
}
