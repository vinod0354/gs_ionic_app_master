import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { PubsubService } from './pubsub.service';
// import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  private baseUrl: string = 'http://dev-goalshaper-server.azurewebsites.net';



constructor(private http: HttpClient) { }

/***** Login User *****/
login(objUser: any): Observable<HttpResponse<any>> {
  let URL = this.baseUrl + '/gs/auth/login';
  console.log(URL);
  return this.http.post<any>(URL, objUser, { observe: 'response' });
}

/***** Change Password *****/
changePassword(body): Observable<HttpResponse<any>> {
  let url = this.baseUrl + '/gs/user/changePassword';
  return this.http.post<any>(url, body,{ observe: 'response' });
}

/***** Catagories *****/
getCatagories(userId,enterpriseId):Observable<HttpResponse<any>> {
  let URL = this.baseUrl + '/gs/actions/categories/' + userId + '/' + enterpriseId + '';
  console.log(URL);
  return this.http.get<any>(URL, {observe: 'response' });
}

updateCategory(categoryId,jsonbody):Observable<HttpResponse<any>> {
  // http://dev-goalshaper-server.azurewebsites.net/gs/actions/categories/2
  let URL = this.baseUrl + '/gs/actions/categories/' + categoryId +'';
  console.log(URL);
  return this.http.put<any>(URL,jsonbody, {observe: 'response' });
}

/***** Goals and Objectives *****/
getAllGoalsObjectives(userId,enterpriseId):Observable<HttpResponse<any>> {
  let URL = this.baseUrl + '/gs/actions/categories/' + userId + '/' + enterpriseId + '';
  console.log(URL);
  return this.http.get<any>(URL, {observe: 'response' });
}

getGoals(userId,enterpriseId):Observable<HttpResponse<any>> {
  // https://dev-goalshaper-server.azurewebsites.net/gs/goals/all/5?userId=41
  let URL = this.baseUrl + '/gs/goals/all/' + enterpriseId + '?userId=' + userId + '';
  console.log(URL);
  return this.http.get<any>(URL, {observe: 'response' });
}

getObjectives(userId,enterpriseId):Observable<HttpResponse<any>> {
  // https://dev-goalshaper-server.azurewebsites.net/gs/objectives/all/5?userId=41
  let URL = this.baseUrl + '/gs/objectives/all/' + enterpriseId + '?userId=' + userId + '';
  console.log(URL);
  return this.http.get<any>(URL, {observe: 'response' });
}

/* Goal Types */
getGoalTypes(enterpriseId):Observable<HttpResponse<any>> {
  // https://dev-goalshaper-server.azurewebsites.net/gs/goals/types/1
  let URL = this.baseUrl + '/gs/goals/types/' + enterpriseId + '';
  console.log(URL);
  return this.http.get<any>(URL, {observe: 'response' });
}

/* Goal Levels */
getGoalLevels(enterpriseId):Observable<HttpResponse<any>> {
  // https://dev-goalshaper-server.azurewebsites.net/gs/goals/levels/1
  let URL = this.baseUrl + '/gs/goals/levels/' + enterpriseId + '';
  console.log(URL);
  return this.http.get<any>(URL, {observe: 'response' });
}

/* Goal Creation */
createGoal(objUser):Observable<HttpResponse<any>> {
  // https://dev-goalshaper-server.azurewebsites.net/gs/goals
  let URL = this.baseUrl + '/gs/goals';
  console.log(URL);
  return this.http.post<any>(URL, objUser, { observe: 'response' });
}

/* Objective Creation */
createObjective(objUser):Observable<HttpResponse<any>> {
  // https://dev-goalshaper-server.azurewebsites.net/gs/objectives
  let URL = this.baseUrl + '/gs/objectives';
  console.log(URL);
  return this.http.post<any>(URL, objUser, { observe: 'response' });
}

/* Milestone Creation */
createMilestones(objUser):Observable<HttpResponse<any>> {
  console.log("called api");
// https://dev-goalshaper-server.azurewebsites.net/gs/goals/milestones
  let URL = this.baseUrl + '/gs/goals/milestones';
  console.log(URL);
  return this.http.post<any>(URL, objUser, { observe: 'response' });
}


/* Goal Updation */
updateGoal(goalId,objUser):Observable<HttpResponse<any>> {
  // https://dev-goalshaper-server.azurewebsites.net/gs/goals/11111
  let URL = this.baseUrl + '/gs/goals/' + goalId + '';
  console.log(URL);
  return this.http.put<any>(URL, objUser, { observe: 'response' });
}

/* Objective Updation */
updateObjective(objectiveId,objUser):Observable<HttpResponse<any>> {
  // https://dev-goalshaper-server.azurewebsites.net/gs/objectives/111
  let URL = this.baseUrl + '/gs/objectives/' + objectiveId + '';
  console.log(URL);
  return this.http.put<any>(URL, objUser, { observe: 'response' });
}

/* Get Milestones */
// getmilestones(enterpriseId,goalId):Observable<HttpResponse<any>> {
//   let URL = this.baseUrl + '/gs/goals/goals/' + enterpriseId + '/' +goalId+ '';
//   console.log(URL);
//   return this.http.get<any>(URL, { observe: 'response' });
// }


// Update Milestones.
updateMilestones(milestoneNum,objUser): Observable<HttpResponse<any>>{
  // https://dev-goalshaper-server.azurewebsites.net/gs/goals/milestones/111
  let URL = this.baseUrl + '/gs/goals/milestones/' + milestoneNum + '';
  console.log(URL);
  return this.http.put<any>(URL,objUser, {observe: 'response' });
}

