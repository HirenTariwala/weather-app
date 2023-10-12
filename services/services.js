export const fetchWeather = async (coords) => {
  try {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lng}&appid=${process.env.API_KEY}&units=metric`
    );
    const res = await data.json();
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const fetchForcast = async (coords) => {
  try {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lng}&appid=${process.env.API_KEY}&units=metric`
    );
    const res = await data.json();
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const fetchWeatherByCity = async (city) => {
  try {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.API_KEY}&units=metric&q=${city}`
    );
    const res = await data.json();
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const fetchForcastByCity = async (city) => {
  try {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?appid=${process.env.API_KEY}&units=metric&q=${city}`
    );
    const res = await data.json();
    return res;
  } catch (error) {
    console.error(error);
  }
};
