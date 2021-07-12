import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    children: [
      {
        name: 'Consulta dati',
        url: '/data',
        icon: 'icon-list'
      }
    ]
  }
];
