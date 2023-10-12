import { useEffect, useState } from "react";
import {
  fetchWeatherByCity,
  fetchForcastByCity,
  fetchWeather,
  fetchForcast,
} from "@/services/services";

const options = { year: "numeric", month: "long", day: "numeric" };

const useFetchWeather = () => {
  const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [city, setCity] = useState("");

  const handleSearch = async () => {
    const info = await fetchWeatherByCity(city);
    const forecast = await fetchForcastByCity(city);
    if (info && forecast) {
      setWeather({
        name: info.name,
        temp: info.main,
        date: new Date(parseInt(`${info.dt}000`)).toLocaleDateString(
          "en-US",
          options
        ),
        description: info.weather[0].description,
        icon: info.weather[0].icon,
        weeklydata: forecast.list,
      });
    }
    setIsLoading(false)
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        const info = await fetchWeather(coords);
        const forecast = await fetchForcast(coords);
        if (info && forecast) {
          setWeather({
            name: info.name,
            temp: info.main,
            date: new Date(parseInt(`${info.dt}000`)).toLocaleDateString(
              "en-US",
              options
            ),
            description: info?.weather[0].description,
            icon: info.weather[0].icon,
            weeklydata: forecast.list,
          });
          setIsLoading(false)
        }
      });
    }
  }, []);

  return {
    isLoading,
    weather,
    handleSearch,
    setCity
  };
};

export default useFetchWeather;
