import CalendarIcon from 'assets/icons/dashboard-calendar.svg';
import ChatIcon from 'assets/icons/dashboard-chat.svg';
import EmailIcon from 'assets/icons/dashboard-email.svg';
import FilesIcon from 'assets/icons/dashboard-files.svg';
import GroupsIcon from 'assets/icons/dashboard-groups.svg';
import PeopleIcon from 'assets/icons/dashboard-people.svg';
import SocialIcon from 'assets/icons/dashboard-social.svg';
import TasksIcon from 'assets/icons/dashboard-tasks.svg';

import AdminIcon from 'assets/icons/dashboard-admin.svg';
import DossierIcon from 'assets/icons/dashboard-dossier.svg';
import ReportsIcon from 'assets/icons/dashboard-reports.svg';
import SalesIcon from 'assets/icons/dashboard-sale.svg';

import NetworkIcon from 'assets/icons/dashboard-network.svg';
import FinanceIcon from 'assets/icons/dashboard-finance.svg';
import ServiceIcon from 'assets/icons/dashboard-service.svg';
import TeamIcon from 'assets/icons/dashboard-team.svg';
import CMAIcon from 'assets/icons/dashboard-cma.svg';

export const connectMenu = [
  {
    label : 'Social',
    icon  : SocialIcon,
    anchor: 'http://app.bluavenu.com/social/news/category/all'
  },
  {
    label : 'People',
    icon  : PeopleIcon,
    anchor: 'http://app.bluavenu.com/people'
  },
  {
    label : 'Chat',
    icon  : ChatIcon,
    anchor: 'http://app.bluavenu.com/chat'
  },
  {
    label : 'Calendar',
    icon  : CalendarIcon,
    anchor: 'http://app.bluavenu.com/calendar/day'
  },
  {
    label : 'Tasks',
    icon  : TasksIcon,
    anchor: 'http://app.bluavenu.com/tasks/all'
  },
  {
    label : 'Groups',
    icon  : GroupsIcon,
    anchor: 'http://app.bluavenu.com/groups'
  },
  {
    label : 'Refer',
    icon  : EmailIcon,
    anchor: 'http://app.bluavenu.com/social/emailhub/inbox'
  },
];

export const appsMenu = [
  {
    label : 'Medical Shop',
    icon  : SalesIcon,
    anchor: 'http://app.bluavenu.com/sales/contacts'
  },
  {
    label : 'Appointment',
    icon  : DossierIcon,
    anchor: 'http://app.bluavenu.com/documents/category/all'
  },
  {
    label : 'Home Care',
    icon  : AdminIcon,
    anchor: 'http://app.bluavenu.com/admin/home'
  },
];

export const demoMenu = [
  {
    label : 'Network',
    icon  : NetworkIcon,
    anchor: '/'
  },
  {
    label : 'Email',
    icon  : EmailIcon,
    anchor: 'http://demo.bluavenu.com/transactions/table/index.html'
  },
  {
    label : 'Finance',
    icon  : FinanceIcon,
    anchor: 'http://demo.bluavenu.com/transactions/table/index.html'
  },
  {
    label : 'Service',
    icon  : ServiceIcon,
    anchor: 'http://demo.bluavenu.com/tickets/list/'
  },
  {
    label : 'Team',
    icon  : TeamIcon,
    anchor: 'http://app.bluavenu.com/team/dashboard'
  },
  {
    label : 'CMA',
    icon  : CMAIcon,
    anchor: 'http://demo.bluavenu.com/CMA/list/index.html'
  },
];
