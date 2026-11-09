import { useState } from 'react';
import { Send } from 'lucide-react';

const ContactSection = () => {
  const [selectedService, setSelectedService] = useState('Luar Negeri');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const services = ['Luar Negeri', 'Dalam Negeri', 'Satuan', 'Borongan'];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ service: selectedService, ...formData });
  };

  return (
    <section className="relative w-full py-16 md:py-24 flex items-center justify-center font-sf overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full flex flex-col items-center">
        
        {/* Form Card Container */}
        <div className="w-full max-w-xl bg-white rounded-2xl md:rounded-3xl shadow-2xl border border-gray-100 p-6 md:p-8">
          
          {/* Top Window Bar (Dots + Recipient) */}
          <div className="flex items-center justify-between pb-6 border-b border-gray-100 mb-6">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400 block" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 block" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 block" />
            </div>

            <div className="flex items-center gap-2 text-xs font-medium text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full">
              <span>To :</span>
              <span className="font-semibold text-gray-800">Saputra</span>
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                alt="Avatar"
                className="w-5 h-5 rounded-full object-cover ml-1"
              />
            </div>
          </div>

          {/* Form Utama */}
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Services Chips */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2.5">
                Services
              </label>
              <div className="flex flex-wrap gap-2">
                {services.map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                      selectedService === service
                        ? 'bg-[#153e25] text-white shadow-sm'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Name */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="w-full px-4 py-3 text-xs md:text-sm bg-white border border-gray-200 rounded-xl outline-none focus:border-[#153e25] focus:ring-1 focus:ring-[#153e25] transition-all placeholder:text-gray-300"
              />
            </div>

            {/* Input Email */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                required
                className="w-full px-4 py-3 text-xs md:text-sm bg-white border border-gray-200 rounded-xl outline-none focus:border-[#153e25] focus:ring-1 focus:ring-[#153e25] transition-all placeholder:text-gray-300"
              />
            </div>

            {/* Input Message */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                className="w-full px-4 py-3 text-xs md:text-sm bg-white border border-gray-200 rounded-xl outline-none focus:border-[#153e25] focus:ring-1 focus:ring-[#153e25] transition-all placeholder:text-gray-300 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="bg-[#153e25] hover:bg-[#0f2e1b] text-white px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold inline-flex items-center gap-2 transition-all shadow-md active:scale-95"
              >
                <Send className="w-3.5 h-3.5 rotate-45" />
                <span>Send Message</span>
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;