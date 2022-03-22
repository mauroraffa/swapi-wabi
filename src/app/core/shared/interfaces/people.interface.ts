export interface People {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: any[];
  vehicles: string[];
  starships: string[];
  created: Date;
  edited: Date;
  url: string;
  imagePath: string;
  id: string;
}

export class Convert {
  public static toPeople(json: string): People {
    return JSON.parse(json);
  }

  public static peopleToJson(value: People): string {
    return JSON.stringify(value);
  }
}
