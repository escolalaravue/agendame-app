import {
  Home2Icon,
  CalendarIcon,
  UsersIcon,
  Settings2Icon
} from 'vue-tabler-icons';

export interface menu {
  header?: string;
  title?: string;
  icon?: any;
  to?: object;
  chip?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
}

const sidebarItem: menu[] = [
  {
    title: 'Home',
    icon: Home2Icon,
    to: { name: 'dashboard' },
  },
  {
    title: 'Agenda',
    icon: CalendarIcon,
    to: { name: 'agenda' },
  },
  {
    title: 'Clientes',
    icon: UsersIcon,
    to: { name: 'clients' },
  },
  {
    title: 'Configurações',
    icon: Settings2Icon,
    to: { name: 'settings' },
  },
];

export default sidebarItem;
