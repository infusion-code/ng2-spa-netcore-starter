using System.Threading.Tasks;

namespace Infusion.ServerSentEvents
{
    /// <summary>
    /// Contract for client listening for Server-Sent Events
    /// </summary>
    public interface IServerSentEventsClient
    {
        /// <summary>
        /// Sends event to client.
        /// </summary>
        /// <param name="text">The simple text event.</param>
        /// <returns>The task object representing the asynchronous operation.</returns>
        Task SendEventAsync(string text);

        /// <summary>
        /// Sends event to client.
        /// </summary>
        /// <param name="serverSentEvent">The event.</param>
        /// <returns>The task object representing the asynchronous operation.</returns>
        Task SendEventAsync(ServerSentEvent serverSentEvent);
    }
}