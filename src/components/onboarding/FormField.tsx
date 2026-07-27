import { cn } from "@/lib/cn";

export function FieldLabel({
  htmlFor,
  children,
  optional,
}: {
  htmlFor?: string;
  children: React.ReactNode;
  optional?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-1.5 block text-sm font-medium text-zinc-200"
    >
      {children}
      {optional ? (
        <span className="ml-1 font-normal text-zinc-500">(Optional)</span>
      ) : null}
    </label>
  );
}

const controlClass =
  "onboarding-field w-full rounded-lg border border-white/15 bg-brand-black px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-500 outline-none transition focus:border-brand-red/70 focus:ring-2 focus:ring-brand-red/25 disabled:cursor-not-allowed disabled:opacity-60";

export function TextInput({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(controlClass, className)} {...props} />;
}

export function TextArea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(controlClass, "min-h-28 resize-y", className)}
      {...props}
    />
  );
}

export function SelectInput({
  className,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select className={cn(controlClass, className)} {...props}>
      {children}
    </select>
  );
}

export function FieldError({ id, message }: { id?: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 text-sm text-brand-red-light" role="alert">
      {message}
    </p>
  );
}

export function SectionCard({
  title,
  children,
  className,
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "rounded-2xl border border-white/10 bg-brand-surface/90 p-5 sm:p-6",
        className,
      )}
    >
      {title ? (
        <h2 className="mb-4 text-base font-semibold text-white">{title}</h2>
      ) : null}
      {children}
    </section>
  );
}
