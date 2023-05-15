const API_KEY = process.env.API_KEY;

export class NasaImage {
  constructor(
    public copyright?: string,
    public date?: string,
    public explanation?: string,
    public hdurl?: string,
    public media_type?: string,
    public service_version?: string,
    public title?: string,
    public url?: string
  ) {}

  async getPic(): Promise<NasaImage> {
    try {
      const resp = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
      const json = resp.json();
      return json;
    } catch(e) {
      throw Error(e);
    }
  }
}