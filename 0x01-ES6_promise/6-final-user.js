import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  // Call the two functions with the necessary arguments
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
  .then(results => results.map(result => {
    return{
    status: result.status,
    value: result.status === 'fulfilled' ? result.value : String(result.reason)
    };
  }));
}
