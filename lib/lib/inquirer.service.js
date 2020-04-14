"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const questions = [
//     {
//       type : 'input',
//       name : 'firstname',
//       message : 'Enter firstname ...'
//     },
//     {
//       type : 'input',
//       name : 'lastname',
//       message : 'Enter lastname ...'
//     },
//     {
//       type : 'input',
//       name : 'phone',
//       message : 'Enter phone number ...'
//     },
//     {
//       type : 'input',
//       name : 'email',
//       message : 'Enter email address ...'
//     }
//   ];
// class InquirerService {
//     askCredentials() {
//         const questionss = [
//             {
//                 name: 'email',
//                 type: 'input',
//                 message: MESSAGES.ASK_EMAIL,
//                 validate: (value: string) => {
//                     if (value.length) {
//                         return true;
//                     } else {
//                         return MESSAGES.ASK_EMAIL_ERR;
//                     }
//                 }
//             },
//             {
//                 name: 'password',
//                 type: 'password',
//                 message: MESSAGES.ASK_PWD,
//                 validate: (value: string) => {
//                     if (value.length) {
//                         return true;
//                     } else {
//                         return MESSAGES.ASK_PWD_ERR;
//                     }
//                 }
//             }
//         ];
//         return prompt(questions).then((creds) => {
//             console.log(creds);
//         });
//     }
// }
// export const inquirerService = new InquirerService();
var inquirer = require('inquirer');
module.exports = {
    askGithubCredentials: function () {
        var questions = [
            {
                name: 'username',
                type: 'input',
                message: 'Enter your GitHub username or e-mail address:',
                validate: function (value) {
                    if (value.length) {
                        return true;
                    }
                    else {
                        return 'Please enter your username or e-mail address.';
                    }
                }
            },
            {
                name: 'password',
                type: 'password',
                message: 'Enter your password:',
                validate: function (value) {
                    if (value.length) {
                        return true;
                    }
                    else {
                        return 'Please enter your password.';
                    }
                }
            }
        ];
        return inquirer.prompt(questions);
    },
};
