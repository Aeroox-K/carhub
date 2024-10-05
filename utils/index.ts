import { CarProps, FilterProps } from "@/types";

    export async function fetchCars(filters: FilterProps) {
        const { manufacturer, year, model, limit, fuel} = filters;
        // d4f45d3467msh158703375f7291bp154a94jsn218220ceaeaf
        const headers = {  
                'X-RapidAPI-Key': '8c3c63b060mshec732bf388a1feap10c595jsnece2318b856b',
            	  'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        }

        // https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}
        //     &limit=${limit}&fuel_type=${fuel}
        // https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla

        const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, { headers: headers, } 
        );

        const result = await response.json();

        return result;
        
    };

    

    export const calculateCarRent = (city_mpg: number, year: number) => {
        const basePricePerDay = 50; // Base rental price per day in dollars
        const mileageFactor = 0.1; // Additional rate per mile driven
        const ageFactor = 0.05; // Additional rate per year of vehicle age
      
        // Calculate additional rate based on mileage and age
        const mileageRate = city_mpg * mileageFactor;
        const ageRate = (new Date().getFullYear() - year) * ageFactor;
      
        // Calculate total rental rate per day
        const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
      
        return rentalRatePerDay.toFixed(0);
      };

      export const generateCarImageUrl = (car: CarProps, angle? : string) => {

        const url = new URL ('http://cdn.imagin.studio/getimage');

        const { make, year, model } = car;
        'hrjavascript-mastery'

        url.searchParams.append('make', make);
        url.searchParams.append('modelFamily', model.split(' ')[0]);
        url.searchParams.append('zoomType', 'fullscreen');
        url.searchParams.append('modelYear', `${year}`);
        url.searchParams.append('angle', `${angle}`);

        return `${url}`;

      }

      export const updateSearchParams = (type: string, value: string) => {
        const searchParams = new URLSearchParams(window.
            location.search);
  
          searchParams.set(type, value)
         
   
          const newPathname = `${window.location.pathname}?${searchParams.toString()}`

          return newPathname;
      }
