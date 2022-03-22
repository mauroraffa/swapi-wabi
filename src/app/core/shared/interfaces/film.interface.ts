export interface Film {
  title: string;
  episode_id: string;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: String;
  imagePath: string;
}

export class Convert {
  public static toFilm(json: string): Film {
    return JSON.parse(json);
  }

  public static filmToJson(value: Film): string {
    return JSON.stringify(value);
  }
}
