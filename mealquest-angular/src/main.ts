import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// ✅ Füge das hier hinzu
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),   // <-- FIX
    ...appConfig.providers // (falls vorhanden)
  ]
});
