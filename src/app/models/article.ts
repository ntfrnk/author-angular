
export class Article {
  constructor(
    public id: number,
    public user_id: number,
    public project_id: number,
    public chapter_id: number,
    public title: string,
    public content: string,
    public words: number,
    public chars: number,
    public ordering: number
  ){}
}
