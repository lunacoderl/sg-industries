import React, { useState } from "react";
import { Send, CheckCircle2, MessageSquare, PhoneCall, AlertCircle } from "lucide-react";
import { enquirySchema, type EnquiryFormData } from "../lib/validation";
import { companyData } from "../data/company";

export const EnquiryForm: React.FC = () => {
  const [formData, setFormData] = useState<Partial<EnquiryFormData>>({
    fullName: "",
    phoneNumber: "",
    email: "",
    serviceRequired: "precision-laser-cutting",
    materialAndThickness: "",
    quantity: "",
    projectDetails: "",
    preferredContact: "whatsapp",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const result = enquirySchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    // Success flow: Format message for WhatsApp if chosen, or record locally
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      if (formData.preferredContact === "whatsapp") {
        const serviceName =
          formData.serviceRequired === "precision-laser-cutting"
            ? "Precision Laser Cutting"
            : formData.serviceRequired === "cnc-bending"
            ? "CNC Bending"
            : formData.serviceRequired === "both-cutting-and-bending"
            ? "Laser Cutting & CNC Bending"
            : "General Inquiry";

        const text = encodeURIComponent(
          `*New Enquiry for SG Industry:*\n` +
            `• *Name:* ${formData.fullName}\n` +
            `• *Phone:* ${formData.phoneNumber}\n` +
            `• *Service:* ${serviceName}\n` +
            `• *Material/Thickness:* ${formData.materialAndThickness || "Not specified"}\n` +
            `• *Quantity:* ${formData.quantity || "Not specified"}\n` +
            `• *Requirements:* ${formData.projectDetails}`
        );
        window.open(`https://wa.me/${companyData.whatsappNumber}?text=${text}`, "_blank");
      }
    }, 600);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-[#00BFA6] shadow-xl text-center space-y-5 animate-in fade-in">
        <div className="w-16 h-16 rounded-full bg-[#00BFA6]/10 text-[#00BFA6] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold font-display text-[#33205B]">
          Thank you, {formData.fullName}!
        </h3>
        <p className="text-sm text-[#33205B]/80 max-w-md mx-auto leading-relaxed">
          Your enquiry details have been prepared. If your WhatsApp tab didn't open automatically, you can also connect directly using the verified contact options below.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <a
            href={`tel:${companyData.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#33205B] text-white font-bold text-sm hover:bg-[#48307d] transition-colors"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call Workshop ({companyData.phoneDisplay})</span>
          </a>
          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                fullName: "",
                phoneNumber: "",
                email: "",
                serviceRequired: "precision-laser-cutting",
                materialAndThickness: "",
                quantity: "",
                projectDetails: "",
                preferredContact: "whatsapp",
              });
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#33205B]/20 text-[#33205B] font-bold text-sm hover:bg-[#FFF9F0]"
          >
            Submit Another Job Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl p-6 sm:p-10 border border-[#33205B]/10 shadow-xl space-y-6"
      noValidate
    >
      <div className="border-b border-[#33205B]/10 pb-4">
        <h3 className="text-xl sm:text-2xl font-bold font-display text-[#33205B]">
          Request a Quotation &amp; Feasibility Review
        </h3>
        <p className="text-xs sm:text-sm text-[#33205B]/70 mt-1">
          Share your part specifications. We review drawings and provide quick, transparent pricing.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#33205B] mb-2">
            Your Name *
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName || ""}
            onChange={handleChange}
            placeholder="e.g. Ramesh Kumar"
            className={`w-full px-4 py-3 rounded-xl border bg-[#FFF9F0]/50 text-sm focus:outline-none focus:ring-2 ${
              errors.fullName
                ? "border-red-500 focus:ring-red-200"
                : "border-[#33205B]/20 focus:border-[#FF5B45] focus:ring-[#FF5B45]/20"
            }`}
          />
          {errors.fullName && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#33205B] mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber || ""}
            onChange={handleChange}
            placeholder="e.g. 98480 12345"
            className={`w-full px-4 py-3 rounded-xl border bg-[#FFF9F0]/50 text-sm focus:outline-none focus:ring-2 ${
              errors.phoneNumber
                ? "border-red-500 focus:ring-red-200"
                : "border-[#33205B]/20 focus:border-[#FF5B45] focus:ring-[#FF5B45]/20"
            }`}
          />
          {errors.phoneNumber && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.phoneNumber}</span>
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Service Required */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#33205B] mb-2">
            Service Required *
          </label>
          <select
            name="serviceRequired"
            value={formData.serviceRequired}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-[#33205B]/20 bg-[#FFF9F0]/50 text-sm focus:outline-none focus:border-[#FF5B45] focus:ring-2 focus:ring-[#FF5B45]/20 text-[#33205B]"
          >
            <option value="precision-laser-cutting">Precision Laser Cutting</option>
            <option value="cnc-bending">CNC Bending</option>
            <option value="both-cutting-and-bending">Both Laser Cutting &amp; Bending</option>
            <option value="general-inquiry">General Inquiry</option>
          </select>
        </div>

        {/* Material & Thickness */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#33205B] mb-2">
            Material &amp; Thickness (if known)
          </label>
          <input
            type="text"
            name="materialAndThickness"
            value={formData.materialAndThickness || ""}
            onChange={handleChange}
            placeholder="e.g. Mild Steel 3mm, SS 304 2mm"
            className="w-full px-4 py-3 rounded-xl border border-[#33205B]/20 bg-[#FFF9F0]/50 text-sm focus:outline-none focus:border-[#FF5B45] focus:ring-2 focus:ring-[#FF5B45]/20"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Quantity */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#33205B] mb-2">
            Approx. Quantity
          </label>
          <input
            type="text"
            name="quantity"
            value={formData.quantity || ""}
            onChange={handleChange}
            placeholder="e.g. 1 Prototype / 50 Batch"
            className="w-full px-4 py-3 rounded-xl border border-[#33205B]/20 bg-[#FFF9F0]/50 text-sm focus:outline-none focus:border-[#FF5B45] focus:ring-2 focus:ring-[#FF5B45]/20"
          />
        </div>

        {/* Preferred Contact Method */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#33205B] mb-2">
            Preferred Contact Method
          </label>
          <div className="grid grid-cols-2 gap-3">
            <label
              className={`flex items-center justify-center gap-2 px-3 py-3 rounded-xl border text-xs font-bold cursor-pointer transition-colors ${
                formData.preferredContact === "whatsapp"
                  ? "bg-[#00BFA6]/10 border-[#00BFA6] text-[#33205B]"
                  : "bg-[#FFF9F0]/50 border-[#33205B]/20 text-[#33205B]/70"
              }`}
            >
              <input
                type="radio"
                name="preferredContact"
                value="whatsapp"
                checked={formData.preferredContact === "whatsapp"}
                onChange={handleChange}
                className="hidden"
              />
              <MessageSquare className="w-4 h-4 text-[#00BFA6]" />
              <span>WhatsApp</span>
            </label>
            <label
              className={`flex items-center justify-center gap-2 px-3 py-3 rounded-xl border text-xs font-bold cursor-pointer transition-colors ${
                formData.preferredContact === "phone"
                  ? "bg-[#FF5B45]/10 border-[#FF5B45] text-[#33205B]"
                  : "bg-[#FFF9F0]/50 border-[#33205B]/20 text-[#33205B]/70"
              }`}
            >
              <input
                type="radio"
                name="preferredContact"
                value="phone"
                checked={formData.preferredContact === "phone"}
                onChange={handleChange}
                className="hidden"
              />
              <PhoneCall className="w-4 h-4 text-[#FF5B45]" />
              <span>Phone Call</span>
            </label>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-[#33205B] mb-2">
          Part or Requirement Details *
        </label>
        <textarea
          name="projectDetails"
          rows={3}
          value={formData.projectDetails || ""}
          onChange={handleChange}
          placeholder="Describe the shape, dimensions, or drawing availability (e.g., DXF ready, needs 90 degree flanges, hole patterns)..."
          className={`w-full px-4 py-3 rounded-xl border bg-[#FFF9F0]/50 text-sm focus:outline-none focus:ring-2 ${
            errors.projectDetails
              ? "border-red-500 focus:ring-red-200"
              : "border-[#33205B]/20 focus:border-[#FF5B45] focus:ring-[#FF5B45]/20"
          }`}
        ></textarea>
        {errors.projectDetails && (
          <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{errors.projectDetails}</span>
          </p>
        )}
      </div>

      {/* Submit Action */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 rounded-2xl bg-[#FF5B45] text-white font-extrabold text-base tracking-wide hover:bg-[#ff452b] transition-all duration-200 shadow-lg shadow-[#FF5B45]/30 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99] disabled:opacity-50"
      >
        <Send className="w-5 h-5" />
        <span>{isSubmitting ? "Processing Enquiry..." : "Send Job Enquiry"}</span>
      </button>

      <p className="text-[11px] text-center text-[#33205B]/60">
        We respect your privacy. Technical drawings shared are kept confidential and used solely for estimating your project.
      </p>
    </form>
  );
};
