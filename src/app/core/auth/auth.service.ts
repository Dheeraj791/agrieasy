import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";
import { AuthUtils } from "app/core/auth/auth.utils";

@Injectable()
export class AuthService {
  // Private
  private _authenticated: boolean;

  // API base url
  // private _baseUrl = "http://teczire.com:65530/api/v1/";
  private _baseUrl = "http://localhost:3001/api/v1/";

  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {
    // Set the defaults
    this._authenticated = false;
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * Setter & getter for access token
   */
  set accessToken(token: string) {
    localStorage.setItem("access_token", token);
  }

  get accessToken(): string {
    return localStorage.getItem("access_token");
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Sign in
   *
   * @param credentials
   */
  signIn(credentials): Observable<any> {
    // Throw error, if the user is already logged in
    if (this._authenticated) {
      return throwError("User is already logged in.");
    }

    return this._httpClient
      .post(this._baseUrl + "user_login", credentials)
      .pipe(
        switchMap((response: any) => {
          //
          if (response.hasOwnProperty("status")) {
            if (response.status) {
              // Store the access token in the local storage
              this.accessToken = response.token;

              // Store the basic user data in local storage
              window.localStorage.setItem(
                "user_data",
                JSON.stringify(response.data)
              );

              // Set the authenticated flag to true
              this._authenticated = true;
            }
          } else {
            this.accessToken = response.token;

            // Store the basic user data in local storage
            window.localStorage.setItem(
              "user_data",
              JSON.stringify(response.data)
            );

            // Set the authenticated flag to true
            this._authenticated = true;
          }
          // Return a new observable with the response
          return of(response);
        })
      );
  }

  /**
   * Sign in using the access token
   */
  signInUsingToken(): Observable<any> {
    // Renew token
    // return this._httpClient.post('api/auth/refresh-access-token', {
    //     access_token: this.accessToken
    // }).pipe(
    //     catchError(() => {

    //         // Return false
    //         return of(false);
    //     }),
    //     switchMap((response: any) => {

    // Store the access token in the local storage
    this.accessToken = window.localStorage.getItem("access_token");

    // Set the authenticated flag to true
    this._authenticated = true;

    // Return true
    return of(true);
    // })
    // );
  }

  /**
   * Sign out
   */
  signOut(): Observable<any> {
    // Remove the access token from the local storage
    localStorage.removeItem("access_token");

    // clear user data
    localStorage.removeItem("user_data");

    // Set the authenticated flag to false
    this._authenticated = false;

    // Return the observable
    return of(true);
  }

  /**
   * Check the authentication status
   */
  check(): Observable<boolean> {
    // Check if the user is logged in
    if (this._authenticated) {
      return of(true);
    }

    // Check the access token availability
    if (!this.accessToken) {
      return of(false);
    }

    // Check the access token expire date
    if (AuthUtils.isTokenExpired(this.accessToken)) {
      return of(false);
    }

    // If the access token exists and it didn't expire, sign in using it
    return this.signInUsingToken();
  }
}
