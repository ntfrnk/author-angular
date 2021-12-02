

export class Utilities {

  sanitize(html: string){
    let newstring = JSON.stringify(html);
    return newstring;
  }

}
