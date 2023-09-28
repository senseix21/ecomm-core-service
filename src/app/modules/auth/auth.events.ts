// initAuthenticationEvents.ts
import { RedisClient } from '../../../shared/redis';
import { EVENT_USER_LOGGED_IN, EVENT_USER_REGISTERED } from './auth.constants';
import { AuthService } from './auth.service';


const initAuthenticationEvents = () => {
    RedisClient.subscribe(EVENT_USER_REGISTERED, async (e: string) => {
        const data = JSON.parse(e);
        await AuthService.signUp(data);
    });

    RedisClient.subscribe(EVENT_USER_LOGGED_IN, async (e: string) => {
        const data = JSON.parse(e);
        await AuthService.signin(data);
    });

    // RedisClient.subscribe(EVENT_USER_LOGGED_OUT, async (e: string) => {
    //     const data = JSON.parse(e);
    //     // Handle the user logged out event (e.g., revoke access tokens)
    //     await AuthService.handleUserLoggedOutEvent(data);
    // });
};

export default initAuthenticationEvents;
