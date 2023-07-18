using Applications.Core.DTO;
using JobTrackr.DB.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Applications.Core
{
    public  interface IUserService
    {
        Task<AuthenticatedUser> SignUp(User user);
    }
}
