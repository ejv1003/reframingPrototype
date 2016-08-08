/*-----------------------------------------------------------------------------
    GLOBAL FUNCTION OUTLINE
    search "##{functionName}" for any of the templateNames listed below to eas-
    ily find it's code and a more detailed description

   redirect:        state machine
   user:            shortcut to get access to a user
   isV1:            boolean returns true if user is participating in version/
                        condition 1
   isV2:            boolean returns true if user is participating in version/
                        condition 2
   isV3:            boolean returns true if user is participating in version/
                        condition 3
------------------------------------------------------------------------------*/

//##redirect
//state machine for navigation
//provide the user's state and it will send you to the next phase
//TODO: instead of incrementing state on the continue click,
//  increment here
redirect = function(currentState){
    switch(currentState){
        case "1":
            Router.go("consent",{userID: Router.current().params.userID})
            break;
        case "2":
            Router.go("instructions",{userID: Router.current().params.userID})
            break;
        case "3.Version1":
            Router.go("Version1",{userID: Router.current().params.userID})
            break;
        case "3.Version2":
            Router.go("Version2",{userID: Router.current().params.userID})
            break;
        case "3.Version3":
            Router.go("Version3",{userID: Router.current().params.userID})
            break;
        case "4.Version1":
            Router.go("Version1",{userID: Router.current().params.userID})
            break;
        case "4.Version2":
            Router.go("Version2",{userID: Router.current().params.userID})
            break;
        case "4.Version3":
            Router.go("Version3",{userID: Router.current().params.userID})
            break;
        case "5.Version1":
            Router.go("activity1",{userID: Router.current().params.userID})
            break;
        case "5.Version2":
            Router.go("activity2",{userID: Router.current().params.userID})
            break;
        case "5.Version3":
            Router.go("activity3",{userID: Router.current().params.userID})
            break;
        case "6.Version1":
            Router.go("activity1",{userID: Router.current().params.userID})
            break;
        case "6.Version2":
            Router.go("activity2",{userID: Router.current().params.userID})
            break;
        case "6.Version3":
            Router.go("activity3",{userID: Router.current().params.userID})
            break;
        case "7.Version1":
            Router.go("survey",{userID: Router.current().params.userID})
            break;
        case "7.Version2":
            Router.go("survey",{userID: Router.current().params.userID})
            break;
        case "7.Version3":
            Router.go("survey",{userID: Router.current().params.userID})
            break;
        case "8":
            Router.go("Finish",{userID: Router.current().params.userID})
            break;
        case "9":
            Router.go("NoParticipation",{userID: Router.current().params.userID})
            break;
        default:
            Router.go("signin",{userID: Router.current().params.userID})
            break;

    }
};

/*
    ##user
    shortcut to get access to a user, usually the current user
    in: userID
    out: user from myUsers collection
*/
user = function(param){
    return MyUsers.find({_id: param}).fetch()[0];
}

/*
    ##isV1
    returns true if user is participating in version/condition 1
*/
isV1 = function(user){
    user = MyUsers.find({_id: user}).fetch()[0];
    if(user.state.substring(2) == "Version1"){
        return true;
    }
    else{
        return false;
    }
};

/*
    ##isV2
    returns true if user is participating in version/codnition 2
*/
isV2 = function(user){
    user = MyUsers.find({_id: user}).fetch()[0];
    if(user.state.substring(2) == "Version2"){
        return true;
    }
    else{
        return false;
    }
};

/*
    ##isV3
    returns true if user is participating in version/condition 3
*/
isV3 = function(user){
    user = MyUsers.find({_id: user}).fetch()[0];
    if(user.state.substring(2) == "Version3"){
        return true;
    }
    else{
        return false;
    }
};
