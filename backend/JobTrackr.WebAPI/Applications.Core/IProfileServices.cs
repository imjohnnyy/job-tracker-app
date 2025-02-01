using Applications.Core.DTO;

namespace Applications.Core
{
    public interface IProfileServices
    {
        Profile GetProfile(string email);
        Profile UpdateProfile(Profile profile);
    }
}
