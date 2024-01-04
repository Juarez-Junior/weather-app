import { weatherDatas } from 'src/app/models/interfaces/WeatherDatas';
import { Component, Input} from '@angular/core';
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: []
})
export class WeatherCardComponent {
  // Dados da previsão do tempo recebidos pelo componente pai
  @Input() weatherDatasInput!: weatherDatas;
 
  minTemperatureIcon = faTemperatureLow;
  maxtemperatureIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind; 
}
