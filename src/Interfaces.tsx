export interface AppState {
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
  favorites: Faves[]
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
    location: string,
    current: {
      temp_f: number,
      feelslike_f: number,
      condition: {text: string, icon: string},
      humidity: number,
      wind_mph: number,
      uv: number
  }
}

export interface CardProps {
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
