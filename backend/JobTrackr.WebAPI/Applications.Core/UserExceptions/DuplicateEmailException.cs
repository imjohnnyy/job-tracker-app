

using System.Runtime.Serialization;

namespace Applications.Core.UserExceptions
{
    public class DuplicateEmailException : Exception
    {
        public DuplicateEmailException()
        {
        }

        public DuplicateEmailException(string? message) : base(message)
        {
        }

        public DuplicateEmailException(string? message, Exception? innerException) : base(message, innerException)
        {
        }

        protected DuplicateEmailException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}
