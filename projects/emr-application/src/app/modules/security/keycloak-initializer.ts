import { KeycloakOptions, KeycloakService } from 'keycloak-angular';
import { environment } from 'projects/emr-application/src/environments/environment';
export function initializer(keycloak: KeycloakService): () => Promise<boolean> {

    const options: KeycloakOptions = {
      config : environment.keycloak,
      loadUserProfileAtStartUp: false,
      initOptions: {
          onLoad: 'check-sso',
          // onLoad: 'login-required',
          checkLoginIframe: false
      },
      bearerExcludedUrls: []
    };

    return () => keycloak.init(options);
}