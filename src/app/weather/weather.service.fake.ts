import { Observable, of } from 'rxjs'

import { ICurrentWeather } from '../interfaces'
import { IWeatherService } from './weather.service'

export const fakeWeather: ICurrentWeather = {
  city: 'Bethesda',
  country: 'US',
  date: 1478452216,
  image: '',
  temperature: 280.02,
  description: 'light intensity drizzle',
}

export class WeatherServiceFake implements IWeatherService {
  public getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {
    return of(fakeWeather)
  }
}
