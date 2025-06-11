import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessagesSquare,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "../lib/utils";
import toast from "react-hot-toast";
import { useState } from "react";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formsubmit.co/muhammednoushad202@gmail.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        }
      );

      const data = await response.json();

      console.log(response.status); // 200? 400? 500?
      console.log(await response.text());

      if (data.success === "true") {
        toast.success(
          "Thanks for reaching out! I'll get back to you as soon as I can."
        );
        form.reset();
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    } catch (error) {
      toast.error("Network error. Please check your internet.");
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contacts" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center ">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          If you have any questions or would like to work together, feel free to
          reach out. I'm always open to new opportunities and collaborations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>

                <div className="text-start">
                  <h4>Email</h4>
                  <a
                    className="text-muted-foreground hover:text-primary transition-colors"
                    href="mailto:muhammednoushad202@gmail.com"
                  >
                    muhammednoushad202@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>

                <div className="text-start">
                  <h4>Phone</h4>
                  <a
                    className="text-muted-foreground hover:text-primary transition-colors"
                    href="tel:+91 9633940274"
                  >
                    +91 9633940274
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>

                <div className="text-start">
                  <h4>location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Kerala, India
                  </a>
                </div>
              </div>
            </div>

            <div className="p-8">
              <h4>Connect with me</h4>

              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/muhammednoushad/"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://www.instagram.com/muhammed_noushad?igsh=bWI2a3M4OXdiZjI3"
                  target="_blank"
                >
                  <Instagram />
                </a>
                <a href="https://wa.me/919633940274" target="_blank">
                  <MessagesSquare />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>

            <form
              action="https://formsubmit.co/muhammednoushad202@gmail.com"
              method="POST"
              target="hidden_iframe"
              onSubmit={() =>
                toast.success("Thanks! Form submitted successfully.")
              }
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="john.doe@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hi, I'm interested in working with you. Let's have a chat!"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>

            <iframe name="hidden_iframe" style={{ display: "none" }}></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
