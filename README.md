# Weather App

A simple weather application built with vanilla JavaScript that fetches and displays real-time weather data using the [WeatherAPI](https://www.weatherapi.com/).

## Features

- Get current weather data by city name
- Displays:
  - Country
  - Region
  - Weather condition
  - Weather icon
- Default city on load: **Manila**

## Demo

View it live [here](https://hinds1ght.github.io/weather-app/)

## How It Works

1. User enters a city name and submits the form.
2. App sends a `fetch` request to the WeatherAPI.
3. API responds with current weather data in JSON format.
4. App updates the DOM with relevant weather details.
