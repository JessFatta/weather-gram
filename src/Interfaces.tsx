export interface AppState {
    key: number,
    location: string,
    current: {
      temp_f: number,
      feelslike_f: number,
      condition: {text: string, icon: string},
      humidity: number,
      wind_mph: number,
      uv: number,
    },
    favorites: Object[],
    error: boolean
}

export interface Faves {
    key: number,
    current: {
        temp_f: number;
        feelslike_f: number;
        condition: {
            text: string;
            icon: string;
        };
        humidity: number;
        wind_mph: number;
        uv: number;
    }
    location: string
}

export interface FavoritesProps {
  favorites: Faves[],
  removeFavoriteLocation: Function
}


export interface NavProps {
  setLocation: Function
  getRandomCity: Function
}

export interface ForecastCardProps {
    location: string,
    date: string,
    maxtemp_f: number,
    mintemp_f: number,
    avghumidity: number,
    daily_chance_of_rain: number,
    text: string,
    icon: string
}

  export interface FavoritesCardProps {
    key: number,
    location: string,
    current: {
      temp_f: number,
      feelslike_f: number,
      condition: {text: string, icon: string},
      humidity: number,
      wind_mph: number,
      uv: number
  },
    removeFavoriteLocation: Function
}

export interface CardProps {
    key: number,
    location: string,
    current: {
      temp_f: number,
      feelslike_f: number,
      condition: {text: string, icon: string},
      humidity: number,
      wind_mph: number,
      uv: number
  },
    saveFavoriteLocation: Function
}
