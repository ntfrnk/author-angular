import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: [],
  providers: [UserService]
})
export class HeaderComponent implements OnInit, DoCheck {

  public links: any[] = [];
  public user: any;

  constructor(
    public _userService: UserService
  ) {
    this.loadUser();
    this.loadMenu();
  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.loadUser();
    this.loadMenu();
  }

  loadUser(){
    this.user = this._userService.getUser();
  }

  loadMenu(){
    let items: any[] = [{label: "Proyectos", link: "projects", icon: "folder-white.svg"}];
    if(this.user && this.user.role == 'admin'){
      items.push({label: "Usuarios", link: "users", icon: "user-white.svg"});
    }
    items.push({label: "Configurar", link: "settings", icon: "settings-white.svg"});
    items.push({label: "Salir", link: "login/logout", icon: "power-white.svg"});
    this.links = items;
  }

}
