import React, { useState } from "react";

const ContactContent: React.FC = () => {
  const [contactMethod, setContactMethod] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    setIsSending(true);

    // Simulate sending
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setMessage("");

      // Reset after showing success
      setTimeout(() => {
        setIsSent(false);
        setContactMethod(null);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-yellow-400">Contact Information</h2>

      {!contactMethod ? (
        <>
          <p className="mb-4">
            Feel free to reach out through any of the following channels:
          </p>

          <div className="space-y-3">
            <button
              onClick={() => setContactMethod("email")}
              className="block w-full px-4 py-2 text-left border border-gray-700 rounded hover:bg-gray-800"
            >
              <span className="text-pink-400">1.</span> Email
            </button>

            <button
              onClick={() => setContactMethod("linkedin")}
              className="block w-full px-4 py-2 text-left border border-gray-700 rounded hover:bg-gray-800"
            >
              <span className="text-pink-400">2.</span> LinkedIn
            </button>

            <button
              onClick={() => setContactMethod("github")}
              className="block w-full px-4 py-2 text-left border border-gray-700 rounded hover:bg-gray-800"
            >
              <span className="text-pink-400">3.</span> GitHub
            </button>

            <button
              onClick={() => setContactMethod("message")}
              className="block w-full px-4 py-2 text-left border border-gray-700 rounded hover:bg-gray-800"
            >
              <span className="text-pink-400">4.</span> Leave a message
            </button>
          </div>
        </>
      ) : contactMethod === "email" ? (
        <div className="p-4 border border-gray-700 rounded">
          <h3 className="text-lg font-semibold mb-2">Email</h3>
          <p className="mb-2">You can reach me at:</p>
          <a
            href="mailto:your.email@example.com"
            className="text-blue-400 hover:underline"
          >
            your.email@example.com
          </a>
          <button
            onClick={() => setContactMethod(null)}
            className="mt-4 px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded text-sm"
          >
            Back
          </button>
        </div>
      ) : contactMethod === "linkedin" ? (
        <div className="p-4 border border-gray-700 rounded">
          <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
          <p className="mb-2">Connect with me on LinkedIn:</p>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            linkedin.com/in/yourusername
          </a>
          <button
            onClick={() => setContactMethod(null)}
            className="mt-4 px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded text-sm"
          >
            Back
          </button>
        </div>
      ) : contactMethod === "github" ? (
        <div className="p-4 border border-gray-700 rounded">
          <h3 className="text-lg font-semibold mb-2">GitHub</h3>
          <p className="mb-2">Check out my code on GitHub:</p>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            github.com/yourusername
          </a>
          <button
            onClick={() => setContactMethod(null)}
            className="mt-4 px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded text-sm"
          >
            Back
          </button>
        </div>
      ) : (
        <div className="p-4 border border-gray-700 rounded">
          <h3 className="text-lg font-semibold mb-2">Leave a Message</h3>

          {isSent ? (
            <div className="text-pink-400 mb-4">
              Message sent successfully! I'll get back to you soon.
            </div>
          ) : (
            <>
              <p className="mb-2">Type your message below:</p>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full h-32 p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-pink-500 text-white resize-none"
                placeholder="Your message here..."
              ></textarea>

              <div className="mt-2 flex space-x-2">
                <button
                  onClick={handleSendMessage}
                  disabled={isSending || !message.trim()}
                  className={`px-4 py-2 rounded ${
                    isSending || !message.trim()
                      ? "bg-gray-700 cursor-not-allowed"
                      : "bg-pink-700 hover:bg-pink-600"
                  }`}
                >
                  {isSending ? "Sending..." : "Send"}
                </button>

                <button
                  onClick={() => setContactMethod(null)}
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded"
                >
                  Back
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ContactContent;
