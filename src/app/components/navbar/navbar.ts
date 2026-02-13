import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router'; // Añadimos Router
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
})
export class NavbarComponent {

  constructor(
    private viewportScroller: ViewportScroller,
    private router: Router // Inyectamos el servicio Router
  ) {}

  public async irASeccion(id: string) {
    // 1. Navegamos a la raíz (Página principal)
    await this.router.navigate(['/']);

    // 2. Esperamos un instante a que cargue y hacemos scroll
    setTimeout(() => {
      this.viewportScroller.scrollToAnchor(id);
    }, 100); // Un pequeño retraso para asegurar que la página cargó
  }
}
