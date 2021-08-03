export class Pic{

  constructor(data) {
      this.date = data.date,
      this.hdurl = data.hdurl,
      this.copyright = data.copyright,
      this.explanation = data.explanation,
      this.media_type = data.media_type
    
    if (this.media_type != "image") {
      this.hdurl = data.url
    } 
  }

}