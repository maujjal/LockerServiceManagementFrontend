import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './SignIn/sign-in/sign-in.component';
import { SignUpComponent } from './SignUp/sign-up/sign-up.component';
import { MenuComponent } from './LSMenu/menu/menu.component';
import { HomeComponent } from './HomePageDashboard/home/home.component';
import { CreateComponent } from './LSM/DrawerAllocate/create/create.component';
import { UpdateGetComponent } from './LSM/DrawerAllocate/update-get/update-get.component';
import { DLCreateComponent } from './LSM/DrawerRelease/dlcreate/dlcreate.component';
import { DLGetUpdateComponent } from './LSM/DrawerRelease/dlget-update/dlget-update.component';

import { LSCreateComponent } from './LSM/LockerSpecification/lscreate/lscreate.component';
import { LSGetUpdateComponent } from './LSM/LockerSpecification/lsget-update/lsget-update.component';
import { BICreateComponent } from './LSM/BrandInfo/bicreate/bicreate.component';
import { VICreateComponent } from './LSM/VendorInfo/vicreate/vicreate.component';

const routes: Routes = [
    { path: 'Home',  component: HomeComponent },
    { path: 'signUp', component: SignUpComponent },
    { path: 'signIn', component: SignInComponent },
    { path: 'DrawerAllocate',
    children:[
      { path: 'Create',  component: CreateComponent },
      { path: 'Update-Get',  component: UpdateGetComponent },
    ],
    },
    { path: 'DrawerRelease',
    children:[
      { path: 'Create',  component: DLCreateComponent },
      { path: 'Update-Get',  component: DLGetUpdateComponent },
    ],
    },
    { path: 'LockerSpecification',
    children:[
      { path: 'Create',  component: LSCreateComponent },
      { path: 'Update-Get',  component: LSGetUpdateComponent },
    ],
    },
    { path: 'BrandInfo',
    children:[
      { path: 'Create',  component: BICreateComponent },
      // { path: 'Update-Get',  component: LSGetUpdateComponent },
    ],
    },
    { path: 'VendorInfo',
    children:[
      { path: 'Create',  component: VICreateComponent },
      // { path: 'Update-Get',  component: LSGetUpdateComponent },
    ],
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
