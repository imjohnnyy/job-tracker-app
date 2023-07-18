

using System.Runtime.Serialization;

namespace Applications.Core.UserExceptions
{
    public class DuplicateUsernameException : Exception
    {
        public DuplicateUsernameException()
        {
        }

        public DuplicateUsernameException(string? message) : base(message)
        {
        }

        public DuplicateUsernameException(string? message, Exception? innerException) : base(message, innerException)
        {
        }

        protected DuplicateUsernameException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}
