// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	// namespace App {
	// 	// interface Error {}
	// 	// interface Locals {}
	// 	// interface PageData {}
	// 	// interface PageState {}
	// 	// interface Platform {}

		
	// }

	interface Window {
		Android: {
		  track?: (stringifiedObj: string) => void
		  trackInNr: (stringifiedObj: string) => void
		  showToast
		  showSuccess
		  trackEvent: (stringifiedObj: string) => void
		  fetchSms
		  enableBackHandling
		  startEmailAuth
		  redirect
		  close
		}
		webkit: {
		  messageHandlers?: {
			track: {
			  postMessage: (object: object) => void
			}
			trackEvent: {
			  postMessage: (object: object) => void
			}
			trackInNr: {
			  postMessage: (object: object) => void
			}
			showToast: {
			  postMessage
			}
			showSuccess: {
			  postMessage
			}
			startEmailAuth: {
			  postMessage
			}
			redirect: {
			  postMessage
			}
			close: {
			  postMessage
			}
		  }
		}
		activate_ind_assure_success?: (
		  email: string,
		  token: string,
		) => void
		activate_ind_assure_failure?: () => void
		onBackPressed: () => void
		/*data is stringified version of { 
		reason: string, 
		list: { smsBody: string, smsSender: string, smsTimeInMillis: string }[],
		permissionAsked: true // when user is shown SMS permission prompt
	  }
	  */
		// list of reasons: "Failure: No SMS permission" / "Failure: No SMS found" / "Failure: SMS to json conversion exception"
		// "Failure: Failure: Unknown - $exception"
		onSmsFetched: (data: string) => void
		analytics?: {
		  track: (eventName: string, payload?) => void
		}
		sentry: {
		  initializeSentry: () => void
		  addBreadcrumbToSentry: (
			eventName: string,
			payload?: object,
		  ) => void
		  logErrorToSentry: (
			error: Error,
			origin: string,
		  ) => void
		  setUserToSentry: (user: { id: string }) => void
		}
		webviewLoadStartTime: number
	  }
}

export {};
