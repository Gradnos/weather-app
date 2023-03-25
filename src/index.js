import * as weatherFetcher from './weatherFetcher.js';
import {assignData} from './utility';

let data = await weatherFetcher.fetchWeatherToday('tbilisi');

console.log(data);