// Delete Goals
deleteGoal(enterpriseId,goalId): Observable<HttpResponse<any>>{
  // https://dev-goalshaper-server.azurewebsites.net/gs/goals/1111/2222
  let URL = this.baseUrl + '/gs/goals/' + enterpriseId + '/' +goalId+ '';
  console.log(URL);
  return this.http.delete<any>(URL, { observe: 'response' });
}

deleteMilestoneOfGoal(enterpriseId,goalId,milestoneNum): Observable<HttpResponse<any>>{
  // https://dev-goalshaper-server.azurewebsites.net/gs/goals/milestone/11111/11111/111111
  let URL = this.baseUrl + '/gs/goals/milestone/' + enterpriseId + '/' +goalId+ '/' +milestoneNum+ '/';
  console.log(URL);
  return this.http.delete<any>(URL, { observe: 'response' });
}

deleteObjective(enterpriseId,objectiveId): Observable<HttpResponse<any>>{
  // https://dev-goalshaper-server.azurewebsites.net/gs/objectives/11111/1111
  let URL = this.baseUrl + '/gs/objectives/' + enterpriseId + '/' +objectiveId+ '';
  console.log(URL);
  return this.http.delete<any>(URL, { observe: 'response' });
}



// Profile Update
updateUserProfile(userId,objUser): Observable<HttpResponse<any>>{
  let URL = this.baseUrl + '/gs/user/update/' + userId + '';
  console.log(URL);
  return this.http.put<any>(URL,objUser, {observe: 'response' });
}

















    

 // Actions

//  "getCategories":"/gs/actions/categories/{enterprise_id}/{user_id}",
//  "getActions":"/gs/actions/{enterprise_id}/{user_id}/{category_id}",
//  "getPriorities":"{enterprise_id}",
//  "createActions":"/gs/actions",
//  "updateActions":"/gs/actions/{action_id}",
//  "deleteActions":"/gs/actions/{enterprise_id}/{action_id}",

//    //Actions
//    this.getCategoriesUrl=this.baseURL + this.apiConfig.actions.getCategories;
//    this.getActionsUrl=this.baseURL + this.apiConfig.actions.getActions;
//    this.getActionPrioritiesUrl = this.baseURL + this.apiConfig.actions.getPriorities;
//    this.createActionsUrl = this.baseURL + this.apiConfig.actions.createActions;
//    this.updateActionsUrl = this.baseURL + this.apiConfig.actions.updateActions;
//    this.deleteACtionsUrl = this.baseURL + this.apiConfig.actions.deleteActions;



  // 1. Get Actions per category.
  getActions(enterpriseId, userId, categoryId): Observable<HttpResponse<any>>{
    let URL = this.baseUrl + '/gs/actions/' + enterpriseId + '/'+ userId + '/' + categoryId;
    console.log(URL);
    return this.http.get<any>(URL, {observe: 'response' });
  }

  // 2. Create Actions
  createActions(data): Observable<HttpResponse<any>>{
    let URL = this.baseUrl + '/gs/actions';
    console.log(data);
    console.log(URL);
    return this.http.post<any>(URL, data, { observe: 'response' });
  }

 // 2. Update Actions
 updateActions(data, actionId): Observable<HttpResponse<any>>{
  let URL = this.baseUrl + '/gs/actions/'+ actionId;
  console.log(data);
  console.log(URL);
  return this.http.put<any>(URL,data, {observe: 'response' });
}

// 2. Delete Actions
deleteActions(enterpriseId, actionId): Observable<HttpResponse<any>>{
  let URL = this.baseUrl + '/gs/actions/'+ enterpriseId +'/'+actionId;
  console.log(URL);
  return this.http.delete<any>(URL, {observe: 'response' });
}

 // 1. Get Priorities.
 getPriorities(enterpriseId): Observable<HttpResponse<any>>{
  let URL = this.baseUrl + '/gs/actions/priorities/' + enterpriseId ;
  console.log(URL);
  return this.http.get<any>(URL, {observe: 'response' });
}

// 1. Get Priorities.
getMilestones(enterpriseId,goalId): Observable<HttpResponse<any>>{
  let URL = this.baseUrl + '/gs/goals/milestones/' + enterpriseId +'/'+ goalId;
  console.log(URL);
  return this.http.get<any>(URL, {observe: 'response' });
}



// /*********  Change Password API ********/
// ChangePassword(jsonBody):Observable<HttpResponse<any>> {
//   let URL = this.baseUrl + 'reset_keycopassword';
//   URL = this.getFinalURL('NEW', URL, '', 'OPEN');
//   console.log("Change Password Api : ");
//   console.log(URL);
//   return this.httpClient.put<any>(URL,jsonBody, {observe: 'response' });
// }


// /******** Generate forgot password ********/
// generateForgotPassword(emailwithcustom):Observable<HttpResponse<any>> {
//   const headers = {
//     'content-type':'application/json'
//   };
//   let URL = this.baseUrl + 'update_keycopassword?user_name=' + emailwithcustom;
//   URL = this.getFinalURL('NEW', URL, '', 'OPEN');
//   console.log("Generate forgot password : ");
//   console.log(URL);
//   return this.httpClient.put<any>(URL,'', { headers: headers,observe: 'response' });
// }


// /******** Send forgot password Email ********/
// sendForgotPasswordMail(jsonbody):Observable<HttpResponse<any>> {
//   const headers = {
//     'content-type':'application/json'
//   };
//   let URL = 'http://support.solu-m.com:9595/iot/api/keyco/send/mail';
//   console.log("Send forgot password to user mail : ");
//   console.log(URL);
//   console.log(jsonbody);
//   return this.httpClient.post<any>(URL,jsonbody, { headers: headers,observe: 'response' });
// }

        
}
