import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './login/login.page';
import { AuthGuardService } from './services/auth-guard.service';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'actions',
    loadChildren: () => import('./actions/actions.module').then( m => m.ActionsPageModule)
  },
  {
    path: 'goals',
    loadChildren: () => import('./goals/goals.module').then( m => m.GoalsPageModule)
  },
  {
    path: 'objectives',
    loadChildren: () => import('./objectives/objectives.module').then( m => m.ObjectivesPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'categgories',
    loadChildren: () => import('./categgories/categgories.module').then( m => m.CateggoriesPageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'progressmonitoring',
    loadChildren: () => import('./progressmonitoring/progressmonitoring.module').then( m => m.ProgressmonitoringPageModule)
  },
  {
    path: 'category-modal',
    loadChildren: () => import('./categgories/category-modal/category-modal.module').then( m => m.CategoryModalPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'goalsobjective',
    loadChildren: () => import('./goalsobjective/goalsobjective.module').then( m => m.GoalsobjectivePageModule)
  },
  {
    path: 'goal-modal',
    loadChildren: () => import('./goalsobjective/goal-modal/goal-modal.module').then( m => m.GoalModalPageModule)
  },
  {
    path: 'objective-modal',
    loadChildren: () => import('./goalsobjective/objective-modal/objective-modal.module').then( m => m.ObjectiveModalPageModule)
  },
  {
    path: 'action-creation',
    loadChildren: () => import('./action-creation/action-creation.module').then( m => m.ActionCreationPageModule)
  },  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  }


  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
