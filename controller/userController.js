import {userList} from '../model/modeluser.js'

export function handleUser(req,resp){
    const userMod = userList();

    resp.render('usersAdd',{users:userMod});
}